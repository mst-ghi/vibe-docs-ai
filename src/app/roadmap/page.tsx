"use client"

import { CircleCheck, CircleDashed, CircleDot, Rocket, Users } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Chip, Container, Eyebrow, GlassCard } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const STATUS_ICON = {
  done: CircleCheck,
  active: CircleDot,
  upcoming: CircleDashed,
} as const

type PhaseStatus = keyof typeof STATUS_ICON

export default function RoadmapPage() {
  const { dict } = useI18n()
  const t = dict.roadmap

  return (
    <div className="vibe-backdrop">
      <Container className="py-16 lg:py-24">
        <div className="mb-4 flex items-center gap-3">
          <Chip dot>{t.badge}</Chip>
          <span className="label-caps text-muted-foreground">{t.version}</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {t.title.replace(t.titleHighlight, "")}
          <span className="text-cyan">{t.titleHighlight}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t.lead}</p>

        <div className="mt-14 flex flex-col gap-6">
          {t.phases.map((phase) => {
            const status = phase.status as PhaseStatus
            const Icon = STATUS_ICON[status]
            const accent = status === "active"
            return (
              <GlassCard
                key={phase.num}
                className={cn(
                  "relative p-8",
                  accent && "border-cyan/30",
                  status === "upcoming" && "opacity-90"
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                  <div>
                    <span className="label-caps text-violet">{phase.num}</span>
                    <h2 className="mt-1 text-2xl font-semibold">
                      {phase.tag} — {phase.title}
                    </h2>
                  </div>
                  <Chip tone={accent ? "cyan" : "violet"} dot={accent}>
                    {t.statusLabels[status]}
                  </Chip>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {phase.items.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <Icon
                        className={cn(
                          "mt-0.5 size-5 shrink-0",
                          status === "done" ? "text-cyan" : "text-muted-foreground"
                        )}
                      />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {status === "upcoming" && (
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:max-w-md">
                    {t.phaseStats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-cyan">{stat.value}</div>
                        <div className="label-caps mt-1 text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            )
          })}
        </div>

        {/* CTA */}
        <GlassCard className="mt-12 flex flex-col items-center gap-6 p-12 text-center">
          <Eyebrow>{t.badge}</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.ctaTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/handbook" className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}>
              <Rocket className="size-4" />
              {t.ctaPrimary}
            </Link>
            <Link
              href="/resources"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
            >
              <Users className="size-4" />
              {t.ctaSecondary}
            </Link>
          </div>
        </GlassCard>
      </Container>
    </div>
  )
}
