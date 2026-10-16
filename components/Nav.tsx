"use client";

import { useState } from "react";
import { useLang } from "./LangProvider";
import { ShieldLogo } from "./ui";
import type { Lang } from "@/content/fiki";

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language" className="flex rounded-sm border border-rule p-0.5 text-xs">
      {(["ro", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-sm px-3 py-1 uppercase transition-colors ${
            lang === l ? "bg-violet text-ink" : "text-fog hover:text-paper"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ink/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <ShieldLogo />
          <span className="font-display text-lg">RamburShield</span>
          <span className="hidden text-sm text-fog sm:inline">Fiki</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-fog lg:flex">
          {t.nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-paper">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            className="rounded-sm border border-rule p-2 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-rule px-4 py-3 lg:hidden">
          {t.nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 text-fog hover:text-paper">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
