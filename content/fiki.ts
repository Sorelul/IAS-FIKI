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
  target?: string;
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

// `key` matches QUESTIONS in scripts/interview-stats.gs.
export type InterviewGroup = { key: string; title: string; note?: string; sorted?: boolean };
export type InterviewHighlight = { key: string; answers: string[]; label: string };

export type DiscoveryBlock =
  | { kind: "p" | "h"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[]; start: number }
  | { kind: "table"; rows: string[][] };
export type DiscoveryPart = { title: string; blocks: DiscoveryBlock[] };

// M3: wireframes. Images live in public/wireframes/.
export type WireframeScreen = { title: string; text: string; image: string; alt: string };

const p = (text: string): DiscoveryBlock => ({ kind: "p", text });
const h = (text: string): DiscoveryBlock => ({ kind: "h", text });
const ul = (...items: string[]): DiscoveryBlock => ({ kind: "ul", items });
const ol = (start: number, ...items: string[]): DiscoveryBlock => ({ kind: "ol", start, items });
const table = (...rows: string[][]): DiscoveryBlock => ({ kind: "table", rows });

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
    name: "Cristian Tiut",
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
    photo: "/team/eduard.jpg",
  },
  {
    name: "Alexandru Ioniță",
    initials: "AI",
    email: "alexandru.ionita03@stud.acs.upb.ro",
    role: roles.alexandru[0],
    focus: roles.alexandru[1],
    photo: "/team/alex.jpg",
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
  { id: "M0", week: "termen 14.10.26", title: "Formare echipă", status: "done", target: "top" },
  { id: "M1", week: "termen 19.10.26", title: "Fiki & descriere proiect", status: "done", target: "top" },
  { id: "M2", week: "termen 02.11.26", title: "Validare cu clienți", status: "done", target: "discovery" },
  { id: "M3", week: "termen 09.11.26", title: "Wireframe & landing page", status: "current", target: "wireframes" },
  { id: "M4", week: "termen 16.11.26", title: "—", status: "upcoming" },
  { id: "M5", week: "termen 02.12.26", title: "—", status: "upcoming", highlight: "Prezentare progres" },
  { id: "M6", week: "termen 07.12.26", title: "—", status: "upcoming" },
  { id: "M7–M9", week: "termen 11.01.27", title: "—", status: "upcoming", highlight: "Prezentare proiect" },
  { id: "M11", week: "termen 18.01.27", title: "—", status: "upcoming" },
];

