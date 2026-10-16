"use client";

import { sources, type Milestone } from "@/content/fiki";
import { useLang } from "./LangProvider";
import { LossCalculator } from "./LossCalculator";
import { Nav } from "./Nav";
import { Section, SectionHead, ShieldLogo, riskColor } from "./ui";

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute inset-0" />
      <Section className="relative grid items-center gap-12 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-cyan">{h.badge}</span>
            <span className="text-muted">{t.meta.course}</span>
          </div>
          <h1 className="text-gradient mt-6 text-5xl font-bold tracking-tight sm:text-7xl">{h.title}</h1>
          <p className="caret mt-4 font-mono text-lg text-fg sm:text-xl">{h.tagline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">{h.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#problem" className="rounded-full bg-cyan px-5 py-2.5 text-sm font-medium text-bg transition hover:brightness-110">
              {h.ctaPrimary}
            </a>
            <a href="#solution" className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-fg transition hover:border-cyan/50">
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="card relative overflow-hidden font-mono text-[13px] shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)]">
          <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
            <span className="ml-2 text-xs text-muted">{h.terminal.title}</span>
          </div>
          <div className="space-y-2.5 p-5">
            {h.terminal.lines.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-2">
                <span className="text-muted">{k}</span>
                <span className={k === "risk" ? "text-rose" : k === "action" ? "text-amber" : "text-fg"}>
                  {k === "risk" ? (
                    <span className="flex items-center gap-3">
                      {v}
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                        <span className="block h-full rounded-full bg-gradient-to-r from-mint via-amber to-rose" style={{ width: `${Number(v) * 100}%` }} />
                      </span>
                    </span>
                  ) : (
                    v
                  )}
                </span>
              </div>
            ))}
            <div className="pt-2">
              <span className="rounded border border-rose/40 bg-rose/10 px-2 py-0.5 text-xs text-rose">{h.terminal.level}</span>
            </div>
            <div className="border-t border-line pt-3 text-mint">✓ {h.terminal.ok}</div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Team() {
  const { t } = useLang();
  return (
    <Section id="team">
      <SectionHead kicker={t.team.kicker} title={t.team.title} lead={t.team.lead} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.team.members.map((m) => (
          <article key={m.email} className="card card-hover flex flex-col p-6">
            <div className="flex items-start justify-between">
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} className="h-16 w-16 rounded-2xl object-cover ring-1 ring-line-strong" />
              ) : (
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan/25 to-mint/10 font-mono text-lg text-cyan ring-1 ring-cyan/30">
                  {m.initials}
                </div>
              )}
              {m.owner && (
                <span className="rounded-full border border-mint/40 px-2 py-0.5 font-mono text-[10px] tracking-wider text-mint uppercase">
                  {t.team.ownerLabel}
                </span>
              )}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
            <p className="mt-1 font-mono text-xs text-cyan">{m.role}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{m.focus}</p>
            <a href={`mailto:${m.email}`} className="mt-5 truncate font-mono text-xs text-muted transition-colors hover:text-cyan">
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
    <Section id="problem">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead kicker={p.kicker} title={p.title} lead={p.lead} />
          <ol className="space-y-3">
            {p.losses.map(([title, desc], i) => (
              <li key={title} className="card flex items-center gap-4 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-rose/10 font-mono text-sm text-rose">−{i + 1}</span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:pt-16">
          <LossCalculator />
        </div>
      </div>

      <div className="mt-20">
        <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">{t.size.kicker}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.size.title}</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.size.stats.map(([value, label]) => (
            <div key={value} className="card p-6">
              <p className="text-gradient font-mono text-3xl font-semibold sm:text-4xl">{value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Solution() {
  const { t } = useLang();
  const s = t.solution;
  return (
    <Section id="solution">
      <SectionHead kicker={s.kicker} title={s.title} lead={s.lead} />
      <div className="grid gap-4 md:grid-cols-3">
        {s.tiers.map(([key, title, desc]) => {
          const c = riskColor[key as keyof typeof riskColor];
          return (
            <div key={key} className={`card border-t-2 p-6 ${c.border}`}>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${c.bg}`} />
                <p className={`font-mono text-sm ${c.text}`}>{title}</p>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{desc}</p>
            </div>
          );
        })}
      </div>

      <h3 className="mt-16 font-mono text-xs tracking-[0.2em] text-muted uppercase">{s.flowTitle}</h3>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {s.flow.map(([title, desc], i) => (
          <li key={title} className="card relative p-5">
            <span className="font-mono text-xs text-cyan">0{i + 1}</span>
            <p className="mt-2 font-medium">{title}</p>
            <p className="mt-1 text-sm text-muted">{desc}</p>
            {i < s.flow.length - 1 && (
              <span className="absolute top-1/2 -right-2.5 hidden h-px w-2 bg-cyan/50 lg:block" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Market() {
  const { t } = useLang();
  return (
    <Section id="market">
      <SectionHead kicker={t.market.kicker} title={t.market.title} />
      <div className="grid gap-4 md:grid-cols-3">
        {t.market.segments.map(([tag, title, desc]) => (
          <div key={tag} className="card card-hover p-6">
            <span className="font-mono text-xs text-mint">{tag}</span>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Competition() {
  const { t } = useLang();
  const c = t.competition;
  return (
    <Section id="competition">
      <SectionHead kicker={c.kicker} title={c.title} />
      <div className="card hidden overflow-hidden md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-line font-mono text-xs tracking-wider text-muted uppercase">
            <tr>
              {c.headers.map((h) => (
                <th key={h} className="px-5 py-4 font-normal">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.items.map((it) => (
              <tr key={it.name} className="border-b border-line align-top last:border-0">
                <td className="w-1/4 px-5 py-4">
                  <p className="font-medium">
                    {it.url ? (
                      <a href={it.url} target="_blank" rel="noreferrer" className="hover:text-cyan">
                        {it.name} ↗
                      </a>
                    ) : (
                      it.name
                    )}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">{it.kind}</p>
                </td>
                <td className="px-5 py-4 text-muted">{it.what}</td>
                <td className="px-5 py-4 text-rose/90">{it.gap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 md:hidden">
        {c.items.map((it) => (
          <div key={it.name} className="card p-5">
            <p className="font-medium">{it.name}</p>
            <p className="font-mono text-xs text-muted">{it.kind}</p>
            <p className="mt-3 text-sm text-muted">{it.what}</p>
            <p className="mt-2 text-sm text-rose/90">{it.gap}</p>
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
    <Section>
      <SectionHead kicker={a.kicker} title={a.title} />
      <blockquote className="card relative overflow-hidden border-cyan/30 p-8 sm:p-10">
        <div className="glow pointer-events-none absolute inset-0 opacity-70" />
        <ShieldLogo className="relative h-10 w-10" />
        <p className="relative mt-5 max-w-3xl text-xl leading-snug font-medium text-balance sm:text-2xl">“{a.quote}”</p>
      </blockquote>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {a.points.map(([title, desc]) => (
          <div key={title} className="card p-6">
            <h3 className="font-semibold text-cyan">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
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
    <Section id="business">
      <SectionHead kicker={metrics.kicker} title={metrics.title} />
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.groups.map(([title, items]) => (
          <div key={title} className="card p-6">
            <h3 className="font-mono text-xs tracking-wider text-mint uppercase">{title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {items.map((i) => (
                <li key={i} className="flex gap-2 text-muted">
                  <span className="text-cyan">›</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHead kicker={costs.kicker} title={costs.title} />
          <ul className="card divide-y divide-line">
            {costs.items.map(([title, desc]) => (
              <li key={title} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="font-medium">{title}</span>
                <span className="text-sm text-muted sm:text-right">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead kicker={revenue.kicker} title={revenue.title} lead={revenue.draft} />
          <div className="grid gap-3 sm:grid-cols-3">
            {revenue.plans.map(([name, price, per, desc], i) => (
              <div key={name} className={`card p-5 ${i === 1 ? "border-cyan/50 shadow-[0_0_40px_-15px_rgba(34,211,238,0.5)]" : ""}`}>
                <p className="font-mono text-xs text-muted uppercase">{name}</p>
                <p className="mt-3 font-mono text-2xl font-semibold">
                  {price}
                  <span className="text-sm font-normal text-muted">{per}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {revenue.extras.map((e) => (
              <li key={e} className="flex gap-2">
                <span className="text-mint">+</span>
                {e}
              </li>
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
    <Section>
      <div className="card relative overflow-hidden border-dashed border-line-strong p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">{v.kicker}</p>
          <span className="flex items-center gap-2 rounded-full border border-amber/40 px-2.5 py-0.5 font-mono text-[10px] text-amber uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
            {v.pending}
          </span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{v.title}</h2>
        <p className="mt-3 max-w-2xl text-muted">{v.lead}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {v.targets.map(([value, label]) => (
            <div key={label} className="rounded-xl border border-line p-5">
              <p className="font-mono text-3xl text-muted">{value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function MilestoneDot({ status }: { status: Milestone["status"] }) {
  if (status === "done") return <span className="h-3 w-3 rounded-full bg-mint" />;
  if (status === "current")
    return (
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
        <span className="relative h-3 w-3 rounded-full bg-cyan" />
      </span>
    );
  return <span className="h-3 w-3 rounded-full border border-line-strong bg-bg" />;
}

function Milestones() {
  const { t } = useLang();
  const m = t.milestones;
  return (
    <Section id="milestones">
      <SectionHead kicker={m.kicker} title={m.title} />
      <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
        {m.items.map((it) => (
          <li
            key={it.id}
            className={`card p-4 ${it.status === "current" ? "border-cyan/50" : ""} ${it.status === "upcoming" ? "opacity-60" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-semibold">{it.id}</span>
              <MilestoneDot status={it.status} />
            </div>
            <p className="mt-2 font-mono text-[11px] text-muted">{it.week}</p>
            <p className="mt-2 text-sm leading-snug">{it.title}</p>
            {it.highlight && <p className="mt-2 font-mono text-[11px] text-amber">★ {it.highlight}</p>}
            <p className="mt-3 font-mono text-[10px] tracking-wider text-muted uppercase">{m.labels[it.status]}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{t.footer.sources}</p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-cyan">
                ↗ {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <ShieldLogo className="h-4 w-4" /> RamburShield · {t.meta.fikiLabel}
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
