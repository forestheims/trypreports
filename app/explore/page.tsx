"use client"

import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/ui/logout_button";
import { NavMenu } from "@/components/ui/nav-menu";
import ScrollTable from "@/components/ui/scroll-table";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
import Link from "next/link";
import { useState } from "react";

export default function Explore() {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const user = {email: "silly@sally.so"}
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showCaution, setShowCaution] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:p-24 pt-24 gap-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pr-4 pl-4">
        <div className=" lg:pl-0 lg:pt-0">
          {/* <NavMenu /> */}
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
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col p-4">
        <ScrollTable />
        <div className="flex w-full justify-start">
          <p className="m-2 p-2">*Disclaimer:</p>
          {
            showDisclaimer ?
            <>
              <p className="m-2 p-2">The information presented here is intended solely for educational and informational purposes. It should not be construed as an endorsement or encouragement to use Psilocybe mushrooms or any other substances. The use of such substances is subject to legal regulations and health risks that vary by jurisdiction. Please seek guidance from medical professionals and adhere to local laws and regulations when considering any substance use.</p>
              <Button onClick={() => setShowDisclaimer(!showDisclaimer)} variant="destructive" className="self-center">Hide</Button>
            </>
            :
            <Button onClick={() => setShowDisclaimer(!showDisclaimer)} variant="secondary" className="self-center">Display</Button>
          }
        </div>
        <div className="flex w-full justify-start">
          <p className="m-2 p-2">*Exercise Caution:</p> 
          {
            showCaution ?
            <>
              <p className="m-2 p-2">The &apos;Total Psilocybin Equivalents&apos; value, which we provide for comparing different Psilocybe mushroom varieties, should be approached with care. It is derived from a stoichiometric sum of the masses of various tryptamines analyzed, but it may not offer a precise representation of potency. Different compounds within the mushrooms exhibit distinct dose responses, making this value semi-meaningless in predicting the actual effects of consumption. While it can serve as a rough reference point for comparing different varietals, please be aware that individual experiences can vary significantly due to the complex interplay of these compounds and individual tolerance levels. Always start with small doses and exercise caution when exploring new mushroom varieties.</p>
              <Button onClick={() => setShowCaution(!showCaution)} variant="destructive" className="self-center">Hide</Button>
            </>
            :
            <Button onClick={() => setShowCaution(!showCaution)} variant="secondary" className="self-center">Display</Button>
          }
        </div>
      </div>
    </main>
  );
}
