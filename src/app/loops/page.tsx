"use client"

import {
  ArrowRight,
  BookOpen,
  Boxes,
  Clock,
  Database,
  GitBranch,
  ListChecks,
  Quote,
  Repeat,
  TriangleAlert,
  Users,
  Wrench,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { CodeBlock, Container, Eyebrow, GlassCard } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const BLOCK_ICONS = [Clock, GitBranch, Zap, Wrench, Users, Database]

export default function LoopsPage() {
  const { dict } = useI18n()
  const t = dict.loops

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <Repeat className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{t.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.sources.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-muted-foreground transition-colors hover:border-cyan/40 hover:text-foreground"
                >
                  {s.label}
                  <ArrowRight className="size-3 rtl:rotate-180" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Definition */}
      <section className="border-t border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow className="mb-4">{t.defEyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight">{t.defTitle}</h2>
            <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
              {t.defBody.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          {/* Altitude ladder */}
          <div className="flex flex-col gap-4">
            {t.ladder.map((rung, i) => (
              <GlassCard
                key={rung.title}
                className={cn(
                  "flex items-start gap-4 p-6",
                  i === t.ladder.length - 1 && "border-cyan/30"
                )}
              >
                <span className="label-caps mt-1 w-20 shrink-0 text-violet">{rung.stage}</span>
                <div>
                  <h3 className="font-semibold">{rung.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{rung.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Pull quotes */}
      <section className="border-t border-border py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {t.quotes.map((q, i) => (
            <GlassCard key={q.who} className="relative p-8">
              <Quote
                className={cn("mb-4 size-7", i === 0 ? "text-cyan" : "text-violet")}
                aria-hidden
              />
              <blockquote className="text-lg leading-relaxed">“{q.text}”</blockquote>
              <footer className="label-caps mt-5 text-muted-foreground">— {q.who}</footer>
            </GlassCard>
          ))}
        </Container>
      </section>

      {/* Building blocks */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4">{t.blocksEyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.blocksTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.blocksLead}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.blocks.map((block, i) => {
              const Icon = BLOCK_ICONS[i] ?? Boxes
              const violet = i % 2 === 1
              return (
                <GlassCard key={block.name} className="flex flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={cn(
                        "grid size-10 place-items-center rounded-lg border",
                        violet
                          ? "border-violet/20 bg-violet/10 text-violet"
                          : "border-cyan/20 bg-cyan/10 text-cyan"
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className="label-caps text-muted-foreground">{block.tag}</span>
                  </div>
                  <h3 className="font-semibold">{block.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{block.desc}</p>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Lineage timeline */}
      <section className="border-t border-border py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4">{t.lineageEyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.lineageTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.lineageLead}</p>
          </div>
          <ol className="relative flex flex-col gap-8 border-s border-border ps-8">
            {t.lineage.map((rung, i) => (
              <li key={rung.name} className="relative">
                <span
                  className={cn(
                    "absolute -start-[2.55rem] top-1 grid size-5 place-items-center rounded-full border-2 border-background",
                    i === t.lineage.length - 1 ? "bg-cyan" : "bg-violet"
                  )}
                />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-sm text-cyan">{rung.year}</span>
                  <h3 className="text-lg font-semibold">{rung.name}</h3>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{rung.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Anatomy of one loop */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-start">
          <div>
            <Eyebrow className="mb-4">{t.anatomyEyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.anatomyTitle}</h2>
            <ol className="mt-8 flex flex-col gap-5">
              {t.anatomySteps.map((step, i) => (
                <li key={step.slice(0, 24)} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-cyan/30 font-mono text-sm text-cyan">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="mb-3 flex items-center gap-2 text-cyan">
              <ListChecks className="size-4" />
              <span className="label-caps">{t.starterLabel}</span>
            </div>
            <CodeBlock fileName="claude code" lines={t.starterCode} />
          </div>
        </Container>
      </section>

      {/* Guardrails / cost */}
      <section className="border-t border-border py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4" tone="violet">
              {t.guardEyebrow}
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.guardTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.guardBody}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.guards.map((g) => (
              <GlassCard key={g.title} className="p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <span className="size-2 rounded-full bg-violet" />
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
              <TriangleAlert className="size-5 text-cyan" />
              {t.cautionTitle}
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {t.cautions.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-border bg-card/40 p-6 ps-6"
                  style={{ borderInlineStartWidth: 2 }}
                >
                  <h4 className="font-medium">{c.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closer / CTA */}
      <section className="pb-24">
        <Container>
          <GlassCard className="relative overflow-hidden rounded-2xl p-10 lg:p-16">
            <div className="absolute -right-24 -top-24 size-96 rounded-full bg-cyan/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-violet/10 blur-[100px]" />
            <div className="relative max-w-3xl">
              <Eyebrow className="mb-4">{t.closerEyebrow}</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.closerTitle}</h2>
              <p className="mt-5 text-muted-foreground">{t.closerBody}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/handbook"
                  className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}
                >
                  <BookOpen className="size-4" />
                  {t.ctaPrimary}
                </Link>
                <Link
                  href="/skill-guides"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
                >
                  <Users className="size-4" />
                  {t.ctaSecondary}
                </Link>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>
    </>
  )
}
