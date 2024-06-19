import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    // validate email and password
    console.log({ email, password });

    // Here you would typically handle registration logic,
    // such as saving the user to the database.

    return NextResponse.json({ message: "User registered successfully" });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ error: "Error registering user" }, { status: 500 });
  }
}
