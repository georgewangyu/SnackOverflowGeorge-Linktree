import { HeroHeader } from "./components/HeroHeader";
import { AboutCard } from "./components/AboutCard";
import { AppGrid } from "./components/AppGrid";
import { FeatureTile } from "./components/FeatureTile";
import { SocialRow } from "./components/SocialRow";
import { NewsletterCTA } from "./components/NewsletterCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors">
      <HeroHeader />
      <AboutCard />
      <AppGrid />
      <FeatureTile />
      <SocialRow />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
