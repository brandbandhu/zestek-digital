const DEFAULT_SPREADSHEET_ID = "1nLqPoigEEJp2C4oRX2xMCz9YMS0Ta9B6P06tOvLfY2c";
const DEFAULT_SHEET_NAME = "Sheet1";
const DEFAULT_WEB3FORMS_ACCESS_KEY = "bf152788-d2f6-42f1-a1a1-5ed0d8d24832";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type LeadFieldValue = string | number | boolean | null | undefined | string[] | number[];
export type LeadFieldMap = Record<string, LeadFieldValue>;

type GoogleSheetsSubmission = {
  formId: string;
  formName: string;
  pagePath: string;
  pageUrl?: string;
  fields: LeadFieldMap;
  context?: LeadFieldMap;
};

const toDisplayValue = (value: LeadFieldValue) => {
  if (value === null || value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean).join(", ");
  }

  return String(value).trim();
};

const toDisplayMap = (record: LeadFieldMap) =>
  Object.fromEntries(Object.entries(record).map(([key, value]) => [key, toDisplayValue(value)]));

const withKeyPrefix = (record: Record<string, string>, prefix: string) =>
  Object.fromEntries(Object.entries(record).map(([key, value]) => [`${prefix}${key}`, value]));

export const formDataToFields = (formData: FormData) => {
  const fields: Record<string, string> = {};

  formData.forEach((value, key) => {
    const nextValue = typeof value === "string" ? value.trim() : "";

    if (!nextValue) {
      return;
    }

    if (fields[key]) {
      fields[key] = `${fields[key]}, ${nextValue}`;
      return;
    }

    fields[key] = nextValue;
  });

  return fields;
};

export const isGoogleSheetsConfigured = Boolean(import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL?.trim());

const web3FormsAccessKey =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || DEFAULT_WEB3FORMS_ACCESS_KEY;

export const isWeb3FormsConfigured = Boolean(web3FormsAccessKey);
export const isLeadSubmissionConfigured = isGoogleSheetsConfigured || isWeb3FormsConfigured;

export const submitLeadToGoogleSheets = async ({
  formId,
  formName,
  pagePath,
  pageUrl,
  fields,
  context = {},
}: GoogleSheetsSubmission) => {
  const webAppUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL?.trim();

  if (!webAppUrl && !isWeb3FormsConfigured) {
    throw new Error("No lead destination is configured. Add Google Sheets URL or Web3Forms access key.");
  }

  const displayFields = toDisplayMap(fields);
  const displayContext = toDisplayMap(context);

  const payload = {
    spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID,
    sheetName: import.meta.env.VITE_GOOGLE_SHEETS_SHEET_NAME?.trim() || DEFAULT_SHEET_NAME,
    source: "zestek-digital-website",
    submittedAt: new Date().toISOString(),
    formId,
    formName,
    pagePath,
    pageUrl: pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
    fields: displayFields,
    context: displayContext,
  };

  const syncTasks: Promise<void>[] = [];

  if (webAppUrl) {
    syncTasks.push(
      fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        keepalive: true,
      }).then(() => undefined),
    );
  }

  if (isWeb3FormsConfigured) {
    const senderName =
      displayFields.name ||
      displayFields.decision_maker_name ||
      displayFields.company_name ||
      "Website Visitor";

    const senderEmail = displayFields.work_email || displayFields.email || "support@zestek.in";

    const senderMessage =
      displayFields.message ||
      `New lead submitted via ${formName}. Please review attached field values.`;

    const web3FormsPayload = {
      access_key: web3FormsAccessKey,
      subject: `New Website Lead - ${formName}`,
      from_name: senderName,
      email: senderEmail,
      message: senderMessage,
      form_name: formName,
      form_id: formId,
      source: payload.source,
      submitted_at: payload.submittedAt,
      page_path: pagePath,
      page_url: payload.pageUrl,
      ...withKeyPrefix(displayFields, "field_"),
      ...withKeyPrefix(displayContext, "context_"),
    };

    syncTasks.push(
      fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3FormsPayload),
      })
        .then(async (response) => {
          const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

          if (!response.ok || result?.success === false) {
            throw new Error(result?.message || `Web3Forms request failed with status ${response.status}`);
          }
        })
        .then(() => undefined),
    );
  }

  await Promise.all(syncTasks);

  return payload;
};
