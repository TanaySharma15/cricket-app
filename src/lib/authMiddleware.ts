import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function authenticate(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { error: "No token provided", status: 401 };
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return { user: decoded };
  } catch (error) {
    return { error: "Invalid token", status: 401 };
  }
}
