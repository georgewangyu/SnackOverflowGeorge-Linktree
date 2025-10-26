import { site } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2">{site.title}</h1>
        <p className="text-lg mb-8">{site.tagline}</p>
        
        {/* Placeholder content to test build */}
        <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {site.apps.map((app, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 hover:scale-[1.04] transition-transform duration-180"
            >
              <p className="text-sm">{app.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

