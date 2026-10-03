import type { MDXComponents } from "mdx/types";
import React from "react";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import TestArtifactViewer from "@/components/TestArtifactViewer";
import ComparisonTable from "@/components/ComparisonTable";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, id, ...props }) => (
      <h1
        id={id}
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mt-10 mb-5 scroll-mt-24 border-b border-zinc-200 dark:border-zinc-800 pb-4"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="text-2xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-12 mb-4 scroll-mt-24 flex items-center gap-2"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 mt-8 mb-3 scroll-mt-24"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="text-base text-zinc-700 dark:text-zinc-300 leading-7 my-4 font-normal"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc pl-6 my-4 space-y-2 text-zinc-700 dark:text-zinc-300 text-base"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal pl-6 my-4 space-y-2 text-zinc-700 dark:text-zinc-300 text-base"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    pre: ({ children, className }) => (
      <CodeBlock className={className}>{children}</CodeBlock>
    ),
    code: ({ children, className, ...props }) => {
      // If code is inside pre, let pre/CodeBlock handle styling
      const isInline = !className?.includes("language-");
      if (isInline) {
        return (
          <code
            className="px-1.5 py-0.5 rounded-md font-mono text-[13px] bg-zinc-100 dark:bg-zinc-800/80 text-orange-600 dark:text-orange-400 border border-zinc-200/70 dark:border-zinc-700/60 font-medium"
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-orange-500 pl-4 py-1 my-6 italic text-zinc-600 dark:text-zinc-400 bg-orange-50/20 dark:bg-orange-950/10 rounded-r-lg"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6 border border-zinc-200 dark:border-zinc-800 rounded-xl">
        <table className="w-full text-left text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="py-3 px-4 bg-zinc-50 dark:bg-zinc-900 font-semibold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="py-3 px-4 border-b border-zinc-100 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300"
        {...props}
      >
        {children}
      </td>
    ),
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        className="text-orange-600 dark:text-orange-400 underline underline-offset-4 font-medium hover:text-orange-500 dark:hover:text-orange-300 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    Callout,
    CodeBlock,
    ArchitectureDiagram,
    TestArtifactViewer,
    ComparisonTable,
    ...components,
  };
}