"use client"

import { ArrowRight, BookOpen, ShieldAlert, ShieldCheck, Wrench } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal, SpotlightCard } from "@/components/site/motion"
import { Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SecurityPage() {
  const { dict } = useI18n()
  const t = dict.security

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-3 py-1 text-violet">
              <ShieldCheck className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </Container>
      </section>

      {/* Lethal trifecta */}
      <section className="border-t border-border py-20">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4" tone="violet">
              {t.riskEyebrow}
            </Eyebrow>
            <h2 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              <ShieldAlert className="size-7 shrink-0 text-violet" />
              {t.riskTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.riskBody}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {t.riskLegs.map((leg, i) => (
              <Reveal key={leg.title} delay={i * 90}>
                <div className="glow-border h-full rounded-xl">
                  <div className="glass-card h-full rounded-xl p-6">
                    <span className="font-mono text-sm text-violet">0{i + 1}</span>
                    <h3 className="mt-2 font-semibold">{leg.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{leg.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="max-w-3xl border-s-2 border-violet/40 ps-4 text-foreground/80 text-pretty">
              {t.riskClose}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Permission posture */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.permsTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">{t.permsLead}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {t.perms.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 80}>
                <SpotlightCard className="flex h-full gap-4 p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 font-mono text-sm text-cyan">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Practices */}
      <section className="border-t border-border py-24">
        <Container>
          <Reveal className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.practicesTitle}
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.practices.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 70}>
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

          <div className="mt-12 flex flex-wrap gap-4">
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
