"use client";

import React, { useState } from "react";
import { Database, Server, Terminal, Radio, ShieldCheck, Sparkles, RefreshCw } from "lucide-react";

export default function ArchitectureDiagram() {
  const [mode, setMode] = useState<"record" | "test">("record");

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900/60 p-6 shadow-sm">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 m-0">
              Keploy Architecture & Interception Flow
            </h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-0">
            Interactive visualization of zero-code eBPF network interception
          </p>
        </div>

        {/* Segmented Control */}
        <div className="inline-flex p-1 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 text-xs font-medium self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMode("record")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              mode === "record"
                ? "bg-white dark:bg-zinc-900 text-orange-600 dark:text-orange-400 shadow-xs font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>1. Record Mode</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("test")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              mode === "test"
                ? "bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-xs font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>2. Test / Replay Mode</span>
          </button>
        </div>
      </div>

      {/* Visual Pipeline */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Step 1: Ingress Trigger */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 relative group hover:border-orange-500/40 transition-colors">
          <div className="text-[10px] uppercase font-mono tracking-wider text-orange-500 font-semibold mb-1">
            {mode === "record" ? "Traffic Source" : "Replay Agent"}
          </div>
          <div className="flex items-center gap-2 mb-2 font-medium text-sm text-zinc-900 dark:text-zinc-100">
            <Terminal className="w-4 h-4 text-orange-500" />
            <span>{mode === "record" ? "User / curl / Postman" : "Keploy Test Runner"}</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-0">
            {mode === "record"
              ? "Sends standard HTTP POST /url payload to your local port 8080."
              : "Replays recorded HTTP packets faithfully against your running service."}
          </p>
        </div>

        {/* Step 2: Keploy Interception */}
        <div className="rounded-xl border border-orange-200 dark:border-orange-950/80 bg-orange-50/50 dark:bg-orange-950/20 p-4 relative">
          <div className="text-[10px] uppercase font-mono tracking-wider text-orange-600 dark:text-orange-400 font-semibold mb-1">
            Network Interception
          </div>
          <div className="flex items-center gap-2 mb-2 font-medium text-sm text-zinc-900 dark:text-zinc-100">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span>Keploy eBPF Engine</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-0">
            {mode === "record"
              ? "Intercepts syscalls and packet wire headers at the Linux kernel level without app code changes."
              : "Validates responses and automatically filters out dynamic 'noise' (e.g. body.ts)."}
          </p>
        </div>

        {/* Step 3: Application Server */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
          <div className="text-[10px] uppercase font-mono tracking-wider text-blue-500 font-semibold mb-1">
            Your Code
          </div>
          <div className="flex items-center gap-2 mb-2 font-medium text-sm text-zinc-900 dark:text-zinc-100">
            <Server className="w-4 h-4 text-blue-500" />
            <span>Gin API Server (:8080)</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-0">
            Executes normal business logic: hashing URL with SHA256 and Base58 encoding.
          </p>
        </div>

        {/* Step 4: Database / Mocking */}
        <div
          className={`rounded-xl border p-4 transition-all ${
            mode === "record"
              ? "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              : "border-emerald-200 dark:border-emerald-950/80 bg-emerald-50/50 dark:bg-emerald-950/20"
          }`}
        >
          <div
            className={`text-[10px] uppercase font-mono tracking-wider font-semibold mb-1 ${
              mode === "record" ? "text-purple-500" : "text-emerald-600 dark:text-emerald-400"
            }`}
          >
            {mode === "record" ? "Live Database" : "Virtual Mocks"}
          </div>
          <div className="flex items-center gap-2 mb-2 font-medium text-sm text-zinc-900 dark:text-zinc-100">
            <Database
              className={`w-4 h-4 ${
                mode === "record" ? "text-purple-500" : "text-emerald-500"
              }`}
            />
            <span>{mode === "record" ? "MongoDB (Docker :27017)" : "Zero-DB Virtual Mock"}</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-0">
            {mode === "record"
              ? "Writes the doc. Keploy captures the binary BSON wire protocol communication."
              : "Keploy answers Mongo queries directly from YAML mocks. No live Mongo required!"}
          </p>
        </div>
      </div>

      {/* Mode Callout Note */}
      <div className="mt-5 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
        <Sparkles className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
        <div>
          {mode === "record" ? (
            <span>
              <strong>Record Phase Insight:</strong> Keploy captures the true contract of your application by listening on both the ingress HTTP layer and the egress TCP/MongoDB wire layer simultaneously.
            </span>
          ) : (
            <span>
              <strong>Replay Phase Insight:</strong> Because Keploy replays egress dependencies from recorded <code className="text-orange-600 dark:text-orange-400 font-mono">mocks.yaml</code>, tests run deterministically in CI without spinning up seed databases or managing test state cleanup!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
