"use client"

import LogoutButton from "@/components/ui/logout_button";
import { NavMenu } from "@/components/ui/nav-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@radix-ui/react-icons";
import { resources } from "./assets";
import { useUser } from "@/lib/userProvider";

export default function Resources() {
  const { user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 lg:p-24 gap-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-4 pr-4">
        <div className="">
          <NavMenu />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;External&nbsp;
          <code className="font-mono font-bold">Resources</code>
          &nbsp;
        </p>
        {user ? (
          <div className="fixed top-24 lg:top-4 right-0 z-10 mr-4 flex items-center gap-4">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            className="fixed top-24 lg:top-4 right-0 z-10 mr-4"
          >
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
      <div className="flex flex-col max-w-5xl w-full items-start p-4 gap-10">
        {resources.map((resource) => (
          <div
            key={resource.url}
            className="flex items-center hover:text-orange-600 cursor-pointer border-2 hover:border-orange-300 rounded-lg p-4"
          >
            <GlobeIcon />
            &nbsp;
            <Link href={resource.url}>{resource.name}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
