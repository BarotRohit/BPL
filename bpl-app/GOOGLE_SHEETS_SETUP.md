# Google Sheets Integration Setup Guide
# Barot Premier League Season 2 — Registration Form

## Overview

This guide explains how to connect the BPL registration form to a Google Spreadsheet so that every player registration is automatically saved.

---

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename the first sheet to **"Registrations"**
4. Add the following headers in **Row 1**:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Name | Mobile | Date of Birth | Role | Gender | Address | Suggestions | Registration Date & Time |

---

## Step 2: Open Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete the existing code in the editor
3. Paste the following script:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait for up to 10 seconds for other processes to finish.
  try {
    lock.waitLock(10000);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: "Server too busy. Please try again." }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registrations");
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.name,
      data.mobile,
      data.dateOfBirth,
      data.role,
      data.gender,
      data.address,
      data.suggestions || "",
      data.registrationDateTime
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Registered successfully!" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Optional: Handle GET requests for testing
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "BPL Registration API is running!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## Step 3: Deploy as Web App

1. Click **Deploy → New Deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web App**
4. Set the following:
   - **Description**: BPL Season 2 Registration
   - **Execute as**: Me
   - **Who has access**: Anyone (not "Anyone with Google Account" — choose "Anyone")
5. Click **Deploy**
6. **Authorize** the app when prompted (click "Trust" / "Allow")
7. Copy the **Web App URL** (it looks like: `https://script.google.com/macros/s/AKfycb.../exec`)

---

## Step 4: Add URL to Environment Variables

1. Open the BPL project folder
2. Create a file named `.env.local` in the `bpl-app/` directory
3. Add this line:

```
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from the URL you copied.

---

## Step 5: Restart the Dev Server

```bash
npm run dev
```

---

## Step 6: Test the Integration

1. Open the BPL website at `http://localhost:3000/register`
2. Fill in the registration form
3. Submit
4. Check your Google Spreadsheet — you should see the registration data!

---

## Troubleshooting

### Registration shows error
- Make sure the Web App is deployed with **"Anyone"** access (not "Anyone with Google Account")
- Check the Apps Script execution logs: Extensions → Apps Script → Executions
- Verify the URL in `.env.local` is correct

### Data not appearing in spreadsheet
- Make sure the sheet name is exactly **"Registrations"** (case sensitive)
- Re-deploy the Apps Script after any code changes

### CORS error
- This is handled by the Next.js API route (`/api/register`), so it shouldn't happen
- If it does, check that your server-side API route is forwarding requests to Google Sheets

---

## Spreadsheet Column Layout

| Column | Field | Description |
|--------|-------|-------------|
| A | Name | Player's full name |
| B | Mobile | 10-digit mobile number |
| C | Date of Birth | YYYY-MM-DD format |
| D | Role | Player's role (Batsman, Bowler, etc.) |
| E | Gender | Player's gender (Male/Female) |
| F | Address | Player's address |
| G | Suggestions | Optional suggestions provided by the player |
| H | Registration Date & Time | Auto-generated timestamp (IST) |

---

## Security Notes

- The Google Apps Script Web App URL is a secret — don't share it publicly
- The `.env.local` file is listed in `.gitignore` so it won't be committed to Git
- Players' personal data should only be used for BPL tournament purposes

---

*For any technical issues, contact the BPL technical team.*
