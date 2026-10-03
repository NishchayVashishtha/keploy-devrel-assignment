import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Database Mocking",
      traditional: "Write mock interfaces (gomock, mockery) or wire testcontainers manually.",
      keploy: "Zero mocks to write. Intercepts binary network wire protocol automatically.",
      traditionalStatus: false,
      keployStatus: true,
    },
    {
      feature: "Test Data Fixtures",
      traditional: "Hand-write JSON/BSON fixtures and maintain migrations across test runs.",
      keploy: "Recorded from real HTTP and DB traffic into human-readable YAML.",
      traditionalStatus: false,
      keployStatus: true,
    },
    {
      feature: "Code Intrusion",
      traditional: "Refactor production code to inject mock interfaces and wrapper structs.",
      keploy: "100% non-intrusive. Zero changes required in business logic or handlers.",
      traditionalStatus: false,
      keployStatus: true,
    },
    {
      feature: "Dynamic Fields (Noise)",
      traditional: "Write regex parsers or override clock time to avoid test flakiness.",
      keploy: "Built-in noise detection automatically ignores drifting timestamps and headers.",
      traditionalStatus: false,
      keployStatus: true,
    },
    {
      feature: "CI/CD Test Speed",
      traditional: "Slow: Spawns heavy databases in Docker containers for every test suite.",
      keploy: "Blazing fast: App runs against local YAML wire mocks without spinning up DBs.",
      traditionalStatus: false,
      keployStatus: true,
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
      <div className="px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 m-0">
          Traditional Go Testing vs. Keploy Zero-Code Workflow
        </h4>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-medium">
          Workflow Comparison
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 w-1/4">
                Capability
              </th>
              <th className="py-3 px-4 font-semibold text-zinc-600 dark:text-zinc-400 w-3/8">
                <div className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  <span>Traditional Unit & E2E Tests</span>
                </div>
              </th>
              <th className="py-3 px-4 font-semibold text-orange-600 dark:text-orange-400 w-3/8">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span>Keploy Automated Flow</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 bg-white dark:bg-zinc-950">
            {comparisonData.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 transition-colors"
              >
                <td className="py-3.5 px-4 font-medium text-zinc-900 dark:text-zinc-200 align-top">
                  {row.feature}
                </td>
                <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-400 align-top leading-relaxed">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-zinc-900 dark:text-zinc-200 align-top leading-relaxed bg-orange-50/20 dark:bg-orange-950/10">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-normal">{row.keploy}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
