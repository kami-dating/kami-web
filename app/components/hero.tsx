import { communityLinks } from "../community-links";
import { PhoneMockup } from "./phone-mockup";

const joinHref = communityLinks.find((link) => link.href)?.href ?? "#community";
const joinIsExternal = joinHref.startsWith("http");

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pt-10 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16"
    >
      <div className="text-center lg:text-left">
        <p className="mx-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/85 lg:mx-0">
          For every sapphic and WLW person
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Meet someone who{" "}
          <span className="bg-linear-to-r from-coral via-rose to-blush bg-clip-text text-transparent">
            gets you.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80 lg:mx-0">
          Kami is a dating app built with the community, for the community. No
          ID checks and no face scans, just a place where you can show up as
          yourself.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href={joinHref}
            target={joinIsExternal ? "_blank" : undefined}
            rel={joinIsExternal ? "noopener noreferrer" : undefined}
            className="rounded-full bg-white px-7 py-3.5 font-semibold text-plum-900 shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join the community
          </a>
          <a
            href="#safety"
            className="rounded-full border border-white/25 px-7 py-3.5 font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            How we keep it safe
          </a>
        </div>
        <p className="mt-5 text-sm text-white/65">
          Kami isn&rsquo;t live yet. Join the community for updates and to help
          shape it.
        </p>
      </div>
      <PhoneMockup />
    </section>
  );
}
