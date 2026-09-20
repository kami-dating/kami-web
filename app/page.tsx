import Image from "next/image";
import { communityLinks } from "./community-links";

const promises = [
  {
    title: "No IDs. No face scans.",
    body: "We will never ask for government ID or biometrics. Nothing sensitive to leak, because we never collect it.",
  },
  {
    title: "Built for sapphic & WLW people",
    body: "A space made with the community, guarded against catfishers, cis men, and couples hunting for a third.",
  },
  {
    title: "Community-powered",
    body: "Kami is free to join and shaped by the people using it, so safety scales with us instead of against us.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-hidden bg-[#241031] text-white">
      {/* Soft glows pulled from the logo's coral-to-magenta palette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_15%_-10%,rgb(244_143_120/0.32),transparent_60%),radial-gradient(55rem_40rem_at_100%_20%,rgb(176_58_138/0.38),transparent_60%),radial-gradient(50rem_35rem_at_50%_110%,rgb(214_110_160/0.25),transparent_60%),linear-gradient(to_bottom,#3a1a4d,#241031)]"
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 py-10 text-center sm:py-14">
        <Image
          src="/kami-logo.jpg"
          alt="Kami logo"
          width={96}
          height={96}
          className="rounded-full shadow-lg shadow-black/40 ring-2 ring-white/20"
        />
        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
          Kami
        </h1>
        <p className="mt-3 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
          A dating app for every sapphic and WLW person, where you can arrive
          without having to prove yourself to a stranger&rsquo;s database.
        </p>

        <section aria-labelledby="safety" className="mt-10 w-full">
          <h2 id="safety" className="text-2xl font-semibold">
            Safe by design
          </h2>
          <ul className="mt-5 grid gap-3 text-left sm:grid-cols-3">
            {promises.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">{body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="community" className="mt-12 w-full">
          <h2 id="community" className="text-2xl font-semibold">
            Come say hi
          </h2>
          <p className="mt-2 text-white/75">
            We&rsquo;re building Kami in the open. Join us wherever you feel
            most comfortable.
          </p>
          <ul className="mx-auto mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
            {communityLinks.map(({ name, blurb, href }) => (
              <li key={name}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col rounded-2xl bg-white/95 p-6 text-left text-[#2a1238] shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="text-xl font-semibold">
                      Join our {name} <span aria-hidden>&rarr;</span>
                    </span>
                    <span className="mt-2 text-[#2a1238]/75">{blurb}</span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-2xl border border-white/25 bg-white/10 p-6 text-left">
                    <span className="text-xl font-semibold">
                      {name}{" "}
                      <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 align-middle text-xs font-medium">
                        Coming soon
                      </span>
                    </span>
                    <span className="mt-2 text-white/75">{blurb}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="px-6 py-6 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Project Kami
      </footer>
    </div>
  );
}
