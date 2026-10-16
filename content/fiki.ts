// Single source of truth for all Fiki copy. Add new milestones here; components only render.

export type Lang = "ro" | "en";

export type Member = {
  name: string;
  initials: string;
  email: string;
  role: string;
  focus: string;
  owner?: boolean;
  photo?: string;
};

export type Milestone = {
  id: string;
  week: string;
  title: string;
  status: "done" | "current" | "upcoming";
  highlight?: string;
};

export type Competitor = {
  name: string;
  kind: string;
  what: string;
  gap: string;
  url?: string;
};

export type Source = { label: string; url: string };

const team = (roles: Record<string, [string, string]>): Member[] => [
  {
    name: "Cotuna Dumitru-Sorin",
    initials: "CS",
    email: "dumitru.cotuna@stud.acs.upb.ro",
    role: roles.sorin[0],
    focus: roles.sorin[1],
    owner: true,
  },
  {
    name: "Cristian Tiuț",
    initials: "CT",
    email: "cristian.tiut@stud.acs.upb.ro",
    role: roles.cristian[0],
    focus: roles.cristian[1],
  },
  {
    name: "Eduard Radu",
    initials: "ER",
    email: "eduard.radu1303@stud.acs.upb.ro",
    role: roles.eduard[0],
    focus: roles.eduard[1],
  },
  {
    name: "Alexandru Ioniță",
    initials: "AI",
    email: "alexandru.ionita03@stud.acs.upb.ro",
    role: roles.alexandru[0],
    focus: roles.alexandru[1],
  },
];

const sources: Source[] = [
  {
    label: "Wall-Street.ro — rambursul rămâne cea mai folosită metodă de plată (31%)",
    url: "https://www.wall-street.ro/articol/ecomteam/217159/romanii-au-cumparat-online-de-2-8-miliarde-de-euro-procentul-de-plati-prin-card-a-crescut-dar-rambursul-ramane-la-putere.html",
  },
  {
    label: "Economica.net — piața e-commerce RO ~11,5 mld. € în 2024",
    url: "https://www.economica.net/?p=887695",
  },
  {
    label: "Avocatnet.ro — costul returului coletului refuzat cade pe expeditor",
    url: "https://www.avocatnet.ro/forum/discutie_517508/Comanda-magazin-online-livrata-clientul-refuza-primire.html",
  },
  {
    label: "PTT Express — returul se taxează ca livrarea inițială",
    url: "https://pttexpress.ro/blog/clienti-care-refuza-coletele-cauze-si-remedii-in-cazul-situatiilor-de-nelivrare-prin-curierat/",
  },
  {
    label: "MerchantPro — aplicația Blacklist",
    url: "https://help.merchantpro.ro/article/142-aplicatia-blacklist",
  },
  {
    label: "Gomag — blacklist comenzi",
    url: "https://www.gomag.ro/blog/blacklist-comenzi-retur-activ-implicit-geo-llms-noutati/",
  },
  {
    label: "Shiprocket — predicție RTO pentru comenzi COD",
    url: "https://www.shiprocket.in/blog/reduce-rto-losses-in-cod-orders-with-predictive-technology",
  },
  {
    label: "Click.ro — lista publică a clienților care refuză rambursul (sancționată ANSPDCP)",
    url: "https://click.ro/actualitate/national/comanzi-online-si-refuzi-sa-platesti-ramburs-182044.html",
  },
];

const milestonesRo: Milestone[] = [
  { id: "M0", week: "S2 · 05–09 oct", title: "Formare echipă", status: "done" },
  { id: "M1", week: "S3 · termen 19.10", title: "Fiki & descriere proiect", status: "current" },
  { id: "M2", week: "S5 · 26–30 oct", title: "Validare cu clienți", status: "upcoming" },
  { id: "M3", week: "S7 · 09–13 nov", title: "—", status: "upcoming" },
  { id: "M4", week: "S8 · 16–20 nov", title: "—", status: "upcoming" },
  { id: "M5", week: "S10 · 03 dec", title: "—", status: "upcoming", highlight: "Prezentare progres" },
  { id: "M6", week: "S11 · 07–11 dec", title: "—", status: "upcoming" },
  { id: "M7–M9", week: "S13 · 14 ian", title: "—", status: "upcoming", highlight: "Prezentare proiect" },
  { id: "M11", week: "S14 · 18–22 ian", title: "—", status: "upcoming" },
];

