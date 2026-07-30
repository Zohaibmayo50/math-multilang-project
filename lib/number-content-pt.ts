// AUTO-EXTRACTED verbatim from app/components/pt/NumberPage.tsx
// Per-number curated content for locale: pt
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

const meanings: { [key: number]: string } = {
      1: "Multiplicar por 1 é um caso especial em matemática. Quando você multiplica qualquer número por 1, o resultado é sempre o mesmo número. Isso é chamado de propriedade de identidade da multiplicação. Pense assim: 'Quantos grupos eu tenho?' Se você tem apenas 1 grupo, você tem exatamente o que começou.",
      2: "Multiplicar por 2 significa dobrar um número. Quando você multiplica algo por 2, você adiciona o número a si mesmo. Esta é uma das tabuadas mais práticas porque frequentemente precisamos dobrar coisas no dia a dia — contar pares de sapatos, rodas de bicicleta ou dividir algo igualmente entre duas pessoas.",
      3: "Multiplicar por 3 significa pegar um número três vezes. Você pode pensar nisso como adicionar o mesmo número a si mesmo três vezes. Esta tabuada é importante para entender triângulos, triplos e tudo que vem em grupos de três.",
      4: "Multiplicar por 4 é como dobrar duas vezes. Como 4 = 2 × 2, você pode dobrar um número e depois dobrar o resultado novamente. Isso torna a tabuada do 4 mais fácil de aprender se você já conhece a tabuada do 2. O número 4 ocorre frequentemente em geometria (quadrados têm 4 lados) e medição de tempo (existem 4 trimestres).",
      5: "Multiplicar por 5 cria um dos padrões mais bonitos em matemática. Todos os múltiplos de 5 terminam com 0 ou 5, tornando esta tabuada muito previsível. É extremamente útil para contar dinheiro (moedas de 5 reais, notas de 5 reais) e ler o relógio (intervalos de 5 minutos).",
      6: "Multiplicar por 6 significa pegar grupos de seis números. O 6 é a primeira tabuada 'real' porque não é apenas um múltiplo de 2 ou 3. Mas como 6 = 2 × 3, você pode multiplicar um número por 2 e depois por 3 (ou vice-versa) para multiplicar por 6. O número 6 ocorre frequentemente na natureza (células de favos de mel) e no dia a dia (caixas de ovos, lados de um dado).",
      7: "Multiplicar por 7 é geralmente uma das tabuadas mais difíceis para os alunos, porque 7 é um número primo e não pode ser facilmente derivado de outras tabuadas. Mas todos os múltiplos de 7 têm belos padrões e podem ser aprendidos através da prática. O 7 é um número importante para dias da semana, continentes e muitas referências culturais.",
      8: "Multiplicar por 8 é como dobrar três vezes (8 = 2 × 2 × 2). Dobre o número, dobre o resultado novamente e dobre mais uma vez — então você multiplicou por 8. Esta tabuada é mais fácil de aprender quando você conhece bem as tabuadas do 2 e do 4. O 8 é um número importante em geometria (octógonos) e música (oitavas).",
      9: "Multiplicar por 9 tem um dos padrões mais fascinantes em matemática. Quando você soma os dígitos de qualquer múltiplo de 9, o resultado é sempre divisível por 9. Além disso, a dezena em 9 × n é sempre n-1. Esta tabuada também pode ser aprendida com truques de dedos. Como 9 é apenas 1 menor que 10, também pode ser calculada usando a tabuada do 10.",
      10: "Multiplicar por 10 é uma das tabuadas mais fáceis. Quando você multiplica qualquer número por 10, você apenas adiciona um zero no final. Isso forma a base do nosso sistema decimal. Aprender a multiplicar por 10 ensina aos alunos o conceito de valor posicional e como trabalhar com números grandes. A tabuada do 10 é o ponto de referência para entender todas as outras tabuadas.",
      11: "Multiplicar por 11 tem um dos padrões mais interessantes em matemática. Quando você multiplica números de um dígito por 11, o resultado é esse número repetido duas vezes (11×3=33, 11×7=77). Na multiplicação de números de dois dígitos por 11, também existe um belo padrão: você soma os dígitos e os coloca no meio. O 11 é um número primo e tem propriedades matemáticas especiais.",
      12: "Multiplicar por 12 é uma das tabuadas mais práticas, porque 12 é divisível por muitos números (1, 2, 3, 4, 6, 12). Esta propriedade torna o 12 muito útil no dia a dia — existem 12 itens em uma dúzia, 12 horas no relógio, 12 meses no ano. Como 12 = 3 × 4 = 2 × 6, você pode aprender esta tabuada de várias maneiras.",
      13: "Multiplicar por 13 desenvolve o reconhecimento de padrões dos alunos. O 13 é um número primo, então não pode ser facilmente derivado de outras tabuadas. Mas é muito útil pensar no 13 como 10+3: multiplicar um número por 13 significa multiplicá-lo por 10 e adicionar o resultado da multiplicação por 3. O 13 é um número com significado especial em muitas culturas.",
      14: "Multiplicar por 14 é o dobro da tabuada do 7. Como 14 = 2 × 7, se você conhece a tabuada do 7, pode dobrar cada resultado e obter a tabuada do 14. O 14 é importante no planejamento semanal (2 semanas = 14 dias) e mostra as propriedades dos números pares.",
      15: "Multiplicar por 15 combina múltiplos de 3 e 5. Como 15 = 3 × 5, esta tabuada carrega as propriedades de ambos os números. Todos os múltiplos de 15 são divisíveis por 3 e 5. Como 15 minutos são um quarto de hora, é frequentemente usado em cálculos de tempo.",
      16: "Multiplicar por 16 é a quarta potência de 2 (2×2×2×2=16). Isso permite aprender a tabuada do 16 através de cadeias de dobramento. Você pode dobrar 8 e obter 16. Em ciência da computação, 16 é um número importante (sistema hexadecimal) e ocorre frequentemente também no dia a dia.",
      17: "Multiplicar por 17 pode ser difícil devido às suas propriedades de número primo. O 17 não pode ser facilmente derivado de outras tabuadas. Mas ajuda pensar no 17 como 20-3 ou 10+7. Aprender a tabuada do 17 desenvolve habilidades de aritmética mental e estratégias de resolução de problemas.",
      18: "Multiplicar por 18 tem muitas abordagens. Como 18 = 2 × 9 = 3 × 6, você pode aprender esta tabuada de várias maneiras. Dobrar a tabuada do 9 ou triplicar a tabuada do 6 resulta na tabuada do 18. O 18 é importante como idade da maioridade em muitos países.",
      19: "Multiplicar por 19 não pode ser derivado de outras tabuadas, porque 19 é um número primo. Mas é muito prático pensar no 19 como 20-1: multiplique o número por 20 e subtraia o próprio número. Esta estratégia torna o cálculo da tabuada do 19 de cabeça muito mais fácil.",
      20: "Multiplicar por 20 é uma continuação natural da tabuada do 10. Quando você multiplica qualquer número por 20, pode multiplicá-lo por 10 e dobrar o resultado. Ou apenas adicione um zero no final e dobre. A tabuada do 20 é usada continuamente em cálculos de dinheiro (20 reais) e medições (20 metros, 20 quilogramas).",
    }

