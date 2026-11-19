# Status – Prepare 2027 konceptprototype

Sidst opdateret: 19.11.2026 (session #1)

**Live:** https://prepare-koncept.netlify.app · **Session-overblik:** Notion-siden "FirstAgenda Session #1"

## Færdigt

| Område | Beskrivelse | PR |
| --- | --- | --- |
| Logo | Officielt FirstAgenda Prepare-logo (`logo.png`) i headeren; HTML-tekst kun som reserve | [#1](https://github.com/TroelsLange/prepare-koncept/pull/1) |
| Header og sidemenu | Som i Prepare: kommunevælger, initial-badge, sidemenu med fyldte ikoner. Søgning/klokke fjernet fra header (notifikationer i profilmenu) | [#2](https://github.com/TroelsLange/prepare-koncept/pull/2) |
| Afvikling (`#/afvikl`) | 1:1 med Prepare-skærmbillede: mødeboks, faner, Sortér, punktliste med pil, Tilføj nyt punkt, Bilag-sektion, gemt-status | [#2](https://github.com/TroelsLange/prepare-koncept/pull/2) |
| Designsystem | Prepare-farver (`#0071c3`, `#123151`, `#0f6dba`, `#f4f8fb`) og Roboto | [#2](https://github.com/TroelsLange/prepare-koncept/pull/2) |
| Forbered (`#/moede`) | Samme Prepare-stil: mødeboks, punktliste, hvid værktøjslinje, blå overskrifter, AI-panel med faner | [#3](https://github.com/TroelsLange/prepare-koncept/pull/3) |

Uændret fra før sessionen: Overblik, Beslutning → handling, Beslutningssporing og Årshjul (har fået ny header og sidemenu, men ikke detaljeret restyling).

## Åbne punkter

- [ ] Verificér live-sitet efter Netlify-deploy (kunne ikke tjekkes fra cloud-containeren)
- [ ] Ret Forbered-visningen helt ind efter et skærmbillede af Prepares egen deltagervisning
- [ ] Restyle Overblik, Beslutning → handling, Beslutningssporing og Årshjul i detaljer
- [ ] Beslut om Roboto skal hentes fra Google Fonts eller lægges lokalt i repoet

## Sådan testes

Åbn `index.html` i en browser. Tjek mindst 1440px, 1120px og 390px (mobil). Demo-forløb: Overblik → Forbered (ØU punkt 3) → Live → Afvikl → Næste skridt → Beslutningssporing.
