import { NavMenu } from '@/components/ui/nav-menu'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-24 lg:pl-0">
          <NavMenu />
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          About&nbsp;
          <code className="font-mono font-bold">TrypReports</code>
          &nbsp;
        </p>
      </div>
      <div className="flex flex-col place-items-center gap-5 p-8 lg:p-0">
      <Link
            className="flex place-items-center gap-2 p-8 lg:p-0"
            href="/"
          >
            <Image
              src="/report.svg"
              alt="TrypReports Logo"
              className="rounded-lg hover:bg-orange-300 dark:invert"
              width={100}
              height={100}
              priority
            />
            </Link>
            
          <p>Trypreports is a publicly accesible information sharing platform for chemical analysis data of Psilocybe mushrooms.</p>
          <p></p>
      </div>
      <div className="flex flex-col place-items-center gap-5 p-8 lg:p-0">
          <a
            className="flex place-items-center gap-2 p-8 lg:p-0"
            href="https://tryplabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tryplabslogo.svg"
              alt="Tryp Labs Logo"
              className="rounded-lg hover:bg-lime-300 dark:invert"
              width={100}
              height={100}
              priority
            />
          </a>
          <h2>Jordan Jacobs</h2>
          <p>Founder & Chemist of Tryp Labs</p>
          <p>&quot;I founded Tryp Labs to pursue my interests in the chemistry of fungi. I am currently studying Psilocybe zapotecorum and developing methods for its culture techniques to supplement its analysis.&quot;</p>
      </div>
      <div className="flex flex-col place-items-center gap-5 p-8 lg:p-0">
          <a
            className="flex place-items-center gap-2 p-8 lg:p-0"
            href="https://forestheims.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fox.svg"
              alt="Fox image"
              className="rounded-lg hover:bg-pink-400 dark:invert"
              width={100}
              height={100}
              priority
            />
          </a>
          <h2>Forest Heims</h2>
          <p>Software Developer & Chemist</p>
          <p>&quot;I come from an academic background of chemistry, philosophy, and art. Open source information & education will always be a value I hold, and I also love to teach and continuously learn.&quot;</p>
      </div>
    </main>
  )
}
