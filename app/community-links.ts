// Official community links. Leave `href` empty until the space exists;
// the landing page renders an empty entry as "Coming soon".
export type CommunityLink = {
  name: string;
  blurb: string;
  href: string;
};

export const communityLinks: CommunityLink[] = [
  {
    name: "Discord",
    blurb: "Chat live, meet the team, and help shape Kami.",
    href: "https://discord.gg/RZdrWX2HUt",
  },
  {
    name: "Reddit",
    blurb: "Long-form discussion, updates, and feedback threads.",
    href: "https://www.reddit.com/r/KamiApp/",
  },
];
