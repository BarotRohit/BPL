import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, mobile, dateOfBirth, role, address } = body;

    // Validate required fields
    if (!fullName || !mobile || !dateOfBirth || !role || !address) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Prepare registration data
    const registrationData = {
      name: fullName.trim(),
      mobile: mobile.trim(),
      dateOfBirth,
      role: role.trim(),
      address: address.trim(),
      registrationDateTime: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    let sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || process.env.GOOGLE_SHEETS_URL || "";
    sheetsUrl = sheetsUrl.trim().replace(/^["']|["']$/g, '');

    if (sheetsUrl && sheetsUrl.startsWith("https://script.google.com")) {
      // Submit to Google Sheets
      const sheetsResponse = await fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      });

      if (!sheetsResponse.ok) {
        const errorText = await sheetsResponse.text();
        console.error("Google Sheets Error:", sheetsResponse.status, errorText);
        throw new Error("Failed to save to Google Sheets. Status: " + sheetsResponse.status);
      }

      const responseText = await sheetsResponse.text();
      console.log("Google Sheets Response Text:", responseText);
      try {
        const jsonResponse = JSON.parse(responseText);
        if (jsonResponse.success === false) {
           throw new Error("Google Sheets returned false: " + jsonResponse.message);
        }
      } catch {
        console.error("Failed to parse Google Sheets response as JSON:", responseText);
      }
    } else {
      // Log to console in development (no Google Sheets URL configured)
      console.log("📋 BPL Registration (Google Sheets not configured):", registrationData);
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful! We'll contact you soon.",
      data: { name: registrationData.name },
    });
  } catch (error: unknown) {
    console.error("Registration error:", error);
    const message = error instanceof Error ? error.message : "Registration failed. Please try again.";
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}
