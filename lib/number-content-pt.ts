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
      13: [
        { context: "As 13 colônias originais dos EUA", detail: "Os Estados Unidos começaram como 13 colônias britânicas ao longo da costa atlântica, antes de declarar independência." },
        { context: "Cartas por naipe", detail: "Um baralho padrão de 52 cartas tem 13 cartas em cada um dos seus quatro naipes." },
        { context: "A dúzia do padeiro", detail: "Tradicionalmente, uma 'dúzia do padeiro' significa 13 itens em vez de 12." },
        { context: "Triscaidecafobia", detail: "O 13 é o número mais associado ao azar na cultura ocidental — esse medo tem até nome próprio." },
      ],
      14: [
        { context: "Catorze dias, duas semanas", detail: "Em inglês, a palavra 'fortnight' designa um período de 14 dias." },
        { context: "Dia dos Namorados", detail: "Em muitos países, o Dia dos Namorados cai em 14 de fevereiro." },
        { context: "Versos de um soneto", detail: "Um soneto clássico, como os escritos por Shakespeare, tem exatamente 14 versos." },
      ],
      15: [
        { context: "Um quarto de hora", detail: "15 minutos equivalem a um quarto de hora, um dos usos mais comuns desse número no dia a dia." },
        { context: "Equipe de rúgbi union", detail: "Uma equipe de rúgbi union coloca 15 jogadores em campo, diferente dos 13 do rugby league." },
      ],
      16: [
        { context: "Onças em uma libra", detail: "No sistema de medidas americano, 1 libra equivale a 16 onças." },
        { context: "O sistema hexadecimal na computação", detail: "Cientistas da computação usam a base 16 (hexadecimal) como forma compacta de representar dados binários." },
        { context: "Peões em um tabuleiro de xadrez", detail: "Um jogo de xadrez inclui 16 peões no total — 8 para cada jogador." },
        { context: "Os 'doces dezesseis'", detail: "Completar 16 anos é considerado um aniversário marcante em várias culturas." },
      ],
      17: [
        { context: "O número que 'parece' mais aleatório", detail: "Em pesquisas informais que pedem um número 'aleatório' num intervalo pequeno, o 17 é escolhido com mais frequência do que o acaso puro preveria — uma curiosidade da psicologia humana, não da aleatoriedade real." },
      ],
      18: [
        { context: "A maioridade no Brasil e em Portugal", detail: "No Brasil e em Portugal, assim como em muitos outros países, a maioridade legal é atingida aos 18 anos." },
        { context: "Buracos em um campo de golfe", detail: "Um campo de golfe padrão tem 18 buracos." },
      ],
      19: [
        { context: "O fim da adolescência", detail: "Em inglês, os números terminados em '-teen' vão de 13 a 19 — o 19 é o último antes de completar 20 anos." },
      ],
      20: [
        { context: "Visão 20/20", detail: "'Visão 20/20' é o termo padrão para acuidade visual normal, medida a uma distância de 20 pés." },
        { context: "Dedos das mãos e dos pés somados", detail: "A maioria das pessoas tem 10 dedos nas mãos e 10 nos pés, totalizando 20." },
      ],
      21: [
        { context: "O blackjack", detail: "No jogo de cartas blackjack, 21 é a pontuação-alvo que os jogadores tentam alcançar sem ultrapassar." },
        { context: "A idade legal para beber nos EUA", detail: "Nos Estados Unidos, a idade mínima legal para consumir álcool é 21 anos, padronizada em todo o país por uma lei federal de 1984." },
      ],
      22: [
        { context: "Jogadores num campo de futebol", detail: "Uma partida completa de futebol tem 22 jogadores em campo — 11 por equipe." },
        { context: "Catch-22", detail: "O título do romance de Joseph Heller, 'Catch-22', virou uma expressão comum em inglês para descrever uma situação sem saída." },
      ],
      23: [
        { context: "Pares de cromossomos humanos", detail: "Uma célula humana típica contém 23 pares de cromossomos — 46 no total." },
      ],
      24: [
        { context: "24 horas em um dia", detail: "Um dia completo se divide em 24 horas." },
        { context: "24 quilates, o ouro puro", detail: "O ouro de 24 quilates é considerado ouro puro, a pureza máxima usada em joalheria." },
        { context: "A taxa de quadros do cinema", detail: "24 quadros por segundo é o padrão do cinema desde a chegada do som." },
      ],
      25: [
        { context: "Um quarto de 100", detail: "25 é exatamente a quarta parte de 100, daí a ligação forte entre esse número e as porcentagens." },
        { context: "As bodas de prata", detail: "O 25º aniversário de casamento é tradicionalmente chamado de 'bodas de prata'." },
      ],
      26: [
        { context: "Letras do alfabeto português", detail: "O alfabeto português tem 26 letras, de A a Z." },
        { context: "A distância de uma maratona", detail: "Uma maratona mede exatamente 42,195 km, o que equivale a cerca de 26,2 milhas." },
        { context: "Ossos em um pé humano", detail: "Segundo as referências anatômicas padrão, cada pé humano tem 26 ossos." },
      ],
      27: [
        { context: "O Clube dos 27", detail: "Vários músicos influentes — entre eles Jimi Hendrix, Janis Joplin e Kurt Cobain — morreram aos 27 anos, um padrão que a cultura pop batizou de 'Clube dos 27'." },
      ],
      28: [
        { context: "Os dias de fevereiro", detail: "Fevereiro tem 28 dias em todo ano que não é bissexto." },
        { context: "O ciclo lunar", detail: "O ciclo das fases da Lua costuma ser descrito, de forma aproximada, como tendo cerca de 28 dias, embora o mês sinódico exato fique mais perto de 29,5 dias." },
      ],
      29: [
        { context: "Fevereiro em ano bissexto", detail: "Em um ano bissexto, fevereiro tem 29 dias em vez dos habituais 28." },
      ],
      30: [
        { context: "Meses com 30 dias", detail: "Abril, junho, setembro e novembro têm 30 dias cada, como lembra o conhecido ditado popular sobre os meses." },
      ],
      31: [
        { context: "Meses com 31 dias", detail: "Janeiro, março, maio, julho, agosto, outubro e dezembro têm 31 dias cada — sete meses no total." },
      ],
      32: [
        { context: "O ponto de congelamento da água", detail: "A água congela a 32°F na escala Fahrenheit." },
        { context: "Uma dentição adulta completa", detail: "Uma dentição humana adulta completa, incluindo os dentes do siso, soma 32 dentes no total." },
        { context: "O número de times da NFL", detail: "A National Football League (NFL) é formada por 32 times." },
      ],
      33: [
        { context: "Vértebras na coluna humana", detail: "Costuma-se dizer que a coluna vertebral humana tem 33 vértebras, embora várias delas se fundam no sacro e no cóccix na vida adulta." },
        { context: "A idade de Jesus na crucificação", detail: "Segundo a tradição cristã mais difundida, Jesus tinha 33 anos no momento da crucificação." },
      ],
      35: [
        { context: "O formato de filme de 35mm", detail: "O 35mm foi por muito tempo o formato padrão tanto na fotografia quanto no cinema." },
      ],
      36: [
        { context: "Polegadas em uma jarda", detail: "No sistema de medidas americano, 1 jarda equivale a 36 polegadas." },
      ],
      38: [
        { context: "O paralelo 38", detail: "Essa linha de latitude ficou historicamente associada à fronteira entre Coreia do Norte e Coreia do Sul." },
      ],
      39: [
        { context: "Os 39 degraus", detail: "'The 39 Steps' é um clássico thriller de 1935 dirigido por Alfred Hitchcock, baseado num romance homônimo de 1915." },
      ],
      40: [
        { context: "'Quarenta dias e quarenta noites'", detail: "O número 40 aparece repetidamente na Bíblia, inclusive na história do dilúvio no Gênesis." },
        { context: "A semana de trabalho padrão", detail: "Uma semana de trabalho de 40 horas é um padrão comum em muitos países." },
        { context: "A origem da palavra 'quarentena'", detail: "'Quarentena' vem do italiano 'quaranta giorni' ('quarenta dias'), o período de isolamento historicamente exigido de navios durante surtos de peste." },
      ],
      42: [
        { context: "'A resposta para a vida, o universo e tudo mais'", detail: "No romance O Guia do Mochileiro das Galáxias, de Douglas Adams, um supercomputador calcula que a resposta para a pergunta definitiva é o número 42." },
        { context: "Pontos em um par de dados", detail: "Um dado padrão tem 21 pontos ao todo (1+2+3+4+5+6), então um par de dados soma 42 pontos." },
      ],
      44: [
        { context: "O 44º presidente dos EUA", detail: "Barack Obama foi o 44º presidente dos Estados Unidos." },
      ],
      45: [
        { context: "Os discos de 45 RPM", detail: "Os 'compactos' em vinil eram tradicionalmente prensados para girar a 45 rotações por minuto." },
      ],
      46: [
        { context: "Cromossomos em uma célula humana", detail: "Uma célula humana típica contém 46 cromossomos, organizados em 23 pares." },
      ],
      48: [
        { context: "48 horas", detail: "48 horas equivalem exatamente a dois dias completos." },
        { context: "Os estados contíguos dos EUA", detail: "Os 48 estados contíguos dos Estados Unidos excluem apenas o Alasca e o Havaí, geograficamente separados." },
      ],
      50: [
        { context: "Os 50 estados dos EUA", detail: "Os Estados Unidos são formados por 50 estados." },
        { context: "As bodas de ouro", detail: "O 50º aniversário de casamento é tradicionalmente chamado de 'bodas de ouro'." },
      ],
      51: [
        { context: "A Área 51", detail: "A Área 51 é uma famosa instalação da Força Aérea dos EUA em Nevada, mantida em sigilo por muito tempo e bastante referenciada na cultura pop." },
      ],
      52: [
        { context: "Semanas em um ano", detail: "Um ano padrão tem 52 semanas." },
        { context: "Cartas em um baralho", detail: "Um baralho padrão tem 52 cartas, sem contar os coringas." },
      ],
      54: [
        { context: "Quadrados em um cubo mágico", detail: "O clássico cubo mágico 3×3 tem 9 quadrados coloridos por face, somando 54 quadrados no total em suas 6 faces." },
      ],
      55: [
        { context: "O antigo limite de velocidade nos EUA", detail: "Entre 1974 e 1995, 55 milhas por hora foi o limite máximo de velocidade nas rodovias dos EUA por lei federal." },
      ],
      57: [
        { context: "O slogan '57 Variedades' da Heinz", detail: "A empresa H.J. Heinz usa o slogan '57 Variedades' desde 1896, muito depois de já vender mais de 57 produtos." },
      ],
      59: [
        { context: "Um segundo antes do próximo minuto", detail: "Um minuto tem 60 segundos, então o 59 é o último segundo antes de começar um novo minuto." },
      ],
      60: [
        { context: "Segundos em um minuto", detail: "Um minuto tem 60 segundos." },
        { context: "Minutos em uma hora", detail: "Uma hora tem 60 minutos." },
      ],
      64: [
        { context: "Casas em um tabuleiro de xadrez", detail: "Um tabuleiro de xadrez padrão é uma grade de 8×8 e tem exatamente 64 casas." },
        { context: "Uma caixa clássica de Crayola", detail: "A icônica 'Big Box' da Crayola inclui há muito tempo 64 cores de lápis de cera." },
        { context: "Nintendo 64", detail: "O Nintendo 64 foi um console histórico dos anos 90, batizado por causa de seu processador de 64 bits." },
      ],
      65: [
        { context: "A idade tradicional de aposentadoria", detail: "Os 65 anos são usados há muito tempo como idade padrão de aposentadoria em vários países." },
        { context: "Um limite de velocidade comum em rodovia", detail: "65 milhas por hora é um limite de velocidade comum nas rodovias de muitos estados americanos." },
      ],
      66: [
        { context: "A Rota 66", detail: "A Rota 66 foi uma das primeiras rodovias dos EUA, ligando Chicago a Santa Mônica, e virou um símbolo cultural das viagens de estrada americanas." },
      ],
      70: [
        { context: "'Setenta anos' — uma expressão bíblica tradicional", detail: "Essa expressão tradicional para uma vida de 70 anos vem da Bíblia (Salmo 90:10)." },
      ],
      72: [
        { context: "A 'regra dos 72'", detail: "Nas finanças, dividir 72 por uma taxa de juros dá uma estimativa rápida de quantos anos um investimento leva para dobrar." },
        { context: "72 horas", detail: "72 horas equivalem exatamente a três dias completos." },
      ],
      75: [
        { context: "As bodas de diamante", detail: "Em algumas tradições comemorativas, o 75º aniversário é chamado de 'bodas de diamante', embora o termo seja mais associado aos 60 anos, como no Jubileu de Diamante da rainha Elizabeth II em 2012." },
      ],
      76: [
        { context: "'76 Trombones'", detail: "'Seventy-Six Trombones' é a famosa canção de banda marcial do musical de 1957 The Music Man." },
      ],
      78: [
        { context: "Discos de 78 RPM", detail: "78 RPM foi a primeira velocidade padrão de reprodução dos discos de gramofone, antes de os formatos de 33⅓ e 45 RPM se popularizarem." },
      ],
      80: [
        { context: "A Volta ao Mundo em Oitenta Dias", detail: "O clássico romance de Júlio Verne, de 1873, narra uma corrida para dar a volta ao mundo em 80 dias." },
      ],
      86: [
        { context: "A gíria de restaurante '86'", detail: "Na gíria de bares e restaurantes americanos, 'dar um 86' num prato significa tirá-lo do cardápio; também pode significar retirar um cliente problemático." },
      ],
      88: [
        { context: "Teclas de um piano", detail: "Um piano moderno padrão tem 88 teclas." },
        { context: "Constelações oficialmente reconhecidas", detail: "A União Astronômica Internacional reconhece oficialmente 88 constelações." },
      ],
      90: [
        { context: "A duração de uma partida de futebol", detail: "Uma partida de futebol oficial dura 90 minutos, divididos em dois tempos de 45 minutos." },
        { context: "Um ângulo reto", detail: "Um ângulo reto mede exatamente 90 graus." },
      ],
      92: [
        { context: "O número atômico do urânio", detail: "O urânio, de número atômico 92, é tradicionalmente citado como o elemento natural mais pesado da tabela periódica." },
      ],
      95: [
        { context: "Windows 95", detail: "O Windows 95 foi um sistema operacional histórico da Microsoft lançado em 1995 que ajudou a popularizar a informática pessoal." },
      ],
      99: [
        { context: "A psicologia dos preços em '.99'", detail: "O comércio costuma marcar preços terminados em ,99 (como 19,99) porque são percebidos como bem mais baixos do que o número redondo seguinte." },
      ],
      100: [
        { context: "Um século", detail: "Um período de 100 anos é chamado de século." },
        { context: "Os 100% como 'o todo'", detail: "As porcentagens são construídas tendo o 100 como ponto de referência de um todo completo." },
        { context: "O Senado dos EUA", detail: "O Senado dos Estados Unidos tem 100 membros — dois de cada um dos 50 estados." },
        { context: "O ponto de ebulição da água", detail: "À pressão atmosférica padrão, a água ferve a 100°C." },
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
      13: [
        { fact: "O 13 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "O medo do número 13 tem nome formal: triscaidecafobia." },
        { fact: "Muitos prédios pulam o 13º andar na numeração por causa da superstição em torno desse número." },
      ],
      14: [
        { fact: "14 = 2 × 7, então cada resultado da tabuada do 14 é exatamente o dobro do resultado correspondente na tabuada do 7." },
        { fact: "A palavra inglesa 'fortnight' é uma contração de 'fourteen nights' (catorze noites), o termo antigo para duas semanas." },
      ],
      15: [
        { fact: "15 é um número triangular — é a soma dos cinco primeiros números naturais: 1+2+3+4+5=15." },
        { fact: "15 = 3 × 5, sendo assim o produto dos dois primeiros números primos ímpares." },
      ],
      16: [
        { fact: "16 = 2⁴, o que o torna a primeira quarta potência maior que 1." },
        { fact: "16 também é um quadrado perfeito: 16 = 4 × 4." },
        { fact: "Computadores usam bastante a base 16 (hexadecimal) porque cada dígito hexadecimal corresponde exatamente a 4 bits binários." },
      ],
      17: [
        { fact: "O 17 é um número primo, sem nenhuma tabuada menor que, dobrada ou triplicada, chegue até ele." },
        { fact: "Em pesquisas psicológicas informais, quando se pede para dizer um número 'aleatório' entre 1 e 20, as pessoas escolhem o 17 desproporcionalmente — uma curiosidade sobre preferências numéricas humanas, não sobre aleatoriedade real." },
      ],
      18: [
        { fact: "18 = 2 × 9 = 3 × 6, então existe mais de uma forma válida de dobrar ou triplicar uma tabuada menor para chegar até ele." },
        { fact: "Como 18 é múltiplo de 9, todos os seus múltiplos também seguem a regra da soma dos algarismos do 9." },
      ],
      19: [
        { fact: "O 19 é um número primo e é o último dos números terminados em '-teen' em inglês (de 13 a 19)." },
        { fact: "19 = 20 − 1, então multiplicar por 19 costuma ser mais fácil multiplicando primeiro por 20 e depois subtraindo o número original." },
      ],
      20: [
        { fact: "A antiga palavra inglesa 'score' significa 20, como na célebre frase de Lincoln 'four score and seven years ago' (4×20+7=87)." },
        { fact: "20 = 4 × 5 = 2 × 10, então há vários pares de fatores para construir essa tabuada." },
      ],
      21: [
        { fact: "21 = 3 × 7, o produto de duas tabuadas menores que os alunos provavelmente já conhecem." },
        { fact: "No blackjack, o 21 é exatamente a pontuação-alvo — ultrapassá-la significa perder automaticamente." },
      ],
      22: [
        { fact: "22 = 2 × 11, então sua tabuada é simplesmente o dobro da tabuada do 11." },
        { fact: "O título do romance 'Catch-22', de Joseph Heller, virou uma expressão independente em inglês para um dilema sem solução." },
      ],
      23: [
        { fact: "O 23 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "Células humanas contêm 23 pares de cromossomos, um dos fatos mais citados sobre o número 23 fora da matemática." },
      ],
      24: [
        { fact: "O 24 é um número altamente composto — seus divisores (1, 2, 3, 4, 6, 8, 12, 24) superam os de qualquer número positivo menor." },
        { fact: "24 = 2³ × 3, combinando uma potência de 2 com um fator 3." },
      ],
      25: [
        { fact: "25 é um quadrado perfeito: 25 = 5 × 5." },
        { fact: "Como 25 é exatamente um quarto de 100, multiplicar por 25 costuma ser mais rápido fazendo ×100 e depois ÷4." },
      ],
      26: [
        { fact: "26 = 2 × 13, então sua tabuada é simplesmente o dobro da tabuada do 13." },
        { fact: "As 26 letras do alfabeto fazem do 26 um dos números mais frequentes na linguagem escrita cotidiana." },
      ],
      27: [
        { fact: "27 é um cubo perfeito: 27 = 3 × 3 × 3, ou seja, 3³." },
        { fact: "O 'Clube dos 27' é um termo da cultura pop para músicos famosos que morreram nessa idade — mas pesquisadores não encontraram evidência estatística de risco de mortalidade anormal especificamente aos 27 anos." },
      ],
      28: [
        { fact: "O 28 é um número perfeito — seus divisores próprios (1, 2, 4, 7 e 14) somam exatamente 28; é o segundo número perfeito depois do 6." },
        { fact: "28 = 4 × 7, o que o conecta diretamente a duas tabuadas menores." },
      ],
      29: [
        { fact: "O 29 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "O 29 só aparece como data no calendário em anos bissextos, quando fevereiro ganha um dia a mais." },
      ],
      30: [
        { fact: "30 = 2 × 3 × 5, o produto dos três primeiros números primos." },
        { fact: "O 30 tem uma quantidade incomumente alta de divisores pequenos para seu tamanho, uma das razões pelas quais aparece tanto em medidas do dia a dia." },
      ],
      31: [
        { fact: "O 31 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "31 = 2⁵ − 1, o que o torna um primo de Mersenne, a mesma família que inclui 3, 7 e 127." },
      ],
      32: [
        { fact: "32 = 2⁵, a quinta potência de 2." },
        { fact: "32 é exatamente o dobro de 16, que por sua vez é o dobro de 8 — parte de uma cadeia ininterrupta de duplicações que vai até o 1." },
      ],
      33: [
        { fact: "33 = 3 × 11, então sua tabuada é o triplo direto do padrão de espelho de dígitos da tabuada do 11." },
      ],
      34: [
        { fact: "34 é um número de Fibonacci — é a soma dos dois números de Fibonacci anteriores, 13 e 21." },
        { fact: "Em um quadrado mágico 4×4, cada linha, coluna e diagonal soma 34 — a menor constante mágica possível para uma grade 4×4." },
      ],
      35: [
        { fact: "35 = 5 × 7, o produto de duas tabuadas menores que os alunos já conhecem." },
      ],
      36: [
        { fact: "36 é ao mesmo tempo um quadrado perfeito (6×6) e um número triangular (1+2+...+8) — combinação que pouquíssimos números compartilham." },
      ],
      37: [
        { fact: "O 37 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "37 × 3 = 111, por isso o 37 divide exatamente qualquer número repdigit de três algarismos (111, 222, 333... até 999)." },
      ],
      38: [
        { fact: "38 = 2 × 19, então sua tabuada é simplesmente o dobro da tabuada do 19." },
      ],
      39: [
        { fact: "39 = 3 × 13, o produto de duas tabuadas menores que os alunos provavelmente já conhecem." },
      ],
      40: [
        { fact: "40 = 2³ × 5, combinando uma potência de 2 com um fator 5." },
      ],
      41: [
        { fact: "O 41 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "41 e 43 são primos gêmeos — a diferença entre eles é exatamente 2." },
      ],
      42: [
        { fact: "42 = 2 × 3 × 7, combinando três dos menores números primos usados nas tabuadas padrão." },
      ],
      43: [
        { fact: "O 43 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "O 43, assim como o 41, forma o maior valor de um par de primos gêmeos separados por exatamente um número par, o 42." },
      ],
      44: [
        { fact: "44 = 4 × 11, então sua tabuada é diretamente o quádruplo da tabuada do 11." },
      ],
      45: [
        { fact: "45° é exatamente a metade de um ângulo reto (90°), por isso ângulos de 45 graus aparecem o tempo todo em geometria e design." },
        { fact: "45 é ao mesmo tempo um número triangular (1+2+...+9) e o produto de duas tabuadas menores, 9 e 5." },
      ],
      46: [
        { fact: "46 = 2 × 23, então sua tabuada é simplesmente o dobro da tabuada do 23." },
      ],
      47: [
        { fact: "O 47 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "O 47 é uma piada interna famosa entre fãs e roteiristas de Star Trek, que aparentemente o inseriram de propósito no fundo de vários episódios." },
      ],
      48: [
        { fact: "O 48 é um número altamente composto para seu tamanho — seus divisores (1, 2, 3, 4, 6, 8, 12, 16, 24, 48) superam os de qualquer número positivo menor." },
      ],
      49: [
        { fact: "49 é um quadrado perfeito: 49 = 7 × 7." },
        { fact: "7×7=49 é um dos fatos mais memorizados de toda a tabuada padrão." },
      ],
      50: [
        { fact: "50 = 2 × 5², combinando um único fator 2 com o quadrado de 5." },
      ],
      51: [
        { fact: "51 = 3 × 17, o produto de dois números primos pequenos." },
      ],
      52: [
        { fact: "52 = 4 × 13, então sua tabuada é diretamente o quádruplo da tabuada do 13." },
      ],
      53: [
        { fact: "O 53 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      54: [
        { fact: "54 = 2 × 3³, combinando um único fator 2 com o cubo de 3." },
      ],
      55: [
        { fact: "55 é ao mesmo tempo um número triangular (1+2+...+10) e um número de Fibonacci — combinação que pouquíssimos números compartilham." },
      ],
      56: [
        { fact: "56 = 2³ × 7, combinando uma potência de 2 com um fator 7." },
        { fact: "7×8=56 é um dos fatos individuais mais confundidos em toda a tabuada padrão." },
      ],
      57: [
        { fact: "57 = 3 × 19, o produto de dois números primos pequenos." },
      ],
      58: [
        { fact: "58 = 2 × 29, então sua tabuada é simplesmente o dobro da tabuada do 29." },
      ],
      59: [
        { fact: "O 59 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      60: [
        { fact: "O 60 é um número altamente composto — seus divisores (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60) superam os de qualquer número positivo menor." },
        { fact: "Os antigos babilônios usavam um sistema numérico de base 60 (sexagesimal), por isso o tempo e os ângulos ainda são divididos em unidades de 60." },
      ],
      61: [
        { fact: "O 61 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      62: [
        { fact: "62 = 2 × 31, então sua tabuada é simplesmente o dobro da tabuada do 31." },
      ],
      63: [
        { fact: "63 = 3² × 7, combinando o quadrado de 3 com um fator 7." },
        { fact: "63 = 2⁶ − 1 (64 menos 1), ficando exatamente um número abaixo da próxima potência de 2." },
      ],
      64: [
        { fact: "64 é ao mesmo tempo um quadrado perfeito (8²) e um cubo perfeito (4³) — uma das poucas cifras com ambas as propriedades." },
      ],
      65: [
        { fact: "65 = 5 × 13, o produto de duas tabuadas menores." },
      ],
      66: [
        { fact: "66 = 2 × 3 × 11, combinando três das tabuadas menores." },
      ],
      67: [
        { fact: "O 67 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      68: [
        { fact: "68 = 4 × 17, então sua tabuada é diretamente o quádruplo da tabuada do 17." },
      ],
      69: [
        { fact: "69 = 3 × 23, o produto de duas tabuadas menores." },
      ],
      70: [
        { fact: "70 = 2 × 5 × 7, combinando três dos menores números primos usados nas tabuadas padrão." },
      ],
      71: [
        { fact: "O 71 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      72: [
        { fact: "72 = 2³ × 3², combinando uma potência de 2 com o quadrado de 3." },
      ],
      73: [
        { fact: "O 73 é um número primo — seus únicos divisores são 1 e ele mesmo. Também é o 21º número primo contando a partir do 2." },
        { fact: "Em binário, 73 se escreve 1001001 — um palíndromo que se lê igual nos dois sentidos." },
      ],
      74: [
        { fact: "74 = 2 × 37, então sua tabuada é simplesmente o dobro da tabuada do 37." },
      ],
      75: [
        { fact: "75 = 3 × 5², combinando um fator 3 com o quadrado de 5." },
      ],
      76: [
        { fact: "76 = 4 × 19, então sua tabuada é diretamente o quádruplo da tabuada do 19." },
      ],
      77: [
        { fact: "77 = 7 × 11, o produto de duas tabuadas menores." },
        { fact: "77 é um palíndromo numérico — se lê igual de trás para frente." },
      ],
      78: [
        { fact: "78 = 2 × 3 × 13, combinando três das tabuadas menores." },
      ],
      79: [
        { fact: "O 79 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      80: [
        { fact: "80 = 2⁴ × 5, combinando uma potência de 2 com um fator 5." },
        { fact: "80% equivale a quatro quintos (4/5) de um todo." },
      ],
      81: [
        { fact: "81 é um quadrado perfeito (9×9) e também é igual a 3⁴ (3 elevado à quarta potência)." },
      ],
      82: [
        { fact: "82 = 2 × 41, então sua tabuada é simplesmente o dobro da tabuada do 41." },
      ],
      83: [
        { fact: "O 83 é um número primo — seus únicos divisores são 1 e ele mesmo." },
      ],
      84: [
        { fact: "84 = 2² × 3 × 7, combinando uma potência de 2 com fatores 3 e 7." },
      ],
      85: [
        { fact: "85 = 5 × 17, o produto de duas tabuadas menores." },
      ],
      86: [
        { fact: "86 = 2 × 43, então sua tabuada é simplesmente o dobro da tabuada do 43." },
      ],
      87: [
        { fact: "87 = 3 × 29, o produto de duas tabuadas menores." },
      ],
      88: [
        { fact: "88 = 8 × 11, o produto de duas tabuadas menores." },
      ],
      89: [
        { fact: "O 89 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "89 também é um número de Fibonacci — é a soma dos dois números de Fibonacci anteriores, 34 e 55." },
      ],
      90: [
        { fact: "90 = 2 × 3² × 5, combinando uma potência de 2, o quadrado de 3 e um fator 5." },
      ],
      91: [
        { fact: "91 = 7 × 13, o que o torna um exemplo clássico no ensino de matemática de um número que parece primo mas não é." },
      ],
      92: [
        { fact: "92 = 4 × 23, então sua tabuada é diretamente o quádruplo da tabuada do 23." },
      ],
      93: [
        { fact: "93 = 3 × 31, o produto de duas tabuadas menores." },
      ],
      94: [
        { fact: "94 = 2 × 47, então sua tabuada é simplesmente o dobro da tabuada do 47." },
      ],
      95: [
        { fact: "95 = 5 × 19, o produto de duas tabuadas menores." },
      ],
      96: [
        { fact: "96 = 2⁵ × 3, combinando uma potência de 2 com um único fator 3." },
      ],
      97: [
        { fact: "O 97 é um número primo — seus únicos divisores são 1 e ele mesmo." },
        { fact: "O 97 é o maior número primo abaixo de 100." },
      ],
      98: [
        { fact: "98 = 2 × 7², combinando um único fator 2 com o quadrado de 7." },
      ],
      99: [
        { fact: "99 = 9 × 11, o produto de duas tabuadas menores." },
        { fact: "Como 99 é múltiplo de 9, os algarismos de qualquer múltiplo de 99 sempre somam um múltiplo de 9." },
      ],
      100: [
        { fact: "100 = 10², o quadrado de 10, e também é igual a 4 × 25." },
      ],
    }

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
