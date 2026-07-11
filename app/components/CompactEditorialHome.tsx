import Image from "next/image";
import { BrandMark } from "./BrandMark";
import { FreeGuideModal } from "./FreeGuideModal";
import { SmartLink } from "../beta/components";
import {
  consultationOffers,
  kitLinks,
  primaryActions,
  radarLinks,
  resourceOffers,
  socialLinks,
} from "../beta/data";
import { site } from "../content";

const emailIcon = socialLinks.find((link) => link.title === "Email me")?.icon;
const snackVoiceIcon = site.socials.find((link) => link.title === "SnackVoice")?.icon;
const githubProfileHref =
  site.socials.find((link) => link.title === "My GitHub")?.href ?? "https://github.com";

const actionLinks = primaryActions.map((action) => ({
  ...action,
  title: action.label,
  icon: emailIcon,
}));

const workLinks = [
  {
    title: "SnackVoice",
    detail: "AI captions and voice workflow product",
    href: "https://snackvoice.snackoverflowgeorge.com",
    icon: snackVoiceIcon,
  },
  {
    title: "GitHub README",
    detail: "Code, repositories, and public build notes",
    href: `${githubProfileHref}#readme`,
    icon: "/icons/github.svg",
  },
  ...radarLinks,
] as const;

const featuredSocialLinks = socialLinks.filter((link) =>
  ["My Instagram", "My TikTok", "My YouTube", "My LinkedIn", "My GitHub", "My X"].includes(
    link.title,
  ),
);

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
    label: "Work",
    title: "Products, code, and public work",
    links: workLinks,
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
      <header className="linktree-enter rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-full border border-black/10 bg-black sm:h-20 sm:w-20">
            <Image
              src={site.about.photo}
              alt="George Wang"
              fill
              className="origin-[50%_25%] scale-150 object-cover object-top"
              priority
              sizes="256px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <BrandMark className="h-8 w-8 shrink-0" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d44937]">
                SnackOverflowGeorge
              </p>
            </div>
            <h1 className="mt-0.5 text-2xl font-black leading-tight text-[#141414] sm:text-[1.7rem]">
              George Wang
            </h1>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-[0.95rem] font-medium leading-6 text-black/65 sm:text-base">
          {site.about.blurb}
        </p>

        <nav className="mt-4 flex flex-wrap items-center gap-2" aria-label="George's social channels">
          {featuredSocialLinks.map((link) => (
            <SmartLink
              key={link.href}
              href={link.href}
              ariaLabel={link.title}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-[#f8f7f2] transition duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:shadow-sm"
            >
              {link.icon ? (
                <Image
                  src={link.icon}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              ) : (
                <span className="text-[0.65rem] font-black text-black/55">
                  {getLinkFallback(link.title)}
                </span>
              )}
            </SmartLink>
          ))}
        </nav>
      </header>

      <section className="linktree-enter linktree-enter-delay min-w-0 rounded-[1.5rem] border border-black/10 bg-[#202126] p-5 text-white shadow-sm sm:p-6">
        <div className="border-b border-white/15 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ddbd4]">
            Start here
          </p>
          <h2 className="mt-2 text-[1.35rem] font-black leading-tight sm:text-2xl">
            Learn the system, then get help applying it.
          </h2>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {resourceOffers.map((offer) =>
            offer.kind === "lead-magnet" ? (
              <FreeGuideModal
                key={offer.title}
                eyebrow={offer.eyebrow}
                title={offer.title}
                detail={offer.detail}
                meta={offer.meta}
                cta={offer.cta}
              />
            ) : (
              <SmartLink
                key={offer.title}
                href={offer.href}
                className="group flex min-h-44 flex-col rounded-2xl bg-white p-4 text-[#141414] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#008b93]">
                  {offer.eyebrow}
                </span>
                <span className="mt-3 block text-xl font-black leading-tight">{offer.title}</span>
                <span className="mt-2 block text-sm leading-5 text-black/58">{offer.detail}</span>
                <span className="mt-auto flex items-center justify-between border-t border-black/10 pt-4 text-sm font-bold">
                  <span>{offer.meta}</span>
                  <span className="text-right text-black/45 transition group-hover:text-black">
                    {offer.cta}
                  </span>
                </span>
              </SmartLink>
            ),
          )}
        </div>

        <div className="mt-6 border-t border-white/15 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ddbd4]">
            Book a 1:1 with me
          </p>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {consultationOffers.map((offer) => (
            <SmartLink
              key={offer.href}
              href={offer.href}
              className="group flex min-h-48 flex-col rounded-2xl bg-white p-4 text-[#141414] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#315fd6]">
                {offer.eyebrow}
              </span>
              <span className="mt-3 block text-xl font-black leading-tight">{offer.title}</span>
              <span className="mt-2 block text-sm leading-5 text-black/58">{offer.detail}</span>
              <span className="mt-auto flex items-center justify-between border-t border-black/10 pt-4 text-sm font-bold">
                <span>{offer.meta}</span>
                <span className="text-black/45 transition group-hover:text-black">Book →</span>
              </span>
            </SmartLink>
          ))}
        </div>
      </section>

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
