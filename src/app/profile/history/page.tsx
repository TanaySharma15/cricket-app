import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock } from "lucide-react"

export default function BettingHistoryPage() {
  // This would typically come from your API or database
  const bettingHistory = [
    {
      id: 1,
      match: "Hostel A vs Hostel B",
      date: "Today",
      amount: 100,
      odds: 1.75,
      team: "Hostel A",
      status: "pending",
    },
    {
      id: 2,
      match: "Hostel C vs Hostel D",
      date: "Yesterday",
      amount: 200,
      odds: 2.1,
      team: "Hostel C",
      status: "won",
      winnings: 420,
    },
    {
      id: 3,
      match: "Hostel E vs Hostel F",
      date: "3 days ago",
      amount: 150,
      odds: 1.9,
      team: "Hostel F",
      status: "lost",
    },
    {
      id: 4,
      match: "Hostel G vs Hostel H",
      date: "1 week ago",
      amount: 300,
      odds: 1.65,
      team: "Hostel G",
      status: "won",
      winnings: 495,
    },
    {
      id: 5,
      match: "Hostel A vs Hostel C",
      date: "2 weeks ago",
      amount: 250,
      odds: 2.25,
      team: "Hostel A",
      status: "won",
      winnings: 562.5,
    },
    {
      id: 6,
      match: "Hostel B vs Hostel D",
      date: "2 weeks ago",
      amount: 200,
      odds: 1.8,
      team: "Hostel D",
      status: "lost",
    },
  ]

  const pendingBets = bettingHistory.filter((bet) => bet.status === "pending")
  const completedBets = bettingHistory.filter((bet) => bet.status !== "pending")

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Betting History</h1>
          <p className="text-muted-foreground">View all your past and pending bets</p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Bets</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Betting History</CardTitle>
              <CardDescription>A complete record of all your bets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {bettingHistory.map((bet) => (
                  <div key={bet.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{bet.match}</span>
                        {bet.status === "pending" && (
                          <Badge variant="outline" className="text-yellow-500 border-yellow-200 bg-yellow-50">
                            Pending
                          </Badge>
                        )}
                        {bet.status === "won" && (
                          <Badge variant="outline" className="text-green-500 border-green-200 bg-green-50">
                            Won
                          </Badge>
                        )}
                        {bet.status === "lost" && (
                          <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                            Lost
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{bet.date}</span>
                        </div>
                        <div>Bet on: {bet.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹{bet.amount}</div>
                      <div className="text-sm text-muted-foreground">Odds: {bet.odds}</div>
                      {bet.status === "won" && (
                        <div className="text-sm font-medium text-green-600">+₹{bet.winnings}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Bets</CardTitle>
              <CardDescription>Bets that are currently active</CardDescription>
            </CardHeader>
            <CardContent>
              {pendingBets.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No pending bets</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {pendingBets.map((bet) => (
                    <div
                      key={bet.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{bet.match}</span>
                          <Badge variant="outline" className="text-yellow-500 border-yellow-200 bg-yellow-50">
                            Pending
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{bet.date}</span>
                          </div>
                          <div>Bet on: {bet.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹{bet.amount}</div>
                        <div className="text-sm text-muted-foreground">Odds: {bet.odds}</div>
                        <div className="text-sm text-muted-foreground">
                          Potential: ₹{(bet.amount * bet.odds).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Bets</CardTitle>
              <CardDescription>Bets that have been settled</CardDescription>
            </CardHeader>
            <CardContent>
              {completedBets.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No completed bets</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {completedBets.map((bet) => (
                    <div
                      key={bet.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{bet.match}</span>
                          {bet.status === "won" && (
                            <Badge variant="outline" className="text-green-500 border-green-200 bg-green-50">
                              Won
                            </Badge>
                          )}
                          {bet.status === "lost" && (
                            <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                              Lost
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{bet.date}</span>
                          </div>
                          <div>Bet on: {bet.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹{bet.amount}</div>
                        <div className="text-sm text-muted-foreground">Odds: {bet.odds}</div>
                        {bet.status === "won" && (
                          <div className="text-sm font-medium text-green-600">+₹{bet.winnings}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

