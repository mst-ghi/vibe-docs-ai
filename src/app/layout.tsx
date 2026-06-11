import type { Metadata } from "next"
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
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

export const metadata: Metadata = {
  title: {
    default: "VibeDocs AI — The Internet-Scale Documentation Protocol",
    template: "%s — VibeDocs AI",
  },
  description:
    "VibeDocs AI turns complex systems into fluid, visual, agentic documentation. The handbook for high-performance Vibe Coding.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <head>
        {/* Applies persisted theme/locale before paint to avoid a flash. */}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: required for the pre-paint theme script */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
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
