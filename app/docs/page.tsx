import { NavMenu } from "@/components/ui/nav-menu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Docs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start lg:p-24 pt-24 gap-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono pl-4 text-sm lg:flex">
        <div className="">
          <NavMenu />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;
          <code className="font-mono font-bold">TrypReports</code>
          &nbsp;Docs&nbsp;
        </p>
      </div>
      <div className="flex flex-col max-w-5xl w-full items-start lg:ml-40 p-4 gap-10">
        <div className="flex max-w-5xl w-full items-center hover:text-orange-600 cursor-pointer">
          <GitHubLogoIcon />
          &nbsp;
          <Link href="https://github.com/forestheims/alis">Front End Repo</Link>
        </div>
        <div className="flex max-w-5xl w-full items-center hover:text-orange-600 cursor-pointer">
          <GitHubLogoIcon />
          &nbsp;
          <Link href="https://github.com/forestheims/alis-data">
            Back End Repo
          </Link>
        </div>
      </div>
    </main>
  );
}
