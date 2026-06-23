/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Loops Presentation | SnackOverflowGeorge",
  description:
    "A screen-share companion page for explaining agent loops, triggers, receipts, and evaluator problems.",
};

const sources = [
  {
    title: "Peter Steinberger tweet",
    label: "The quote",
    image: "/images/loops-sources/peter-steipete-loop-tweet.png",
    href: "https://x.com/steipete/status/2063697162748260627",
    point: "Stop prompting agents directly. Design loops that prompt them.",
  },
  {
    title: "Loop Library repo",
    label: "The library",
    image: "/images/loops-sources/loop-library-github.png",
    href: "https://github.com/Forward-Future/loop-library",
    point: "Reusable loop prompts with checks, next steps, and stop conditions.",
  },
  {
    title: "Architecture satisfaction loop",
    label: "The fuzzy evaluator",
    image: "/images/loops-sources/architecture-satisfaction-loop.png",
    href: "https://signals.forwardfuture.ai/loop-library/loops/architecture-satisfaction-loop/",
    point: "Useful, but the stopping rule depends on judgment.",
  },
  {
    title: "ClawSweeper",
    label: "The real trigger",
    image: "/images/loops-sources/clawsweeper-github.png",
    href: "https://github.com/openclaw/clawsweeper",
    point: "Issues and PRs create a recurring surface for an agent to scan.",
  },
];

const loopParts = [
  ["Trigger", "What wakes the loop up."],
  ["Action", "What the agent does next."],
  ["Check", "How the loop evaluates progress."],
  ["Receipt", "What artifact proves what happened."],
  ["Stop", "When it finishes or asks a human."],
];

const mechanismSteps = [
  ["1", "Work appears", "An issue, PR, error, stale doc, customer report, or scheduled review enters the surface."],
  ["2", "Loop selects a task", "The loop chooses a bounded next action instead of asking a human to keep prompting."],
  ["3", "Agent uses tools", "The agent reads, edits, tests, searches, or comments within a defined permission boundary."],
  ["4", "Verifier checks it", "A test, reviewer, rubric, screenshot, or checklist decides whether the work helped."],
  ["5", "Receipt is written", "The loop leaves a diff, log, report, comment, or checkpoint so a human can inspect it."],
  ["6", "Stop or continue", "The loop finishes, escalates, or picks the next task only if the trigger still has valid work."],
];

const comparison = [
  {
    title: "Prompting",
    subtitle: "Human-driven",
    points: [
      "You notice the work.",
      "You write the next prompt.",
      "You decide if the answer is useful.",
      "You remember what happened.",
    ],
  },
  {
    title: "Looping",
    subtitle: "System-driven",
    points: [
      "A real surface creates the trigger.",
      "The loop hands out bounded work.",
      "A verifier checks progress.",
      "Receipts preserve the decision trail.",
    ],
  },
];

const beats = [
  "Everyone is saying: build loops, not prompts.",
  "The useful definition: trigger -> action -> check -> receipt -> stop.",
  "Peter's setup works because production repos generate real work surfaces.",
  "Individual builders should be careful: fake triggers become procrastination.",
  "The hard part is letting AI find useful work without inventing busywork.",
  "The unsolved part is evaluators: many loops still stop subjectively.",
  "Practical rule: build loops only where the work recurs and the receipt is reviewable.",
];

