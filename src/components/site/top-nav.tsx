"use client";

import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useNavLinks() {
  const { dict } = useI18n();
  return [
    { href: "/handbook", label: dict.nav.docs },
    { href: "/skill-guides", label: dict.nav.skillGuides },
    { href: "/loops", label: dict.nav.loops },
    { href: "/roadmap", label: dict.nav.roadmap },
    { href: "/resources", label: dict.nav.resources },
    { href: "/changelog", label: dict.nav.changelog },
  ];
}

export function TopNav() {
  const { dict, theme, toggleTheme, locale, toggleLocale } = useI18n();
  const pathname = usePathname();
  const links = useNavLinks();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-glass backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-primary"
            onClick={() => setOpen(false)}
          >
            {dict.nav.brand}
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "label-caps transition-colors",
                  isActive(link.href)
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className={"mr-2"}
            onClick={toggleLocale}
            aria-label={dict.nav.toggleLanguage}
            title={dict.nav.toggleLanguage}
          >
            <Globe className="size-4" />
            <span className="label-caps ml-1 ">
              {locale === "en" ? "FA" : "EN"}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={dict.nav.toggleTheme}
            title={dict.nav.toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={dict.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-popover px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive(link.href)
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
