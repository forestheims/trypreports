import { AuthSheet } from "@/components/ui/auth-sheet";
import { NavMenu } from "@/components/ui/nav-menu";
import Image from "next/image";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "@/components/ui/logout_button";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
      <div className="z-9 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pr-4 pl-4">
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
        <NavMenu />
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;Welcome to&nbsp;
          <code className="font-mono font-bold">TrypReports.com</code>
          &nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:border-gray-300"
            href="https://tryplabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/tryplabslogo.svg"
              alt="Tryp Labs Logo"
              className="rounded-lg hover:bg-lime-300 dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://forestheims.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            &{" "}
            <Image
              src="/fox.svg"
              alt="Fox image"
              className="rounded-lg hover:bg-pink-400 dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="pt-4 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="rounded-lg border-gray-300 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/report.svg"
          alt="Report Image"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/explore"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Explore{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Search, browse, and visualize our database of chemical analysis
            results.
          </p>
        </Link>

        <Link
          href="/docs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find information about TrypReports features and API.
          </p>
        </Link>

        <Link
          href="/resources"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Resources{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learning resources and labs that offer analytical services!
          </p>
        </Link>

        <Link
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Who, What, and Why?
          </p>
        </Link>
      </div>
      <div className="h-12"></div>
    </main>
  );
}
