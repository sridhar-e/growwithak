'use server';

import { google } from 'googleapis';
import { type AuditFormData } from '@/lib/schemas';

export async function submitAuditAction(data: AuditFormData) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  // Handle newlines in private key if they are escaped in .env
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME || 'Sheet1';

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.warn('Google Sheets configuration missing. Logging data:', data);
    return { success: true, message: 'Submission logged to console (Sheets not configured)' };
  }

  try {
    const auth = new google.auth.JWT(
      clientEmail,
      undefined,
      privateKey,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:E`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('en-GB'), // Timestamp (Column A)
            data.name,                          // Full Name (Column B)
            data.email,                         // Email Address (Column C)
            data.linkedin,                      // LinkedIn Profile (Column D)
            data.phone                          // Phone Number (Column E)
          ]
        ],
      },
    });

    return { success: true };
  } catch (err: any) {
    // Check for common permission issues
    if (err.message?.includes('403') || err.message?.includes('permission')) {
      console.error('Google Sheets Permission Error: Ensure the service account has Editor access to the sheet.');
    } else {
      console.error('Google Sheets Error:', err);
    }
    
    return { 
      success: false, 
      error: 'We encountered an error recording your request. Please try again or contact support.' 
    };
  }
}
