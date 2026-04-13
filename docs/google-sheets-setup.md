## Google Sheets form sync setup

This website is now prepared to send every form submission to one Google Apps Script web app.

Important:

- The Google Apps Script file in this repo is [website-forms-to-sheets.gs](../google-apps-script/website-forms-to-sheets.gs)
- Your current spreadsheet screenshot shows the tab name `Sheet1`, so the website should use `Sheet1` as the destination tab unless you intentionally create a different tab
- The current web app URL must be deployed as a public web app with access set to `Anyone`, otherwise submissions will fail before reaching the sheet

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
8. If you edit the Apps Script later, create a new deployment or update the active deployment and use the latest `/exec` URL.

### 2. Add the web app URL to the website

Create a local `.env` file from `.env.example` and set:

```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=1nLqPoigEEJp2C4oRX2xMCz9YMS0Ta9B6P06tOvLfY2c
VITE_GOOGLE_SHEETS_SHEET_NAME=Sheet1
```

### 3. Restart the website

After saving `.env`, restart the Vite server so the new environment variable is loaded.

If the site is deployed on Vercel:

1. Add the same variables in the Vercel project environment settings.
2. Redeploy the site after saving them.

### What gets added to the sheet

Each form submission creates one row with:

- submission time
- form name
- page path
- page URL
- the main form fields
- extra context values such as ROI recommendation data
- the raw payload JSON for backup

### Quick troubleshooting

- If the form says success but nothing appears in the sheet, open the Apps Script `/exec` URL directly in the browser first. A working deployment should return a small JSON response instead of a Google error page.
- If you are checking the spreadsheet manually, make sure you are looking at the same tab name configured in `VITE_GOOGLE_SHEETS_SHEET_NAME`.
- If the web app is not public, Google may return `401` or `Page not found` on POST requests.
