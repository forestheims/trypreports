import { NavMenu } from "@/components/ui/nav-menu";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24 gap-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pl-4 lg:pl-0">
        <div className="">
          <NavMenu />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          About&nbsp;
          <code className="font-mono font-bold">TrypReports</code>
          &nbsp;
        </p>
      </div>
      <div className="flex flex-col place-items-center gap-5 p-8 lg:p-0">
        <Link className="flex place-items-center gap-2 p-8 lg:p-0" href="/">
          <Image
            src="/report.svg"
            alt="TrypReports Logo"
            className="rounded-lg hover:bg-orange-300 dark:invert"
            width={100}
            height={100}
            priority
          />
        </Link>

        <div className="flex flex-col max-w-5xl w-full items-start gap-10">
          <h1>TrypReports Liability Notice</h1>

          <p>
            <strong>
              Disclaimer: Use of Analytical Chemistry Data for Psilocybe
              Mushroom Samples
            </strong>
          </p>

          <p>
            Welcome to TrypReports. We provide analytical chemistry data for
            Psilocybe mushroom samples to assist users in their research and
            understanding of these fungi. Before you proceed, please carefully
            read and acknowledge the following liability notice:
          </p>

          <ol className="flex flex-col gap-10">
            <li>
              <strong>Information Purpose:</strong> The data provided on this
              website is for informational and educational purposes only. It is
              not intended to promote or condone the cultivation, possession,
              distribution, or use of Psilocybe mushrooms in any illegal or
              harmful manner.
            </li>

            <li>
              <strong>Legal Compliance:</strong> It is your responsibility to
              ensure that your use of this information complies with all
              applicable local, state, and federal laws. The legality of
              Psilocybe mushrooms varies widely by jurisdiction, and you are
              solely responsible for understanding and adhering to the laws in
              your area.
            </li>

            <li>
              <strong>Safety and Responsibility:</strong> Psilocybe mushrooms
              contain psychoactive compounds that can have powerful and
              unpredictable effects on individuals. If you choose to engage with
              these substances, you do so at your own risk. We strongly advise
              caution, responsibility, and moderation in any activities related
              to Psilocybe mushrooms.
            </li>

            <li>
              <strong>Accuracy of Information:</strong> While we strive to
              provide accurate and reliable analytical chemistry data, we cannot
              guarantee the accuracy, completeness, or up-to-date nature of the
              information presented on this website. Users should independently
              verify any data or information for their specific purposes.
            </li>

            <li>
              <strong>No Endorsement:</strong> The presence of analytical
              chemistry data on this website should not be construed as an
              endorsement or encouragement to engage in any illegal or harmful
              activities. We do not promote or endorse any specific use of
              Psilocybe mushrooms.
            </li>

            <li>
              <strong>Limitation of Liability:</strong> TrypReports and its
              operators, owners, employees, and affiliates shall not be held
              liable for any direct or indirect damages, losses, or legal
              consequences resulting from your use of the information provided
              on this website.
            </li>

            <li>
              <strong>Age Restriction:</strong> This website is intended for use
              by individuals who are of legal age in their jurisdiction. Users
              must confirm that they meet the legal age requirement for
              accessing and using this website.
            </li>
          </ol>

          <p>
            By using TrypReports, you acknowledge that you have read,
            understood, and agreed to the terms of this liability notice. Your
            use of the website signifies your acceptance of these terms and your
            commitment to using the information provided responsibly and
            legally.
          </p>

          <p>
            If you do not agree with any part of this notice, please refrain
            from using this website.
          </p>

          <p>
            For any questions or concerns regarding this liability notice or the
            content of this website, please contact us at [Contact Information].
          </p>

          <p>
            Thank you for your understanding and responsible use of our
            resources.
          </p>

          <p>Sincerely,</p>
          <p>
            TrypReports
            <br />
            trypreports.com
          </p>
        </div>
      </div>
      <div className="flex flex-col place-items-center gap-5 p-8 lg:p-0 max-w-5xl ">
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
        <p>
          &quot;I founded Tryp Labs to pursue my interests in the chemistry of
          fungi. I am currently studying Psilocybe zapotecorum and developing
          methods for its culture techniques to supplement its analysis.&quot;
        </p>
      </div>
      <div className="flex flex-col place-items-center gap-5 p-8 lg:p-0 max-w-5xl ">
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
        <p>
          &quot;I come from an academic background of chemistry, philosophy, and
          art. Open source information & education will always be a value I
          hold, and I also love to teach and continuously learn.&quot;
        </p>
      </div>
    </main>
  );
}
