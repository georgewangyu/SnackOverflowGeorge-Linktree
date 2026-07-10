import { site } from "../content";

export const primaryActions = [
  {
    label: "Send a request",
    detail: "Ask for a video, feature, teardown, or build",
    href: "https://requests.snackoverflowgeorge.com",
  },
] as const;

export const radarLinks = [
  {
    title: "Builder Radar",
    detail: "Builders, repos, launches, and AI workflow signals",
    href: "https://georgebuilderradar.snackoverflowgeorge.com",
    icon: "/icons/builder-radar.svg",
  },
  {
    title: "Loops Radar",
    detail: "Reusable AI-agent loops and workflow patterns",
    href: "https://loopsradar.snackoverflowgeorge.com",
    icon: "/icons/loops-radar.svg",
  },
  {
    title: "Books Radar",
    detail: "Book recommendations and reading notes that compound",
    href: "https://booksradar.snackoverflowgeorge.com",
    icon: "/icons/books-radar.svg",
  },
  {
    title: "Hooks Radar",
    detail: "Short-form video hook formulas and examples",
    href: "https://hooksradar.snackoverflowgeorge.com",
    icon: "/icons/hooks-radar.svg",
  },
  {
    title: "AI Radar",
    detail: "AI papers and crash-course reading paths",
    href: "https://airadar.snackoverflowgeorge.com",
    icon: "/icons/ai-radar.svg",
  },
  {
    title: "AI Leaderboard Radar",
    detail: "Lean AI-native companies with high revenue per employee",
    href: "https://aileaderboardradar.snackoverflowgeorge.com",
    icon: "/icons/ai-leaderboard-radar.svg",
  },
  {
    title: "Sports Radar",
    detail: "Sports internet moments worth sending to the group chat",
    href: "https://sportsradar.snackoverflowgeorge.com",
    icon: "/icons/sports-radar.svg",
  },
] as const;

export const socialLinks = site.socials.filter((link) =>
  [
    "My TikTok",
    "My Instagram",
    "My YouTube",
    "My X",
    "My LinkedIn",
    "My GitHub",
    "Email me",
  ].includes(link.title),
);

export const kitLinks = site.personalItems;

export const betaNav = [
  { label: "Old Linktree", href: "/classic" },
  { label: "Bento", href: "/beta/bento" },
  { label: "Dark Glass", href: "/beta/glass" },
  { label: "Editorial", href: "/beta/editorial" },
] as const;

export const proofCards = [
  {
    kicker: "Building",
    title: "AI workflows that actually ship",
    copy: "Small tools, creator experiments, and practical software notes from the messy middle.",
  },
  {
    kicker: "Watching",
    title: "Agent loops, creator tools, and product wedges",
    copy: "Public breadcrumbs from the things I am testing before they become polished projects.",
  },
  {
    kicker: "Routing",
    title: "The fastest path to the right George link",
    copy: "Requests, socials, products, GitHub, and the public notebook in one intentional surface.",
  },
] as const;

export const allReviewLinks = [...primaryActions, ...radarLinks, ...socialLinks, ...kitLinks] as const;
