// Fiktive data til konceptprototypen. Vestby Kommune findes ikke.
const USER = { name: 'Mette Holm', initials: 'MH', role: 'Byrådsmedlem', committees: 'Økonomiudvalget, Klima- og Miljøudvalget' };

const MEETINGS = [
  {
    id: 'ou', name: 'Økonomiudvalget', date: '09.12.2026', d: '9', mon: 'dec', time: '15:00 – 17:00',
    place: 'Rådhuset, mødelokale 1', pages: 112, status: ['t-green', 'Klar til forberedelse'],
    items: [
      {
        t: 'Godkendelse af dagsorden', type: 'Beslutningssag', pages: 1,
        ind: ['at dagsordenen godkendes.'],
        desc: ['Dagsordenen er udsendt i henhold til styrelsesvedtægten.'],
        bilag: [],
        sum: [['Formalia – ingen bemærkninger fra forvaltningen.', 'Indstilling']],
        qa: [], comments: [],
        vote: null, decision: 'Godkendt.', actions: []
      },
      {
        t: 'Budgetopfølgning 3. kvartal 2026', type: 'Beslutningssag', pages: 24,
        ind: ['at budgetopfølgningen tages til efterretning,', 'at der gives en tillægsbevilling på 4,2 mio. kr. til det specialiserede børneområde.'],
        desc: ['Budgetopfølgningen viser et forventet merforbrug på serviceudgifterne på 6,8 mio. kr., primært på det specialiserede børneområde og ældreområdet.',
               'Forvaltningen foreslår, at merforbruget på børneområdet dækkes af kassebeholdningen, mens ældreområdet håndterer merforbruget inden for egen ramme.'],
        econ: 'Kassebeholdningen nedskrives med 4,2 mio. kr. Den forventede gennemsnitlige likviditet er herefter 182 mio. kr.',
        bilag: [['Budgetopfølgning Q3 2026', 19], ['Notat om børneområdet', 5]],
        sum: [['Forventet merforbrug på <b>6,8 mio. kr.</b> på serviceudgifterne.', 'Bilag 1, s. 3'],
              ['Tillægsbevilling på <b>4,2 mio. kr.</b> til det specialiserede børneområde.', 'Indstilling'],
              ['Ældreområdet skal finde 2,6 mio. kr. inden for egen ramme.', 'Bilag 1, s. 11']],
        qa: [{ q: 'Hvorfor stiger udgifterne på børneområdet?', a: 'Stigningen skyldes primært 9 flere anbringelser end budgetteret og højere priser på private opholdssteder.', s: ['Bilag 2, s. 2'] },
             { q: 'Hvad betyder det for kassebeholdningen?', a: 'Kassebeholdningen falder med 4,2 mio. kr. til en forventet gennemsnitlig likviditet på 182 mio. kr., hvilket stadig er over kommunens politiske mål på 150 mio. kr.', s: ['Bilag 1, s. 15'] }],
        comments: [{ who: 'Lise Holm', time: '7.dec., 09:40', txt: 'Hvad er planen for at nedbringe antallet af anbringelser næste år?' }],
        vote: [9, 0, 0], decision: 'Taget til efterretning. Tillægsbevilling på 4,2 mio. kr. anbefales godkendt over for Byrådet.',
        actions: [['XF', 't-blue', 'Opgave: Handleplan for børneområdet', 'Til Børn og Unge · frist 1. februar 2027', 'XFlow']]
      },
      {
        t: 'Klimahandleplan 2027–2030', type: 'Beslutningssag', pages: 69, main: true,
        ind: ['at Klimahandleplan 2027–2030 godkendes,', 'at planen sendes i borgerhøring om de lokale delindsatser,', 'at der afrapporteres årligt til Byrådet.'],
        desc: ['Byrådet vedtog i 2022 kommunens første klimahandleplan. Forvaltningen har nu udarbejdet en ny plan, der skærper målet for CO₂-reduktion til <span class="mark-g">70 % i 2030 i forhold til 1990</span>.',
               'Planen har været i offentlig høring fra 15. september til 27. oktober 2026, og der er indkommet 46 høringssvar. Forvaltningen har på baggrund af høringen justeret indsatsen for kollektiv trafik i landdistrikterne.'],
        econ: 'Den samlede anlægsudgift udgør 38,5 mio. kr. over fire år. Heraf er 21 mio. kr. afsat i budget 2027.',
        bilag: [['Klimahandleplan 2027–2030', 42], ['Høringsnotat', 18], ['Økonomisk konsekvensvurdering', 9]],
        sum: [['Nyt mål: <b>70 % CO₂-reduktion i 2030</b> (før 60 %).', 'Bilag 1, s. 4'],
              ['Samlet pris <b>38,5 mio. kr.</b> – 17,5 mio. kr. er ikke finansieret efter 2027.', 'Bilag 3, s. 5'],
              ['46 høringssvar; mest kritik af kollektiv trafik i landdistrikter.', 'Bilag 2, s. 3'],
              ['Indstillingen kræver <b>borgerhøring</b> og <b>årlig afrapportering</b>.', 'Indstilling']],
        memory: 'Byrådet vedtog Klimahandleplan 2022–2026 d. 14.03.2022 (pkt. 7). Status: 4 af 6 indsatser gennemført, 2 forsinket.',
        qa: [{ q: 'Hvad koster planen?', a: 'Planen har en samlet anlægsudgift på 38,5 mio. kr. over fire år. Heraf er 21 mio. kr. allerede afsat i budget 2027, mens de resterende 17,5 mio. kr. kræver prioritering i budget 2028–2030.', s: ['Bilag 3, s. 2', 'Bilag 3, s. 5'] },
             { q: 'Hvad sagde høringssvarene?', a: 'Der kom 46 høringssvar. Hovedparten støtter planen. Kritikken handler især om kollektiv trafik i landdistrikterne (14 svar) og tempoet i udfasning af oliefyr (9 svar).', s: ['Bilag 2, s. 3–7'] },
             { q: 'Hvad er ændret siden 2022?', a: 'Målet er skærpet fra 60 % til 70 % CO₂-reduktion i 2030. Nyt er et særskilt spor for landbrug og krav om årlig afrapportering til Byrådet.', s: ['Bilag 1, s. 4', 'BY 14.03.2022, pkt. 7'] },
             { q: 'Hvilke risici er der?', a: 'Forvaltningen peger på afhængighed af statslige puljemidler, mangel på håndværkere til energirenoveringer og usikre priser på varmepumper.', s: ['Bilag 3, s. 8'] }],
        comments: [{ who: 'Anders Krogh', time: '8.dec., 14:25', txt: 'Kan vi få belyst konsekvenserne for landbruget inden Byrådet?' },
                   { who: 'Dig', time: '8.dec., 16:02', txt: 'Enig – og finansieringen efter 2027. Hvad hvis puljemidlerne udebliver?' }],
        vote: [7, 2, 0],
        decision: 'Anbefales godkendt over for Byrådet med 7 stemmer for og 2 imod (V). Udvalget bad forvaltningen om at belyse konsekvenserne for landbruget inden Byrådets behandling.<br><br>Planen sendes i borgerhøring om de lokale delindsatser i 8 uger. Der afrapporteres årligt til Byrådet, første gang i juni 2027.',
        actions: [['XF', 't-blue', 'Borgerhøring om lokale klimaindsatser', 'Selvbetjeningsløsning med høringsformular, 8 uger, publiceres på kommunens hjemmeside', 'XFlow'],
                  ['XF', 't-blue', 'Opgave: Konsekvensnotat for landbruget', 'Til Teknik og Miljø · frist 14. december 2026 · klar til Byrådets møde 16. december', 'XFlow'],
                  ['PD', 't-violet', 'Årlig afrapportering til Byrådet', 'Statusrapport lægges i årshjulet – første gang juni 2027', 'Plandisc']]
      },
      {
        t: 'Udbud af kantinedrift', type: 'Beslutningssag', pages: 12,
        ind: ['at kantinedriften på rådhuset sendes i udbud med krav om 60 % økologi.'],
        desc: ['Den nuværende kontrakt udløber 31. august 2027. Forvaltningen anbefaler et udbud med skærpede krav til økologi og madspild.'],
        econ: 'Forventet kontraktsum 3,1 mio. kr. årligt, svarende til nuværende niveau.',
        bilag: [['Udbudsstrategi', 12]],
        sum: [['Kontrakten udløber <b>31. august 2027</b>.', 'Sagsfremstilling'], ['Krav om <b>60 % økologi</b> og måling af madspild.', 'Bilag 1, s. 4']],
        qa: [{ q: 'Bliver det dyrere?', a: 'Forvaltningen forventer en uændret kontraktsum på ca. 3,1 mio. kr. årligt, fordi øget økologi modsvares af mindre madspild.', s: ['Bilag 1, s. 7'] }],
        comments: [],
        vote: [9, 0, 0], decision: 'Godkendt som indstillet.',
        actions: [['XF', 't-blue', 'Udbudsproces for kantinedrift', 'Til Indkøb · udbud offentliggøres 1. marts 2027', 'XFlow']]
      },
      { t: 'Personalesag', type: 'Lukket punkt', lock: true, pages: 3, ind: [], desc: [], bilag: [], sum: [], qa: [], comments: [], vote: null, decision: 'Godkendt.', actions: [] }
    ]
  },
  {
    id: 'kmu', name: 'Klima- og Miljøudvalget', date: '11.12.2026', d: '11', mon: 'dec', time: '16:00 – 18:00',
    place: 'Rådhuset, mødelokale 3', pages: 64, status: ['t-amber', 'Bilag tilføjet i dag'],
    items: [
      { t: 'Godkendelse af dagsorden', type: 'Beslutningssag', pages: 1, ind: ['at dagsordenen godkendes.'], desc: ['Dagsordenen er udsendt rettidigt.'], bilag: [], sum: [['Formalia.', 'Indstilling']], qa: [], comments: [], vote: null, decision: 'Godkendt.', actions: [] },
      {
        t: 'Plan for klimatilpasning ved Vestby Å', type: 'Beslutningssag', pages: 41,
        ind: ['at forslag til klimatilpasning ved Vestby Å sendes i høring.'],
        desc: ['Kraftige regnhændelser har tre gange siden 2023 givet oversvømmelser i den nordlige bydel. Forvaltningen foreslår et regnvandsbassin og forhøjede diger.'],
        econ: 'Anlægsudgift 12,4 mio. kr., heraf 60 % finansieret af forsyningen.',
        bilag: [['Projektbeskrivelse', 28], ['Miljøscreening', 13]],
        sum: [['Tre oversvømmelser siden 2023.', 'Sagsfremstilling'], ['Pris <b>12,4 mio. kr.</b>, 60 % betales af forsyningen.', 'Bilag 1, s. 9']],
        qa: [{ q: 'Hvem betaler?', a: 'Vestby Forsyning betaler 60 % via vandtaksterne. Kommunens andel er 4,96 mio. kr.', s: ['Bilag 1, s. 9'] }],
        comments: [], vote: [7, 0, 0], decision: 'Sendes i høring som indstillet.',
        actions: [['XF', 't-blue', 'Høring om klimatilpasning ved Vestby Å', 'Selvbetjeningsløsning, 6 uger', 'XFlow']]
      },
      {
        t: 'Orientering om affaldssortering', type: 'Orienteringssag', pages: 22,
        ind: ['at orienteringen tages til efterretning.'],
        desc: ['Sorteringsgraden for husholdningsaffald er steget fra 41 % til 53 % siden indførelsen af 10-fraktionsordningen.'],
        bilag: [['Statusrapport affald 2026', 22]],
        sum: [['Sorteringsgraden er steget til <b>53 %</b>.', 'Bilag 1, s. 2']],
        qa: [], comments: [], vote: null, decision: 'Taget til efterretning.', actions: []
      }
    ]
  },
  {
    id: 'by', name: 'Byrådet', date: '16.12.2026', d: '16', mon: 'dec', time: '17:00 – 21:00',
    place: 'Byrådssalen', pages: 38, status: ['t-grey', 'Udsendes 9. dec.'],
    items: [
      { t: 'Godkendelse af dagsorden', type: 'Beslutningssag', pages: 1, ind: ['at dagsordenen godkendes.'], desc: ['Dagsordenen er udsendt rettidigt.'], bilag: [], sum: [['Formalia.', 'Indstilling']], qa: [], comments: [], vote: null, decision: 'Godkendt.', actions: [] },
      {
        t: 'Klimahandleplan 2027–2030', type: 'Beslutningssag', pages: 2,
        ind: ['at Klimahandleplan 2027–2030 godkendes.'],
        desc: ['Økonomiudvalget behandlede sagen 9. december 2026 og anbefaler planen godkendt (7 for, 2 imod). Konsekvensnotat for landbruget eftersendes.'],
        bilag: [['Konsekvensnotat for landbruget (eftersendes)', 0]],
        sum: [['Anbefalet af Økonomiudvalget med 7 stemmer for og 2 imod.', 'ØU 09.12.2026, pkt. 3']],
        qa: [], comments: [], vote: [21, 4, 0], decision: 'Godkendt.', actions: []
      },
      {
        t: 'Tillægsbevilling til det specialiserede børneområde', type: 'Beslutningssag', pages: 2,
        ind: ['at der gives en tillægsbevilling på 4,2 mio. kr.'],
        desc: ['Økonomiudvalget anbefaler tillægsbevillingen godkendt.'],
        bilag: [], sum: [['Anbefalet enstemmigt af Økonomiudvalget.', 'ØU 09.12.2026, pkt. 2']],
        qa: [], comments: [], vote: [25, 0, 0], decision: 'Godkendt.', actions: []
      }
    ]
  }
];

