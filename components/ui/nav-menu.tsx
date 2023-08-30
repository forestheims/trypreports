"use client";

import * as React from "react";
import { RowsIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import { useUser } from "@/lib/userProvider";

export function NavMenu() {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <RowsIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <RowsIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full">
        <ModeToggle />
        {user ? (
          <DropdownMenuItem>
            <Link href="/submit" className="w-full">
              Add Samples
            </Link>
          </DropdownMenuItem>
        ) : (
          <></>
        )}
        <DropdownMenuItem>
          <Link href="/" className="w-full">
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/explore" className="w-full">
            Explore
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/docs" className="w-full">
            Docs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/resources" className="w-full">
            Resources
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about" className="w-full">
            About
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
