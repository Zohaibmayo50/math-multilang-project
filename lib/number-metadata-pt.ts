// Number-specific metadata for Portuguese language (Brazilian Portuguese primary)
export const numberTitlesPt: Record<number, string> = {
  1: '1 Tabuada',
  2: '2 Tabuada',
  3: '3 Tabuada',
  4: '4 Tabuada',
  5: '5 Tabuada',
  6: '6 Tabuada',
  7: '7 Tabuada',
  8: '8 Tabuada',
  9: '9 Tabuada',
  10: '10 Tabuada',
}

// Generate titles for 11-100 (following the pattern)
for (let i = 11; i <= 100; i++) {
  numberTitlesPt[i] = `${i} Tabuada`
}

export const numberDescriptionsPt: Record<number, string> = {
  1: 'Domine a tabuada do 1. Entenda a propriedade de identidade com explicações claras, padrões e estratégias práticas para construir a base de todas as operações de multiplicação.',
  2: 'Tabuada do 2. Aprenda a multiplicar por 2 facilmente com a técnica de dobrar, padrões e estratégias práticas.',
  3: 'Tabuada do 3. Aprenda a multiplicar por 3 facilmente com agrupamento triplo, padrões e exercícios práticos.',
  4: 'Tabuada do 4. Aprenda a multiplicar por 4 facilmente com a técnica de dobrar duas vezes e estratégias práticas.',
  5: 'Tabuada do 5. Aprenda facilmente com agrupamento de cinco, habilidades de relógio e exercícios práticos.',
  6: 'Tabuada do 6. Aprenda a multiplicar por 6 com técnicas de agrupamento de seis, padrões e estratégias práticas.',
  7: 'Tabuada do 7. Aprenda sem dificuldade com estratégias para multiplicação por 7, padrões e exercícios práticos.',
  8: 'Tabuada do 8. Aprenda com estratégias de dobrar-quatro, dobrar-dobrar-dois e técnicas práticas.',
  9: 'Tabuada do 9. Aprenda facilmente com a técnica dos dedos, estratégia de 10-menos-1 e padrões.',
  10: 'Tabuada do 10. Aprenda a tabuada mais fácil com a regra de adicionar zero e estratégias práticas.',
}

// Generate descriptions for 11-100 (generic pattern)
for (let i = 11; i <= 100; i++) {
  numberDescriptionsPt[i] = `Domine a tabuada do ${i}. Aprenda a multiplicar por ${i} facilmente com exercícios práticos, padrões e estratégias.`
}

export const numberSpecialPropertiesPt: Record<number, string> = {
  1: 'Propriedade de Identidade',
  2: 'Dobrar',
  3: 'Agrupamento Triplo',
  4: 'Dobrar Duas Vezes',
  5: 'Contar de Cinco em Cinco',
  6: 'Padrão de Números Pares',
  7: 'Sete Dias da Semana',
  8: 'Sistema Octal',
  9: 'Técnica dos Dedos',
  10: 'Sistema Decimal',
}

// Generic property for higher numbers
for (let i = 11; i <= 100; i++) {
  numberSpecialPropertiesPt[i] = `Multiplicação por ${i}`
}

export const rangeMetadataPt: Record<string, { title: string; description: string }> = {
  '1-10': {
    title: 'Tabuada de 1 a 10',
    description: 'Aprenda as tabuadas de 1 a 10 com exercícios interativos, jogos e estratégias práticas. Perfeito para iniciantes que querem dominar o básico.',
  },
  '11-20': {
    title: 'Tabuada de 11 a 20',
    description: 'Domine as tabuadas de 11 a 20 com técnicas avançadas, padrões e exercícios práticos para estudantes de nível intermediário.',
  },
  '21-30': {
    title: 'Tabuada de 21 a 30',
    description: 'Aprenda as tabuadas de 21 a 30 com estratégias práticas e exercícios desafiadores para aprimorar suas habilidades de multiplicação.',
  },
  '31-40': {
    title: 'Tabuada de 31 a 40',
    description: 'Domine as tabuadas de 31 a 40 com técnicas avançadas e exercícios práticos para estudantes experientes.',
  },
  '41-50': {
    title: 'Tabuada de 41 a 50',
    description: 'Aprenda as tabuadas de 41 a 50 com estratégias especializadas e exercícios desafiadores para domínio completo.',
  },
  '51-60': {
    title: 'Tabuada de 51 a 60',
    description: 'Domine as tabuadas de 51 a 60 com técnicas avançadas e exercícios práticos para operações mais complexas.',
  },
  '61-70': {
    title: 'Tabuada de 61 a 70',
    description: 'Aprenda as tabuadas de 61 a 70 com estratégias experientes e exercícios práticos para domínio total.',
  },
  '71-80': {
    title: 'Tabuada de 71 a 80',
    description: 'Domine as tabuadas de 71 a 80 com técnicas especializadas e os exercícios mais desafiadores.',
  },
  '81-90': {
    title: 'Tabuada de 81 a 90',
    description: 'Aprenda as tabuadas de 81 a 90 com estratégias avançadas para o nível máximo de dificuldade.',
  },
  '91-100': {
    title: 'Tabuada de 91 a 100',
    description: 'Complete as tabuadas de 91 a 100 e torne-se um mestre da multiplicação!',
  },
}

export const guideMetadataPt: Record<string, { title: string; description: string }> = {
  'para-estudantes': {
    title: 'Guia de Tabuada para Estudantes',
    description: 'Guia passo a passo para aprender a tabuada facilmente. Aprenda no seu próprio ritmo com materiais visuais, atividades práticas e jogos divertidos!',
  },
  'para-professores': {
    title: 'Guia de Tabuada para Professores',
    description: 'Recursos abrangentes para professores sobre como ensinar a tabuada de forma eficaz. Inclui estratégias pedagógicas, atividades em sala de aula, ensino diferenciado e métodos de avaliação.',
  },
  'para-pais': {
    title: 'Guia de Tabuada para Pais',
    description: 'Como apoiar o aprendizado da tabuada do seu filho em casa. Dicas práticas, jogos educativos e estratégias de motivação.',
  },
}
