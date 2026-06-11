"use client"

import { Eye, Wand2 } from "lucide-react"
import { useI18n } from "@/components/providers"
import { DocShell } from "@/components/site/doc-shell"
import { Chip, CodeBlock, GlassCard, SectionHeading } from "@/components/site/primitives"

const PHILOSOPHY_ICONS = [Eye, Wand2]

export default function HandbookPage() {
  const { dict } = useI18n()
  const t = dict.handbook
  const sidebar = dict.sidebar

  return (
    <DocShell
      title={sidebar.title}
      version={sidebar.version}
      items={sidebar.items.map((i) => ({
        ...i,
        href: i.id === "handbook" ? "/handbook" : `/${i.id}`,
      }))}
      cta={{ label: sidebar.joinCommunity, href: "/resources" }}
    >
      <article className="max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.status.map((s) => (
              <Chip key={s.label}>
                {s.label}: {s.value}
              </Chip>
            ))}
          </div>
        </header>

        {/* 01 Philosophy */}
        <section className="mb-16">
          <SectionHeading num={t.philosophy.num} title={t.philosophy.title} />
          <p className="mt-4 text-muted-foreground">{t.philosophy.lead}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
        </section>

        {/* 02 Roles vs Skills */}
        <section className="mb-16">
          <SectionHeading num={t.roles.num} title={t.roles.title} />
          <p className="mt-4 text-muted-foreground">{t.roles.lead}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {t.roles.items.map((item) => (
              <GlassCard key={item.title} className="p-6">
                <h3 className="mb-2 font-semibold text-violet">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 03 Implementation */}
        <section className="mb-16">
          <SectionHeading num={t.implementation.num} title={t.implementation.title} />
          <p className="mt-4 text-muted-foreground">{t.implementation.lead}</p>
          <CodeBlock
            className="mt-8"
            fileName={t.implementation.codeFile}
            lines={t.implementation.code}
          />
        </section>

        {/* 04 Documenting for agents */}
        <section className="mb-16">
          <SectionHeading num={t.documentation.num} title={t.documentation.title} />
          <p className="mt-4 text-muted-foreground">{t.documentation.lead}</p>
          <div className="mt-8 flex flex-col gap-4">
            {t.documentation.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card/40 p-5 ps-6"
                style={{ borderInlineStartWidth: 2 }}
              >
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Holographic Maps */}
        <section>
          <SectionHeading num={t.maps.num} title={t.maps.title} />
          <GlassCard className="vibe-backdrop mt-8 flex h-56 flex-col justify-between overflow-hidden p-6">
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
        </section>
      </article>
    </DocShell>
  )
}
