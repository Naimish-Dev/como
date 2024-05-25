import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const { name, email, phone } = await request.json();

    const client = new google.auth.JWT(
      process.env.SPREAD_SHEET_EMAIL,
      null,
      process.env.GOOGLE_KEY.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    await client.authorize();
    const sheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = process.env.SPREAD_SHEET_ID;

    const range = "como!B1:D1";

    const values = [["", name, email, phone]];

    const data = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: { values },
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