const milestonesEn: Milestone[] = milestonesRo.map((m) => ({
  ...m,
  week: m.week.replace("S", "W").replace("termen", "due").replace("oct", "Oct").replace("nov", "Nov").replace("dec", "Dec").replace("ian", "Jan"),
  title:
    { M0: "Team forming", M1: "Fiki & project description", M2: "Customer validation" }[m.id] ?? m.title,
  highlight:
    m.highlight === "Prezentare progres" ? "Progress presentation" : m.highlight === "Prezentare proiect" ? "Final presentation" : m.highlight,
}));

const ro = {
  meta: {
    course: "Startup Engineering · UPB",
    fikiLabel: "Fiki · progresul proiectului",
  },
  nav: [
    ["team", "Echipa"],
    ["problem", "Problema"],
    ["solution", "Soluția"],
    ["market", "Clienți"],
    ["competition", "Competiția"],
    ["business", "Business"],
    ["milestones", "Milestones"],
  ] as [string, string][],
  hero: {
    badge: "M1 · Descriere proiect",
    title: "RamburShield",
    tagline: "Scor de risc pentru comenzile ramburs.",
    lead: "La fiecare comandă cu plata la livrare spunem magazinului cât de probabil e să fie refuzată și când merită să ceară avans. Fricțiune doar pe comenzile riscante, nu pe clienții buni.",
    ctaPrimary: "Vezi problema",
    ctaSecondary: "Cum funcționează",
    terminal: {
      title: "rambur-shield · live scoring",
      lines: [
        ["order", "#10482 · ramburs · 349 lei"],
        ["signals", "telefon nou · 2 refuzuri în rețea · adresă incompletă"],
        ["risk", "0.82"],
        ["action", "cere avans 20% (70 lei)"],
      ] as [string, string][],
      level: "RISC RIDICAT",
      ok: "#10483 · risc 0.07 · ramburs permis",
    },
  },
  team: {
    kicker: "01 · Echipa",
    title: "Patru oameni, un singur scut.",
    lead: "Echipă de 4 studenți la master, cu acces direct la magazine online printr-o agenție de e-commerce.",
    ownerLabel: "Owner",
    members: team({
      sorin: ["Team Lead · Tech", "Arhitectură, integrare WooCommerce/Shopify, relația cu agenția"],
      cristian: ["Product & Customer Dev", "Interviuri cu comercianți, roadmap, UX"],
      eduard: ["Data & Risk Scoring", "Modelul de scor, semnale, evaluare"],
      alexandru: ["Growth & Business", "Pricing, GDPR & parteneriate, pitch"],
    }),
  },
  problem: {
    kicker: "02 · Problema",
    title: "Fiecare colet refuzat e o pierdere triplă.",
    lead: "La plata ramburs, o parte din colete se refuză la livrare. Magazinul plătește transportul dus, transportul retur și ține marfa blocată pe drum. Un magazin cu câteva sute de comenzi pe lună pierde mii de lei pe an și, de cele mai multe ori, nici nu urmărește cifra asta.",
    losses: [
      ["Transport dus", "plătit la expediere, nerecuperat"],
      ["Transport retur", "taxat la fel ca livrarea inițială"],
      ["Marfă blocată", "zile/săptămâni în tranzit, risc de deteriorare"],
    ] as [string, string][],
    calc: {
      title: "Calculează pierderea",
      orders: "Comenzi ramburs / lună",
      rate: "Rată de refuz",
      shipping: "Cost transport (o direcție)",
      perMonth: "pe lună",
      perYear: "pe an, doar din transport",
      note: "Simulare cu parametrii aleși de tine. Nu include marfa blocată, timpul echipei sau ambalajul.",
    },
  },
  size: {
    kicker: "03 · Cât de mare e",
    title: "Nu e un caz izolat. E o durere de piață.",
    stats: [
      ["31%", "dintre cumpărători aleg rambursul — cea mai folosită metodă de plată în RO"],
      ["~11,5 mld. €", "valoarea pieței de e-commerce din România în 2024"],
      ["~1 din 30", "comenzi refuzate, estimare raportată de comercianți (anecdotic, de validat la M2)"],
    ] as [string, string][],
  },
  solution: {
    kicker: "04 · Soluția",
    title: "Fricțiune doar unde e risc.",
    lead: "Un scor de risc calculat la fiecare comandă ramburs, cu o recomandare clară. Magazinul nu mai alege între a accepta orbește rambursul sau a-l interzice tuturor.",
    tiers: [
      ["low", "Risc scăzut", "Ramburs normal. Clientul bun nu simte nimic."],
      ["mid", "Risc mediu", "Confirmare prin SMS / telefon înainte de expediere."],
      ["high", "Risc ridicat", "Cerere de avans parțial sau plată online."],
    ] as [string, string, string][],
    flowTitle: "Cum funcționează",
    flow: [
      ["Comandă nouă", "plugin WooCommerce / Shopify / API"],
      ["Semnale", "istoric în rețea, telefon, adresă, valoare, oră"],
      ["Scor 0–1", "model antrenat pe livrări reale"],
      ["Acțiune", "permite · confirmă · cere avans"],
      ["Feedback", "rezultatul livrării îmbunătățește modelul"],
    ] as [string, string][],
  },
  market: {
    kicker: "05 · Segmente de clienți",
    title: "Pentru cine construim.",
    segments: [
      ["Primar", "Magazine online mici și medii din RO", "100–3.000 comenzi/lună, peste 40% ramburs: fashion, cosmetice, electronice, home & deco."],
      ["Early adopters", "Clienții agenției noastre", "Magazine WooCommerce/Shopify pe care le avem deja aproape. Validare și primele vânzări fără CAC."],
      ["Canal", "Platforme & agenții e-commerce", "Gomag, MerchantPro, agenții de dezvoltare: integrare white-label și distribuție."],
    ] as [string, string, string][],
  },
  competition: {
    kicker: "06 · Competiția",
    title: "Ce folosesc magazinele azi.",
    headers: ["Alternativă", "Ce face", "Unde nu ajunge"],
    items: [
      { name: "Confirmare telefonică manuală", kind: "status quo", what: "Un om sună fiecare comandă înainte de expediere.", gap: "Nu scalează, costă timp, nu prinde clienții care confirmă și apoi refuză." },
      { name: "Blacklist în platformă", kind: "MerchantPro, Gomag", what: "Comerciantul își marchează manual clienții problematici și le dezactivează rambursul.", gap: "Doar istoricul propriu al magazinului. Primul refuz trebuie încasat ca să fie învățat.", url: "https://help.merchantpro.ro/article/142-aplicatia-blacklist" },
      { name: "Liste publice de „clienți neserioși”", kind: "site-uri / grupuri", what: "Bază de date comună cu nume și telefoane.", gap: "Ilegală în forma asta: un astfel de site a fost sancționat de ANSPDCP și obligat să șteargă datele." },
      { name: "Shiprocket Sense / RTO Score", kind: "India", what: "Scor de risc RTO pe comenzi COD, prin API.", gap: "Legat de ecosistemul lor logistic, absent din RO și din integrările locale.", url: "https://www.shiprocket.in/blog/reduce-rto-losses-in-cod-orders-with-predictive-technology" },
      { name: "GoKwik", kind: "India", what: "Checkout cu risc COD și inteligență la nivel de rețea.", gap: "Construit pentru piața indiană, nu operează în RO/UE și nu tratează GDPR." },
      { name: "Interzicerea rambursului", kind: "decizie de business", what: "Doar plată online sau avans pentru toți.", gap: "Pierde clienții buni. Rambursul e încă metoda preferată." },
    ] as Competitor[],
  },
  advantage: {
    kicker: "07 · Avantajul nostru",
    title: "Nu e doar un feature. E o rețea.",
    quote: "Cine refuză la un magazin e semnalat la toate. Cu cât sunt mai multe magazine, cu atât scorul e mai bun.",
    points: [
      ["Efect de rețea", "Fiecare magazin nou aduce date care protejează toate celelalte magazine. Un competitor nou pornește de la zero."],
      ["GDPR by design", "Nu publicăm liste de nume. Identificatorii sunt pseudonimizați (hash), magazinele primesc doar un scor, iar temeiul e interesul legitim documentat (DPIA)."],
      ["Fricțiune graduală", "Nu blocăm clienți. Recomandăm acțiunea minimă care reduce riscul, deci conversia rămâne sus."],
      ["Distribuție proprie", "Prin agenție avem acces direct la magazine: validăm și vindem fără să cumpărăm trafic."],
    ] as [string, string][],
  },
  metrics: {
    kicker: "08 · Key metrics",
    title: "Ce urmărim.",
    groups: [
      ["Valoare pentru client", ["Reducerea ratei de refuz (pp)", "Lei economisiți / magazin / lună", "% comenzi cu fricțiune adăugată"]],
      ["Calitatea modelului", ["Precizie & recall pe riscul ridicat", "Rata de fals pozitiv (clienți buni deranjați)", "Conversie la cererea de avans"]],
      ["Business", ["Magazine active în rețea", "Comenzi scorate / lună", "MRR, churn, CAC"]],
    ] as [string, string[]][],
  },
  costs: {
    kicker: "09 · Structura de costuri",
    title: "Pe ce cheltuim.",
    items: [
      ["Dezvoltare", "Plugin-uri, API, dashboard, model de scor"],
      ["Infrastructură", "Hosting, bază de date, cozi de procesare"],
      ["Conformitate", "Consultanță GDPR, DPIA, contracte de procesare"],
      ["Notificări", "SMS / WhatsApp pentru confirmări (pass-through)"],
      ["Vânzări", "Onboarding prin agenție, suport, materiale"],
    ] as [string, string][],
  },
  revenue: {
    kicker: "10 · Venituri",
    title: "Cum facem bani.",
    draft: "Ipoteze de pricing, de validat cu comercianții la M2.",
    plans: [
      ["Starter", "99 lei", "/lună", "până la 500 comenzi scorate"],
      ["Growth", "249 lei", "/lună", "până la 2.000 comenzi scorate"],
      ["Scale", "custom", "", "volum mare, API, SLA"],
    ] as [string, string, string, string][],
    extras: [
      "Peste plafon: tarif per comandă scorată",
      "Confirmări SMS: refacturate cu marjă mică",
      "White-label pentru platforme & agenții",
    ],
  },
  validation: {
    kicker: "Următorul pas · M2",
    title: "Validare cu comercianți",
    lead: "Interviuri cu magazine din portofoliul agenției. Măsurăm: își cunosc rata de refuz? Cât pierd? Ar cere avans pe comenzile riscante?",
    targets: [
      ["—", "comercianți intervievați"],
      ["—", "își cunoșteau rata de refuz"],
      ["—", "ar folosi avansul pe comenzi riscante"],
    ] as [string, string][],
    pending: "În desfășurare",
  },
  milestones: {
    kicker: "Roadmap",
    title: "Milestones",
    items: milestonesRo,
    labels: { done: "Gata", current: "Acum", upcoming: "Urmează" },
  },
  footer: {
    sources: "Surse",
    note: "Fiki-ul prezintă progresul proiectului. Nu e landing page-ul produsului.",
  },
};

