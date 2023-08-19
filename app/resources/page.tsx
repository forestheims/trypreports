import { ModeToggle } from '@/components/ui/mode-toggle'
import Image from 'next/image'

export default function Resources() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to&nbsp;
          <code className="font-mono font-bold">TrypReports</code>
          &nbsp;
          <ModeToggle />
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:border-gray-300"
            href="https://tryplabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
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
            &{' '}
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
    </main>
  )
}
