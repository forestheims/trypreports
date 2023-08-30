"use client";

import { NavMenu } from "@/components/ui/nav-menu";
import Messages from "./messages";
import { redirect } from "next/navigation";
import { useUser } from "@/lib/userProvider";

export default function Login() {
  const { user } = useUser();

  if (user) {
    redirect("/submit");
    // console.log("Session:", session)
    // # this console log currently prints to the server side console
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:p-24 pt-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-4 pr-4">
        <div className="">
          <NavMenu />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">TrypReports</code>
          &nbsp;Login
        </p>
      </div>
      <form
        className=" max-w-5xl flex-1 flex flex-col w-full justify-center gap-2 text-foreground p-4"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
        <Messages />
      </form>
    </main>
  );
}
