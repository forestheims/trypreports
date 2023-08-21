import { NavMenu } from "@/components/ui/nav-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/ui/logout_button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SampleForm } from "./sample-form";

export default async function SubmitSamples() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();
  
  const { data: {session} } = await supabase.auth.getSession();

  const addSample = async () => {

  }

  if (!session) {
      redirect('/unauthenticated')
  }

  return (
    // user ?
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
      <div className="z-9 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-4">
        <NavMenu />
        {data.user ? (
          <div className="flex items-center gap-4">
            Hey, {data.user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link href="/login" className="fixed right-12 top-18 lg:top-4 lg:right-4 z-10">
              <Button variant="outline">Login</Button>
            </Link>
        )}
      </div>
      <SampleForm />
    </main>
    // : <div></div>
    // redirect
  );
}
