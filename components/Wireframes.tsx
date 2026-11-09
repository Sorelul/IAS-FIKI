// M3: wireframes and landing page. Renders content.wireframes from content/fiki.ts.
// Usage in the page, after the interviews section:
//   <Wireframes c={t.wireframes} landingUrl={landingPageUrl} />
import type { Content } from "@/content/fiki";

type Props = { c: Content["wireframes"]; landingUrl: string };

export function Wireframes({ c, landingUrl }: Props) {
  return (
    <section id="wireframes" className="scroll-mt-24 py-24">
      <span className="inline-block rounded border border-violet-300 px-3 py-1 text-sm text-violet-700">
        {c.badge}
      </span>
      <h2 className="mt-6 text-5xl font-bold tracking-tight">{c.title}</h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed">{c.lead}</p>

      {landingUrl && (
        <a
          href={landingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center border-b border-violet-400 text-lg"
        >
          {c.landingLabel} ↗
        </a>
      )}

      <h3 className="mt-16 text-2xl font-semibold">{c.flow.title}</h3>
      <p className="mt-4 max-w-3xl leading-relaxed">{c.flow.text}</p>
      <div className="mt-6 overflow-x-auto border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.flow.image} alt={c.flow.alt} className="h-auto min-w-[720px] w-full" />
      </div>

      <h3 className="mt-16 text-2xl font-semibold">{c.screensTitle}</h3>
      <div className="mt-6 grid gap-12">
        {c.screens.map((s, i) => (
          <figure key={s.image} className="grid gap-4">
            <a href={s.image} target="_blank" rel="noopener noreferrer" className="block border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={s.alt} className="h-auto w-full" loading="lazy" />
            </a>
            <figcaption className="max-w-3xl">
              <span className="font-semibold">
                {i + 1}. {s.title}
              </span>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <h3 className="mt-16 text-2xl font-semibold">{c.decisionsTitle}</h3>
      <div className="mt-6 grid gap-6 max-w-3xl">
        {c.decisions.map(([title, text]) => (
          <div key={title}>
            <p className="font-semibold">{title}</p>
            <p className="mt-2 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
