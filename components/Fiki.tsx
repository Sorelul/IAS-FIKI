"use client";

import { sources, type Milestone, type Tier } from "@/content/fiki";
import { useLang } from "./LangProvider";
import { LossCalculator } from "./LossCalculator";
import { Nav } from "./Nav";
import { Scanner } from "./Scanner";
import { Heading, Section, ShieldLogo, tierColor } from "./ui";

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <div id="top" className="border-b border-rule">
      <Section className="grid items-center gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <span className="inline-block rounded-sm border border-violet/60 px-2.5 py-1 text-sm text-violet">{h.badge}</span>
          <h1 className="mt-6 font-display text-[3.4rem] leading-[0.95] font-bold tracking-tight sm:text-[5.5rem]">{h.title}</h1>
          <p className="mt-5 font-display text-2xl leading-snug font-medium text-paper sm:text-[1.9rem]">{h.tagline}</p>
          <p className="mt-6 max-w-[36rem] text-pretty text-fog">{h.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#problem" className="rounded-sm bg-violet px-5 py-2.5 font-medium text-ink transition hover:brightness-110">
              {h.ctaPrimary}
            </a>
            <a href="#solution" className="text-paper underline decoration-violet/60 underline-offset-4 hover:decoration-violet">
              {h.ctaSecondary}
            </a>
          </div>
        </div>
        <Scanner />
      </Section>
    </div>
  );
}

