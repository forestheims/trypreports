import { NavMenu } from "@/components/ui/nav-menu";
import Link from "next/link";

export default function Resources() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 p-4 lg:p-24 gap-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="">
          <NavMenu />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          &nbsp;External&nbsp;
          <code className="font-mono font-bold">Resources</code>
          &nbsp;
        </p>
      </div>
    </main>
  );
}
