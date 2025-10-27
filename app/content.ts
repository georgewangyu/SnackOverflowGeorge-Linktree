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
  instagram: "instagram",
  camera: "camera",
  scooter: "scooter",
  mug: "mug",
  microphone: "microphone",
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
  
  // Personal items - 2x2 grid (LEFT column)
  personalItems: [
    {
      title: "My Camera",
      iconKey: "camera" as keyof typeof iconMap,
      href: "https://amzn.to/4lOEqvg",
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
      href: "https://bit.ly/snackoverflowgeorgetiktok",
    },
    {
      title: "My Instagram",
      iconKey: "instagram" as keyof typeof iconMap,
      href: "https://bit.ly/snackoverflowgeorgeIG",
    },
    {
      title: "My YouTube",
      iconKey: "youtube" as keyof typeof iconMap,
      href: "https://bit.ly/georgewangyt",
    },
    {
      title: "My Discord",
      iconKey: "discord" as keyof typeof iconMap,
      href: "https://bit.ly/discordsnackoverflowgeorge",
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

