import { HeroHeader } from "./components/HeroHeader";
import { MainGrid } from "./components/MainGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors">
      <HeroHeader />
      <MainGrid />
    </main>
  );
}
