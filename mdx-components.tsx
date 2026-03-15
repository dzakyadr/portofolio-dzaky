import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-extrabold mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>,
    p: ({ children }) => <p className="text-foreground/80 leading-7 mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/80">{children}</ul>,
    li: ({ children }) => <li className="leading-7">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-sky-500 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-foreground/10 px-1 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-foreground/5 dark:bg-foreground/10 p-4 rounded-lg overflow-x-auto mb-6 border border-foreground/10">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sky-500 pl-4 italic text-foreground/70 my-6">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
