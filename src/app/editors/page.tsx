"use client"

import {
  ArrowRight,
  Bot,
  Boxes,
  Code,
  GitBranch,
  Layers,
  Sparkles,
  Terminal,
  TriangleAlert,
  Wrench,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal, SpotlightCard } from "@/components/site/motion"
import { Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TOOL_ICONS = [Terminal, Code, GitBranch, Boxes, Zap, Bot, Layers, Sparkles]

const BYOK_TONE: Record<string, string> = {
  full: "border-cyan/30 bg-cyan/10 text-cyan",
  limited: "border-violet/30 bg-violet/10 text-violet",
  no: "border-border bg-muted text-muted-foreground",
}

export default function EditorsPage() {
  const { dict } = useI18n()
  const t = dict.editors

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <Terminal className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </Container>
      </section>

      {/* Tool cards */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.tools.map((tool, i) => {
              const Icon = TOOL_ICONS[i] ?? Terminal
              const violet = i % 2 === 1
              return (
                <Reveal key={tool.name} delay={(i % 2) * 80}>
                  <SpotlightCard className="flex h-full flex-col p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "grid size-11 place-items-center rounded-lg border",
                            violet
                              ? "border-violet/20 bg-violet/10 text-violet"
                              : "border-cyan/20 bg-cyan/10 text-cyan"
                          )}
                        >
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold leading-tight">{tool.name}</h3>
                          <span className="label-caps text-muted-foreground">{tool.kind}</span>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "label-caps shrink-0 rounded-full border px-2.5 py-1",
                          BYOK_TONE[tool.byok]
                        )}
                        title={t.byokLabel}
                      >
                        {t.byok[tool.byok as keyof typeof t.byok]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.strength}</p>
                    <p className="mt-4 border-s-2 border-cyan/30 ps-3 text-sm text-foreground/80">
                      {tool.fit}
                    </p>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* How to choose */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4">{t.chooseTitle}</Eyebrow>
            <p className="text-lg text-muted-foreground text-pretty">{t.chooseLead}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {t.choosePoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="glass-card h-full rounded-xl p-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="size-2 rounded-full bg-cyan" />
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex items-start gap-4 rounded-xl border border-violet/20 bg-violet/5 p-6">
              <TriangleAlert className="mt-0.5 size-5 shrink-0 text-violet" />
              <div>
                <h3 className="font-semibold">{t.noteTitle}</h3>
                <p className="mt-1 text-sm text-muted-foreground text-pretty">{t.noteBody}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container className="flex flex-wrap gap-4">
          <Link href="/models" className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}>
            <Layers className="size-4" />
            {t.ctaPrimary}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
          <Link
            href="/toolbox"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
          >
            <Wrench className="size-4" />
            {t.ctaSecondary}
          </Link>
        </Container>
      </section>
    </>
  )
}
