'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Footer from './Footer'
import PracticePreview from './PracticePreview'
import PrintableExercises from './PrintableExercises'
import NumberGames from './NumberGames'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Print function
  const handlePrint = () => {
    if (tableRef.current) {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Table de Multiplication del ${number}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                h1 {
                  text-align: center;
                  color: #1e40af;
                  margin-bottom: 30px;
                }
                .table-item {
                  display: flex;
                  justify-content: space-between;
                  padding: 12px 20px;
                  margin: 8px 0;
                  background: #f0f9ff;
                  border-radius: 8px;
                  font-size: 18px;
                }
                .equation {
                  font-weight: 500;
                }
                .result {
                  font-weight: bold;
                  color: #1e40af;
                }
                @media print {
                  body { padding: 10px; }
                  .table-item { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              <h1>Table de Multiplication del ${number}</h1>
              ${Array.from({ length: 10 }, (_, i) => `
                <div class="table-item">
                  <span class="equation">${number} × ${i + 1}</span>
                  <span class="result">= ${number * (i + 1)}</span>
                </div>
              `).join('')}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  // Download as image function
  const handleDownload = async () => {
    if (tableRef.current) {
      try {
        // Create a canvas to draw the table
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        canvas.width = 600
        canvas.height = 700
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 600, 700)
        const gradients: { [key: number]: [string, string] } = {
          0: ['#3b82f6', '#4f46e5'],
          1: ['#a855f7', '#ec4899'],
          2: ['#10b981', '#14b8a6'],
          3: ['#f97316', '#ef4444'],
          4: ['#06b6d4', '#3b82f6']
        }
        const [color1, color2] = gradients[colorIndex]
        gradient.addColorStop(0, color1)
        gradient.addColorStop(1, color2)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 600, 700)

        // Title
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 36px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Table de ' + number, 300, 60)

        // Table items
        ctx.font = '24px Arial'
        let y = 120
        for (let i = 1; i <= 10; i++) {
          // Background for each row
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
          ctx.beginPath()
          ctx.roundRect(30, y - 30, 540, 50, 10)
          ctx.fill()

          // Text
          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'left'
          ctx.font = '22px Arial'
          ctx.fillText(number + ' × ' + i, 50, y)
          
          ctx.textAlign = 'right'
          ctx.font = 'bold 26px Arial'
          ctx.fillText('= ' + (number * i), 550, y)
          
          y += 60
        }

        // Convert to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = number + '-table-de-multiplication.png'
            link.click()
            URL.revokeObjectURL(url)
          }
        })
      } catch (error) {
        console.error('Download failed:', error)
      }
    }
  }

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string} = {
      1: "Multiplier par 1 est un cas spécial en mathématiques. Lorsque vous multipliez n'importe quel nombre par 1, le résultat est toujours ce même nombre. C'est ce qu'on appelle la propriété d'identité de la multiplication. Pensez-y comme à la question 'combien de groupes de quelque chose ai-je ?' Lorsque vous n'avez qu'un seul groupe, vous avez exactement ce avec quoi vous avez commencé.",
      2: "Multiplier par 2 signifie doubler un nombre. Lorsque vous multipliez quelque chose par 2, vous l'ajoutez à lui-même. C'est l'une des opérations de multiplication les plus pratiques car nous devons souvent doubler des choses dans la vie réelle—compter les paires de chaussures, les roues de vélo, ou diviser quelque chose équitablement entre deux personnes.",
      3: "Multiplier par 3 signifie prendre un nombre trois fois. Vous pouvez y penser comme à additionner le même nombre à lui-même trois fois. Cette table est essentielle pour comprendre les triangles, les trios et tout ce qui vient par groupes de trois.",
      4: "Multiplier par 4, c'est comme doubler deux fois. Comme 4 = 2 × 2, vous pouvez doubler un nombre puis doubler le résultat à nouveau. Cela rend l'apprentissage de la table de 4 plus facile si vous connaissez déjà celle de 2. Le nombre 4 apparaît fréquemment en géométrie (les carrés ont 4 côtés) et dans la mesure du temps (il y a 4 quarts dans une heure).",
      5: "Multiplier par 5 crée l'un des modèles les plus beaux en mathématiques. Tous les multiples de 5 se terminent par 0 ou 5, ce qui rend cette table très prévisible. C'est extrêmement utile pour compter l'argent (pièces de 5 centimes, billets de 5 euros) et dire l'heure (intervalles de 5 minutes).",
      6: "Multiplier par 6 signifie prendre six groupes d'un nombre. Le 6 est la première table de multiplication 'réelle' car ce ne sont pas simplement des multiples de 2 ou 3. Cependant, comme 6 = 2 × 3, vous pouvez multiplier un nombre par 2 puis par 3 (ou l'inverse) pour multiplier par 6. Le nombre 6 apparaît fréquemment dans la nature (cellules de ruche d'abeille) et dans la vie quotidienne (boîtes d'œufs, faces de dés).",
      7: "Multiplier par 7 est généralement l'une des tables avec lesquelles les étudiants ont le plus de difficultés car 7 est un nombre premier et ne peut pas être dérivé d'autres tables simples. Cependant, il existe de beaux modèles dans tous les multiples de 7 et cela peut s'apprendre avec de la pratique. Le 7 est un nombre important dans les jours de la semaine, les continents du monde et de nombreuses références culturelles.",
      8: "Multiplier par 8, c'est comme doubler trois fois (8 = 2 × 2 × 2). Doublez un nombre, doublez le résultat à nouveau, et doublez-le une fois de plus—vous aurez multiplié par 8. Cette table est plus facile à apprendre si vous connaissez bien les tables de 2 et 4. Le 8 est un nombre important en géométrie (octogones) et en musique (octave).",
      9: "Multiplier par 9 a l'un des modèles les plus fascinants en mathématiques. Lorsque vous additionnez les chiffres de tous les multiples de 9, le résultat est toujours divisible par 9. De plus, le chiffre des dizaines de 9 × n est toujours n-1. Cette table peut également s'apprendre avec l'astuce des doigts. Comme 9 n'est que 1 de moins que 10, on peut aussi la calculer en utilisant la table de 10.",
      10: "Multiplier par 10 est l'une des tables de multiplication les plus faciles. Lorsque vous multipliez n'importe quel nombre par 10, vous ajoutez simplement un zéro à la fin. Cela forme la base de notre système décimal. Apprendre à multiplier par 10 enseigne aux étudiants le concept de valeur positionnelle et comment travailler avec de grands nombres. La table de 10 est un point de référence pour comprendre toutes les autres tables de multiplication.",
      11: "Multiplier par 11 a l'un des modèles les plus intéressants en mathématiques. Lorsque vous multipliez des nombres d'un chiffre par 11, le résultat est ce nombre répété deux fois (11×3=33, 11×7=77). Lorsque vous multipliez des nombres de deux chiffres par 11, il y a aussi un beau modèle : vous additionnez les chiffres et les placez au milieu. Le 11 est un nombre premier et a des propriétés mathématiques spéciales.",
      12: "Multiplier par 12 est l'une des tables les plus pratiques car 12 est divisible par de nombreux nombres (1, 2, 3, 4, 6, 12). Cette caractéristique rend le 12 très utile dans la vie quotidienne—il y a 12 objets dans une douzaine, 12 heures sur une horloge, 12 mois dans une année. Comme 12 = 3 × 4 = 2 × 6, vous pouvez apprendre cette table de multiples façons.",
      13: "Multiplier par 13 développe les compétences de reconnaissance de modèles des étudiants. Le 13 est un nombre premier, il ne peut donc pas être simplement dérivé d'autres tables. Cependant, penser à 13 comme 10+3 est très utile : multiplier un nombre par 13 signifie le multiplier par 10 et ajouter le résultat de la multiplication par 3. Le 13 est un nombre avec une signification spéciale dans de nombreuses cultures.",
      14: "Multiplier par 14 est le double de la table de 7. Comme 14 = 2 × 7, si vous connaissez la table de 7, vous pouvez doubler chaque résultat pour trouver la table de 14. Le 14 est important dans la planification hebdomadaire (2 semaines = 14 jours) et montre des propriétés de nombres pairs.",
      15: "Multiplier par 15 combine les multiples de 3 et de 5. Comme 15 = 3 × 5, cette table porte les propriétés des deux nombres. Tous les multiples de 15 sont divisibles à la fois par 3 et par 5. Comme 15 minutes représentent un quart d'heure, cela est beaucoup utilisé dans les calculs de temps.",
      16: "Multiplier par 16 est la quatrième puissance de 2 (2×2×2×2=16). Cela rend possible d'apprendre la table de 16 par des chaînes de doublement. Vous pouvez doubler 8 pour obtenir 16. En informatique, le 16 est un nombre important (système hexadécimal) et apparaît également fréquemment dans la vie quotidienne.",
      17: "Multiplier par 17 peut être difficile en raison de ses propriétés de nombre premier. Le 17 ne peut pas être simplement dérivé d'autres tables. Cependant, penser à 17 comme 20-3 ou 10+7 facilite les calculs. Apprendre la table de 17 développe les compétences en calcul mental et les stratégies de résolution de problèmes.",
      18: "Multiplier par 18 contient de nombreuses relations. Comme 18 = 2 × 9 = 3 × 6, vous pouvez apprendre cette table de multiples façons. Doubler la table de 9 ou tripler la table de 6 donne la table de 18. Le 18 est important comme âge de la majorité dans de nombreux pays.",
      19: "Multiplier par 19 ne peut pas être dérivé d'autres tables car le 19 est un nombre premier. Cependant, penser à 19 comme 20-1 est très pratique : multipliez un nombre par 20 et soustrayez le nombre lui-même. Cette stratégie facilite grandement le calcul mental de la table de 19.",
      20: "Multiplier par 20 est l'extension naturelle de la table de 10. Lorsque vous multipliez n'importe quel nombre par 20, vous pouvez le multiplier par 10 et doubler le résultat. Ou simplement ajouter un zéro à la fin et doubler. La table de 20 est constamment utilisée dans les calculs monétaires (20 euros) et les mesures (20 mètres, 20 kilogrammes).",
      21: "Multiplier par 21 nécessite de comprendre la relation 3×7. Comme 21=3×7, cette table porte les propriétés des tables de 3 et de 7. Le 21 est important comme âge légal de la majorité dans de nombreux pays. Penser à 21 comme 20+1 facilite les calculs : multipliez un nombre par 20 et ajoutez-lui le nombre lui-même.",
      22: "Multiplier par 22 est le double de 11 (22=2×11). Si vous connaissez la table de 11, vous pouvez doubler chaque résultat pour trouver la table de 22. Comme 22 est également 2×11, il montre des propriétés de nombres pairs. Le 22 apparaît fréquemment dans les sports (équipe de football) et le comptage quotidien.",
      23: "Multiplier par 23 ne peut pas être dérivé d'autres tables en raison de ses propriétés de nombre premier. Cependant, penser à 23 comme 20+3 ou 25-2 facilite les calculs. Le 23 est un nombre important en biologie (nombre de paires de chromosomes humains). Apprendre la table de 23 renforce les compétences en arithmétique mentale.",
      24: "Multiplier par 24 est l'une des tables les plus polyvalentes. Comme 24=2×12=3×8=4×6, peut être calculé de nombreuses façons différentes. En raison de la relation jour-heure (24 heures), c'est un nombre fondamental dans les calculs de temps. Le 24 représente également 2 douzaines et est fréquemment utilisé dans l'emballage et le groupement.",
      25: "Multiplier par 25 utilise la relation 5×5 (5²). Comme 25 est le carré de 5, il a des propriétés mathématiques très spéciales. C'est important dans les calculs monétaires (25 centimes représentent un quart). Tous les multiples de 25 se terminent par 25, 50, 75, 00 - un modèle très régulier.",
      26: "Multiplier par 26 est le double de 13 (26=2×13). Si vous connaissez la table de 13, vous pouvez doubler chaque résultat pour trouver la table de 26. Le 26 est le nombre de lettres dans l'alphabet anglais. Penser à 26 comme 25+1 ou 30-4 facilite les calculs.",
      27: "Multiplier par 27 est la troisième puissance del 3 (27=3³=3×3×3). Esta relación especial hace que el 27 sea important en mathématiques y geometría. Como 27=3×9, peut être calculé usando las tablas del 3 o del 9. Penser à 27 como 30-3 facilite le calcul mental.",
      28: "Multiplier par 28 utilise la relation 4×7. Como 28=4×7=2×14, peut s'apprendre de multiples façons. 28 días es Le nombre de días en février (quand ce n'est pas année bissextile). El 28 est également un nombre perfecto (la addition de sus divisores es igual à lui-même: 1+2+4+7+14=28).",
      29: "Multiplier par 29 nécessite des stratégies especiales parce que c'est nombre premier. El méthode la plus pratique es Penser à 29 como 30-1: multiplica un nombre por 30 y soustrayez-lui Le nombre mismo. 29 días es Le nombre de días en février en années bissextiles. Aprender la table de 29 développe des compétences de résolution de problèmes.",
      30: "Multiplier par 30 utilise la relation 10×3. Para multiplicar un nombre por 30, vous pouvez le multiplier por 10 y luego multiplicar el rÃ©sultat por 3. 30 días es Le nombre de días dans de nombreux mois (abril, junio, septiembre, noviembre). El 30 est également demi-heure (30 minutos). la table de 30 se usa fréquemment en calculs de pourcentage (30% de descuento).",
      31: "Multiplier par 31 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier. El méthode la plus pratique es Penser à 31 como 30+1: multiplica un nombre por 30 y ajoutez-lui Le nombre mismo. 31 días es Le nombre máximo de días dans de nombreux mois (enero, marzo, mayo, julio, agosto, octubre, diciembre). Aprender la table de 31 développe des compétences de calcul mental avec de grands nombres.",
      32: "Multiplier par 32 est la cinquième puissance del 2 (2⁵=2×2×2×2×2=32). Esto hace posible aprender el 32 mediante cadenas de duplicación. vous pouvez doubler el 16 para obtener 32. 32 grados Fahrenheit es el point de congélation del agua. En informática, los systèmes de 32 bits son comunes. Las relaciones 32=4×8=2×16 offrent différentes métodos de cálculo.",
      33: "Multiplier par 33 utilise la relation 3×11. Si vous connaissez la table de 11, vous pouvez la tripler, o Si vous connaissez la table de 3, puedes multiplicarla por 11 pour trouver la table de 33. El 33 es Le nombre repdigit de deux chiffres más grande (repetición de los mismos dígitos). Que tous les chiffres del 33 sean iguales crea algunos modÃ¨les interesantes.",
      34: "Multiplier par 34 est le double de 17 (34=2×17). Si vous connaissez la table de 17, vous pouvez doubler cada rÃ©sultat pour trouver la table de 34. La addition de les chiffres en 34 es 7 (3+4=7), lo que conduce a modÃ¨les relacionados con el 7. Penser à 34 como 35-1 o 30+4 facilite les calculs.",
      35: "Multiplier par 35 utilise la relation 5×7. Si les deux tables son conocidas, Multiplier par 35 est assez facile. Tous les multiples del 35 se terminent par 5 o 0 (como los múltiplos del 5). 35 minutos son 5 minutos más que demi-heure. La relación 35=5×7 combina las propriÃ©tÃ©s de les deux tables del 5 y del 7.",
      36: "Multiplier par 36 es una de las tablas les plus polyvalentes. Como 36=6×6=4×9=3×12=2×18, peut être calculé de nombreuses façons diferentes. El 36 es le carré de 6 (6²). El 36 son múltiplos de une douzaine completa (1 docena = 12, 3 docenas = 36). El 36 tiene nombreux diviseurs, lo que lo hace très utile en fracciones.",
      37: "Multiplier par 37 nécessite des stratégies especiales parce que c'est nombre premier. Penser à 37 como 40-3 o 35+2 facilite les calculs. El 37 tiene relaciones interesantes con números repdigit: 37×3=111. Esta propriÃ©tÃ© especial del 37 se puede usar para algunos cálculos trucos.",
      38: "Multiplier par 38 est le double de 19 (38=2×19). Si vous connaissez la table de 19, vous pouvez doubler cada rÃ©sultat pour trouver la table de 38. Penser à 38 como 40-2 facilite le calcul mental. 38 grados Celsius es fièvre légère para la température corporelle humaine.",
      39: "Multiplier par 39 utilise la relation 3×13. Como 39=3×13, peut être calculé triplicando la table de 13 o multiplicando la table de 3 por 13. El méthode la plus pratique es Penser à 39 como 40-1. El 39 es un nombre interesante divisible à la fois par 3 et par 13.",
      40: "Multiplier par 40 utilise la relation 4×10. Para multiplicar un nombre por 40, vous pouvez le multiplier por 10 y luego multiplicar el rÃ©sultat por 4. O multiplic por 4 y agrega un cero al final. El 40 se usa fréquemment en la vida diaria: 40 horas de semaine de travail, 40 años se considera mediana edad. la table de 40 es très régulier porque son los 10s multiplicados por 4.",
      41: "Multiplier par 41 développe des compétences de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. El méthode la plus pratique es Penser à 41 como 40+1: multiplica un nombre por 40 y ajoutez-lui Le nombre mismo. El 41 es un nombre primo y ne peut pas être dérivé simplemente de otras tablas. Aprender la table de 41 augmente la capacité de calcular rápidamente avec de grands nombres.",
      42: "Multiplier par 42 es una de las tablas les plus polyvalentes. Como 42=6×7=2×21=3×14, peut être calculé de multiples façons. El 42 es célèbre dans la culture de science-fiction como 'La RÃ©ponse Final al Universo, la Vida y Todo' (Guía del Autoestopista Galáctico). Como combina las tablas del 6 y del 7, renforce les deux.",
      43: "Multiplier par 43 nécessite des stratégies especiales parce que c'est nombre premier. Penser à 43 como 40+3 o 45-2 facilite les calculs. El 43 es un nombre primo y est divisible uniquement por 1 y 43. Aprender la table de 43 développe la capacité de pensar creativamente con números.",
      44: "Multiplier par 44 es cuatro fois el 11 (44=4×11). Si vous connaissez la table de 11, vous pouvez la quadrupler, o multiplicar la table de 4 por 11 para calcularla. La relación 44=2×22 offre également un método diferente. El 44 muestra un modèle similaire a repdigit y tiene propriÃ©tÃ©s de nombres pairs.",
      45: "Multiplier par 45 utilise la relation 5×9. Si les deux tables son conocidas, Multiplier par 45 es fácil. 45 grados es medio ángulo recto, un ángulo important en géométrie. 45 minutos son trois quarts d'heure (45 minutos = 0.75 horas). Tous les multiples del 45 se terminent par 5 o 0.",
      46: "Multiplier par 46 est le double de 23 (46=2×23). Si vous connaissez la table de 23, vous pouvez doubler cada rÃ©sultat pour trouver la table de 46. Penser à 46 como 45+1 o 50-4 facilite les calculs. El 46 es Le nombre total de chromosomes humains (23 pares).",
      47: "Multiplier par 47 nécessite des stratégies mentales en raison de ses propriÃ©tÃ©s de nombre premier. Los méthodes les plus efficaces son Penser à 47 como 50-3 o 45+2. El 47 es un nombre primo y tiene propriÃ©tÃ©s mathématiques especiales. Aprender la table de 47 développe la capacité de trabajar cómodamente con números complejos.",
      48: "Multiplier par 48 tiene muchas relaciones de factores. Como 48=6×8=4×12=3×16=2×24, peut être calculé de multiples façons. Como el 48 es 4 fois 12, es útil en cálculos de docenas (4 docenas). 48 horas = 2 días, se encuentra fréquemment en calculs de temps.",
      49: "Multiplier par 49 es le carré de 7 (49=7×7=7²). Esta relación especial requiere conocer perfectamente la table de 7. Penser à 49 como 50-1 facilita muchísimo el calcul mental. Como es un nombre cuadrado, el 49 es important en géométrie y cálculos de área. El 49 est également importante para modÃ¨les matemáticos, aunque no es un échiquier 7×7.",
      50: "Multiplier par 50 utilise la relation 5×10 y es una de las tablas plus facilees. Para multiplicar un nombre por 50, vous pouvez le multiplier por 5 y agregar un cero al final. O Penser à ello como la moitié de 100. El 50 se usa frecuentemente: demi-siècle, y en calculs de pourcentage (50%=1/2).",
      51: "Multiplier par 51 usa la estrategia 50+1. Para multiplicar un nombre por 51, multipliez-le por 50 y ajoutez-lui Le nombre mismo. La relación 51=3×17 offre une méthode alternativo. Aprender la table de 51 développe la capacité de calcular con números cercanos a 50.",
      52: "Multiplier par 52 utilise la relation 4×13. Es Le nombre de semanas en un año (52 semanas) y Le nombre de cartas en una jeu standard (52 cartas). Como 52=2×26, duplicar la table de 26 fonctionne également. Penser à 52 como 50+2 facilite le calcul mental. cette table es très utile en calculs de temps y calendario.",
      53: "Multiplier par 53 développe des stratégies de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. Los métodos más prácticos son Penser à 53 como 50+3 o 55-2. El 53 es un nombre primo y est divisible uniquement por 1 y 53. Aprender la table de 53 augmente la capacité de trabajar con nombres premiers grandes y profundiza el pensée mathématique.",
      54: "Multiplier par 54 es una de las tablas les plus polyvalentes. Como 54=6×9=2×27=3×18, peut être calculé de nombreuses façons diferentes. El 54 es 3 fois la addition de los nombres del 1 al 10 (1+2+...+10=55 aproximadamente). Como combina las tablas del 6 y del 9, renforce les deux. Tener nombreux diviseurs lo hace útil en cálculos de fracciones.",
      55: "Multiplier par 55 utilise la relation 5×11. Si les deux tables son conocidas, Multiplier par 55 es fácil. La estrategia 55=50+5 est également muy práctica. El 55 es la addition de los nombres del 1 al 10 (1+2+3+...+10=55), esta relación matemática especial lo hace interesante. El patrón del 5 (termina en 5 o 0) facilite le calcul.",
      56: "Multiplier par 56 utilise la relation 7×8. Como combina estas dos tablas difíciles, renforce les deux. Las alternativas 56=4×14=2×28 offrent différentes estrategias. El 56 es Le nombre total de horas en 7 días con journées de travail de 8 horas (7×8). Penser à 56 como 60-4 también facilite le calcul mental.",
      57: "Multiplier par 57 utilise la relation 3×19. Triplicar la table de 19 o multiplicar la table de 3 por 19 funciona. Penser à 57 como 60-3 o 55+2 facilite le calcul. Como 57=3×19, es divisible à la fois par 3 et par 19. Aprender la table de 57 développe la capacité de trabajar avec de grands nombres de nivel medio.",
      58: "Multiplier par 58 est le double de 29 (58=2×29). Si vous connaissez la table de 29, vous pouvez doubler cada rÃ©sultat pour trouver la table de 58. Penser à 58 como 60-2 o 50+8 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. cette table refuerza estrategias de duplicación y approximation de números redondos.",
      59: "Multiplier par 59 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier y proximidad al 60. El método más efectivo es Penser à 59 como 60-1: multiplica un nombre por 60 y soustrayez-lui Le nombre mismo. El 59 es un nombre primo y est divisible uniquement por 1 y 59. la table de 59 proporciona contexto para cálculos de minutos y tiempo (59 minutos) debido a su proximidad al 60.",
      60: "Multiplier par 60 utilise la relation 6×10 y es très utile. Para multiplicar un nombre por 60, vous pouvez le multiplier por 6 y agregar un cero al final. El 60 es Le nombre de minutos en una hora, Le nombre de segundos en un minuto, y un sexto de los 360° de un círculo. Hay muchas relaciones de factorest comme 60=2×30=3×20=4×15=5×12. cette table es crítica para calculs de temps.",
      61: "Multiplier par 61 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier y proximidad al 60. El méthode la plus pratique es Penser à 61 como 60+1: multiplica un nombre por 60 y ajoutez-lui Le nombre mismo. El 61 es un nombre primo y est divisible uniquement por 1 y 61. Aprender la table de 61 développe la capacité de calcul mental con números por encima de 60.",
      62: "Multiplier par 62 est le double de 31 (62=2×31). Si vous connaissez la table de 31, vous pouvez doubler cada rÃ©sultat pour trouver la table de 62. Penser à 62 como 60+2 o 65-3 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. cette table es útil para duplicación y cálculos cercanos a 60.",
      63: "Multiplier par 63 utilise la relation 7×9. Como combina estas dos tablas importantes, renforce les deux. La alternativa 63=3×21 ofrece una estrategia diferente. Penser à 63 como 60+3 o 65-2 facilite le calcul mental. El 63 es muy versátil porque es divisible à la fois par 7 como por 9.",
      64: "Multiplier par 64 es una potencia de 2 (64=2⁶=8×8). Como la arquitectura de 64 bits es común en informática, es important en la era tecnológica. La relación 64=8² (ocho al cuadrado) es crítica para entender números cuadrados. Penser à 64 como 60+4 o 65-1 facilite le calcul. Hay 64 casillas en un échiquier (8×8).",
      65: "Multiplier par 65 utilise la relation 5×13. Si les deux tables son conocidas, Multiplier par 65 es fácil. El 65 se usa como âge de la retraite dans de nombreux pays. Penser à 65 como 60+5 o 70-5 facilite le calcul mental. El patrón del 5 (termina en 5 o 0) facilite le calcul.",
      66: "Multiplier par 66 utilise la relation 6×11 o la relación 2×33. Como 66=6×11, tiene modÃ¨les similares a repdigit. Penser à 66 como 60+6 o 70-4 facilite le calcul. El 66 es divisible à la fois par 6 como por 11. Como es un nombre par, tous ses multiples también son pares.",
      67: "Multiplier par 67 développe des stratégies de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. Los métodos más prácticos son Penser à 67 como 70-3 o 65+2. El 67 es un nombre primo y est divisible uniquement por 1 y 67. Aprender la table de 67 augmente la capacité de trabajar con nombres premiers grandes.",
      68: "Multiplier par 68 utilise la relation 4×17 o la relación 2×34. Cuadruplicar la table de 17 o duplicar la table de 34 funciona. Penser à 68 como 70-2 o 60+8 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 68 es divisible à la fois par 4 como por 17.",
      69: "Multiplier par 69 utilise la relation 3×23. Triplicar la table de 23 o multiplicar la table de 3 por 23 funciona. La estrategia plus facile es Penser à 69 como 70-1: multiplica un nombre por 70 y soustrayez-lui Le nombre mismo. Como 69=3×23, es divisible à la fois par 3 et par 23. cette table es útil para cálculos cercanos a 70.",
      70: "Multiplier par 70 utilise la relation 7×10 y es très utile. Para multiplicar un nombre por 70, vous pouvez le multiplier por 7 y agregar un cero al final. El 70 se asocia con la esperanza de vida promedio de una persona (entre 70-80 en la mayoría de los países). Hay relaciones de factores alternativos como 70=2×35=5×14. cette table refuerza la table de 7.",
      71: "Multiplier par 71 développe des stratégies de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. El méthode la plus pratique es Penser à 71 como 70+1: multiplica un nombre por 70 y ajoutez-lui Le nombre mismo. El 71 es un nombre primo y est divisible uniquement por 1 y 71. Aprender la table de 71 desarrolla la capacidad de calcular rápidamente con nombres premiers grandes.",
      72: "Multiplier par 72 es una de las tablas les plus polyvalentes. Como 72=8×9=6×12=4×18=3×24=2×36, peut être calculé de nombreuses façons diferentes. El 72 es 3 fois Le nombre de horas en un día (72 horas = 3 días). Tener nombreux diviseurs lo hace extremadamente útil en cálculos de fracciones. El 72 es 6 fois 12 (6 docenas).",
      73: "Multiplier par 73 desarrolla propriÃ©tÃ©s de nombre premier y estrategias de calcul mental. Los métodos más prácticos son Penser à 73 como 70+3 o 75-2. El 73 es un nombre primo y est divisible uniquement por 1 y 73. El 73 est également el primo número 21 y tiene propriÃ©tÃ©s mathématiques interesantes.",
      74: "Multiplier par 74 utilise la relation 2×37. Si vous connaissez la table de 37, vous pouvez doubler cada rÃ©sultat pour trouver la table de 74. Penser à 74 como 70+4 o 75-1 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 74 es divisible à la fois par 2 como por 37.",
      75: "Multiplier par 75 utilise les relations 3×25=5×15. El 75 es tres cuartos de 100 (75%=3/4). También se puede expresar como 75=3×5×5. Penser à 75 como 70+5 o 80-5 facilite le calcul mental. El patrón del 5 (termina en 5 o 0) facilite le calcul. Se usa fréquemment en calculs de pourcentage (75%=¾).",
      76: "Multiplier par 76 utilise la relation 4×19 o la relación 2×38. Cuadruplicar la table de 19 o duplicar la table de 38 funciona. Penser à 76 como 75+1 o 80-4 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 76 es divisible à la fois par 4 como por 19.",
      77: "Multiplier par 77 utilise la relation 7×11. Si les deux tables son conocidas, Multiplier par 77 es fácil. El 77 muestra un modèle similaire a repdigit (repetición de 7s). Penser à 77 como 80-3 o 75+2 facilite le calcul. Como 77=7×11, es divisible à la fois par 7 como por 11.",
      78: "Multiplier par 78 utilise les relations 2×39=3×26=6×13. peut être calculé de multiples façons. Penser à 78 como 80-2 o 75+3 facilite le calcul mental. Como es un nombre par, tous ses multiples también son pares. El 78 es divisible por 2, 3, 6, 13, 26, 39.",
      79: "Multiplier par 79 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier. La estrategia plus facile es Penser à 79 como 80-1: multiplica un nombre por 80 y soustrayez-lui Le nombre mismo. El 79 es un nombre primo y est divisible uniquement por 1 y 79. Aprender la table de 79 establece una base perfecta para cálculos cercanos a 80.",
      80: "Multiplier par 80 utilise la relation 8×10 y es très utile. Para multiplicar un nombre por 80, vous pouvez le multiplier por 8 y agregar un cero al final. Hay relaciones de factores alternativos como 80=2×40=4×20=5×16. El 80 se asocia con el límite superior de la esperanza de vida promedio (entre 70-80 en la mayoría de los países). cette table refuerza la table de 8.",
      81: "Multiplier par 81 es le carré de 9 (81=9×9=9²). Esta relación especial requiere conocer perfectamente la table de 9. est également interesante que 81=3⁴ (la cuarta potencia de 3). Penser à 81 como 80+1 facilite le calcul mental. Como 81 es un nombre cuadrado, es important en géométrie y cálculos de área.",
      82: "Multiplier par 82 utilise la relation 2×41. Si vous connaissez la table de 41, vous pouvez doubler cada rÃ©sultat pour trouver la table de 82. Penser à 82 como 80+2 o 85-3 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 82 es divisible à la fois par 2 como por 41.",
      83: "Multiplier par 83 développe des stratégies de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. Los métodos más prácticos son Penser à 83 como 80+3 o 85-2. El 83 es un nombre primo y est divisible uniquement por 1 y 83. Aprender la table de 83 augmente la capacité de trabajar con nombres premiers grandes.",
      84: "Multiplier par 84 es una de las tablas les plus polyvalentes. Como 84=7×12=6×14=4×21=3×28=2×42, peut être calculé de nombreuses façons diferentes. El 84 es 12 fois Le nombre de horas en una semana, o 7 fois un medio día de 12 horas. Tener nombreux diviseurs lo hace útil en cálculos de fracciones.",
      85: "Multiplier par 85 utilise la relation 5×17. Si les deux tables son conocidas, Multiplier par 85 es fácil. La estrategia 85=80+5 o 90-5 est également muy práctica. El patrón del 5 (termina en 5 o 0) facilite le calcul. El 85 es divisible à la fois par 5 como por 17.",
      86: "Multiplier par 86 utilise la relation 2×43. Si vous connaissez la table de 43, vous pouvez doubler cada rÃ©sultat pour trouver la table de 86. Penser à 86 como 90-4 o 85+1 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 86 es divisible à la fois par 2 como por 43.",
      87: "Multiplier par 87 utilise la relation 3×29. Triplicar la table de 29 o multiplicar la table de 3 por 29 funciona. Penser à 87 como 90-3 o 85+2 facilite le calcul. Como 87=3×29, es divisible à la fois par 3 et par 29.",
      88: "Multiplier par 88 utilise la relation 8×11 o la relación 4×22. El 88 es un nombre repdigit (repetición de 8s). También se puede expresar como 88=2×44. Penser à 88 como 90-2 o 80+8 facilite le calcul mental. Como es un nombre par, tous ses multiples también son pares.",
      89: "Multiplier par 89 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier. La estrategia plus facile es Penser à 89 como 90-1: multiplica un nombre por 90 y soustrayez-lui Le nombre mismo. El 89 es un nombre primo y est divisible uniquement por 1 y 89. Aprender la table de 89 establece una base perfecta para cálculos cercanos a 90.",
      90: "Multiplier par 90 utilise la relation 9×10 y es très utile. Para multiplicar un nombre por 90, vous pouvez le multiplier por 9 y agregar un cero al final. Hay muchas relaciones de factorest comme 90=2×45=3×30=5×18=6×15. El 90 grados es un ángulo recto, muy important en géométrie. cette table refuerza la table de 9.",
      91: "Multiplier par 91 utilise la relation 7×13. Si les deux tables son conocidas, Multiplier par 91 es fácil. Que 91=7×13 es importante para entender el producto de nombres premiers. Penser à 91 como 90+1 facilite le calcul mental. Es divisible à la fois par 7 como por 13.",
      92: "Multiplier par 92 utilise la relation 4×23 o la relación 2×46. Cuadruplicar la table de 23 funciona. Penser à 92 como 90+2 o 100-8 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 92 es divisible à la fois par 4 como por 23.",
      93: "Multiplier par 93 utilise la relation 3×31. Triplicar la table de 31 o multiplicar la table de 3 por 31 funciona. Penser à 93 como 90+3 o 100-7 facilite le calcul. Como 93=3×31, es divisible à la fois par 3 et par 31.",
      94: "Multiplier par 94 utilise la relation 2×47. Si vous connaissez la table de 47, vous pouvez doubler cada rÃ©sultat pour trouver la table de 94. Penser à 94 como 100-6 o 90+4 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 94 es divisible à la fois par 2 como por 47.",
      95: "Multiplier par 95 utilise la relation 5×19. Si les deux tables son conocidas, Multiplier par 95 es fácil. La estrategia 95=100-5 es muy práctica. El patrón del 5 (termina en 5 o 0) facilite le calcul. El 95 es divisible à la fois par 5 como por 19. Es útil en calculs de pourcentage (95%).",
      96: "Multiplier par 96 es una de las tablas les plus polyvalentes. Como 96=8×12=6×16=4×24=3×32=2×48, peut être calculé de nombreuses façons diferentes. Que 96=2⁵×3 es important en términos de potencias de 2. Tener nombreux diviseurs lo hace útil en cálculos de fracciones.",
      97: "Multiplier par 97 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier. La estrategia plus facile es Penser à 97 como 100-3: multiplica un nombre por 100 y soustrayez-lui 3 fois Le nombre. El 97 es un nombre primo y est divisible uniquement por 1 y 97. Ser Le nombre primo más cercano a 100 facilita mucho el calcul mental.",
      98: "Multiplier par 98 utilise la relation 2×49. Si vous connaissez la table de 49, vous pouvez doubler cada rÃ©sultat pour trouver la table de 98. La relación 98=2×7² es interesante. Penser à 98 como 100-2 es la estrategia plus facile. Como es un nombre par, tous ses multiples también son pares.",
      99: "Multiplier par 99 utilise la relation 9×11. El 99 es un nombre repdigit (repetición de 9s). Penser à 99 como 100-1 es la estrategia plus facile: multiplica un nombre por 100 y soustrayez-lui Le nombre mismo. Como 99=9×11, es divisible à la fois par 9 como por 11. Es una de las tablas plus facilees para el calcul mental.",
      100: "Multiplier par 100 es la tabla plus facile! Para multiplicar un nombre por 100, solo agrega dos ceros al final. Que 100=10×10=10² es fundamental para entender el sistema decimal. El 100 es la base de calculs de pourcentage (100%=completo) y el sistema decimal. Tiene importancia crítica para monedas, unidades de medida y matemática cotidiana.",
    }
    return meanings[number] || `Multiplier par ${number} signifie sumar Le nombre ${number} repetidamente. Cada vez que multiplicas, estás contando groupes de ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "la table de 1 es la base de todas las operaciones de multiplicación. Enseña a les étudiants que los números tienen una identidad: al multiplicarse por 1, permanecen como ellos mismos. Este concepto es crucial para comprender propriÃ©tÃ©s algebraicas posteriores. Aunque parezca simple, aprender cette table genera confianza y establece el patrón de que la multiplicación es ordenada y predecible.",
      2: "la table de 2 es generalmente la primera tabla de multiplicación real que aprenden les étudiants, y por una buena razón. Duplicar es un concepto natural que los niños encuentran diariamente. Aprender cette table hace el calcul mental mucho más rápido y prepara a les étudiants para nombres pairs, fracciones (mitades) y división básica. Muchos estudiantes la encuentran la tabla plus facile, lo que genera confianza para tablas más difíciles.",
      3: "la table de 3 cierra la brecha entre las tablas fáciles y desafiantes. Requiere que les étudiants vayan más allá de la simple duplicación y comiencen a reconocer nuevos modÃ¨les. cette table se ve constantemente en contextos del mundo real como contar de tres en tres, entender formas triangulares y trabajar con tiempo (tres periodos por día). les étudiants que aprenden la table de 3 demuestran que pueden hacer conteo abstracto.",
      4: "Aprender la table de 4 refuerza la comprensión de nombres pairs y pensamiento geométrico de les étudiants. Como 4 es el doble de 2, les étudiants pueden usar la table de 2 como escalera, lo que enseña eficiencia matemática. cette table es necesaria para entender cuadrados, cálculos de área y divisiones por cuartos. También se usa fréquemment en situaciones cotidianas como contar patas de sillas o ruedas de autos.",
      5: "la table de 5 es una de las más prácticas y ricas en modÃ¨les. les étudiants la aman porque cada respuesta termina en 0 o 5, haciéndola extremadamente predecible. cette table se conecta directamente con el dinero (contar de cinco en cinco), decir la hora (intervalos de 5 minutos) y sistemas de medición. Aprender la table de 5 da confianza a les étudiants y muestra que las mathématiques tienen modÃ¨les hermosos y consistentes.",
      6: "Aprender la table de 6 permite a les étudiants transicionar a multiplicaciones más complejas. Que 6 sea múltiplo tanto de 2 como de 3 muestra a les étudiants la propriÃ©tÃ© distributiva de la multiplicación. cette table se ve constantemente en la vida diaria: contar cartones de huevos, juegos de dados, paquetes de seis. Aprender la table de 6 da a les étudiants confianza para trabajar con números más grandes.",
      7: "la table de 7 realmente pone a prueba las habilidades de memorización y reconocimiento de modÃ¨les de les étudiants. Como 7 es un nombre primo, ne peut pas être dérivé fácilmente de otras tablas, haciéndola una experiencia de aprendizaje desafiante pero gratificante. Aprender la table de 7 da a les étudiants la oportunidad de superar desafíos y desarrollar nuevas estrategias. Se usa en muchos lugares, desde contar los días de la semana hasta cálculos de calendario.",
      8: "Aprender la table de 8 ayuda a les étudiants a reforzar estrategias de duplicación. Como 8 = 2 × 2 × 2, les étudiants pueden aprender la table de 8 usando las tablas del 2 y 4. cette table es important en cálculos de área (figuras de 8 lados), teoría musical (octavas) y ciencias de la computación (8 bits = 1 byte). Aprender la table de 8 développe des compétences de pensée mathématique.",
      9: "la table de 9 tiene uno de los modÃ¨les matemáticos más fascinantes. La regla de addition de dígitos y el truco de los dedos muestran a les étudiants el lado mágico de las mathématiques. Aprender la table de 9 no es solo memorización, enseña reconocimiento de modÃ¨les y comprensión de relaciones mathématiques. cette table es perfecta para desarrollar habilidades de calcul mental y construir confianza matemática.",
      10: "la table de 10 es fundamental para enseñar el concepto de valor posicional. Cuando les étudiants aprenden a Multiplier par 10, comienzan a entender cómo funciona nuestro sistema decimal. cette table es vital para cálculos de dinero, conversiones entre unidades de medida y trabajo avec de grands nombres. Aprender la table de 10 crea una base sólida para entender todas las demás tablas de multiplicación y mejora enormemente las habilidades de matemática mental.",
      11: "la table de 11 es perfecta para desarrollar habilidades de reconocimiento de modÃ¨les. El patrón de repetición que surge al multiplicar con nombres de un chiffre (11×4=44) muestra a les étudiants la belleza de las mathématiques. Aprender la table de 11 développe des stratégies de calcul mental y augmente la capacité de reconocer modÃ¨les numéricos. cette table genera confianza para trabajar avec de grands nombres.",
      12: "la table de 12 es una de las más utilizadas en la vida diaria. El 12 se usa en muchas áreas como contar docenas, leer el reloj y planificación anual. Que el 12 tenga nombreux diviseurs (1,2,3,4,6,12) lo hace ideal para entender fracciones y proporciones. Aprender cette table mejora significativamente las habilidades mathématiques prácticas.",
      13: "la table de 13 desarrolla la resiliencia matemática de les étudiants. Por ser un nombre primo, no hay atajos fáciles, lo que requiere verdadera comprensión. Aprender la table de 13 fortalece las habilidades aritméticas mentales y enseña a Penser à los nombres de diferentes maneras (estrategia de descomposición 10+3).",
      14: "la table de 14 ayuda a reforzar la table de 7. La relación 14=2×7 muestra a les étudiants la propriÃ©tÃ© distributiva de la multiplicación. Es necesaria para calcular periodos semanales y quincenales. cette table profundiza la comprensión de las propriÃ©tÃ©s de nombres pairs y estrategias de duplicación.",
      15: "la table de 15 combina tanto la table de 3 como la del 5, lo cual es excelente para entender conexiones mathématiques. Es vital para cálculos de cuarto de hora (15 minutos). Aprender la table de 15 enseña a entender reglas de divisibilidad y ver relaciones entre números. Se usa fréquemment en calculs de pourcentage (como propina del 15%).",
      16: "la table de 16 es perfecta para entender sistemas binarios y números exponenciales. La relación 2⁴=16 muestra el poder de los exponentes. Tiene importancia crítica en ciencias de la computación (16 bits, sistema hexadecimal). cette table desarrolla la comprensión de estrategias de múltiple duplicación y secuencias geométricas.",
      17: "la table de 17 es una herramienta excelente para desarrollar estrategias de matemática mental. Ser un nombre primo obliga a les étudiants a encontrar métodos creativos de cálculo (estrategias 20-3 o 10+7). cette table développe des compétences de résolution de problèmes y flexibilidad con los números.",
      18: "la table de 18 muestra la riqueza de las relaciones mathématiques. Que 18=2×9=3×6 enseña a entender diferentes combinaciones de factores. Tiene importancia cultural como âge de la majorité. cette table enseña a abordar un problema con múltiples estrategias y elegir el método más eficiente.",
      19: "la table de 19 maximiza las habilidades de calcul mental. La estrategia '20-1' enseña a les étudiants a usar números complementarios. Ser un nombre primo enfatiza la comprensión real más que el reconocimiento de modÃ¨les. cette table développe la capacité de dividir cálculos complejos en pasos simples.",
      20: "la table de 20 es crítica pour renforcer el sistema de valor posicional y trabajar cómodamente avec de grands nombres. La relación 20=2×10 profundiza la comprensión del sistema decimal. Se usa constantemente en cálculos de dinero (billetes de 20) y mediciones. cette table forma la base para calculs de pourcentage (descuento del 20%).",
      21: "la table de 21 es perfecta para entender la relación de factorización 3×7. cette table muestra a les étudiants que un nombre puede tener más de un factor. El 21 tiene importancia social como edad para transacciones legales y mayoría de edad. Aprender cette table profundiza la comprensión de las relaciones entre factores y múltiplos.",
      22: "la table de 22 ayuda a reforzar la table de 11. La relación 22=2×11 fortalece las estrategias de duplicación. Se usa dans les sports (équipe de football) y comptage quotidien. cette table desarrolla la comprensión de propriÃ©tÃ©s de nombres pairs y relaciones mathématiques.",
      23: "la table de 23 développe des compétences para trabajar con nombres premiers. Como ne peut pas être dérivé de otras tablas, les étudiants deben desarrollar nuevas estrategias. El 23 es un nombre important en biologie (paires de chromosomes). Aprender cette table aumenta la flexibilidad mental y capacidades de résolution de problèmes.",
      24: "la table de 24 es una de las más útiles en la vida diaria. Se encuentra constantemente debido a la relación día-hora (24 horas). Que el 24 tenga nombreux diviseurs (1,2,3,4,6,8,12,24) lo hace ideal para fracciones y proporciones. cette table développe des compétences de gestión del tiempo y planificación.",
      25: "la table de 25 es fundamental para entender números cuadrados (5²). Tiene un papel central en sistemas monetarios (25 centavos). El patrón regular del 25 (25,50,75,00) facilita mucho los cálculos. cette table se usa fréquemment en calculs de pourcentage (25%=1/4) y fracciones.",
      26: "la table de 26 ayuda a reforzar la table de 13. Es important en sistemas alfabéticos (26 letras). La relación 26=2×13 muestra la conexión entre nombres premiers y pares. Aprender cette table desarrolla la capacidad de ver relaciones mathématiques.",
      27: "la table de 27 es crítica para entender números exponenciales (3³). Es important en géométrie (cubo 3×3×3 en espacio 3D) y cálculos de volumen. La relación 27=3×9 fortalece la conexión entre las tablas del 3 y 9. cette table forma una base en pensée mathématique y números exponenciales.",
      28: "la table de 28 es importante para conocimiento de calendario (mes de febrero). Que el 28 sea un nombre perfecto (addition de divisores igual à lui-même) muestra propriÃ©tÃ©s mathématiques especiales. La relación 28=4×7 profundiza la comprensión de factorización. cette table se usa en calculs de temps y planificación semanal.",
      29: "la table de 29 es perfecta para perfeccionar estrategias de nombres premiers. La relación 30-1 enseña a usar números complementarios. Es necesaria para conocimiento de calendario (febrero en année bissextile). Aprender cette table maximiza las habilidades de calcul mental.",
      30: "la table de 30 es el puente entre el sistema decimal y la multiplicación. La relación 30=3×10 fortalece la comprensión del valor posicional. Se usa constantemente en tiempo (demi-heure), calendario (días del mes) y medidas de ángulo (30°). cette table forma la base de calculs de pourcentage (descuento del 30%) y matemática práctica.",
      31: "Multiplier par 31 es crítico para el conocimiento del calendario. Como la mayoría de los meses tienen 31 días, se usa constantemente en cálculos de fecha y tiempo. Como 31 es un nombre primo, es perfecto para desarrollar estrategias de calcul mental. La estrategia 30+1 enseña a usar números complementarios y proporciona competencia en cálculos de números grandes.",
      32: "Multiplier par 32 es importante para entender números exponenciales (2⁵) y sistemas binarios. Como la arquitectura de 32 bits es común en ciencias de la computación, tiene importancia práctica en la era de la tecnología. Es perfecto para perfeccionar cadenas de duplicación. Se usa en conversiones de temperatura (Fahrenheit).",
      33: "Multiplier par 33 fortalece las relaciones mathématiques combinando las tablas del 3 y 11. La propriÃ©tÃ© repdigit (33, 66, 99...) facilita el reconocimiento de modÃ¨les. La relación 33=3×11 profundiza la comprensión de las conexiones entre factores y múltiplos. cette table enseña estrategias de multiplicación múltiple.",
      34: "Multiplier par 34 ayuda a reforzar la table de 17. La relación 34=2×17 muestra la conexión entre nombres premiers y pares. cette table desarrolla flexibilidad mental y métodos de cálculo alternativos (35-1, 30+4). Refuerza propriÃ©tÃ©s de nombres pairs y habilidades de duplicación.",
      35: "Multiplier par 35 développe des compétences de factorización como combinación de las tablas del 5 y 7. La relación 5×7 renforce les deux tablas. Se usa en calculs de temps (35 minutos) y matemática cotidiana. cette table crea modÃ¨les reconocibles con el patrón del 5 (último dígito 5 o 0).",
      36: "Multiplier par 36 es una de las tablas más útiles. Que 36=6² es crítico para entender números cuadrados. Tener nombreux diviseurs (1,2,3,4,6,9,12,18,36) lo hace ideal para fracciones y proporciones. Se usa fréquemment en el sistema de docenas (3 docenas) y medidas de ángulos (un décimo de 360°).",
      37: "Multiplier par 37 perfecciona propriÃ©tÃ©s de nombres premiers y estrategias de matemática mental. Relaciones especialest comme 37×3=111 proporcionan comprensión profunda de modÃ¨les numéricos. Estrategias como 40-3 o 35+2 desarrollan habilidades creativas de résolution de problèmes. cette table fomenta la curiosidad matemática y el espíritu de descubrimiento.",
      38: "Multiplier par 38 ayuda a reforzar la table de 19. La relación 38=2×19 combina estrategias de duplicación y nombres premiers. El enfoque 40-2 enseña a usar números complementarios. Tiene importancia práctica en contexto de salud (température corporelle).",
      39: "Multiplier par 39 fortalece las conexiones mathématiques combinando las tablas del 3 y 13. La estrategia 40-1 enseña a calcular rápidamente usando números redondos. cette table développe des compétences de factorización múltiple (3×13) y proporciona flexibilidad mental.",
      40: "la table de 40 es perfecta para comprender profundamente el sistema decimal. La relación 40=4×10 muestra la conexión entre valor posicional y multiplicación. Se usa mucho en la vida diaria debido a horas de trabajo (semana de 40 horas) y normas sociales (40 años). cette table forma una base para números grandes y calculs de pourcentage.",
      41: "la table de 41 lleva las estrategias de nombres premiers a un nivel avanzado. El enfoque 40+1 proporciona dominio en el uso de números complementarios. Por ser un nombre primo, requiere flexibilidad mental y resolución creativa de problemas. cette table développe la capacité de calcular rápidamente avec de grands nombres.",
      42: "la table de 42 perfecciona las habilidades de factorización. Las relaciones 42=6×7=2×21=3×14 enseñan a ver conexiones mathématiques. Como combina las tablas del 6 y 7, renforce les deux. Es memorable debido a referencias de la cultura pop (Guía del Autoestopista Galáctico).",
      43: "la table de 43 desarrolla propriÃ©tÃ©s de nombres premiers y estrategias de calcul mental. Enfoques alternativos como 40+3 o 45-2 proporcionan flexibilidad en el pensée mathématique. cette table aumenta la habilidad de trabajar creativamente con números y enriquece las estrategias de résolution de problèmes.",
      44: "la table de 44 es perfecta pour renforcer la table de 11. La relación 44=4×11 développe des compétences de multiplicación múltiple. El modèle similaire a repdigit (44, 88) facilita el reconocimiento visual. Profundiza la comprensión de propriÃ©tÃ©s de nombres pairs y ser múltiplo de cuatro.",
      45: "la table de 45 fortalece las relaciones mathématiques combinando las tablas del 5 y 9. Se usa fréquemment en géométrie (ángulo de 45°) y calculs de temps (trois quarts d'heure). La relación 5×9 refuerza tanto la table de 5 como la del 9. cette table es très utile para matemática práctica y cálculos cotidianos.",
      46: "la table de 46 ayuda a reforzar la table de 23. La relación 46=2×23 combina estrategias de duplicación y nombres premiers. Es un nombre important en biologie (46 cromosomas). cette table desarrolla propriÃ©tÃ©s de nombres pairs y cálculos avec de grands nombres.",
      47: "la table de 47 maximiza las estrategias de nombres premiers. El enfoque 50-3 perfecciona la estrategia de restar de números redondos. Debido a propriÃ©tÃ©s primas, requiere flexibilidad mental y métodos de solución alternativos. cette table proporciona habilidades avanzadas de matemática mental.",
      48: "la table de 48 es una de las les plus polyvalentes. Tener nombreux diviseurs (1,2,3,4,6,8,12,16,24,48) lo hace ideal para fracciones y proporciones. Se usa en el sistema de docenas (4 docenas) y calculs de temps (48 horas=2 días). Las relaciones de factores múltiples profundizan la comprensión de conexiones mathématiques.",
      49: "la table de 49 es crítica para entender números cuadrados (7²). Requiere conocer perfectamente la table de 7 y la refuerza. La estrategia 50-1 enseña cálculo rápido usando números redondos. Es important en géométrie y cálculos de área debido a propriÃ©tÃ©s cuadradas.",
      50: "la table de 50 forma la base de calculs de pourcentage (50%=1/2). La relación 5×10 combina el sistema decimal y la multiplicación. Está directamente conectada con el concepto de mitad (½). Se usa constantemente en sistemas monetarios (50 centavos, 50 pesos), mediciones de tiempo y matemática cotidiana. cette table mejora significativamente las habilidades de cálculo práctico.",
      51: "la table de 51 développe la capacité de trabajar con números cercanos a 50. La estrategia 50+1 refuerza el uso de números complementarios. La relación 3×17 fortalece las habilidades de factorización. Tiene importancia práctica en el contexto de juegos de cartas (52 cartas). cette table enseña a calcular con pequeñas desviaciones de números redondos.",
      52: "la table de 52 es crítica para calculs de temps y calendario. Debido al número de semanas en un año (52 semanas), se usa constantemente en planificación y cálculos anuales. La relación 4×13 refuerza tanto la table de 4 como la del 13. La baraja de cartas (52 cartas) proporciona contexto al pensée mathématique. cette table es muy importante para matemática de vida práctica.",
      53: "la table de 53 lleva las estrategias de nombres premiers a un nivel avanzado. El enfoque 50+3 desarrolla flexibilidad mental y métodos alternativos de cálculo. Debido a propriÃ©tÃ©s primas, requiere resolución creativa de problemas. cette table aumenta la habilidad de trabajar con nombres premiers grandes y expande la profundidad del pensée mathématique.",
      54: "la table de 54 perfecciona las habilidades de factorización múltiple. Las relaciones 54=6×9=2×27=3×18 enseñan a ver conexiones mathématiques. Como combina las tablas del 6 y 9, fortalece ambas. Tener nombreux diviseurs (1,2,3,6,9,18,27,54) lo hace ideal para fracciones y proporciones. cette table fomenta el pensée mathématique flexible.",
      55: "la table de 55 refuerza las relaciones mathématiques combinando las tablas del 5 y 11. La propriÃ©tÃ© de número triangular (1+2+...+10=55) profundiza la comprensión de modÃ¨les matemáticos. La relación 5×11 fortalece les deux tables. cette table forma una base para modÃ¨les numéricos y fórmulas de addition.",
      56: "la table de 56 refuerza tanto la table de 7 como la del 8. 7×8=56 es uno de los pares de multiplicación más difíciles y aprender cette table lo fortalece. Las alternativas 4×14=2×28 enseñan a usar múltiples estrategias. Tiene importancia práctica en cálculos laborales (semana de 7 días × día de 8 horas). cette table proporciona dominio de multiplicaciones difíciles.",
      57: "la table de 57 fortalece las conexiones mathématiques combinando las tablas del 3 y 19. La estrategia 60-3 perfecciona la habilidad de restar de números redondos. La relación 3×19 combina estrategias de nombres premiers y no primos. cette table desarrolla el calcul mental avec de grands nombres de nivel medio.",
      58: "la table de 58 ayuda a reforzar la table de 29. La relación 58=2×29 combina estrategias de duplicación y nombres premiers. El enfoque 60-2 enseña la estrategia de aproximarse a números redondos. cette table forma una base para propriÃ©tÃ©s de nombres pairs y cálculos cercanos a 60.",
      59: "la table de 59 maximiza las estrategias de nombres premiers. El enfoque 60-1 perfecciona el cálculo rápido usando números redondos. Debido a propriÃ©tÃ©s primas, requiere flexibilidad mental y métodos creativos de solución. Tiene importancia práctica en contexto de tiempo (59 minutos, 59 segundos). cette table proporciona habilidades avanzadas de matemática mental.",
      60: "la table de 60 forma la base de calculs de temps (60 minutos=1 hora, 60 segundos=1 minuto). La relación 6×10 combina el sistema decimal y la multiplicación. Tener nombreux diviseurs (1,2,3,4,5,6,10,12,15,20,30,60) lo hace ideal para fracciones y proporciones. Tiene importancia geométrica en medidas de ángulo (360°÷6=60°). cette table es una de las más utilizadas en la vida diaria.",
      61: "la table de 61 lleva las estrategias de nombres premiers a un nivel avanzado. El enfoque 60+1 proporciona asociación con unidades de tiempo (minuto 61, segundo 61). en raison de ses propriÃ©tÃ©s primas, requiere flexibilidad mental y resolución creativa de problemas. cette table développe la capacité de calcular rápidamente con números mayores a 60.",
      62: "la table de 62 ayuda a reforzar la table de 31. La relación 62=2×31 combina estrategias de duplicación y nombres premiers. El enfoque 60+2 enseña la estrategia de calcular cerca de números redondos. cette table forma una base para propriÃ©tÃ©s de nombres pairs y cálculos después de 60.",
      63: "la table de 63 refuerza tanto la table de 7 como la del 9 al combinarlas. 7×9=63 es un par de multiplicación importante. La alternativa 3×21 enseña a usar múltiples estrategias. Ser divisible à la fois par 7 como por 9 lo hace útil para fracciones y proporciones. cette table profundiza la comprensión de relaciones de factores múltiples.",
      64: "la table de 64 es crítica para entender potencias de 2 (números exponenciales). Las relaciones 64=2⁶=8² refuerzan tanto exponentest comme números cuadrados. Tiene importancia tecnológica en ciencias de la computación debido a la arquitectura de 64 bits. El échiquier (8×8=64 casillas) proporciona aplicaciones geométricas. cette table es fundamental para números exponenciales y sistema binario.",
      65: "la table de 65 fortalece las relaciones mathématiques combinando las tablas del 5 y 13. La relación 5×13 renforce les deux tablas. Tiene importancia práctica en contexto social (âge de la retraite 65 años). El patrón del 5 (termina en 5 o 0) facilite le calcul. cette table es útil para matemática de vida práctica.",
      66: "la table de 66 refuerza tanto la table de 6 como la del 11 al combinarlas. La relación 6×11=66 crea un modèle similaire a repdigit. La alternativa 2×33 ofrece diferentes estrategias. Ser divisible à la fois par 6 como por 11 proporciona usos múltiples. cette table développe des compétences de factores múltiples.",
      67: "la table de 67 maximiza las estrategias de nombres premiers. El enfoque 70-3 perfecciona la estrategia de restar de números redondos. Debido a propriÃ©tÃ©s primas, requiere flexibilidad mental y métodos de solución alternativos. cette table proporciona habilidades de matemática mental avanzada y comodidad con nombres premiers grandes.",
      68: "la table de 68 fortalece las conexiones mathématiques combinando las tablas del 4 y 17. Las relaciones 4×17=2×34 enseñan a usar múltiples estrategias. El enfoque 70-2 développe la capacité de aproximarse a números redondos. cette table forma una base para propriÃ©tÃ©s de nombres pairs y cálculos cercanos a 70.",
      69: "la table de 69 refuerza tanto la table de 3 como la del 23 al combinarlas. La estrategia 70-1 enseña a calcular rápidamente usando números redondos. La relación 3×23 combina estrategias de factores pequeños y grandes. cette table proporciona competencia en cálculos cercanos a 70.",
      70: "la table de 70 es perfecta pour renforcer la table de 7. La relación 7×10 combina el sistema decimal y la table de 7. Tiene importancia social en el contexto de esperanza de vida (promedio 70-80 años). Las alternativas 2×35=5×14 enseñan a usar múltiples estrategias. cette table es très utile para cálculo práctico y gestión del tiempo.",
      71: "la table de 71 maximiza las estrategias de nombres premiers. El enfoque 70+1 proporciona dominio en el uso de números complementarios. en raison de ses propriÃ©tÃ©s primas, requiere flexibilidad mental y resolución creativa de problemas. cette table développe la capacité de calcular rápidamente con nombres premiers grandes y profundiza el pensée mathématique.",
      72: "la table de 72 es una de las les plus polyvalentes. Tener nombreux diviseurs (1,2,3,4,6,8,9,12,18,24,36,72) lo hace ideal para fracciones y proporciones. Las relaciones 8×9=6×12 enseñan estrategias de factores múltiples. Tiene importancia práctica en calculs de temps (72 horas=3 días). cette table perfecciona la flexibilidad matemática y el uso de múltiples estrategias.",
      73: "la table de 73 lleva las estrategias de nombres premiers a un nivel avanzado. El enfoque 70+3 développe des compétences de calcul mental. Ser el primo número 21 despierta curiosidad matemática. Debido a propriÃ©tÃ©s primas, requiere métodos de solución alternativos y pensamiento creativo. cette table proporciona habilidades de matemática mental avanzada.",
      74: "la table de 74 ayuda a reforzar la table de 37. La relación 74=2×37 combina estrategias de duplicación y nombres premiers. El enfoque 75-1 enseña la estrategia de aproximarse a números redondos. cette table forma una base para propriÃ©tÃ©s de nombres pairs y cálculos cercanos a 75.",
      75: "la table de 75 forma la base de calculs de pourcentage (75%=3/4). Las relaciones 3×25=5×15 enseñan a usar múltiples estrategias. Está directamente conectada con el concepto de tres cuartos (¾). El patrón del 5 (termina en 5 o 0) facilite le calcul. cette table es extremadamente importante para matemática práctica y calculs de pourcentage.",
      76: "la table de 76 fortalece las conexiones mathématiques combinando las tablas del 4 y 19. Las relaciones 4×19=2×38 enseñan estrategias de multiplicación múltiple. Los enfoques 75+1 o 80-4 proporcionan flexibilidad. cette table prepara para cálculos cercanos a 80 con propriÃ©tÃ©s de nombres pairs.",
      77: "la table de 77 refuerza tanto la table de 7 como la del 11 al combinarlas. La relación 7×11=77 crea un modèle similaire a repdigit. Como les deux tables son de dificultad media, la table de 77 es perfecta para reforzarlas. Ser divisible à la fois par 7 como por 11 lo hace útil para fracciones.",
      78: "la table de 78 développe des compétences de factorización múltiple. Las relaciones 78=2×39=3×26=6×13 proporcionan flexibilidad matemática. El enfoque 80-2 enseña la estrategia de restar de números redondos. Tener nombreux diviseurs ofrece varios métodos de cálculo. cette table perfecciona el uso de múltiples estrategias.",
      79: "la table de 79 maximiza las estrategias de nombres premiers. El enfoque 80-1 perfecciona el cálculo rápido usando números redondos. Debido a propriÃ©tÃ©s primas, requiere flexibilidad mental y métodos de solución creativos. cette table proporciona competencia en cálculos cercanos a 80 y développe des compétences mathématiques avanzadas.",
      80: "la table de 80 es perfecta pour renforcer la table de 8. La relación 8×10 combina el sistema decimal y la table de 8. Las alternativas 2×40=4×20=5×16 enseñan a usar múltiples estrategias. Tiene importancia social en el contexto de esperanza de vida (límite superior 80 años). cette table mejora significativamente el cálculo práctico y la habilidad de trabajar avec de grands nombres.",
      81: "Multiplier par 81 utilise la relation 81=9² (nueve al cuadrado) o 81=3⁴ (tres a la cuarta potencia). Como 81 es un cuadrado perfecto, tous ses multiples con cuadrados perfectos forman números cuadrados también. Penser à 81 como 80+1 o 9×9 facilite le calcul. El 81 es divisible à la fois par 9 como por 27 (27=3³). Los múltiplos de 81 se dividen uniformemente por 9. El 81 es la addition de los números impares del 1 al 9 (1+3+5+7+9+11+13+15+17=81). cette table desarrolla la comprensión de modÃ¨les matemáticos.",
      82: "Multiplier par 82 utilise la relation 2×41. Si vous connaissez la table de 41, vous pouvez doubler cada rÃ©sultat pour trouver la table de 82. Penser à 82 como 80+2 o 85-3 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 82 es divisible à la fois par 2 como por 41. cette table establece una base para cálculos después de 80.",
      83: "Multiplier par 83 développe des stratégies de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. Los métodos más prácticos son Penser à 83 como 80+3 o 85-2. El 83 es un nombre primo y est divisible uniquement por 1 y 83. Aprender la table de 83 développe la capacité de calcular rápidamente con nombres premiers grandes.",
      84: "Multiplier par 84 es una de las tablas les plus polyvalentes. Como 84=12×7=6×14=4×21=3×28=2×42, peut être calculé de nombreuses façons diferentes. El 84 es 7 fois 12 (7 docenas). Tener nombreux diviseurs (1,2,3,4,6,7,12,14,21,28,42,84) lo hace extremadamente útil en cálculos de fracciones. El 84 es útil en calculs de temps (84 horas=1 semana+1/2 día). cette table perfecciona el uso de múltiples estrategias.",
      85: "Multiplier par 85 utilise la relation 5×17. Si les deux tables son conocidas, Multiplier par 85 es fácil. Penser à 85 como 80+5 o 90-5 facilite le calcul mental. El patrón del 5 (termina en 5 o 0) facilite le calcul. El 85 se usa fréquemment en calculs de pourcentage (85%=17/20). cette table prepara para cálculos cercanos a 90.",
      86: "Multiplier par 86 utilise la relation 2×43. Si vous connaissez la table de 43, vous pouvez doubler cada rÃ©sultat pour trouver la table de 86. Penser à 86 como 80+6 o 90-4 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 86 es divisible à la fois par 2 como por 43. cette table establece una base para cálculos cercanos a 90.",
      87: "Multiplier par 87 utilise la relation 3×29. Triplicar la table de 29 o multiplicar la table de 3 por 29 funciona. Penser à 87 como 90-3 o 85+2 facilite le calcul mental. Como 87=3×29, es divisible à la fois par 3 et par 29. cette table es útil para cálculos cercanos a 90 y perfecciona la habilidad de restar de números redondos.",
      88: "Multiplier par 88 utilise les relations 8×11=4×22=2×44. peut être calculé de multiples façons. El 88 muestra un modèle similaire a repdigit (repetición de 8s). Penser à 88 como 90-2 o 80+8 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 88 tiene nombreux diviseurs. La propriÃ©tÃ© repdigit (88) facilita el reconocimiento visual y la memorización.",
      89: "Multiplier par 89 nécessite des stratégies especiales en raison de ses propriÃ©tÃ©s de nombre premier. La estrategia plus facile es Penser à 89 como 90-1: multiplica un nombre por 90 y soustrayez-lui Le nombre mismo. El 89 es un nombre primo y est divisible uniquement por 1 y 89. El 89 es muy cercano a 90, por lo que es útil para aproximaciones. cette table proporciona competencia en cálculos cercanos a 90 y développe des compétences mathématiques avanzadas.",
      90: "Multiplier par 90 utilise la relation 9×10 y es très utile. Para multiplicar un nombre por 90, vous pouvez le multiplier por 9 y agregar un cero al final. Hay relaciones de factores alternativos como 90=2×45=3×30=5×18=6×15. Un ángulo recto mide 90°. El 90 tiene importancia crítica en géométrie (ángulo recto de 90°). El 90 se usa fréquemment en medidas de ángulos y porcentajes. cette table refuerza la table de 9 y es extremadamente importante para cálculos prácticos y medidas de ángulos.",
      91: "Multiplier par 91 utilise la relation 7×13. Si les deux tables son conocidas, Multiplier par 91 es fácil. Penser à 91 como 90+1 o 100-9 facilite le calcul. Como 91=7×13, es divisible à la fois par 7 como por 13. cette table refuerza la comprensión de relaciones de factores. Como les deux tables son de dificultad media, la table de 91 es ideal para reforzarlas. Es un concepto fundamental para mathématiques avanzadas y criptografía.",
      92: "Multiplier par 92 utilise les relations 4×23=2×46. peut être calculé de multiples façons. Penser à 92 como 90+2 o 100-8 facilite le calcul mental. Como es un nombre par, tous ses multiples también son pares. El 92 es divisible à la fois par 4 como por 23. cette table prepara para cálculos cercanos a 100 y développe des compétences de cálculo en los 90s.",
      93: "Multiplier par 93 utilise la relation 3×31. Triplicar la table de 31 o multiplicar la table de 3 por 31 funciona. Penser à 93 como 90+3 o 100-7 facilite le calcul. Como 93=3×31, es divisible à la fois par 3 et par 31. cette table es útil para cálculos cercanos a 100. Proporciona práctica de multiplicación avec de grands nombres y desarrolla flexibilidad mental.",
      94: "Multiplier par 94 utilise la relation 2×47. Si vous connaissez la table de 47, vous pouvez doubler cada rÃ©sultat pour trouver la table de 94. Penser à 94 como 100-6 o 90+4 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 94 es divisible à la fois par 2 como por 47. La estrategia 100-6 perfecciona el método de restar de números redondos. Proporciona habilidades críticas para matemática mental avanzada.",
      95: "Multiplier par 95 utilise la relation 5×19. Si les deux tables son conocidas, Multiplier par 95 es fácil. Penser à 95 como 100-5 o 90+5 facilite le calcul mental. El patrón del 5 (termina en 5 o 0) facilite le calcul. El 95 se usa fréquemment en calculs de pourcentage (95%=19/20). La estrategia 100-5 es très utile.",
      96: "Multiplier par 96 utilise les relations 32×3=16×6=12×8=4×24=2×48. peut être calculé de nombreuses façons diferentes. Penser à 96 como 100-4 o 90+6 facilite le calcul. Como es un nombre par, tous ses multiples también son pares. El 96 tiene nombreux diviseurs (1,2,3,4,6,8,12,16,24,32,48,96), lo que lo hace útil en cálculos de fracciones. Muestra la relación entre potencias de 2 y 3 (2⁵×3). cette table es perfecta para flexibilidad matemática y teoría de números.",
      97: "Multiplier par 97 développe des stratégies de matemática mental en raison de ses propriÃ©tÃ©s de nombre premier. La estrategia plus facile es Penser à 97 como 100-3: multiplica un nombre por 100 y soustrayez-lui tres fois Le nombre mismo. El 97 es un nombre primo y est divisible uniquement por 1 y 97. Aprender la table de 97 facilita cálculos cercanos a 100. Ser el primo más cercano a 100 facilita extremadamente el calcul mental. Ser primo es importante para teoría de números y criptografía.",
      98: "Multiplier par 98 utilise les relations 2×49=7×14. peut être calculé de multiples façons. La estrategia plus facile es Penser à 98 como 100-2: multiplica un nombre por 100 y soustrayez-lui dos fois Le nombre mismo. Como es un nombre par, tous ses multiples también son pares. El 98 es divisible à la fois par 2 como por 7 y 49. La relación 98=2×49=2×7² combina números cuadrados y estrategias de duplicación. cette table proporciona dominio en cálculos cercanos a 100.",
      99: "Multiplier par 99 utilise la relation 9×11. La estrategia plus facile es Penser à 99 como 100-1: multiplica un nombre por 100 y soustrayez-lui Le nombre mismo. El 99 muestra un modèle similaire a repdigit (repetición de 9s). Como 99=9×11, es divisible à la fois par 9 como por 11. cette table es extremadamente útil para cálculos cercanos a 100. La estrategia 100-1 es PERFECTA para matemática mental. La propriÃ©tÃ© repdigit (99) profundiza la comprensión de modÃ¨les. cette table es extremadamente importante para habilidades de cálculo práctico.",
      100: "la table de 100 es la base del sistema decimal. Proporciona una comprensión perfecta del concepto de valor posicional. Forma la base de calculs de pourcentage (100%=completo) y el sistema decimal. Tiene importancia crítica para unidades monetarias, unidades de medida y matemática cotidiana. ¡ES UNA DE LAS TABLAS MÁS ÚTILES E IMPORTANTES!",
    }
    return importance[number] || `Aprender la table de ${number} ayuda a les étudiants a desarrollar fluidez con este número importante. Se ve fréquemment en mathématiques y la vida cotidiana, haciéndolo necesario para construir sólidas habilidades de cálculo.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Patrón de Identidad", description: "Todo número multiplicado por 1 es igual à lui-même. Esto nunca cambia: 1×1=1, 1×2=2, 1×3=3, y así sucesivamente." },
        { title: "Secuencia Predecible", description: "Los rÃ©sultats simplemente cuentan hacia arriba: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Solo estás listando números en orden." },
        { title: "Base de Todas las Tables", description: "Cada tabla de multiplicar comienza con Multiplier par 1, por lo que este patrón aparece en todas las tablas." },
      ],
      2: [
        { title: "Solo nombres pairs", description: "Tous les multiples de 2 son nombres pairs. Los rÃ©sultats siempre se terminent par 0, 2, 4, 6 u 8." },
        { title: "Contar de Dos en Dos", description: "Cada respuesta es 2 más que la anterior: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Patrón de Duplicación", description: "Cada rÃ©sultat es exactamente el doble del factor: 2×5=10 es el doble de 5." },
      ],
      3: [
        { title: "Patrón de Suma de Dígitos", description: "Suma les chiffres de cada rÃ©sultat: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). ¡El patrón 3-6-9 se repite!" },
        { title: "Contar de Tres en Tres", description: "Cada respuesta aumenta en 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Alternancia Impar-Par", description: "Los rÃ©sultats alternan: impar (3), par (6), impar (9), par (12), creando un ritmo predecible." },
      ],
      4: [
        { title: "Siempre nombres pairs", description: "Como la table de 2, Tous les multiples de 4 son pares, se terminent par 0, 2, 4, 6 u 8." },
        { title: "Doble de la Table de 2", description: "Cada respuesta es exactamente el doble de la respuesta correspondiente en la table de 2: 4×3=12 es el doble de 2×3=6." },
        { title: "Contar de Cuatro en Cuatro", description: "Cada respuesta aumenta en 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "Termina en 0 o 5", description: "Cada múltiplo de 5 termina en 0 o 5. Esto hace que el patrón sea instantáneamente reconocible." },
        { title: "Patrón Alternante", description: "Los rÃ©sultats alternan entre terminar en 5 (impar) y 0 (par): 5, 10, 15, 20, 25, 30..." },
        { title: "Mitad de la Table de 10", description: "Cada rÃ©sultat es exactamente la moitié de la table de 10: 5×4=20 es la moitié de 10×4=40." },
      ],
      6: [
        { title: "Siempre nombres pairs", description: "Tous les multiples de 6 son pares. Los rÃ©sultats progresan como 6, 12, 18, 24, 30... y todos sont divisibles por 2." },
        { title: "Doble de la Table de 3", description: "Cada respuesta es exactamente el doble de la table de 3: 6×4=24 es el doble de 3×4=12." },
        { title: "Patrón del Dígito de las Unidades", description: "El dígito de las unidades sigue este patrón: 6, 2, 8, 4, 0 y se repite. Este patrón te ayuda a identificar la table de 6." },
      ],
      7: [
        { title: "Patrón de Suma de Dígitos", description: "Cuando sumas les chiffres de los múltiplos de 7, emerge un patrón interesante: 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "Repetición del Dígito de las Unidades", description: "El dígito de las unidades sigue esta secuencia: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 y se repite." },
        { title: "Propiedad de nombre premier", description: "El 7 es un nombre primo, por lo que no tiene relaciones simples con otras tablas. Sin embargo, memorizar pares especialest comme 7×8=56 ayuda." },
      ],
      8: [
        { title: "Siempre Par y Divisible por 4", description: "Tous les multiples de 8 son tanto parest comme divisibles por 4: 8, 16, 24, 32, 40, 48..." },
        { title: "Doble de la Table de 4", description: "Cada respuesta es exactamente el doble de la table de 4: 8×5=40 es el doble de 4×5=20." },
        { title: "Patrón del Dígito de las Unidades", description: "El dígito de las unidades sigue este patrón: 8, 6, 4, 2, 0 y se repite. Siempre un patrón descendente con nombres pairs." },
      ],
      9: [
        { title: "Suma de Dígitos est toujours 9", description: "Suma les chiffres de los múltiplos de 9: 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). ¡Este patrón mágico siempre funciona!" },
        { title: "Patrón del Dígito de las Decenas", description: "Si haces 9×n, el dígito de las decenas es n-1: 9×3=27 (decenas:2), 9×6=54 (decenas:5), 9×9=81 (decenas:8)." },
        { title: "1 Menos que 10", description: "La fórmula 9×n = (10×n) - n es très utile: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      10: [
        { title: "Agrega un Cero al Final", description: "Lorsque vous multipliez tout nombre por 10, simplemente agregas un cero al final: 7×10=70, 23×10=230." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 10 se terminent par 0: 10, 20, 30, 40, 50... Este patrón nunca cambia." },
        { title: "Sistema de Valor Posicional", description: "Multiplier par 10 desplaza cada dígito una posición a la izquierda. Esta es la base de nuestro sistema decimal: 25×10=250." },
      ],
      11: [
        { title: "Patrón de Dígitos Dobles", description: "Cuando se multiplica por nombres de un chiffre, el rÃ©sultat es dígitos dobles: 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "Truco de Suma de Dígitos", description: "Multiplica un nombre de deux chiffres por 11: addition les chiffres y colócalos en el medio. 23×11: 2_(2+3)_3 = 253." },
        { title: "Incremento de Decenas", description: "Múltiplos de 11: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. Los primeros 9 muestran el patrón de dígitos dobles." },
      ],
      12: [
        { title: "Patrón de Docena", description: "Múltiplos de 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Cada uno muestra un aumento de une douzaine." },
        { title: "Múltiplos de Ambos 3 y 4", description: "Como 12=3×4, todos los rÃ©sultats sont divisibles à la fois par 3 et par 4. 12×5=60: 60÷3=20, 60÷4=15." },
        { title: "Patrón de nombres pairs", description: "Tous les multiples de 12 son pares y divisibles por 4: 12, 24, 36, 48..." },
      ],
      13: [
        { title: "Descomposición 10+3", description: "13×n = (10×n) + (3×n). Ejemplo: 13×4 = 40 + 12 = 52. Esta estrategia facilite le calcul." },
        { title: "Ciclo del Dígito de las Unidades", description: "Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 y se repite. Se completa un ciclo en exactamente 10 pasos." },
        { title: "Comportamiento de nombre premier", description: "Como 13 es primo, est divisible uniquement por 1 y 13. Esto nécessite des stratégies especiales de memorización." },
      ],
      14: [
        { title: "Doble del 7", description: "Como 14=2×7, Si vous connaissez la table de 7 duplica cada rÃ©sultat: 7×6=42, entonces 14×6=84." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 14 son pares: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "Patrón de Dos Semanas", description: "14 días = 2 semanas. Los múltiplos de 14 se usan en planificación semanal: 28 días = 4 semanas." },
      ],
      15: [
        { title: "Termina en 0 o 5", description: "Tous les multiples de 15 se terminent par 0 o 5: 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "Relación 3×5", description: "Como 15=3×5, está relacionado con las tablas del 3 y 5. 15×4=60: 3×4=12, 5×4=20, no es 12+20=32 pero sí 3×20=60 o 5×12=60." },
        { title: "Múltiplos de Cuarto de Hora", description: "15 minutos = cuarto de hora. 30 minutos = demi-heure, 45 minutos = tres cuartos, 60 minutos = 1 hora." },
      ],
      16: [
        { title: "Potencia de 2", description: "16=2⁴ (2×2×2×2). Cadena de duplicación: 2→4→8→16. Cada múltiplo preserva este patrón." },
        { title: "Doble del 8", description: "Como 16=2×8, Si vous connaissez la table de 8 duplica cada rÃ©sultat: 8×3=24, entonces 16×3=48." },
        { title: "Siempre Par y Divisible por 8", description: "Tous les multiples de 16 son pares y divisibles por 4 y 8: 16, 32, 48, 64, 80..." },
      ],
      17: [
        { title: "Estrategia 20-3", description: "Piensa en 17=20-3. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "Descomposición 10+7", description: "17×n = (10×n) + (7×n). Ejemplo: 17×4 = 40 + 28 = 68." },
        { title: "Singularidad de nombre premier", description: "17 es primo, por lo que solo tiene modÃ¨les únicos. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      18: [
        { title: "Doble del 9", description: "Como 18=2×9, duplica la table de 9: 9×5=45, entonces 18×5=90." },
        { title: "Triple del 6", description: "Como 18=3×6, triplica la table de 6: 6×4=24, entonces 18×4=72." },
        { title: "Siempre Par y Divisible por 9", description: "Los múltiplos de 18 son pares y divisibles por 9. La addition de dígitos es múltiplo de 9: 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      19: [
        { title: "Estrategia 20-1", description: "Piensa en 19=20-1. 19×6 = (20×6) - 6 = 120 - 6 = 114. ¡Método très pratique!" },
        { title: "Descomposición 10+9", description: "19×n = (10×n) + (9×n). Ejemplo: 19×3 = 30 + 27 = 57." },
        { title: "Patrón de nombre premier", description: "Como 19 es primo tiene modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (orden descendente)." },
      ],
      20: [
        { title: "Agrega Cero y Duplica", description: "20=10×2. Para Multiplier par 20: 7×10=70, luego 70×2=140. (No es 7×20: 70×2=140 directamente)." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 20 se terminent par 0: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "Decenas Pares", description: "20, 40, 60, 80, 100... Cada uno aumenta en 20. Son múltiplos pares de 10." },
      ],
      21: [
        { title: "Relación 3×7", description: "21=3×7. Puedes usar les deux tables del 3 y 7: 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "Estrategia 20+1", description: "21×n = (20×n) + n. Ejemplo: 21×6 = 120 + 6 = 126. ¡très pratique!" },
        { title: "Ciclo del Dígito de las Unidades", description: "Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 y se repite. Patrón de incremento simple." },
      ],
      22: [
        { title: "Doble del 11", description: "22=2×11. Si vous connaissez la table de 11 duplica: 11×3=33, entonces 22×3=66." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 22 son pares: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Patrón de Dígitos Dobles", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. Los primeros 4 muestran patrón de dígitos dobles." },
      ],
      23: [
        { title: "Descomposición 20+3", description: "23×n = (20×n) + (3×n). Ejemplo: 23×5 = 100 + 15 = 115." },
        { title: "Estrategia 25-2", description: "23=25-2. Ejemplo: 23×4 = 100 - 8 = 92. Útil cuando Multiplier par 25 es plus facile." },
        { title: "Patrón de nombre premier", description: "Como 23 es primo tiene patrón especial. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      24: [
        { title: "Relaciones de Múltiples Factores", description: "24=2×12=3×8=4×6. Puede calcularse de muchas formas. 24×5 = 12×10 = 120." },
        { title: "Siempre Par y Divisible por 4", description: "Tous les multiples de 24 son pares y divisibles por 3, 4, 6 y 8." },
        { title: "Relación con las Horas", description: "24 horas = 1 día. 48 horas = 2 días, 72 horas = 3 días. Útil en calculs de temps." },
      ],
      25: [
        { title: "Patrón 25, 50, 75, 00", description: "Tous les multiples de 25 se terminent par 25, 50, 75 o 00. très régulier y predecible." },
        { title: "Relación de Cuarto", description: "25 = 100÷4. Entonces 25×4=100. Esta relación es très utile en calculs de pourcentages y fracciones." },
        { title: "Cuadrado del 5", description: "25=5². Esta relación especial: 25×n = 5×5×n. Ejemplo: 25×8 = 5×40 = 200." },
      ],
      26: [
        { title: "Doble del 13", description: "26=2×13. Si vous connaissez la table de 13 duplica: 13×7=91, entonces 26×7=182." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 26 son pares: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 o 30-4", description: "26×n = (25×n) + n o (30×n) - (4×n). Ejemplo: 26×4 = 100+4 = 104." },
      ],
      27: [
        { title: "Potencia del 3", description: "27=3³ (3×3×3). Relación de número cúbico: 27, 54, 81, 108... (múltiplos de 3)." },
        { title: "Triple del 9", description: "27=3×9. Triplica la table de 9: 9×4=36, entonces 27×4=108." },
        { title: "Estrategia 30-3", description: "27=30-3. Ejemplo: 27×6 = 180-18 = 162. Método de cálculo fácil." },
      ],
      28: [
        { title: "4×7 o 2×14", description: "28=4×7=2×14. Puede calcularse de múltiples formas: 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "Siempre Par y Divisible por 4", description: "Tous les multiples de 28 son pares y divisibles por 4 y 7: 28, 56, 84, 112, 140..." },
        { title: "Relación con la Semana", description: "28 días = 4 semanas. Esta relación es útil en cálculos de calendario." },
      ],
      29: [
        { title: "Estrategia 30-1", description: "29=30-1. 29×n = (30×n) - n. Ejemplo: 29×7 = 210-7 = 203. ¡El método más efectivo!" },
        { title: "Patrón del Dígito de las Unidades", description: "Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (orden descendente). Predecible." },
        { title: "Propiedad de nombre premier", description: "Como 29 es primo no tiene relaciones simples de factores. nécessite des stratégies mentales." },
      ],
      30: [
        { title: "Relación 3×10", description: "30=3×10. Multiplier par 30: multiplica por 10, luego por 3. 7×30 = 70×3 = 210." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 30 se terminent par 0: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Múltiplos Triples de las Decenas", description: "30, 60, 90, 120, 150... Cada uno aumenta en 30. Son 3 fois las decenas." },
      ],
      31: [
        { title: "Estrategia 30+1", description: "31=30+1. 31×n = (30×n) + n. Ejemplo: 31×7 = 210 + 7 = 217." },
        { title: "Patrón de nombre premier", description: "Como 31 es primo tiene patrón especial. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Relación con Días del Mes", description: "31 días es la longitud máxima de un mes. 31, 62 (2 meses), 93 (3 meses), 124 (4 meses) en cálculos de calendario." },
      ],
      32: [
        { title: "Potencia de 2", description: "32=2⁵. Cadena de duplicación: 2→4→8→16→32. Tous les multiples preservan este patrón." },
        { title: "Doble del 16", description: "32=2×16. Si vous connaissez la table de 16 duplica: 16×5=80, entonces 32×5=160." },
        { title: "Siempre Par y Divisible por 8", description: "Tous les multiples de 32 son pares y divisibles por 4, 8 y 16: 32, 64, 96, 128..." },
      ],
      33: [
        { title: "Relación 3×11", description: "33=3×11. Triplica la table de 11: 11×4=44, entonces 33×4=132. O multiplica la table de 3 por 11." },
        { title: "Patrón Repdigit", description: "33×1=33, 33×2=66, 33×3=99. Los primeros 3 muestran dígitos dobles. Luego 132, 165..." },
        { title: "Siempre Divisible por 3", description: "Tous les multiples de 33 sont divisibles por 3 y 11. La addition de dígitos es múltiplo de 3." },
      ],
      34: [
        { title: "Doble del 17", description: "34=2×17. Duplica la table de 17: 17×6=102, entonces 34×6=204." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 34 son pares: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340." },
        { title: "35-1 o 30+4", description: "34×n = (35×n) - n o (30×n) + (4×n). Ejemplo: 34×5 = 175-5 = 170." },
      ],
      35: [
        { title: "Relación 5×7", description: "35=5×7. Puedes usar les deux tables del 5 y 7: 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "Termina en 5 o 0", description: "Tous les multiples de 35 se terminent par 5 o 0: 35, 70, 105, 140, 175, 210, 245, 280..." },
        { title: "Cincos del 7", description: "35, 70, 105, 140, 175... Multiplica múltiplos del 7 por 5. O múltiplos del 5 por 7." },
      ],
      36: [
        { title: "Cuadrado del 6", description: "36=6². Además 36=4×9=3×12=2×18. Relaciones de múltiples factores." },
        { title: "nombreux diviseurs", description: "36 tiene 9 divisores: 1,2,3,4,6,9,12,18,36. Esto lo hace très utile para fracciones." },
        { title: "Divisible por 9 y 4", description: "Tous les multiples de 36 sont divisibles por 4 y 9. La addition de dígitos es múltiplo de 9." },
      ],
      37: [
        { title: "Estrategia 40-3", description: "37=40-3. 37×n = (40×n) - (3×n). Ejemplo: 37×6 = 240 - 18 = 222." },
        { title: "Relación Mágica con 111", description: "37×3=111. Esta relación especial: 37×6=222, 37×9=333. ¡En cada múltiplo de 3 hay rÃ©sultat repdigit!" },
        { title: "Singularidad de nombre premier", description: "Como 37 es primo tiene modÃ¨les especiales. Las estrategias 35+2 o 40-3 son útiles." },
      ],
      38: [
        { title: "Doble del 19", description: "38=2×19. Duplica la table de 19: 19×7=133, entonces 38×7=266." },
        { title: "Estrategia 40-2", description: "38=40-2. 38×n = (40×n) - (2×n). Ejemplo: 38×5 = 200 - 10 = 190." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 38 son pares: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380." },
      ],
      39: [
        { title: "Relación 3×13", description: "39=3×13. Triplica la table de 13: 13×4=52, entonces 39×4=156." },
        { title: "Estrategia 40-1", description: "39=40-1. 39×n = (40×n) - n. Ejemplo: 39×7 = 280 - 7 = 273. ¡très pratique!" },
        { title: "Divisible por 3", description: "Tous les multiples de 39 sont divisibles por 3 y 13. La addition de dígitos es múltiplo de 3." },
      ],
      40: [
        { title: "Relación 4×10", description: "40=4×10. Multiplier par 40: multiplica por 4, agrega un 0 al final. 7×40: 7×4=28, agrega 0: 280." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 40 se terminent par 0: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400." },
        { title: "Cuatro Veces las Decenas", description: "40, 80, 120, 160, 200... Cada uno aumenta en 40. Son 4 fois las decenas." },
      ],
      41: [
        { title: "Estrategia 40+1", description: "41=40+1. 41×n = (40×n) + n. Ejemplo: 41×6 = 240 + 6 = 246. ¡El méthode la plus pratique!" },
        { title: "Propiedades de nombre premier", description: "Como 41 es primo est divisible uniquement por 1 y 41. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "45-4 o 50-9", description: "Estrategias alternativas: 41×4 = 180-16 = 164. O 41×5 = 250-45 = 205." },
      ],
      42: [
        { title: "Relación 6×7", description: "42=6×7. Puedes usar les deux tables del 6 y 7: 42×3 = 6×3×7 = 18×7 = 126." },
        { title: "2×21 o 3×14", description: "42=2×21=3×14. peut être calculé de multiples façons: 42×5 = 21×10 = 210." },
        { title: "Siempre Divisible por 6", description: "Tous les multiples de 42 sont divisibles por 2, 3, 6 y 7: 42, 84, 126, 168, 210..." },
      ],
      43: [
        { title: "40+3 o 45-2", description: "43=40+3 o 45-2. Ejemplo: 43×7 = 280+21 = 301 o 315-14 = 301." },
        { title: "Patrón de nombre premier", description: "Como 43 es primo nécessite des stratégies especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 50-7", description: "avec de grands nombres: 43×8 = 400-56 = 344. Restar de 50 es un método alternativo." },
      ],
      44: [
        { title: "Cuatro Veces el 11", description: "44=4×11. Cuadruplica la table de 11: 11×6=66, entonces 44×6=264." },
        { title: "Similar a Repdigit", description: "44×1=44, 44×2=88. Los primeros 2 muestran dígitos dobles. Luego 132, 176, 220..." },
        { title: "Siempre Par y Divisible por 4", description: "Tous les multiples de 44 son pares y divisibles por 4 y 11: 44, 88, 132, 176, 220..." },
      ],
      45: [
        { title: "Relación 5×9", description: "45=5×9. Puedes usar les deux tables del 5 y 9: 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "Termina en 5 o 0", description: "Tous les multiples de 45 se terminent par 5 o 0: 45, 90, 135, 180, 225, 270, 315, 360..." },
        { title: "Divisible por 9", description: "Tous les multiples de 45 sont divisibles por 9. La addition de dígitos es múltiplo de 9: 135 (1+3+5=9)." },
      ],
      46: [
        { title: "Doble del 23", description: "46=2×23. Duplica la table de 23: 23×7=161, entonces 46×7=322." },
        { title: "45+1 o 50-4", description: "46×n = (45×n) + n o (50×n) - (4×n). Ejemplo: 46×5 = 225+5 = 230." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 46 son pares: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460." },
      ],
      47: [
        { title: "Estrategia 50-3", description: "47=50-3. 47×n = (50×n) - (3×n). Ejemplo: 47×6 = 300 - 18 = 282. ¡El más efectivo!" },
        { title: "Alternativa 45+2", description: "47=45+2. Ejemplo: 47×8 = 360 + 16 = 376. Útil Si vous connaissez la table de 45." },
        { title: "Singularidad de nombre premier", description: "Como 47 es primo tiene modÃ¨les especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      48: [
        { title: "Relaciones de Múltiples Factores", description: "48=6×8=4×12=3×16=2×24. Puede calcularse de muchas formas: 48×5 = 12×20 = 240." },
        { title: "Siempre Par y Múltiples Divisores", description: "Tous les multiples de 48 sont divisibles por 2, 3, 4, 6, 8 y 12." },
        { title: "Estrategia 50-2", description: "48=50-2. Ejemplo: 48×7 = 350 - 14 = 336. Restar de números redondos." },
      ],
      49: [
        { title: "Cuadrado del 7", description: "49=7². Usa la table de 7: 49×3 = 7×7×3 = 7×21 = 147. O 7×3×7." },
        { title: "Estrategia 50-1", description: "49=50-1. 49×n = (50×n) - n. Ejemplo: 49×6 = 300 - 6 = 294. ¡Muy fácil!" },
        { title: "Patrón de Número Cuadrado", description: "49, 98, 147, 196, 245... Múltiplos del 7 por 7. También 7²×1, 7²×2, 7²×3..." },
      ],
      50: [
        { title: "Relación 5×10", description: "50=5×10. Multiplier par 50: multiplica por 5, agrega un 0 al final. 8×50: 8×5=40, agrega 0: 400." },
        { title: "Siempre Termina en 0 o 50", description: "Tous les multiples de 50 se terminent par 0 o 50: 50, 100, 150, 200, 250, 300, 350, 400..." },
        { title: "Mitad de 100", description: "50×n = (100×n)÷2. Ejemplo: 50×7 = 700÷2 = 350. Útil en calculs de pourcentages." },
      ],
      51: [
        { title: "Estrategia 50+1", description: "51=50+1. 51×n = (50×n) + n. Ejemplo: 51×7 = 350 + 7 = 357. ¡très pratique!" },
        { title: "Relación 3×17", description: "51=3×17. Triplica la table de 17: 17×6=102, entonces 51×6=306." },
        { title: "Alternativa 55-4", description: "51=55-4. Ejemplo: 51×5 = 275-20 = 255. Útil cuando Multiplier par 55 es plus facile." },
      ],
      52: [
        { title: "Relación 4×13", description: "52=4×13. Cuadruplica la table de 13: 13×7=91, entonces 52×7=364." },
        { title: "50+2 o 2×26", description: "52×n = (50×n) + (2×n) o duplica la table de 26. Ejemplo: 52×5 = 250+10 = 260." },
        { title: "Patrón de Número de Semanas", description: "52 semanas = 1 año. 52, 104 (2 años), 156 (3 años)... Útil en cálculos de calendario." },
      ],
      53: [
        { title: "50+3 o 55-2", description: "53=50+3 o 55-2. Ejemplo: 53×6 = 300+18 = 318 o 330-12 = 318." },
        { title: "Patrón de nombre premier", description: "Como 53 es primo nécessite des stratégies especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 60-7", description: "avec de grands nombres: 53×8 = 480-56 = 424. Restar de 60 es un método alternativo." },
      ],
      54: [
        { title: "Relación 6×9", description: "54=6×9. Puedes usar les deux tables del 6 y 9: 54×5 = 9×5×6 = 45×6 = 270." },
        { title: "2×27 o 3×18", description: "54=2×27=3×18. Puede calcularse de múltiples formas: 54×4 = 27×8 = 216." },
        { title: "Divisible por 9", description: "Tous les multiples de 54 sont divisibles por 9. La addition de dígitos es múltiplo de 9: 108 (1+0+8=9)." },
      ],
      55: [
        { title: "Relación 5×11", description: "55=5×11. Puedes usar les deux tables del 5 y 11: 55×4 = 11×4×5 = 44×5 = 220." },
        { title: "Termina en 5 o 0", description: "Tous les multiples de 55 se terminent par 5 o 0: 55, 110, 165, 220, 275, 330, 385, 440..." },
        { title: "Número Triangular", description: "55 = 1+2+3+4+5+6+7+8+9+10. Esta propriÃ©tÃ© de addition especial hace que 55 sea matemáticamente interesante." },
      ],
      56: [
        { title: "Relación 7×8", description: "56=7×8. ¡Una de las parejas de multiplicación más difíciles! Refuerza tanto la table de 7 como del 8." },
        { title: "4×14 o 2×28", description: "56=4×14=2×28. Puede calcularse de múltiples formas: 56×5 = 14×20 = 280." },
        { title: "Siempre Par y Divisible por 7", description: "Tous les multiples de 56 son pares y divisibles por 4, 7 y 8: 56, 112, 168, 224..." },
      ],
      57: [
        { title: "Relación 3×19", description: "57=3×19. Triplica la table de 19: 19×7=133, entonces 57×7=399." },
        { title: "Estrategia 60-3", description: "57=60-3. 57×n = (60×n) - (3×n). Ejemplo: 57×6 = 360 - 18 = 342. ¡Muy fácil!" },
        { title: "Divisible por 3", description: "Tous les multiples de 57 sont divisibles por 3 y 19. La addition de dígitos es múltiplo de 3." },
      ],
      58: [
        { title: "Doble del 29", description: "58=2×29. Duplica la table de 29: 29×7=203, entonces 58×7=406." },
        { title: "Estrategia 60-2", description: "58=60-2. 58×n = (60×n) - (2×n). Ejemplo: 58×6 = 360 - 12 = 348." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 58 son pares: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580." },
      ],
      59: [
        { title: "Estrategia 60-1", description: "59=60-1. 59×n = (60×n) - n. Ejemplo: 59×7 = 420 - 7 = 413. ¡PERFECTO!" },
        { title: "Singularidad de nombre premier", description: "Como 59 es primo tiene modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 55+4", description: "59=55+4. Ejemplo: 59×8 = 440 + 32 = 472. Útil Si vous connaissez la table de 55." },
      ],
      60: [
        { title: "Relación 6×10", description: "60=6×10. Multiplier par 60: multiplica por 6, agrega un 0 al final. 7×60: 7×6=42, agrega 0: 420." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 60 se terminent par 0: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600." },
        { title: "Relaciones de Múltiples Factores", description: "60=2×30=3×20=4×15=5×12=6×10. ¡Puede calcularse de muchas formas!" },
      ],
      61: [
        { title: "Estrategia 60+1", description: "61=60+1. 61×n = (60×n) + n. Ejemplo: 61×7 = 420 + 7 = 427. ¡très pratique!" },
        { title: "Propiedades de nombre premier", description: "Como 61 es primo est divisible uniquement por 1 y 61. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternativa 65-4", description: "61=65-4. Ejemplo: 61×5 = 325-20 = 305. Útil cuando Multiplier par 65 es plus facile." },
      ],
      62: [
        { title: "Doble del 31", description: "62=2×31. Duplica la table de 31: 31×7=217, entonces 62×7=434." },
        { title: "Estrategia 60+2", description: "62=60+2. 62×n = (60×n) + (2×n). Ejemplo: 62×6 = 360 + 12 = 372." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 62 son pares: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620." },
      ],
      63: [
        { title: "Relación 7×9", description: "63=7×9. Puedes usar les deux tables del 7 y 9: 63×5 = 9×5×7 = 45×7 = 315." },
        { title: "Alternativa 3×21", description: "63=3×21. Triplica la table de 21: 21×4=84, entonces 63×4=252." },
        { title: "Divisible por 7 y 9", description: "Tous les multiples de 63 sont divisibles por 7 y 9. La addition de dígitos es múltiplo de 9." },
      ],
      64: [
        { title: "Cuadrado del 8", description: "64=8×8=8². Además 64=2⁶. Cadena de duplicación: 2→4→8→16→32→64." },
        { title: "Sexta Potencia del 2", description: "64=2⁶. Importante para arquitectura de 64 bits en computación. Forma la base del sistema binario." },
        { title: "Siempre Par y Divisible por 8", description: "Tous les multiples de 64 son pares y divisibles por 4, 8, 16 y 32: 64, 128, 192, 256..." },
      ],
      65: [
        { title: "Relación 5×13", description: "65=5×13. Puedes usar les deux tables del 5 y 13: 65×4 = 13×4×5 = 52×5 = 260." },
        { title: "Termina en 5 o 0", description: "Tous les multiples de 65 se terminent par 5 o 0: 65, 130, 195, 260, 325, 390, 455, 520..." },
        { title: "60+5 o 70-5", description: "65×n = (60×n) + (5×n) o (70×n) - (5×n). Ejemplo: 65×6 = 360+30 = 390." },
      ],
      66: [
        { title: "Relación 6×11", description: "66=6×11. Puedes usar les deux tables del 6 y 11: 66×5 = 11×5×6 = 55×6 = 330." },
        { title: "Similar a Repdigit", description: "66×1=66, 66×2=132. Como 6 fois 11, sigue el patrón de la table de 11." },
        { title: "Alternativa 2×33", description: "66=2×33. Duplica la table de 33: 33×7=231, entonces 66×7=462." },
      ],
      67: [
        { title: "Estrategia 70-3", description: "67=70-3. 67×n = (70×n) - (3×n). Ejemplo: 67×7 = 490 - 21 = 469. ¡Muy fácil!" },
        { title: "Patrón de nombre premier", description: "Como 67 es primo nécessite des stratégies especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Alternativa 65+2", description: "67=65+2. Ejemplo: 67×8 = 520 + 16 = 536. Útil Si vous connaissez la table de 65." },
      ],
      68: [
        { title: "Relación 4×17", description: "68=4×17. Cuadruplica la table de 17: 17×7=119, entonces 68×7=476." },
        { title: "2×34 o 70-2", description: "68=2×34 o 70-2. Ejemplo: 68×6 = 420 - 12 = 408." },
        { title: "Siempre Par y Divisible por 4", description: "Tous les multiples de 68 son pares y divisibles por 4 y 17: 68, 136, 204, 272, 340..." },
      ],
      69: [
        { title: "Relación 3×23", description: "69=3×23. Triplica la table de 23: 23×7=161, entonces 69×7=483." },
        { title: "Estrategia 70-1", description: "69=70-1. 69×n = (70×n) - n. Ejemplo: 69×6 = 420 - 6 = 414. ¡PERFECTO!" },
        { title: "Divisible por 3", description: "Tous les multiples de 69 sont divisibles por 3 y 23. La addition de dígitos es múltiplo de 3." },
      ],
      70: [
        { title: "Relación 7×10", description: "70=7×10. Multiplier par 70: multiplica por 7, agrega un 0 al final. 8×70: 8×7=56, agrega 0: 560." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 70 se terminent par 0: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700." },
        { title: "Relaciones de Múltiples Factores", description: "70=2×35=5×14=7×10. ¡Puede calcularse de muchas formas!" },
      ],
      71: [
        { title: "Estrategia 70+1", description: "71=70+1. 71×n = (70×n) + n. Ejemplo: 71×7 = 490 + 7 = 497. ¡très pratique!" },
        { title: "Propiedades de nombre premier", description: "Como 71 es primo est divisible uniquement por 1 y 71. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternativa 75-4", description: "71=75-4. Ejemplo: 71×5 = 375-20 = 355. Útil cuando Multiplier par 75 es plus facile." },
      ],
      72: [
        { title: "Relación 8×9", description: "72=8×9. Puedes usar les deux tables del 8 y 9: 72×5 = 9×5×8 = 45×8 = 360." },
        { title: "6×12 o 3×24", description: "72=6×12=3×24=4×18. Puede calcularse de múltiples formas: 72×4 = 12×24 = 288." },
        { title: "nombreux diviseurs", description: "72 tiene 12 divisores: 1,2,3,4,6,8,9,12,18,24,36,72. ¡très utile para fracciones!" },
      ],
      73: [
        { title: "70+3 o 75-2", description: "73=70+3 o 75-2. Ejemplo: 73×6 = 420+18 = 438 o 450-12 = 438." },
        { title: "Patrón de nombre premier", description: "Como 73 es primo nécessite des stratégies especiales. Es el 21º nombre premier. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 80-7", description: "avec de grands nombres: 73×8 = 640-56 = 584. Restar de 80 es un método alternativo." },
      ],
      74: [
        { title: "Relación 2×37", description: "74=2×37. Duplica la table de 37: 37×7=259, entonces 74×7=518." },
        { title: "75-1 o 70+4", description: "74×n = (75×n) - n o (70×n) + (4×n). Ejemplo: 74×5 = 375-5 = 370." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 74 son pares: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740." },
      ],
      75: [
        { title: "3×25 o 5×15", description: "75=3×25=5×15. Ejemplo: 75×4 = 25×12 = 300 o 15×20 = 300." },
        { title: "Patrón 25, 50, 75, 00", description: "Tous les multiples de 75 se terminent par 25, 50, 75 o 00. très régulier y predecible." },
        { title: "Relación de Porcentaje", description: "75 = 100×¾. Entonces 75% = 3/4. Esta relación es très utile en calculs de pourcentages." },
      ],
      76: [
        { title: "Relación 4×19", description: "76=4×19. Cuadruplica la table de 19: 19×7=133, entonces 76×7=532." },
        { title: "2×38 o 80-4", description: "76=2×38 o 80-4. Ejemplo: 76×6 = 480 - 24 = 456." },
        { title: "Siempre Par y Divisible por 4", description: "Tous les multiples de 76 son pares y divisibles por 4 y 19: 76, 152, 228, 304, 380..." },
      ],
      77: [
        { title: "Relación 7×11", description: "77=7×11. Puedes usar les deux tables del 7 y 11: 77×5 = 11×5×7 = 55×7 = 385." },
        { title: "modèle similaire a Repdigit", description: "77×1=77, 77×2=154. Como producto de 7 y 11 montre un modèle especial." },
        { title: "Estrategia 80-3", description: "77=80-3. Ejemplo: 77×6 = 480 - 18 = 462. Restar de números redondos." },
      ],
      78: [
        { title: "Relación 6×13", description: "78=6×13=2×39=3×26. Puede calcularse de múltiples formas: 78×5 = 13×30 = 390." },
        { title: "Estrategia 80-2", description: "78=80-2. 78×n = (80×n) - (2×n). Ejemplo: 78×7 = 560 - 14 = 546." },
        { title: "Divisible por 2 y 3", description: "Tous les multiples de 78 sont divisibles por 2 y 3. La addition de dígitos es múltiplo de 3." },
      ],
      79: [
        { title: "Estrategia 80-1", description: "79=80-1. 79×n = (80×n) - n. Ejemplo: 79×7 = 560 - 7 = 553. ¡PERFECTO!" },
        { title: "Singularidad de nombre premier", description: "Como 79 es primo tiene modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 75+4", description: "79=75+4. Ejemplo: 79×8 = 600 + 32 = 632. Útil Si vous connaissez la table de 75." },
      ],
      80: [
        { title: "Relación 8×10", description: "80=8×10. Multiplier par 80: multiplica por 8, agrega un 0 al final. 7×80: 7×8=56, agrega 0: 560." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 80 se terminent par 0: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800." },
        { title: "Relaciones de Múltiples Factores", description: "80=2×40=4×20=5×16=8×10. ¡Puede calcularse de muchas formas!" },
      ],
      81: [
        { title: "Cuadrado del 9", description: "81=9×9=9². Además 81=3⁴. Ejemplo perfecto de relaciones de cuadrados y potencias." },
        { title: "Estrategia 80+1", description: "81=80+1. 81×n = (80×n) + n. Ejemplo: 81×7 = 560 + 7 = 567. ¡très pratique!" },
        { title: "Cuarta Potencia del 3", description: "81=3⁴=3×3×3×3. Importante para entender números con exponentes. Divisible por 9 y 27." },
      ],
      82: [
        { title: "Relación 2×41", description: "82=2×41. Duplica la table de 41: 41×7=287, entonces 82×7=574." },
        { title: "Estrategia 80+2", description: "82=80+2. 82×n = (80×n) + (2×n). Ejemplo: 82×6 = 480 + 12 = 492." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 82 son pares: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820." },
      ],
      83: [
        { title: "80+3 o 85-2", description: "83=80+3 o 85-2. Ejemplo: 83×6 = 480+18 = 498 o 510-12 = 498." },
        { title: "Patrón de nombre premier", description: "Como 83 es primo nécessite des stratégies especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 90-7", description: "avec de grands nombres: 83×8 = 720-56 = 664. Restar de 90 es un método alternativo." },
      ],
      84: [
        { title: "Relación 7×12", description: "84=7×12. Puedes usar les deux tables del 7 y 12: 84×5 = 12×5×7 = 60×7 = 420." },
        { title: "6×14 o 4×21", description: "84=6×14=4×21=3×28. Puede calcularse de múltiples formas: 84×4 = 21×16 = 336." },
        { title: "nombreux diviseurs", description: "84 tiene 12 divisores: 1,2,3,4,6,7,12,14,21,28,42,84. ¡très utile para fracciones!" },
      ],
      85: [
        { title: "Relación 5×17", description: "85=5×17. Puedes usar les deux tables del 5 y 17: 85×4 = 17×4×5 = 68×5 = 340." },
        { title: "Termina en 5 o 0", description: "Tous les multiples de 85 se terminent par 5 o 0: 85, 170, 255, 340, 425, 510, 595, 680..." },
        { title: "90-5 o 80+5", description: "85×n = (90×n) - (5×n) o (80×n) + (5×n). Ejemplo: 85×6 = 540-30 = 510." },
      ],
      86: [
        { title: "Relación 2×43", description: "86=2×43. Duplica la table de 43: 43×7=301, entonces 86×7=602." },
        { title: "Estrategia 90-4", description: "86=90-4. 86×n = (90×n) - (4×n). Ejemplo: 86×6 = 540 - 24 = 516." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 86 son pares: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860." },
      ],
      87: [
        { title: "Relación 3×29", description: "87=3×29. Triplica la table de 29: 29×7=203, entonces 87×7=609." },
        { title: "Estrategia 90-3", description: "87=90-3. 87×n = (90×n) - (3×n). Ejemplo: 87×7 = 630 - 21 = 609. ¡Muy fácil!" },
        { title: "Divisible por 3", description: "Tous les multiples de 87 sont divisibles por 3 y 29. La addition de dígitos es múltiplo de 3." },
      ],
      88: [
        { title: "Relación 8×11", description: "88=8×11. Puedes usar les deux tables del 8 y 11: 88×5 = 11×5×8 = 55×8 = 440." },
        { title: "Número Repdigit", description: "88×1=88, 88×2=176. La propriÃ©tÃ© repdigit (repetición de 8s) facilita el reconocimiento visual." },
        { title: "4×22 o 2×44", description: "88=4×22=2×44. Puede calcularse de múltiples formas: 88×5 = 22×20 = 440." },
      ],
      89: [
        { title: "Estrategia 90-1", description: "89=90-1. 89×n = (90×n) - n. Ejemplo: 89×7 = 630 - 7 = 623. ¡PERFECTO!" },
        { title: "Singularidad de nombre premier", description: "Como 89 es primo tiene modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 85+4", description: "89=85+4. Ejemplo: 89×8 = 680 + 32 = 712. Útil Si vous connaissez la table de 85." },
      ],
      90: [
        { title: "Relación 9×10", description: "90=9×10. Multiplier par 90: multiplica por 9, agrega un 0 al final. 7×90: 7×9=63, agrega 0: 630." },
        { title: "Siempre Termina en 0", description: "Tous les multiples de 90 se terminent par 0: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900." },
        { title: "Relaciones de Múltiples Factores", description: "90=2×45=3×30=5×18=6×15=9×10. ¡Puede calcularse de muchas formas!" },
      ],
      91: [
        { title: "Relación 7×13", description: "91=7×13. Puedes usar les deux tables del 7 y 13: 91×5 = 7×5×13 = 35×13 = 455." },
        { title: "Estrategia 90+1", description: "91=90+1. 91×n = (90×n) + n. Ejemplo: 91×6 = 540 + 6 = 546. ¡Práctico!" },
        { title: "Producto de Primos", description: "91=7×13 (producto de dos primos). Divisible por 7 y 13." },
      ],
      92: [
        { title: "Relación 4×23", description: "92=4×23. Cuadruplica la table de 23: 23×7=161, entonces 92×7=644." },
        { title: "90+2 o 100-8", description: "92×n = (90×n)+(2×n) o (100×n)-(8×n). Ejemplo: 92×5 = 450+10 = 460." },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 92 son pares: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920." },
      ],
      93: [
        { title: "Relación 3×31", description: "93=3×31. Triplica la table de 31: 31×6=186, entonces 93×6=558." },
        { title: "Estrategia 90+3", description: "93=90+3. 93×n = (90×n) + (3×n). Ejemplo: 93×7 = 630 + 21 = 651." },
        { title: "Divisible por 3", description: "Tous les multiples de 93 sont divisibles por 3. La addition de les chiffres es múltiplo de 3." },
      ],
      94: [
        { title: "Relación 2×47", description: "94=2×47. Duplica la table de 47: 47×7=329, entonces 94×7=658." },
        { title: "Estrategia 100-6", description: "94=100-6. 94×n = (100×n) - (6×n). Ejemplo: 94×5 = 500 - 30 = 470. ¡PERFECTO!" },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 94 son pares: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940." },
      ],
      95: [
        { title: "Relación 5×19", description: "95=5×19. Puedes usar les deux tables del 5 y 19: 95×4 = 19×4×5 = 76×5 = 380." },
        { title: "Termina en 5 o 0", description: "Tous les multiples de 95 se terminent par 5 o 0: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950." },
        { title: "Estrategia 100-5", description: "95=100-5. 95×n = (100×n) - (5×n). Ejemplo: 95×6 = 600 - 30 = 570. ¡Muy fácil!" },
      ],
      96: [
        { title: "Relación 8×12", description: "96=8×12. Puedes usar les deux tables: 96×5 = 12×5×8 = 60×8 = 480." },
        { title: "Relaciones de Múltiples Factores", description: "96=8×12=6×16=4×24=3×32=2×48. ¡Puede calcularse de muchas formas!" },
        { title: "Potencia de 2 × 3", description: "96=2⁵×3. Relación 32×3. Tiene nombreux diviseurs (12 divisores)." },
      ],
      97: [
        { title: "Estrategia 100-3", description: "97=100-3. 97×n = (100×n) - (3×n). Ejemplo: 97×7 = 700 - 21 = 679. ¡PERFECTO!" },
        { title: "Patrones de nombre premier", description: "Como 97 es primo tiene modÃ¨les especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Primo Más Cercano a 100", description: "El mayor nombre premier menor que 100. Esta propriÃ©tÃ© facilita mucho el cálculo." },
      ],
      98: [
        { title: "Relación 2×49", description: "98=2×49=2×7². Duplica la table de 49: 49×7=343, entonces 98×7=686." },
        { title: "Estrategia 100-2", description: "98=100-2. 98×n = (100×n) - (2×n). Ejemplo: 98×6 = 600 - 12 = 588. ¡SÚPER FÁCIL!" },
        { title: "Siempre nombres pairs", description: "Tous les multiples de 98 son pares: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980." },
      ],
      99: [
        { title: "Relación 9×11", description: "99=9×11. Puedes usar les deux tables: 99×5 = 11×5×9 = 55×9 = 495." },
        { title: "Estrategia 100-1", description: "99=100-1. 99×n = (100×n) - n. Ejemplo: 99×7 = 700 - 7 = 693. ¡PERFECTO!" },
        { title: "Patrón Repdigit", description: "99 (repetición de 9s), 198, 297, 396, 495... ¡El reconocimiento visual es fácil!" },
      ],
      100: [
        { title: "Relación 10×10", description: "100=10×10=10². Multiplier par 100: agrega dos ceros al final. 7×100: ¡700!" },
        { title: "Siempre Termina en 00", description: "Tous les multiples de 100 se terminent par 00: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000." },
        { title: "Base del Sistema Decimal", description: "100=10². Sistema de centenas, calculs de pourcentages, ¡base para entender nombres decimales!" },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Pensar que 1×1=2", solution: "Recuerda: Todo lo que se multiplica por 1 es igual à lui-même. 1 groupe de 1 es solo 1." },
        { mistake: "Confundir con la addition", solution: "Multiplier par 1 es diferente de sumar. 5+1=6, pero 5×1=5." },
      ],
      2: [
        { mistake: "Confundir 2×6=12 con 2×7=14", solution: "Usa contar de dos en dos: 2, 4, 6, 8, 10, 12, 14. Cuenta cuidadosamente sin saltarte." },
        { mistake: "Confundirse avec de grands nombres", solution: "Descompón: 2×8 es solo 8+8. Duplicar es addition simple." },
      ],
      3: [
        { mistake: "Confundir 3×6=18 con 3×7=21", solution: "Recuerda el patrón +3: después de 18 viene 21. Cuenta de tres en tres para verificar." },
        { mistake: "Confundir 3×8=24 con 3×9=27", solution: "Usa el truco de addition de dígitos: 24 (2+4=6) y 27 (2+7=9), sigue el patrón 3-6-9." },
      ],
      4: [
        { mistake: "Pensar que 4×7=24 (en lugar de 28)", solution: "Recuerda: 4×6=24, entonces 4×7 debe ser 4 más, es decir 28." },
        { mistake: "Confundir con la table de 2", solution: "la table de 4 es siempre el doble de la table de 2. Verifica duplicando." },
      ],
      5: [
        { mistake: "Confundir el orden (25 antes de 20)", solution: "El patrón es consistente: 5, 10, 15, 20, 25. Cada uno aumenta en 5." },
        { mistake: "Pensar que 5×impar siempre termina en 5", solution: "En realidad 5×par termina en 0, 5×impar termina en 5." },
      ],
      6: [
        { mistake: "Confundir 6×7=42 con 6×8=48", solution: "¡Esta es una pareja difícil! Recuerda: 6×7=42 (rima 'siete seis'), luego agrega 6: 48." },
        { mistake: "Confundir 6×9=54 con 6×8=48", solution: "Usa la table de 6: 6×8=48, luego +6=54. O calcula 6×9 como 60-6=54." },
        { mistake: "Confundir con la table de 3", solution: "la table de 6 es siempre el doble de la table de 3. 3×4=12, entonces 6×4=24." },
      ],
      7: [
        { mistake: "Confundir 7×8=56 con 7×6=42", solution: "¡Estos son los más difíciles! Truco de memoria: '5-6-7-8' (56=7×8). O desde 7×7=49, luego +7=56." },
        { mistake: "Confundir 7×9=63 con 7×8=56", solution: "Patrón: 7×8=56, luego +7=63. O addition de dígitos: 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "Saltarse completamente la table de 7", solution: "Aunque el 7 parezca difícil, peut s'apprendre con práctica. Empieza con pasos pequeños: memoriza los fáciles 7×1, 7×2, 7×5, 7×10." },
      ],
      8: [
        { mistake: "Confundir 8×7=56 con 8×8=64", solution: "Forma fácil de memorizar 8×8=64: 'ocho ocho 64' o '8²=64'." },
        { mistake: "Confundir 8×9=72 con 8×8=64", solution: "Comienza desde 8×8=64, luego +8=72. O 80-8=72 (10×8 menos 8)." },
        { mistake: "Confundir con la table de 4", solution: "El 8 es siempre el doble del 4. 4×6=24, entonces 8×6=48. Verifica duplicando." },
      ],
      9: [
        { mistake: "Confundir 9×8=72 con 9×7=63", solution: "Usa el truco de los dedos o addition de dígitos: 72 (7+2=9), 63 (6+3=9). Recuerda que 72>63." },
        { mistake: "Aplicar mal el truco de los dedos", solution: "Orden correcto: Dedos izquierdos 1-5, dedos derechos 6-10. Los dedos a la izquierda del dedo doblado son decenas, los de la derecha son unidades." },
        { mistake: "Confundir 9×9=81 con 9×8=72", solution: "9×9=81 es especial: 'nueve nueve 81' o '9²=81'. Suma de dígitos: 81 (8+1=9), 72 (7+2=9)." },
      ],
      10: [
        { mistake: "Olvidar el cero", solution: "El recordatorio plus facile: Lorsque vous multipliez por 10, SOLO agrega un cero al final. 6×10=60, 25×10=250." },
        { mistake: "Agregar demasiados ceros", solution: "Multiplier par 10 agrega SOLO un cero. No 100 (dos ceros), 1000 (tres ceros), solo 10 (un cero)." },
      ],
      11: [
        { mistake: "Pensar que 11×12=121 (en lugar de 132)", solution: "El patrón de dígitos dobles solo funciona de 11×1 a 11×9. 11×10=110, 11×12=132." },
        { mistake: "Aplicar mal el truco de addition de dígitos", solution: "23×11: Suma les chiffres (2+3=5), colócalo en el medio: 253. Si la addition >9, hay acarreo: 67×11: 6_(6+7=13)_7 = 6_(13)_7 = 737." },
        { mistake: "Pensar que 11×11=111", solution: "11×11=121, no 111. Cada múltiplo de 11 agrega 11 al anterior: 99+11=110, 110+11=121." },
      ],
      12: [
        { mistake: "Confundir 12×8=84 con 12×9=108", solution: "12×8=96 (8 docenas), 12×9=108 (9 docenas). 84 en realidad es 12×7. Verifica contando docenas." },
        { mistake: "Confundir 12 con 10", solution: "12×5=60, 10×5=50. El 12 es siempre 20% más que 10 (10 más 2)." },
      ],
      13: [
        { mistake: "Confundir 13×7=91 con 13×8=104", solution: "13×7=91, 13×8=104. La diferencia es 13. Usa la estrategia 10+3: 70+21=91, 80+24=104." },
        { mistake: "Confundir 13 con 3 o 30", solution: "13×4=52, no 3×4=12. Tampoco 30×4=120. El 13 es exactamente 10+3." },
      ],
      14: [
        { mistake: "Pensar que 14×7=98 (¡correcto es 14×7=98!)", solution: "¡14×7=98 es correcto! Pero no olvides 14×8=112 (98+14=112). Recuerda que es el doble de la table de 7." },
        { mistake: "Confundir 14×6=72 con 14×6=84", solution: "14×6=84 es correcto (7×6=42, ×2=84). 72 en realidad es 12×6 o 8×9." },
      ],
      15: [
        { mistake: "Pensar que 15×6=80 (en lugar de 90)", solution: "15×6=90 (1.5 docenas). 80 en realidad es 16×5. Calcula 15×6 como 3×6=18, luego ×5=90 o 5×6=30, luego ×3=90." },
        { mistake: "Confundir 15×4=50", solution: "15×4=60, no 50. Recuerda que 15 minutos×4 = 1 hora (60 minutos)." },
      ],
      16: [
        { mistake: "Confundir 16×6=84 con 16×6=96", solution: "16×6=96 es correcto (8×6=48, ×2=96). 84 en realidad es 14×6 o 12×7." },
        { mistake: "Confundir 16 con 6", solution: "16×4=64, no 6×4=24. 16 es muy diferente de 6. Recuerda que 16=2⁴." },
      ],
      17: [
        { mistake: "Confundir 17×6=102 con 17×7=119", solution: "Estrategia 20-3: 17×6=120-18=102, 17×7=140-21=119. O 10+7: 60+42=102, 70+49=119." },
        { mistake: "Confundir 17×8=126 con 17×9=153", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 en realidad es 18×7." },
      ],
      18: [
        { mistake: "Confundir 18×7=126 con 18×8=144", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). La diferencia es 18." },
        { mistake: "Confundir 18×6=108 con 18×6=104", solution: "18×6=108 es correcto (6×6=36, ×3 o 9×6=54, ×2). 104 en realidad es 13×8." },
      ],
      19: [
        { mistake: "Pensar que 19×5=100 (en lugar de 95)", solution: "19×5=95, no 100 (20×5=100). 19 es 1 menos que 20, así que 100-5=95." },
        { mistake: "Confundir 19×6=114 con 19×7=133", solution: "Estrategia 20-1: 19×6=120-6=114, 19×7=140-7=133. Cada vez soustraction el multiplicador de 20." },
      ],
      20: [
        { mistake: "Pensar que 20×7=120 (en lugar de 140)", solution: "20×7=140, no 120 (20×6=120). 10×7=70, duplica: 140. O 7×20=7×10×2." },
        { mistake: "Olvidar el cero", solution: "Tous les multiples de 20 deben terminar en 0: 20, 40, 60, 80, 100... ¡20×8=160, no 16!" },
      ],
      21: [
        { mistake: "Pensar que 21×5=100 (en lugar de 105)", solution: "21×5=105, no 100. 20×5=100, más 5 más: 105. O 3×7×5 = 21×5 = 105." },
        { mistake: "Confundir 21×7=140 con 21×7=147", solution: "21×7=147 es correcto (3×7×7 o 140+7). 140 en realidad es 20×7." },
        { mistake: "Confundir 21 con 12", solution: "21×4=84, no 12×4=48. Presta atención al orden de les chiffres: 21 es muy diferente de 12." },
      ],
      22: [
        { mistake: "Pensar que 22×5=100 (en lugar de 110)", solution: "22×5=110, no 100. 11×5=55, duplica: 110. O 20×5=100, más 2×5=10: 110." },
        { mistake: "Confundir 22×9=198 con 22×9=188", solution: "22×9=198 es correcto (11×9=99, ×2). 188 es otro cálculo." },
      ],
      23: [
        { mistake: "Pensar que 23×4=82 (en lugar de 92)", solution: "23×4=92, no 82. 20×4=80, más 3×4=12: 92. 82 es otro rÃ©sultat." },
        { mistake: "Confundir 23×5=105 con 23×5=115", solution: "23×5=115 es correcto (20×5=100, 3×5=15, total 115). 105 en realidad es 21×5." },
      ],
      24: [
        { mistake: "Pensar que 24×5=100 (en lugar de 120)", solution: "24×5=120, no 100. Un día tiene 24 horas, 5 días = 120 horas. O 12×10=120." },
        { mistake: "Confundir 24×7=158 con 24×7=168", solution: "24×7=168 es correcto (4×6×7 o 3×8×7). 158 es otro rÃ©sultat." },
      ],
      25: [
        { mistake: "Pensar que 25×8=180 (en lugar de 200)", solution: "25×8=200, no 180. 25×4=100, entonces 25×8=200. O 5×5×8 = 25×8 = 200." },
        { mistake: "Adivinar incorrectamente los últimos deux chiffres", solution: "¡Los múltiplos de 25 siempre se terminent par 25, 50, 75 o 00. No puede ser otra cosa!" },
      ],
      26: [
        { mistake: "Confundir 26×5=120 con 26×5=130", solution: "26×5=130 es correcto (13×5=65, ×2). 120 en realidad es 24×5." },
        { mistake: "Confundir 26 con 16 o 36", solution: "26×4=104, no 16×4=64 o 36×4=144. Lee les chiffres cuidadosamente." },
      ],
      27: [
        { mistake: "Pensar que 27×4=98 (en lugar de 108)", solution: "27×4=108, no 98. 30×4=120, menos 3×4=12: 108. O 9×4=36, ×3=108." },
        { mistake: "Confundir 27×7=179 con 27×7=189", solution: "27×7=189 es correcto (30×7=210, menos 3×7=21: 189). 179 es otro rÃ©sultat." },
      ],
      28: [
        { mistake: "Pensar que 28×5=130 (en lugar de 140)", solution: "28×5=140, no 130. 4×7×5 = 20×7 = 140. O 14×10=140." },
        { mistake: "Confundir 28×9=242 con 28×9=252", solution: "28×9=252 es correcto (4×7×9 o 30×9 menos 2×9). 242 es otro rÃ©sultat." },
      ],
      29: [
        { mistake: "Pensar que 29×5=140 (en lugar de 145)", solution: "29×5=145, no 140. 30×5=150, menos 5: 145. 140 en realidad es 28×5." },
        { mistake: "Confundir 29×7=203 con 29×7=193", solution: "29×7=203 es correcto (30×7=210, menos 7). 193 es otro cálculo." },
      ],
      30: [
        { mistake: "Pensar que 30×7=200 (en lugar de 210)", solution: "30×7=210, no 200 (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Olvidar el cero", solution: "Tous les multiples de 30 deben terminar en 0: 30, 60, 90, 120, 150... ¡30×8=240, no 24!" },
      ],
      31: [
        { mistake: "Pensar que 31×5=145 (en lugar de 155)", solution: "31×5=155, no 145. 30×5=150, más 5: 155. 145 en realidad es 29×5." },
        { mistake: "Confundir 31×7=207 con 31×7=217", solution: "31×7=217 es correcto (30×7=210, más 7). 207 es otro rÃ©sultat." },
      ],
      32: [
        { mistake: "Pensar que 32×5=150 (en lugar de 160)", solution: "32×5=160, no 150. 16×5=80, duplica: 160. O 32×10=320, la mitad es 160." },
        { mistake: "Confundir 32×7=214 con 32×7=224", solution: "32×7=224 es correcto (16×7=112, ×2). 214 es otro cálculo." },
      ],
      33: [
        { mistake: "Pensar que 33×4=122 (en lugar de 132)", solution: "33×4=132, no 122. 11×4=44, ×3=132. O 30×4=120, más 3×4=12: 132." },
        { mistake: "Confundir 33×9=297 con 33×9=287", solution: "33×9=297 es correcto (11×9=99, ×3). 287 es otro rÃ©sultat." },
      ],
      34: [
        { mistake: "Pensar que 34×5=160 (en lugar de 170)", solution: "34×5=170, no 160. 17×5=85, duplica: 170. 160 en realidad es 32×5." },
        { mistake: "Confundir 34×8=262 con 34×8=272", solution: "34×8=272 es correcto (17×8=136, ×2). 262 es otro rÃ©sultat." },
      ],
      35: [
        { mistake: "Pensar que 35×6=200 (en lugar de 210)", solution: "35×6=210, no 200. 5×6=30, 7×6=42, 30×7=210 o 5×42=210." },
        { mistake: "Confundir 35×8=270 con 35×8=280", solution: "35×8=280 es correcto (5×8=40, 7×8=56, 40×7=280). 270 en realidad es 27×10." },
      ],
      36: [
        { mistake: "Pensar que 36×5=170 (en lugar de 180)", solution: "36×5=180, no 170. 6×5=30, ×6=180. O 18×10=180. 170 en realidad es 34×5." },
        { mistake: "Confundir 36×7=242 con 36×7=252", solution: "36×7=252 es correcto (6×7=42, ×6 o 9×7=63, ×4). 242 es otro rÃ©sultat." },
      ],
      37: [
        { mistake: "Pensar que 37×5=175 (en lugar de 185)", solution: "37×5=185, no 175. 40×5=200, menos 3×5=15: 185. 175 en realidad es 35×5." },
        { mistake: "Calcular incorrectamente después de 37×3=111", solution: "37×3=111, 37×6=222, 37×9=333. ¡Cada múltiplo de 3 es repdigit! 37×7=259, 37×8=296." },
      ],
      38: [
        { mistake: "Pensar que 38×5=180 (en lugar de 190)", solution: "38×5=190, no 180. 19×5=95, duplica: 190. 180 en realidad es 36×5." },
        { mistake: "Confundir 38×9=332 con 38×9=342", solution: "38×9=342 es correcto (19×9=171, ×2 o 40×9=360, menos 2×9=18). 332 es otro rÃ©sultat." },
      ],
      39: [
        { mistake: "Pensar que 39×5=185 (en lugar de 195)", solution: "39×5=195, no 185. 40×5=200, menos 5: 195. 185 en realidad es 37×5." },
        { mistake: "Confundir 39×8=302 con 39×8=312", solution: "39×8=312 es correcto (40×8=320, menos 8). 302 es otro rÃ©sultat." },
      ],
      40: [
        { mistake: "Pensar que 40×7=270 (en lugar de 280)", solution: "40×7=280, no 270. 4×7=28, agrega un 0: 280. O 10×7=70, ×4=280." },
        { mistake: "Olvidar el cero", solution: "Tous les multiples de 40 deben terminar en 0: 40, 80, 120, 160, 200... ¡40×9=360, no 36!" },
      ],
      41: [
        { mistake: "Pensar que 41×5=200 (en lugar de 205)", solution: "41×5=205, no 200. 40×5=200, más 5: 205. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 41×9=360 con 41×9=369", solution: "41×9=369 es correcto (40×9=360, más 9). 360 en realidad es 40×9." },
      ],
      42: [
        { mistake: "Pensar que 42×5=200 (en lugar de 210)", solution: "42×5=210, no 200. 6×5=30, 7×5=35, 30+35=65... O 40×5=200, más 2×5=10: 210." },
        { mistake: "Confundir 42×8=326 con 42×8=336", solution: "42×8=336 es correcto (6×8=48, 7×8=56 o 40×8=320, más 16). 326 es otro rÃ©sultat." },
      ],
      43: [
        { mistake: "Pensar que 43×5=205 (en lugar de 215)", solution: "43×5=215, no 205. 40×5=200, más 3×5=15: 215. 205 en realidad es 41×5." },
        { mistake: "Confundir 43×9=377 con 43×9=387", solution: "43×9=387 es correcto (40×9=360, más 3×9=27). 377 es otro rÃ©sultat." },
      ],
      44: [
        { mistake: "Pensar que 44×5=210 (en lugar de 220)", solution: "44×5=220, no 210. 11×5=55, ×4=220. O 40×5=200, más 4×5=20: 220." },
        { mistake: "Confundir 44×9=386 con 44×9=396", solution: "44×9=396 es correcto (11×9=99, ×4 o 40×9=360, más 4×9=36). 386 es otro rÃ©sultat." },
      ],
      45: [
        { mistake: "Pensar que 45×5=220 (en lugar de 225)", solution: "45×5=225, no 220. 9×5=45, ×5=225. O 40×5=200, más 5×5=25: 225." },
        { mistake: "Confundir 45×8=350 con 45×8=360", solution: "45×8=360 es correcto (9×8=72, ×5 o 5×8=40, ×9). 350 es otro rÃ©sultat." },
      ],
      46: [
        { mistake: "Pensar que 46×5=225 (en lugar de 230)", solution: "46×5=230, no 225. 23×5=115, ×2=230. O 50×5=250, menos 4×5=20: 230." },
        { mistake: "Confundir 46×9=404 con 46×9=414", solution: "46×9=414 es correcto (23×9=207, ×2 o 50×9=450, menos 4×9=36). 404 es otro rÃ©sultat." },
      ],
      47: [
        { mistake: "Pensar que 47×5=230 (en lugar de 235)", solution: "47×5=235, no 230. 50×5=250, menos 3×5=15: 235. 230 en realidad es 46×5." },
        { mistake: "Confundir 47×9=413 con 47×9=423", solution: "47×9=423 es correcto (50×9=450, menos 3×9=27). 413 es otro rÃ©sultat." },
      ],
      48: [
        { mistake: "Pensar que 48×5=230 (en lugar de 240)", solution: "48×5=240, no 230. 6×5=30, 8×5=40, 30×8=240. O 50×5=250, menos 2×5=10: 240." },
        { mistake: "Confundir 48×9=422 con 48×9=432", solution: "48×9=432 es correcto (6×9=54, ×8 o 50×9=450, menos 2×9=18). 422 es otro rÃ©sultat." },
      ],
      49: [
        { mistake: "Pensar que 49×5=240 (en lugar de 245)", solution: "49×5=245, no 240. 50×5=250, menos 5: 245. O 7×5=35, ×7=245." },
        { mistake: "Confundir 49×9=431 con 49×9=441", solution: "49×9=441 es correcto (50×9=450, menos 9). Además 441=21² (número cuadrado). 431 es otro rÃ©sultat." },
      ],
      50: [
        { mistake: "Pensar que 50×7=340 (en lugar de 350)", solution: "50×7=350, no 340. 5×7=35, agrega un 0: 350. O 100×7=700, ÷2=350." },
        { mistake: "Olvidar el cero", solution: "Los múltiplos impares de 50 se terminent par 50, los pares en 0: 50, 100, 150, 200, 250... ¡50×8=400, no 40!" },
      ],
      51: [
        { mistake: "Pensar que 51×5=250 (en lugar de 255)", solution: "51×5=255, no 250. 50×5=250, más 5: 255. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 51×9=450 con 51×9=459", solution: "51×9=459 es correcto (50×9=450, más 9). 450 en realidad es 50×9." },
      ],
      52: [
        { mistake: "Pensar que 52×5=250 (en lugar de 260)", solution: "52×5=260, no 250. 13×5=65, ×4=260. O 50×5=250, más 2×5=10: 260." },
        { mistake: "Confundir 52×9=458 con 52×9=468", solution: "52×9=468 es correcto (13×9=117, ×4 o 50×9=450, más 18). 458 es otro rÃ©sultat." },
      ],
      53: [
        { mistake: "Pensar que 53×5=255 (en lugar de 265)", solution: "53×5=265, no 255. 50×5=250, más 3×5=15: 265. 255 en realidad es 51×5." },
        { mistake: "Confundir 53×9=467 con 53×9=477", solution: "53×9=477 es correcto (50×9=450, más 3×9=27). 467 es otro rÃ©sultat." },
      ],
      54: [
        { mistake: "Pensar que 54×5=260 (en lugar de 270)", solution: "54×5=270, no 260. 6×5=30, 9×5=45, 30×9=270. O 50×5=250, más 4×5=20: 270." },
        { mistake: "Confundir 54×9=476 con 54×9=486", solution: "54×9=486 es correcto (6×9=54, ×9 o 60×9=540, menos 6×9=54). 476 es otro rÃ©sultat." },
      ],
      55: [
        { mistake: "Pensar que 55×5=270 (en lugar de 275)", solution: "55×5=275, no 270. 11×5=55, ×5=275. O 50×5=250, más 5×5=25: 275." },
        { mistake: "Confundir 55×9=485 con 55×9=495", solution: "55×9=495 es correcto (11×9=99, ×5 o 60×9=540, menos 5×9=45). 485 es otro rÃ©sultat." },
      ],
      56: [
        { mistake: "Pensar que 56×5=270 (en lugar de 280)", solution: "56×5=280, no 270. 7×5=35, 8×5=40, 35×8=280. O 60×5=300, menos 4×5=20: 280." },
        { mistake: "Confundir 56×9=494 con 56×9=504", solution: "56×9=504 es correcto (7×9=63, ×8 o 60×9=540, menos 4×9=36). 494 es otro rÃ©sultat." },
      ],
      57: [
        { mistake: "Pensar que 57×5=280 (en lugar de 285)", solution: "57×5=285, no 280. 60×5=300, menos 3×5=15: 285. 280 en realidad es 56×5." },
        { mistake: "Confundir 57×9=503 con 57×9=513", solution: "57×9=513 es correcto (60×9=540, menos 3×9=27). 503 es otro rÃ©sultat." },
      ],
      58: [
        { mistake: "Pensar que 58×5=280 (en lugar de 290)", solution: "58×5=290, no 280. 29×5=145, ×2=290. O 60×5=300, menos 2×5=10: 290." },
        { mistake: "Confundir 58×9=512 con 58×9=522", solution: "58×9=522 es correcto (29×9=261, ×2 o 60×9=540, menos 2×9=18). 512 es otro rÃ©sultat." },
      ],
      59: [
        { mistake: "Pensar que 59×5=290 (en lugar de 295)", solution: "59×5=295, no 290. 60×5=300, menos 5: 295. ¡Muy simple!" },
        { mistake: "Confundir 59×9=521 con 59×9=531", solution: "59×9=531 es correcto (60×9=540, menos 9). 531 est également 9×59. 521 es otro rÃ©sultat." },
      ],
      60: [
        { mistake: "Pensar que 60×7=410 (en lugar de 420)", solution: "60×7=420, no 410. 6×7=42, agrega un 0: 420. O 10×7=70, ×6=420." },
        { mistake: "Olvidar el cero", solution: "Tous les multiples de 60 deben terminar en 0: 60, 120, 180, 240, 300, 360, 420... ¡60×9=540, no 54!" },
      ],
      61: [
        { mistake: "Pensar que 61×5=300 (en lugar de 305)", solution: "61×5=305, no 300. 60×5=300, más 5: 305. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 61×9=540 con 61×9=549", solution: "61×9=549 es correcto (60×9=540, más 9). 540 en realidad es 60×9." },
      ],
      62: [
        { mistake: "Pensar que 62×5=300 (en lugar de 310)", solution: "62×5=310, no 300. 31×5=155, ×2=310. O 60×5=300, más 2×5=10: 310." },
        { mistake: "Confundir 62×9=548 con 62×9=558", solution: "62×9=558 es correcto (31×9=279, ×2 o 60×9=540, más 18). 548 es otro rÃ©sultat." },
      ],
      63: [
        { mistake: "Pensar que 63×5=305 (en lugar de 315)", solution: "63×5=315, no 305. 7×5=35, 9×5=45, 35×9=315. O 60×5=300, más 3×5=15: 315." },
        { mistake: "Confundir 63×9=557 con 63×9=567", solution: "63×9=567 es correcto (7×9=63, ×9 o 60×9=540, más 27). 557 es otro rÃ©sultat." },
      ],
      64: [
        { mistake: "Pensar que 64×5=310 (en lugar de 320)", solution: "64×5=320, no 310. 8×5=40, ×8=320. O 60×5=300, más 4×5=20: 320." },
        { mistake: "Confundir 64×9=566 con 64×9=576", solution: "64×9=576 es correcto (8×9=72, ×8 o 60×9=540, más 36). Además 576=24². 566 es otro rÃ©sultat." },
      ],
      65: [
        { mistake: "Pensar que 65×5=320 (en lugar de 325)", solution: "65×5=325, no 320. 13×5=65, ×5=325. O 60×5=300, más 5×5=25: 325." },
        { mistake: "Confundir 65×9=575 con 65×9=585", solution: "65×9=585 es correcto (13×9=117, ×5 o 70×9=630, menos 5×9=45). 575 es otro rÃ©sultat." },
      ],
      66: [
        { mistake: "Pensar que 66×5=325 (en lugar de 330)", solution: "66×5=330, no 325. 11×5=55, ×6=330. O 60×5=300, más 6×5=30: 330." },
        { mistake: "Confundir 66×9=584 con 66×9=594", solution: "66×9=594 es correcto (11×9=99, ×6 o 70×9=630, menos 4×9=36). 584 es otro rÃ©sultat." },
      ],
      67: [
        { mistake: "Pensar que 67×5=330 (en lugar de 335)", solution: "67×5=335, no 330. 70×5=350, menos 3×5=15: 335. 330 en realidad es 66×5." },
        { mistake: "Confundir 67×9=593 con 67×9=603", solution: "67×9=603 es correcto (70×9=630, menos 3×9=27). 593 es otro rÃ©sultat." },
      ],
      68: [
        { mistake: "Pensar que 68×5=330 (en lugar de 340)", solution: "68×5=340, no 330. 17×5=85, ×4=340. O 70×5=350, menos 2×5=10: 340." },
        { mistake: "Confundir 68×9=602 con 68×9=612", solution: "68×9=612 es correcto (17×9=153, ×4 o 70×9=630, menos 2×9=18). 602 es otro rÃ©sultat." },
      ],
      69: [
        { mistake: "Pensar que 69×5=340 (en lugar de 345)", solution: "69×5=345, no 340. 70×5=350, menos 5: 345. ¡Muy simple!" },
        { mistake: "Confundir 69×9=611 con 69×9=621", solution: "69×9=621 es correcto (70×9=630, menos 9). 621=3×207. 611 es otro rÃ©sultat." },
      ],
      70: [
        { mistake: "Pensar que 70×7=480 (en lugar de 490)", solution: "70×7=490, no 480. 7×7=49, agrega un 0: 490. O 10×7=70, ×7=490." },
        { mistake: "Olvidar el cero", solution: "Tous les multiples de 70 deben terminar en 0: 70, 140, 210, 280, 350, 420, 490... ¡70×9=630, no 63!" },
      ],
      71: [
        { mistake: "Pensar que 71×5=350 (en lugar de 355)", solution: "71×5=355, no 350. 70×5=350, más 5: 355. Siempre recuerda agregar ese 1 extra." },
        { mistake: "Confundir 71×9=630 con 71×9=639", solution: "71×9=639 es correcto (70×9=630, más 9). 630 en realidad es 70×9." },
      ],
      72: [
        { mistake: "Pensar que 72×5=350 (en lugar de 360)", solution: "72×5=360, no 350. 8×5=40, 9×5=45, 40×9=360. O 70×5=350, más 2×5=10: 360." },
        { mistake: "Confundir 72×9=638 con 72×9=648", solution: "72×9=648 es correcto (8×9=72, ×9 o 80×9=720, menos 72). 638 es otro rÃ©sultat." },
      ],
      73: [
        { mistake: "Pensar que 73×5=355 (en lugar de 365)", solution: "73×5=365, no 355. 70×5=350, más 3×5=15: 365. ¡Además 365=número de días en un año!" },
        { mistake: "Confundir 73×9=647 con 73×9=657", solution: "73×9=657 es correcto (70×9=630, más 3×9=27). 647 es otro rÃ©sultat." },
      ],
      74: [
        { mistake: "Pensar que 74×5=360 (en lugar de 370)", solution: "74×5=370, no 360. 37×5=185, ×2=370. O 75×5=375, menos 5: 370." },
        { mistake: "Confundir 74×9=656 con 74×9=666", solution: "74×9=666 es correcto (37×9=333, ×2 o 75×9=675, menos 9). 666 es un nombre repdigit. 656 es otro rÃ©sultat." },
      ],
      75: [
        { mistake: "Pensar que 75×5=370 (en lugar de 375)", solution: "75×5=375, no 370. 15×5=75, ×5=375. O 25×5=125, ×3=375." },
        { mistake: "Confundir 75×9=665 con 75×9=675", solution: "75×9=675 es correcto (25×9=225, ×3 o 80×9=720, menos 5×9=45). 675=3³×5². 665 es otro rÃ©sultat." },
      ],
      76: [
        { mistake: "Pensar que 76×5=370 (en lugar de 380)", solution: "76×5=380, no 370. 19×5=95, ×4=380. O 80×5=400, menos 4×5=20: 380." },
        { mistake: "Confundir 76×9=674 con 76×9=684", solution: "76×9=684 es correcto (19×9=171, ×4 o 80×9=720, menos 4×9=36). 684 es otro rÃ©sultat." },
      ],
      77: [
        { mistake: "Pensar que 77×5=380 (en lugar de 385)", solution: "77×5=385, no 380. 7×5=35, 11×5=55, 35×11=385. O 80×5=400, menos 3×5=15: 385." },
        { mistake: "Confundir 77×9=683 con 77×9=693", solution: "77×9=693 es correcto (7×9=63, ×11 o 80×9=720, menos 3×9=27). 693=7×9×11. 683 es otro rÃ©sultat." },
      ],
      78: [
        { mistake: "Pensar que 78×5=380 (en lugar de 390)", solution: "78×5=390, no 380. 13×5=65, 6×5=30, 65×6=390. O 80×5=400, menos 2×5=10: 390." },
        { mistake: "Confundir 78×9=692 con 78×9=702", solution: "78×9=702 es correcto (13×9=117, ×6 o 80×9=720, menos 2×9=18). 702 es otro rÃ©sultat." },
      ],
      79: [
        { mistake: "Pensar que 79×5=390 (en lugar de 395)", solution: "79×5=395, no 390. 80×5=400, menos 5: 395. ¡Muy simple!" },
        { mistake: "Confundir 79×9=701 con 79×9=711", solution: "79×9=711 es correcto (80×9=720, menos 9). 711 es otro rÃ©sultat." },
      ],
      80: [
        { mistake: "Pensar que 80×7=550 (en lugar de 560)", solution: "80×7=560, no 550. 8×7=56, agrega un 0: 560. O 10×7=70, ×8=560." },
        { mistake: "Olvidar el cero", solution: "Tous les multiples de 80 deben terminar en 0: 80, 160, 240, 320, 400, 480, 560... ¡80×9=720, no 72!" },
      ],
      81: [
        { mistake: "Calcular 81 como 8×10+1 en lugar de 9×9", solution: "81=9×9. Ejemplo: 81×7 = (9×7)×9 = 63×9 = 567. ¡utilise la relation cuadrada!" },
        { mistake: "Error de addition en estrategia 80+1", solution: "81×7 = (80×7)+(1×7) = 560+7 = 567. ¡Calcula ambas partes cuidadosamente!" },
      ],
      82: [
        { mistake: "Complicar 82×4", solution: "82×4 = (80×4)+(2×4) = 320+8 = 328. ¡Descompone y addition!" },
        { mistake: "Pensar que 82 es impar", solution: "82=2×41, siempre par. tous ses multiples son nombres pairs: 82, 164, 246..." },
      ],
      83: [
        { mistake: "Calcular incorrectamente 83×5", solution: "83×5 = (80×5)+(3×5) = 400+15 = 415. ¡Descompone y addition!" },
        { mistake: "Pensar que 83 es par", solution: "83 es primo, solo divisible por 1 y 83. Es impar y no divisible por 2." },
      ],
      84: [
        { mistake: "Complicar 84×5", solution: "84×5 = 420 (7×12×5=7×60). O (80×5)+(4×5)=400+20=420." },
        { mistake: "Olvidar los factores de 84", solution: "84=7×12=6×14=4×21=3×28. ¡peut être calculé de multiples façons!" },
      ],
      85: [
        { mistake: "Calcular incorrectamente 85×4", solution: "85×4 = (80×4)+(5×4) = 320+20 = 340. O 85×4=17×20=340." },
        { mistake: "Olvidar el último dígito", solution: "Los múltiplos de 85 siempre se terminent par 5 o 0: 85, 170, 255, 340, 425, 510..." },
      ],
      86: [
        { mistake: "Complicar 86×5", solution: "86×5 = (80×5)+(6×5) = 400+30 = 430. ¡Descompone y addition!" },
        { mistake: "Pensar que 86 es impar", solution: "86=2×43, siempre par. tous ses multiples son nombres pairs: 86, 172, 258..." },
      ],
      87: [
        { mistake: "Calcular incorrectamente 87×5", solution: "87×5 = (90×5)-(3×5) = 450-15 = 435. ¡Restar desde 90 es plus facile!" },
        { mistake: "Pensar que 87 es primo", solution: "87=3×29, no es primo! Es divisible por 3 (8+7=15, divisible exactamente por 3)." },
      ],
      88: [
        { mistake: "Complicar 88×5", solution: "88×5 = (80×5)+(8×5) = 400+40 = 440. O 88×5=11×40=440." },
        { mistake: "Calcular incorrectamente 88×11", solution: "88×11 = 88×10 + 88 = 880+88 = 968. ¡Usa la regla de Multiplier par 11!" },
      ],
      89: [
        { mistake: "Calcular 89 sin redondear", solution: "89=90-1. Ejemplo: 89×7 = (90×7)-7 = 630-7 = 623. ¡MUY FÁCIL!" },
        { mistake: "Calcular 89 como 88+1", solution: "¡La estrategia 90-1 es mucho plus facile! 89×7: 90×7=630, luego soustraction 7: 623." },
      ],
      90: [
        { mistake: "Complicar 90×5", solution: "90×5 = 450 (9×50). ¡Solo 9×5=45, agrega un 0!" },
        { mistake: "Olvidar el cero", solution: "90=9×10. Siempre agrega 0 al final: 90, 180, 270, 360, 450..." },
      ],
      91: [
        { mistake: "Calcular incorrectamente 91×5", solution: "91×5 = (90×5)+(1×5) = 450+5 = 455. ¡Descompone y addition!" },
        { mistake: "Pensar que 91 es primo", solution: "91=7×13, no es primo! Es divisible por 7 y 13." },
      ],
      92: [
        { mistake: "Complicar 92×5", solution: "92×5 = (90×5)+(2×5) = 450+10 = 460. ¡Descompone y addition!" },
        { mistake: "Pensar que 92 es impar", solution: "92=2×46, siempre par. tous ses multiples son nombres pairs: 92, 184, 276..." },
      ],
      93: [
        { mistake: "Calcular incorrectamente 93×5", solution: "93×5 = (90×5)+(3×5) = 450+15 = 465. ¡Descompone y addition!" },
        { mistake: "Pensar que 93 es primo", solution: "93=3×31, no es primo! Es divisible por 3 (9+3=12, divisible exactamente por 3)." },
      ],
      94: [
        { mistake: "Complicar 94×5", solution: "94×5 = (100×5)-(6×5) = 500-30 = 470. ¡Restar desde 100 es plus facile!" },
        { mistake: "Pensar que 94 es impar", solution: "94=2×47, siempre par. tous ses multiples son nombres pairs: 94, 188, 282..." },
      ],
      95: [
        { mistake: "Calcular incorrectamente 95×4", solution: "95×4 = (100×4)-(5×4) = 400-20 = 380. O 95×4=19×20=380." },
        { mistake: "Olvidar el último dígito", solution: "Los múltiplos de 95 siempre se terminent par 5 o 0: 95, 190, 285, 380, 475, 570..." },
      ],
      96: [
        { mistake: "Complicar 96×5", solution: "96×5 = (100×5)-(4×5) = 500-20 = 480. O 96×5=12×40=480." },
        { mistake: "Olvidar los factores de 96", solution: "96=8×12=6×16=4×24=3×32. ¡peut être calculé de multiples façons!" },
      ],
      97: [
        { mistake: "Calcular 97 sin redondear", solution: "97=100-3. Ejemplo: 97×7 = (100×7)-21 = 700-21 = 679. ¡MUY FÁCIL!" },
        { mistake: "Calcular 97 como 96+1", solution: "¡La estrategia 100-3 es mucho plus facile! 97×7: 100×7=700, luego soustraction 21: 679." },
      ],
      98: [
        { mistake: "Complicar 98×5", solution: "98×5 = (100×5)-(2×5) = 500-10 = 490. ¡Restar desde 100 es SÚPER FÁCIL!" },
        { mistake: "Pensar que 98 es impar", solution: "98=2×49, siempre par. tous ses multiples son nombres pairs: 98, 196, 294..." },
      ],
      99: [
        { mistake: "Calcular 99 sin redondear", solution: "99=100-1. Ejemplo: 99×7 = (100×7)-7 = 700-7 = 693. ¡PERFECTA!" },
        { mistake: "Calcular 99 como 98+1", solution: "¡La estrategia 100-1 es mucho plus facile! 99×8: 100×8=800, luego soustraction 8: 792." },
      ],
      100: [
        { mistake: "Complicar 100×5", solution: "100×5 = 500! Solo agrega dos ceros al final: 5 → 500, 7 → 700!" },
        { mistake: "Olvidar los ceros", solution: "Multiplier par 100: agrega DOS ceros al final. 100×9=900, ¡no 90!" },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Di cada multiplicación en voz alta: '1 por 1 es 1, 1 por 2 es 2...'",
        "Practica escribir la tabla una vez al día durante una semana",
        "Busca el patrón: la respuesta est toujours le même nombre que el segundo número",
        "Usa tarjetas didácticas, aunque cette table generalmente se aprende muy rápido",
      ],
      2: [
        "Cuenta de dos en dos mientras caminas o subes escaleras: 2, 4, 6, 8...",
        "Usa tus dedos: sostén dedos en pares y cuenta de dos en dos",
        "Practica duplicar números en tu cabeza durante el día",
        "Dílo en voz alta: '2 por 5 es 5 más 5, lo que hace 10'",
      ],
      3: [
        "Cuenta rítmicamente de tres en tres: 3, 6, 9, 12, 15...",
        "Usa el truco de los dedos: sostén dedos en groupes de 3",
        "Busca el patrón de addition de dígitos para verificar tus respuestas (repite 3-6-9)",
        "Practica 5-10 minutos diarios en lugar de una sesión larga",
      ],
      4: [
        "Aprende primero la table de 2, luego duplica cada respuesta para obtener los 4s",
        "Cuenta de cuatro en cuatro: 4, 8, 12, 16, 20...",
        "Usa objetos en groupes de 4 para visualizar (patas de silla, ruedas de auto)",
        "Practica por separado los más difíciles (4×6, 4×7, 4×8, 4×9)",
      ],
      5: [
        "Usa tus dedos para contar de cinco en cinco—cada dedo representa 5",
        "Mira un reloj y cuenta en intervalos de 5 minutos",
        "Practica con dinero: cuenta monedas de 5 centavos",
        "Recuerda: multiplicadores pares se terminent par 0, impares en 5",
      ],
      6: [
        "Memoriza la table de 3, luego duplica cada respuesta pour trouver los 6s",
        "Estrategia de la caja de huevos: cuenta de seis en seis (6, 12, 18, 24...)",
        "Enfócate en los pares difíciles: estudia 6×7=42, 6×8=48, 6×9=54 por separado",
        "Memoriza el patrón de unidades: 6, 2, 8, 4, 0 y repite",
        "Verifica usando les deux tables del 2 y 3, ya que 6 es múltiplo de ambos",
      ],
      7: [
        "Memoriza el par más difícil: 7×8=56 (rima 'cinco seis, siete ocho')",
        "Conéctalo con los días de la semana: 7 días, 14 días (2 semanas), 21 días (3 semanas)",
        "Memoriza especialmente 7×7=49 (7²=49), calcula otros desde ahí",
        "Truco de dedos: Cuenta 7 dedos desde la izquierda, los restantes son unidades, los contados son decenas",
        "¡Solo practica 3-4 hechos reales al día. El 7 requiere paciencia!",
      ],
      8: [
        "Memoriza la table de 4, luego duplica cada respuesta pour trouver los 8s",
        "Memoriza especialmente 8×8=64 ('ocho ocho sesenta y cuatro')",
        "Cuenta de ocho en ocho: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "Cadena de duplicación: Duplica Le nombre (×2), luego otra vez (×4), luego otra vez (×8)",
        "Las unidades son siempre pares y descienden: 8, 6, 4, 2, 0 y repite",
      ],
      9: [
        "Aprende el truco de los dedos: usa tus 10 dedos para mostrar la table de 9",
        "Usa la regla de addition de dígitos: addition les chiffres de la respuesta, siempre da 9",
        "Resta desde 10: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "Memoriza especialmente 9×9=81 (9²=81)",
        "Patrón de decenas: En 9×n, el dígito de las decenas est toujours n-1",
      ],
      10: [
        "¡La regla plus facile: Solo agrega un cero al final!",
        "Cuenta de diez en diez: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Entiende la relación de valor posicional: Multiplier par 10 desplaza un chiffre a la izquierda",
        "Practica avec de grands nombres: 23×10=230, 47×10=470",
        "Usa cette table para verificar otras tablas (ej: 9×6 = 60-6)",
      ],
      11: [
        "Memoriza el patrón de dígitos dobles: 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Practica el truco de addition de dígitos: 23×11 = 253 (2_[2+3]_3)",
        "Memoriza especialmente 11×11=121 y 11×12=132",
        "Crea canción o rima: 'Once por cinco, cincuenta y cinco' (11×5=55)",
        "Encuentra un múltiplo de 11 dans la vie réelle cada día (11 años, 11 horas, etc.)",
      ],
      12: [
        "Practica contando docenas: cuenta cajas de huevos (12, 24, 36...)",
        "Calcula 12 usando tabla del 3 o 4: 12=3×4, entonces 12×5 = 3×5×4 = 15×4 = 60",
        "Usa el reloj: 12×5=60 minutos (1 hora)",
        "Enfócate en los múltiplos más difíciles de 12: 12×7=84, 12×8=96, 12×9=108",
        "Usa 12 en vida diaria: meses, horas, docenas",
      ],
      13: [
        "Usa siempre la estrategia 10+3: 13×6 = 60+18 = 78",
        "Convierte la table de 13 en canción o encuentra un ritmo",
        "Enfócate en los pares más difíciles: 13×7=91, 13×8=104, 13×9=117",
        "Practica 2-3 múltiplos diferentes de 13 cada día, no todos a la vez",
        "Trabaja hacia atrás: 130, 117, 104, 91, 78... (soustraction 13 desde 130)",
      ],
      14: [
        "Memoriza la table de 7, luego duplica cada respuesta",
        "Usa un calendario bisemanal: períodos de 14 días",
        "Memoriza especialmente 14×7=98 y 14×8=112",
        "Usa 14 para verificar la table de 7: 14×6=84, entonces 7×6=42",
        "Cuenta de catorce en catorce: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      15: [
        "Estrategia del reloj: 15 minutos = cuarto de hora. 15×4=60 minutos = 1 hora",
        "Usa tabla del 3 o 5: 15=3×5, entonces 15×4 = 3×4×5 = 12×5 = 60",
        "Sigue el patrón que termina en 0 o 5: 15, 30, 45, 60, 75, 90...",
        "Practica cálculo de propinas: cómo calcular 15% de propina (10%+5%)",
        "Memoriza los múltiplos más útiles de 15: 15×4=60, 15×6=90, 15×8=120",
      ],
      16: [
        "Cadena de duplicación: Duplica Le nombre (×2), otra vez (×4), otra vez (×8), otra vez (×16)",
        "Si vous connaissez la table de 8, duplica cada rÃ©sultat: 8×7=56, entonces 16×7=112",
        "Memoriza especialmente 16×16=256 (2⁸=256)",
        "Relaciónalo con términos informáticos: 16 bits, sistema hexadecimal",
        "Cuenta de dieciséis en dieciséis: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      17: [
        "Perfecciona la estrategia 20-3: 17×n = 20n - 3n",
        "Descomposición 10+7: 17×6 = 60+42 = 102",
        "Practica diariamente los pares más difíciles: 17×7=119, 17×8=136, 17×9=153",
        "Relaciónalo con 17 años de edad: qué pasa a los 17, qué pasa a los 34 (17×2)",
        "¡Ten paciencia! 17 es primo, requiere práctica",
      ],
      18: [
        "Usa tabla del 9 o 6: 18=2×9 o 18=3×6",
        "Duplica la table de 9: 9×4=36, entonces 18×4=72",
        "Triplica la table de 6: 6×5=30, entonces 18×5=90",
        "Relaciónalo con mayoría de edad: 18, 36 (18×2), 54 (18×3)",
        "Cuenta de dieciocho en dieciocho: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      19: [
        "Usa siempre la estrategia 20-1: 19×n = 20n - n",
        "Ejemplo: 19×7 = 140-7 = 133. ¡Muy simple y efectivo!",
        "Descomposición 10+9: 19×4 = 40+36 = 76",
        "Practica los múltiplos más difíciles: 19×7=133, 19×8=152, 19×9=171",
        "Aprende la table de 19 hacia atrás: 190, 171, 152, 133... para flexibilidad mental",
      ],
      20: [
        "Lo plus facile: Multiplica por 10, luego duplica",
        "O: Agrega un cero al final, luego duplica (MÉTODO CORRECTO! 7×20: 70 luego ×2=140)",
        "Método correcto: 7×10=70, 70×2=140 o 7×2=14, agrega un 0: 140",
        "Cuenta rápidamente de veinte en veinte: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Practica con dinero: cuenta billetes de 20",
      ],
      21: [
        "Usa la estrategia 20+1: 21×n = 20n + n",
        "utilise la relation 3×7: ¿Conoces la table de 3? 3×6=18, 7×6=42, entonces 21×6=126",
        "Practica los múltiplos más difíciles: 21×7=147, 21×8=168, 21×9=189",
        "Relaciónalo con la mayoría de edad legal: ¿qué cambia a los 21 años?",
        "Cuenta de veintiuno en veintiuno: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      22: [
        "Memoriza la table de 11, luego duplica cada rÃ©sultat",
        "Relaciónalo con equipos de fútbol: 2 equipos = 22 jugadores",
        "Los múltiplos plus facilees primero: 22×5=110, 22×10=220",
        "Cuenta de veintidós en veintidós: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "Observa el patrón de dígitos dobles en los primeros 4 rÃ©sultats: 22, 44, 66, 88",
      ],
      23: [
        "Usa siempre la estrategia 20+3: 23×6 = 120+18 = 138",
        "O estrategia 25-2: 23×4 = 100-8 = 92",
        "Relaciónalo con cromosomas: Los humanos tienen 23 paires de chromosomes",
        "Practica diariamente los múltiplos más difíciles: 23×7=161, 23×8=184, 23×9=207",
        "23 es primo, así que ten paciencia y practica mucho",
      ],
      24: [
        "utilise la relation de horas: 24 horas×3 días = 72 horas",
        "Prueba múltiples métodos: 24=2×12, 3×8, 4×6. ¿Cuál es plus facile?",
        "Si vous connaissez la table de 12, duplica: 12×7=84, entonces 24×7=168",
        "Cuenta por docenas: 24 = 2 docenas. 24×5 = 10 docenas = 120",
        "Cuenta de veinticuatro en veinticuatro: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      25: [
        "Sistema de cuartos: 25 = 100÷4. Entonces 25×4=100, 25×8=200",
        "Memoriza el patrón de los últimos deux chiffres: 25, 50, 75, 00 se repite",
        "Practica con dinero: cuenta monedas de 25 centavos",
        "Recuerda que es le carré de 5: 25=5×5",
        "Cálculo de porcentajes: 25% = 1/4. Usa esta relación",
      ],
      26: [
        "Si vous connaissez la table de 13, duplica: 13×8=104, entonces 26×8=208",
        "Estrategia 25+1: 26×4 = 100+4 = 104",
        "Relaciónalo con el alfabeto: hay 26 letras",
        "Cuenta de veintiséis en veintiséis: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "Practica los múltiplos más difíciles: 26×7=182, 26×9=234",
      ],
      27: [
        "Usa la estrategia 30-3: 27×n = 30n - 3n",
        "Si vous connaissez la table de 9, triplícala: 9×6=54, así que 27×6=162",
        "Recuerda que es el cubo de 3: 27=3×3×3",
        "Cuenta de 27 en 27: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "Practica los múltiplos más difíciles: 27×7=189, 27×8=216, 27×9=243",
      ],
      28: [
        "utilise la relation 4×7: multiplica la table de 4 por 7",
        "O duplica 14: 14×5=70, entonces 28×5=140",
        "Relaciónalo con febrero: 28 días (año normal)",
        "Cuenta de veintiocho en veintiocho: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "Memoriza los múltiplos más útiles: 28×5=140, 28×7=196, 28×10=280",
      ],
      29: [
        "Usa la estrategia 30-1: 29×n = 30n - n",
        "Ejemplo: 29×8 = 240-8 = 232. ¡Muy fácil!",
        "Relaciónalo con année bissextile: 29 días en février",
        "Cuenta de veintinueve en veintinueve: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "Practica los múltiplos más difíciles: 29×7=203, 29×9=261",
      ],
      30: [
        "Estrategia 3×10: multiplica por 10, luego por 3",
        "Ejemplo: 7×30 = 70×3 = 210 o 7×3=21, agrega un 0: 210",
        "Relaciónalo con demi-heure: 30 minutos",
        "Días del mes: Muchos meses tienen 30 días (abril, junio, septiembre, noviembre)",
        "Cuenta de treinta en treinta: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
      31: [
        "Usa la estrategia 30+1: 31×n = 30n + n",
        "Ejemplo: 31×8 = 240 + 8 = 248. ¡Muy simple y efectivo!",
        "Relaciónalo con el calendario: 31 días es la longitud máxima del mes",
        "Cuenta de treinta y uno en treinta y uno: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310",
        "Practica los múltiplos más difíciles: 31×7=217, 31×9=279",
      ],
      32: [
        "Usa la cadena de duplicación: duplica 16",
        "Ejemplo: 16×5=80, entonces 32×5=160",
        "Recuerda que es potencia de 2: 32=2×2×2×2×2",
        "Cuenta de treinta y dos en treinta y dos: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320",
        "Relaciónalo con términos informáticos: sistema de 32 bits",
      ],
      33: [
        "Usa la estrategia 3×11: triplica la table de 11",
        "O multiplica la table de 3 por 11: 3×7=21, 21×11=231, entonces 33×7=231",
        "Observa el patrón de repetición: 33, 66, 99 (primeros tres rÃ©sultats)",
        "Cuenta de treinta y tres en treinta y tres: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330",
        "Practica los múltiplos más difíciles: 33×7=231, 33×8=264, 33×9=297",
      ],
      34: [
        "Si vous connaissez la table de 17, duplícala: 17×6=102, entonces 34×6=204",
        "Estrategia 35-1: 34×4 = 140-4 = 136",
        "O usa 30+4: 34×5 = 150+20 = 170",
        "Cuenta de treinta y cuatro en treinta y cuatro: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340",
        "Memoriza los múltiplos más útiles: 34×5=170, 34×10=340",
      ],
      35: [
        "Estrategia 5×7: multiplica la table de 5 por 7 o viceversa",
        "Ejemplo: 35×4 = 5×4×7 = 20×7 = 140",
        "Usa el patrón del último dígito: siempre termina en 5 o 0",
        "Cuenta de treinta y cinco en treinta y cinco: 35, 70, 105, 140, 175, 210, 245, 280, 315, 350",
        "Cálculo de tiempo: 35 minutos = demi-heure + 5 minutos",
      ],
      36: [
        "Recuerda que es le carré de 6: 36=6×6",
        "Múltiples métodos: 36=4×9, 3×12, 2×18. ¿Cuál es plus facile?",
        "Si vous connaissez la table de 9, multíplica por 4: 9×7=63, 63×4=252, entonces 36×7=252",
        "Cuenta de treinta y seis en treinta y seis: 36, 72, 108, 144, 180, 216, 252, 288, 324, 360",
        "Medición de ángulos: 360° es una vuelta completa, 36° es la décima parte",
      ],
      37: [
        "Usa la estrategia 40-3: 37×n = 40n - 3n",
        "Memoriza la relación mágica con 111: 37×3=111, 37×6=222, 37×9=333!",
        "Ejemplo: 37×8 = 320 - 24 = 296",
        "Cuenta de treinta y siete en treinta y siete: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370",
        "Descubre el patrón de repetición: rÃ©sultats interesantes en cada múltiplo de 3",
      ],
      38: [
        "Si vous connaissez la table de 19, duplícala: 19×7=133, entonces 38×7=266",
        "Estrategia 40-2: 38×6 = 240 - 12 = 228",
        "Cuenta de treinta y ocho en treinta y ocho: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380",
        "Practica los múltiplos más difíciles: 38×7=266, 38×9=342",
        "Relaciónalo con la température corporelle: 38°C es fièvre légère",
      ],
      39: [
        "Estrategia 40-1 es PERFECTA: 39×n = 40n - n",
        "Ejemplo: 39×7 = 280 - 7 = 273. ¡Muy fácil!",
        "O usa 3×13: triplica la table de 13",
        "Cuenta de treinta y nueve en treinta y nueve: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390",
        "Practica los múltiplos más difíciles: 39×7=273, 39×8=312",
      ],
      40: [
        "Estrategia 4×10: multiplica por 10, luego por 4",
        "Ejemplo: 7×40 = 70×4 = 280 o 7×4=28, agrega un 0: 280",
        "semaine de travail: 40 horas estándar de trabajo",
        "Cuenta de cuarenta en cuarenta: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
        "Cálculo porcentual: 40% = 2/5",
      ],
      41: [
        "Estrategia 40+1 es PERFECTA: 41×n = 40n + n",
        "Ejemplo: 41×7 = 280 + 7 = 287. ¡Muy fácil!",
        "Cuenta de cuarenta y uno en cuarenta y uno: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410",
        "Practica los múltiplos más difíciles: 41×7=287, 41×8=328",
        "nombre premier: solo divisible por 1 y 41",
      ],
      42: [
        "utilise la relation 6×7: renforce les deux tablas",
        "Cuenta de cuarenta y dos en cuarenta y dos: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420",
        "Múltiples métodos: 42=6×7=2×21=3×14. ¿Cuál es plus facile?",
        "Referencia a la Guía del Autoestopista: ¡42 es célèbre dans la cultura popular!",
        "Practica los múltiplos más difíciles: 42×7=294, 42×8=336",
      ],
      43: [
        "Prueba las estrategias 40+3 o 45-2",
        "Ejemplo: 43×6 = 240+18 = 258 o 270-12 = 258",
        "Cuenta de cuarenta y tres en cuarenta y tres: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430",
        "Practica los múltiplos más difíciles: 43×7=301, 43×8=344",
        "nombre premier: un nombre especial que nécessite des stratégies creativas",
      ],
      44: [
        "Cuatro fois 11: cuadruplica la table de 11",
        "Ejemplo: 11×7=77, ×4=308, entonces 44×7=308",
        "Cuenta de cuarenta y cuatro en cuarenta y cuatro: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440",
        "Patrón de repetición: 44, 88 muestran patrón de dígitos dobles",
        "Practica los múltiplos más difíciles: 44×7=308, 44×9=396",
      ],
      45: [
        "Relación 5×9: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 45×7 = 9×7×5 = 63×5 = 315",
        "Cuenta de cuarenta y cinco en cuarenta y cinco: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450",
        "Ángulo: 45° es medio ángulo recto, important en géométrie",
        "Temps: 45 minutos = trois quarts d'heure (3/4 de hora)",
      ],
      46: [
        "El doble de 23: duplica la table de 23",
        "Ejemplo: 23×7=161, ×2=322, entonces 46×7=322",
        "Estrategias 45+1 o 50-4: 46×5 = 225+5 = 230",
        "Cuenta de cuarenta y seis en cuarenta y seis: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460",
        "Biología: 46 cromosomas (23 pares) en el ADN humano",
      ],
      47: [
        "Estrategia 50-3 es PERFECTA: 47×n = 50n - 3n",
        "Ejemplo: 47×7 = 350 - 21 = 329. ¡Muy fácil!",
        "Cuenta de cuarenta y siete en cuarenta y siete: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470",
        "Practica los múltiplos más difíciles: 47×7=329, 47×8=376",
        "nombre premier: nécessite des stratégies mentales especiales",
      ],
      48: [
        "Múltiples métodos: 48=6×8=4×12=3×16=2×24",
        "Ejemplo: 48×5 = 12×20 = 240",
        "Cuenta de cuarenta y ocho en cuarenta y ocho: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480",
        "Temps: 48 horas = 2 días. 72 horas = 3 días",
        "Practica los múltiplos más difíciles: 48×7=336, 48×9=432",
      ],
      49: [
        "Cuadrado de 7: 49=7×7. Refuerza la table de 7",
        "Estrategia 50-1 MUY FÁCIL: 49×n = 50n - n",
        "Ejemplo: 49×7 = 350 - 7 = 343. ¡Simple!",
        "Cuenta de cuarenta y nueve en cuarenta y nueve: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490",
        "Número cuadrado: 49=7² para cálculos de área en géométrie",
      ],
      50: [
        "Estrategia 5×10: multiplica por 5, agrega un 0",
        "Ejemplo: 8×50: 8×5=40, agrega un 0: 400",
        "la moitié de 100: 50×7 = 350 (700÷2)",
        "Cuenta de cincuenta en cincuenta: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500",
        "Porcentaje: 50% = 1/2, la relación porcentual más importante",
      ],
      51: [
        "Estrategia 50+1 es PERFECTA: 51×n = 50n + n",
        "Ejemplo: 51×7 = 350 + 7 = 357. ¡Muy fácil!",
        "Cuenta de cincuenta y uno en cincuenta y uno: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510",
        "Relación 3×17: triplica la table de 17",
        "Practica los múltiplos más difíciles: 51×7=357, 51×8=408",
      ],
      52: [
        "Relación 4×13: cuadruplica la table de 13",
        "Ejemplo: 13×7=91, ×4=364, entonces 52×7=364",
        "Cuenta de cincuenta y dos en cincuenta y dos: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520",
        "Calendario: 52 semanas = 1 año. Para cálculos anuales",
        "Cartas: 52 cartas para juegos y problemas de probabilidad",
      ],
      53: [
        "Estrategia 50+3: 53×n = 50n + 3n",
        "Ejemplo: 53×6 = 300 + 18 = 318",
        "Cuenta de cincuenta y tres en cincuenta y tres: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530",
        "Practica los múltiplos más difíciles: 53×7=371, 53×8=424",
        "nombre premier: nécessite des stratégies de cálculo creativas",
      ],
      54: [
        "Relación 6×9: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 54×5 = 9×5×6 = 45×6 = 270",
        "Cuenta de cincuenta y cuatro en cincuenta y cuatro: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540",
        "Múltiples métodos: 54=6×9=2×27=3×18",
        "Practica los múltiplos más difíciles: 54×7=378, 54×8=432",
      ],
      55: [
        "Relación 5×11: renforce les deux tablas",
        "Ejemplo: 55×4 = 11×4×5 = 44×5 = 220",
        "Cuenta de cincuenta y cinco en cincuenta y cinco: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550",
        "Número triangular: 55 = 1+2+3+...+10, propriÃ©tÃ© matemática especial",
        "Practica los múltiplos más difíciles: 55×7=385, 55×9=495",
      ],
      56: [
        "Relación 7×8: ¡La multiplicación MÁS DIFÍCIL! renforce les deux",
        "Ejemplo: 56×5 = 7×5×8 = 35×8 = 280",
        "Cuenta de cincuenta y seis en cincuenta y seis: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560",
        "Alternativa: 56=4×14=2×28. Elige la forma plus facile",
        "Practica los múltiplos más difíciles: 56×7=392, 56×9=504",
      ],
      57: [
        "Estrategia 60-3 es PERFECTA: 57×n = 60n - 3n",
        "Ejemplo: 57×7 = 420 - 21 = 399. ¡Muy fácil!",
        "Cuenta de cincuenta y siete en cincuenta y siete: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570",
        "Relación 3×19: triplica la table de 19",
        "Practica los múltiplos más difíciles: 57×7=399, 57×8=456",
      ],
      58: [
        "Estrategia 60-2: 58×n = 60n - 2n",
        "Ejemplo: 58×6 = 360 - 12 = 348",
        "Cuenta de cincuenta y ocho en cincuenta y ocho: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580",
        "El doble de 29: duplica la table de 29",
        "Practica los múltiplos más difíciles: 58×7=406, 58×9=522",
      ],
      59: [
        "Estrategia 60-1 SÚPER FÁCIL: 59×n = 60n - n",
        "Ejemplo: 59×7 = 420 - 7 = 413. ¡PERFECTO!",
        "Cuenta de cincuenta y nueve en cincuenta y nueve: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590",
        "Temps: 59 minutos, 59 segundos - 1 menos que 60",
        "Practica los múltiplos más difíciles: 59×7=413, 59×8=472",
      ],
      60: [
        "Estrategia 6×10: multiplica por 6, agrega un 0",
        "Ejemplo: 7×60: 7×6=42, agrega un 0: 420",
        "Cuenta de sesenta en sesenta: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600",
        "Temps: 60 minutos=1 hora, 60 segundos=1 minuto",
        "Múltiples métodos: 60=6×10=5×12=4×15=3×20=2×30",
      ],
      61: [
        "Estrategia 60+1 es PERFECTA: 61×n = 60n + n",
        "Ejemplo: 61×7 = 420 + 7 = 427. ¡Muy fácil!",
        "Cuenta de sesenta y uno en sesenta y uno: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610",
        "Practica los múltiplos más difíciles: 61×7=427, 61×8=488",
        "nombre premier: nécessite des stratégies de cálculo creativas",
      ],
      62: [
        "Estrategia 60+2: 62×n = 60n + 2n",
        "Ejemplo: 62×6 = 360 + 12 = 372",
        "Cuenta de sesenta y dos en sesenta y dos: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620",
        "El doble de 31: duplica la table de 31",
        "Practica los múltiplos más difíciles: 62×7=434, 62×9=558",
      ],
      63: [
        "Relación 7×9: renforce les deux tablas",
        "Ejemplo: 63×5 = 9×5×7 = 45×7 = 315",
        "Cuenta de sesenta y tres en sesenta y tres: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630",
        "Alternativa: 63=3×21. Triplica la table de 21",
        "Practica los múltiplos más difíciles: 63×7=441, 63×8=504",
      ],
      64: [
        "Cuadrado de 8: 64=8×8=8². También 2⁶",
        "Ejemplo: 64×5 = 8×5×8 = 40×8 = 320",
        "Cuenta de sesenta y cuatro en sesenta y cuatro: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640",
        "Ajedrez: 8×8=64 casillas, aplicación geométrica",
        "Computación: arquitectura de 64 bits, contexto tecnológico",
      ],
      65: [
        "Relación 5×13: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 65×4 = 13×4×5 = 52×5 = 260",
        "Cuenta de sesenta y cinco en sesenta y cinco: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650",
        "Puedes usar las estrategias 60+5 o 70-5",
        "Practica los múltiplos más difíciles: 65×7=455, 65×9=585",
      ],
      66: [
        "Relación 6×11: renforce les deux tablas",
        "Ejemplo: 66×5 = 11×5×6 = 55×6 = 330",
        "Cuenta de sesenta y seis en sesenta y seis: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660",
        "Patrón de repetición: 66 (6×11), patrón de la table de 11",
        "Practica los múltiplos más difíciles: 66×7=462, 66×9=594",
      ],
      67: [
        "Estrategia 70-3 es PERFECTA: 67×n = 70n - 3n",
        "Ejemplo: 67×7 = 490 - 21 = 469. ¡Muy fácil!",
        "Cuenta de sesenta y siete en sesenta y siete: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670",
        "Practica los múltiplos más difíciles: 67×7=469, 67×8=536",
        "nombre premier: nécessite des stratégies mentales especiales",
      ],
      68: [
        "Estrategia 70-2: 68×n = 70n - 2n",
        "Ejemplo: 68×6 = 420 - 12 = 408",
        "Cuenta de sesenta y ocho en sesenta y ocho: 68, 136, 204, 272, 340, 408, 476, 544, 612, 680",
        "Relación 4×17: cuadruplica la table de 17",
        "Practica los múltiplos más difíciles: 68×7=476, 68×9=612",
      ],
      69: [
        "Estrategia 70-1 SÚPER FÁCIL: 69×n = 70n - n",
        "Ejemplo: 69×7 = 490 - 7 = 483. ¡PERFECTO!",
        "Cuenta de sesenta y nueve en sesenta y nueve: 69, 138, 207, 276, 345, 414, 483, 552, 621, 690",
        "Relación 3×23: triplica la table de 23",
        "Practica los múltiplos más difíciles: 69×7=483, 69×8=552",
      ],
      70: [
        "Estrategia 7×10: multiplica por 7, agrega un 0",
        "Ejemplo: 8×70: 8×7=56, agrega un 0: 560",
        "Cuenta de setenta en setenta: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700",
        "Refuerza la table de 7: cada rÃ©sultat es 10 fois 7",
        "Múltiples métodos: 70=7×10=5×14=2×35",
      ],
      71: [
        "Estrategia 70+1 es PERFECTA: 71×n = 70n + n",
        "Ejemplo: 71×7 = 490 + 7 = 497. ¡Muy fácil!",
        "Cuenta de setenta y uno en setenta y uno: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710",
        "Practica los múltiplos más difíciles: 71×7=497, 71×8=568",
        "nombre premier: nécessite des stratégies de cálculo creativas",
      ],
      72: [
        "Relación 8×9: renforce les deux tablas",
        "Ejemplo: 72×5 = 9×5×8 = 45×8 = 360",
        "Cuenta de setenta y dos en setenta y dos: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720",
        "Múltiples métodos: 72=8×9=6×12=4×18=3×24",
        "Temps: 72 horas = 3 días. Aplicación práctica",
      ],
      73: [
        "Estrategia 70+3: 73×n = 70n + 3n",
        "Ejemplo: 73×5 = 350 + 15 = 365 (¡días del año!)",
        "Cuenta de setenta y tres en setenta y tres: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730",
        "Practica los múltiplos más difíciles: 73×7=511, 73×8=584",
        "nombre premier: el 21º nombre premier, curiosidad matemática",
      ],
      74: [
        "Estrategia 75-1: 74×n = 75n - n",
        "Ejemplo: 74×5 = 375 - 5 = 370",
        "Cuenta de setenta y cuatro en setenta y cuatro: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740",
        "Relación 2×37: duplica la table de 37",
        "Practica los múltiplos más difíciles: 74×7=518, 74×9=666",
      ],
      75: [
        "Relaciones 3×25 o 5×15: múltiples métodos",
        "Ejemplo: 75×4 = 25×12 = 300",
        "Cuenta de setenta y cinco en setenta y cinco: 75, 150, 225, 300, 375, 450, 525, 600, 675, 750",
        "Porcentaje: 75% = 3/4, relación fraccionaria importante",
        "Practica los múltiplos más difíciles: 75×7=525, 75×9=675",
      ],
      76: [
        "Estrategia 80-4: 76×n = 80n - 4n",
        "Ejemplo: 76×6 = 480 - 24 = 456",
        "Cuenta de setenta y seis en setenta y seis: 76, 152, 228, 304, 380, 456, 532, 608, 684, 760",
        "Relación 4×19: cuadruplica la table de 19",
        "Practica los múltiplos más difíciles: 76×7=532, 76×9=684",
      ],
      77: [
        "Relación 7×11: renforce les deux tablas",
        "Ejemplo: 77×5 = 11×5×7 = 55×7 = 385",
        "Cuenta de setenta y siete en setenta y siete: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770",
        "Patrón de repetición: 77 (7×11), patrón especial",
        "Practica los múltiplos más difíciles: 77×7=539, 77×9=693",
      ],
      78: [
        "Estrategia 80-2: 78×n = 80n - 2n",
        "Ejemplo: 78×7 = 560 - 14 = 546",
        "Cuenta de setenta y ocho en setenta y ocho: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780",
        "Relación 6×13: puedes usar cualquiera de las dos tablas",
        "Practica los múltiplos más difíciles: 78×7=546, 78×9=702",
      ],
      79: [
        "Estrategia 80-1 SÚPER FÁCIL: 79×n = 80n - n",
        "Ejemplo: 79×7 = 560 - 7 = 553. ¡PERFECTO!",
        "Cuenta de setenta y nueve en setenta y nueve: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790",
        "Practica los múltiplos más difíciles: 79×7=553, 79×8=632",
        "nombre premier: 1 menos que 80, cálculo fácil",
      ],
      80: [
        "Estrategia 8×10: multiplica por 8, agrega un 0",
        "Ejemplo: 7×80: 7×8=56, agrega un 0: 560",
        "Cuenta de ochenta en ochenta: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800",
        "Refuerza la table de 8: cada rÃ©sultat es 10 fois 8",
        "Múltiples métodos: 80=8×10=4×20=5×16=2×40",
      ],
      81: [
        "Usa que es le carré de 9: 81=9×9",
        "Ejemplo: 81×5 = (9×5)×9 = 45×9 = 405",
        "Estrategia 80+1: 81×n = 80n + n. Ejemplo: 81×7 = 560+7 = 567",
        "Cuenta de ochenta y uno en ochenta y uno: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810",
        "Practica los múltiplos más difíciles: 81×7=567, 81×8=648, 81×9=729",
      ],
      82: [
        "Estrategia 80+2: 82×n = 80n + 2n",
        "Ejemplo: 82×6 = 480 + 12 = 492",
        "Cuenta de ochenta y dos en ochenta y dos: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820",
        "Relación 2×41: duplica la table de 41",
        "Practica los múltiplos más difíciles: 82×7=574, 82×9=738",
      ],
      83: [
        "Usa la estrategia 85-2 o 80+3",
        "Ejemplo: 83×6 = 510-12 = 498 o 480+18 = 498",
        "Cuenta de ochenta y tres en ochenta y tres: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830",
        "nombre premier: nécessite des stratégies de cálculo creativas",
        "Practica los múltiplos más difíciles: 83×7=581, 83×8=664, 83×9=747",
      ],
      84: [
        "Relación 7×12: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 84×5 = 12×5×7 = 60×7 = 420",
        "Cuenta de ochenta y cuatro en ochenta y cuatro: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840",
        "Múltiples métodos: 84=7×12=6×14=4×21=3×28",
        "Practica los múltiplos más difíciles: 84×7=588, 84×9=756",
      ],
      85: [
        "Relación 5×17: puedes usar les deux tables, la del 5 y la del 17",
        "Ejemplo: 85×4 = 17×4×5 = 68×5 = 340",
        "Cuenta de ochenta y cinco en ochenta y cinco: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850",
        "Último dígito: siempre termina en 5 o 0",
        "Estrategias 90-5 o 80+5: 85×6 = 540-30 = 510",
      ],
      86: [
        "Estrategia 90-4: 86×n = 90n - 4n",
        "Ejemplo: 86×6 = 540 - 24 = 516",
        "Cuenta de ochenta y seis en ochenta y seis: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860",
        "Relación 2×43: duplica la table de 43",
        "Practica los múltiplos más difíciles: 86×7=602, 86×9=774",
      ],
      87: [
        "Estrategia 90-3 es PERFECTA: 87×n = 90n - 3n",
        "Ejemplo: 87×7 = 630 - 21 = 609. ¡Muy fácil!",
        "Cuenta de ochenta y siete en ochenta y siete: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870",
        "Relación 3×29: triplica la table de 29",
        "Practica los múltiplos más difíciles: 87×7=609, 87×8=696, 87×9=783",
      ],
      88: [
        "Relación 8×11: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 88×5 = 11×5×8 = 55×8 = 440",
        "Cuenta de ochenta y ocho en ochenta y ocho: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880",
        "Propiedad de repetición: facilidad de reconocimiento visual (88)",
        "Múltiples métodos: 88=8×11=4×22=2×44",
      ],
      89: [
        "Estrategia 90-1 SÚPER FÁCIL: 89×n = 90n - n",
        "Ejemplo: 89×7 = 630 - 7 = 623. ¡PERFECTO!",
        "Cuenta de ochenta y nueve en ochenta y nueve: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890",
        "Practica los múltiplos más difíciles: 89×7=623, 89×8=712, 89×9=801",
        "nombre premier: la estrategia 90-1 es el méthode la plus pratique",
      ],
      90: [
        "Estrategia 9×10: multiplica por 9, agrega un 0",
        "Ejemplo: 7×90: 7×9=63, agrega un 0: 630",
        "Cuenta de noventa en noventa: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900",
        "Refuerza la table de 9: cada rÃ©sultat es 10 fois 9",
        "Múltiples métodos: 90=9×10=3×30=5×18=6×15",
      ],
      91: [
        "Relación 7×13: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 91×5 = 13×5×7 = 65×7 = 455",
        "Estrategia 90+1: 91×n = 90n + n. Ejemplo: 91×7 = 630+7 = 637",
        "Cuenta de noventa y uno en noventa y uno: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910",
        "Practica los múltiplos más difíciles: 91×7=637, 91×8=728, 91×9=819",
      ],
      92: [
        "Usa la estrategia 90+2 o 100-8",
        "Ejemplo: 92×6 = 480+12 = 492 o 600-48 = 552",
        "Cuenta de noventa y dos en noventa y dos: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920",
        "Relación 4×23: cuadruplica la table de 23",
        "Practica los múltiplos más difíciles: 92×7=644, 92×9=828",
      ],
      93: [
        "Estrategia 90+3: 93×n = 90n + 3n",
        "Ejemplo: 93×7 = 630 + 21 = 651",
        "Cuenta de noventa y tres en noventa y tres: 93, 186, 279, 372, 465, 558, 651, 744, 837, 930",
        "Relación 3×31: triplica la table de 31",
        "Practica los múltiplos más difíciles: 93×7=651, 93×8=744, 93×9=837",
      ],
      94: [
        "Estrategia 100-6 es PERFECTA: 94×n = 100n - 6n",
        "Ejemplo: 94×7 = 700 - 42 = 658. ¡Muy fácil!",
        "Cuenta de noventa y cuatro en noventa y cuatro: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940",
        "Relación 2×47: duplica la table de 47",
        "Practica los múltiplos más difíciles: 94×7=658, 94×8=752, 94×9=846",
      ],
      95: [
        "Relación 5×19: puedes usar les deux tables, la del 5 y la del 19",
        "Ejemplo: 95×4 = 19×4×5 = 76×5 = 380",
        "Cuenta de noventa y cinco en noventa y cinco: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950",
        "Último dígito: siempre termina en 5 o 0",
        "Estrategia 100-5: 95×6 = 600-30 = 570. ¡très pratique!",
      ],
      96: [
        "Relación 8×12: puedes usar cualquiera de las dos tablas",
        "Ejemplo: 96×5 = 12×5×8 = 60×8 = 480",
        "Cuenta de noventa y seis en noventa y seis: 96, 192, 288, 384, 480, 576, 672, 768, 864, 960",
        "Múltiples métodos: 96=8×12=6×16=4×24=3×32",
        "Practica los múltiplos más difíciles: 96×7=672, 96×9=864",
      ],
      97: [
        "Estrategia 100-3 SÚPER FÁCIL: 97×n = 100n - 3n",
        "Ejemplo: 97×7 = 700 - 21 = 679. ¡PERFECTO!",
        "Cuenta de noventa y siete en noventa y siete: 97, 194, 291, 388, 485, 582, 679, 776, 873, 970",
        "Practica los múltiplos más difíciles: 97×7=679, 97×8=776, 97×9=873",
        "nombre premier: la estrategia 100-3 es el méthode la plus pratique",
      ],
      98: [
        "Estrategia 100-2 MUY FÁCIL: 98×n = 100n - 2n",
        "Ejemplo: 98×7 = 700 - 14 = 686. ¡Perfecto!",
        "Cuenta de noventa y ocho en noventa y ocho: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980",
        "Relación 2×49: duplica la table de 49",
        "Practica los múltiplos más difíciles: 98×7=686, 98×8=784, 98×9=882",
      ],
      99: [
        "Estrategia 100-1 LA plus facile: 99×n = 100n - n",
        "Ejemplo: 99×7 = 700 - 7 = 693. ¡PERFECTO!",
        "Cuenta de noventa y nueve en noventa y nueve: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990",
        "Relación 9×11: puedes usar cualquiera de las dos tablas",
        "Patrón de repetición: 99 proporciona facilidad de reconocimiento visual",
      ],
      100: [
        "¡LA TABLA plus facile! Agrega dos ceros al final",
        "Ejemplo: 7×100 = 700. ¡Solo agrega 00 después del 7!",
        "Cuenta de cien en cien: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
        "Relación 10×10: 10 fois la table de 10",
        "Es la base para cálculos porcentuales: 100%=completo, ¡es la base de todo!",
      ],
    }
    return strategies[number] || [
      `Practica contar de ${number} en ${number} en voz alta`,
      "Escribe la tabla todos los días durante una semana",
      "Usa tarjetas de memoria para probarte de forma aleatoria",
      "Practica 5-10 minutos diarios en lugar de estudiar mucho tiempo de una vez",
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${colors[colorIndex]} pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Numbers - Multiplication Results */}
          {[1, 2, 3, 4, 5].map((multiplier, index) => (
            <div
              key={multiplier}
              className={`absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {number * multiplier}
            </div>
          ))}
          
          {/* Colorful Circles */}
          <div className="absolute top-20 right-[30%] w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-20 sm:w-28 h-20 sm:h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-28 sm:w-36 h-28 sm:h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Number Badge with Fun Icons */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-2xl sm:text-3xl">🔢</span>
              <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {number}
              </span>
              <span className="text-2xl sm:text-3xl">✖️</span>
            </div>
          </div>
          
          {/* Main Heading with Fun Elements */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">{number}</span>
                <br className="sm:hidden" />
                <span className="sm:inline"> </span>
                <span className="text-slate-900">Table de Multiplication</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">Operaciones</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Jeux</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Práctica</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Esta página te ayudará a aprender y entender <span className="font-semibold text-yellow-200">la tabla de multiplicar del {number}</span>. 
              Descubrirás cómo se comporta el {number} en la multiplicación, 
              <span className="font-semibold text-yellow-200"> verás sus modÃ¨les</span> y 
              aprenderás <span className="font-semibold text-yellow-200">formas prácticas</span> para dominarla.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Pratiquer</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Explorar Jeux</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">TÃ©lÃ©charger Exercices</span>
                <span className="sm:hidden">TÃ©lÃ©charger</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Introduction - What This Table Covers */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl">📖</span>
              ¿Qué Cubre la Table de {number}?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            La tabla de multiplicar del {number} cubre el producto dLe nombre {number} con todos los nombres del 1 al 10. 
            Esto te enseña <span className="font-bold text-indigo-600">10 operaciones fundamentales</span> que te ayudarán mucho en la vida diaria y en temas matemáticos avanzados.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((multiplier, index) => (
                <div key={multiplier} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="text-xs sm:text-sm text-slate-600 mb-1">{number} × {multiplier}</span>
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-base sm:text-xl shadow-md group-hover:scale-110 transition-transform">
                    {number * multiplier}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">💡</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                la table de {number} tiene <span className="font-bold text-indigo-600">10 operaciones de multiplicación</span>. 
                ¡Al entender los modÃ¨les de cette table, puedes memorizar fácilmente estas operaciones y calcularlas rápidamente!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Number Context & Meaning + Table Combined */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left: Explanation */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  ¿Qué signifie Le nombre {number} en la Multiplicación?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
                  {getNumberMeaning()}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border-2 border-blue-100">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Explicación Simple</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Cuando ves {number} × 4, piensa: "Tengo 4 groupes y cada groupe tiene {number} elementos." 
                        Entonces {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Por Qué Es Importante Aprender la Table de {number}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {getWhyImportant()}
                </p>
              </div>
            </div>

            {/* Right: Multiplication Table */}
            <div className="lg:sticky lg:top-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Table de {number}
                </h2>
                
                {/* Print and Download Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrint}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-2 border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-xs sm:text-sm font-semibold"
                    title="Imprimer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="hidden sm:inline">Imprimer</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                    title="TÃ©lÃ©charger"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">TÃ©lÃ©charger</span>
                  </button>
                </div>
              </div>
              
              <div ref={tableRef} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-4 sm:p-6 text-white shadow-xl`}>
                <div className="space-y-1.5 sm:space-y-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white/30 transition-colors">
                      <span className="font-medium text-sm sm:text-base">{number} × {i + 1}</span>
                      <span className="font-bold text-base sm:text-lg">= {number * (i + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
            Patrones en la Table de {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Entender los modÃ¨les hace que el aprendizaje sea plus facile y divertido. la table de {number} tiene 
            hermosos modÃ¨les que pueden ayudarte a recordarla sin memorizar de memoria.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 sm:p-4 border-2 border-amber-100">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <div id="practice">
        <PracticePreview rangeStart={number} rangeEnd={number} />
      </div>

      {/* Interactive Games */}
      <div id="games">
        <NumberGames number={number} />
      </div>

      {/* Printable Worksheets */}
      <div id="worksheets">
        <PrintableExercises rangeStart={number} rangeEnd={number} />
      </div>

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Cómo Pratiquer la Table de {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Aprender las tablas de multiplicar requiere práctica consistente con las estrategias correctas. 
            Aquí hay métodos comprobados para dominar específicamente la table de {number}:
          </p>
          
          <div className="grid gap-3 sm:gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-0.5 sm:pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Errores Comunes al Aprender la Table de {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Muchos estudiantes cometen errores similares al aprender cette table. Ser consciente de estos errores comunes 
            te ayudará a evitarlos y aprender de manera más efectiva.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 sm:mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Solución:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Multiplication Tables */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Tables de Multiplicar Relacionadas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            la table de {number} es parte de un sistema de aprendizaje más amplio. 
            Puedes explorar otras tablas en el mismo rango o pasar al siguiente número lógico.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/es/tablas-de-multiplicar/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Número Anterior</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Table de {number - 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/es/tablas-de-multiplicar/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Siguiente Número →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Table de {number + 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/es/tablas-de-multiplicar/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Plage Superior</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Tables del {rangeStart} al {rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Explora todas las tablas de multiplicar dans cette plage con herramientas de práctica y juegos
                  </p>
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
