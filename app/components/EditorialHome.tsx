import Image from "next/image";
import { BrandMark } from "./BrandMark";
import { SmartLink } from "../beta/components";
import { kitLinks, primaryActions, socialLinks } from "../beta/data";
import { site } from "../content";

const sections = [
  {
    label: "Watch",
    title: "Short-form and long-form channels",
    links: socialLinks.filter((link) =>
      ["My TikTok", "My Instagram", "My YouTube"].includes(link.title),
    ),
  },
  {
    label: "Build",
    title: "Products, code, and public work",
    links: socialLinks.filter((link) =>
      ["My GitHub", "My LinkedIn", "My X"].includes(link.title),
    ),
  },
  {
    label: "Use",
    title: "Gear and creator setup",
    links: kitLinks,
  },
] as const;

export function EditorialHome() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 overflow-x-clip px-3 py-6 sm:px-4 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-14">
      <aside className="min-w-0 lg:sticky lg:top-8 lg:self-start">
        <div className="w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm sm:rounded-[2rem]">
          <div className="relative aspect-[4/3]">
            <Image
              src={site.feature.image}
              alt="SnackOverflowGeorge playground"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
          <div className="min-w-0 p-5 sm:p-8">
            <div className="flex items-center gap-2">
              <BrandMark className="h-9 w-9 shrink-0" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d44937] sm:text-sm sm:tracking-[0.18em]">
                SnackOverflowGeorge
              </p>
            </div>
            <h1 className="mt-4 max-w-full text-[2rem] font-black leading-[1.02] tracking-normal sm:text-5xl sm:leading-[0.94]">
              A cleaner front door for everything George is building.
            </h1>
            <p className="mt-5 text-base leading-7 text-black/64">
              Less app-icon grid, more personal index: the main actions are
              explicit, the content lanes are grouped, and the page feels calmer
              for people arriving from social.
            </p>
            <div className="mt-6 grid gap-2">
              {primaryActions.map((action) => (
                <SmartLink
                  key={action.href}
                  href={action.href}
                  className="flex items-center justify-between rounded-xl border border-black/10 bg-[#f8f7f2] px-4 py-3 text-sm font-bold transition hover:border-black/30 hover:bg-white"
                >
                  <span>{action.label}</span>
                  <span className="text-black/38">Open</span>
                </SmartLink>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <div className="grid content-start gap-5">
        <div className="min-w-0 rounded-[1.5rem] border border-black/10 bg-[#202126] p-5 text-white shadow-sm sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-white/15">
              <Image src={site.about.photo} alt="George Wang" fill className="object-cover" sizes="96px" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7ddbd4]">
                Current note
              </p>
              <h2 className="mt-2 text-[1.4rem] font-black leading-tight sm:text-2xl">
                Software engineer and creator building public experiments around AI workflows.
              </h2>
            </div>
          </div>
        </div>

        {sections.map((section) => (
          <section
            key={section.label}
            className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-6"
          >
            <div className="flex flex-col gap-1 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#315fd6] sm:text-sm sm:tracking-[0.18em]">
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
                    <Image src={link.icon} alt="" fill className="object-cover" sizes="44px" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-tight">{link.title.replace("My ", "")}</span>
                    <span className="mt-1 block truncate text-sm text-black/50">
                      {link.href.replace("https://", "").replace("mailto:", "")}
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
      </div>
    </section>
  );
}
