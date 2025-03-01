import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

export default function MatchesPage() {
  // This would typically come from your API or database
  const upcomingMatches = [
    {
      id: 2,
      team1: { name: "Hostel C", logo: "/placeholder.svg?height=40&width=40" },
      team2: { name: "Hostel D", logo: "/placeholder.svg?height=40&width=40" },
      date: "Today",
      time: "4:00 PM",
      venue: "Main Ground",
      odds1: 1.95,
      odds2: 1.85,
      status: "upcoming",
    },
    {
      id: 3,
      team1: { name: "Hostel E", logo: "/placeholder.svg?height=40&width=40" },
      team2: { name: "Hostel F", logo: "/placeholder.svg?height=40&width=40" },
      date: "Tomorrow",
      time: "2:30 PM",
      venue: "Practice Ground",
      odds1: 2.1,
      odds2: 1.7,
      status: "upcoming",
    },
    {
      id: 4,
      team1: { name: "Hostel G", logo: "/placeholder.svg?height=40&width=40" },
      team2: { name: "Hostel H", logo: "/placeholder.svg?height=40&width=40" },
      date: "Tomorrow",
      time: "5:00 PM",
      venue: "Main Ground",
      odds1: 1.65,
      odds2: 2.25,
      status: "upcoming",
    },
  ]

  const liveMatches = [
    {
      id: 1,
      team1: { name: "Hostel A", logo: "/placeholder.svg?height=40&width=40", score: "120/4" },
      team2: { name: "Hostel B", logo: "/placeholder.svg?height=40&width=40", score: "85/2" },
      date: "Today",
      time: "Live",
      venue: "Main Ground",
      odds1: 1.75,
      odds2: 2.25,
      status: "live",
    },
  ]

  const completedMatches = [
    {
      id: 5,
      team1: { name: "Hostel A", logo: "/placeholder.svg?height=40&width=40", score: "156/8" },
      team2: { name: "Hostel C", logo: "/placeholder.svg?height=40&width=40", score: "120/10" },
      date: "Yesterday",
      result: "Hostel A won by 36 runs",
      venue: "Main Ground",
      status: "completed",
    },
    {
      id: 6,
      team1: { name: "Hostel B", logo: "/placeholder.svg?height=40&width=40", score: "145/7" },
      team2: { name: "Hostel D", logo: "/placeholder.svg?height=40&width=40", score: "146/5" },
      date: "2 days ago",
      result: "Hostel D won by 5 wickets",
      venue: "Practice Ground",
      status: "completed",
    },
  ]

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Matches</h1>
        <p className="text-muted-foreground">View all upcoming, live, and completed matches</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingMatches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No upcoming matches scheduled</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{match.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{match.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src={match.team1.logo || "/placeholder.svg"}
                            alt={`${match.team1.name} Logo`}
                            width={40}
                            height={40}
                            className="rounded-full bg-muted p-1"
                          />
                          <h3 className="mt-2 font-medium">{match.team1.name}</h3>
                          <div className="mt-1 text-sm font-bold">{match.odds1}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground uppercase font-medium mb-1">VS</div>
                          <Badge variant="outline" className="font-normal">
                            {match.venue}
                          </Badge>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src={match.team2.logo || "/placeholder.svg"}
                            alt={`${match.team2.name} Logo`}
                            width={40}
                            height={40}
                            className="rounded-full bg-muted p-1"
                          />
                          <h3 className="mt-2 font-medium">{match.team2.name}</h3>
                          <div className="mt-1 text-sm font-bold">{match.odds2}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-center bg-card border-t">
                    <Link href={`/matches/${match.id}`}>
                      <Button variant="outline" size="sm">
                        Place Bet
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="live" className="space-y-4">
          {liveMatches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No matches are currently live</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {liveMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          LIVE
                        </Badge>
                      </div>
                      <div className="p-4 sm:p-6 pt-12">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center text-center">
                            <Image
                              src={match.team1.logo || "/placeholder.svg"}
                              alt={`${match.team1.name} Logo`}
                              width={40}
                              height={40}
                              className="rounded-full bg-muted p-1"
                            />
                            <h3 className="mt-2 font-medium">{match.team1.name}</h3>
                            <div className="mt-1 text-sm font-bold">{match.team1.score}</div>
                            <div className="mt-1 text-xs font-medium">{match.odds1}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground uppercase font-medium mb-1">VS</div>
                            <Badge variant="outline" className="font-normal">
                              {match.venue}
                            </Badge>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <Image
                              src={match.team2.logo || "/placeholder.svg"}
                              alt={`${match.team2.name} Logo`}
                              width={40}
                              height={40}
                              className="rounded-full bg-muted p-1"
                            />
                            <h3 className="mt-2 font-medium">{match.team2.name}</h3>
                            <div className="mt-1 text-sm font-bold">{match.team2.score}</div>
                            <div className="mt-1 text-xs font-medium">{match.odds2}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-center bg-card border-t">
                    <Link href={`/matches/${match.id}`}>
                      <Button size="sm">Place Bet</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedMatches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No completed matches</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {completedMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{match.date}</span>
                        </div>
                        <Badge variant="outline">{match.venue}</Badge>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src={match.team1.logo || "/placeholder.svg"}
                            alt={`${match.team1.name} Logo`}
                            width={40}
                            height={40}
                            className="rounded-full bg-muted p-1"
                          />
                          <h3 className="mt-2 font-medium">{match.team1.name}</h3>
                          <div className="mt-1 text-sm font-bold">{match.team1.score}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground uppercase font-medium">VS</div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src={match.team2.logo || "/placeholder.svg"}
                            alt={`${match.team2.name} Logo`}
                            width={40}
                            height={40}
                            className="rounded-full bg-muted p-1"
                          />
                          <h3 className="mt-2 font-medium">{match.team2.name}</h3>
                          <div className="mt-1 text-sm font-bold">{match.team2.score}</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{match.result}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-center bg-card border-t">
                    <Link href={`/matches/${match.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

