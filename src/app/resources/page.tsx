"use client"

import { ArrowRight, BookOpen, ExternalLink, Newspaper, Users, Wrench } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/providers"
import { Reveal, SpotlightCard } from "@/components/site/motion"
import { Container, Eyebrow } from "@/components/site/primitives"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const GROUP_ICONS = [BookOpen, Users, Wrench]

export default function ResourcesPage() {
  const { dict } = useI18n()
  const t = dict.resources

  return (
    <>
      {/* Hero */}
      <section className="vibe-backdrop grain relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-cyan">
              <Newspaper className="size-3.5" />
              <span className="label-caps">{t.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{t.lead}</p>
          </div>
        </Container>
      </section>

      {/* Link groups */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="flex flex-col gap-12">
            {t.groups.map((group, gi) => {
              const Icon = GROUP_ICONS[gi] ?? BookOpen
              return (
                <Reveal key={group.name}>
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan">
                        <Icon className="size-4" />
                      </div>
                      <h2 className="text-lg font-semibold">{group.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {group.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <SpotlightCard className="flex h-full items-start gap-3 p-5">
                            <div className="min-w-0 flex-1">
                              <h3 className="flex items-center gap-1.5 font-semibold">
                                {link.label}
                                <ExternalLink className="size-3.5 text-muted-foreground transition-colors group-hover:text-cyan" />
                              </h3>
                              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
                            </div>
                          </SpotlightCard>
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="mt-12">
            <p className="border-s-2 border-violet/40 ps-4 text-sm text-muted-foreground text-pretty">
              {t.note}
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/toolbox" className={cn(buttonVariants({ size: "lg" }), "neon-glow px-6")}>
              <Wrench className="size-4" />
              {t.ctaPrimary}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href="/handbook"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
            >
              <BookOpen className="size-4" />
              {t.ctaSecondary}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
