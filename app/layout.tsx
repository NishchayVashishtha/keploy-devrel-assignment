import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import TableOfContents from "@/components/TableOfContents";
import { BookOpen, ExternalLink, CheckCircle2 } from "lucide-react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Automating Go API Tests with Keploy | DevRel Guide",
  description:
    "A hands-on, developer-focused tutorial on zero-code API testing, network mocking, and noise handling using Keploy, Gin, and MongoDB in WSL 2.",
  keywords: [
    "Keploy",
    "Go",
    "Golang",
    "Gin",
    "MongoDB",
    "eBPF",
    "API Testing",
    "Integration Testing",
    "Mocking",
    "DevRel",
  ],
  authors: [{ name: "Nishchay Vashishtha" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-200 selection:bg-orange-500/20 selection:text-orange-600 dark:selection:text-orange-400">
        <ThemeProvider>
          {/* Top Announcement Bar */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/20 text-white uppercase tracking-wider">
              Verified
            </span>
            <span>
              Tested on Keploy CLI v3.8.57 & Go 1.22 with MongoDB in WSL 2
            </span>
          </div>

          {/* Sticky Header */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              {/* Logo & Brand */}
              <div className="flex items-center gap-3">
                <a
                  href="#overview"
                  className="flex items-center gap-2.5 group transition-transform active:scale-95"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-md shadow-orange-500/20 text-white font-black text-base">
                    🐰
                  </div>
                  <div>
                    <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      Keploy
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1.5 hidden sm:inline-block font-medium">
                      / Go Quickstart Tutorial
                    </span>
                  </div>
                </a>
              </div>

              {/* Action Buttons & Theme Toggle */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/keploy/samples-go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Keploy Samples</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400 ml-0.5" />
                </a>

                <a
                  href="https://keploy.io/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                  <span>Official Docs</span>
                </a>

                <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 mx-1 hidden sm:block" />

                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Main Content Layout */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Tutorial MDX Article Body */}
              <main className="lg:col-span-8 xl:col-span-9 max-w-3xl w-full">
                {children}
              </main>

              {/* Sticky Table of Contents Sidebar */}
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
                <TableOfContents />
              </aside>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 mt-20 py-12 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-orange-600 flex items-center justify-center text-white text-xs">
                  🐰
                </div>
                <span>
                  Built for the <strong>Keploy DevRel Candidate Assignment</strong>
                </span>
              </div>

              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Tests Replayed & Passing
                </span>
                <span>•</span>
                <span>Gin + MongoDB + WSL 2</span>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}