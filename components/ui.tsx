import type { Tier } from "@/content/fiki";

export function ShieldLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M16 2.5 4.5 7v8.2c0 7 4.9 12.4 11.5 14.3 6.6-1.9 11.5-7.3 11.5-14.3V7L16 2.5Z" stroke="var(--violet)" strokeWidth="2" />
      <path d="m10.5 16 3.8 3.8 7.2-7.6" stroke="var(--clear)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Heading({ title, lead, id }: { title: string; lead?: string; id?: string }) {
  return (
    <div className="mb-10 max-w-[38rem]">
      <h2 id={id} className="font-display text-[2rem] leading-[1.1] font-semibold text-balance sm:text-[2.6rem]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-pretty text-fog">{lead}</p>}
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

export const tierColor: Record<Tier, { text: string; bg: string; border: string }> = {
  low: { text: "text-clear", bg: "bg-clear", border: "border-clear" },
  mid: { text: "text-caution", bg: "bg-caution", border: "border-caution" },
  high: { text: "text-refused", bg: "bg-refused", border: "border-refused" },
};
