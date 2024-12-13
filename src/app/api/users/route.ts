import { User } from "@/app/data";
import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: Omit<User, "id"> = await req.json();
  const client = await db.connect();

  try {
    await client.sql`INSERT INTO users (name, email, password)
        VALUES (${body.name}, ${body.email}, ${body.password})`;

    return NextResponse.json(
      { message: "User Inserted", data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
