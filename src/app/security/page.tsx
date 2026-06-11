"use client"

import {
  ArrowRight,
  BadgeCheck,
  Cpu,
  FileText,
  KeyRound,
  Lock,
  Network,
  ShieldCheck,
} from "lucide-react"
import { useI18n } from "@/components/providers"
import { DocShell } from "@/components/site/doc-shell"
import { Chip, GlassCard } from "@/components/site/primitives"
import { Button } from "@/components/ui/button"

const LAYER_ICONS = [Cpu, Network, Lock]

export default function SecurityPage() {
  const { dict } = useI18n()
  const t = dict.security

  return (
    <DocShell
      title={t.sidebarTitle}
      version={t.sidebarVersion}
      items={t.sidebarItems.map((i) => ({
        ...i,
        href: i.id === "intro" ? "/security" : "/security",
      }))}
    >
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
          <BadgeCheck className="size-3.5" />
          <span className="label-caps">{t.badge}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.lead}</p>
        <div className="mt-6">
          <Button variant="outline" size="lg">
            <ShieldCheck className="size-4" />
            {t.auditCta}
          </Button>
        </div>

        {/* Sandbox isolation */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">{t.sandboxTitle}</h2>
          <p className="mt-2 text-muted-foreground">{t.sandboxSub}</p>
          <div className="mt-6 flex flex-col gap-4">
            {t.layers.map((layer, i) => {
              const Icon = LAYER_ICONS[i]
              return (
                <GlassCard key={layer.num} className="flex items-center gap-5 p-6">
                  <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="label-caps text-muted-foreground">{layer.num}</span>
                      <h3 className="font-semibold">{layer.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{layer.desc}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </section>

        {/* Encryption */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">{t.encryptionTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.encryption.map((item, i) => (
              <GlassCard key={item.name} className="p-6">
                {i === 0 ? (
                  <KeyRound className="mb-3 size-5 text-violet" />
                ) : (
                  <Lock className="mb-3 size-5 text-violet" />
                )}
                <div className="font-mono text-lg font-semibold">{item.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <GlassCard className="mt-10 flex flex-wrap items-center justify-between gap-4 p-6">
          <div className="flex items-center gap-3">
            <FileText className="size-5 text-cyan" />
            <span className="font-medium">{t.whitepaperCta}</span>
          </div>
          <Chip>
            {t.whitepaperCta}
            <ArrowRight className="size-3.5 rtl:rotate-180" />
          </Chip>
        </GlassCard>
      </div>
    </DocShell>
  )
}
