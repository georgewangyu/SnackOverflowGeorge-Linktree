import { getIconPath, getImagePath } from "./utils/imageDiscovery";

// Icon key mapping: Each app maps to its PNG filename
// Just add: `key: "filename"` -> will auto-load /icons/filename.png
const iconMap = {
  youtube: "youtube",
  github: "github.svg",
  linkedin: "linkedin",
  tiktok: "tiktok",
  email: "email.svg",
  blog: "blog",
  substack: "substack.svg",
  x: "x.svg",
  discord: "discord",
  instagram: "instagram",
  snackvoice: "snackvoice",
  camera: "camera",
  scooter: "scooter",
  mug: "mug",
  microphone: "microphone",
} as const;

export const site = {
  title: "SnackOverflowGeorge",
  tagline: "My corner of the internet",

  temporaryBioLinks: [
    {
      label: "Send a request",
      detail: "Video or feature idea",
      href: "https://requests.snackoverflowgeorge.com",
    },
    {
      label: "Agent loops",
      detail: "YouTube companion",
      href: "/loops",
    },
    {
      label: "Vibranium demo",
      detail: "Free pizza",
      href: "https://calendly.com/d/dz37-wkq-sks/vibranium-demo-free-pizza",
      expiresAt: "2026-06-16T07:00:00.000Z",
    },
    {
      label: "B12",
      detail: "AI website builder",
      href: "https://b12.1stcollab.com/snackoverflowgeorge_ig",
      expiresAt: "2026-07-10T07:00:00.000Z",
    },
  ],
  
  about: {
    photo: getImagePath("profile"),
    blurb:
      "FAANG software engineer with 5+ years building production software and AI products. I teach practical AI automation with Claude Code and Codex.",
    linkText: "",
    linkHref: "",
  },
  
  // Personal items - 2x2 grid (LEFT column)
  personalItems: [
    {
      title: "My Camera",
      iconKey: "camera" as keyof typeof iconMap,
      href: "https://amzn.to/4oFe1Sx",
      alt: "My Camera",
    },
    {
      title: "My Scooter",
      iconKey: "scooter" as keyof typeof iconMap,
      href: "https://amzn.to/47LbXD5",
      alt: "My Scooter",
    },
    {
      title: "My Mug",
      iconKey: "mug" as keyof typeof iconMap,
      href: "https://amzn.to/3JOMChE",
      alt: "My Mug",
    },
    {
      title: "My Microphone",
      iconKey: "microphone" as keyof typeof iconMap,
      href: "https://amzn.to/41kaeAT",
      alt: "My Microphone",
    },
  ].map(item => ({
    ...item,
    icon: getIconPath(item.title, iconMap[item.iconKey]),
  })),
  
  // Social links - 2x2 grid (RIGHT column)
  socials: [
    {
      title: "My TikTok",
      iconKey: "tiktok" as keyof typeof iconMap,
      href: "https://www.tiktok.com/@snackoverflowgeorge",
    },
    {
      title: "My Instagram",
      iconKey: "instagram" as keyof typeof iconMap,
      href: "https://www.instagram.com/snackoverflowgeorge/",
    },
    {
      title: "My YouTube",
      iconKey: "youtube" as keyof typeof iconMap,
      href: "https://www.youtube.com/@snackoverflowgeorge?sub_confirmation=1",
    },
    {
      title: "My Discord",
      iconKey: "discord" as keyof typeof iconMap,
      href: "https://discord.com/invite/u8E2mR6Pjy",
    },
    {
      title: "My Substack",
      iconKey: "substack" as keyof typeof iconMap,
      href: "https://snackoverflowgeorge.substack.com/subscribe",
    },
    {
      title: "My X",
      iconKey: "x" as keyof typeof iconMap,
      href: "https://x.com/georgewangyu",
    },
    {
      title: "My LinkedIn",
      iconKey: "linkedin" as keyof typeof iconMap,
      href: "https://www.linkedin.com/in/georgewangyu/",
    },
    {
      title: "My GitHub",
      iconKey: "github" as keyof typeof iconMap,
      href: "https://github.com/georgewangyu",
    },
    {
      title: "Email me",
      iconKey: "email" as keyof typeof iconMap,
      href: "mailto:hellogeorgehq@gmail.com",
    },
    {
      title: "SnackVoice",
      iconKey: "snackvoice" as keyof typeof iconMap,
      href: "https://snackvoice.snackoverflowgeorge.com",
    },
  ].map(social => ({
    ...social,
    icon: getIconPath(social.title, iconMap[social.iconKey]),
  })),
  
  feature: {
    image: getImagePath("feature", "png"),
    caption: "My Playground",
    confetti: false,
  },
} as const;
