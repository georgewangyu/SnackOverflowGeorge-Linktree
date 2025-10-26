export const site = {
  title: "SnackOverflowGeorge",
  tagline: "My corner of the internet",
  
  about: {
    photo: "/images/profile.jpg",
    blurb: "Software engineer & creator. I build things that make life a little more curious.",
    linkText: "",
    linkHref: "",
  },
  
  // Main app grid - easy to add new apps here
  apps: [
    {
      title: "YouTube Channel",
      icon: "/icons/youtube.png",
      href: "https://youtube.com/@snackoverflowgeorge",
      alt: "YouTube Channel",
    },
    {
      title: "GitHub",
      icon: "/icons/github.png",
      href: "https://github.com/georgewangyu",
      alt: "GitHub Profile",
    },
    {
      title: "TikTok",
      icon: "/icons/tiktok.png",
      href: "https://tiktok.com/@snackoverflowgeorge",
      alt: "TikTok Profile",
    },
    {
      title: "Blog",
      icon: "/icons/blog.png",
      href: "#",
      alt: "Blog",
    },
  ],
  
  feature: {
    image: "",
    caption: "",
    confetti: false,
  },
  
  // Social links for bottom row
  socials: [
    {
      title: "TikTok",
      icon: "/icons/tiktok.png",
      href: "https://tiktok.com/@snackoverflowgeorge",
    },
    {
      title: "X",
      icon: "/icons/x.png",
      href: "",
    },
    {
      title: "YouTube",
      icon: "/icons/youtube.png",
      href: "https://youtube.com/@snackoverflowgeorge",
    },
    {
      title: "Discord",
      icon: "/icons/discord.png",
      href: "",
    },
    {
      title: "GitHub",
      icon: "/icons/github.png",
      href: "https://github.com/georgewangyu",
    },
  ],
  
  newsletter: {
    ctaText: "Join my list →",
    href: "#",
  },
} as const;

