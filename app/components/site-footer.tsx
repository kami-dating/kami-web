import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/delete-account", label: "Delete account" },
  { href: "/delete-data", label: "Delete data" },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-white/10 px-6 py-8 text-sm text-white/65">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
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
        <nav
          aria-label="Legal"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mt-4 text-center sm:text-left">
        Made by and for the community.
      </p>
    </footer>
  );
}
