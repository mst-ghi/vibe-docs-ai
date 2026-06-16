"use client"

import { Bug, Palette, Rocket, Zap } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal } from "@/components/site/motion"
import { Chip, Container, Eyebrow, GlassCard } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function groupIcon(label: string) {
  const l = label.toLowerCase()
  if (l.includes("bug") || l.includes("اشکال")) return Bug
  if (l.includes("ui") || l.includes("رابط")) return Palette
  if (l.includes("foundation") || l.includes("پایه")) return Rocket
  return Zap
}

export default function ChangelogPage() {
  const { dict } = useI18n()
  const t = dict.changelog

  return (
    <Container className="py-16 lg:py-24">
      <header className="max-w-2xl">
        <Eyebrow className="mb-4">{t.eyebrow}</Eyebrow>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.lead}</p>
      </header>

      <div className="mt-14 max-w-3xl">
        <div className="relative flex flex-col gap-10 border-s border-border ps-8">
          {t.releases.map((release) => (
            <Reveal key={release.version} className="relative">
              <span className="absolute -start-[2.55rem] top-1.5 size-3 rounded-full border-2 border-background bg-cyan" />
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-mono text-xl font-bold">{release.version}</h2>
                {release.latest && <Chip dot>{t.latestLabel}</Chip>}
              </div>
              <div className="label-caps mt-1 text-muted-foreground">
                {t.releasedLabel} {release.date}
              </div>

              <div className="mt-5 flex flex-col gap-5">
                {release.groups.map((group) => {
                  const Icon = groupIcon(group.label)
                  return (
                    <GlassCard key={group.label} className="p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Icon className="size-4 text-violet" />
                        <span className="label-caps text-foreground">{group.label}</span>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <GlassCard className="mt-14 flex max-w-3xl flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{t.subscribeTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t.subscribeDesc}</p>
        </div>
        <Link href="/handbook" className={cn(buttonVariants({ size: "lg" }), "shrink-0 px-6")}>
          {t.subscribeCta}
        </Link>
      </GlassCard>
    </Container>
  )
}
