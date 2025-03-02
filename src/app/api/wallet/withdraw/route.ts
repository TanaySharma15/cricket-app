import { authenticate } from "@/lib/authMiddleware";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const auth = await authenticate(request);
  if (auth.error) {
    return NextResponse.json({
      error: "Unauthorized",
      success: false,
    });
  }
  try {
    const user = auth.user as { id: string };
    const currentUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    if (!currentUser || currentUser.balance < amount) {
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }
    const { amount } = await request.json();
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid withdrawal amount" },
        { status: 400 }
      );
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        balance: { decrement: amount },
      },
    });
    return NextResponse.json({ success: true, data: updatedUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Something went wrong",
      success: false,
    });
  }
}
