import { site } from "../content";

export const primaryActions = [
  {
    label: "Send a request",
    detail: "Ask for a video, feature, teardown, or build",
    href: "https://requests.snackoverflowgeorge.com",
  },
  {
    label: "Agent loops",
    detail: "Reusable AI-agent loop catalog",
    href: "https://loopsradar.snackoverflowgeorge.com",
  },
  {
    label: "SnackVoice",
    detail: "AI captions and voice workflow product",
    href: "https://snackvoice.snackoverflowgeorge.com",
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

export const allReviewLinks = [...primaryActions, ...socialLinks, ...kitLinks] as const;
