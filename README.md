# RamburShield · Fiki

Fiki-ul (one-pager) proiectului RamburShield pentru cursul Startup Engineering (UPB).

- Next.js 15 (App Router) + Tailwind v4, RO/EN.
- Tot conținutul e în `content/fiki.ts`. Pentru un milestone nou adaugi date acolo, nu în componente.
- Poze echipă: pune fișierul în `public/team/` și setează `photo: "/team/nume.jpg"` pe membru.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Deploy: Railway (Railpack detectează Next.js; `npm run build` + `npm start`, portul vine din `PORT`).
