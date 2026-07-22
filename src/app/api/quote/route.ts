import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Log the quote request (replace with CRM integration later)
    console.log("New quote request:", body);
    return NextResponse.json(
      { success: true, message: "Quote request received. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