const importance: { [key: number]: string } = {
      1: "A tabuada do 1 é a base de todas as operações de multiplicação. Ela ensina aos alunos que os números têm uma identidade: quando multiplicados por 1, permanecem inalterados. Este conceito é importante para entender propriedades algébricas posteriores. Embora pareça simples, aprender esta tabuada constrói autoconfiança e estabelece o padrão de que a multiplicação é ordenada e previsível.",
      2: "A tabuada do 2 é geralmente a primeira tabuada real que os alunos aprendem, e há uma boa razão para isso. Dobrar é um conceito natural que as crianças encontram diariamente. Aprender esta tabuada torna a aritmética mental muito mais rápida e prepara os alunos para números pares, frações (metades) e divisão básica. Muitos alunos acham que é a tabuada mais fácil, o que constrói autoconfiança para tabuadas mais complexas.",
      3: "A tabuada do 3 preenche a lacuna entre tabuadas simples e complexas. Ela exige que os alunos vão além da simples duplicação e reconheçam novos padrões. Esta tabuada ocorre constantemente em contextos reais, como contar em grupos de três, entender formas triangulares e trabalhar com tempo (três períodos por dia). Alunos que aprendem a tabuada do 3 demonstram domínio de contagem abstrata.",
    }

const patterns: { [key: number]: PatternItem[] } = {
      1: [
        { title: "Padrão de Identidade", description: "Cada número multiplicado por 1 dá a si mesmo. Isso nunca muda: 1×1=1, 1×2=2, 1×3=3, e assim por diante." },
        { title: "Série Previsível", description: "Os resultados apenas contam para cima: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Você apenas escreve os números em ordem." },
        { title: "Base para Todas as Tabuadas", description: "Cada tabuada começa com multiplicar por 1, então este padrão ocorre em todas as tabuadas." },
      ],
      2: [
        { title: "Apenas Números Pares", description: "Todos os múltiplos de 2 são números pares. Os resultados sempre terminam com 0, 2, 4, 6 ou 8." },
        { title: "Contar de Dois em Dois", description: "Cada resposta é 2 maior que a anterior: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Padrão de Dobramento", description: "Cada resultado é exatamente o dobro do fator: 2×5=10 é o dobro de 5." },
      ],
      3: [
        { title: "Padrão de Soma de Dígitos", description: "Some os dígitos em cada resultado: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). O padrão 3-6-9 se repete!" },
        { title: "Contar de Três em Três", description: "Cada resposta aumenta em 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Alternância Ímpar-Par", description: "Os resultados alternam: ímpar (3), par (6), ímpar (9), par (12), criando um ritmo previsível." },
      ],
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      1: [
        { mistake: "Acreditar que 1×1=2", solution: "Lembre-se: qualquer coisa multiplicada por 1 permanece a mesma. 1 grupo de 1 é apenas 1." },
        { mistake: "Confusão com adição", solution: "Multiplicar por 1 é diferente de somar. 5+1=6, mas 5×1=5." },
      ],
      2: [
        { mistake: "Confundir 2×6=12 com 2×7=14", solution: "Use a contagem de dois em dois: 2, 4, 6, 8, 10, 12, 14. Conte cuidadosamente sem pular." },
        { mistake: "Confusão com números grandes", solution: "Decompor: 2×8 é APENAS 8+8. Dobrar é uma adição simples." },
      ],
    }

