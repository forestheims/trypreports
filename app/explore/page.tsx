import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/ui/logout_button";
import { NavMenu } from "@/components/ui/nav-menu";
import ScrollTable from "@/components/ui/scroll-table";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Explore() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:p-24 pt-24 gap-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pr-4 pl-4">
        <div className=" lg:pl-0 lg:pt-0">
          <NavMenu />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Explore&nbsp;
          <code className="font-mono font-bold">TrypReports</code>
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
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4">
        <ScrollTable />
      </div>
    </main>
  );
}
