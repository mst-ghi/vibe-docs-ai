import type { Metadata } from "next"
import { Hanken_Grotesk, JetBrains_Mono, Vazirmatn } from "next/font/google"
import { noFlashScript, Providers } from "@/components/providers"
import { Footer } from "@/components/site/footer"
import { TopNav } from "@/components/site/top-nav"
import "./globals.css"

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
})

// Persian / Arabic glyphs. Used for `fa`; also a per-glyph fallback so any
// Persian inside English layouts still renders correctly.
const persian = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Vibe Coding — A Field Guide to Coding with AI Agents",
    template: "%s — Vibe Coding Field Guide",
  },
  description:
    "Field notes on coding with AI agents: the editors and models worth using, the system tools that make them capable, and the day-to-day tricks that actually hold up. Bilingual — English & فارسی.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${persian.variable}`}
    >
      <head>
        {/* Applies persisted theme/locale before paint to avoid a flash. */}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: required for the pre-paint theme script */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        {/* If JS is off, reveal-on-scroll content must still be visible. */}
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
