/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SHEETS_WEB_APP_URL?: string;
  readonly VITE_GOOGLE_SHEETS_SPREADSHEET_ID?: string;
  readonly VITE_GOOGLE_SHEETS_SHEET_NAME?: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
