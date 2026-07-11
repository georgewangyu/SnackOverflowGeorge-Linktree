import { site } from "../content";

export const primaryActions = [
  {
    label: "Send a request",
    detail: "Ask for a video, feature, teardown, or build",
    href: "https://requests.snackoverflowgeorge.com",
  },
] as const;

export const consultationOffers = [
  {
    eyebrow: "For businesses",
    title: "1:1 AI Workflow Consultation",
    detail: "Turn one business workflow into a practical AI automation plan.",
    meta: "$149 · 30 minutes",
    href: "https://cal.com/george-iaqqbo/ai-business-workflow-consultation",
  },
  {
    eyebrow: "For students & early-career engineers",
    title: "CS Career, Resume & Project Review",
    detail: "Get direct feedback on your resume, projects, interviews, or path into tech.",
    meta: "$149 · 30 minutes",
    href: "https://cal.com/george-iaqqbo/cs-career-resume-project-review",
  },
] as const;

export const resourceOffers = [
  {
    kind: "lead-magnet",
    eyebrow: "Free guide",
    title: "How AI Actually Works",
    detail: "A practical guide to context, prompts, tools, memory, review, and useful business workflows.",
    meta: "Free PDF",
    cta: "Get the guide →",
  },
  {
    kind: "link",
    eyebrow: "$9.99 playbook",
    title: "The Seven-Day AI Workflow Pilot Playbook",
    detail: "A 40-page system for scoping, building, testing, and deciding what to do with your first AI workflow.",
    meta: "$9.99 · One-time purchase",
    href: "https://buy.stripe.com/dRm6oHbTgd2g2qZ1Vh53O01",
    cta: "Get the playbook →",
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
    "My Substack",
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
