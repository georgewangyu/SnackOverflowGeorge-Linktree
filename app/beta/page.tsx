import { BetaNav } from "./BetaNav";
import { betaNav } from "./data";
import { SmartLink } from "./components";

export default function BetaIndex() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">
      <BetaNav current="/beta" />
      <section className="mx-auto grid min-h-[80vh] w-full max-w-5xl content-center gap-8 px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
            Linktree redesign betas
          </p>
          <h1 className="mt-4 text-4xl font-black leading-[0.95] sm:text-6xl">
            Three different directions for the public link hub.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/68">
            The editorial direction is now the home page. The original page
            lives at `/classic`, and the other directions stay here for
            comparison.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {betaNav.map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-lg font-bold">{item.label}</span>
              <span className="mt-3 block text-sm leading-6 text-black/60">
                Open this saved version in the local browser and compare the
                direction.
              </span>
            </SmartLink>
          ))}
        </div>
      </section>
    </main>
  );
}
