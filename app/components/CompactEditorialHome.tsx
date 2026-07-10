import Image from "next/image";
import { BrandMark } from "./BrandMark";
import { SmartLink } from "../beta/components";
import { kitLinks, primaryActions, radarLinks, socialLinks } from "../beta/data";
import { site } from "../content";

const emailIcon = socialLinks.find((link) => link.title === "Email me")?.icon;
const snackVoiceIcon = site.socials.find((link) => link.title === "SnackVoice")?.icon;

const actionLinks = primaryActions.map((action) => ({
  ...action,
  title: action.label,
  icon: emailIcon,
}));

const buildLinks = [
  ...socialLinks.filter((link) => ["My GitHub", "My LinkedIn", "My X"].includes(link.title)),
  {
    title: "SnackVoice",
    detail: "AI captions and voice workflow product",
    href: "https://snackvoice.snackoverflowgeorge.com",
    icon: snackVoiceIcon,
  },
] as const;

function getLinkFallback(title: string) {
  const words = title.replace(/^My\s+/, "").replace(/\s+Radar$/, "").split(/\s+/);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

const sections = [
  {
    label: "Channels",
    title: "Short-form and long-form channels",
    links: socialLinks.filter((link) =>
      ["My TikTok", "My Instagram", "My YouTube"].includes(link.title),
    ),
  },
  {
    label: "Build",
    title: "Products, code, and public work",
    links: buildLinks,
  },
  {
    label: "Radars",
    title: "Public feeds and catalogs",
    links: radarLinks,
  },
  {
    label: "Use",
    title: "Gear and creator setup",
    links: kitLinks,
  },
  {
    label: "Request",
    title: "Send a request",
    links: actionLinks,
  },
] as const;

export function CompactEditorialHome() {
  return (
    <section className="mx-auto grid w-full max-w-3xl gap-5 overflow-x-clip px-3 py-5 sm:px-4 sm:py-8">
      <header className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-black/10">
            <Image src={site.about.photo} alt="George Wang" fill className="object-cover" priority sizes="64px" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <BrandMark className="h-8 w-8 shrink-0" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d44937]">
                SnackOverflowGeorge
              </p>
            </div>
            <h1 className="mt-1 text-2xl font-black leading-tight text-[#141414]">
              George Wang
            </h1>
            <p className="mt-1 text-sm leading-5 text-black/58">
              Software, AI workflows, creator experiments, and useful links.
            </p>
          </div>
        </div>
      </header>

      <div className="min-w-0 rounded-[1.5rem] border border-black/10 bg-[#202126] p-5 text-white shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ddbd4]">
              Intro
            </p>
            <h2 className="mt-2 text-[1.35rem] font-black leading-tight sm:text-2xl">
              Agentic software engineer and creator building public experiments around AI workflows.
            </h2>
          </div>
        </div>
      </div>

      {sections.map((section) => (
        <section
          key={section.label}
          className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="flex flex-col gap-1 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#315fd6]">
              {section.label}
            </p>
            <h2 className="max-w-md text-left text-xl font-black leading-tight sm:text-right">
              {section.title}
            </h2>
          </div>
          <div className="mt-4 grid gap-2">
            {section.links.map((link) => (
              <SmartLink
                key={link.href}
                href={link.href}
                className="group flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-[#f3f0e8] sm:gap-4"
              >
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-black/5">
                  {link.icon ? (
                    <Image src={link.icon} alt="" fill className="object-cover" sizes="44px" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xs font-black text-black/48">
                      {getLinkFallback(link.title)}
                    </span>
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold leading-tight">{link.title.replace("My ", "")}</span>
                  <span className="mt-1 block truncate text-sm text-black/50">
                    {"detail" in link
                      ? link.detail
                      : link.href.replace("https://", "").replace("mailto:", "")}
                  </span>
                </span>
                <span className="ml-2 shrink-0 text-sm font-bold text-black/36 transition group-hover:text-black">
                  Open
                </span>
              </SmartLink>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