const strategies: { [key: number]: string[] } = {
      1: [
        "Diga cada multiplicação em voz alta: '1 vezes 1 é 1, 1 vezes 2 é 2...'",
        "Pratique escrever a tabuada uma vez por dia durante uma semana",
        "Encontre o padrão: a resposta é sempre o mesmo número que o segundo número",
        "Use cartões de memória, embora esta tabuada geralmente seja aprendida muito rapidamente",
      ],
      2: [
        "Conte de dois em dois enquanto caminha ou sobe escadas: 2, 4, 6, 8...",
        "Use seus dedos: mantenha os dedos em pares e conte de dois em dois",
        "Pratique dobrar números mentalmente durante o dia",
        "Diga em voz alta: '2 vezes 5 é 5 mais 5, que é 10'",
      ],
    }

export function getNumberMeaning(n: number): string | null {
  return meanings[n] ?? null
}

export function getWhyImportant(n: number): string | null {
  return importance[n] ?? null
}

export function getPatterns(n: number): PatternItem[] {
  return patterns[n] ?? []
}

export function getCommonMistakes(n: number): MistakeItem[] {
  return mistakes[n] ?? []
}

export function getPracticeStrategies(n: number): string[] {
  return strategies[n] ?? []
}

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      1: [
        { context: "Ser o 'número um'", detail: "Em muitos idiomas e culturas, ser o número um significa ocupar o primeiro lugar ou o posto mais alto — de pódios esportivos a rankings escolares." },
        { context: "Um único objeto", detail: "Toda vez que você conta um único objeto — uma maçã, uma cadeira — está aplicando a ideia de que 1 grupo de algo é simplesmente essa coisa." },
        { context: "A primeira posição em uma sequência", detail: "Página 1, Dia 1, Rodada 1 — o 1 marca o ponto de partida de inúmeros sistemas de numeração." },
      ],
      2: [
        { context: "Pares de sapatos, meias e luvas", detail: "A maioria dos pares do dia a dia vem em conjuntos de 2 — um modelo bem direto de dobrar." },
        { context: "Olhos e ouvidos", detail: "O corpo humano tem 2 olhos e 2 ouvidos, entre muitas outras características em par." },
        { context: "Rodas de uma bicicleta", detail: "Uma bicicleta comum tem 2 rodas, diferente de um triciclo (3) ou monociclo (1)." },
        { context: "Código binário na computação", detail: "Computadores armazenam e processam informações em binário (base 2), formado por apenas dois dígitos: 0 e 1." },
      ],
      3: [
        { context: "Semáforos", detail: "Semáforos padrão usam 3 cores: vermelho, amarelo e verde." },
        { context: "Triângulos", detail: "Todo triângulo tem exatamente 3 lados e 3 ângulos, o polígono mais simples que existe." },
        { context: "Pódios de medalhas", detail: "Nas Olimpíadas e em muitas outras competições são entregues 3 medalhas: ouro, prata e bronze." },
        { context: "Cores primárias", detail: "Na teoria das cores ensinada tradicionalmente na escola, vermelho, amarelo e azul são consideradas as 3 cores primárias." },
      ],
      4: [
        { context: "As quatro estações", detail: "Em várias partes do mundo, o ano é descrito com 4 estações: primavera, verão, outono e inverno." },
        { context: "Pontos cardeais", detail: "Uma bússola tem 4 direções principais: norte, sul, leste e oeste." },
        { context: "Pernas de mesa", detail: "A maioria das mesas e cadeiras é construída com 4 pernas para dar estabilidade." },
        { context: "Naipes do baralho", detail: "Um baralho padrão de 52 cartas é dividido em 4 naipes: copas, ouros, paus e espadas." },
      ],
      5: [
        { context: "Dedos de uma mão", detail: "A maioria das pessoas tem 5 dedos por mão, o que faz do 5 um dos números mais naturais para aprender a contar desde cedo." },
        { context: "Os cinco sentidos", detail: "Visão, audição, olfato, paladar e tato são geralmente descritos como os 5 sentidos humanos tradicionais." },
        { context: "Um pentágono", detail: "Um pentágono é uma figura de cinco lados, e o Pentágono, sede do Departamento de Defesa dos EUA, leva esse nome justamente por causa dessa forma." },
        { context: "Dinheiro em notas ou moedas de 5", detail: "Muitas moedas incluem uma unidade de 5, como a nota de 5 reais." },
      ],
      6: [
        { context: "Faces de um dado", detail: "Um dado comum de seis faces (um cubo) tem exatamente 6 faces." },
        { context: "Pernas dos insetos", detail: "Todos os insetos, por definição, têm 6 pernas — uma das características que os diferencia das aranhas, que têm 8." },
        { context: "Cordas de um violão", detail: "Um violão ou uma guitarra elétrica padrão tem 6 cordas." },
        { context: "Meia dúzia", detail: "Ovos e produtos de padaria costumam ser vendidos em meia dúzia — um pacote de 6." },
      ],
      7: [
        { context: "Os 7 dias da semana", detail: "Usados hoje em praticamente todos os sistemas de calendário do mundo." },
        { context: "Os 7 continentes", detail: "África, Antártida, Ásia, Oceania, Europa, América do Norte e América do Sul — no modelo mais ensinado nas escolas." },
        { context: "As 7 notas de uma escala musical", detail: "Dó, Ré, Mi, Fá, Sol, Lá, Si — antes de o padrão se repetir uma oitava acima." },
        { context: "As 7 cores do arco-íris", detail: "Vermelho, laranja, amarelo, verde, azul, anil e violeta — uma divisão popularizada primeiro por Isaac Newton." },
        { context: "As Sete Maravilhas do Mundo Antigo", detail: "Incluindo a Grande Pirâmide de Gizé, a única que ainda está de pé hoje." },
      ],
      8: [
        { context: "Pernas das aranhas", detail: "Aranhas e outros aracnídeos têm 8 pernas, diferente dos insetos, que têm 6." },
        { context: "Braços de um polvo", detail: "Um polvo tem 8 braços — daí vem o nome em grego, 'okto', que significa oito." },
        { context: "Um byte na computação", detail: "Na informática, 8 bits formam 1 byte, a unidade básica usada para medir armazenamento e memória digital." },
        { context: "Uma oitava na música", detail: "Na música ocidental, uma oitava abrange 8 notas (por exemplo, de Dó até o próximo Dó: Dó, Ré, Mi, Fá, Sol, Lá, Si, Dó)." },
      ],
      9: [
        { context: "Entradas (innings) no beisebol", detail: "Uma partida padrão de beisebol tem 9 entradas." },
        { context: "Um quadrado 3×3", detail: "O 9 é um quadrado perfeito: uma grade de 3 linhas e 3 colunas tem exatamente 9 quadrados, como um jogo da velha." },
        { context: "O sistema solar, historicamente", detail: "Por boa parte do século 20, os alunos aprendiam que existiam 9 planetas; Plutão foi reclassificado como planeta anão em 2006, deixando 8 planetas reconhecidos hoje." },
      ],
      10: [
        { context: "O sistema decimal", detail: "Quase todos os sistemas de contagem modernos são de base 10, construídos inteiramente em torno de grupos de dez." },
        { context: "Dedos das mãos e dos pés", detail: "A maioria das pessoas tem 10 dedos nas mãos e 10 nos pés, o que se acredita ser parte do motivo pelo qual a contagem em base 10 se tornou tão comum historicamente." },
        { context: "O decatlo", detail: "O decatlo é uma competição de atletismo composta exatamente por 10 provas." },
        { context: "Dinheiro em unidades de 10", detail: "Muitas moedas são estruturadas em torno de unidades de 10, como a nota de 10 reais." },
      ],
      11: [
        { context: "Jogadores de um time de futebol", detail: "Cada time coloca 11 jogadores em campo em uma partida padrão de futebol." },
        { context: "Números de dois algarismos repetidos", detail: "O 11 é o menor número de dois algarismos formado por um único algarismo repetido, um padrão que aparece diretamente na sua tabuada." },
      ],
      12: [
        { context: "Meses do ano", detail: "O ano do calendário é dividido em 12 meses." },
        { context: "Polegadas em um pé (foot)", detail: "No sistema imperial de medidas, 1 pé equivale a 12 polegadas." },
        { context: "Números no mostrador de um relógio", detail: "Um relógio analógico padrão tem seu mostrador dividido em 12 números." },
        { context: "Uma dúzia", detail: "Ovos e produtos de padaria costumam ser vendidos por dúzia — um grupo de 12." },
        { context: "Signos do zodíaco", detail: "O zodíaco ocidental é tradicionalmente dividido em 12 signos." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "O 1 não é nem primo nem composto — por definição, um número primo precisa ter exatamente dois divisores positivos distintos, e o 1 tem apenas um (ele mesmo)." },
        { fact: "Multiplicar qualquer número por 1 é chamado de propriedade de identidade da multiplicação, uma das primeiras regras formais aprendidas em aritmética." },
        { fact: "Em algarismos romanos, o 1 é escrito com um único traço: I — o símbolo mais simples de todo o sistema de numeração." },
      ],
      2: [
        { fact: "O 2 é o único número primo par — todos os outros números pares são divisíveis por 2, o que os torna compostos." },
        { fact: "Como o 2 é o menor número primo, é o ponto de partida de todo o conceito de fatoração em números primos." },
        { fact: "Dobrar é um dos truques de cálculo mental mais rápidos que existem — dobrar repetidamente também aparece na computação binária como potências de 2: 2, 4, 8, 16, 32..." },
      ],
      3: [
        { fact: "O truque da soma dos algarismos para o 3 funciona porque o 10 deixa resto 1 quando dividido por 3 — o mesmo motivo pelo qual o truque também funciona com o 9." },
        { fact: "O 3 é o menor número primo ímpar." },
        { fact: "O triângulo é o único polígono naturalmente rígido, por isso formas de três lados aparecem tanto em pontes quanto em estruturas de construções." },
      ],
      4: [
        { fact: "O 4 é o menor número composto — o primeiro número maior que 1 que não é primo, já que é divisível exatamente por 2." },
        { fact: "O 4 é um quadrado perfeito: 4 = 2 × 2, ou 2²." },
        { fact: "Como 4 = 2 × 2, a tabuada do 4 sempre pode ser obtida dobrando a tabuada do 2 — quem já sabe a tabuada do 2 não precisa memorizar nada novo." },
      ],
      5: [
        { fact: "O 5 fica exatamente no meio entre 0 e 10, por isso a tabuada do 5 é sempre metade da tabuada do 10 correspondente." },
        { fact: "O 5 é um número primo, e é o único número primo que termina no algarismo 5." },
        { fact: "Os relógios usam intervalos de 5 minutos entre os números, então multiplicar por 5 está embutido na forma como a maioria das pessoas lê as horas sem nem perceber." },
      ],
      6: [
        { fact: "O 6 é o menor número perfeito — a soma de seus divisores próprios (1, 2 e 3) é exatamente igual a ele mesmo: 1+2+3=6." },
        { fact: "6 = 2 × 3, o que o torna o menor número que é produto de dois números primos diferentes." },
        { fact: "Como o 6 é par e divisível por 3, todo múltiplo de 6 é automaticamente divisível tanto por 2 quanto por 3." },
      ],
      7: [
        { fact: "O sete é um primo de Mersenne — é igual a 2³ − 1 (2 × 2 × 2, menos 1), o que o coloca em uma família rara de primos ligados a potências de 2." },
        { fact: "A semana de 7 dias remonta à astronomia babilônica antiga, que acompanhava exatamente 7 corpos celestes visíveis a olho nu: o Sol, a Lua e cinco planetas — Mercúrio, Vênus, Marte, Júpiter e Saturno." },
        { fact: "O sete é considerado um número de sorte em muitas culturas, por isso aparece tanto em jogos e tradições de apostas ao redor do mundo." },
        { fact: "O famoso número de código de James Bond é 007, e a Branca de Neve mora com exatamente sete anões." },
      ],
      8: [
        { fact: "8 = 2³, o que o torna o primeiro número cúbico maior que 1 (2 × 2 × 2 = 8)." },
        { fact: "A palavra 'polvo' (octopus em inglês) e o termo musical 'oitava' vêm da mesma raiz grega, que significa oito." },
        { fact: "O 8 é o único número entre 1 e 12 que exige três rodadas de duplicação a partir do 2 (2 → 4 → 8)." },
      ],
      9: [
        { fact: "O 9 é um quadrado perfeito: 9 = 3 × 3, ou 3²." },
        { fact: "Não importa o tamanho do múltiplo de 9: somar seus algarismos repetidamente sempre acaba resultando em 9 — uma propriedade que os matemáticos chamam de 'raiz digital'." },
        { fact: "O 9 é o maior número de um único algarismo, bem antes de o valor posicional começar com o 10." },
      ],
      10: [
        { fact: "A palavra 'decatlo' vem de raízes gregas que significam 'dez provas'." },
        { fact: "Multiplicar por 10 é a única tabuada de um único algarismo em que cada resultado segue uma regra exata e sem exceções: acrescentar um zero." },
        { fact: "Como a maioria das pessoas tem 10 dedos, acredita-se que a contagem em base 10 (decimal) seja um dos sistemas numéricos mais comuns ao longo da história humana." },
      ],
      11: [
        { fact: "O 11 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "O 11 é o menor número primo de dois algarismos." },
        { fact: "O padrão de espelho dos algarismos (11×4=44, 11×7=77) só funciona com fatores de um único algarismo — um dos exemplos mais claros, nas tabuadas, de um padrão com limite embutido." },
      ],
      12: [
        { fact: "O 12 é um número altamente composto — tem mais divisores (1, 2, 3, 4, 6, 12) do que qualquer número positivo menor." },
        { fact: "A palavra 'dúzia' vem do francês antigo 'douzaine', que significa um grupo de doze." },
        { fact: "Um grupo de 144 itens — 12 dúzias — é tradicionalmente chamado de 'grosa'." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
