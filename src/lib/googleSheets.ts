const DEFAULT_SPREADSHEET_ID = "1nLqPoigEEJp2C4oRX2xMCz9YMS0Ta9B6P06tOvLfY2c";
const DEFAULT_SHEET_NAME = "Website Leads";

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

export const submitLeadToGoogleSheets = async ({
  formId,
  formName,
  pagePath,
  pageUrl,
  fields,
  context = {},
}: GoogleSheetsSubmission) => {
  const webAppUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL?.trim();

  if (!webAppUrl) {
    throw new Error("Google Sheets web app URL is not configured.");
  }

  const payload = {
    spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID,
    sheetName: import.meta.env.VITE_GOOGLE_SHEETS_SHEET_NAME?.trim() || DEFAULT_SHEET_NAME,
    source: "zestek-digital-website",
    submittedAt: new Date().toISOString(),
    formId,
    formName,
    pagePath,
    pageUrl: pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
    fields: Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, toDisplayValue(value)])),
    context: Object.fromEntries(Object.entries(context).map(([key, value]) => [key, toDisplayValue(value)])),
  };

  await fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
    keepalive: true,
  });

  return payload;
};
