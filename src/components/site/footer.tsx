"use client"

import { ArrowUpRight, GitBranch, Globe, Terminal } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"

export function Footer() {
  const { dict } = useI18n()
  const f = dict.footer

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-10">
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold tracking-tight text-primary">{dict.nav.brand}</div>
          <p className="max-w-xs text-sm text-muted-foreground">{f.tagline}</p>
          <div className="flex gap-4 text-muted-foreground">
            <Link href="/" aria-label="Terminal" className="transition-colors hover:text-primary">
              <Terminal className="size-5" />
            </Link>
            <a
              href={f.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-primary"
            >
              <GitBranch className="size-5" />
            </a>
            <a
              href={f.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="transition-colors hover:text-primary"
            >
              <Globe className="size-5" />
            </a>
          </div>
        </div>

        {f.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <span className="label-caps text-foreground">{column.title}</span>
            {column.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar: copyright + developer credit */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-5 px-4 py-6 sm:px-6 md:flex-row lg:px-10">
          <p className="text-xs text-muted-foreground">{f.copyright}</p>

          <a
            href={f.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${f.developerName} — ${f.developerRole} · ${f.developerCta}`}
            aria-label={`${f.builtBy} ${f.developerName} — ${f.developerCta}`}
            className="group relative flex items-center gap-3 rounded-full p-px transition-transform duration-300 hover:-translate-y-0.5"
          >
            {/* gradient ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan/40 via-violet/40 to-cyan/40 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center gap-3 rounded-full bg-background/90 py-1.5 pe-4 ps-1.5 backdrop-blur">
              {/* monogram avatar */}
              <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet font-mono text-xs font-bold text-background shadow-[0_0_14px_color-mix(in_srgb,var(--neon-cyan)_45%,transparent)]">
                MG
              </span>
              <span className="flex flex-col text-start leading-tight">
                <span className="label-caps text-[10px] text-muted-foreground">{f.builtBy}</span>
                <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-cyan">
                  {f.developerName}
                </span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:text-cyan rtl:-scale-x-100" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