export default function LoopsPage() {
  return (
    <main className="loopsDeck">
      <style>{`
        .loopsDeck {
          min-height: 100vh;
          background: #e8e2dc;
          color: #121212;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .deckNav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 18px 32px;
          border-bottom: 1px solid rgba(18, 18, 18, 0.14);
          background: rgba(232, 226, 220, 0.92);
          backdrop-filter: blur(14px);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13px;
          font-weight: 700;
        }

        .deckNav a {
          color: inherit;
          text-decoration: none;
        }

        .navLinks {
          display: flex;
          gap: 18px;
        }

        .slide {
          min-height: 92vh;
          padding: 56px 32px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(18, 18, 18, 0.12);
        }

        .slideInner {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .eyebrow {
          margin: 0 0 18px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(18, 18, 18, 0.58);
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        h1,
        h2,
        h3,
        .mono {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          letter-spacing: 0;
        }

        h1 {
          max-width: 980px;
          font-size: clamp(54px, 8vw, 112px);
          line-height: 0.94;
        }

        h2 {
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1;
        }

        h3 {
          font-size: 24px;
          line-height: 1.12;
        }

        .lede {
          max-width: 780px;
          margin-top: 26px;
          font-size: clamp(20px, 2vw, 30px);
          line-height: 1.35;
          color: rgba(18, 18, 18, 0.76);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: 42px;
          align-items: end;
        }

        .definitionCard,
        .darkPanel,
        .lightPanel,
        .sourceCard {
          border-radius: 8px;
          box-shadow: 0 16px 36px rgba(18, 18, 18, 0.12);
        }

        .definitionCard {
          background: #121212;
          color: #ffffff;
          padding: 24px;
        }

        .definitionRow {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 16px;
          padding: 14px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          font-size: 16px;
          line-height: 1.35;
        }

        .definitionRow strong {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .sourceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 34px;
        }

        .sourceCard {
          display: grid;
          grid-template-rows: 360px auto;
          overflow: hidden;
          background: #f7f4f0;
          color: inherit;
          text-decoration: none;
          border: 1px solid rgba(18, 18, 18, 0.1);
        }

        .sourceImageFrame {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #ffffff;
          border-bottom: 1px solid rgba(18, 18, 18, 0.1);
        }

        .sourceImageFrame img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .sourceText {
          padding: 18px;
        }

        .sourceLabel {
          margin-bottom: 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(18, 18, 18, 0.55);
        }

        .sourceText p,
        .panelText,
        .beatList li {
          color: rgba(18, 18, 18, 0.76);
          font-size: 19px;
          line-height: 1.45;
        }

        .diagram {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
          margin-top: 42px;
        }

        .mechanismGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 42px;
        }

        .mechanismStep {
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
          background: #f7f4f0;
          border: 1px solid rgba(18, 18, 18, 0.12);
          border-radius: 8px;
          box-shadow: 0 12px 28px rgba(18, 18, 18, 0.1);
        }

        .mechanismStepNumber,
        .comparisonSubtitle {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(18, 18, 18, 0.48);
        }

        .mechanismStep p {
          margin-top: 18px;
          color: rgba(18, 18, 18, 0.72);
          font-size: 18px;
          line-height: 1.4;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 42px;
        }

        .comparisonPanel {
          padding: 32px;
          border-radius: 8px;
          box-shadow: 0 16px 36px rgba(18, 18, 18, 0.12);
        }

        .comparisonPanel:first-child {
          background: #f7f4f0;
          border: 1px solid rgba(18, 18, 18, 0.1);
        }

        .comparisonPanel:last-child {
          background: #121212;
          color: #ffffff;
        }

        .comparisonPanel:last-child .comparisonSubtitle,
        .comparisonPanel:last-child li {
          color: rgba(255, 255, 255, 0.72);
        }

        .comparisonPanel ul {
          display: grid;
          gap: 18px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .comparisonPanel li {
          padding-top: 14px;
          border-top: 1px solid rgba(18, 18, 18, 0.14);
          color: rgba(18, 18, 18, 0.72);
          font-size: 21px;
          line-height: 1.35;
        }

        .comparisonPanel:last-child li {
          border-color: rgba(255, 255, 255, 0.18);
        }

        .diagramStep {
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          background: #121212;
          color: #ffffff;
          border-radius: 8px;
        }

        .diagramStep span {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 13px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.52);
        }

        .diagramStep p {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.8);
        }

        .split {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(460px, 1.1fr);
          gap: 42px;
          align-items: center;
        }

        .darkPanel {
          background: #121212;
          color: #ffffff;
          padding: 34px;
        }

        .darkPanel .panelText {
          color: rgba(255, 255, 255, 0.76);
        }

        .lightPanel {
          background: #f7f4f0;
          padding: 34px;
          border: 1px solid rgba(18, 18, 18, 0.1);
        }

        .bigScreenshot {
          overflow: hidden;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid rgba(18, 18, 18, 0.12);
          box-shadow: 0 16px 36px rgba(18, 18, 18, 0.12);
        }

        .bigScreenshot img {
          display: block;
          width: 100%;
          height: 610px;
          object-fit: cover;
          object-position: top center;
        }

        .beatList {
          display: grid;
          gap: 14px;
          margin: 34px 0 0;
          padding: 0;
          list-style: none;
          counter-reset: beat;
        }

        .beatList li {
          counter-increment: beat;
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 18px;
          align-items: start;
          padding: 18px 0;
          border-top: 1px solid rgba(18, 18, 18, 0.14);
        }

        .beatList li::before {
          content: counter(beat, decimal-leading-zero);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-weight: 800;
          color: rgba(18, 18, 18, 0.46);
        }

        @media (max-width: 900px) {
          .deckNav {
            padding: 14px 18px;
          }

          .slide {
            min-height: auto;
            padding: 42px 18px;
          }

          .heroGrid,
          .split,
          .sourceGrid,
          .mechanismGrid,
          .comparisonGrid,
          .diagram {
            grid-template-columns: 1fr;
          }

          .sourceCard {
            grid-template-rows: 260px auto;
          }

          .diagramStep {
            min-height: 140px;
          }
        }
      `}</style>

      <nav className="deckNav">
        <a href="/">SnackOverflowGeorge</a>
        <div className="navLinks">
          <a href="#sources">Sources</a>
          <a href="#outline">Outline</a>
        </div>
      </nav>

      <section className="slide">
        <div className="slideInner heroGrid">
          <div>
            <p className="eyebrow">Agent loops, for software engineers</p>
            <h1>A real AI loop needs a trigger.</h1>
            <p className="lede">
              Loops are not magic persistence. A useful loop wakes up from a
              real work surface, does a bounded action, leaves receipts, and
              knows when to stop.
            </p>
          </div>

          <div className="definitionCard">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.58)" }}>
              Working definition
            </p>
            {loopParts.map(([label, detail]) => (
              <div className="definitionRow" key={label}>
                <strong>{label}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slideInner">
          <p className="eyebrow">How loops work</p>
          <h2>A loop is a small operating system for recurring work.</h2>
          <p className="lede">
            The agent is not the loop. The loop is the system around the agent:
            it watches for work, gives the agent a bounded task, checks the
            result, writes a receipt, and decides whether to stop.
          </p>

          <div className="mechanismGrid">
            {mechanismSteps.map(([number, title, detail]) => (
              <div className="mechanismStep" key={title}>
                <span className="mechanismStepNumber">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slideInner">
          <p className="eyebrow">The shift</p>
          <h2>Prompting is manual. Looping is delegated control.</h2>
          <p className="lede">
            The useful jump is not “the prompt repeats.” The useful jump is
            that the system can notice work, hand it to the agent, and preserve
            enough evidence for a human to trust or reject the result.
          </p>

          <div className="comparisonGrid">
            {comparison.map((item) => (
              <div className="comparisonPanel" key={item.title}>
                <div className="comparisonSubtitle">{item.subtitle}</div>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slide" id="sources">
        <div className="slideInner">
          <p className="eyebrow">Receipts to show on screen</p>
          <h2>The source stack</h2>
          <p className="lede">
            Start with the public artifacts, then explain the missing nuance:
            loops need real triggers, reviewable output, and bounded judgment.
          </p>

          <div className="sourceGrid">
            {sources.map((source) => (
              <a
                className="sourceCard"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                target="_blank"
              >
                <div className="sourceImageFrame">
                  <img alt={`${source.title} screenshot`} src={source.image} />
                </div>
                <div className="sourceText">
                  <div className="sourceLabel">{source.label}</div>
                  <h3>{source.title}</h3>
                  <p>{source.point}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slideInner">
          <p className="eyebrow">The simple model</p>
          <h2>Trigger, action, check, receipt, stop.</h2>
          <div className="diagram">
            {loopParts.map(([label, detail], index) => (
              <div className="diagramStep" key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{label}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slideInner split">
          <div className="darkPanel">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.58)" }}>
              Where loops work
            </p>
            <h2>Production creates real triggers.</h2>
            <p className="lede panelText">
              Peter Steinberger&apos;s OpenClaw/ClawSweeper setup makes sense
              because issues, PRs, stale work, and review queues keep
              appearing. The loop has a real reason to wake up.
            </p>
          </div>
          <div className="bigScreenshot">
            <img
              alt="OpenClaw ClawSweeper GitHub screenshot"
              src="/images/loops-sources/clawsweeper-github.png"
            />
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slideInner split">
          <div className="lightPanel">
            <p className="eyebrow">Where loops are overkill</p>
            <h2>Fake triggers are procrastination.</h2>
            <p className="lede">
              If you are an individual builder and you already know the next
              step, you probably do not need a loop. You need to do the work.
              The loop becomes useful when similar work keeps returning.
            </p>
          </div>
          <div className="bigScreenshot">
            <img
              alt="Peter Steinberger loop tweet screenshot"
              src="/images/loops-sources/peter-steipete-loop-tweet.png"
            />
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slideInner split">
          <div className="darkPanel">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.58)" }}>
              The hard part
            </p>
            <h2>Evaluators are still fuzzy.</h2>
            <p className="lede panelText">
              A lot of loops stop when the result feels good enough. That can
              work for architecture and creative review, but it is not the same
              as a production metric.
            </p>
          </div>
          <div className="bigScreenshot">
            <img
              alt="Architecture satisfaction loop screenshot"
              src="/images/loops-sources/architecture-satisfaction-loop.png"
            />
          </div>
        </div>
      </section>

      <section className="slide" id="outline">
        <div className="slideInner">
          <p className="eyebrow">Talking outline</p>
          <h2>Seven beats for the video.</h2>
          <ol className="beatList">
            {beats.map((beat) => (
              <li key={beat}>{beat}</li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