const milestonesEn: Milestone[] = milestonesRo.map((m) => ({
  ...m,
  week: m.week.replace("termen", "due"),
  title:
    { M0: "Team forming", M1: "Fiki & project description", M2: "Customer validation", M3: "Wireframe & landing page" }[m.id] ?? m.title,
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
    ["discovery", "Discovery"],
    ["interviews", "Interviuri"],
    ["wireframes", "Wireframes"],
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
  discovery: {
    badge: "Milestone 2: validare cu clienți",
    title: "Customer discovery process",
    parts: [
      {
        title: "Cum am identificat problema",
        blocks: [
          p("Problema ne-a fost semnalată de un comerciant din rețeaua noastră, care vinde online și lucrează mult cu plata ramburs. Din experiența lui, cam 1 din 30 de comenzi ramburs se întoarce refuzată la ușă."),
          p("Când am descompus costul unui astfel de colet, am văzut că magazinul îl plătește de trei ori:"),
          ul(
            "**transportul dus**, deja plătit și nerecuperabil;",
            "**transportul retur**, pe care curierul îl taxează la fel ca livrarea;",
            "**marfa blocată**, care stă zile întregi pe drum în loc să fie vândută altui client.",
          ),
          p("Pentru un magazin cu 500 de comenzi ramburs pe lună, o rată de refuz de 4% și 20 de lei transport pe sens, asta înseamnă 800 de lei pe lună, adică 9.600 de lei pe an, doar din transport. Pierderea e greu de observat, pentru că se amestecă printre facturile de curierat și rareori e urmărită separat."),
          p("Am verificat apoi dacă e o problemă izolată. Rambursul e metoda de plată aleasă de 31% dintre cumpărătorii români, cea mai folosită, într-o piață de e-commerce de aproximativ 11,5 miliarde de euro în 2024. Am găsit și mai multe soluții improvizate de comercianți: confirmarea telefonică a fiecărei comenzi, blacklist-uri în MerchantPro și Gomag, liste publice cu „clienți neserioși”. Faptul că magazinele investesc deja timp și bani în ocolirea problemei ne-a arătat că durerea e reală."),
        ],
      },
      {
        title: "Ce soluție am gândit",
        blocks: [
          p("RamburShield dă fiecărei comenzi ramburs un scor de risc între 0 și 1 și recomandă cel mai mic pas care scade riscul. Azi magazinul are două variante: acceptă rambursul pentru toată lumea și înghite refuzurile, sau îl scoate și pierde clienții care vor să plătească la ușă. Noi îi oferim o a treia variantă:"),
          table(
            ["Risc", "Ce recomandăm", "Ce simte clientul"],
            ["Scăzut", "Comanda pleacă normal", "Nimic, nu știe că a fost verificată"],
            ["Mediu", "SMS sau telefon de confirmare înainte de expediere", "Un mesaj de confirmare"],
            ["Ridicat", "Avans mic sau plată online", "Un pas în plus; dacă refuză, magazinul a evitat un retur"],
          ),
          p("**Cum funcționează.** Comanda intră printr-un plugin de WooCommerce sau Shopify ori prin API. Strângem semnale (istoricul din rețea, telefonul, adresa, valoarea, ora comenzii), calculăm scorul și afișăm recomandarea. Rezultatul real al livrării se întoarce în model, care se îmbunătățește în timp."),
          p("**De ce o rețea.** Un blacklist din platformă vede doar clienții unui singur magazin, care trebuie mai întâi să plătească refuzul ca să afle de el. La noi, cine refuză la un magazin e semnalat la toate, iar scorul devine mai bun cu fiecare magazin nou."),
          p("**GDPR din prima zi.** Nu publicăm liste de nume. Identificatorii sunt pseudonimizați, magazinele văd doar scorul, iar interesul legitim e documentat într-un DPIA."),
          p("**Model de venit (ipoteză de testat).** Starter 99 lei/lună (până la 500 de comenzi scorate), Growth 249 lei/lună (până la 2.000), Scale la cerere. SMS-urile de confirmare se refacturează cu o marjă mică, iar platformele și agențiile pot lua o variantă white-label."),
        ],
      },
      {
        title: "Planul de customer discovery, pe scurt",
        blocks: [
          p("Vrem să aflăm dacă refuzurile ramburs dor destul de tare încât un magazin să plătească pentru un scor de risc și să ne dea date ca să-l construim. Planul are cinci pași:"),
          ol(
            1,
            "**Ipotezele.** Am scris ce trebuie să fie adevărat ca ideea să merite (secțiunea 4.5).",
            "**Instrumentul.** Am construit un formular de interviu după regulile din The Mom Test: întrebăm despre situații concrete prin care comerciantul a trecut deja, nu îl rugăm să ne evalueze ideea.",
            "**Interviurile.** Le facem față în față sau la telefon cu magazine din rețeaua noastră, folosind formularul ca script. Celor care nu au timp de o discuție le trimitem formularul să-l completeze singuri.",
            "**Analiza.** Agregăm răspunsurile și le comparăm cu pragurile de validare stabilite dinainte. Pe site publicăm doar totaluri, de la 3 răspunsuri în sus, ca să nu se poată deduce cine ce a spus.",
            "**Decizia.** Continuăm, ajustăm produsul sau pivotăm spre problema pe care comercianții o numesc cel mai des.",
          ),
        ],
      },
      {
        title: "Procesul în detaliu",
        blocks: [
          h("4.1 Segmentele de clienți"),
          p("Am pornit de la cine pierde cel mai mult din refuzuri: magazinele la care rambursul e o bucată mare din vânzări și care au destul volum ca pierderea să conteze, dar nu atât de mare încât să-și construiască singure un sistem de scoring."),
          table(
            ["Segment", "Cine e", "De ce îl alegem"],
            ["Țintă principală", "Magazine online mici și medii din România, 100–3.000 de comenzi pe lună", "Rambursul are pondere mare, iar refuzurile se adună la mii de lei pe an"],
            ["Early adopters", "Magazine WooCommerce și Shopify din rețeaua echipei", "Ajungem direct la decident, ne pot da date și pot deveni primii clienți plătitori"],
            ["Mai târziu", "Platforme și agenții de e-commerce (Gomag, MerchantPro)", "Pot integra scorul pentru toți clienții lor, prin white-label"],
          ),
          p("În fiecare magazin căutăm două roluri: **cel care decide și plătește** (proprietarul sau managerul) și **cel care trăiește problema zilnic** (persoana care confirmă comenzile și pregătește coletele). De multe ori, într-un magazin mic, e același om."),
          h("4.2 Cum ajungem la ei"),
          p("Nu cumpărăm trafic și nu facem cold outreach în prima fază. Pornim de la relațiile directe pe care echipa le are deja cu magazine online. Ei ne răspund mai ușor și mai sincer, iar o recomandare de la ei ne deschide ușa la alți comercianți. Cristian (Product & Customer Dev) coordonează interviurile, iar Sorin (Team Lead) se ocupă de relația cu partenerii."),
          h("4.3 Cum colectăm informația"),
          ul(
            "**Interviuri față în față și la telefon**, de 15–20 de minute. Formularul e scriptul, iar noi notăm răspunsurile și punem întrebări de follow-up pe poveștile concrete.",
            "**Formular online** (Google Forms, 4 pagini, 5–7 minute) pentru cei care preferă să-l completeze singuri.",
            "**Statistici agregate pe site**, actualizate automat din formular, fără nume de firme.",
          ),
          p("Am ales interviul ghidat în locul unui chestionar clasic pentru că ne interesează poveștile: ultima comandă refuzată, ce a costat, ce s-a făcut după. Un chestionar cu note de la 1 la 5 ne-ar fi spus doar că „problema e importantă”, ceea ce nu validează nimic."),
          h("4.4 Întrebările"),
          p("**Partea 1: Context** (ca să știm în ce segment e magazinul)"),
          ol(
            1,
            "Numele firmei și rolul dumneavoastră",
            "Platforma magazinului (WooCommerce, Shopify, Gomag, MerchantPro, altele)",
            "Comenzi pe lună (sub 100 / 100–500 / 500–2.000 / peste 2.000)",
            "Ce procent din comenzi sunt cu plata ramburs?",
            "De cât timp vândeți online?",
            "Câți oameni lucrează în firmă?",
            "Ce curieri folosiți?",
          ),
          p("**Partea 2: Problema** (cât de reală și de scumpă e, judecată din fapte trecute)"),
          ol(
            8,
            "Povestiți ultima dată când un client a refuzat un colet ramburs. Ce s-a întâmplat și ce ați făcut după?",
            "Câte colete refuzate sau neridicate ați avut luna trecută, aproximativ?",
            "Care sunt cele mai frecvente motive de refuz?",
            "Observați tipare la clienții care refuză? (zonă, oră, valoare, tip de produs, client nou)",
            "Ce vă costă un refuz? (transport, timp, produs blocat, altceva)",
            "Ce ați încercat până acum ca să reduceți refuzurile? Ce a funcționat și ce nu?",
            "Țineți evidența clienților care au refuzat? Unde?",
            "Ați primit o comandă nouă de la un client care refuzase înainte? Ce ați făcut?",
            "Cine se ocupă de asta în firmă și cât timp îi ia pe săptămână?",
            "Ați plătit vreodată pentru o soluție la problema asta (serviciu, tool, call center)? Dacă da, cât?",
            "Dacă refuzurile ar dispărea mâine, ce s-ar schimba concret pentru afacerea dumneavoastră?",
          ),
          p("**Partea 3: Ideea noastră** (abia aici o prezentăm, în o singură propoziție, și testăm cum ar fi adoptată și plătită)"),
          ol(
            19,
            "Ce faceți, pas cu pas, chiar acum, când trebuie să decideți dacă acceptați o comandă ramburs riscantă?",
            "Ați renunțat vreodată la un tool sau serviciu pentru magazin? Ce s-a întâmplat și de ce?",
            "Când verificați o comandă riscantă, la ce informații vă uitați?",
            "În ce sistem verificați comenzile înainte să le trimiteți la curier?",
            "Ne puteți trimite, pentru test, un extras anonimizat din istoricul de livrări? (Da / Da, cu condiții / Nu) și de ce?",
            "Pentru alte servicii pe care le folosiți deja (curierat, contabilitate, marketing), ce model de tarifare aveți?",
            "Pentru abonamentele existente, preferați plata lunară, anuală sau în funcție de volum? De ce?",
            "Cât cheltuiți lunar pe servicii sau resurse legate de refuzuri (curierat suplimentar, verificări, personal, tooluri)?",
            "Cine a decis ultima dată când ați cumpărat un tool nou pentru magazin? Cum a decurs decizia?",
            "Ce altă problemă vă consumă cel mai mult timp în magazin?",
          ),
          p("**Partea 4: Contact**"),
          ol(29, "Doriți acces la versiunea beta?", "Email sau telefon (opțional)"),
          p("Întrebarea 23 e cea mai importantă din tot interviul. Un comerciant care acceptă să ne dea date reale ne plătește deja cu ceva care costă, iar asta e un semnal mult mai puternic decât un „ar fi util”. Întrebarea 28 ne arată încotro s-ar putea pivota dacă refuzurile nu se dovedesc o prioritate."),
          h("4.5 Ce am aflat până acum și ce urmărim"),
          p("Din discuția inițială cu comerciantul și din cercetarea pieței am reținut patru lucruri:"),
          ul(
            "**Refuzurile sunt o pierdere recurentă, nu un accident.** Comerciantul le estimează la cam 1 din 30 de comenzi ramburs, iar costul se dublează prin returul plătit.",
            "**Soluțiile de azi sunt manuale sau locale.** Confirmarea telefonică mănâncă ore pe zi și nu oprește clienții care confirmă, apoi refuză oricum. Blacklist-urile din platformă văd doar istoricul unui singur magazin.",
            "**Varianta „comună” există deja, dar ilegal.** Listele publice cu „clienți neserioși” arată că magazinele vor să împărtășească informația. Un astfel de site a fost amendat de ANSPDCP și obligat să șteargă datele.",
            "**Nu există un concurent direct în România.** Shiprocket (RTO Score) și GoKwik fac scoring pentru plata la livrare, dar doar în India și în ecosistemul lor, fără GDPR.",
          ),
          p("Interviurile cu magazinele sunt acum în desfășurare. Fiecare ipoteză are o întrebare care o testează și un prag stabilit dinainte, ca să nu ne păcălim singuri citind rezultatele:"),
          table(
            ["Ipoteză", "Se testează prin", "O considerăm validată dacă", "Rezultat"],
            ["Refuzurile sunt o problemă simțită", "Î8, Î9, Î12", "cel puțin 60% descriu un refuz recent și îi pot estima costul", "în curs"],
            ["Pierderea nu e urmărită separat", "Î14, Î26", "cel puțin jumătate nu țin evidența sau nu au calculat costul", "în curs"],
            ["Soluțiile actuale costă timp", "Î13, Î16, Î19", "cel puțin jumătate verifică manual comenzile, cu ore de lucru pe săptămână", "în curs"],
            ["Magazinele ne dau date", "Î23", "cel puțin 40% răspund „Da” sau „Da, cu condiții”", "în curs"],
            ["Prețul de 99–249 lei/lună e acceptabil", "Î17, Î24–Î26", "costul actual al problemei depășește abonamentul propus", "în curs"],
            ["Integrarea WooCommerce/Shopify acoperă piața", "Î2, Î22", "majoritatea magazinelor sunt pe aceste platforme", "în curs"],
            ["Există interes pentru beta", "Î29, Î30", "cel puțin jumătate cer acces și lasă un contact", "în curs"],
          ),
        ],
      },
      {
        title: "Cum ne-au schimbat produsul aceste insight-uri",
        blocks: [
          p("Ce am aflat a dat forma produsului: un scor cu recomandări gradate, nu o listă de clienți care refuză."),
          table(
            ["Ce am aflat", "Ce am schimbat în produs"],
            ["Listele publice de „clienți neserioși” au fost amendate de ANSPDCP", "Nu afișăm niciun nume. Identificatorii sunt pseudonimizați, magazinul vede doar un scor, iar interesul legitim e documentat într-un DPIA"],
            ["Rambursul e metoda preferată, iar scoaterea lui pierde clienți buni", "Nu blocăm comenzi. Recomandăm cel mai mic pas: trimite, confirmă sau cere avans. Clientul cu risc scăzut nu simte nimic"],
            ["Unii clienți confirmă la telefon, apoi refuză oricum", "Pentru risc ridicat recomandăm un avans mic, nu doar o confirmare. Un client care plătește un avans are motiv să ridice coletul"],
            ["Blacklist-ul din platformă vede doar istoricul unui magazin", "Rețeaua devine nucleul produsului: un refuz la un magazin îi protejează pe toți ceilalți"],
            ["Magazinele din rețeaua noastră sunt pe WooCommerce și Shopify", "Primele integrări sunt plugin-uri pentru aceste două platforme, apoi API pentru restul"],
            ["Volumul de comenzi diferă mult de la un magazin la altul", "Prețul e pe trepte, în funcție de numărul de comenzi scorate, nu un tarif fix"],
          ),
          p("Interviurile în curs vor decide următoarele ajustări. Î22 ne spune dacă scorul trebuie să apară în adminul magazinului sau în panoul curierului. Î23 ne spune dacă putem antrena modelul pe date reale de la început. Î24–Î26 ne spun dacă păstrăm abonamentul lunar sau trecem la plată per comandă."),
        ],
      },
      {
        title: "Suntem pregătiți pentru Customer Validation?",
        blocks: [
          p("Nu încă, dar suntem aproape. Problema e confirmată din mai multe surse, însă disponibilitatea de a plăti și de a ne da date trebuie să vină de la magazine, nu din estimările noastre."),
          p("**Ce avem deja:**"),
          ul(
            "**Problema e reală și măsurabilă.** O semnalează un comerciant activ, costul se poate calcula pe fiecare colet, iar rambursul e metoda de plată dominantă în România.",
            "**Comercianții plătesc deja pentru ea.** Plătesc cu ore de confirmări telefonice, blacklist-uri ținute manual și chiar liste ilegale. Asta arată că problema e destul de dureroasă cât să caute singuri soluții.",
            "**Nișa e liberă.** Soluțiile de scoring ramburs există doar în India, iar în România nu am găsit un concurent direct.",
            "**Avem acces la primii clienți.** Relațiile directe cu magazine online ne permit să testăm vânzarea fără buget de marketing.",
          ),
          p("**Ce ne lipsește:**"),
          ul(
            "**Pragurile din secțiunea 4.5 nu sunt atinse încă.** Le stabilisem tocmai ca să nu trecem mai departe pe baza unei singure discuții.",
            "**Nu știm dacă magazinele ne dau date.** Fără un istoric de livrări, scorul nu poate fi validat, iar efectul de rețea nu pornește.",
            "**Prețul nu e testat.** 99 și 249 lei/lună sunt estimarea noastră și trebuie comparate cu cât cheltuiesc magazinele azi pe problemă.",
          ),
          p("**Când trecem la Customer Validation.** Trecem când cel puțin patru din cele șapte ipoteze din 4.5 sunt validate, inclusiv cea despre date. Concret, ne trebuie cel puțin 3 magazine care acceptă să ne trimită un extras anonimizat din istoricul de livrări. În faza de validare le oferim un pilot: scorăm retroactiv comenzile lor din ultimele luni, le arătăm câte refuzuri ar fi fost prinse și câți lei ar fi economisit, apoi cerem semnarea abonamentului Starter la prețul de listă."),
        ],
      },
    ] as DiscoveryPart[],
  },
  interviews: {
    title: "Ce spun comercianții",
    lead: "Întrebăm magazinele online cum stau cu refuzurile și dacă ar folosi un scor de risc. Cifrele vin direct din formularul de interviu și se actualizează singure. Răspunsurile sunt confidențiale, așa că arătăm doar totaluri, fără nume de firme.",
    method:
      "Formularul e construit după regulile din The Mom Test. Comercianții nu ne evaluează ideea, ci răspund doar la întrebări despre situații concrete prin care au trecut deja: ultima comandă refuzată, cât i-a costat, ce au făcut atunci. Așa vedem dacă problema e atât de reală cât credem, iar dacă nu e, aflăm încotro ar avea sens să pivotăm.",
    formLabel: "Vezi formularul",
    responses: "răspunsuri primite",
    of: "din",
    highlights: [
      { key: "trial", answers: ["Da"], label: "ar încerca varianta beta" },
      { key: "contribute", answers: ["Da", "Da, cu condiții"], label: "ar contribui cu date anonimizate" },
    ] as InterviewHighlight[],
    pending: "Statisticile apar de la {n} răspunsuri în sus, ca să nu se poată deduce ce a spus cineva anume.",
    unavailable: "Nu am putut încărca cifrele acum. Revin în câteva minute.",
    groups: [
      { key: "platform", title: "Pe ce platformă vând", sorted: true },
      { key: "orders", title: "Comenzi pe lună" },
      { key: "codShare", title: "Cât din comenzi sunt ramburs" },
      { key: "reasons", title: "De ce refuză clienții", note: "Se pot alege mai multe motive.", sorted: true },
      { key: "contribute", title: "Ar contribui cu date?" },
      { key: "pay", title: "Cât ar plăti pe lună" },
    ] as InterviewGroup[],
    labels: {} as Record<string, string>,
  },
  wireframes: {
    badge: "Milestone 3: wireframe și landing page",
    title: "Cum arată RamburShield",
    lead: "RamburShield nu e o aplicație separată, ci un plugin care trăiește în adminul magazinului. Așa că wireframe-urile arată două perspective: ce vede comerciantul în WooCommerce și ce vede clientul atunci când comanda lui are risc ridicat.",
    landingLabel: "Vezi landing page-ul",
    flow: {
      title: "Fluxul principal",
      text: "Am desenat drumul unei comenzi cu risc ridicat, pentru că e singurul caz în care cineva simte că RamburShield există. Comerciantul își alege pragurile o singură dată, din setări. Fiecare comandă ramburs nouă primește apoi un scor, vizibil direct în lista de comenzi. Dacă scorul e mare, comerciantul deschide comanda, vede de ce e riscantă și cere un avans. Clientul plătește avansul de pe telefon, iar coletul pleacă. Rezultatul livrării se întoarce în model, iar scorul devine mai bun. La risc mediu, clientul primește un SMS de confirmare în locul paginii de avans. La risc scăzut, comanda pleacă direct.",
      image: "/wireframes/flux.png",
      alt: "Diagrama fluxului: setări, lista de comenzi, detaliul comenzii, pagina de avans, expediere, cu rezultatul livrării întors în model",
    },
    screensTitle: "Ecranele",
    screens: [
      { title: "Lista de comenzi", text: "Comerciantul vede riscul fără să schimbe nimic din ce face azi: lista de comenzi WooCommerce primește o coloană nouă, „Risc”, cu scorul și nivelul. Un filtru arată doar comenzile riscante, ca cine pregătește coletele să știe dimineața de ce să se ocupe întâi.", image: "/wireframes/comenzi.png", alt: "Wireframe: lista de comenzi WooCommerce cu coloana Risc" },
      { title: "Detaliul comenzii", text: "Lângă comandă apare caseta RamburShield: scorul, semnalele care l-au produs și recomandarea. Am pus semnalele la vedere ca un comerciant să nu ceară un avans fără să știe de ce. Câmpul „Rezultat livrare” închide bucla: din el învață modelul.", image: "/wireframes/comanda.png", alt: "Wireframe: detaliul comenzii cu caseta RamburShield" },
      { title: "Setările pluginului", text: "Comerciantul decide de la ce scor o comandă e riscantă și ce se întâmplă la fiecare nivel. Avansul se poate da ca sumă fixă sau ca procent; în exemplu, 20% din 349 de lei înseamnă 70 de lei. Pragurile de 0.30 și 0.70 sunt un punct de plecare și le calibrăm după pilot.", image: "/wireframes/setari.png", alt: "Wireframe: setările pluginului cu praguri și acțiuni" },
      { title: "Pagina de avans", text: "E singurul ecran pe care îl vede clientul, așa că l-am gândit pentru telefon. Îi spunem clar cât plătește acum și cât la livrare și îi lăsăm varianta să plătească toată comanda online.", image: "/wireframes/avans.png", alt: "Wireframe: pagina de plată a avansului pe mobil" },
    ] as WireframeScreen[],
    decisionsTitle: "Ce am decis la acest milestone",
    decisions: [
      ["Scorul apare în adminul magazinului, nu la checkout", "La checkout am fi putut ascunde automat rambursul, dar atunci clientul riscant ar vedea diferența pe loc, iar noi am promis că nu blocăm pe nimeni. Așa, comerciantul rămâne cel care decide. Întrebarea Î22 din interviuri ne spune dacă alegerea e corectă."],
      ["Avansul e varianta de bază pentru risc ridicat", "La M2 am aflat că unii clienți confirmă la telefon și apoi refuză oricum. Un client care a plătit un avans are un motiv să ridice coletul."],
    ] as [string, string][],
  },
  milestones: {
    title: "Milestones",
    items: milestonesRo,
    labels: { done: "Gata", current: "Acum", upcoming: "Urmează" },
    expand: "Deschide milestones",
    collapse: "Închide milestones",
  },
  footer: {
    sources: "Surse",
    note: "Pagina asta e jurnalul proiectului pentru Startup Engineering. Landing page-ul pentru clienți e separat, link-ul e la Milestone 3.",
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
    ["discovery", "Discovery"],
    ["interviews", "Interviews"],
    ["wireframes", "Wireframes"],
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
  discovery: {
    badge: "Milestone 2: customer validation",
    title: "Customer discovery process",
    parts: [
      {
        title: "How we identified the problem",
        blocks: [
          p("The problem was flagged to us by a merchant in our network who sells online and does a lot of cash-on-delivery business. In their experience, about 1 in 30 COD orders comes back refused at the door."),
          p("When we broke down the cost of one such parcel, we saw the store pays for it three times:"),
          ul(
            "**outbound shipping**, already paid and not recoverable;",
            "**return shipping**, which the courier charges just like a delivery;",
            "**stuck inventory**, which spends days in transit instead of being sold to another customer.",
          ),
          p("For a store with 500 COD orders a month, a 4% refusal rate and 20 RON shipping each way, that's 800 RON a month, or 9,600 RON a year, from shipping alone. The loss is hard to spot because it's mixed in with the courier invoices and rarely tracked on its own."),
          p("We then checked whether it's an isolated problem. Cash on delivery is the payment method chosen by 31% of Romanian shoppers, the most used one, in an e-commerce market worth about €11.5 billion in 2024. We also found several workarounds merchants have improvised: confirming every order by phone, blacklists in MerchantPro and Gomag, public lists of “bad customers”. The fact that stores already spend time and money working around the problem showed us the pain is real."),
        ],
      },
      {
        title: "The solution we came up with",
        blocks: [
          p("RamburShield gives every COD order a risk score between 0 and 1 and recommends the smallest step that lowers the risk. Today a store has two options: accept COD for everyone and swallow the refusals, or drop it and lose the customers who want to pay at the door. We offer a third one:"),
          table(
            ["Risk", "What we recommend", "What the customer notices"],
            ["Low", "The order ships as usual", "Nothing, they don't know it was checked"],
            ["Medium", "A confirmation SMS or call before shipping", "One confirmation message"],
            ["High", "A small deposit or online payment", "One extra step; if they refuse, the store has avoided a return"],
          ),
          p("**How it works.** The order comes in through a WooCommerce or Shopify plugin, or the API. We gather signals (network history, phone, address, value, time of the order), calculate the score and show the recommendation. The actual delivery outcome goes back into the model, which improves over time."),
          p("**Why a network.** A platform blacklist only sees one store's customers, and that store has to pay for the refusal first to find out about it. With us, whoever refuses at one store is flagged at all of them, and the score gets better with every new store."),
          p("**GDPR from day one.** We don't publish lists of names. Identifiers are pseudonymised, stores only see the score, and the legitimate interest is documented in a DPIA."),
          p("**Revenue model (a hypothesis to test).** Starter at 99 RON/month (up to 500 scored orders), Growth at 249 RON/month (up to 2,000), Scale on request. Confirmation SMS are billed through at a small margin, and platforms and agencies can take a white-label version."),
        ],
      },
      {
        title: "Our customer discovery plan, in short",
        blocks: [
          p("We want to find out whether COD refusals hurt enough for a store to pay for a risk score and give us data to build it. The plan has five steps:"),
          ol(
            1,
            "**The hypotheses.** We wrote down what has to be true for the idea to be worth it (section 4.5).",
            "**The tool.** We built an interview form following the rules of The Mom Test: we ask about concrete situations the merchant has already been through, and never ask them to rate our idea.",
            "**The interviews.** We run them in person or by phone with stores in our network, using the form as a script. Those who don't have time for a conversation get the form to fill in on their own.",
            "**The analysis.** We aggregate the answers and compare them against validation thresholds set in advance. On the site we only publish totals, from 3 responses up, so nobody can work out who said what.",
            "**The decision.** We continue, adjust the product, or pivot towards the problem merchants mention most often.",
          ),
        ],
      },
      {
        title: "The process in detail",
        blocks: [
          h("4.1 Customer segments"),
          p("We started from who loses the most to refusals: stores where COD is a big share of sales and that have enough volume for the loss to matter, but not so much that they'd build a scoring system themselves."),
          table(
            ["Segment", "Who they are", "Why we pick them"],
            ["Main target", "Small and mid-size Romanian online stores, 100–3,000 orders a month", "COD is a big share of sales, and refusals add up to thousands of RON a year"],
            ["Early adopters", "WooCommerce and Shopify stores in the team's network", "We reach the decision maker directly, they can give us data and can become the first paying customers"],
            ["Later on", "E-commerce platforms and agencies (Gomag, MerchantPro)", "They can integrate the score for all their clients, via white-label"],
          ),
          p("In every store we look for two roles: **the one who decides and pays** (the owner or manager) and **the one who lives the problem every day** (the person who confirms orders and packs the parcels). In a small store it's often the same person."),
          h("4.2 How we reach them"),
          p("We don't buy traffic and we don't do cold outreach in the first phase. We start from the direct relationships the team already has with online stores. They answer more readily and more honestly, and a recommendation from them opens the door to other merchants. Cristian (Product & Customer Dev) coordinates the interviews, and Sorin (Team Lead) handles the relationship with partners."),
          h("4.3 How we collect information"),
          ul(
            "**In-person and phone interviews** of 15–20 minutes. The form is the script; we note the answers and ask follow-up questions about the concrete stories.",
            "**Online form** (Google Forms, 4 pages, 5–7 minutes) for those who'd rather fill it in on their own.",
            "**Aggregate statistics on the site**, updated automatically from the form, with no company names.",
          ),
          p("We chose a guided interview over a classic survey because we care about the stories: the last refused order, what it cost, what happened next. A survey with 1-to-5 ratings would only have told us that “the problem is important”, which validates nothing."),
          h("4.4 The questions"),
          p("**Part 1: Context** (so we know which segment the store is in)"),
          ol(
            1,
            "Company name and your role",
            "Store platform (WooCommerce, Shopify, Gomag, MerchantPro, other)",
            "Orders per month (under 100 / 100–500 / 500–2,000 / over 2,000)",
            "What share of orders are paid by cash on delivery?",
            "How long have you been selling online?",
            "How many people work in the company?",
            "Which couriers do you use?",
          ),
          p("**Part 2: The problem** (how real and how costly it is, judged from past events)"),
          ol(
            8,
            "Tell us about the last time a customer refused a COD parcel. What happened and what did you do afterwards?",
            "Roughly how many parcels were refused or not picked up last month?",
            "What are the most common reasons for refusal?",
            "Do you notice patterns among customers who refuse? (area, time, value, product type, new customer)",
            "What does a refusal cost you? (shipping, time, stuck product, something else)",
            "What have you tried so far to reduce refusals? What worked and what didn't?",
            "Do you keep track of customers who refused? Where?",
            "Have you received a new order from a customer who had refused before? What did you do?",
            "Who handles this in the company and how much time does it take them per week?",
            "Have you ever paid for a solution to this problem (service, tool, call center)? If so, how much?",
            "If refusals disappeared tomorrow, what would concretely change for your business?",
          ),
          p("**Part 3: Our idea** (only here do we present it, in a single sentence, and test how it would be adopted and paid for)"),
          ol(
            19,
            "What do you do, step by step, right now, when you have to decide whether to accept a risky COD order?",
            "Have you ever dropped a tool or service for your store? What happened and why?",
            "When you check a risky order, what information do you look at?",
            "In which system do you check orders before handing them to the courier?",
            "Could you send us, for testing, an anonymised extract of your delivery history? (Yes / Yes, with conditions / No) And why?",
            "For other services you already use (courier, accounting, marketing), what pricing model do you have?",
            "For your existing subscriptions, do you prefer paying monthly, yearly or by volume? Why?",
            "How much do you spend each month on services or resources related to refusals (extra shipping, checks, staff, tools)?",
            "Who made the decision the last time you bought a new tool for the store? How did it go?",
            "What other problem takes up the most of your time in the store?",
          ),
          p("**Part 4: Contact**"),
          ol(29, "Would you like access to the beta version?", "Email or phone (optional)"),
          p("Question 23 is the most important in the whole interview. A merchant who agrees to give us real data is already paying us with something that costs them, and that's a much stronger signal than “it would be useful”. Question 28 shows us where we could pivot if refusals turn out not to be a priority."),
          h("4.5 What we've learned so far and what we're tracking"),
          p("From the first conversation with the merchant and from market research we took away four things:"),
          ul(
            "**Refusals are a recurring loss, not an accident.** The merchant puts them at about 1 in 30 COD orders, and the cost doubles through the paid return.",
            "**Today's solutions are manual or local.** Phone confirmation eats hours a day and doesn't stop customers who confirm, then refuse anyway. Platform blacklists only see one store's history.",
            "**The “shared” version already exists, but illegally.** Public lists of “bad customers” show that stores want to share the information. One such site was fined by the Romanian DPA (ANSPDCP) and ordered to delete the data.",
            "**There's no direct competitor in Romania.** Shiprocket (RTO Score) and GoKwik score cash-on-delivery orders, but only in India and inside their own ecosystem, without GDPR.",
          ),
          p("The interviews with stores are under way now. Every hypothesis has a question that tests it and a threshold set in advance, so we don't fool ourselves when reading the results:"),
          table(
            ["Hypothesis", "Tested by", "We consider it validated if", "Result"],
            ["Refusals are a felt problem", "Q8, Q9, Q12", "at least 60% describe a recent refusal and can estimate its cost", "in progress"],
            ["The loss isn't tracked separately", "Q14, Q26", "at least half don't keep records or haven't calculated the cost", "in progress"],
            ["Current solutions cost time", "Q13, Q16, Q19", "at least half check orders manually, spending hours a week on it", "in progress"],
            ["Stores will give us data", "Q23", "at least 40% answer “Yes” or “Yes, with conditions”", "in progress"],
            ["A price of 99–249 RON/month is acceptable", "Q17, Q24–Q26", "the current cost of the problem exceeds the proposed subscription", "in progress"],
            ["WooCommerce/Shopify integration covers the market", "Q2, Q22", "most stores are on these platforms", "in progress"],
            ["There's interest in the beta", "Q29, Q30", "at least half ask for access and leave a contact", "in progress"],
          ),
        ],
      },
      {
        title: "How these insights changed the product",
        blocks: [
          p("What we learned shaped the product: a score with graded recommendations, not a list of customers who refuse."),
          table(
            ["What we learned", "What we changed in the product"],
            ["Public lists of “bad customers” were fined by the Romanian DPA", "We don't show any names. Identifiers are pseudonymised, the store only sees a score, and the legitimate interest is documented in a DPIA"],
            ["COD is the preferred method, and dropping it loses good customers", "We don't block orders. We recommend the smallest step: ship, confirm or ask for a deposit. A low-risk customer notices nothing"],
            ["Some customers confirm by phone, then refuse anyway", "For high risk we recommend a small deposit, not just a confirmation. A customer who has paid a deposit has a reason to pick up the parcel"],
            ["A platform blacklist only sees one store's history", "The network becomes the core of the product: a refusal at one store protects all the others"],
            ["The stores in our network are on WooCommerce and Shopify", "The first integrations are plugins for these two platforms, then an API for the rest"],
            ["Order volume varies a lot from store to store", "Pricing is tiered by the number of scored orders, not a flat fee"],
          ),
          p("The ongoing interviews will decide the next adjustments. Q22 tells us whether the score should show up in the store's admin or in the courier panel. Q23 tells us whether we can train the model on real data from the start. Q24–Q26 tell us whether we keep the monthly subscription or switch to paying per order."),
        ],
      },
      {
        title: "Are we ready for Customer Validation?",
        blocks: [
          p("Not yet, but we're close. The problem is confirmed by several sources, but the willingness to pay and to give us data has to come from the stores, not from our own estimates."),
          p("**What we already have:**"),
          ul(
            "**The problem is real and measurable.** An active merchant reports it, the cost can be calculated per parcel, and COD is the dominant payment method in Romania.",
            "**Merchants already pay for it.** They pay with hours of phone confirmations, hand-kept blacklists and even illegal lists. That shows the problem hurts enough for them to look for solutions on their own.",
            "**The niche is open.** COD scoring solutions only exist in India, and we haven't found a direct competitor in Romania.",
            "**We have access to the first customers.** Direct relationships with online stores let us test selling without a marketing budget.",
          ),
          p("**What we're missing:**"),
          ul(
            "**The thresholds in section 4.5 haven't been reached yet.** We set them precisely so we wouldn't move on based on a single conversation.",
            "**We don't know if stores will give us data.** Without a delivery history the score can't be validated, and the network effect doesn't kick in.",
            "**The price isn't tested.** 99 and 249 RON/month are our estimate and need to be compared with what stores spend on the problem today.",
          ),
          p("**When we move to Customer Validation.** We move on when at least four of the seven hypotheses in 4.5 are validated, including the one about data. Concretely, we need at least 3 stores that agree to send us an anonymised extract of their delivery history. In the validation phase we offer them a pilot: we retroactively score their orders from the last few months, show them how many refusals would have been caught and how many RON they would have saved, then ask them to sign up for the Starter plan at list price."),
        ],
      },
    ],
  },
  interviews: {
    title: "What merchants tell us",
    lead: "We ask online stores how they deal with refusals and whether they'd use a risk score. The numbers come straight from the interview form and update on their own. Answers are confidential, so we only show totals, with no company names.",
    method:
      "We built the form around The Mom Test. Store owners never rate our idea. They only answer questions about concrete things that already happened: their last refused order, what it cost them, what they did about it. That tells us whether the problem is as real as we think, and if it isn't, where a pivot might make sense.",
    formLabel: "See the form",
    responses: "responses so far",
    of: "of",
    highlights: [
      { key: "trial", answers: ["Da"], label: "would try the beta version" },
      { key: "contribute", answers: ["Da", "Da, cu condiții"], label: "would contribute anonymised data" },
    ],
    pending: "The statistics appear from {n} responses up, so nobody's answers can be worked out.",
    unavailable: "We couldn't load the numbers right now. Check back in a few minutes.",
    groups: [
      { key: "platform", title: "Which platform they sell on", sorted: true },
      { key: "orders", title: "Orders per month" },
      { key: "codShare", title: "Share of orders paid by COD" },
      { key: "reasons", title: "Why customers refuse", note: "More than one reason can be picked.", sorted: true },
      { key: "contribute", title: "Would they contribute data?" },
      { key: "pay", title: "What they'd pay per month" },
    ],
    // Form answers arrive in Romanian, keyed by the option text.
    labels: {
      "Sub 100": "Under 100",
      "500-2.000": "500-2,000",
      "Peste 2.000": "Over 2,000",
      "Sub 25%": "Under 25%",
      "Peste 75%": "Over 75%",
      "Clientul nu răspunde la telefon": "Customer doesn't answer the phone",
      "S-a răzgândit": "Changed their mind",
      "A comandat același produs din mai multe locuri": "Ordered the same product from several places",
      "Comandă falsă": "Fake order",
      "Adresă greșită": "Wrong address",
      "Livrare întârziată": "Late delivery",
      Da: "Yes",
      "Da, cu condiții": "Yes, with conditions",
      Nu: "No",
      Nimic: "Nothing",
      "Sub 50 lei": "Under 50 RON",
      "50-150 lei": "50-150 RON",
      "150-300 lei": "150-300 RON",
      "Peste 300 lei": "Over 300 RON",
      Altele: "Other",
    },
  },
  wireframes: {
    badge: "Milestone 3: wireframe and landing page",
    title: "What RamburShield looks like",
    lead: "RamburShield isn't a separate app but a plugin that lives in the store's admin. So the wireframes show two points of view: what the merchant sees in WooCommerce, and what the customer sees when their order is high risk.",
    landingLabel: "See the landing page",
    flow: {
      title: "The main flow",
      text: "We drew the path of a high-risk order, because it's the only case where anyone notices RamburShield exists. The merchant sets the thresholds once, in the settings. Every new COD order then gets a score, shown right in the order list. If the score is high, the merchant opens the order, sees why it's risky and asks for a deposit. The customer pays the deposit from their phone and the parcel ships. The delivery outcome goes back into the model and the score gets better. For medium risk, the customer gets a confirmation SMS instead of the deposit page. For low risk, the order ships straight away.",
      image: "/wireframes/flux.png",
      alt: "Flow diagram: settings, order list, order detail, deposit page, shipping, with the delivery outcome fed back into the model",
    },
    screensTitle: "The screens",
    screens: [
      { title: "Order list", text: "The merchant sees the risk without changing anything about how they work today: the WooCommerce order list gets a new “Risk” column with the score and level. A filter shows only risky orders, so whoever packs the parcels knows first thing in the morning what to look at.", image: "/wireframes/comenzi.png", alt: "Wireframe: WooCommerce order list with a Risk column" },
      { title: "Order detail", text: "Next to the order sits the RamburShield box: the score, the signals behind it and the recommendation. We keep the signals visible so a merchant never asks for a deposit without knowing why. The “Delivery outcome” field closes the loop: it's what the model learns from.", image: "/wireframes/comanda.png", alt: "Wireframe: order detail with the RamburShield box" },
      { title: "Plugin settings", text: "The merchant decides from which score an order counts as risky and what happens at each level. The deposit can be a fixed amount or a percentage; in the example, 20% of 349 RON is 70 RON. The 0.30 and 0.70 thresholds are a starting point, and we'll calibrate them after the pilot.", image: "/wireframes/setari.png", alt: "Wireframe: plugin settings with thresholds and actions" },
      { title: "Deposit page", text: "It's the only screen the customer sees, so we designed it for the phone. It says clearly how much they pay now and how much on delivery, and leaves them the option to pay the whole order online.", image: "/wireframes/avans.png", alt: "Wireframe: mobile deposit payment page" },
    ],
    decisionsTitle: "What we decided in this milestone",
    decisions: [
      ["The score shows up in the store's admin, not at checkout", "At checkout we could have hidden COD automatically, but then the risky customer would notice right away, and we promised not to block anyone. This way the merchant stays the one who decides. Question Q22 in the interviews tells us whether that's the right call."],
      ["A deposit is the default for high risk", "In M2 we learned that some customers confirm by phone and then refuse anyway. A customer who has paid a deposit has a reason to pick up the parcel."],
    ],
  },
  milestones: {
    title: "Milestones",
    items: milestonesEn,
    labels: { done: "Done", current: "Now", upcoming: "Next" },
    expand: "Open milestones",
    collapse: "Close milestones",
  },
  footer: {
    sources: "Sources",
    note: "This page is our project log for Startup Engineering. The customer landing page is separate, and the link is in Milestone 3.",
  },
};

export const content: Record<Lang, Content> = { ro, en };
export const interviewFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScRVm5ZNhzPai3UP39MYGBt1KAZNSUnT6lhV7I0SqpKuFXy6Q/viewform?usp=dialog";
// TODO: pune aici link-ul public al landing page-ului (Netlify / Vercel).
export const landingPageUrl = "";
export { sources };
