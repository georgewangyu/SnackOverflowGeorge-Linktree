import { getIconPath, getImagePath } from "./utils/imageDiscovery";

// Icon key mapping: Each app maps to its PNG filename
// Just add: `key: "filename"` -> will auto-load /icons/filename.png
const iconMap = {
  youtube: "youtube",
  github: "github",
  tiktok: "tiktok",
  blog: "blog",
  x: "x",
  discord: "discord",
} as const;

export const site = {
  title: "SnackOverflowGeorge",
  tagline: "My corner of the internet",
  
  about: {
    photo: getImagePath("profile"),
    blurb: "Software engineer & creator. I build things that make life a little more curious.",
    linkText: "",
    linkHref: "",
  },
  
  // Main app grid - easy to add new apps here
  // Just add title, iconKey (from iconMap), and href
  apps: [
    {
      title: "YouTube Channel",
      iconKey: "youtube" as keyof typeof iconMap,
      href: "https://youtube.com/@snackoverflowgeorge",
      alt: "YouTube Channel",
    },
    {
      title: "GitHub",
      iconKey: "github" as keyof typeof iconMap,
      href: "https://github.com/georgewangyu",
      alt: "GitHub Profile",
    },
    {
      title: "TikTok",
      iconKey: "tiktok" as keyof typeof iconMap,
      href: "https://tiktok.com/@snackoverflowgeorge",
      alt: "TikTok Profile",
    },
    {
      title: "Blog",
      iconKey: "blog" as keyof typeof iconMap,
      href: "#",
      alt: "Blog",
    },
  ].map(app => ({
    ...app,
    icon: getIconPath(app.title, iconMap[app.iconKey]),
  })),
  
  feature: {
    image: getImagePath("feature"),
    caption: "",
    confetti: false,
  },
  
  // Social links for bottom row
  socials: [
    {
      title: "TikTok",
      iconKey: "tiktok" as keyof typeof iconMap,
      href: "https://tiktok.com/@snackoverflowgeorge",
    },
    {
      title: "X",
      iconKey: "x" as keyof typeof iconMap,
      href: "",
    },
    {
      title: "YouTube",
      iconKey: "youtube" as keyof typeof iconMap,
      href: "https://youtube.com/@snackoverflowgeorge",
    },
    {
      title: "Discord",
      iconKey: "discord" as keyof typeof iconMap,
      href: "",
    },
    {
      title: "GitHub",
      iconKey: "github" as keyof typeof iconMap,
      href: "https://github.com/georgewangyu",
    },
  ].map(social => ({
    ...social,
    icon: getIconPath(social.title, iconMap[social.iconKey]),
  })),
  
  newsletter: {
    ctaText: "Join my list →",
    href: "#",
  },
} as const;

