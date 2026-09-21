import { communityLinks } from "../community-links";

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pb-20"
    >
      <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 id="community-heading" className="text-xl font-semibold">
            Talk to us
          </h2>
          <p className="mt-1 max-w-md text-sm leading-6 text-white/70">
            Questions, ideas, or just saying hi? Find us in the community.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:min-w-md">
          {communityLinks.map(({ name, blurb, href }) => (
            <li key={name}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="font-semibold">
                    {name} <span aria-hidden>&rarr;</span>
                  </span>
                  <span className="mt-1 text-sm text-white/70">{blurb}</span>
                </a>
              ) : (
                <div className="flex h-full flex-col rounded-2xl border border-dashed border-white/20 p-4">
                  <span className="font-semibold">
                    {name}{" "}
                    <span className="ml-1 rounded-full bg-white/15 px-2 py-0.5 align-middle text-xs font-medium">
                      Coming soon
                    </span>
                  </span>
                  <span className="mt-1 text-sm text-white/70">{blurb}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
