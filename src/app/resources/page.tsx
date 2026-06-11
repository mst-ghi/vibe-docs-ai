"use client"

import {
  ArrowRight,
  BookOpen,
  Boxes,
  Code2,
  Cpu,
  MessagesSquare,
  PlayCircle,
  Search,
  Terminal,
} from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Container, Eyebrow, GlassCard } from "@/components/site/primitives"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SDK_ICONS = [Terminal, Code2, Cpu]

export default function ResourcesPage() {
  const { dict } = useI18n()
  const t = dict.resources

  return (
    <div className="vibe-backdrop">
      <Container className="py-16 lg:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">{t.eyebrow}</Eyebrow>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t.lead}</p>
          <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 backdrop-blur">
            <Search className="size-4 text-muted-foreground" />
            <input
              className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
              placeholder={t.quickStart}
              aria-label={t.quickStart}
            />
          </div>
        </header>

        {/* SDKs */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{t.integrationKits}</h2>
            <Link
              href="/handbook"
              className="label-caps inline-flex items-center gap-1.5 text-cyan transition-colors hover:opacity-80"
            >
              {t.viewAllSdks}
              <ArrowRight className="size-3.5 rtl:rotate-180" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.sdks.map((sdk, i) => {
              const Icon = SDK_ICONS[i]
              return (
                <GlassCard key={sdk.name} className="flex flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="grid size-10 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
                      <Icon className="size-5" />
                    </div>
                    <span className="label-caps text-muted-foreground">{sdk.version}</span>
                  </div>
                  <h3 className="font-semibold">{sdk.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{sdk.desc}</p>
                  <code
                    className="mt-4 block rounded-lg border border-border bg-popover px-3 py-2 font-mono text-xs text-foreground/80"
                    dir="ltr"
                  >
                    {sdk.install}
                  </code>
                </GlassCard>
              )
            })}
          </div>
        </section>

        {/* API + Learn + Community */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <GlassCard className="flex flex-col justify-between p-8 lg:col-span-2">
            <div>
              <Boxes className="mb-4 size-7 text-violet" />
              <h2 className="text-2xl font-semibold">{t.apiTitle}</h2>
              <p className="mt-2 max-w-md text-muted-foreground">{t.apiDesc}</p>
            </div>
            <Link
              href="/handbook"
              className="label-caps mt-6 inline-flex w-fit items-center gap-2 text-cyan transition-colors hover:opacity-80"
            >
              {t.apiCta}
              <ArrowRight className="size-3.5 rtl:rotate-180" />
            </Link>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between p-8">
            <div>
              <MessagesSquare className="mb-4 size-7 text-cyan" />
              <h2 className="text-xl font-semibold">{t.communityTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.communityDesc}</p>
            </div>
            <Button className="mt-6 w-fit">{t.communityCta}</Button>
          </GlassCard>
        </section>

        <section className="mt-6">
          <GlassCard className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow className="mb-2">{t.learnEyebrow}</Eyebrow>
              <h2 className="text-2xl font-semibold">{t.learnTitle}</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">{t.learnDesc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/handbook" className={cn(buttonVariants({ size: "lg" }))}>
                <BookOpen className="size-4" />
                {t.learnCta}
              </Link>
              <Button variant="outline" size="lg">
                <PlayCircle className="size-4" />
                {t.videoCta}
              </Button>
            </div>
          </GlassCard>
        </section>
      </Container>
    </div>
  )
}
