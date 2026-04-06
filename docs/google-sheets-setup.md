## Google Sheets form sync setup

This website is now prepared to send every form submission to one Google Apps Script web app.

### 1. Create the Apps Script web app

1. Open the Google Sheet:
   `https://docs.google.com/spreadsheets/d/1nLqPoigEEJp2C4oRX2xMCz9YMS0Ta9B6P06tOvLfY2c`
2. Go to `Extensions -> Apps Script`.
3. Replace the default code with:
   [website-forms-to-sheets.gs](../google-apps-script/website-forms-to-sheets.gs)
4. Click `Deploy -> New deployment`.
5. Choose `Web app`.
6. Set:
   - Execute as: `Me`
   - Who has access: `Anyone`
7. Deploy and copy the `Web app URL`.

### 2. Add the web app URL to the website

Create a local `.env` file from `.env.example` and set:

```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=1nLqPoigEEJp2C4oRX2xMCz9YMS0Ta9B6P06tOvLfY2c
VITE_GOOGLE_SHEETS_SHEET_NAME=Website Leads
```

### 3. Restart the website

After saving `.env`, restart the Vite server so the new environment variable is loaded.

### What gets added to the sheet

Each form submission creates one row with:

- submission time
- form name
- page path
- page URL
- the main form fields
- extra context values such as ROI recommendation data
- the raw payload JSON for backup
