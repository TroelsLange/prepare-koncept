# Prepare 2027 – konceptprototype

Klikbar browserprototype af en fornyet FirstAgenda Prepare med AI og samarbejde på tværs af Visma Public Technologies (Prepare → XFlow → Plandisc). Bruges til intern demo. Al data er fiktiv (Vestby Kommune).

## Struktur
- `index.html` – skal, indlæser styles og scripts. Ingen build-trin, ingen afhængigheder.
- `styles.css` – al styling. Farver som CSS-variabler i `:root` (Prepare-blå `--blue`, navy `--navy`, Live-gradient `--live1/--live2`). Responsivt under 900px (rail bliver bundmenu).
- `data.js` – alt indhold: `MEETINGS` (møder → punkter med indstilling, beskrivelse, bilag, AI-resumé `sum`, spørgsmål/svar `qa`, kommentarer, afstemning `vote`, beslutningsudkast `decision`, opgaver `actions`), `TRACK` (beslutningssporing), `MEMORY` (kommunens hukommelse), `WHEEL` (årshjul).
- `app.js` – hash-router og visninger. Tilstand i objektet `S`. `render()` tegner hele appen igen.
- `logo.png` – valgfri. Hvis filen findes i roden, vises den i headeren; ellers et neutralt "P"-mærke.

## Ruter
- `#/` overblik · `#/moede/:mødeId/:punkt` forbered (mødedeltager) · `#/afvikl/:mødeId/:punkt` afvikling og beslutning (sekretariat)
- `#/handling/:mødeId/:punkt` beslutning → opgaver i XFlow/Plandisc · `#/opfolgning` beslutningssporing · `#/aarshjul` årshjul
- Møde-id'er: `ou` (Økonomiudvalget), `kmu` (Klima- og Miljøudvalget), `by` (Byrådet).

## Konventioner
- Al tekst i UI er på dansk.
- Nyt indhold tilføjes i `data.js`, ikke hårdkodet i `app.js`.
- Handlinger uden for konceptet giver en `toast(...)` frem for at være døde knapper.
- AI-svar er forhåndsskrevne og har altid kildehenvisninger (`src`).

## Kør lokalt
Åbn `index.html` direkte i en browser, eller `npx serve .`

## Deploy
Push til `main` på GitHub → Netlify (projekt `prepare-koncept`) udgiver automatisk på https://prepare-koncept.netlify.app
