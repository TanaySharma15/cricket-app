"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, CreditCard, DollarSign, Wallet } from "lucide-react"

export default function WalletPage() {
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // This would typically come from your API or database
  const walletBalance = 1250
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 500,
      date: "Today, 10:30 AM",
      status: "completed",
    },
    {
      id: 2,
      type: "bet",
      amount: -200,
      date: "Yesterday, 3:15 PM",
      status: "completed",
      description: "Bet on Hostel C vs Hostel D",
    },
    {
      id: 3,
      type: "win",
      amount: 420,
      date: "Yesterday, 6:30 PM",
      status: "completed",
      description: "Won bet on Hostel C vs Hostel D",
    },
    {
      id: 4,
      type: "withdraw",
      amount: -100,
      date: "3 days ago",
      status: "completed",
    },
  ]

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
      setDepositAmount("")
    }, 1500)
  }

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
      setWithdrawAmount("")
    }, 1500)
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold">My Wallet</h1>
        <p className="text-muted-foreground">Manage your funds and view transaction history</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Balance</CardTitle>
              <CardDescription>Your current available balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-6">
                <div className="text-center">
                  <Wallet className="h-12 w-12 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold">₹{walletBalance}</div>
                  <div className="text-sm text-muted-foreground mt-1">Available Balance</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/profile/history">
                <Button variant="outline" size="sm">
                  Transaction History
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Manage Funds</CardTitle>
              <CardDescription>Deposit or withdraw funds from your wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="deposit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="deposit">Deposit</TabsTrigger>
                  <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
                </TabsList>

                <TabsContent value="deposit">
                  <form onSubmit={handleDeposit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="depositAmount">Amount to Deposit</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="depositAmount"
                            type="number"
                            placeholder="Enter amount"
                            className="pl-10"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paymentMethod">Payment Method</Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border rounded-md p-3 flex items-center gap-3 cursor-pointer bg-muted/50">
                            <CreditCard className="h-5 w-5" />
                            <span>Credit/Debit Card</span>
                          </div>
                          <div className="border rounded-md p-3 flex items-center gap-3 cursor-pointer">
                            <Wallet className="h-5 w-5" />
                            <span>UPI</span>
                          </div>
                        </div>
                      </div>
                      {showSuccess && (
                        <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
                          Deposit successful!
                        </div>
                      )}
                      <Button type="submit" className="w-full" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Deposit Funds"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="withdraw">
                  <form onSubmit={handleWithdraw}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="withdrawAmount">Amount to Withdraw</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="withdrawAmount"
                            type="number"
                            placeholder="Enter amount"
                            className="pl-10"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            required
                            max={walletBalance}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="withdrawMethod">Withdrawal Method</Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border rounded-md p-3 flex items-center gap-3 cursor-pointer bg-muted/50">
                            <CreditCard className="h-5 w-5" />
                            <span>Bank Account</span>
                          </div>
                          <div className="border rounded-md p-3 flex items-center gap-3 cursor-pointer">
                            <Wallet className="h-5 w-5" />
                            <span>UPI</span>
                          </div>
                        </div>
                      </div>
                      {showSuccess && (
                        <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
                          Withdrawal request submitted!
                        </div>
                      )}
                      <Button type="submit" className="w-full" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Withdraw Funds"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your recent wallet activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-full p-2 ${
                        transaction.type === "deposit" || transaction.type === "win" ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "deposit" || transaction.type === "win" ? (
                        <ArrowDown
                          className={`h-4 w-4 ${
                            transaction.type === "deposit" || transaction.type === "win"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        />
                      ) : (
                        <ArrowUp className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">
                        {transaction.type === "deposit" && "Deposit"}
                        {transaction.type === "withdraw" && "Withdrawal"}
                        {transaction.type === "bet" && "Bet Placed"}
                        {transaction.type === "win" && "Bet Won"}
                      </div>
                      {transaction.description && (
                        <div className="text-sm text-muted-foreground">{transaction.description}</div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                      {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount)}
                    </div>
                    <div className="text-xs text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/profile/history" className="w-full">
              <Button variant="outline" className="w-full">
                View All Transactions
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