const TRACK = [
  { t: 'Klimahandleplan 2022–2026', u: 'BY', d: '14.03.22', o: 'Teknik og Miljø', p: 67, s: ['t-amber', 'Forsinket'],
    log: [['#2fa84f', '2022', 'Energirenovering af 14 skoler – gennemført'], ['#2fa84f', '2023', 'Elbusser på 3 bybuslinjer – gennemført'], ['#2fa84f', '2024', 'Solceller på kommunale tage – gennemført'], ['#2fa84f', '2025', 'Grønne indkøbskrav – gennemført'], ['#f2a33a', '2026', 'Flextrafik i landdistrikter – forsinket'], ['#f2a33a', '2026', 'Udfasning af oliefyr – forsinket']] },
  { t: 'Ny skolestruktur, Nordområdet', u: 'BY', d: '27.05.25', o: 'Børn og Unge', p: 85, s: ['t-blue', 'I gang'],
    log: [['#2fa84f', 'Aug 2025', 'Høring gennemført (XFlow)'], ['#2fa84f', 'Jan 2026', 'Sammenlægning af to skoler'], ['#1777cf', 'Aug 2027', 'Ny overbygning åbner']] },
  { t: 'Digital borgerservice 2026', u: 'ØU', d: '12.02.26', o: 'Borgerservice', p: 100, s: ['t-grey', 'Gennemført'],
    log: [['#2fa84f', 'Mar 2026', '22 nye selvbetjeningsløsninger i XFlow'], ['#2fa84f', 'Okt 2026', 'Evaluering forelagt udvalget']] },
  { t: 'Udbud af ældremad', u: 'SSU', d: '03.09.25', o: 'Sundhed og Omsorg', p: 40, s: ['t-red', 'Frist overskredet'],
    log: [['#2fa84f', 'Okt 2025', 'Udbudsmateriale udarbejdet'], ['#e23b3b', 'Jun 2026', 'Kontraktstart – overskredet, klage behandles']] },
  { t: 'Ny cykelstiplan', u: 'TMU', d: '19.11.25', o: 'Teknik og Miljø', p: 30, s: ['t-blue', 'I gang'],
    log: [['#2fa84f', 'Feb 2026', 'Borgerinddragelse gennemført'], ['#1777cf', 'Maj 2027', 'Første etape anlægges']] }
];

