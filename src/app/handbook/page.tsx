"use client"

import { BookOpen, Eye, Wand2 } from "lucide-react"
import { useI18n } from "@/components/providers"
import { Chip, CodeBlock, Container, Eyebrow, GlassCard } from "@/components/site/primitives"

const PHILOSOPHY_ICONS = [Eye, Wand2]

export default function HandbookPage() {
  const { dict } = useI18n()
  const t = dict.handbook

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop relative overflow-hidden">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <BookOpen className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{t.subtitle}</p>
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

      {/* 01 Philosophy */}
      <section className="border-t border-border py-20 lg:py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4">{t.philosophy.num}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.philosophy.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.philosophy.lead}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.philosophy.cards.map((card, i) => {
              const Icon = PHILOSOPHY_ICONS[i]
              return (
                <GlassCard key={card.title} className="p-6">
                  <Icon className="mb-4 size-6 text-cyan" />
                  <h3 className="mb-2 font-semibold">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </GlassCard>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 02 Roles vs Skills */}
      <section className="border-t border-border bg-card/30 py-20 lg:py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4" tone="violet">
              {t.roles.num}
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.roles.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.roles.lead}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.roles.items.map((item) => (
              <GlassCard key={item.title} className="p-6">
                <h3 className="mb-2 font-semibold text-violet">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 Implementation */}
      <section className="border-t border-border py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_minmax(0,540px)] lg:items-start">
          <div>
            <Eyebrow className="mb-4">{t.implementation.num}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.implementation.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.implementation.lead}</p>
          </div>
          <div className="lg:sticky lg:top-24">
            <CodeBlock fileName={t.implementation.codeFile} lines={t.implementation.code} />
          </div>
        </Container>
      </section>

      {/* 04 Documenting for agents */}
      <section className="border-t border-border bg-card/30 py-20 lg:py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4" tone="violet">
              {t.documentation.num}
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.documentation.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.documentation.lead}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.documentation.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card/40 p-6 ps-6"
                style={{ borderInlineStartWidth: 2 }}
              >
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 Holographic Maps */}
      <section className="border-t border-border py-20 lg:py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4">{t.maps.num}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.maps.title}</h2>
          </div>
          <GlassCard className="vibe-backdrop flex h-56 flex-col justify-between overflow-hidden p-6">
            <span className="label-caps text-cyan">{t.maps.traceLabel}</span>
            <div className="text-center font-mono text-sm text-muted-foreground">
              {t.maps.traceSub}
            </div>
            <div />
          </GlassCard>
          <div className="mt-6">
            <span className="label-caps mb-3 block text-muted-foreground">
              {t.maps.agentsLabel}
            </span>
            <div className="flex flex-wrap gap-3">
              {t.maps.agents.map((agent, i) => (
                <Chip key={agent} tone={i % 2 === 0 ? "cyan" : "violet"} dot>
                  {agent}
                </Chip>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
