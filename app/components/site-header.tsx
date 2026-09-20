import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      <a
        href="#top"
        aria-label="Kami home"
        className="flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <Image
          src="/kami-mark.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full ring-1 ring-white/20"
        />
        <span className="font-display text-2xl font-semibold tracking-tight">
          kami
        </span>
      </a>
      <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
        <a
          href="#safety"
          className="hidden rounded-full px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white sm:inline"
        >
          Safety
        </a>
        <a
          href="#community"
          className="hidden rounded-full px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white sm:inline"
        >
          Community
        </a>
        <span className="ml-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-medium">
          Launching soon
        </span>
      </nav>
    </header>
  );
}