function Team() {
  const { t } = useLang();
  return (
    <Section id="team">
      <Heading title={t.team.title} lead={t.team.lead} />
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {t.team.members.map((m) => (
          <article key={m.email}>
            <div className="chamfer relative aspect-[4/3] bg-slate">
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-[center_30%]" />
              ) : (
                <span className="absolute bottom-2 left-3 font-display text-4xl sm:bottom-3 sm:left-4 sm:text-6xl font-bold text-violet/80">{m.initials}</span>
              )}
              {m.owner && (
                <span className="absolute top-3 right-3 rounded-sm bg-clear px-2 py-0.5 text-xs font-semibold text-ink">{t.team.ownerLabel}</span>
              )}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold sm:text-xl">{m.name}</h3>
            <p className="text-sm font-medium text-violet">{m.role}</p>
            <p className="mt-2 text-[0.95rem] text-fog">{m.focus}</p>
            <a href={`mailto:${m.email}`} className="mt-3 block text-xs break-all text-paper/80 sm:text-sm underline decoration-rule underline-offset-4 hover:decoration-violet">
              {m.email}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Problem() {
  const { t } = useLang();
  const p = t.problem;
  return (
    <Section id="problem" className="border-t border-rule">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Heading title={p.title} lead={p.lead} />
          <ol className="space-y-1">
            {p.losses.map(([title, desc], i) => (
              <li key={title}>
                {i > 0 && <span className="block font-display text-2xl text-refused/70" aria-hidden>+</span>}
                <p className="font-display text-2xl font-semibold">{title}</p>
                <p className="text-fog">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:pt-2">
          <LossCalculator />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">{t.size.title}</h3>
        <dl className="mt-8 grid gap-8 md:grid-cols-3 md:gap-0">
          {t.size.stats.map(([value, label]) => (
            <div key={value} className="border-l-2 border-violet/60 pl-5 md:pr-6">
              <dt className="font-display text-4xl font-bold">{value}</dt>
              <dd className="mt-2 text-[0.95rem] text-fog">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

const zones: { tier: Tier; from: number; to: number }[] = [
  { tier: "low", from: 0, to: 0.3 },
  { tier: "mid", from: 0.3, to: 0.7 },
  { tier: "high", from: 0.7, to: 1 },
];

function Solution() {
  const { t } = useLang();
  const s = t.solution;
  return (
    <Section id="solution" className="border-t border-rule">
      <Heading title={s.title} lead={s.lead} />

      <div className="grid gap-6 md:grid-cols-[3fr_4fr_3fr] md:gap-0">
        {s.tiers.map(([key, title, desc], i) => {
          const c = tierColor[key as Tier];
          const z = zones[i];
          return (
            <div key={key} className={`border-l-4 pl-4 md:border-l-0 md:pl-0 ${c.border}`}>
              <div className={`hidden h-2 md:block ${c.bg} ${i === 0 ? "rounded-l-sm" : ""} ${i === 2 ? "rounded-r-sm" : ""}`} />
              <p className="hidden pt-1.5 font-mono text-xs text-fog md:block">{z.from.toFixed(1)}</p>
              <div className="md:pt-4 md:pr-6">
                <p className={`font-display text-xl font-semibold ${c.text}`}>{title}</p>
                <p className="mt-1.5 text-[0.95rem] text-fog">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="mt-20 font-display text-2xl font-semibold">{s.flowTitle}</h3>
      <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {s.flow.map(([title, desc], i) => (
          <li key={title} className="border-t border-rule pt-4 lg:pr-5">
            <span className="font-mono text-sm text-violet">{i + 1}</span>
            <p className="mt-1 font-semibold">{title}</p>
            <p className="mt-1 text-[0.95rem] text-fog">{desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Market() {
  const { t } = useLang();
  return (
    <Section id="market" className="border-t border-rule">
      <Heading title={t.market.title} />
      <dl>
        {t.market.segments.map(([tag, title, desc]) => (
          <div key={tag} className="grid gap-2 border-t border-rule py-6 md:grid-cols-[14rem_1fr] md:gap-8">
            <dt className="text-sm text-violet">{tag}</dt>
            <dd>
              <p className="font-display text-xl font-semibold">{title}</p>
              <p className="mt-1.5 max-w-[42rem] text-fog">{desc}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Competition() {
  const { t } = useLang();
  const c = t.competition;
  return (
    <Section id="competition" className="border-t border-rule">
      <Heading title={c.title} />
      <table className="hidden w-full text-left md:table">
        <thead className="text-sm text-fog">
          <tr>
            {c.headers.map((h) => (
              <th key={h} className="pb-3 font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.items.map((it) => (
            <tr key={it.name} className="border-t border-rule align-top">
              <td className="w-[26%] py-5 pr-6">
                {it.url ? (
                  <a href={it.url} target="_blank" rel="noreferrer" className="font-semibold underline decoration-rule underline-offset-4 hover:decoration-violet">
                    {it.name}
                  </a>
                ) : (
                  <p className="font-semibold">{it.name}</p>
                )}
                <p className="mt-1 text-sm text-fog">{it.kind}</p>
              </td>
              <td className="py-5 pr-6 text-[0.95rem] text-fog">{it.what}</td>
              <td className="py-5 text-[0.95rem]">{it.gap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md:hidden">
        {c.items.map((it) => (
          <div key={it.name} className="border-t border-rule py-5">
            <p className="font-semibold">{it.name}</p>
            <p className="text-sm text-fog">{it.kind}</p>
            <p className="mt-3 text-[0.95rem] text-fog">{it.what}</p>
            <p className="mt-2 text-[0.95rem]">{it.gap}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Advantage() {
  const { t } = useLang();
  const a = t.advantage;
  return (
    <Section className="border-t border-rule">
      <Heading title={a.title} />
      <blockquote className="max-w-[48rem] border-l-4 border-violet pl-6 font-display text-2xl leading-snug font-medium text-balance sm:text-[2rem]">
        „{a.quote}”
      </blockquote>
      <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {a.points.map(([title, desc]) => (
          <div key={title}>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-fog">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Business() {
  const { t } = useLang();
  const { metrics, costs, revenue } = t;
  return (
    <Section id="business" className="border-t border-rule">
      <Heading title={metrics.title} />
      <div className="grid gap-10 md:grid-cols-3">
        {metrics.groups.map(([title, items]) => (
          <div key={title}>
            <h3 className="border-b border-rule pb-2 font-display text-lg font-semibold">{title}</h3>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-fog">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-24 grid gap-16 lg:grid-cols-2">
        <div>
          <Heading title={costs.title} />
          <dl>
            {costs.items.map(([title, desc]) => (
              <div key={title} className="grid gap-1 border-t border-rule py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-semibold">{title}</dt>
                <dd className="text-fog">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <Heading title={revenue.title} lead={revenue.draft} />
          <div className="grid gap-px overflow-hidden rounded-sm bg-rule sm:grid-cols-3">
            {revenue.plans.map(([name, price, per, desc], i) => (
              <div key={name} className={`bg-ink p-5 ${i === 1 ? "shadow-[inset_0_3px_0_var(--violet)]" : ""}`}>
                <p className="text-sm text-fog">{name}</p>
                <p className="mt-2 font-display text-[1.75rem] leading-tight font-bold">
                  {price}
                  <span className="text-base font-medium text-fog">{per}</span>
                </p>
                <p className="mt-2 text-sm text-fog">{desc}</p>
              </div>
            ))}
          </div>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 text-[0.95rem] text-fog marker:text-violet">
            {revenue.extras.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Validation() {
  const { t } = useLang();
  const v = t.validation;
  return (
    <Section className="border-t border-rule">
      <div className="rounded-sm border border-dashed border-caution/50 p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-caution">{v.badge}</span>
          <span className="rounded-sm bg-caution/15 px-2 py-0.5 text-caution">{v.pending}</span>
        </div>
        <h2 className="mt-3 font-display text-3xl font-semibold">{v.title}</h2>
        <p className="mt-3 max-w-[40rem] text-fog">{v.lead}</p>
        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          {v.targets.map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-4xl text-fog/60">{value}</dt>
              <dd className="mt-1 text-[0.95rem] text-fog">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

const milestoneBorder: Record<Milestone["status"], string> = {
  done: "border-clear",
  current: "border-violet",
  upcoming: "border-rule",
};

function Milestones() {
  const { t } = useLang();
  const m = t.milestones;
  return (
    <Section id="milestones" className="border-t border-rule">
      <Heading title={m.title} />
      <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-9 lg:gap-x-0">
        {m.items.map((it) => (
          <li key={it.id} className={`border-t-2 pt-3 lg:pr-3 ${milestoneBorder[it.status]} ${it.status === "upcoming" ? "text-fog" : ""}`}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-display text-lg font-bold">{it.id}</span>
              {it.status !== "upcoming" && (
                <span className={`text-xs ${it.status === "done" ? "text-clear" : "text-violet"}`}>{m.labels[it.status]}</span>
              )}
            </div>
            <p className="font-mono text-xs text-fog">{it.week}</p>
            {it.title !== "—" && <p className="mt-2 text-sm leading-snug">{it.title}</p>}
            {it.highlight && <p className="mt-2 text-sm text-caution">{it.highlight}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-rule bg-slate/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-lg font-semibold">{t.footer.sources}</h2>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer" className="text-fog underline decoration-rule underline-offset-4 hover:text-paper hover:decoration-violet">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 border-t border-rule pt-6 text-sm text-fog sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <ShieldLogo className="h-4 w-4" /> RamburShield, {t.meta.course}
          </span>
          <span>{t.footer.note}</span>
        </div>
      </div>
    </footer>
  );
}

export function Fiki() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Team />
        <Problem />
        <Solution />
        <Market />
        <Competition />
        <Advantage />
        <Business />
        <Validation />
        <Milestones />
      </main>
      <Footer />
    </>
  );
}
