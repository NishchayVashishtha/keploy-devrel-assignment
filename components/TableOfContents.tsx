"use client";

import React, { useEffect, useState } from "react";
import { ListOrdered } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

const defaultSections: TOCItem[] = [
  { id: "overview", title: "Overview & Core Concept", level: 2 },
  { id: "architecture", title: "Keploy Inner Architecture", level: 2 },
  { id: "comparison", title: "Traditional vs Keploy", level: 2 },
  { id: "prerequisites", title: "Prerequisites & WSL 2 Setup", level: 2 },
  { id: "step-1-setup", title: "Step 1: Clone & Run Mongo", level: 2 },
  { id: "step-2-bugfix", title: "Step 2: The Mongo URI Gotcha", level: 2 },
  { id: "step-3-record", title: "Step 3: Record Traffic with CLI", level: 2 },
  { id: "step-4-traffic", title: "Step 4: Generate Real API Calls", level: 2 },
  { id: "step-5-artifacts", title: "Step 5: Inspecting YAML Artifacts", level: 2 },
  { id: "step-6-replay", title: "Step 6: Replay & Noise Handling", level: 2 },
  { id: "cicd-automation", title: "CI/CD & GitHub Actions", level: 2 },
  { id: "conclusion", title: "Conclusion & DevRel Takeaways", level: 2 },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0,
      }
    );

    defaultSections.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-24 space-y-3 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shadow-xs">
      <div className="flex items-center gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-800/80 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
        <ListOrdered className="w-4 h-4 text-orange-500" />
        <span>On This Page</span>
      </div>

      <ul className="space-y-1.5 text-xs">
        {defaultSections.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left py-1 px-2 rounded-md transition-all text-xs ${
                  isActive
                    ? "font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40"
                }`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
