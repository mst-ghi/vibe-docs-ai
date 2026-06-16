"use client"

import { ArrowRight, BookOpen, Wrench, Zap } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal } from "@/components/site/motion"
import { Chip, CodeBlock, Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HandbookPage() {
  const { dict } = useI18n()
  const t = dict.handbook

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <BookOpen className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.status.map((s) => (
                <Chip key={s.label}>
                  {s.label}: {s.value}
                </Chip>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CLAUDE.md example */}
      <section className="border-t border-border py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_minmax(0,520px)] lg:items-center">
          <Reveal>
            <Eyebrow className="mb-4">{t.sections[0].num}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.sections[0].title}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.sections[0].lead}</p>
            <div className="mt-8 flex flex-col gap-4">
              {t.sections[0].points.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-cyan" />
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:sticky lg:top-24">
            <div className="mb-3 label-caps text-muted-foreground">{t.claudeMdLabel}</div>
            <CodeBlock fileName={t.claudeMdFile} lines={t.claudeMd} />
          </Reveal>
        </Container>
      </section>

      {/* Sections 02–05 */}
      <section className="border-t border-border bg-card/30 py-20">
        <Container>
          <div className="flex flex-col gap-16">
            {t.sections.slice(1).map((section, idx) => {
              const violet = idx % 2 === 0
              return (
                <Reveal key={section.num}>
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
                    <div>
                      <Eyebrow className="mb-4" tone={violet ? "violet" : "cyan"}>
                        {section.num}
                      </Eyebrow>
                      <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-sm text-muted-foreground text-pretty">
                        {section.lead}
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {section.points.map((p) => (
                        <div key={p.title} className="glass-card h-full rounded-xl p-5">
                          <h3 className={cn("font-semibold", violet ? "text-violet" : "text-cyan")}>
                            {p.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
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

      {/* Closer */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="glow-border rounded-2xl">
              <div className="glass-card relative overflow-hidden rounded-2xl p-10 lg:p-16">
                <div className="absolute -end-24 -top-24 size-96 rounded-full bg-cyan/10 blur-[100px]" />
                <div className="relative max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    {t.closerTitle}
                  </h2>
                  <p className="mt-5 text-muted-foreground text-pretty">{t.closerBody}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/skill-guides"
                      className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}
                    >
                      <Zap className="size-4" />
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
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
