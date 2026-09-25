import type { ReactNode } from "react";
import { communityLinks } from "../community-links";
import { PageShell } from "./page-shell";

export const LEGAL_UPDATED = "September 25, 2026";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <article className="mx-auto w-full max-w-3xl px-6 pt-10 pb-24">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-white/65">
          Last updated: {LEGAL_UPDATED}
        </p>
        <p className="mt-6 text-lg leading-8 text-white/85">{intro}</p>
        <div className="mt-12 space-y-10">{children}</div>
      </article>
    </PageShell>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-4 leading-7 text-white/80 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}

// The community spaces are our contact points until a dedicated address exists.
export function ContactLinks() {
  return (
    <ul>
      {communityLinks
        .filter((link) => link.href)
        .map(({ name, href }) => (
          <li key={name}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
    </ul>
  );
}
