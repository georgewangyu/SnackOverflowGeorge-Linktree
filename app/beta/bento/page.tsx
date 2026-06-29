import Image from "next/image";
import { BetaNav } from "../BetaNav";
import { IconTile, SmartLink } from "../components";
import { kitLinks, primaryActions, proofCards, socialLinks } from "../data";
import { site } from "../../content";

export default function BentoBeta() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#171411]">
      <BetaNav current="/beta/bento" />
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 sm:py-10 lg:grid-cols-12 lg:auto-rows-[minmax(128px,auto)]">
        <div className="rounded-[2rem] border border-black/10 bg-[#fffaf0] p-6 shadow-sm sm:p-8 lg:col-span-7 lg:row-span-2">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e34b3f]">
                SnackOverflowGeorge
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black leading-[0.92] sm:text-6xl">
                Software, AI workflows, and the links worth clicking.
              </h1>
            </div>
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-md">
              <Image src={site.about.photo} alt="George Wang" fill className="object-cover" priority sizes="112px" />
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/66 sm:text-lg">
            A public index for creator experiments, practical build notes,
            product demos, and the fastest way to send a request.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {primaryActions.map((action) => (
              <SmartLink
                key={action.href}
                href={action.href}
                className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e34b3f]"
              >
                {action.label}
              </SmartLink>
            ))}
          </div>
        </div>

        <SmartLink
          href="/playground"
          className="relative min-h-64 overflow-hidden rounded-[2rem] border border-black/10 bg-[#52d4cf] shadow-sm lg:col-span-5 lg:row-span-2"
        >
          <Image src={site.feature.image} alt="Playground" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 420px" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-black shadow-sm">
            Open the playground
          </span>
        </SmartLink>

        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-12">
          {proofCards.map((card) => (
            <article key={card.title} className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2772db]">{card.kicker}</p>
              <h2 className="mt-3 text-xl font-black leading-tight">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-black/62">{card.copy}</p>
            </article>
          ))}
        </div>

        <section className="grid gap-4 lg:col-span-7">
          <h2 className="px-1 text-sm font-bold uppercase tracking-[0.16em] text-black/50">Main channels</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <IconTile key={link.href} title={link.title.replace("My ", "")} href={link.href} icon={link.icon} />
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:col-span-5">
          <h2 className="px-1 text-sm font-bold uppercase tracking-[0.16em] text-black/50">Creator kit</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {kitLinks.map((link) => (
              <IconTile
                key={link.href}
                title={link.title.replace("My ", "")}
                href={link.href}
                icon={link.icon}
                className="bg-[#fffaf0]"
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
