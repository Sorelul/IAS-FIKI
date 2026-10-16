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

export type Tier = "low" | "mid" | "high";

export type ScanOrder = {
  id: string;
  name: string;
  city: string;
  amount: number;
  signals: string[];
  risk: number;
  tier: Tier;
  action: string;
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
    photo: "/team/sorin.jpg",
  },
  {
    name: "Cristian Tiuț",
    initials: "CT",
    email: "cristian.tiut@stud.acs.upb.ro",
    photo: "/team/cristian.jpg",
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
    fikiLabel: "Fiki · jurnalul proiectului",
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
    badge: "Milestone 1: descrierea proiectului",
    title: "RamburShield",
    tagline: "Afli dinainte care colete se întorc.",
    lead: "Coletele ramburs refuzate la livrare sunt o pierdere constantă pentru magazinele online. RamburShield dă fiecărei comenzi ramburs un scor de risc și arată când merită cerut un avans. Clienții buni comandă ca până acum, doar comenzile riscante au un pas în plus.",
    ctaPrimary: "De unde am pornit",
    ctaSecondary: "Cum funcționează",
    scanner: {
      title: "Comanda",
      scan: "Scanează altă comandă",
      scanning: "Se scanează…",
      note: "Comenzi de test, cu date inventate.",
      fields: { to: "Destinatar", cod: "Ramburs", signals: "Semnale", risk: "Scor de risc", action: "Recomandare" },
      currency: "lei",
      stamps: { low: "Ramburs OK", mid: "Confirmă", high: "Cere avans" },
      orders: [
        { id: "10482", name: "Mihai P.", city: "Ploiești", amount: 349, signals: ["telefon nou", "2 refuzuri în rețea", "adresă incompletă"], risk: 0.82, tier: "high", action: "Cere avans de 70 lei" },
        { id: "10483", name: "Andreea M.", city: "Cluj-Napoca", amount: 189, signals: ["6 livrări reușite", "telefon verificat"], risk: 0.06, tier: "low", action: "Trimite cu ramburs" },
        { id: "10484", name: "Ioana D.", city: "Iași", amount: 520, signals: ["prima comandă", "valoare peste medie", "plasată la 03:12"], risk: 0.41, tier: "mid", action: "Confirmă prin SMS" },
        { id: "10485", name: "Radu S.", city: "Brașov", amount: 95, signals: ["livrare reușită luna trecută"], risk: 0.11, tier: "low", action: "Trimite cu ramburs" },
      ] as ScanOrder[],
    },
  },
  team: {
    title: "Cine suntem",
    lead: "Avem experiență în dezvoltare e-commerce, date și business, plus relații directe cu magazine online din România.",
    ownerLabel: "Owner",
    members: team({
      sorin: ["Team Lead · Tech", "Mă ocup de arhitectură, de integrarea cu WooCommerce și Shopify și de relația cu partenerii."],
      cristian: ["Product & Customer Dev", "Vorbesc cu comercianții, țin roadmap-ul și am grijă ca produsul să fie ușor de folosit."],
      eduard: ["Data & Risk Scoring", "Construiesc modelul de scor: ce semnale contează și cât de bine prezice refuzurile."],
      alexandru: ["Growth & Business", "Lucrez la pricing, la partea de GDPR și parteneriate și la pitch."],
    }),
  },
  problem: {
    title: "Un colet refuzat îl plătești de trei ori",
    lead: "Clientul comandă cu plata la livrare, curierul ajunge la ușă, iar clientul s-a răzgândit. Magazinul plătise deja transportul până la el, acum îl plătește și pe cel înapoi, iar marfa stă pe drum zile întregi în loc să fie vândută altcuiva. Un magazin cu câteva sute de comenzi pe lună pierde așa mii de lei pe an. Și de cele mai multe ori nimeni nu ține socoteala, pentru că pierderea se amestecă printre facturile de curierat.",
    losses: [
      ["Transportul dus", "l-ai plătit deja și nu-l mai recuperezi"],
      ["Transportul retur", "curierul îl taxează la fel ca livrarea"],
      ["Marfa blocată", "stă pe drum în loc să fie vândută"],
    ] as [string, string][],
    calc: {
      title: "Fă-ți singur calculul",
      orders: "Comenzi ramburs pe lună",
      rate: "Câte se refuză",
      shipping: "Cost transport (o direcție)",
      perMonth: "pe lună",
      perYear: "pe an, doar din transport",
      note: "Cifrele le alegi tu. Am socotit doar transportul dus-întors. Marfa blocată, ambalajul și timpul pierdut de echipă vin peste.",
    },
  },
  size: {
    title: "Și nu e problema unui singur magazin",
    stats: [
      ["31%", "dintre cumpărătorii români aleg rambursul. E cea mai folosită metodă de plată."],
      ["~11,5 mld. €", "a valorat e-commerce-ul din România în 2024."],
      ["~1 din 30", "comenzi se refuză, după estimarea unui comerciant. E o cifră anecdotică, pe care o verificăm la M2."],
    ] as [string, string][],
  },
  solution: {
    title: "Pasul în plus apare doar unde e risc",
    lead: "Azi, un magazin are două variante. Fie acceptă rambursul pentru toată lumea și înghite refuzurile, fie îl scoate și pierde clienții care vor să plătească la ușă. Noi vrem să-i dăm o a treia: un scor pentru fiecare comandă și o recomandare clară despre ce să facă cu ea.",
    tiers: [
      ["low", "Risc scăzut", "Comanda pleacă normal. Clientul nici nu știe că am verificat-o."],
      ["mid", "Risc mediu", "Un SMS sau un telefon de confirmare înainte să pleci cu coletul."],
      ["high", "Risc ridicat", "Ceri un avans mic sau plata online. Dacă nu vrea, ai scăpat de un retur."],
    ] as [string, string, string][],
    flowTitle: "Ce se întâmplă în spate",
    flow: [
      ["Vine o comandă", "prin plugin-ul de WooCommerce, de Shopify sau prin API"],
      ["Strângem semnale", "istoricul din rețea, telefonul, adresa, valoarea, ora"],
      ["Calculăm scorul", "un număr între 0 și 1, învățat din livrări reale"],
      ["Recomandăm", "trimite, confirmă sau cere avans"],
      ["Învățăm", "rezultatul livrării ajunge înapoi în model"],
    ] as [string, string][],
  },
  market: {
    title: "Pentru cine facem asta",
    segments: [
      ["Țintă principală", "Magazine online mici și medii din România", "Între 100 și 3.000 de comenzi pe lună, unde rambursul e o bucată mare din vânzări: fashion, cosmetice, electronice, casă."],
      ["Early adopters", "Magazine din rețeaua noastră", "Magazine WooCommerce și Shopify cu care avem deja relații. Aici validăm ideea și vindem primele abonamente."],
      ["Mai târziu", "Platforme și agenții de e-commerce", "Gomag, MerchantPro sau alte agenții ar putea pune scorul direct în platforma lor."],
    ] as [string, string, string][],
  },
  competition: {
    title: "Ce fac magazinele azi",
    headers: ["Alternativă", "Cum funcționează", "De ce nu ajunge"],
    items: [
      { name: "Sună fiecare client", kind: "status quo", what: "Cineva din echipă confirmă la telefon fiecare comandă înainte de expediere.", gap: "Mănâncă ore întregi pe zi. Și unii clienți confirmă, apoi refuză oricum coletul." },
      { name: "Blacklist în platformă", kind: "MerchantPro, Gomag", what: "Comerciantul își marchează singur clienții problematici și le scoate rambursul.", gap: "Vede doar ce s-a întâmplat la el. Ca să afle de un client rău, trebuie mai întâi să plătească refuzul.", url: "https://help.merchantpro.ro/article/142-aplicatia-blacklist" },
      { name: "Liste publice cu „clienți neserioși”", kind: "site-uri, grupuri", what: "O bază comună cu nume și numere de telefon.", gap: "Așa cum sunt făcute, sunt ilegale. Un astfel de site a fost amendat de ANSPDCP și obligat să șteargă datele." },
      { name: "Shiprocket Sense / RTO Score", kind: "India", what: "Dă un scor de risc comenzilor cu plata la livrare, prin API.", gap: "Merge doar în ecosistemul lor de curierat și nu există în România.", url: "https://www.shiprocket.in/blog/reduce-rto-losses-in-cod-orders-with-predictive-technology" },
      { name: "GoKwik", kind: "India", what: "Checkout care evaluează riscul la ramburs pe baza datelor din mai multe magazine.", gap: "E făcut pentru piața din India, nu e prezent în UE și nu e gândit pentru GDPR." },
      { name: "Renunți la ramburs", kind: "decizie de business", what: "Toată lumea plătește online sau dă avans.", gap: "Pierzi și clienții buni. Rambursul e încă metoda preferată." },
    ] as Competitor[],
  },
  advantage: {
    title: "Nu e doar un feature. E o rețea.",
    quote: "Cine refuză la un magazin e semnalat la toate. Cu cât sunt mai multe magazine, cu atât scorul e mai bun.",
    points: [
      ["Rețeaua crește odată cu noi", "Fiecare magazin care intră aduce date care îi protejează și pe ceilalți. Cine vine după noi pornește de la zero."],
      ["GDPR din prima zi", "Nu publicăm liste de nume. Identificatorii sunt pseudonimizați, magazinele văd doar un scor, iar interesul legitim îl documentăm într-un DPIA. Am învățat din greșelile listelor publice."],
      ["Nu blocăm pe nimeni", "Recomandăm cel mai mic pas care scade riscul. Clientul bun nu simte nimic, deci conversia nu scade."],
      ["Acces direct la piață", "Avem relații existente cu magazine online, deci putem valida și vinde fără să cumpărăm trafic."],
    ] as [string, string][],
  },
  metrics: {
    title: "Cum ne dăm seama că merge",
    groups: [
      ["Pentru magazin", ["Cu cât scade rata de refuz", "Câți lei economisește pe lună", "La câte comenzi am adăugat un pas în plus"]],
      ["Pentru model", ["Precizie și recall pe comenzile riscante", "Câți clienți buni am deranjat degeaba", "Câți acceptă să dea avans"]],
      ["Pentru noi", ["Magazine active în rețea", "Comenzi scorate pe lună", "MRR, churn, CAC"]],
    ] as [string, string[]][],
  },
  costs: {
    title: "Pe ce se duc banii",
    items: [
      ["Dezvoltare", "plugin-uri, API, dashboard, modelul de scor"],
      ["Infrastructură", "hosting, bază de date, procesare"],
      ["GDPR", "consultanță juridică, DPIA, contracte de procesare"],
      ["Notificări", "SMS-uri și WhatsApp pentru confirmări, refacturate"],
      ["Vânzări", "onboarding, suport, materiale"],
    ] as [string, string][],
  },
  revenue: {
    title: "Cum vrem să facem bani",
    draft: "Prețurile de mai jos sunt o primă estimare de-a noastră. Le punem la încercare în interviurile de la M2.",
    plans: [
      ["Starter", "99 lei", "/lună", "până la 500 de comenzi scorate"],
      ["Growth", "249 lei", "/lună", "până la 2.000 de comenzi scorate"],
      ["Scale", "la cerere", "", "volum mare, API, SLA"],
    ] as [string, string, string, string][],
    extras: [
      "Peste plafon plătești per comandă scorată",
      "SMS-urile de confirmare le refacturăm cu o marjă mică",
      "Platformele și agențiile pot lua varianta white-label",
    ],
  },
  validation: {
    badge: "Următorul pas: M2",
    title: "Vorbim cu comercianții",
    lead: "Mergem la magazinele din rețeaua noastră cu trei întrebări: își știu rata de refuz? Cât îi costă? Ar cere avans pe comenzile riscante? Răspunsurile apar aici după interviuri.",
    targets: [
      ["—", "comercianți intervievați"],
      ["—", "își știau rata de refuz"],
      ["—", "ar cere avans pe comenzile riscante"],
    ] as [string, string][],
    pending: "În lucru",
  },
  milestones: {
    title: "Milestones",
    items: milestonesRo,
    labels: { done: "Gata", current: "Acum", upcoming: "Urmează" },
  },
  footer: {
    sources: "Surse",
    note: "Pagina asta e jurnalul proiectului pentru Startup Engineering. Landing page-ul pentru clienți îl facem separat.",
  },
};

