"use client"

import { Check, Copy } from "lucide-react"
import { type ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

/** Centered page container matching the design's 1280px max width. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  )
}

/** Monospace uppercase eyebrow label used above section headings. */
export function Eyebrow({
  children,
  className,
  tone = "cyan",
}: {
  children: ReactNode
  className?: string
  tone?: "cyan" | "violet" | "muted"
}) {
  return (
    <span
      className={cn(
        "label-caps block",
        tone === "cyan" && "text-cyan",
        tone === "violet" && "text-violet",
        tone === "muted" && "text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

export function GlassCard({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("glass-card rounded-xl", className)}>{children}</div>
}

/** Pill-shaped chip with a mono label and optional status dot. */
export function Chip({
  children,
  tone = "cyan",
  dot = false,
}: {
  children: ReactNode
  tone?: "cyan" | "violet"
  dot?: boolean
}) {
  return (
    <span
      className={cn(
        "label-caps inline-flex items-center gap-2 rounded-full border px-3 py-1",
        tone === "cyan"
          ? "border-cyan/20 bg-cyan/10 text-cyan"
          : "border-violet/20 bg-violet/10 text-violet"
      )}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}

/** Terminal-styled code block with a file label and copy-to-clipboard control. */
export function CodeBlock({
  fileName,
  lines,
  className,
}: {
  fileName?: string
  lines: readonly string[]
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"))
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard may be unavailable (e.g. insecure context) — fail silently.
    }
  }

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-popover", className)}>
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="label-caps text-muted-foreground">{fileName ?? "shell"}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Copy code"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-left" dir="ltr">
        <code className="font-mono text-[13px] leading-6 text-foreground/90">
          {lines.map((line, i) => (
            <span key={i} className="block whitespace-pre">
              {line || " "}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

/** Numbered section heading (e.g. "01  The Philosophy"). */
export function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
      <span className="font-mono text-cyan">{num}</span>
      <span>{title}</span>
    </h2>
  )
}
