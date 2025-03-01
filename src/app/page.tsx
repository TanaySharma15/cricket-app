import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, TrendingUp, Users } from "lucide-react"
import FeaturedMatch from "@/components/featuredmatch"
import UpcomingMatches from "@/components/upcomingmatches"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inter-Hostel Cricket Betting</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Place your bets on your favorite hostel teams and win big!
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/matches/live">
                  <Button size="lg" className="gap-1">
                    <TrendingUp className="h-4 w-4" />
                    Live Matches
                  </Button>
                </Link>
                <Link href="/matches">
                  <Button size="lg" variant="outline" className="gap-1">
                    <CalendarDays className="h-4 w-4" />
                    All Matches
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Match</h2>
              <FeaturedMatch />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Upcoming Matches</h2>
                <Link href="/matches">
                  <Button variant="ghost" size="sm">
                    View all
                  </Button>
                </Link>
              </div>
              <UpcomingMatches />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold">Teams & Players</h3>
                  <p className="text-muted-foreground">View detailed stats for all hostel teams and players.</p>
                  <Link href="/teams" className="mt-2">
                    <Button variant="outline" size="sm">
                      Explore Teams
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                  <TrendingUp className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold">Live Betting</h3>
                  <p className="text-muted-foreground">Place bets in real-time as the match progresses.</p>
                  <Link href="/matches/live" className="mt-2">
                    <Button variant="outline" size="sm">
                      Live Matches
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold">Betting History</h3>
                  <p className="text-muted-foreground">Track your past bets and analyze your performance.</p>
                  <Link href="/profile/history" className="mt-2">
                    <Button variant="outline" size="sm">
                      View History
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                  <CalendarDays className="h-10 w-10 text-primary mb-2" />
                  <h3 className="text-xl font-bold">Tournament Schedule</h3>
                  <p className="text-muted-foreground">Stay updated with the complete tournament schedule.</p>
                  <Link href="/matches" className="mt-2">
                    <Button variant="outline" size="sm">
                      View Schedule
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

