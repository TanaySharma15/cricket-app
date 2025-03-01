"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CalendarDays, Home, LogIn, Menu, TrendingUp, User, Users, Wallet } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/matches",
      label: "Matches",
      icon: CalendarDays,
      active: pathname === "/matches" || pathname.startsWith("/matches/"),
    },
    {
      href: "/matches/live",
      label: "Live",
      icon: TrendingUp,
      active: pathname === "/matches/live",
    },
    {
      href: "/teams",
      label: "Teams",
      icon: Users,
      active: pathname === "/teams" || pathname.startsWith("/teams/"),
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/profile" || pathname.startsWith("/profile/"),
    },
    {
      href: "/wallet",
      label: "Wallet",
      icon: Wallet,
      active: pathname === "/wallet",
    },
  ]

  return (
    <div className="flex h-16 items-center px-4 border-b">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <div className="flex h-full flex-col">
            <div className="flex items-center border-b py-4">
              <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
                <span className="text-xl">🏏</span>
                <span>Cricket Betting</span>
              </Link>
            </div>
            <nav className="flex-1 overflow-auto py-4">
              <ul className="grid gap-1">
                {routes.map((route) => (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        route.active ? "bg-accent text-accent-foreground" : "transparent",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <route.icon className="h-4 w-4" />
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t py-4">
              <div className="grid gap-1">
                <Link
                  href="/login"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <span className="text-xl">🏏</span>
        <span className="hidden md:inline-block">Cricket Betting</span>
      </Link>
      <nav className="hidden lg:flex mx-6 flex-1 items-center gap-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            <route.icon className="h-4 w-4" />
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Link href="/login" className="hidden sm:block">
          <Button variant="outline" size="sm">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm">Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

