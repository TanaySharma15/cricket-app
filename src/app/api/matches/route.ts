import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const matches = await prisma.match.findMany({
      where: { status: "upcoming" },
      include: {
        team1: { include: { players: true } },
        team2: { include: { players: true } },
      },
    });
    return NextResponse.json({
      data: matches,
      success: true,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        error: error.message || "Something went wrong",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
