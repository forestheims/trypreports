import { AuthSheet } from "@/components/ui/auth-sheet";
import { NavMenu } from "@/components/ui/nav-menu";
import Image from "next/image";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "@/components/ui/logout_button";
import { cookies } from "next/headers";

export default async function SubmitSamples() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();

  return (
    // user ?
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
      <div className="z-9 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-4">
        {data.user ? (
          <div className="flex items-center gap-4">
            Hey, {data.user.email}!
            <LogoutButton />
          </div>
        ) : (
          <div className="fixed right-12 top-18 lg:top-4 lg:right-4 z-10">
            <AuthSheet />
          </div>
        )}
        <NavMenu />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <form
        action="/psilocybe"
        method="post"
        className="max-w-5xl w-full items-center justify-between font-mono text-sm "
      ></form>
    </main>
    // : <div></div>
    // redirect
  );
}
