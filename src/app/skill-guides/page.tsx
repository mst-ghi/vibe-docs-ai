"use client"

import { ArrowRight, ListChecks, Repeat, Wrench, Zap } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal, SpotlightCard } from "@/components/site/motion"
import { Chip, CodeBlock, Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SkillGuidesPage() {
  const { dict } = useI18n()
  const t = dict.skillGuides

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <Zap className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.related.map((skill, i) => (
                <Chip key={skill} tone={i % 2 === 0 ? "violet" : "cyan"}>
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tricks grid */}
      <section className="border-t border-border py-20">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>{t.tricksLabel}</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.tricks.map((trick, i) => (
              <Reveal key={trick.name} delay={(i % 3) * 80}>
                <SpotlightCard className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">{trick.name}</h3>
                    <span className="label-caps shrink-0 text-muted-foreground">{trick.tag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{trick.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Terminal sample */}
      <section className="border-t border-border bg-card/30 py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <CodeBlock fileName={t.terminalLabel} lines={t.terminal} />
          </Reveal>
        </Container>
      </section>

      {/* Task management */}
      <section className="border-t border-border py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <Eyebrow className="mb-4" tone="violet">
              {t.taskEyebrow}
            </Eyebrow>
            <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              <ListChecks className="size-7 shrink-0 text-violet" />
              {t.taskTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.taskBody}</p>
          </Reveal>
          <ol className="flex flex-col gap-5">
            {t.taskSteps.map((step, i) => (
              <Reveal key={step.slice(0, 16)} delay={i * 80}>
                <li className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-violet/30 font-mono text-sm text-violet">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm text-muted-foreground">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container className="flex flex-wrap gap-4">
          <Link href="/loops" className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}>
            <Repeat className="size-4" />
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
