"use client";

// Milestone 3: wireframes + link to the landing page. Copy lives in content/fiki.ts (t.wireframes),
// images in public/wireframes/.
import { landingPageUrl } from "@/content/fiki";
import { useLang } from "./LangProvider";
import { Heading, Section } from "./ui";

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <a href={src} target="_blank" rel="noreferrer" className={`block overflow-hidden rounded-sm border border-rule bg-white ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
    </a>
  );
}

export function Wireframes() {
  const { t } = useLang();
  const w = t.wireframes;
  return (
    <Section id="wireframes" className="border-t border-rule">
      <span className="mb-6 inline-block rounded-sm border border-violet/60 px-2.5 py-1 text-sm text-violet">{w.badge}</span>
      <Heading title={w.title} lead={w.lead} />
      {landingPageUrl && (
        <a
          href={landingPageUrl}
          target="_blank"
          rel="noreferrer"
          className="-mt-4 mb-12 inline-block rounded-sm bg-violet px-5 py-2.5 font-medium text-ink transition hover:brightness-110"
        >
          {w.landingLabel} ↗
        </a>
      )}

      <div className="border-t border-rule py-10">
        <h3 className="font-display text-xl font-semibold">{w.flow.title}</h3>
        <p className="mt-4 max-w-[44rem] text-pretty text-fog">{w.flow.text}</p>
        <div className="mt-8 overflow-x-auto">
          <Shot src={w.flow.image} alt={w.flow.alt} className="min-w-[44rem]" />
        </div>
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold">{w.screensTitle}</h3>
      <div className="mt-6">
      {w.screens.map((s, i) => (
        <div key={s.image} className="grid gap-4 border-t border-rule py-10 md:grid-cols-[14rem_1fr] md:gap-8">
          <div>
            <h4 className="font-display text-xl font-semibold text-balance">
              <span className="mb-1 block font-mono text-sm text-violet">{i + 1}</span>
              {s.title}
            </h4>
            <p className="mt-3 text-[0.95rem] text-pretty text-fog">{s.text}</p>
          </div>
          <Shot src={s.image} alt={s.alt} className={s.image.endsWith("avans.png") ? "max-w-[20rem]" : ""} />
        </div>
      ))}
      </div>

      <div className="mt-6 border-t border-rule pt-10">
        <h3 className="font-display text-2xl font-semibold">{w.decisionsTitle}</h3>
        <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {w.decisions.map(([title, text]) => (
            <div key={title}>
              <p className="font-display text-xl font-semibold">{title}</p>
              <p className="mt-2 text-fog">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
