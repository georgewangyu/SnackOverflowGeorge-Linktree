"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-light dark:text-foreground-dark opacity-70">
          <p>© {currentYear} SnackOverflowGeorge</p>
          <p>Built with Next.js & TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}

