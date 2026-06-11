"use client"

import { ArrowRight, Bot, Boxes, Layers, Sparkles, Terminal, Users, Zap } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Container, Eyebrow, GlassCard } from "@/components/site/primitives"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PRINCIPLE_ICONS = [Users, Zap, Layers, Bot]

export default function HomePage() {
  const { dict } = useI18n()
  const t = dict.home

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop relative overflow-hidden">
        <Container className="grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-3 py-1 text-violet">
              <Sparkles className="size-3.5" />
              <span className="label-caps">{t.badge}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.titleLead} <span className="text-cyan">{t.titleHighlight}</span> {t.titleTail}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/handbook"
                className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}
              >
                {t.ctaPrimary}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/handbook"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-violet px-6 text-foreground"
                )}
              >
                {t.ctaSecondary}
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
              {t.stats.map((stat, i) => (
                <div key={stat.label}>
                  <div
                    className={cn(
                      "text-2xl font-bold",
                      i === 0 && "text-cyan",
                      i === 2 && "text-violet"
                    )}
                  >
                    {stat.value}
                  </div>
                  <div className="label-caps mt-1 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Holographic orb */}
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
      </section>

      {/* Core principles bento */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <div className="mb-16 text-center">
            <Eyebrow className="mb-4">{t.principlesEyebrow}</Eyebrow>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.principlesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.principles.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[i]
              const violet = i % 2 === 1
              return (
                <GlassCard
                  key={p.title}
                  className={cn("flex h-72 flex-col p-8", i === 0 && "md:col-span-2")}
                >
                  <div
                    className={cn(
                      "mb-6 grid size-12 place-items-center rounded-lg border",
                      violet
                        ? "border-violet/20 bg-violet/10 text-violet"
                        : "border-cyan/20 bg-cyan/10 text-cyan"
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </GlassCard>
              )
            })}

            {/* Featured wide card */}
            <GlassCard className="relative flex h-72 flex-col justify-between overflow-hidden p-8 md:col-span-2 lg:col-span-4">
              <Boxes className="absolute -right-6 -top-6 size-48 text-cyan/5 rtl:-left-6 rtl:right-auto" />
              <div className="relative">
                <span className="label-caps mb-4 inline-block rounded bg-cyan/10 px-2 py-1 text-cyan">
                  {t.featuredTag}
                </span>
                <h3 className="mb-3 text-2xl font-semibold">{t.featuredTitle}</h3>
                <p className="max-w-2xl text-muted-foreground">{t.featuredDesc}</p>
              </div>
              <Link
                href="/roadmap"
                className="label-caps relative mt-6 inline-flex w-fit items-center gap-2 border-b border-cyan/30 pb-1 text-cyan transition-colors hover:border-cyan"
              >
                {t.featuredCta}
                <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Ecosystem */}
      <section className="border-t border-border py-24">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.ecosystemTitle}
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">{t.ecosystemDesc}</p>
            </div>
            <Button variant="outline" size="lg" className="w-fit">
              {t.ecosystemCta}
              <Terminal className="size-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-4">
            {t.ecosystemStats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-card/40 p-8 transition-colors hover:bg-card"
              >
                <div className="mb-4 text-5xl font-bold text-muted-foreground/20 transition-colors group-hover:text-cyan/30">
                  {stat.value}
                </div>
                <h4 className="mb-2 text-lg font-semibold">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <Container>
          <GlassCard className="relative overflow-hidden rounded-2xl p-10 lg:p-20">
            <div className="absolute -right-24 -top-24 size-96 rounded-full bg-cyan/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-violet/10 blur-[100px]" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.newsletterTitle}
              </h2>
              <form
                className="mb-8 flex w-full flex-col gap-4 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder={t.newsletterPlaceholder}
                  aria-label={t.newsletterPlaceholder}
                  className="flex-grow rounded-lg border border-border bg-background px-6 py-3 font-mono text-sm outline-none transition-all focus:border-cyan focus:ring-1 focus:ring-cyan"
                />
                <Button type="submit" size="lg" className="shrink-0 px-8">
                  {t.newsletterCta}
                </Button>
              </form>
              <p className="text-sm text-muted-foreground opacity-70">{t.newsletterFineprint}</p>
            </div>
          </GlassCard>
        </Container>
      </section>
    </>
  )
}
