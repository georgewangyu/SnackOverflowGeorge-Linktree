import Image from "next/image";
import { BetaNav } from "../BetaNav";
import { SmartLink } from "../components";
import { primaryActions, socialLinks } from "../data";
import { site } from "../../content";

export default function GlassBeta() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090f] text-white">
      <BetaNav current="/beta/glass" />
      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="absolute inset-0 -z-0 bg-[linear-gradient(115deg,rgba(21,185,157,0.18),transparent_36%,rgba(236,72,153,0.14)_62%,rgba(245,158,11,0.14))]" />
        <div className="absolute inset-0 -z-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />

        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200/80">
            Dark glass beta
          </p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[0.9] sm:text-7xl">
            The link hub as a night-mode control room.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
            More cinematic, more technical, and intentionally less cute. The
            links feel like modules floating over a dark product surface.
          </p>

          <div className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-3">
            {primaryActions.map((action) => (
              <SmartLink
                key={action.href}
                href={action.href}
                className="rounded-2xl border border-white/12 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/15"
              >
                <span className="block text-sm font-bold">{action.label}</span>
                <span className="mt-2 block text-xs leading-5 text-white/58">{action.detail}</span>
              </SmartLink>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto h-[560px] w-full max-w-[440px] [perspective:1300px]">
          <div className="absolute inset-x-8 top-0 h-[480px] rounded-[2rem] border border-white/15 bg-white/[0.075] shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl [transform:rotateX(10deg)_rotateY(-14deg)_rotateZ(4deg)]" />
          <div className="absolute inset-x-4 top-12 h-[480px] rounded-[2rem] border border-white/15 bg-[#101522]/80 shadow-2xl shadow-black/50 backdrop-blur-xl [transform:rotateX(8deg)_rotateY(-8deg)_rotateZ(-2deg)]">
            <div className="relative h-full overflow-hidden rounded-[2rem] p-5">
              <div className="relative h-56 overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image src={site.about.photo} alt="George Wang" fill className="object-cover" priority sizes="390px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">SnackOverflowGeorge</p>
                  <p className="mt-1 text-2xl font-black">George Wang</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {socialLinks.slice(0, 3).map((link, index) => (
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.075] px-4 py-3 backdrop-blur transition hover:border-pink-200/60 hover:bg-white/[0.12]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative h-9 w-9 overflow-hidden rounded-xl bg-white">
                        <Image src={link.icon} alt="" fill className="object-cover" sizes="36px" />
                      </span>
                      <span className="text-sm font-semibold">{link.title.replace("My ", "")}</span>
                    </span>
                    <span className="text-xs font-bold text-white/42">0{index + 1}</span>
                  </SmartLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-0 right-0 mx-auto h-28 w-72 rounded-[50%] bg-black/45 blur-2xl" />
        </div>
      </section>
    </main>
  );
}
