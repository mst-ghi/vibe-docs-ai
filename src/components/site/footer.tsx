"use client";

import {
  ArrowUpRight,
  GitBranch,
  Globe,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/providers";

export function Footer() {
  const { dict } = useI18n();
  const f = dict.footer;

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-10">
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold tracking-tight text-primary">
            {dict.nav.brand}
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">{f.tagline}</p>
          <div className="flex gap-4 text-muted-foreground">
            <Link
              href="/"
              aria-label="Terminal"
              className="transition-colors hover:text-primary"
            >
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

      {/* Bottom bar: copyright + AI credit + developer credit */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-5 px-4 py-6 sm:px-6 md:flex-row lg:px-10">
          <p className="text-xs text-muted-foreground">{f.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Built-with AI credit */}
            <a
              href={f.aiUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${f.builtWith} ${f.aiModel} · ${f.aiProvider}`}
              aria-label={`${f.builtWith} ${f.aiModel} · ${f.aiProvider}`}
              className="group relative inline-flex items-center rounded-full p-px transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* gradient ring */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan/40 via-violet/40 to-cyan/40 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2 rounded-full bg-background/90 py-1.5 pe-3.5 ps-3 backdrop-blur">
                <Sparkles className="pulse-soft size-3.5 text-cyan" />
                <span className="text-xs leading-tight text-muted-foreground">
                  {f.builtWith}{" "}
                  <span className="text-shimmer font-semibold">
                    {f.aiModel}
                  </span>
                  <span className="mx-1 text-muted-foreground/50">·</span>
                  <span className="text-foreground/70 transition-colors group-hover:text-violet">
                    {f.aiProvider}
                  </span>
                </span>
                <ArrowUpRight className="size-3.5 text-muted-foreground transition-all duration-300 group-hover:text-cyan rtl:-scale-x-100" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
