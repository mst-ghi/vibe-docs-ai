"use client"

import {
  BookOpen,
  Box,
  Code,
  FolderOpen,
  type LucideIcon,
  Map as MapIcon,
  Repeat,
  ScrollText,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "./primitives"

const ICONS: Record<string, LucideIcon> = {
  handbook: BookOpen,
  "skill-guides": Zap,
  loops: Repeat,
  roadmap: MapIcon,
  resources: FolderOpen,
  security: Shield,
  changelog: ScrollText,
  intro: BookOpen,
  policy: ShieldCheck,
  sandbox: Box,
  api: Code,
  compliance: MapIcon,
}

export type DocNavItem = {
  id: string
  label: string
  href?: string
}

export function DocShell({
  title,
  version,
  items,
  cta,
  children,
}: {
  title: string
  version: string
  items: readonly DocNavItem[]
  cta?: { label: string; href: string }
  children: ReactNode
}) {
  const pathname = usePathname()

  return (
    <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[240px_1fr] lg:gap-12">
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <div className="mb-6">
            <div className="text-lg font-semibold">{title}</div>
            <div className="label-caps mt-1 text-muted-foreground">{version}</div>
          </div>
          <nav className="flex flex-col gap-1">
            {items.map((item) => {
              const Icon = ICONS[item.id] ?? BookOpen
              const href = item.href ?? `/${item.id}`
              const active = item.href
                ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                : false
              return (
                <Link
                  key={item.id}
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-sidebar-accent text-primary"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
          {cta && (
            <Link href={cta.href} className={cn(buttonVariants({ size: "sm" }), "mt-8 w-full")}>
              {cta.label}
            </Link>
          )}
        </div>
      </aside>
      <div className="min-w-0">{children}</div>
    </Container>
  )
}
