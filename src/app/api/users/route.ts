import { User } from "@/app/data";
import { db, sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const client = await db.connect();
  const body: User = await req.json();

  console.log(body);

  try {
    const res = await client.sql`INSERT INTO users (name, email, password)
        VALUES (${body.name}, ${body.email}, ${body.password})`;

    console.log(res);

    return NextResponse.json({ message: "User Inserted" }, { status: 201 });
  } catch (error) {}
}
