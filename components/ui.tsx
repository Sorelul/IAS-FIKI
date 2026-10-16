export function ShieldLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="sg" x1="4" y1="2" x2="28" y2="30">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path d="M16 2.5 4.5 7v8.2c0 7 4.9 12.4 11.5 14.3 6.6-1.9 11.5-7.3 11.5-14.3V7L16 2.5Z" stroke="url(#sg)" strokeWidth="2" />
      <path d="m10.5 16 3.8 3.8 7.2-7.6" stroke="url(#sg)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SectionHead({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{lead}</p>}
    </div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export const riskColor = {
  low: { text: "text-mint", bg: "bg-mint", border: "border-mint/40" },
  mid: { text: "text-amber", bg: "bg-amber", border: "border-amber/40" },
  high: { text: "text-rose", bg: "bg-rose", border: "border-rose/40" },
} as const;
