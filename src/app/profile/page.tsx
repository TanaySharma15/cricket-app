"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CreditCard, Trophy, User } from "lucide-react"

export default function ProfilePage() {
  // This would typically come from your API or database
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    hostel: "Hostel A",
    balance: 1250,
    joinedDate: "Jan 2023",
    bettingHistory: [
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
    ],
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Manage your account and view your betting history</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Hostel</span>
                  </div>
                  <span className="font-medium">{user.hostel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Balance</span>
                  </div>
                  <span className="font-medium">₹{user.balance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined</span>
                  </div>
                  <span className="font-medium">{user.joinedDate}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Link href="/wallet" className="w-full">
                <Button variant="outline" className="w-full">
                  Manage Wallet
                </Button>
              </Link>
              <Link href="/profile/edit" className="w-full">
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Betting History</CardTitle>
              <CardDescription>View your recent bets and their outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.bettingHistory.map((bet) => (
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
            <CardFooter>
              <Link href="/profile/history" className="w-full">
                <Button variant="outline" className="w-full">
                  View All History
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

