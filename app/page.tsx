import { Community } from "./components/community";
import { Hero } from "./components/hero";
import { Safety } from "./components/safety";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-hidden">
      {/* Soft glows pulled from the logo's coral-to-magenta palette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_10%_-5%,rgb(244_143_120/0.28),transparent_60%),radial-gradient(55rem_40rem_at_100%_15%,rgb(176_58_138/0.38),transparent_60%),radial-gradient(50rem_35rem_at_50%_100%,rgb(214_110_160/0.22),transparent_60%),linear-gradient(to_bottom,#3a1a4d,#241031_45%,#1c0c27)]"
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-plum-900"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Safety />
        <Community />
      </main>
      <SiteFooter />
    </div>
  );
}
