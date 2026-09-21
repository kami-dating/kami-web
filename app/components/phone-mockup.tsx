import Image from "next/image";

const interests = ["Climbing", "Vinyl records", "Slow mornings"];

// Illustrative preview only: abstract art, no real people.
export function PhoneMockup() {
  return (
    <div aria-hidden className="relative mx-auto w-68 sm:w-76">
      <div className="absolute -inset-10 -z-10 rounded-full bg-magenta/35 blur-3xl" />
      <div className="rounded-[2.75rem] border border-white/15 bg-plum-950 p-3 shadow-2xl shadow-black/50 motion-safe:animate-float">
        <div className="relative aspect-9/17 overflow-hidden rounded-[2.1rem] bg-plum-900">
          <div className="flex items-center justify-between px-5 pt-4">
            <span className="flex items-center gap-2">
              <Image
                src="/kami-mark.png"
                alt=""
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-display text-lg font-semibold">kami</span>
            </span>
            <span className="h-1.5 w-8 rounded-full bg-white/25" />
          </div>

          <div className="absolute inset-x-4 top-16 bottom-24">
            <div className="absolute inset-0 -rotate-6 scale-95 rounded-3xl bg-linear-to-b from-rose/70 to-magenta/70" />
            <div className="absolute inset-0 rotate-3 scale-[0.97] rounded-3xl bg-linear-to-b from-coral/70 to-rose/70" />
            <div className="absolute inset-0 overflow-hidden rounded-3xl bg-linear-to-br from-coral via-rose to-magenta shadow-xl shadow-black/40">
              <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blush/45" />
              <div className="absolute top-16 -left-12 h-40 w-40 rounded-full bg-plum-800/40" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-plum-950/90 via-plum-950/60 to-transparent px-4 pt-16 pb-4">
                <p className="font-display text-2xl font-semibold">Sam, 26</p>
                <p className="text-xs text-white/75">Nearby</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full bg-white/15 px-2.5 py-1 text-[0.7rem] backdrop-blur-sm"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-5">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </span>
            <span className="grid h-14 w-14 place-items-center rounded-full bg-linear-to-br from-coral to-magenta shadow-lg shadow-magenta/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
