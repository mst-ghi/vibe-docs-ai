"use client"

import {
  ChevronDown,
  Database,
  FileText,
  MessagesSquare,
  Send,
  Settings2,
  Sparkles,
} from "lucide-react"
import { useState } from "react"
import { useI18n } from "@/components/providers"
import { Container, GlassCard } from "@/components/site/primitives"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CATEGORY_ICONS = [Settings2, Database]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-start"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  )
}

export default function SupportPage() {
  const { dict } = useI18n()
  const t = dict.support

  return (
    <Container className="py-16 lg:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.lead}</p>
        <form
          className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-border bg-card/60 p-2 backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <Sparkles className="ms-2 size-4 text-cyan" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder={t.askPlaceholder}
            aria-label={t.askPlaceholder}
          />
          <Button type="submit" size="sm">
            <Send className="size-3.5" />
            {t.askCta}
          </Button>
        </form>
      </header>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6">
        {t.categories.map((category, i) => {
          const Icon = CATEGORY_ICONS[i]
          return (
            <GlassCard key={category.name} className="p-7">
              <div className="mb-2 flex items-center gap-3">
                <Icon className="size-5 text-cyan" />
                <h2 className="text-lg font-semibold">{category.name}</h2>
              </div>
              <div>
                {category.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </GlassCard>
          )
        })}
      </div>

      <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2">
        <GlassCard className="flex flex-col justify-between p-7">
          <div>
            <FileText className="mb-3 size-6 text-violet" />
            <h3 className="font-semibold">{t.whitepaperTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.whitepaperDesc}</p>
          </div>
          <Button variant="link" className="mt-4 w-fit px-0">
            {t.whitepaperCta} →
          </Button>
        </GlassCard>
        <GlassCard className="flex flex-col justify-between p-7">
          <div>
            <MessagesSquare className="mb-3 size-6 text-cyan" />
            <h3 className="font-semibold">{t.discordTitle}</h3>
          </div>
          <Button className="mt-4 w-fit">{t.discordCta}</Button>
        </GlassCard>
      </div>
    </Container>
  )
}
