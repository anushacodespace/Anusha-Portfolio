import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 800));// its not required, just to see spinning 
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { type: "error", msg: "All fields are required." },
        { status: 400 }
      );
    }

    // Simple email check (not perfect, but enough for now)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { type: "error", msg: "Please enter a valid email." },
        { status: 400 }
      );
    }

    // For now, we just log the message on the server
    console.log("📩 New contact message:", { name, email, message });

    // Success response
    return NextResponse.json(
      { type: "success", msg: "Thank you! I will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { type: "error", msg: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
