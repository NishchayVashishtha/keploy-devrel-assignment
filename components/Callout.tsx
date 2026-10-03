import React from "react";
import { Info, AlertTriangle, Lightbulb, Sparkles, CheckCircle2 } from "lucide-react";

export type CalloutType = "info" | "warning" | "tip" | "aha" | "success";

interface CalloutProps {
  children: React.ReactNode;
  type?: CalloutType;
  title?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    defaultTitle: "Note",
    containerClasses:
      "bg-blue-50/70 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/60 text-blue-950 dark:text-blue-100",
    badgeClasses: "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    iconClasses: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    defaultTitle: "Important / Gotcha",
    containerClasses:
      "bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-100",
    badgeClasses: "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    iconClasses: "text-amber-600 dark:text-amber-400",
  },
  tip: {
    icon: Lightbulb,
    defaultTitle: "Pro Tip",
    containerClasses:
      "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/60 text-emerald-950 dark:text-emerald-100",
    badgeClasses: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    iconClasses: "text-emerald-600 dark:text-emerald-400",
  },
  aha: {
    icon: Sparkles,
    defaultTitle: "A-Ha! Moment",
    containerClasses:
      "bg-purple-50/70 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900/60 text-purple-950 dark:text-purple-100",
    badgeClasses: "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    iconClasses: "text-purple-600 dark:text-purple-400",
  },
  success: {
    icon: CheckCircle2,
    defaultTitle: "Verified",
    containerClasses:
      "bg-teal-50/70 dark:bg-teal-950/30 border-teal-200 dark:border-teal-900/60 text-teal-950 dark:text-teal-100",
    badgeClasses: "bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    iconClasses: "text-teal-600 dark:text-teal-400",
  },
};

export default function Callout({ children, type = "info", title }: CalloutProps) {
  const config = calloutConfig[type] || calloutConfig.info;
  const Icon = config.icon;
  const displayTitle = title || config.defaultTitle;

  return (
    <div
      className={`my-6 rounded-xl border p-4.5 transition-all shadow-xs ${config.containerClasses}`}
      role="region"
      aria-label={displayTitle}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4.5 h-4.5 shrink-0 ${config.iconClasses}`} />
        <span
          className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.badgeClasses}`}
        >
          {displayTitle}
        </span>
      </div>
      <div className="text-sm leading-relaxed space-y-2 font-normal [&>p]:my-1.5 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}