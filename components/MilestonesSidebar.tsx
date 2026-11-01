"use client";

import { useEffect, useState } from "react";
import type { Milestone } from "@/content/fiki";
import { useLang } from "./LangProvider";

const statusBorder: Record<Milestone["status"], string> = {
  done: "border-clear",
  current: "border-violet",
  upcoming: "border-rule",
};

const statusText: Record<Milestone["status"], string> = {
  done: "text-clear",
  current: "text-violet",
  upcoming: "text-fog",
};

const railBase = "block w-full border-l-2 py-2.5 text-center font-display text-xs font-bold whitespace-nowrap";

export function MilestonesSidebar() {
  const { t } = useLang();
  const m = t.milestones;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // On narrow screens the open panel covers the page, so get it out of the way after jumping.
  const onJump = () => {
    if (!window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
  };

  return (
    <aside
      id="milestones"
      aria-label={m.title}
      className={`fixed top-16 bottom-0 left-0 z-40 flex flex-col border-r border-rule bg-ink/95 backdrop-blur-xl transition-[width] duration-200 ${
        open ? "w-72 shadow-[8px_0_32px_rgba(0,0,0,0.4)]" : "w-14"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="milestones-list"
        aria-label={open ? m.collapse : m.expand}
        className="flex h-12 shrink-0 items-center gap-3 border-b border-rule px-[1.1rem] text-fog transition-colors hover:text-paper"
      >
        <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M7 4l6 6-6 6" />
        </svg>
        {open && <span className="font-display font-semibold whitespace-nowrap text-paper">{m.title}</span>}
      </button>

      <ol id="milestones-list" className="flex-1 overflow-y-auto overflow-x-hidden py-2">
        {m.items.map((it) =>
          open ? (
            <li key={it.id}>
              <Expanded it={it} label={it.status !== "upcoming" ? m.labels[it.status] : undefined} onJump={onJump} />
            </li>
          ) : (
            <li key={it.id}>
              {it.target ? (
                <a href={`#${it.target}`} title={it.title} className={`${railBase} ${statusBorder[it.status]} ${statusText[it.status]} transition-colors hover:bg-slate`}>
                  {it.id}
                </a>
              ) : (
                <span className={`${railBase} ${statusBorder[it.status]} ${statusText[it.status]}`}>{it.id}</span>
              )}
            </li>
          ),
        )}
      </ol>
    </aside>
  );
}

function Expanded({ it, label, onJump }: { it: Milestone; label?: string; onJump: () => void }) {
  const body = (
    <>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-lg font-bold">{it.id}</span>
        {label && <span className={`text-xs ${statusText[it.status]}`}>{label}</span>}
      </div>
      <p className="font-mono text-xs text-fog">{it.week}</p>
      {it.title !== "—" && <p className="mt-1.5 text-sm leading-snug">{it.title}</p>}
      {it.highlight && <p className="mt-1.5 text-sm text-caution">{it.highlight}</p>}
    </>
  );
  const base = `block border-l-2 px-4 py-3 ${statusBorder[it.status]} ${it.status === "upcoming" ? "text-fog" : ""}`;
  return it.target ? (
    <a href={`#${it.target}`} onClick={onJump} className={`${base} transition-colors hover:bg-slate`}>
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  );
}
