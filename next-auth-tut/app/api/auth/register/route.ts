import { NextRequest, NextResponse } from "next/server";
import {hash} from 'bcrypt';
import {sql} from '@vercel/postgres'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    // validate email and password
    console.log({ email, password });
    const hashedPassword = await hash(password, 10);
    // Here you would typically handle registration logic,
    // such as saving the user to the database.

    const response = await sql`
    INSERT INTO users (email, password)
    VALUES (${email}, ${hashedPassword})
    `;
    return NextResponse.json({ message: "User registered successfully" });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ error: "Error registering user" }, { status: 500 });
  }
}