export type Content = typeof ro;

const en: Content = {
  meta: {
    course: "Startup Engineering · UPB",
    fikiLabel: "Fiki · project log",
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
    badge: "Milestone 1: project description",
    title: "RamburShield",
    tagline: "Know which parcels will come back.",
    lead: "Cash-on-delivery parcels refused at the door are a constant loss for online stores. RamburShield gives every COD order a risk score and shows when a deposit is worth asking for. Good customers order as usual, and only risky orders get one extra step.",
    ctaPrimary: "Where we started",
    ctaSecondary: "How it works",
    scanner: {
      title: "Order",
      scan: "Scan another order",
      scanning: "Scanning…",
      note: "Test orders with made-up data.",
      fields: { to: "Recipient", cod: "Cash on delivery", signals: "Signals", risk: "Risk score", action: "Recommendation" },
      currency: "RON",
      stamps: { low: "COD OK", mid: "Confirm", high: "Ask deposit" },
      orders: [
        { id: "10482", name: "Mihai P.", city: "Ploiești", amount: 349, signals: ["new phone", "2 refusals in network", "incomplete address"], risk: 0.82, tier: "high", action: "Ask for a 70 RON deposit" },
        { id: "10483", name: "Andreea M.", city: "Cluj-Napoca", amount: 189, signals: ["6 successful deliveries", "verified phone"], risk: 0.06, tier: "low", action: "Ship with COD" },
        { id: "10484", name: "Ioana D.", city: "Iași", amount: 520, signals: ["first order", "above-average value", "placed at 03:12"], risk: 0.41, tier: "mid", action: "Confirm by SMS" },
        { id: "10485", name: "Radu S.", city: "Brașov", amount: 95, signals: ["delivered fine last month"], risk: 0.11, tier: "low", action: "Ship with COD" },
      ],
    },
  },
  team: {
    title: "Who we are",
    lead: "We bring experience in e-commerce development, data and business, plus direct connections with online stores in Romania.",
    ownerLabel: "Owner",
    members: team({
      sorin: ["Team Lead · Tech", "I handle the architecture, the WooCommerce and Shopify integration and our partner relationships."],
      cristian: ["Product & Customer Dev", "I talk to merchants, keep the roadmap and make sure the product is easy to use."],
      eduard: ["Data & Risk Scoring", "I build the scoring model: which signals matter and how well it predicts refusals."],
      alexandru: ["Growth & Business", "I work on pricing, GDPR and partnerships, and on the pitch."],
    }),
  },
  problem: {
    title: "You pay for a refused parcel three times",
    lead: "A customer orders with cash on delivery, the courier shows up, and they've changed their mind. The store already paid to ship it out, now pays to ship it back, and the stock sits in transit for days instead of being sold to someone else. A store with a few hundred orders a month loses thousands of RON a year this way. Most of the time nobody keeps track, because the loss gets buried in the courier invoices.",
    losses: [
      ["Outbound shipping", "already paid, never coming back"],
      ["Return shipping", "the courier charges it like a delivery"],
      ["Stuck inventory", "sitting in transit instead of being sold"],
    ],
    calc: {
      title: "Run the numbers yourself",
      orders: "COD orders per month",
      rate: "How many get refused",
      shipping: "Shipping cost (one way)",
      perMonth: "per month",
      perYear: "per year, shipping only",
      note: "You pick the numbers. We only counted shipping both ways. Stuck inventory, packaging and the team's time come on top.",
    },
  },
  size: {
    title: "And it's not one store's problem",
    stats: [
      ["31%", "of Romanian shoppers choose cash on delivery. It's the most used payment method."],
      ["~€11.5B", "was the value of Romanian e-commerce in 2024."],
      ["~1 in 30", "orders get refused, by one merchant's estimate. It's anecdotal, and we're checking it in M2."],
    ],
  },
  solution: {
    title: "The extra step only shows up where there's risk",
    lead: "Today a store has two options. Accept COD for everyone and swallow the refusals, or drop it and lose the customers who want to pay at the door. We want to give it a third one: a score for every order and a clear recommendation on what to do with it.",
    tiers: [
      ["low", "Low risk", "The order ships as usual. The customer never knows we checked."],
      ["mid", "Medium risk", "An SMS or a quick call to confirm before the parcel goes out."],
      ["high", "High risk", "Ask for a small deposit or online payment. If they won't, you've avoided a return."],
    ],
    flowTitle: "What happens behind the scenes",
    flow: [
      ["An order comes in", "through the WooCommerce or Shopify plugin, or the API"],
      ["We gather signals", "network history, phone, address, value, time"],
      ["We score it", "a number between 0 and 1, learned from real deliveries"],
      ["We recommend", "ship, confirm or ask for a deposit"],
      ["We learn", "the delivery outcome goes back into the model"],
    ],
  },
  market: {
    title: "Who we're building this for",
    segments: [
      ["Main target", "Small and mid-size Romanian online stores", "Between 100 and 3,000 orders a month, where COD is a big share of sales: fashion, cosmetics, electronics, home."],
      ["Early adopters", "Stores in our network", "WooCommerce and Shopify stores we already have relationships with. This is where we validate the idea and sell the first subscriptions."],
      ["Later on", "E-commerce platforms and agencies", "Gomag, MerchantPro or other agencies could plug the score straight into their platform."],
    ],
  },
  competition: {
    title: "What stores do today",
    headers: ["Alternative", "How it works", "Why it's not enough"],
    items: [
      { name: "Call every customer", kind: "status quo", what: "Someone on the team confirms every order by phone before it ships.", gap: "It eats hours every day. And some customers confirm, then refuse the parcel anyway." },
      { name: "Platform blacklist", kind: "MerchantPro, Gomag", what: "The merchant flags problem customers by hand and turns off COD for them.", gap: "It only sees that store's history. To learn about a bad customer, the store has to pay for the refusal first.", url: "https://help.merchantpro.ro/article/142-aplicatia-blacklist" },
      { name: "Public “bad customer” lists", kind: "websites, groups", what: "A shared database of names and phone numbers.", gap: "The way they're built, they're illegal. One such site was fined by the Romanian DPA and ordered to delete the data." },
      { name: "Shiprocket Sense / RTO Score", kind: "India", what: "Gives COD orders a risk score, via API.", gap: "Only works inside their courier ecosystem and isn't available in Romania.", url: "https://www.shiprocket.in/blog/reduce-rto-losses-in-cod-orders-with-predictive-technology" },
      { name: "GoKwik", kind: "India", what: "A checkout that scores COD risk using data from many stores.", gap: "Built for the Indian market, not present in the EU and not designed around GDPR." },
      { name: "Drop COD", kind: "business decision", what: "Everyone pays online or leaves a deposit.", gap: "You lose the good customers too. COD is still the preferred method." },
    ],
  },
  advantage: {
    title: "Not just a feature. A network.",
    quote: "Whoever refuses at one store gets flagged at all of them. The more stores join, the better the score gets.",
    points: [
      ["The network grows with us", "Every store that joins brings data that protects the others too. Whoever comes after us starts from zero."],
      ["GDPR from day one", "We don't publish lists of names. Identifiers are pseudonymised, stores only see a score, and we document the legitimate interest in a DPIA. We learned from the public lists' mistakes."],
      ["We don't block anyone", "We recommend the smallest step that lowers the risk. Good customers don't notice, so conversion holds."],
      ["Direct market access", "We have existing relationships with online stores, so we can validate and sell without buying traffic."],
    ],
  },
  metrics: {
    title: "How we'll know it works",
    groups: [
      ["For the store", ["How much the refusal rate drops", "How many RON it saves per month", "How many orders got an extra step"]],
      ["For the model", ["Precision and recall on risky orders", "How many good customers we bothered for nothing", "How many accept to pay a deposit"]],
      ["For us", ["Active stores in the network", "Orders scored per month", "MRR, churn, CAC"]],
    ],
  },
  costs: {
    title: "Where the money goes",
    items: [
      ["Development", "plugins, API, dashboard, the scoring model"],
      ["Infrastructure", "hosting, database, processing"],
      ["GDPR", "legal advice, DPIA, data processing agreements"],
      ["Notifications", "SMS and WhatsApp for confirmations, billed through"],
      ["Sales", "onboarding, support, materials"],
    ],
  },
  revenue: {
    title: "How we plan to make money",
    draft: "The prices below are our first estimate. We'll put them to the test in the M2 interviews.",
    plans: [
      ["Starter", "99 RON", "/mo", "up to 500 scored orders"],
      ["Growth", "249 RON", "/mo", "up to 2,000 scored orders"],
      ["Scale", "on request", "", "high volume, API, SLA"],
    ],
    extras: [
      "Over the cap you pay per scored order",
      "We bill confirmation SMS through at a small margin",
      "Platforms and agencies can take the white-label version",
    ],
  },
  validation: {
    badge: "Next step: M2",
    title: "Talking to merchants",
    lead: "We're going to the stores in our network with three questions: do they know their refusal rate? How much does it cost them? Would they ask for a deposit on risky orders? The answers go here after the interviews.",
    targets: [
      ["—", "merchants interviewed"],
      ["—", "knew their refusal rate"],
      ["—", "would ask for a deposit on risky orders"],
    ],
    pending: "In progress",
  },
  milestones: {
    title: "Milestones",
    items: milestonesEn,
    labels: { done: "Done", current: "Now", upcoming: "Next" },
  },
  footer: {
    sources: "Sources",
    note: "This page is our project log for Startup Engineering. The customer landing page is a separate thing.",
  },
};

export const content: Record<Lang, Content> = { ro, en };
export { sources };
