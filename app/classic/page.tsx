import { HeroHeader } from "../components/HeroHeader";
import { MainGrid } from "../components/MainGrid";

export default function ClassicLinktree() {
  return (
    <main className="min-h-screen bg-background-light text-foreground-light transition-colors dark:bg-background-dark dark:text-foreground-dark">
      <HeroHeader />
      <MainGrid />
    </main>
  );
}
