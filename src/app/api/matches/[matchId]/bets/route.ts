import { authenticate } from "@/lib/authMiddleware";
import prisma from "@/lib/prisma";
import { BetType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { matchId: string } }
) {
  const auth = await authenticate(request);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }
  try {
    const user = auth.user as { id: string };
    const { betType, betAmount, selectedTeam, playerId } = await request.json();
    const matchId = params.matchId;
    if (!matchId) {
      return NextResponse.json({
        error: "Match id is required",
        success: false,
      });
    }
    const match = await prisma.match.findUnique({
      where: { id: matchId },
    });
    if (!match) {
      return NextResponse.json({
        error: "Match not found",
        success: false,
      });
    }
    if (match.status !== "live") {
      return NextResponse.json({
        error: "Match is not live",
        success: false,
      });
    }
    const bet = await prisma.bet.create({
      data: {
        betAmount,
        betType,
        matchId: params.matchId,
        userId: user.id,
        selectedTeam: betType === BetType.TEAM ? selectedTeam : null,
        playerId: betType === BetType.PLAYER ? playerId : null,
      },
    });
    return NextResponse.json({ success: true, data: bet }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Something went wrong",
      success: false,
    });
  }
}

export async function GET(request: NextRequest) {
  const auth = await authenticate(request);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }
  try {
    const user = auth.user as { id: string };
    const bets = await prisma.bet.findMany({
      where: { userId: user.id },
      include: {
        match: {
          include: {
            team1: true,
            team2: true,
          },
        },
      },
    });
    return NextResponse.json(
      { success: true, data: bets, message: "Bets fetched successfully" },
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
