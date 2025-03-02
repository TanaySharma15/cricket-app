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
    const { amount } = await request.json();
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        balance: { increment: amount },
      },
    });
    return NextResponse.json(
      {
        success: true,
        data: updatedUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Something went wrong",
      success: false,
    });
  }
}
