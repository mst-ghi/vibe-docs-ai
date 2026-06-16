"use client"

import {
  ArrowRight,
  BookOpen,
  Code,
  Database,
  Globe,
  Plug,
  ShieldCheck,
  Terminal,
  TriangleAlert,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal } from "@/components/site/motion"
import { CodeBlock, Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const GROUP_ICONS = [Code, Database, Globe, ShieldCheck, Plug]

export default function ToolboxPage() {
  const { dict } = useI18n()
  const t = dict.toolbox

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <Wrench className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </Container>
      </section>

      {/* Two wins */}
      <section className="border-t border-border py-16">
        <Container>
          <Reveal className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t.principleTitle}</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {t.principlePoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="glass-card h-full rounded-xl p-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="font-mono text-cyan">0{i + 1}</span>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The kit */}
      <section className="border-t border-border bg-card/30 py-20">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>{t.groupsLabel}</Eyebrow>
          </Reveal>
          <div className="flex flex-col gap-12">
            {t.groups.map((group, gi) => {
              const Icon = GROUP_ICONS[gi] ?? Code
              return (
                <Reveal key={group.name}>
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-lg font-semibold">{group.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {group.tools.map((tool) => (
                        <div key={tool.name} className="glass-card flex flex-col rounded-xl p-5">
                          <h4 className="font-mono text-sm font-semibold text-foreground">
                            {tool.name}
                          </h4>
                          <code
                            dir="ltr"
                            className="mt-2 block overflow-x-auto rounded-md border border-border bg-popover px-3 py-2 font-mono text-xs text-cyan"
                          >
                            {tool.install}
                          </code>
                          <p className="mt-3 text-sm text-muted-foreground">{tool.use}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Starter one-liner */}
      <section className="border-t border-border py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="mb-4 flex items-center gap-2 text-cyan">
              <Terminal className="size-4" />
              <span className="label-caps">{t.starterLabel}</span>
            </div>
            <CodeBlock fileName="setup.sh" lines={t.starterCode} />
          </Reveal>
        </Container>
      </section>

      {/* Safety */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4" tone="violet">
              {t.safetyEyebrow}
            </Eyebrow>
            <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              <TriangleAlert className="size-7 shrink-0 text-violet" />
              {t.safetyTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.safetyBody}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {t.safetyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-xl border border-violet/20 bg-violet/5 p-6">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/editors" className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}>
              <Terminal className="size-4" />
              {t.ctaPrimary}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href="/handbook"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
            >
              <BookOpen className="size-4" />
              {t.ctaSecondary}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
