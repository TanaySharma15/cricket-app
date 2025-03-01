"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Clock } from "lucide-react"

export default function FeaturedMatch() {
  const [betAmount, setBetAmount] = useState("")
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)
  const [showBetPlaced, setShowBetPlaced] = useState(false)

  const handlePlaceBet = () => {
    // Here you would handle the actual bet placement
    setShowBetPlaced(true)
    setTimeout(() => setShowBetPlaced(false), 3000)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="destructive" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              LIVE
            </Badge>
          </div>
          <div className="bg-muted/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col items-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Hostel A Logo"
                    width={80}
                    height={80}
                    className="rounded-full bg-background p-2"
                  />
                  <h3 className="mt-2 font-bold text-lg">Hostel A</h3>
                </div>
                <div className="text-center my-4 sm:my-0">
                  <div className="text-3xl font-bold">120/4 vs 85/2</div>
                  <div className="text-sm text-muted-foreground">15.2 overs | 12.1 overs</div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Hostel B Logo"
                    width={80}
                    height={80}
                    className="rounded-full bg-background p-2"
                  />
                  <h3 className="mt-2 font-bold text-lg">Hostel B</h3>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-background rounded-md p-2">
                    <div className="text-sm text-muted-foreground">Odds</div>
                    <div className="font-bold">1.75</div>
                  </div>
                  <div className="bg-background rounded-md p-2">
                    <div className="text-sm text-muted-foreground">Odds</div>
                    <div className="font-bold">2.25</div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Place Bet</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Place Your Bet</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label>Select Team</Label>
                        <RadioGroup value={selectedTeam || ""} onValueChange={setSelectedTeam}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hostelA" id="hostelA" />
                            <Label htmlFor="hostelA">Hostel A (1.75)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hostelB" id="hostelB" />
                            <Label htmlFor="hostelB">Hostel B (2.25)</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="betAmount">Bet Amount</Label>
                        <Input
                          id="betAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={betAmount}
                          onChange={(e) => setBetAmount(e.target.value)}
                        />
                      </div>
                      {selectedTeam && betAmount && (
                        <div className="bg-muted p-3 rounded-md">
                          <div className="text-sm">Potential Winnings:</div>
                          <div className="font-bold">
                            ₹{(Number.parseFloat(betAmount) * (selectedTeam === "hostelA" ? 1.75 : 2.25)).toFixed(2)}
                          </div>
                        </div>
                      )}
                      <Button className="w-full" onClick={handlePlaceBet} disabled={!selectedTeam || !betAmount}>
                        Confirm Bet
                      </Button>
                      {showBetPlaced && (
                        <div className="bg-green-100 text-green-800 p-2 rounded-md text-center">
                          Bet placed successfully!
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-card">
        <div className="text-sm text-muted-foreground">Main Ground • Tournament Round 2</div>
        <Link href="/matches/1">
          <Button variant="outline" size="sm">
            Match Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

