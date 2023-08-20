"use client"
 
import * as React from "react"
import { RowsIcon } from "@radix-ui/react-icons"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"


export function NavMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <RowsIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <RowsIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ModeToggle />
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/explore">Explore</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/docs">Docs</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/resources">Resources</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about">About</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}