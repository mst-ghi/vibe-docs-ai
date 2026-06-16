"use client"

import { ArrowRight, BookOpen, Bot, Boxes, Layers, Lightbulb, Wrench } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal, SpotlightCard } from "@/components/site/motion"
import { Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const FAMILY_ICONS = [Bot, Boxes, Layers]

export default function ModelsPage() {
  const { dict } = useI18n()
  const t = dict.models

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-3 py-1 text-violet">
              <Layers className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </Container>
      </section>

      {/* The three families */}
      <section className="border-t border-border py-20">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>{t.familiesLabel}</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {t.families.map((f, i) => {
              const Icon = FAMILY_ICONS[i] ?? Bot
              const violet = i === 2
              return (
                <Reveal key={f.name} delay={i * 90}>
                  <SpotlightCard className="flex h-full flex-col p-7">
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className={cn(
                          "grid size-12 place-items-center rounded-xl border",
                          violet
                            ? "border-violet/20 bg-violet/10 text-violet"
                            : "border-cyan/20 bg-cyan/10 text-cyan"
                        )}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span className="font-mono text-sm font-bold text-foreground/70">
                        {f.cost}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{f.name}</h3>
                    <div className="label-caps mt-1 text-muted-foreground">{f.who}</div>
                    <p
                      className={cn(
                        "mt-3 text-sm font-medium",
                        violet ? "text-violet" : "text-cyan"
                      )}
                    >
                      {f.tagline}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">{f.strengths}</p>
                    <p className="mt-4 border-s-2 border-border ps-3 text-sm text-foreground/70">
                      {f.watch}
                    </p>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>

          {/* Also worth knowing */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="md:col-span-2">
              <h3 className="text-lg font-semibold">{t.alsoTitle}</h3>
            </Reveal>
            {t.also.map((a, i) => (
              <Reveal key={a.name} delay={i * 90}>
                <div className="glass-card h-full rounded-xl p-6">
                  <h4 className="font-semibold">{a.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Routing pattern */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4" tone="violet">
              {t.routingEyebrow}
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.routingTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.routingBody}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {t.routingPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="glass-card h-full rounded-xl p-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="size-2 rounded-full bg-violet" />
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Honest caveat */}
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="flex items-start gap-4 rounded-xl border border-cyan/20 bg-cyan/5 p-6">
              <Lightbulb className="mt-0.5 size-5 shrink-0 text-cyan" />
              <div>
                <h3 className="font-semibold">{t.honestTitle}</h3>
                <p className="mt-1 text-sm text-muted-foreground text-pretty">{t.honestBody}</p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/toolbox" className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}>
              <Wrench className="size-4" />
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
