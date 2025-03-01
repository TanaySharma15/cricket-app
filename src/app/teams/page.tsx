import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users } from "lucide-react"

export default function TeamsPage() {
  // This would typically come from your API or database
  const teams = [
    {
      id: 1,
      name: "Hostel A",
      logo: "/placeholder.svg?height=80&width=80",
      matches: 5,
      wins: 3,
      losses: 2,
      players: 11,
      captain: "Rahul Sharma",
    },
    {
      id: 2,
      name: "Hostel B",
      logo: "/placeholder.svg?height=80&width=80",
      matches: 5,
      wins: 4,
      losses: 1,
      players: 11,
      captain: "Vikas Patel",
    },
    {
      id: 3,
      name: "Hostel C",
      logo: "/placeholder.svg?height=80&width=80",
      matches: 5,
      wins: 2,
      losses: 3,
      players: 11,
      captain: "Amit Kumar",
    },
    {
      id: 4,
      name: "Hostel D",
      logo: "/placeholder.svg?height=80&width=80",
      matches: 5,
      wins: 3,
      losses: 2,
      players: 11,
      captain: "Suresh Raina",
    },
    {
      id: 5,
      name: "Hostel E",
      logo: "/placeholder.svg?height=80&width=80",
      matches: 5,
      wins: 1,
      losses: 4,
      players: 11,
      captain: "Rohit Verma",
    },
    {
      id: 6,
      name: "Hostel F",
      logo: "/placeholder.svg?height=80&width=80",
      matches: 5,
      wins: 2,
      losses: 3,
      players: 11,
      captain: "Ajay Singh",
    },
  ]

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">Teams</h1>
        <p className="text-muted-foreground">View all participating hostel teams and their stats</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Image
                src={team.logo || "/placeholder.svg"}
                alt={`${team.name} Logo`}
                width={60}
                height={60}
                className="rounded-full bg-muted p-2"
              />
              <div>
                <CardTitle>{team.name}</CardTitle>
                <div className="text-sm text-muted-foreground">Captain: {team.captain}</div>
              </div>
            </CardHeader>
            <CardContent>
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
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{team.players} Players</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Win Rate: {Math.round((team.wins / team.matches) * 100)}%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 border-t">
              <Link href={`/teams/${team.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Team
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

