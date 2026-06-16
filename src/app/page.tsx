"use client"

import {
  ArrowRight,
  BookOpen,
  Code,
  Layers,
  Repeat,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Wrench,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal, SpotlightCard } from "@/components/site/motion"
import { Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const GUIDE_ICONS = [BookOpen, Terminal, Layers, Wrench, Zap, Repeat, ShieldCheck]
const PRINCIPLE_ICONS = [Code, ShieldCheck, Users]

export default function HomePage() {
  const { dict } = useI18n()
  const t = dict.home

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-3 py-1 text-violet">
              <Sparkles className="size-3.5" />
              <span className="label-caps">{t.badge}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.titleLead} <span className="text-cyan">{t.titleHighlight}</span> {t.titleTail}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">{t.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/handbook"
                className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}
              >
                {t.ctaPrimary}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/toolbox"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-violet px-6 text-foreground"
                )}
              >
                {t.ctaSecondary}
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {t.pillars.map((p, i) => (
                <div key={p.label}>
                  <div
                    className={cn(
                      "text-lg font-bold",
                      i === 0 && "text-cyan",
                      i === 2 && "text-violet"
                    )}
                  >
                    {p.value}
                  </div>
                  <div className="label-caps mt-1 text-muted-foreground">{p.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract terminal orb */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute size-[420px] rounded-full bg-cyan/10 blur-[120px]" />
            <div className="absolute size-[320px] translate-x-12 rounded-full bg-violet/15 blur-[100px]" />
            <div className="orb-animation relative grid size-72 place-items-center rounded-full border border-border bg-gradient-to-br from-cyan/20 via-transparent to-violet/20 sm:size-96">
              <div className="size-56 rounded-full border border-cyan/30 sm:size-72" />
              <div className="absolute size-40 rounded-full border border-violet/30 sm:size-52" />
              <div className="absolute size-24 rounded-full bg-cyan/20 blur-2xl sm:size-32" />
              <Terminal className="absolute size-10 text-cyan" />
            </div>
          </div>
        </Container>

        {/* Marquee of tools & agents */}
        <div className="relative border-t border-border py-6">
          <Container>
            <div className="label-caps mb-4 text-center text-muted-foreground">
              {t.marqueeLabel}
            </div>
          </Container>
          <div className="marquee">
            <div className="marquee__track gap-10 pe-10">
              {[...t.marquee, ...t.marquee].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-mono text-sm whitespace-nowrap text-muted-foreground/70"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides bento */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow className="mb-4">{t.guidesEyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.guidesTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.guidesLead}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.guides.map((g, i) => {
              const Icon = GUIDE_ICONS[i] ?? BookOpen
              const violet = i % 2 === 1
              return (
                <Reveal
                  key={g.href}
                  delay={(i % 3) * 90}
                  className={cn(i === 0 && "lg:col-span-2")}
                >
                  <Link href={g.href} className="group block h-full">
                    <SpotlightCard className="flex h-full flex-col p-7">
                      <div className="mb-5 flex items-center justify-between">
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
                        <span className="label-caps text-muted-foreground">{g.tag}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">{g.title}</h3>
                      <p className="text-sm text-muted-foreground">{g.desc}</p>
                      <span className="label-caps mt-5 inline-flex items-center gap-1.5 text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                        Read
                        <ArrowRight className="size-3 rtl:rotate-180" />
                      </span>
                    </SpotlightCard>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* The one idea */}
      <section className="border-t border-border py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <Eyebrow className="mb-4" tone="violet">
              {t.principleEyebrow}
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.principleTitle}
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty">{t.principleBody}</p>
          </Reveal>
          <div className="flex flex-col gap-4">
            {t.principlePoints.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[i] ?? Code
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="glass-card flex items-start gap-4 rounded-xl p-6">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Closer */}
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="glow-border rounded-2xl">
              <div className="glass-card relative overflow-hidden rounded-2xl p-10 lg:p-16">
                <div className="absolute -end-24 -top-24 size-96 rounded-full bg-cyan/10 blur-[100px]" />
                <div className="absolute -bottom-24 -start-24 size-96 rounded-full bg-violet/10 blur-[100px]" />
                <div className="relative max-w-2xl">
                  <Eyebrow className="mb-4">{t.closerEyebrow}</Eyebrow>
                  <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    {t.closerTitle}
                  </h2>
                  <p className="mt-5 text-muted-foreground text-pretty">{t.closerBody}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/handbook"
                      className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}
                    >
                      <BookOpen className="size-4" />
                      {t.closerPrimary}
                    </Link>
                    <Link
                      href="/toolbox"
                      className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
                    >
                      <Wrench className="size-4" />
                      {t.closerSecondary}
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
