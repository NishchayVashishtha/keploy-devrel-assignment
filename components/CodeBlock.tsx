"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, FileCode } from "lucide-react";

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  filename?: string;
}

export default function CodeBlock({
  children,
  className = "",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract raw text from children for copying
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      return getTextContent(element.props?.children);
    }
    return "";
  };

  // Inspect children to find code element
  let codeContent = "";
  let language = "";

  if (React.isValidElement(children)) {
    const childElement = children as React.ReactElement<{
      children?: React.ReactNode;
      className?: string;
    }>;
    codeContent = getTextContent(childElement.props?.children);
    const childClass = childElement.props?.className || "";
    const match = childClass.match(/language-(\w+)/);
    if (match) {
      language = match[1];
    }
  } else {
    codeContent = getTextContent(children);
  }

  const handleCopy = async () => {
    if (!codeContent) return;
    try {
      await navigator.clipboard.writeText(codeContent.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const isTerminal =
    language === "bash" ||
    language === "sh" ||
    language === "shell" ||
    language === "zsh";

  const displayTitle =
    filename ||
    (isTerminal ? "Terminal" : language ? language.toUpperCase() : "Code");

  return (
    <div
      className={`relative group my-5 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 bg-zinc-950 text-zinc-100 shadow-md ${className}`}
    >
      {/* Code header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 text-xs text-zinc-400">
        <div className="flex items-center gap-2 font-mono">
          {isTerminal ? (
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
          ) : (
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
          )}
          <span className="font-medium text-zinc-300">{displayTitle}</span>
        </div>

        <div className="flex items-center gap-2">
          {language && !filename && (
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
              {language}
            </span>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-[11px] font-medium cursor-pointer"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-zinc-400 group-hover:text-zinc-200" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto p-4 text-xs sm:text-sm font-mono leading-relaxed [&>pre]:!bg-transparent [&>pre]:!p-0 [&>pre]:!m-0 [&>pre]:!border-0 text-zinc-100 selection:bg-orange-500/30">
        {children}
      </div>
    </div>
  );
}
