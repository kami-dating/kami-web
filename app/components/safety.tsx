const secondary = [
  {
    title: "Made with the community",
    body: "Built for sapphic and WLW people, and guarded against people who aren't here for the right reasons.",
  },
  {
    title: "Community-powered",
    body: "Free to join and shaped by the people who use it, so safety grows with us instead of against us.",
  },
];

export function Safety() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 py-20"
    >
      <h2
        id="safety-heading"
        className="max-w-2xl font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl"
      >
        Safety isn&rsquo;t a feature. It&rsquo;s the foundation.
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/15 bg-linear-to-br from-magenta/45 via-plum-800 to-plum-800 p-8 md:row-span-2 md:p-10">
          <p className="font-display text-3xl font-semibold sm:text-4xl">
            No IDs. No face scans.
          </p>
          <p className="mt-4 max-w-md leading-7 text-white/80">
            We will never ask for government ID or biometrics. There&rsquo;s
            nothing sensitive to leak, because we never collect it.
          </p>
        </div>
        {secondary.map(({ title, body }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/15 bg-white/5 p-8"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 leading-7 text-white/75">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
