const DEFAULT_SHEET_NAME = "Sheet1";

function doGet() {
  return jsonResponse_({
    ok: true,
    message: "Website forms to sheets web app is running.",
    timestamp: new Date().toISOString(),
  });
}

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const spreadsheetId = String(payload.spreadsheetId || "").trim();
    const sheetName = String(payload.sheetName || DEFAULT_SHEET_NAME).trim() || DEFAULT_SHEET_NAME;

    if (!spreadsheetId) {
      throw new Error("Missing spreadsheetId in request payload.");
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = getOrCreateSheet_(spreadsheet, sheetName);
    const rowData = buildRowData_(payload);
    const headers = ensureHeaderRow_(sheet, Object.keys(rowData));

    sheet.appendRow(headers.map(function (header) {
      return rowData[header] || "";
    }));

    return jsonResponse_({
      ok: true,
      sheetName: sheet.getName(),
      rowNumber: sheet.getLastRow(),
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error && error.message ? error.message : String(error),
    });
  }
}

function getOrCreateSheet_(spreadsheet, sheetName) {
  const existingSheet = spreadsheet.getSheetByName(sheetName);

  if (existingSheet) {
    return existingSheet;
  }

  const createdSheet = spreadsheet.insertSheet(sheetName);
  createdSheet.setFrozenRows(1);
  return createdSheet;
}

function buildRowData_(payload) {
  const fields = payload.fields || {};
  const context = payload.context || {};

  return {
    submitted_at: payload.submittedAt || new Date().toISOString(),
    source: payload.source || "zestek-digital-website",
    form_id: payload.formId || "",
    form_name: payload.formName || "",
    page_path: payload.pagePath || "",
    page_url: payload.pageUrl || "",
    ...prefixKeys_(fields, "field_"),
    ...prefixKeys_(context, "context_"),
    raw_payload_json: JSON.stringify(payload),
  };
}

function prefixKeys_(record, prefix) {
  const output = {};

  Object.keys(record).forEach(function (key) {
    output[prefix + key] = normalizeCellValue_(record[key]);
  });

  return output;
}

function normalizeCellValue_(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

function ensureHeaderRow_(sheet, headers) {
  const lastColumn = Math.max(sheet.getLastColumn(), headers.length);
  const existingHeaders = lastColumn > 0 ? sheet.getRange(1, 1, 1, lastColumn).getValues()[0] : [];
  const hasHeaderContent = existingHeaders.some(function (cell) {
    return String(cell || "").trim() !== "";
  });

  if (!hasHeaderContent) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    return headers;
  }

  const mergedHeaders = existingHeaders
    .map(function (cell) {
      return String(cell || "").trim();
    })
    .filter(Boolean);

  headers.forEach(function (header) {
    if (mergedHeaders.indexOf(header) === -1) {
      mergedHeaders.push(header);
    }
  });

  if (mergedHeaders.length !== existingHeaders.filter(Boolean).length) {
    sheet.getRange(1, 1, 1, mergedHeaders.length).setValues([mergedHeaders]);
    sheet.setFrozenRows(1);
  }

  return mergedHeaders;
}

function jsonResponse_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
