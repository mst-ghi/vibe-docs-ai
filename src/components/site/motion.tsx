"use client"

import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Reveal-on-scroll, the cross-browser workhorse (works in Firefox, unlike
 * scroll-timeline). Starts hidden via the `.reveal` class, then toggles
 * `.is-in` once when the element enters the viewport. The text still ships in
 * the HTML; a <noscript> fallback in <head> forces it visible when JS is off,
 * and `prefers-reduced-motion` neutralizes the motion in globals.css.
 */
export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return [ref, inView] as const
}

/** Wraps children in a scroll-reveal. `delay` staggers siblings (ms). */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}) {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-in", className)}
      style={delay ? { ["--reveal-delay" as string]: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

/**
 * Glass card with a pointer-tracking spotlight. The gradient lives in CSS
 * (`.spotlight`); this only writes the `--x`/`--y` custom properties.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
  }
  return (
    <div
      onPointerMove={onMove}
      className={cn("glass-card spotlight relative overflow-hidden rounded-xl", className)}
    >
      {children}
    </div>
  )
}
