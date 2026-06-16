"use client"

import { ArrowRight, BookOpen, ChevronDown, HelpCircle, Wrench } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useI18n } from "@/components/providers"
import { Reveal } from "@/components/site/motion"
import { Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <HelpCircle className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </Container>
      </section>

      {/* FAQ categories */}
      <section className="border-t border-border py-16">
        <Container className="mx-auto max-w-4xl">
          <div className="grid gap-6">
            {t.categories.map((category) => (
              <Reveal key={category.name}>
                <div className="glass-card rounded-xl p-7">
                  <div className="mb-2 flex items-center gap-3">
                    <Eyebrow>{category.name}</Eyebrow>
                  </div>
                  <div>
                    {category.faqs.map((faq) => (
                      <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Closer */}
          <Reveal className="mt-10">
            <div className="glass-card flex flex-col items-start gap-5 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{t.ctaTitle}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t.ctaBody}</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/handbook" className={cn(buttonVariants({ size: "lg" }), "px-6")}>
                  <BookOpen className="size-4" />
                  {t.ctaPrimary}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
                <Link
                  href="/toolbox"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
                >
                  <Wrench className="size-4" />
                  {t.ctaSecondary}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
