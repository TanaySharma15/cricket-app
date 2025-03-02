import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { matchId: string } }
) {
  const matchId = params.matchId;
  if (!matchId) {
    return NextResponse.json({
      error: "Match id is required",
      success: false,
    });
  }
  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: {
        team1: { include: { players: true } },
        team2: { include: { players: true } },
      },
    });
    if (!match) {
      return NextResponse.json({
        error: "Match not found",
        success: false,
      });
    }
    return NextResponse.json(
      {
        data: match,
        success: true,
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
