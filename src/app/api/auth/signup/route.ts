import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
// const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        balance: 0,
      },
    });

    return NextResponse.json(
      { success: true, data: user, message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