export type Content = typeof ro;

const en: Content = {
  meta: {
    course: "Startup Engineering · UPB",
    fikiLabel: "Fiki · project progress",
  },
  nav: [
    ["team", "Team"],
    ["problem", "Problem"],
    ["solution", "Solution"],
    ["market", "Customers"],
    ["competition", "Competition"],
    ["business", "Business"],
    ["milestones", "Milestones"],
  ],
  hero: {
    badge: "M1 · Project description",
    title: "RamburShield",
    tagline: "Risk scoring for cash-on-delivery orders.",
    lead: "For every cash-on-delivery order we tell the store how likely it is to be refused and when it's worth asking for a deposit. Friction only on risky orders, never on good customers.",
    ctaPrimary: "See the problem",
    ctaSecondary: "How it works",
    terminal: {
      title: "rambur-shield · live scoring",
      lines: [
        ["order", "#10482 · COD · 349 RON"],
        ["signals", "new phone · 2 refusals in network · incomplete address"],
        ["risk", "0.82"],
        ["action", "request 20% deposit (70 RON)"],
      ],
      level: "HIGH RISK",
      ok: "#10483 · risk 0.07 · COD allowed",
    },
  },
  team: {
    kicker: "01 · Team",
    title: "Four people, one shield.",
    lead: "A team of 4 master's students with direct access to online stores through an e-commerce agency.",
    ownerLabel: "Owner",
    members: team({
      sorin: ["Team Lead · Tech", "Architecture, WooCommerce/Shopify integration, agency relationship"],
      cristian: ["Product & Customer Dev", "Merchant interviews, roadmap, UX"],
      eduard: ["Data & Risk Scoring", "Scoring model, signals, evaluation"],
      alexandru: ["Growth & Business", "Pricing, GDPR & partnerships, pitch"],
    }),
  },
  problem: {
    kicker: "02 · Problem",
    title: "Every refused parcel is a triple loss.",
    lead: "With cash on delivery, some parcels get refused at the door. The store pays shipping out, shipping back, and has its stock stuck in transit. A store with a few hundred orders a month loses thousands of RON a year, and most of the time doesn't even track the number.",
    losses: [
      ["Outbound shipping", "paid upfront, never recovered"],
      ["Return shipping", "charged the same as the original delivery"],
      ["Stuck inventory", "days or weeks in transit, risk of damage"],
    ],
    calc: {
      title: "Estimate the loss",
      orders: "COD orders / month",
      rate: "Refusal rate",
      shipping: "Shipping cost (one way)",
      perMonth: "per month",
      perYear: "per year, shipping only",
      note: "Simulation with the parameters you choose. Excludes stuck inventory, staff time and packaging.",
    },
  },
  size: {
    kicker: "03 · How big it is",
    title: "Not an edge case. A market-wide pain.",
    stats: [
      ["31%", "of shoppers choose cash on delivery, the most used payment method in Romania"],
      ["~€11.5B", "value of the Romanian e-commerce market in 2024"],
      ["~1 in 30", "orders refused, as estimated by merchants (anecdotal, to validate in M2)"],
    ],
  },
  solution: {
    kicker: "04 · Solution",
    title: "Friction only where there's risk.",
    lead: "A risk score computed for every COD order, with a clear recommendation. The store no longer has to choose between blindly accepting COD and banning it for everyone.",
    tiers: [
      ["low", "Low risk", "Regular COD. Good customers notice nothing."],
      ["mid", "Medium risk", "SMS / phone confirmation before shipping."],
      ["high", "High risk", "Partial deposit or online payment requested."],
    ],
    flowTitle: "How it works",
    flow: [
      ["New order", "WooCommerce / Shopify plugin / API"],
      ["Signals", "network history, phone, address, value, time"],
      ["Score 0–1", "model trained on real deliveries"],
      ["Action", "allow · confirm · request deposit"],
      ["Feedback", "delivery outcome improves the model"],
    ],
  },
  market: {
    kicker: "05 · Customer segments",
    title: "Who we build for.",
    segments: [
      ["Primary", "Small & mid-size Romanian online stores", "100–3,000 orders/month, over 40% COD: fashion, cosmetics, electronics, home & deco."],
      ["Early adopters", "Our agency's clients", "WooCommerce/Shopify stores we already work with. Validation and first sales at zero CAC."],
      ["Channel", "E-commerce platforms & agencies", "Gomag, MerchantPro, dev agencies: white-label integration and distribution."],
    ],
  },
  competition: {
    kicker: "06 · Competition",
    title: "What stores use today.",
    headers: ["Alternative", "What it does", "Where it falls short"],
    items: [
      { name: "Manual phone confirmation", kind: "status quo", what: "Someone calls every order before shipping.", gap: "Doesn't scale, costs time, misses buyers who confirm and still refuse." },
      { name: "Platform blacklist", kind: "MerchantPro, Gomag", what: "The merchant manually flags problem customers and disables COD for them.", gap: "Only the store's own history. The first refusal has to be paid for before it's learned.", url: "https://help.merchantpro.ro/article/142-aplicatia-blacklist" },
      { name: "Public “bad customer” lists", kind: "websites / groups", what: "Shared database of names and phone numbers.", gap: "Illegal in that form: one such site was fined by the Romanian DPA and ordered to delete the data." },
      { name: "Shiprocket Sense / RTO Score", kind: "India", what: "RTO risk score for COD orders, via API.", gap: "Tied to their logistics ecosystem, absent from Romania and local integrations.", url: "https://www.shiprocket.in/blog/reduce-rto-losses-in-cod-orders-with-predictive-technology" },
      { name: "GoKwik", kind: "India", what: "Checkout with COD risk and network-level intelligence.", gap: "Built for the Indian market, doesn't operate in Romania/EU and doesn't address GDPR." },
      { name: "Banning COD", kind: "business decision", what: "Online payment or deposit for everyone.", gap: "Loses good customers. COD is still the preferred method." },
    ],
  },
  advantage: {
    kicker: "07 · Our advantage",
    title: "Not just a feature. A network.",
    quote: "Whoever refuses at one store gets flagged at all of them. The more stores join, the better the score gets.",
    points: [
      ["Network effect", "Every new store brings data that protects every other store. A new competitor starts from zero."],
      ["GDPR by design", "No public lists of names. Identifiers are pseudonymised (hashed), stores only receive a score, and the legal basis is a documented legitimate interest (DPIA)."],
      ["Graduated friction", "We don't block customers. We recommend the smallest action that lowers risk, so conversion stays high."],
      ["Own distribution", "Through the agency we have direct access to stores: we validate and sell without buying traffic."],
    ],
  },
  metrics: {
    kicker: "08 · Key metrics",
    title: "What we track.",
    groups: [
      ["Customer value", ["Refusal rate reduction (pp)", "RON saved / store / month", "% of orders with added friction"]],
      ["Model quality", ["Precision & recall on high risk", "False positive rate (good customers bothered)", "Deposit request conversion"]],
      ["Business", ["Active stores in the network", "Orders scored / month", "MRR, churn, CAC"]],
    ],
  },
  costs: {
    kicker: "09 · Cost structure",
    title: "Where the money goes.",
    items: [
      ["Development", "Plugins, API, dashboard, scoring model"],
      ["Infrastructure", "Hosting, database, processing queues"],
      ["Compliance", "GDPR counsel, DPIA, data processing agreements"],
      ["Notifications", "SMS / WhatsApp for confirmations (pass-through)"],
      ["Sales", "Onboarding through the agency, support, materials"],
    ],
  },
  revenue: {
    kicker: "10 · Revenue streams",
    title: "How we make money.",
    draft: "Pricing hypotheses, to be validated with merchants in M2.",
    plans: [
      ["Starter", "99 RON", "/mo", "up to 500 scored orders"],
      ["Growth", "249 RON", "/mo", "up to 2,000 scored orders"],
      ["Scale", "custom", "", "high volume, API, SLA"],
    ],
    extras: [
      "Over the cap: per scored order fee",
      "SMS confirmations: resold at a small margin",
      "White-label for platforms & agencies",
    ],
  },
  validation: {
    kicker: "Next step · M2",
    title: "Merchant validation",
    lead: "Interviews with stores from the agency's portfolio. We measure: do they know their refusal rate? How much do they lose? Would they request a deposit on risky orders?",
    targets: [
      ["—", "merchants interviewed"],
      ["—", "knew their refusal rate"],
      ["—", "would use deposits on risky orders"],
    ],
    pending: "In progress",
  },
  milestones: {
    kicker: "Roadmap",
    title: "Milestones",
    items: milestonesEn,
    labels: { done: "Done", current: "Now", upcoming: "Next" },
  },
  footer: {
    sources: "Sources",
    note: "This Fiki tracks project progress. It is not the product's landing page.",
  },
};

export const content: Record<Lang, Content> = { ro, en };
export { sources };
