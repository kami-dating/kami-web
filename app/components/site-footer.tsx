import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-8 text-sm text-white/65 sm:flex-row">
      <span className="flex items-center gap-2.5">
        <Image
          src="/kami-mark.png"
          alt=""
          width={24}
          height={24}
          className="rounded-full"
        />
        <span>&copy; {new Date().getFullYear()} Project Kami</span>
      </span>
      <span>Made by and for the community.</span>
    </footer>
  );
}
