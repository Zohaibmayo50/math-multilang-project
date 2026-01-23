// Number-specific metadata for Swedish language
export const numberTitlesSv: Record<number, string> = {
  1: '1 Multiplikationstabell | Lär Dig Multiplicera med 1',
  2: '2 Multiplikationstabell | Lär Dig Multiplicera med 2',
  3: '3 Multiplikationstabell | Lär Dig Multiplicera med 3',
  4: '4 Multiplikationstabell | Lär Dig Multiplicera med 4',
  5: '5 Multiplikationstabell | Lär Dig Multiplicera med 5',
  6: '6 Multiplikationstabell | Lär Dig Multiplicera med 6',
  7: '7 Multiplikationstabell | Lär Dig Multiplicera med 7',
  8: '8 Multiplikationstabell | Lär Dig Multiplicera med 8',
  9: '9 Multiplikationstabell | Lär Dig Multiplicera med 9',
  10: '10 Multiplikationstabell | Lär Dig Multiplicera med 10',
}

// Generate titles for 11-100 (following the pattern)
for (let i = 11; i <= 100; i++) {
  numberTitlesSv[i] = `${i} Multiplikationstabell | Lär Dig Multiplicera med ${i}`
}

export const numberDescriptionsSv: Record<number, string> = {
  1: 'Bemästra 1-multiplikationstabellen. Förstå identitetsegenskapen med tydliga förklaringar, mönster och praktiska strategier för att bygga grunden för alla multiplikationsoperationer.',
  2: '2-multiplikationstabellen. Lär dig multiplicera med 2 enkelt med fördubblingsteknik, mönster och praktiska strategier.',
  3: '3-multiplikationstabellen. Lär dig multiplicera med 3 enkelt med trippelgruppering, mönster och praktiska övningar.',
  4: '4-multiplikationstabellen. Lär dig multiplicera med 4 enkelt med dubbel fördubblingsteknik och praktiska strategier.',
  5: '5-multiplikationstabellen. Lär dig enkelt med femgruppering, klockliknande färdigheter och praktiska övningar.',
  6: '6-multiplikationstabellen. Lär dig multiplicera med 6 med sexgrupperingstekniker, mönster och praktiska strategier.',
  7: '7-multiplikationstabellen. Lär dig utan svårighet med strategier för multiplikation med 7, mönster och praktiska övningar.',
  8: '8-multiplikationstabellen. Lär dig med dubbel-fyra, dubbel-dubbel-två strategier och praktiska tekniker.',
  9: '9-multiplikationstabellen. Lär dig enkelt med fingerteknik, 10-minus-1-strategi och mönster.',
  10: '10-multiplikationstabellen. Lär dig den enklaste multiplikationstabellen med noll-tilläggs-regeln och praktiska strategier.',
}

// Generate descriptions for 11-100 (generic pattern)
for (let i = 11; i <= 100; i++) {
  numberDescriptionsSv[i] = `Bemästra ${i}-multiplikationstabellen. Lär dig multiplicera med ${i} enkelt med praktiska övningar, mönster och strategier.`
}

export const numberSpecialPropertiesSv: Record<number, string> = {
  1: 'Identitetsegenskap',
  2: 'Fördubbling',
  3: 'Trippelgruppering',
  4: 'Dubbel Fördubbling',
  5: 'Räkna med Femmor',
  6: 'Jämna Talmönster',
  7: 'Sju Dagars Vecka',
  8: 'Oktalsystem',
  9: 'Fingerteknik',
  10: 'Decimalsystem',
}

// Generic property for higher numbers
for (let i = 11; i <= 100; i++) {
  numberSpecialPropertiesSv[i] = `Multiplikation med ${i}`
}

export const rangeMetadataSv: Record<string, { title: string; description: string }> = {
  '1-10': {
    title: 'Multiplikationstabeller 1-10 | Grundläggande Multiplikation',
    description: 'Lär dig multiplikationstabellerna från 1 till 10 med interaktiva övningar, spel och praktiska strategier. Perfekt för nybörjare som vill bemästra grunderna.',
  },
  '11-20': {
    title: 'Multiplikationstabeller 11-20 | Mellanliggande Multiplikation',
    description: 'Bemästra multiplikationstabellerna från 11 till 20 med detaljerade förklaringar och praktiska övningar. Bygg på dina grundläggande färdigheter.',
  },
  '21-30': {
    title: 'Multiplikationstabeller 21-30 | Avancerad Multiplikation',
    description: 'Utforska multiplikationstabellerna från 21 till 30 med avancerade tekniker och strategier. Ta din multiplikationsfärdighet till nästa nivå.',
  },
  '31-40': {
    title: 'Multiplikationstabeller 31-40 | Expertmultiplikation',
    description: 'Träna multiplikationstabellerna från 31 till 40 med experttekniker. Utveckla snabbhet och noggrannhet i beräkningar.',
  },
  '41-50': {
    title: 'Multiplikationstabeller 41-50 | Hög Multiplikation',
    description: 'Lär dig multiplikationstabellerna från 41 till 50 med effektiva metoder. Perfekt för studenter som vill utmana sig själva.',
  },
  '51-60': {
    title: 'Multiplikationstabeller 51-60 | Avancerade Tekniker',
    description: 'Utforska multiplikationstabellerna från 51 till 60 med avancerade beräkningstekniker. Öka din matematiska kompetens.',
  },
  '61-70': {
    title: 'Multiplikationstabeller 61-70 | Matematisk Excellens',
    description: 'Bemästra multiplikationstabellerna från 61 till 70. Uppnå matematisk excellens med strukturerade övningar.',
  },
  '71-80': {
    title: 'Multiplikationstabeller 71-80 | Expertnivå',
    description: 'Träna multiplikationstabellerna från 71 till 80 på expertnivå. Utveckla avancerade beräkningsfärdigheter.',
  },
  '81-90': {
    title: 'Multiplikationstabeller 81-90 | Mästarnivå',
    description: 'Lär dig multiplikationstabellerna från 81 till 90 på mästarnivå. Uppnå full behärskning av multiplikation.',
  },
  '91-100': {
    title: 'Multiplikationstabeller 91-100 | Komplett Behärskning',
    description: 'Slutför din resa med multiplikationstabellerna från 91 till 100. Uppnå komplett behärskning av alla multiplikationstabeller.',
  },
}

export const guideMetadataSv = {
  students: {
    title: 'Multiplikationstabeller för Elever | Interaktivt Lärande',
    description: 'Lär dig multiplikationstabeller med roliga spel, interaktiva övningar och effektiva strategier. Perfekt för elever i alla åldrar.',
  },
  teachers: {
    title: 'Multiplikationstabeller för Lärare | Undervisningsresurser',
    description: 'Omfattande undervisningsresurser för att lära ut multiplikationstabeller. Innehåller lektionsplaner, aktiviteter och bedömningsverktyg.',
  },
  parents: {
    title: 'Multiplikationstabeller för Föräldrar | Hemstöd',
    description: 'Hjälp ditt barn att lära sig multiplikationstabeller hemma. Praktiska tips, aktiviteter och strategier för föräldrar.',
  },
}
