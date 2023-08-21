"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function AuthSheet() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Login</Button>
      </SheetTrigger>
      <SheetContent>
        <form action="/auth/sign-in" method="post">
          <SheetHeader>
            <SheetTitle>Login</SheetTitle>
            <SheetDescription>
              Admin space to add entries to the database.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Username
              </Label>
              <Input
                id="email"
                required
                value={email}
                type="email"
                className="col-span-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                placeholder="••••••••"
                required
                type="password"
                value={password}
                className="col-span-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button formAction="/auth/sign-in" type="submit">
                Login
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