const MEMORY = [
  { k: /trafik|bus|land/, t: 'kollektiv trafik i landdistrikterne', r: [
    ['Byrådet 14.03.2022', 'Pulje på 2 mio. kr. til flextrafik i landdistrikter', 'BY pkt. 7'],
    ['Klima- og Miljøudvalget 05.06.2024', 'Forsøg med samkørsel i 3 landsbyer – lav brug ved evaluering', 'KMU pkt. 4'],
    ['Økonomiudvalget 09.12.2026', 'Indsatsen justeret efter 14 høringssvar', 'ØU pkt. 3']] },
  { k: /skole|børn|anbring/, t: 'skoler og børneområdet', r: [
    ['Byrådet 27.05.2025', 'Ny skolestruktur i Nordområdet vedtaget', 'BY pkt. 12'],
    ['Økonomiudvalget 09.12.2026', 'Tillægsbevilling på 4,2 mio. kr. til det specialiserede børneområde', 'ØU pkt. 2']] },
  { k: /klima|co2|co₂|energi/, t: 'klima og energi', r: [
    ['Byrådet 14.03.2022', 'Klimahandleplan 2022–2026 vedtaget – mål om 60 % reduktion', 'BY pkt. 7'],
    ['Økonomiudvalget 09.12.2026', 'Klimahandleplan 2027–2030 anbefalet – mål om 70 % reduktion', 'ØU pkt. 3']] }
];

const WHEEL = [
  { m: 0, t: 'Budgetseminar', c: '#e23b3b' }, { m: 2, t: 'Regnskab 2026', c: '#1777cf' },
  { m: 5, t: 'Klimastatus til Byrådet', c: '#7a5af5' }, { m: 7, t: 'Budgetforhandlinger', c: '#2fa84f' },
  { m: 11, t: 'Økonomiudvalget 9. dec.', c: '#2fa84f', go: 'ou' }, { m: 11, t: 'Klima- og Miljøudvalget 11. dec.', c: '#f2a33a', go: 'kmu' },
  { m: 11, t: 'Byrådet 16. dec.', c: '#1777cf', go: 'by' }
];
