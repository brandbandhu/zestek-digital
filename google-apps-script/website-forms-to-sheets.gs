const DEFAULT_SPREADSHEET_ID = "1nLqPoigEEJp2C4oRX2xMCz9YMS0Ta9B6P06tOvLfY2c";
const DEFAULT_SHEET_NAME = "Website Leads";

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const spreadsheetId = payload.spreadsheetId || DEFAULT_SPREADSHEET_ID;
    const sheetName = payload.sheetName || DEFAULT_SHEET_NAME;
    const sheet = getOrCreateSheet_(spreadsheetId, sheetName);
    const row = buildRow_(payload);

    ensureHeaders_(sheet, Object.keys(row));
    appendRow_(sheet, row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          ok: false,
          error: error && error.message ? error.message : String(error),
        }),
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Website forms endpoint is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing POST body.");
  }

  return JSON.parse(e.postData.contents);
}

function getOrCreateSheet_(spreadsheetId, sheetName) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const existingSheet = spreadsheet.getSheetByName(sheetName);

  if (existingSheet) {
    return existingSheet;
  }

  return spreadsheet.insertSheet(sheetName);
}

function buildRow_(payload) {
  const row = {
    submitted_at: payload.submittedAt || new Date().toISOString(),
    source: payload.source || "website",
    form_id: payload.formId || "",
    form_name: payload.formName || "",
    page_path: payload.pagePath || "",
    page_url: payload.pageUrl || "",
  };

  addPrefixedFields_(row, payload.fields, "");
  addPrefixedFields_(row, payload.context, "context_");

  row.raw_payload = JSON.stringify(payload);

  return row;
}

function addPrefixedFields_(target, source, prefix) {
  if (!source) {
    return;
  }

  Object.keys(source).forEach(function(key) {
    target[prefix + normalizeKey_(key)] = source[key];
  });
}

function normalizeKey_(key) {
  return String(key)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function ensureHeaders_(sheet, keys) {
  const lastColumn = sheet.getLastColumn();
  const headers = lastColumn > 0 ? sheet.getRange(1, 1, 1, lastColumn).getValues()[0] : [];
  const missingHeaders = keys.filter(function(key) {
    return headers.indexOf(key) === -1;
  });

  if (headers.length === 0) {
    sheet.getRange(1, 1, 1, keys.length).setValues([keys]);
    sheet.setFrozenRows(1);
    return;
  }

  if (missingHeaders.length === 0) {
    return;
  }

  sheet.getRange(1, headers.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  sheet.setFrozenRows(1);
}

function appendRow_(sheet, row) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const values = headers.map(function(header) {
    return row[header] !== undefined && row[header] !== null ? row[header] : "";
  });

  sheet.appendRow(values);
}
