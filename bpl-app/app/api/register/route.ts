import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, mobile, dateOfBirth, role, gender, address, suggestions } = body;

    // Validate required fields
    if (!fullName || !mobile || !dateOfBirth || !role || !gender || !address) {
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
      gender: gender.trim(),
      address: address.trim(),
      suggestions: suggestions ? suggestions.trim() : "",
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

    const sheetsUrl = "https://script.google.com/macros/s/AKfycbzksImW-x_0-dcuBCMnG8F2X25hB9NFcEVgkEsL_8Qv_q9cJbEEwftXx8T-g7RsTY0p/exec";

    if (!sheetsUrl || !sheetsUrl.startsWith("https://script.google.com")) {
      // Force an error so we can see exactly what Vercel is reading
      return NextResponse.json({
        success: false,
        message: `Configuration Error: sheetsUrl is invalid. Vercel read the value as: '${sheetsUrl}'`
      }, { status: 500 });
    }

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
