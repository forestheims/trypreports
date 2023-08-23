import { NavMenu } from "@/components/ui/nav-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/ui/logout_button";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SampleForm } from "./sample-form";

export default async function SubmitSamples() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/unauthenticated");
  }

  return (
    // user ?
    <main className="flex min-h-screen flex-col items-center justify-start lg:p-24 pt-24 gap-8">
      <div className="z-9 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-4">
        <NavMenu />
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Add samples to&nbsp;
          <code className="font-mono font-bold">TrypReports</code>
          &nbsp;
        </p>
        {data.user ? (
          <div className="fixed top-24 lg:top-4 right-0 z-10 mr-4 flex items-center gap-4">
            Hey, {data.user.email}!
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
      <div>
        <SampleForm />
      </div>
    </main>
    // : <div></div>
    // redirect
  );
}
