# Prepare 2027 – konceptprototype

Klikbar browserprototype af en fornyet FirstAgenda Prepare med AI og samarbejde på tværs af Visma Public Technologies (Prepare → XFlow → Plandisc). Bruges til intern demo. Al data er fiktiv (Vestby Kommune).

## Struktur
- `index.html` – skal, indlæser styles og scripts. Ingen build-trin. Eneste eksterne ressource er Roboto fra Google Fonts (falder tilbage til systemskrift).
- `styles.css` – al styling. Farver som CSS-variabler i `:root` (Prepare-blå `--blue` #0071c3, navy `--navy` #123151, link/overskrift `--link` #0f6dba, baggrund `--bg` #f4f8fb, Live-gradient `--live1/--live2`). Responsivt under 900px (rail bliver bundmenu).
- `data.js` – alt indhold: `MEETINGS` (møder → punkter med indstilling, beskrivelse, bilag, AI-resumé `sum`, spørgsmål/svar `qa`, kommentarer, afstemning `vote`, beslutningsudkast `decision`, opgaver `actions`), `TRACK` (beslutningssporing), `MEMORY` (kommunens hukommelse), `WHEEL` (årshjul).
- `app.js` – hash-router og visninger. Tilstand i objektet `S`. `render()` tegner hele appen igen. Ikoner: `ic` (stregikoner) og `fi` (fyldte ikoner i FirstAgenda-stil, bruges i sidemenu, mødeboks og runde knapper).
- `logo.png` – officielt FirstAgenda Prepare-logo med ordmærke. Mangler filen, vises et neutralt "P"-mærke med teksten "FirstAgenda Prepare".
- `STATUS.md` – hvad der er lavet, og hvad der mangler. Opdatér den, når du afslutter en arbejdsopgave.

## Ruter
- `#/` overblik · `#/moede/:mødeId/:punkt` forbered (mødedeltager) · `#/afvikl/:mødeId/:punkt` afvikling og beslutning (sekretariat)
- `#/handling/:mødeId/:punkt` beslutning → opgaver i XFlow/Plandisc · `#/opfolgning` beslutningssporing · `#/aarshjul` årshjul
- Møde-id'er: `ou` (Økonomiudvalget), `kmu` (Klima- og Miljøudvalget), `by` (Byrådet).

## Konventioner
- Al tekst i UI er på dansk.
- Nyt indhold tilføjes i `data.js`, ikke hårdkodet i `app.js`.
- Handlinger uden for konceptet giver en `toast(...)` frem for at være døde knapper.
- AI-svar er forhåndsskrevne og har altid kildehenvisninger (`src`).

## Designsprog (FirstAgenda Prepare)
UI'et skal ligne den rigtige Prepare-webapp. Genbrug de eksisterende klasser frem for at opfinde nye:
- Header: burgermenu, logo, kommunevælger (`.orgsel`), stort initial-badge (`.wava`). Ingen søgning/klokke i headeren – notifikationer ligger i profilmenuen.
- Sidemenu (`.rail`): kun fyldte ikoner (`fi`), aktivt punkt med hvid ring, navn som tooltip (`.tip`).
- Flade hvide kort på lys blågrå baggrund, hjørner 2px. Mødeboks `.mbox`/`.smeet` med fyldte ikoner i `.mrow`.
- Runde, blå-omkransede ikonknapper: `.cbtn`. Nummer i blå cirkel: `.ncirc`/`.circ`.
- Faner (`.wtabs`, `.seg`): store bogstaver, aktiv fane fed med blå topstreg.
- Sektionsoverskrifter (`.wsec h5`, `.page h4`): blå, fed, store bogstaver.
- Valgt punkt i lister (`.aitem.on`, `.scard.on`): sort ramme og pil mod højre.
- Upload/tilføj-felter: stiplet blå kant (`.drop`, `.addpt`).
- Knapper: `.btn-p` (blå), `.btn-o` (hvid med lys kant og blå tekst), normal skriftvægt.

## Kør lokalt
Åbn `index.html` direkte i en browser, eller `npx serve .`

## Deploy
Push til `main` på GitHub → Netlify (projekt `prepare-koncept`) udgiver automatisk på https://prepare-koncept.netlify.app

Arbejd på en feature-branch, opret en pull request og merge til `main`.
