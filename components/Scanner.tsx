"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";
import type { Tier } from "@/content/fiki";

// Ink colours that stay readable on the paper label.
const ink: Record<Tier, string> = {
  low: "text-[#0b7a54] border-[#0b7a54]",
  mid: "text-[#9a5b00] border-[#9a5b00]",
  high: "text-[#c62f35] border-[#c62f35]",
};

// Deterministic fake barcode derived from the AWB number.
function Barcode({ code }: { code: string }) {
  const seed = (code + "73029618459" + code.split("").reverse().join("") + "2864").split("").map(Number);
  let x = 0;
  const bars: { x: number; w: number }[] = [];
  seed.concat(seed.slice().reverse(), seed).forEach((d, i) => {
    const w = 1 + (d % 2) + (d > 7 ? 1 : 0);
    if (i % 2 === 0) bars.push({ x, w });
    x += w + 1 + ((d + i) % 3 === 0 ? 1 : 0);
  });
  return (
    <svg viewBox={`0 0 ${x} 40`} preserveAspectRatio="none" className="h-11 w-full" aria-hidden>
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y="0" width={b.w} height="40" fill="currentColor" />
      ))}
    </svg>
  );
}

export function Scanner() {
  const { t } = useLang();
  const s = t.hero.scanner;
  const [index, setIndex] = useState(0);
  const [scanning, setScanning] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const order = s.orders[index % s.orders.length];
  const c = ink[order.tier];

  const scan = () => {
    if (scanning) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setScanning(true);
    timer.current = setTimeout(
      () => {
        setIndex((i) => i + 1);
        setScanning(false);
      },
      reduced ? 0 : 650,
    );
  };

  return (
    <div>
      <div className={`chamfer relative overflow-hidden bg-paper text-ink ${scanning ? "scanning" : ""}`}>
        <div className="beam pointer-events-none absolute inset-x-0 top-0 h-8 opacity-0" />

        <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3">
          <span className="font-display text-lg font-bold">RamburShield</span>
          <span className="font-mono text-sm">AWB {order.id}</span>
        </div>

        <div className="grid grid-cols-2 border-b border-ink/25">
          <div className="border-r border-ink/25 px-5 py-3">
            <p className="text-xs text-ink/60">{s.fields.to}</p>
            <p className="font-medium">{order.name}</p>
            <p className="text-sm">{order.city}</p>
          </div>
          <div className="px-5 py-3">
            <p className="text-xs text-ink/60">{s.fields.cod}</p>
            <p className="font-display text-2xl font-bold">
              {order.amount} <span className="text-base font-semibold">{s.currency}</span>
            </p>
          </div>
        </div>

        <div className="px-5 pt-4 pb-4">
          <Barcode code={order.id} />
        </div>

        <div aria-live="polite" className={`border-t border-ink/25 px-5 pt-4 pb-5 transition-opacity ${scanning ? "opacity-40" : ""}`}>
          <p className="text-xs text-ink/60">{s.fields.signals}</p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {order.signals.map((sig) => (
              <li key={sig} className="rounded-sm bg-ink/[0.07] px-2 py-0.5 font-mono text-[0.8rem]">
                {sig}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-end justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-ink/60">{s.fields.risk}</p>
              <div className="mt-1 flex items-center gap-3">
                <span className={`font-mono text-2xl font-medium ${c}`}>{order.risk.toFixed(2)}</span>
                <span className="relative h-1.5 flex-1 rounded-full bg-[linear-gradient(90deg,var(--clear),var(--caution),var(--refused))] ">
                  <span
                    className="absolute top-1/2 h-4 w-1 -translate-y-1/2 rounded-sm bg-ink transition-[left] duration-500"
                    style={{ left: `calc(${order.risk * 100}% - 2px)` }}
                  />
                </span>
              </div>
              <p className="mt-3 text-xs text-ink/60">{s.fields.action}</p>
              <p className="font-medium">{order.action}</p>
            </div>
            {!scanning && (
              <span
                key={index}
                className={`stamp shrink-0 rounded-sm border-2 px-2.5 py-1 font-display text-sm font-bold uppercase ${c}`}
              >
                {s.stamps[order.tier]}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          onClick={scan}
          disabled={scanning}
          className="rounded-sm border border-violet px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-violet hover:text-ink disabled:opacity-60"
        >
          {scanning ? s.scanning : s.scan}
        </button>
        <span className="text-sm text-fog">{s.note}</span>
      </div>
    </div>
  );
}
