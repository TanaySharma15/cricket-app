import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock } from "lucide-react"

export default function UpcomingMatches() {
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
    },
  ]

  return (
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
  )
}

