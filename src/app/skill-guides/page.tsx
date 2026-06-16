"use client"

import { Activity, CheckCircle2, Sparkles, Zap } from "lucide-react"
import { useI18n } from "@/components/providers"
import { Chip, CodeBlock, Container, Eyebrow, GlassCard } from "@/components/site/primitives"

export default function SkillGuidesPage() {
  const { dict } = useI18n()
  const t = dict.skillGuides

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop relative overflow-hidden">
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <Zap className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{t.lead}</p>
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

      {/* Live activity */}
      <section className="border-t border-border py-12">
        <Container>
          <GlassCard className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <Activity className="size-5 text-cyan" />
              <div>
                <div className="label-caps">{t.liveActivityLabel}</div>
                <div className="text-sm text-muted-foreground">{t.liveActivitySub}</div>
              </div>
            </div>
            <Chip dot>{t.liveActivityCount}</Chip>
          </GlassCard>
        </Container>
      </section>

      {/* Step 01 */}
      <section className="border-t border-border bg-card/30 py-20 lg:py-24">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow className="mb-4">{t.step1.num}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.step1.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.step1.desc}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <CodeBlock fileName={t.step1.terminalLabel} lines={t.step1.terminal} />
            <GlassCard className="p-7">
              <span className="label-caps text-violet">{t.step1.instructionsLabel}</span>
              <ul className="mt-4 flex flex-col gap-4">
                {t.step1.instructions.map((ins) => (
                  <li key={ins} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet" />
                    {ins}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Step 02 */}
      <section className="border-t border-border py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center">
          <div>
            <Eyebrow className="mb-4" tone="violet">
              {t.step2.num}
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.step2.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.step2.desc}</p>
          </div>
          <div className="vibe-backdrop grid h-36 place-items-center rounded-xl border border-border">
            <Chip dot>
              <Sparkles className="size-3.5" />
              {t.step2.badge}
            </Chip>
          </div>
        </Container>
      </section>
    </>
  )
}
