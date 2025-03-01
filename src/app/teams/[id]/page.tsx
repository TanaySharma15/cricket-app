"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, CalendarDays, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  // This would typically come from your API or database based on the ID
  const teamId = Number.parseInt(params.id)

  const team = {
    id: teamId,
    name: `Hostel ${String.fromCharCode(64 + teamId)}`, // A, B, C, etc. based on ID
    logo: `/placeholder.svg?height=120&width=120`,
    matches: 5,
    wins: 3,
    losses: 2,
    draws: 0,
    players: 11,
    captain: "Rahul Sharma",
    description: "A strong team with excellent batting lineup and consistent bowling performance.",
    foundedYear: 2018,
    homeGround: "Main Ground",
    coach: "Anil Kumar",
  }

  // Team players data
  const players = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Captain / Batsman",
      avatar: "/placeholder.svg?height=40&width=40",
      matches: 15,
      runs: 450,
      wickets: 0,
      battingAvg: 45.0,
      isCaptain: true,
    },
    {
      id: 2,
      name: "Amit Kumar",
      role: "Bowler",
      avatar: "/placeholder.svg?height=40&width=40",
      matches: 15,
      runs: 120,
      wickets: 22,
      battingAvg: 15.0,
      isCaptain: false,
    },
    {
      id: 3,
      name: "Suresh Raina",
      role: "All-rounder",
      avatar: "/placeholder.svg?height=40&width=40",
      matches: 15,
      runs: 380,
      wickets: 12,
      battingAvg: 38.0,
      isCaptain: false,
    },
    {
      id: 4,
      name: "Vikas Patel",
      role: "Batsman",
      avatar: "/placeholder.svg?height=40&width=40",
      matches: 15,
      runs: 410,
      wickets: 0,
      battingAvg: 41.0,
      isCaptain: false,
    },
    {
      id: 5,
      name: "Rohit Verma",
      role: "Wicket Keeper",
      avatar: "/placeholder.svg?height=40&width=40",
      matches: 15,
      runs: 320,
      wickets: 0,
      battingAvg: 32.0,
      isCaptain: false,
    },
    {
      id: 6,
      name: "Ajay Singh",
      role: "Bowler",
      avatar: "/placeholder.svg?height=40&width=40",
      matches: 15,
      runs: 85,
      wickets: 18,
      battingAvg: 10.6,
      isCaptain: false,
    },
  ]

  // Match history data
  const matchHistory = [
    {
      id: 1,
      opponent: `Hostel ${String.fromCharCode(65 + (teamId % 5))}`,
      date: "2 days ago",
      result: "Won by 36 runs",
      venue: "Main Ground",
      teamScore: "156/8",
      opponentScore: "120/10",
      isWin: true,
    },
    {
      id: 2,
      opponent: `Hostel ${String.fromCharCode(65 + ((teamId + 1) % 5))}`,
      date: "1 week ago",
      result: "Lost by 5 wickets",
      venue: "Practice Ground",
      teamScore: "145/7",
      opponentScore: "146/5",
      isWin: false,
    },
    {
      id: 3,
      opponent: `Hostel ${String.fromCharCode(65 + ((teamId + 2) % 5))}`,
      date: "2 weeks ago",
      result: "Won by 25 runs",
      venue: "Main Ground",
      teamScore: "175/6",
      opponentScore: "150/9",
      isWin: true,
    },
  ]

  // Upcoming matches data
  const upcomingMatches = [
    {
      id: 1,
      opponent: `Hostel ${String.fromCharCode(65 + ((teamId + 3) % 5))}`,
      date: "Tomorrow",
      time: "4:00 PM",
      venue: "Main Ground",
      odds: 1.75,
    },
    {
      id: 2,
      opponent: `Hostel ${String.fromCharCode(65 + ((teamId + 4) % 5))}`,
      date: "Next Week",
      time: "2:30 PM",
      venue: "Practice Ground",
      odds: 2.1,
    },
  ]

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/teams">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{team.name}</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={`${team.name} Logo`}
                width={120}
                height={120}
                className="rounded-full bg-muted p-2 mb-4"
              />
              <CardTitle>{team.name}</CardTitle>
              <CardDescription>Founded: {team.foundedYear}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">{team.matches}</div>
                    <div className="text-xs text-muted-foreground">Matches</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-green-600">{team.wins}</div>
                    <div className="text-xs text-muted-foreground">Wins</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-red-600">{team.losses}</div>
                    <div className="text-xs text-muted-foreground">Losses</div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground">Captain</div>
                    <div className="font-medium">{team.captain}</div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground">Coach</div>
                    <div className="font-medium">{team.coach}</div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground">Home Ground</div>
                    <div className="font-medium">{team.homeGround}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                    <div className="font-medium">{Math.round((team.wins / team.matches) * 100)}%</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={`/matches?team=${teamId}`}>
                <Button variant="outline">View All Matches</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="players" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="players">Players</TabsTrigger>
              <TabsTrigger value="history">Match History</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
            </TabsList>

            <TabsContent value="players">
              <Card>
                <CardHeader>
                  <CardTitle>Team Players</CardTitle>
                  <CardDescription>All players currently in {team.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {players.map((player) => (
                      <Link key={player.id} href={`/teams/players/${player.id}`}>
                        <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={player.avatar} alt={player.name} />
                              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {player.name}
                                {player.isCaptain && (
                                  <Badge variant="outline" className="text-xs">
                                    Captain
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">{player.role}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{player.runs} Runs</div>
                            <div className="text-sm text-muted-foreground">{player.matches} Matches</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Match History</CardTitle>
                  <CardDescription>Recent matches played by {team.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {matchHistory.map((match) => (
                      <div key={match.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted/50 p-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{match.date}</span>
                          </div>
                          <Badge variant="secondary" className="bg-opacity-10" style={match.isWin ? {backgroundColor:"#8cf856"} : {background:"#f85656"}}>
                            {match.isWin ? "Won" : "Lost"}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col items-center text-center">
                              <div className="font-medium">{team.name}</div>
                              <div className="text-xl font-bold mt-1">{match.teamScore}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-muted-foreground uppercase font-medium mb-1">VS</div>
                              <Badge variant="outline" className="font-normal">
                                {match.venue}
                              </Badge>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="font-medium">{match.opponent}</div>
                              <div className="text-xl font-bold mt-1">{match.opponentScore}</div>
                            </div>
                          </div>
                          <div className="text-center text-sm font-medium">{match.result}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Matches</CardTitle>
                  <CardDescription>Scheduled matches for {team.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {upcomingMatches.map((match) => (
                      <div key={match.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted/50 p-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{match.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{match.time}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col items-center text-center">
                              <div className="font-medium">{team.name}</div>
                              <div className="text-sm font-bold mt-1">Odds: {match.odds}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-muted-foreground uppercase font-medium mb-1">VS</div>
                              <Badge variant="outline" className="font-normal">
                                {match.venue}
                              </Badge>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="font-medium">{match.opponent}</div>
                              <div className="text-sm font-bold mt-1">Odds: {(3.85 - match.odds).toFixed(2)}</div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <Link href={`/matches/${match.id}`}>
                              <Button>Place Bet</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

