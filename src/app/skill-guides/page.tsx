"use client"

import { Activity, CheckCircle2, Sparkles } from "lucide-react"
import { useI18n } from "@/components/providers"
import { DocShell } from "@/components/site/doc-shell"
import { Chip, CodeBlock, GlassCard } from "@/components/site/primitives"

export default function SkillGuidesPage() {
  const { dict } = useI18n()
  const t = dict.skillGuides
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
      <div className="max-w-3xl">
        <GlassCard className="mb-8 p-5">
          <span className="label-caps text-muted-foreground">{t.relatedLabel}</span>
          <div className="mt-3 flex flex-wrap gap-3">
            {t.related.map((skill, i) => (
              <Chip key={skill} tone={i % 2 === 0 ? "violet" : "cyan"}>
                {skill}
              </Chip>
            ))}
          </div>
        </GlassCard>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.lead}</p>

        <GlassCard className="mt-8 flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Activity className="size-5 text-cyan" />
            <div>
              <div className="label-caps">{t.liveActivityLabel}</div>
              <div className="text-sm text-muted-foreground">{t.liveActivitySub}</div>
            </div>
          </div>
          <Chip dot>{t.liveActivityCount}</Chip>
        </GlassCard>

        <div className="mt-12 flex flex-col gap-8">
          {/* Step 01 */}
          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <GlassCard className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full border border-cyan/30 font-mono text-sm text-cyan">
                  {t.step1.num}
                </span>
                <h2 className="text-xl font-semibold">{t.step1.title}</h2>
              </div>
              <p className="mb-5 text-sm text-muted-foreground">{t.step1.desc}</p>
              <CodeBlock fileName={t.step1.terminalLabel} lines={t.step1.terminal} />
            </GlassCard>

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

          {/* Step 02 */}
          <GlassCard className="grid gap-6 p-7 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full border border-violet/30 font-mono text-sm text-violet">
                  {t.step2.num}
                </span>
                <h2 className="text-xl font-semibold">{t.step2.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground">{t.step2.desc}</p>
            </div>
            <div className="vibe-backdrop grid h-36 place-items-center rounded-xl border border-border">
              <Chip dot>
                <Sparkles className="size-3.5" />
                {t.step2.badge}
              </Chip>
            </div>
          </GlassCard>
        </div>
      </div>
    </DocShell>
  )
}
