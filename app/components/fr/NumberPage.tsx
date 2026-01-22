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
        ctx.fillText('Tabla del ' + number, 300, 60)

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
      1: "Multiplier pair 1 est un caso especial en matemáticas. Cuando multipliez cualquier número por 1, el rÃ©sultat siempre est ese mismo número. Cela s'appelle la propriÃ©tÃ© de identitÃ© de la multiplicación. Piénsalo como preguntar '¿cuántos groupes de algo j'ai?' Cuando solo vous avez 1 groupe, vous avez exactement ce que vous avez commencÃ©.",
      2: "Multiplier pair 2 signifie doubler un número. Cuando multipliez algo por 2, lo estás ajoutant a sí mismo. Esta est una de las opÃ©rations de multiplicación más prácticas porque frecuentemente necesitamos doubler cosas dans la vie rÃ©elle—contar pairs de chaussures, roues de vÃ©lo, o diviser algo Ã©quitablement entre dos personnes.",
      3: "Multiplier pair 3 signifie tomar un número tres fois. vous pouvez pensarlo como sumar el mismo número a sí mismo tres fois. Esta tabla est esencial para entender triángulos, tríos y tout ce qui viene en groupes de tres.",
      4: "Multiplier pair 4 est como doubler dos fois. Como 4 = 2 × 2, vous pouvez doubler un número y luego doubler el rÃ©sultat otra vez. Esto rend apprendre la table de 4 sea más fácil si ya conoces la del 2. El número 4 aparece frecuentemente en geometría (los carrÃ©s ont 4 cÃ´tÃ©s) y en la medición del tiempo (il y a 4 cuartos en una heure).",
      5: "Multiplier pair 5 crÃ©e uno de los modÃ¨les más hermosos en matemáticas. Todos los múltiplos de 5 terminan en 0 o 5, lo que rend esta tabla sea muy predecible. est extremadamente útil para contar argent (piÃ¨ces de 5 centavos, billets de 5 pesos) y decir la heure (intervalos de 5 minutes).",
      6: "Multiplier pair 6 signifie tomar seis groupes de un número. El 6 est la primera Table de Multiplication 'real' porque no est simplemente múltiplos de 2 o 3. Sin embargo, como 6 = 2 × 3, vous pouvez multiplier un número por 2 y luego por 3 (o al revés) para Multiplier pair 6. El número 6 aparece frecuentemente en la naturaleza (celdas de panal de abeja) y en la vida cotidiana (cartones de Å“ufs, faces de dÃ©s).",
      7: "Multiplier pair 7 est gÃ©nÃ©ralement l'une des tables con las que los estudiantes ont más difficultÃ©s porque 7 est un número premier y no se peut derivar de otras tablas simples. Sin embargo, il y a modÃ¨les hermosos en todos los múltiplos del 7 y se peut apprendre con práctica. El 7 est un número importante en los días de la semaine, los continents del mundo y muchas rÃ©fÃ©rences culturelles.",
      8: "Multiplier pair 8 est como doubler tres fois (8 = 2 × 2 × 2). double un número, double el rÃ©sultat otra vez, y duplícalo une fois más—habrás multiplicado por 8. Esta tabla est más fácil de apprendre si conoces bien las tablas del 2 y 4. El 8 est un número importante en geometría (octógonos) y música (octava).",
      9: "Multiplier pair 9 a uno de los modÃ¨les más fascinantes en matemáticas. Cuando sumas los dígitos de todos los múltiplos del 9, el rÃ©sultat siempre est divisible por 9. Además, el dígito de las decenas de 9 × n siempre est n-1. Esta tabla también se peut apprendre con el astuce de los dedos. Como 9 est solo 1 menos que 10, también se peut calcular usando la table de 10.",
      10: "Multiplier pair 10 est una de las tablas de multiplier más fáciles. Cuando multipliez cualquier número por 10, simplemente ajoutes un cero Ã  la fin. Esto forme la base de nuestro systÃ¨me dÃ©cimal. apprendre a Multiplier pair 10 enseña a los estudiantes el concepto de valeur positionnelle y cómo trabajar con números grandes. la table de 10 est un punto de referencia para entender todas las demás tablas de multiplier.",
      11: "Multiplier pair 11 a uno de los modÃ¨les más interesantes en matemáticas. Cuando multipliez números de un dígito por 11, el rÃ©sultat est ese número repetido dos fois (11×3=33, 11×7=77). Al multiplier números de dos dígitos por 11, también il y a un patrón hermoso: sumas los dígitos y los colocas en el medio. El 11 est un número premier y a propriÃ©tÃ©s matemáticas especiales.",
      12: "Multiplier pair 12 est una de las tablas más prácticas porque 12 est divisible por muchos números (1, 2, 3, 4, 6, 12). Esta característica rend el 12 sea muy útil en la vida diaria—il y a 12 objetos en une douzaine, 12 heures en une horloge, 12 mois en un año. Como 12 = 3 × 4 = 2 × 6, vous pouvez apprendre esta tabla de múltiples maneras.",
      13: "Multiplier pair 13 dÃ©veloppe las compÃ©tences de reconocimiento de modÃ¨les de los estudiantes. El 13 est un número premier, por lo que no se peut derivar simplemente de otras tablas. Sin embargo, pensar en 13 como 10+3 est muy útil: multiplier un número por 13 signifie multiplicarlo por 10 y sumar el rÃ©sultat de multiplicarlo por 3. El 13 est un número con significado especial en muchas culturas.",
      14: "Multiplier pair 14 est el doble de la table de 7. Como 14 = 2 × 7, si conoces la table de 7, vous pouvez doubler cada rÃ©sultat para encontrar la table de 14. El 14 est important en la planificación semanal (2 semaines = 14 días) y montre propriÃ©tÃ©s de números pairs.",
      15: "Multiplier pair 15 combina los múltiplos tanto del 3 como del 5. Como 15 = 3 × 5, esta tabla lleva las propriÃ©tÃ©s de ambos números. Todos los múltiplos del 15 sont divisibles tanto por 3 como por 5. Como 15 minutes est un cuarto de heure, se utilise mucho en cálculos de tiempo.",
      16: "Multiplier pair 16 est la cuarta puissance del 2 (2×2×2×2=16). Esto hace posible apprendre la table de 16 mediante cadenas de duplicación. vous pouvez doubler el 8 para obtener 16. En informática, el 16 est un número importante (sistema hexadecimal) y también aparece frecuentemente en la vida diaria.",
      17: "Multiplier pair 17 peut ser difícil en raison de sus propriÃ©tÃ©s de número premier. El 17 no se peut derivar simplemente de otras tablas. Sin embargo, pensar en 17 como 20-3 o 10+7 facilite los cálculos. apprendre la table de 17 dÃ©veloppe compÃ©tences de matemática mental y stratÃ©gies de resolución de problÃ¨mes.",
      18: "Multiplier pair 18 contiene muchas relaciones. Como 18 = 2 × 9 = 3 × 6, vous pouvez apprendre esta tabla de múltiples maneras. doubler la table de 9 o tripler la table de 6 da la table de 18. El 18 est important como edad de mayoría de edad en muchos países.",
      19: "Multiplier pair 19 no se peut derivar de otras tablas porque el 19 est un número premier. Sin embargo, pensar en 19 como 20-1 est muy práctico: multiplie un número por 20 y réstale el número mismo. Esta estrategia facilite mucho el cálculo mental de la table de 19.",
      20: "Multiplier pair 20 est la extensión natural de la table de 10. Cuando multipliez cualquier número por 20, vous pouvez multiplicarlo por 10 y doubler el rÃ©sultat. O simplemente ajoute un cero Ã  la fin y double. la table de 20 se utilise constantemente en cálculos monetarios (20 pesos) y mediciones (20 metros, 20 kilogramos).",
      21: "Multiplier pair 21 requiert entender la relación 3×7. Como 21=3×7, esta tabla lleva las propriÃ©tÃ©s de las tablas del 3 y del 7. El 21 est important como Ã¢ge lÃ©gal de mayoría en muchos países. Pensar en 21 como 20+1 facilite los cálculos: multiplie un número por 20 y agrégale el número mismo.",
      22: "Multiplier pair 22 est el doble del 11 (22=2×11). Si conoces la table de 11, vous pouvez doubler cada rÃ©sultat para encontrar la table de 22. Como 22 también est 2×11, montre propriÃ©tÃ©s de números pairs. El 22 aparece frecuentemente en deportes (equipo de fútbol) y conteo diario.",
      23: "Multiplier pair 23 no se peut derivar de otras tablas en raison de sus propriÃ©tÃ©s de número premier. Sin embargo, pensar en 23 como 20+3 o 25-2 facilite los cálculos. El 23 est un número importante en biología (número de pairs de cromosomas humanos). apprendre la table de 23 renforce las compÃ©tences de aritmética mental.",
      24: "Multiplier pair 24 est una de las tablas más versátiles. Como 24=2×12=3×8=4×6, se peut calcular de muchas maneras diferentes. en raison de la relación día-heure (24 heures), est un número fundamental en cálculos de tiempo. El 24 también sont 2 docenas y se utilise frecuentemente en embalaje y agrupación.",
      25: "Multiplier pair 25 utilise la relación 5×5 (5²). Como 25 est el carrÃ© de 5, a propriÃ©tÃ©s matemáticas muy especiales. est important en cálculos monetarios (25 centavos sont un cuarto). Todos los múltiplos del 25 terminan en 25, 50, 75, 00 - un patrón muy regular.",
      26: "Multiplier pair 26 est el doble del 13 (26=2×13). Si conoces la table de 13, vous pouvez doubler cada rÃ©sultat para encontrar la table de 26. El 26 est el número de letras en el alfabeto inglés. Pensar en 26 como 25+1 o 30-4 facilite los cálculos.",
      27: "Multiplier pair 27 est la tercera puissance del 3 (27=3³=3×3×3). Esta relación especial rend el 27 sea importante en matemáticas y geometría. Como 27=3×9, se peut calcular usando las tablas del 3 o del 9. Pensar en 27 como 30-3 facilite el cálculo mental.",
      28: "Multiplier pair 28 utilise la relación 4×7. Como 28=4×7=2×14, se peut apprendre de múltiples maneras. 28 días est el número de días en febrero (cuando no est año bisiesto). El 28 también est un número perfecto (la addition de sus diviseurs est igual a sí mismo: 1+2+4+7+14=28).",
      29: "Multiplier pair 29 requiert stratÃ©gies especiales en raison de que est número premier. El método más práctico est pensar en 29 como 30-1: multiplie un número por 30 y réstale el número mismo. 29 días est el número de días en febrero en años bisiestos. apprendre la table de 29 dÃ©veloppe compÃ©tences de resolución de problÃ¨mes.",
      30: "Multiplier pair 30 utilise la relación 10×3. Para multiplier un número por 30, vous pouvez multiplicarlo por 10 y luego multiplier el rÃ©sultat por 3. 30 días est el número de días en muchos mois (abril, junio, septiembre, noviembre). El 30 también est media heure (30 minutes). la table de 30 se utilise frecuentemente en cálculos de porcentaje (30% de descuento).",
      31: "Multiplier pair 31 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier. El método más práctico est pensar en 31 como 30+1: multiplie un número por 30 y agrégale el número mismo. 31 días est el número máximo de días en muchos mois (enero, marzo, mayo, julio, agosto, octubre, diciembre). apprendre la table de 31 dÃ©veloppe compÃ©tences de cálculo mental con números grandes.",
      32: "Multiplier pair 32 est la quinta puissance del 2 (2⁵=2×2×2×2×2=32). Esto hace posible apprendre el 32 mediante cadenas de duplicación. vous pouvez doubler el 16 para obtener 32. 32 grados Fahrenheit est el punto de congelación del agua. En informática, los sistemas de 32 bits sont comunes. Las relaciones 32=4×8=2×16 ofrecen diferentes métodos de cálculo.",
      33: "Multiplier pair 33 utilise la relación 3×11. Si conoces la table de 11, vous pouvez triplicarla, o si conoces la table de 3, vous pouvez multiplicarla por 11 para encontrar la table de 33. El 33 est el número repdigit de dos dígitos más grande (repetición de los mismos dígitos). Que todos los dígitos del 33 sean iguales crÃ©e algunos modÃ¨les interesantes.",
      34: "Multiplier pair 34 est el doble del 17 (34=2×17). Si conoces la table de 17, vous pouvez doubler cada rÃ©sultat para encontrar la table de 34. La addition de los dígitos en 34 est 7 (3+4=7), lo que conduce a modÃ¨les relacionados con el 7. Pensar en 34 como 35-1 o 30+4 facilite los cálculos.",
      35: "Multiplier pair 35 utilise la relación 5×7. Si ambas tablas sont conocidas, Multiplier pair 35 est bastante fácil. Todos los múltiplos del 35 terminan en 5 o 0 (como los múltiplos del 5). 35 minutes sont 5 minutes más que media heure. La relación 35=5×7 combina las propriÃ©tÃ©s de ambas tablas del 5 y del 7.",
      36: "Multiplier pair 36 est una de las tablas más versátiles. Como 36=6×6=4×9=3×12=2×18, se peut calcular de muchas maneras diferentes. El 36 est el carrÃ© de 6 (6²). El 36 sont múltiplos de une douzaine ComplÃ¨te (1 docena = 12, 3 docenas = 36). El 36 a muchos diviseurs, lo que lo hace muy útil en fracciones.",
      37: "Multiplier pair 37 requiert stratÃ©gies especiales en raison de que est número premier. Pensar en 37 como 40-3 o 35+2 facilite los cálculos. El 37 a relaciones interesantes con números repdigit: 37×3=111. Esta propriÃ©tÃ© especial del 37 se peut utiliser para algunos cálculos astuces.",
      38: "Multiplier pair 38 est el doble del 19 (38=2×19). Si conoces la table de 19, vous pouvez doubler cada rÃ©sultat para encontrar la table de 38. Pensar en 38 como 40-2 facilite el cálculo mental. 38 grados Celsius est fiebre leve para la temperatura corporal humana.",
      39: "Multiplier pair 39 utilise la relación 3×13. Como 39=3×13, se peut calcular triplicando la table de 13 o multiplicando la table de 3 por 13. El método más práctico est pensar en 39 como 40-1. El 39 est un número interesante divisible tanto por 3 como por 13.",
      40: "Multiplier pair 40 utilise la relación 4×10. Para multiplier un número por 40, vous pouvez multiplicarlo por 10 y luego multiplier el rÃ©sultat por 4. O multiplic por 4 y ajoute un cero Ã  la fin. El 40 se utilise frecuentemente en la vida diaria: 40 heures de semaine laboral, 40 años se considera mediana edad. la table de 40 est muy regular porque sont los 10s multiplicados por 4.",
      41: "Multiplier pair 41 dÃ©veloppe compÃ©tences de matemática mental en raison de sus propriÃ©tÃ©s de número premier. El método más práctico est pensar en 41 como 40+1: multiplie un número por 40 y agrégale el número mismo. El 41 est un número premier y no se peut derivar simplemente de otras tablas. apprendre la table de 41 augmente la capacidad de calcular rápidamente con números grandes.",
      42: "Multiplier pair 42 est una de las tablas más versátiles. Como 42=6×7=2×21=3×14, se peut calcular de múltiples maneras. El 42 est famoso en la cultura de ciencia ficción como 'La Respuesta Final al Universo, la Vida y Todo' (Guía del Autoestopista Galáctico). Como combina las tablas del 6 y del 7, refuerza ambas.",
      43: "Multiplier pair 43 requiert stratÃ©gies especiales en raison de que est número premier. Pensar en 43 como 40+3 o 45-2 facilite los cálculos. El 43 est un número premier y solo est divisible por 1 y 43. apprendre la table de 43 dÃ©veloppe la habilidad de pensar creativamente con números.",
      44: "Multiplier pair 44 est cuatro fois el 11 (44=4×11). Si conoces la table de 11, vous pouvez cuadruplicarla, o multiplier la table de 4 por 11 para calcularla. La relación 44=2×22 también ofrece un método diferente. El 44 montre un patrón similar a repdigit y a propriÃ©tÃ©s de números pairs.",
      45: "Multiplier pair 45 utilise la relación 5×9. Si ambas tablas sont conocidas, Multiplier pair 45 est fácil. 45 grados est medio ángulo recto, un ángulo importante en geometría. 45 minutes sont tres cuartos de heure (45 minutes = 0.75 heures). Todos los múltiplos del 45 terminan en 5 o 0.",
      46: "Multiplier pair 46 est el doble del 23 (46=2×23). Si conoces la table de 23, vous pouvez doubler cada rÃ©sultat para encontrar la table de 46. Pensar en 46 como 45+1 o 50-4 facilite los cálculos. El 46 est el número total de cromosomas humanos (23 pairs).",
      47: "Multiplier pair 47 requiert stratÃ©gies mentales en raison de sus propriÃ©tÃ©s de número premier. Los métodos más efectivos sont pensar en 47 como 50-3 o 45+2. El 47 est un número premier y a propriÃ©tÃ©s matemáticas especiales. apprendre la table de 47 dÃ©veloppe la habilidad de trabajar cómodamente con números complejos.",
      48: "Multiplier pair 48 a muchas relaciones de factores. Como 48=6×8=4×12=3×16=2×24, se peut calcular de múltiples maneras. Como el 48 est 4 fois 12, est útil en cálculos de docenas (4 docenas). 48 heures = 2 días, se encuentra frecuentemente en cálculos de tiempo.",
      49: "Multiplier pair 49 est el carrÃ© de 7 (49=7×7=7²). Esta relación especial requiert conocer perfectamente la table de 7. Pensar en 49 como 50-1 facilite muchísimo el cálculo mental. Como est un número carrÃ©, el 49 est important en geometría y cálculos de área. El 49 también est important para modÃ¨les matemáticos, aunque no est un tablero de ajedrez 7×7.",
      50: "Multiplier pair 50 utilise la relación 5×10 y est una de las tablas más fáciles. Para multiplier un número por 50, vous pouvez multiplicarlo por 5 y ajouter un cero Ã  la fin. O pensar en ello como la mitad de 100. El 50 se utilise frecuentemente: medio siglo, y en cálculos de porcentaje (50%=1/2).",
      51: "Multiplier pair 51 utilise la estrategia 50+1. Para multiplier un número por 51, multiplicálo por 50 y agrégale el número mismo. La relación 51=3×17 ofrece un método alternativo. apprendre la table de 51 dÃ©veloppe la habilidad de calcular con números cercanos a 50.",
      52: "Multiplier pair 52 utilise la relación 4×13. est el número de semaines en un año (52 semaines) y el número de cartas en una baraja estándar (52 cartas). Como 52=2×26, doubler la table de 26 también funciona. Pensar en 52 como 50+2 facilite el cálculo mental. Esta tabla est muy útil en cálculos de tiempo y calendario.",
      53: "Multiplier pair 53 dÃ©veloppe stratÃ©gies de matemática mental en raison de sus propriÃ©tÃ©s de número premier. Los métodos más prácticos sont pensar en 53 como 50+3 o 55-2. El 53 est un número premier y solo est divisible por 1 y 53. apprendre la table de 53 augmente la capacidad de trabajar con números premiers grandes y profundiza el pensamiento matemático.",
      54: "Multiplier pair 54 est una de las tablas más versátiles. Como 54=6×9=2×27=3×18, se peut calcular de muchas maneras diferentes. El 54 est 3 fois la addition de los números del 1 al 10 (1+2+...+10=55 aproximadamente). Como combina las tablas del 6 y del 9, refuerza ambas. Tener muchos diviseurs lo hace útil en cálculos de fracciones.",
      55: "Multiplier pair 55 utilise la relación 5×11. Si ambas tablas sont conocidas, Multiplier pair 55 est fácil. La estrategia 55=50+5 también est muy práctica. El 55 est la addition de los números del 1 al 10 (1+2+3+...+10=55), esta relación matemática especial lo hace interesante. El patrón del 5 (termina en 5 o 0) facilite el cálculo.",
      56: "Multiplier pair 56 utilise la relación 7×8. Como combina estas dos tablas difíciles, refuerza ambas. Las alternativas 56=4×14=2×28 ofrecen diferentes stratÃ©gies. El 56 est el número total de heures en 7 días con jornadas laborales de 8 heures (7×8). Pensar en 56 como 60-4 también facilite el cálculo mental.",
      57: "Multiplier pair 57 utilise la relación 3×19. tripler la table de 19 o multiplier la table de 3 por 19 funciona. Pensar en 57 como 60-3 o 55+2 facilite el cálculo. Como 57=3×19, est divisible tanto por 3 como por 19. apprendre la table de 57 dÃ©veloppe la habilidad de trabajar con números grandes de nivel medio.",
      58: "Multiplier pair 58 est el doble del 29 (58=2×29). Si conoces la table de 29, vous pouvez doubler cada rÃ©sultat para encontrar la table de 58. Pensar en 58 como 60-2 o 50+8 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. Esta tabla refuerza stratÃ©gies de duplicación y aproximación a números redondos.",
      59: "Multiplier pair 59 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier y proximidad al 60. El método más efectivo est pensar en 59 como 60-1: multiplie un número por 60 y réstale el número mismo. El 59 est un número premier y solo est divisible por 1 y 59. la table de 59 proporciona contexto para cálculos de minutes y tiempo (59 minutes) en raison de su proximidad al 60.",
      60: "Multiplier pair 60 utilise la relación 6×10 y est muy útil. Para multiplier un número por 60, vous pouvez multiplicarlo por 6 y ajouter un cero Ã  la fin. El 60 est el número de minutes en una heure, el número de segundos en un minuto, y un sexto de los 360° de un círculo. il y a muchas relaciones de factores como 60=2×30=3×20=4×15=5×12. Esta tabla est crítica para cálculos de tiempo.",
      61: "Multiplier pair 61 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier y proximidad al 60. El método más práctico est pensar en 61 como 60+1: multiplie un número por 60 y agrégale el número mismo. El 61 est un número premier y solo est divisible por 1 y 61. apprendre la table de 61 dÃ©veloppe la habilidad de cálculo mental con números por encima de 60.",
      62: "Multiplier pair 62 est el doble del 31 (62=2×31). Si conoces la table de 31, vous pouvez doubler cada rÃ©sultat para encontrar la table de 62. Pensar en 62 como 60+2 o 65-3 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. Esta tabla est útil para duplicación y cálculos cercanos a 60.",
      63: "Multiplier pair 63 utilise la relación 7×9. Como combina estas dos tablas importantes, refuerza ambas. La alternativa 63=3×21 ofrece una estrategia diferente. Pensar en 63 como 60+3 o 65-2 facilite el cálculo mental. El 63 est muy versátil porque est divisible tanto por 7 como por 9.",
      64: "Multiplier pair 64 est una puissance de 2 (64=2⁶=8×8). Como la arquitectura de 64 bits est común en informática, est important en la era tecnológica. La relación 64=8² (ocho al carrÃ©) est crítica para entender números carrÃ©s. Pensar en 64 como 60+4 o 65-1 facilite el cálculo. il y a 64 casillas en un tablero de ajedrez (8×8).",
      65: "Multiplier pair 65 utilise la relación 5×13. Si ambas tablas sont conocidas, Multiplier pair 65 est fácil. El 65 se utilise como edad de jubilación en muchos países. Pensar en 65 como 60+5 o 70-5 facilite el cálculo mental. El patrón del 5 (termina en 5 o 0) facilite el cálculo.",
      66: "Multiplier pair 66 utilise la relación 6×11 o la relación 2×33. Como 66=6×11, a modÃ¨les similares a repdigit. Pensar en 66 como 60+6 o 70-4 facilite el cálculo. El 66 est divisible tanto por 6 como por 11. Como est un número pair, todos sus múltiplos también sont pairs.",
      67: "Multiplier pair 67 dÃ©veloppe stratÃ©gies de matemática mental en raison de sus propriÃ©tÃ©s de número premier. Los métodos más prácticos sont pensar en 67 como 70-3 o 65+2. El 67 est un número premier y solo est divisible por 1 y 67. apprendre la table de 67 augmente la capacidad de trabajar con números premiers grandes.",
      68: "Multiplier pair 68 utilise la relación 4×17 o la relación 2×34. Cuadruplicar la table de 17 o doubler la table de 34 funciona. Pensar en 68 como 70-2 o 60+8 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 68 est divisible tanto por 4 como por 17.",
      69: "Multiplier pair 69 utilise la relación 3×23. tripler la table de 23 o multiplier la table de 3 por 23 funciona. La estrategia más fácil est pensar en 69 como 70-1: multiplie un número por 70 y réstale el número mismo. Como 69=3×23, est divisible tanto por 3 como por 23. Esta tabla est útil para cálculos cercanos a 70.",
      70: "Multiplier pair 70 utilise la relación 7×10 y est muy útil. Para multiplier un número por 70, vous pouvez multiplicarlo por 7 y ajouter un cero Ã  la fin. El 70 se asocia con la esperanza de vida promedio de una personne (entre 70-80 en la mayoría de los países). il y a relaciones de factores alternativos como 70=2×35=5×14. Esta tabla refuerza la table de 7.",
      71: "Multiplier pair 71 dÃ©veloppe stratÃ©gies de matemática mental en raison de sus propriÃ©tÃ©s de número premier. El método más práctico est pensar en 71 como 70+1: multiplie un número por 70 y agrégale el número mismo. El 71 est un número premier y solo est divisible por 1 y 71. apprendre la table de 71 dÃ©veloppe la capacidad de calcular rápidamente con números premiers grandes.",
      72: "Multiplier pair 72 est una de las tablas más versátiles. Como 72=8×9=6×12=4×18=3×24=2×36, se peut calcular de muchas maneras diferentes. El 72 est 3 fois el número de heures en un día (72 heures = 3 días). Tener muchos diviseurs lo hace extremadamente útil en cálculos de fracciones. El 72 est 6 fois 12 (6 docenas).",
      73: "Multiplier pair 73 dÃ©veloppe propriÃ©tÃ©s de número premier y stratÃ©gies de cálculo mental. Los métodos más prácticos sont pensar en 73 como 70+3 o 75-2. El 73 est un número premier y solo est divisible por 1 y 73. El 73 también est el premier número 21 y a propriÃ©tÃ©s matemáticas interesantes.",
      74: "Multiplier pair 74 utilise la relación 2×37. Si conoces la table de 37, vous pouvez doubler cada rÃ©sultat para encontrar la table de 74. Pensar en 74 como 70+4 o 75-1 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 74 est divisible tanto por 2 como por 37.",
      75: "Multiplier pair 75 utilise las relaciones 3×25=5×15. El 75 est tres cuartos de 100 (75%=3/4). También se peut expresar como 75=3×5×5. Pensar en 75 como 70+5 o 80-5 facilite el cálculo mental. El patrón del 5 (termina en 5 o 0) facilite el cálculo. Se utilise frecuentemente en cálculos de porcentaje (75%=¾).",
      76: "Multiplier pair 76 utilise la relación 4×19 o la relación 2×38. Cuadruplicar la table de 19 o doubler la table de 38 funciona. Pensar en 76 como 75+1 o 80-4 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 76 est divisible tanto por 4 como por 19.",
      77: "Multiplier pair 77 utilise la relación 7×11. Si ambas tablas sont conocidas, Multiplier pair 77 est fácil. El 77 montre un patrón similar a repdigit (repetición de 7s). Pensar en 77 como 80-3 o 75+2 facilite el cálculo. Como 77=7×11, est divisible tanto por 7 como por 11.",
      78: "Multiplier pair 78 utilise las relaciones 2×39=3×26=6×13. Se peut calcular de múltiples maneras. Pensar en 78 como 80-2 o 75+3 facilite el cálculo mental. Como est un número pair, todos sus múltiplos también sont pairs. El 78 est divisible por 2, 3, 6, 13, 26, 39.",
      79: "Multiplier pair 79 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier. La estrategia más fácil est pensar en 79 como 80-1: multiplie un número por 80 y réstale el número mismo. El 79 est un número premier y solo est divisible por 1 y 79. apprendre la table de 79 establece una base perfecta para cálculos cercanos a 80.",
      80: "Multiplier pair 80 utilise la relación 8×10 y est muy útil. Para multiplier un número por 80, vous pouvez multiplicarlo por 8 y ajouter un cero Ã  la fin. il y a relaciones de factores alternativos como 80=2×40=4×20=5×16. El 80 se asocia con el límite superior de la esperanza de vida promedio (entre 70-80 en la mayoría de los países). Esta tabla refuerza la table de 8.",
      81: "Multiplier pair 81 est el carrÃ© de 9 (81=9×9=9²). Esta relación especial requiert conocer perfectamente la table de 9. También est interesante que 81=3⁴ (la cuarta puissance de 3). Pensar en 81 como 80+1 facilite el cálculo mental. Como 81 est un número carrÃ©, est important en geometría y cálculos de área.",
      82: "Multiplier pair 82 utilise la relación 2×41. Si conoces la table de 41, vous pouvez doubler cada rÃ©sultat para encontrar la table de 82. Pensar en 82 como 80+2 o 85-3 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 82 est divisible tanto por 2 como por 41.",
      83: "Multiplier pair 83 dÃ©veloppe stratÃ©gies de matemática mental en raison de sus propriÃ©tÃ©s de número premier. Los métodos más prácticos sont pensar en 83 como 80+3 o 85-2. El 83 est un número premier y solo est divisible por 1 y 83. apprendre la table de 83 augmente la capacidad de trabajar con números premiers grandes.",
      84: "Multiplier pair 84 est una de las tablas más versátiles. Como 84=7×12=6×14=4×21=3×28=2×42, se peut calcular de muchas maneras diferentes. El 84 est 12 fois el número de heures en una semaine, o 7 fois un medio día de 12 heures. Tener muchos diviseurs lo hace útil en cálculos de fracciones.",
      85: "Multiplier pair 85 utilise la relación 5×17. Si ambas tablas sont conocidas, Multiplier pair 85 est fácil. La estrategia 85=80+5 o 90-5 también est muy práctica. El patrón del 5 (termina en 5 o 0) facilite el cálculo. El 85 est divisible tanto por 5 como por 17.",
      86: "Multiplier pair 86 utilise la relación 2×43. Si conoces la table de 43, vous pouvez doubler cada rÃ©sultat para encontrar la table de 86. Pensar en 86 como 90-4 o 85+1 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 86 est divisible tanto por 2 como por 43.",
      87: "Multiplier pair 87 utilise la relación 3×29. tripler la table de 29 o multiplier la table de 3 por 29 funciona. Pensar en 87 como 90-3 o 85+2 facilite el cálculo. Como 87=3×29, est divisible tanto por 3 como por 29.",
      88: "Multiplier pair 88 utilise la relación 8×11 o la relación 4×22. El 88 est un número repdigit (repetición de 8s). También se peut expresar como 88=2×44. Pensar en 88 como 90-2 o 80+8 facilite el cálculo mental. Como est un número pair, todos sus múltiplos también sont pairs.",
      89: "Multiplier pair 89 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier. La estrategia más fácil est pensar en 89 como 90-1: multiplie un número por 90 y réstale el número mismo. El 89 est un número premier y solo est divisible por 1 y 89. apprendre la table de 89 establece una base perfecta para cálculos cercanos a 90.",
      90: "Multiplier pair 90 utilise la relación 9×10 y est muy útil. Para multiplier un número por 90, vous pouvez multiplicarlo por 9 y ajouter un cero Ã  la fin. il y a muchas relaciones de factores como 90=2×45=3×30=5×18=6×15. El 90 grados est un ángulo recto, muy importante en geometría. Esta tabla refuerza la table de 9.",
      91: "Multiplier pair 91 utilise la relación 7×13. Si ambas tablas sont conocidas, Multiplier pair 91 est fácil. Que 91=7×13 est important para entender el producto de números premiers. Pensar en 91 como 90+1 facilite el cálculo mental. est divisible tanto por 7 como por 13.",
      92: "Multiplier pair 92 utilise la relación 4×23 o la relación 2×46. Cuadruplicar la table de 23 funciona. Pensar en 92 como 90+2 o 100-8 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 92 est divisible tanto por 4 como por 23.",
      93: "Multiplier pair 93 utilise la relación 3×31. tripler la table de 31 o multiplier la table de 3 por 31 funciona. Pensar en 93 como 90+3 o 100-7 facilite el cálculo. Como 93=3×31, est divisible tanto por 3 como por 31.",
      94: "Multiplier pair 94 utilise la relación 2×47. Si conoces la table de 47, vous pouvez doubler cada rÃ©sultat para encontrar la table de 94. Pensar en 94 como 100-6 o 90+4 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 94 est divisible tanto por 2 como por 47.",
      95: "Multiplier pair 95 utilise la relación 5×19. Si ambas tablas sont conocidas, Multiplier pair 95 est fácil. La estrategia 95=100-5 est muy práctica. El patrón del 5 (termina en 5 o 0) facilite el cálculo. El 95 est divisible tanto por 5 como por 19. est útil en cálculos de porcentaje (95%).",
      96: "Multiplier pair 96 est una de las tablas más versátiles. Como 96=8×12=6×16=4×24=3×32=2×48, se peut calcular de muchas maneras diferentes. Que 96=2⁵×3 est important en términos de potencias de 2. Tener muchos diviseurs lo hace útil en cálculos de fracciones.",
      97: "Multiplier pair 97 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier. La estrategia más fácil est pensar en 97 como 100-3: multiplie un número por 100 y réstale 3 fois el número. El 97 est un número premier y solo est divisible por 1 y 97. Ser el número premier más cercano a 100 facilite mucho el cálculo mental.",
      98: "Multiplier pair 98 utilise la relación 2×49. Si conoces la table de 49, vous pouvez doubler cada rÃ©sultat para encontrar la table de 98. La relación 98=2×7² est interesante. Pensar en 98 como 100-2 est la estrategia más fácil. Como est un número pair, todos sus múltiplos también sont pairs.",
      99: "Multiplier pair 99 utilise la relación 9×11. El 99 est un número repdigit (repetición de 9s). Pensar en 99 como 100-1 est la estrategia más fácil: multiplie un número por 100 y réstale el número mismo. Como 99=9×11, est divisible tanto por 9 como por 11. est una de las tablas más fáciles para el cálculo mental.",
      100: "Multiplier pair 100 est la tabla más fácil! Para multiplier un número por 100, solo ajoute dos ceros Ã  la fin. Que 100=10×10=10² est fundamental para entender el systÃ¨me dÃ©cimal. El 100 est la base de cálculos de porcentaje (100%=completo) y el systÃ¨me dÃ©cimal. a importancia crítica para piÃ¨ces, unidades de medida y matemática cotidiana.",
    }
    return meanings[number] || `Multiplier pair ${number} signifie sumar el número ${number} repetidamente. Cada vez que multipliez, estás contando groupes de ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "la table de 1 est la base de todas las opÃ©rations de multiplicación. Enseña a los estudiantes que los números ont una identitÃ©: al multiplicarse por 1, permanecen como ellos mismos. Este concepto est crucial para comprender propriÃ©tÃ©s algebraicas posteriores. Aunque parezca simple, apprendre esta tabla genera confianza y establece el patrón de que la multiplicación est ordenada y predecible.",
      2: "la table de 2 est generalmente la primera tabla de multiplicación real que aprenden los estudiantes, y por una buena razón. doubler est un concepto natural que los niños encuentran diariamente. apprendre esta tabla hace el cálculo mental mucho más rápido y prepara a los estudiantes para números pairs, fracciones (mitades) y división básica. Muchos estudiantes la encuentran la tabla más fácil, lo que genera confianza para tablas más difíciles.",
      3: "la table de 3 cierra la brecha entre las tablas fáciles y desafiantes. requiert que los estudiantes vayan más allá de la simple duplicación y comiencen a reconocer nuevos modÃ¨les. Esta tabla se ve constantemente en contextos del mundo real como contar de tres en tres, entender formas triangulares y trabajar con tiempo (tres periodos por día). Los estudiantes que aprenden la table de 3 demuestran que peuvent hacer conteo abstracto.",
      4: "apprendre la table de 4 refuerza la comprensión de números pairs y pensamiento geométrico de los estudiantes. Como 4 est el doble de 2, los estudiantes peuvent utiliser la table de 2 como escalera, lo que enseña eficiencia matemática. Esta tabla est necesaria para entender carrÃ©s, cálculos de área y divisiones por cuartos. También se utilise frecuentemente en situaciones cotidianas como contar patas de sillas o ruedas de autos.",
      5: "la table de 5 est una de las más prácticas y ricas en modÃ¨les. Los estudiantes la aman porque cada respuesta termina en 0 o 5, haciéndola extremadamente predecible. Esta tabla se conecta directamente con el argent (contar de cinco en cinco), decir la heure (intervalos de 5 minutes) y sistemas de medición. apprendre la table de 5 da confianza a los estudiantes y montre que las matemáticas ont modÃ¨les hermosos y consistentes.",
      6: "apprendre la table de 6 permet a los estudiantes transicionar a multiplicaciones más complejas. Que 6 sea múltiplo tanto de 2 como de 3 montre a los estudiantes la propriÃ©tÃ© distributiva de la multiplicación. Esta tabla se ve constantemente en la vida diaria: contar cartones de Å“ufs, Jeux de dÃ©s, paquetes de seis. apprendre la table de 6 da a los estudiantes confianza para trabajar con números más grandes.",
      7: "la table de 7 realmente pone a prueba las compÃ©tences de memorización y reconocimiento de modÃ¨les de los estudiantes. Como 7 est un número premier, no se peut derivar fácilmente de otras tablas, haciéndola una experiencia de apprentissage desafiante pero gratificante. apprendre la table de 7 da a los estudiantes la oportunidad de superar desafíos y desarrollar nuevas stratÃ©gies. Se utilise en muchos lugares, desde contar los días de la semaine hasta cálculos de calendario.",
      8: "apprendre la table de 8 aide a los estudiantes a reforzar stratÃ©gies de duplicación. Como 8 = 2 × 2 × 2, los estudiantes peuvent apprendre la table de 8 usando las tablas del 2 y 4. Esta tabla est important en cálculos de área (figuras de 8 cÃ´tÃ©s), teoría musical (octavas) y ciencias de la computación (8 bits = 1 byte). apprendre la table de 8 dÃ©veloppe compÃ©tences de pensamiento matemático.",
      9: "la table de 9 a uno de los modÃ¨les matemáticos más fascinantes. La regla de addition de dígitos y el astuce de los dedos muestran a los estudiantes el cÃ´tÃ© mágico de las matemáticas. apprendre la table de 9 no est solo memorización, enseña reconocimiento de modÃ¨les y comprensión de relaciones matemáticas. Esta tabla est perfecta para desarrollar compÃ©tences de cálculo mental y construir confianza matemática.",
      10: "la table de 10 est fundamental para enseñar el concepto de valeur positionnelle. Cuando los estudiantes aprenden a Multiplier pair 10, comienzan a entender cómo funciona nuestro systÃ¨me dÃ©cimal. Esta tabla est vital para cálculos de argent, conversiones entre unidades de medida y trabajo con números grandes. apprendre la table de 10 crÃ©e una base sólida para entender todas las demás tablas de multiplicación y amÃ©liore enormemente las compÃ©tences de matemática mental.",
      11: "la table de 11 est perfecta para desarrollar compÃ©tences de reconocimiento de modÃ¨les. El patrón de repetición que surge al multiplier con números de un dígito (11×4=44) montre a los estudiantes la belleza de las matemáticas. apprendre la table de 11 dÃ©veloppe stratÃ©gies de cálculo mental y augmente la capacidad de reconocer modÃ¨les numéricos. Esta tabla genera confianza para trabajar con números grandes.",
      12: "la table de 12 est una de las más utilizadas en la vida diaria. El 12 se utilise en muchas áreas como contar docenas, leer el reloj y planificación anual. Que el 12 tenga muchos diviseurs (1,2,3,4,6,12) lo hace ideal para entender fracciones y proporciones. apprendre esta tabla amÃ©liore significativamente las compÃ©tences matemáticas prácticas.",
      13: "la table de 13 dÃ©veloppe la resiliencia matemática de los estudiantes. Por ser un número premier, no il y a atajos fáciles, lo que requiert verdadera comprensión. apprendre la table de 13 renforce las compÃ©tences aritméticas mentales y enseña a pensar en los números de diferentes maneras (estrategia de descomposición 10+3).",
      14: "la table de 14 aide a reforzar la table de 7. La relación 14=2×7 montre a los estudiantes la propriÃ©tÃ© distributiva de la multiplicación. est necesaria para calcular periodos semanales y quincenales. Esta tabla profundiza la comprensión de las propriÃ©tÃ©s de números pairs y stratÃ©gies de duplicación.",
      15: "la table de 15 combina tanto la table de 3 como la del 5, lo cual est excelente para entender conexiones matemáticas. est vital para cálculos de cuarto de heure (15 minutes). apprendre la table de 15 enseña a entender reglas de divisibilidad y ver relaciones entre números. Se utilise frecuentemente en cálculos de porcentaje (como propina del 15%).",
      16: "la table de 16 est perfecta para entender sistemas binarios y números exponenciales. La relación 2⁴=16 montre el poder de los exponentes. a importancia crítica en ciencias de la computación (16 bits, sistema hexadecimal). Esta tabla dÃ©veloppe la comprensión de stratÃ©gies de múltiple duplicación y secuencias geométricas.",
      17: "la table de 17 est una herramienta excelente para desarrollar stratÃ©gies de matemática mental. Ser un número premier obliga a los estudiantes a encontrar métodos creativos de cálculo (stratÃ©gies 20-3 o 10+7). Esta tabla dÃ©veloppe compÃ©tences de resolución de problÃ¨mes y flexibilidad con los números.",
      18: "la table de 18 montre la riqueza de las relaciones matemáticas. Que 18=2×9=3×6 enseña a entender diferentes combinaciones de factores. a importancia cultural como edad de mayoría de edad. Esta tabla enseña a abordar un problema con múltiples stratÃ©gies y elegir el método más eficiente.",
      19: "la table de 19 maximiza las compÃ©tences de cálculo mental. La estrategia '20-1' enseña a los estudiantes a utiliser números complementarios. Ser un número premier enfatiza la comprensión real más que el reconocimiento de modÃ¨les. Esta tabla dÃ©veloppe la habilidad de diviser cálculos complejos en pasos simples.",
      20: "la table de 20 est crítica para reforzar el sistema de valeur positionnelle y trabajar cómodamente con números grandes. La relación 20=2×10 profundiza la comprensión del systÃ¨me dÃ©cimal. Se utilise constantemente en cálculos de argent (billets de 20) y mediciones. Esta tabla forme la base para cálculos de porcentaje (descuento del 20%).",
      21: "la table de 21 est perfecta para entender la relación de factorización 3×7. Esta tabla montre a los estudiantes que un número peut tener más de un factor. El 21 a importancia social como edad para transacciones legales y mayoría de edad. apprendre esta tabla profundiza la comprensión de las relaciones entre factores y múltiplos.",
      22: "la table de 22 aide a reforzar la table de 11. La relación 22=2×11 renforce las stratÃ©gies de duplicación. Se utilise en deportes (equipo de fútbol) y conteo diario. Esta tabla dÃ©veloppe la comprensión de propriÃ©tÃ©s de números pairs y relaciones matemáticas.",
      23: "la table de 23 dÃ©veloppe compÃ©tences para trabajar con números premiers. Como no se peut derivar de otras tablas, los estudiantes doivent desarrollar nuevas stratÃ©gies. El 23 est un número importante en biología (pairs de cromosomas). apprendre esta tabla augmente la flexibilidad mental y capacidades de resolución de problÃ¨mes.",
      24: "la table de 24 est una de las más útiles en la vida diaria. Se encuentra constantemente en raison de la relación día-heure (24 heures). Que el 24 tenga muchos diviseurs (1,2,3,4,6,8,12,24) lo hace ideal para fracciones y proporciones. Esta tabla dÃ©veloppe compÃ©tences de gestión del tiempo y planificación.",
      25: "la table de 25 est fundamental para entender números carrÃ©s (5²). a un papel central en sistemas monetarios (25 centavos). El patrón regular del 25 (25,50,75,00) facilite mucho los cálculos. Esta tabla se utilise frecuentemente en cálculos de porcentaje (25%=1/4) y fracciones.",
      26: "la table de 26 aide a reforzar la table de 13. est important en sistemas alfabéticos (26 letras). La relación 26=2×13 montre la conexión entre números premiers y pairs. apprendre esta tabla dÃ©veloppe la capacidad de ver relaciones matemáticas.",
      27: "la table de 27 est crítica para entender números exponenciales (3³). est important en geometría (cubo 3×3×3 en espacio 3D) y cálculos de volumen. La relación 27=3×9 renforce la conexión entre las tablas del 3 y 9. Esta tabla forme una base en pensamiento matemático y números exponenciales.",
      28: "la table de 28 est important para conocimiento de calendario (mois de febrero). Que el 28 sea un número perfecto (addition de diviseurs igual a sí mismo) montre propriÃ©tÃ©s matemáticas especiales. La relación 28=4×7 profundiza la comprensión de factorización. Esta tabla se utilise en cálculos de tiempo y planificación semanal.",
      29: "la table de 29 est perfecta para perfeccionar stratÃ©gies de números premiers. La relación 30-1 enseña a utiliser números complementarios. est necesaria para conocimiento de calendario (febrero en año bisiesto). apprendre esta tabla maximiza las compÃ©tences de cálculo mental.",
      30: "la table de 30 est el puente entre el systÃ¨me dÃ©cimal y la multiplicación. La relación 30=3×10 renforce la comprensión del valeur positionnelle. Se utilise constantemente en tiempo (media heure), calendario (días del mois) y medidas de ángulo (30°). Esta tabla forme la base de cálculos de porcentaje (descuento del 30%) y matemática práctica.",
      31: "Multiplier pair 31 est crítico para el conocimiento del calendario. Como la mayoría de los mois ont 31 días, se utilise constantemente en cálculos de fecha y tiempo. Como 31 est un número premier, est perfecto para desarrollar stratÃ©gies de cálculo mental. La estrategia 30+1 enseña a utiliser números complementarios y proporciona competencia en cálculos de números grandes.",
      32: "Multiplier pair 32 est important para entender números exponenciales (2⁵) y sistemas binarios. Como la arquitectura de 32 bits est común en ciencias de la computación, a importancia práctica en la era de la tecnología. est perfecto para perfeccionar cadenas de duplicación. Se utilise en conversiones de temperatura (Fahrenheit).",
      33: "Multiplier pair 33 renforce las relaciones matemáticas combinando las tablas del 3 y 11. La propriÃ©tÃ© repdigit (33, 66, 99...) facilite el reconocimiento de modÃ¨les. La relación 33=3×11 profundiza la comprensión de las conexiones entre factores y múltiplos. Esta tabla enseña stratÃ©gies de multiplicación múltiple.",
      34: "Multiplier pair 34 aide a reforzar la table de 17. La relación 34=2×17 montre la conexión entre números premiers y pairs. Esta tabla dÃ©veloppe flexibilidad mental y métodos de cálculo alternativos (35-1, 30+4). Refuerza propriÃ©tÃ©s de números pairs y compÃ©tences de duplicación.",
      35: "Multiplier pair 35 dÃ©veloppe compÃ©tences de factorización como combinación de las tablas del 5 y 7. La relación 5×7 refuerza ambas tablas. Se utilise en cálculos de tiempo (35 minutes) y matemática cotidiana. Esta tabla crÃ©e modÃ¨les reconocibles con el patrón del 5 (último dígito 5 o 0).",
      36: "Multiplier pair 36 est una de las tablas más útiles. Que 36=6² est crítico para entender números carrÃ©s. Tener muchos diviseurs (1,2,3,4,6,9,12,18,36) lo hace ideal para fracciones y proporciones. Se utilise frecuentemente en el sistema de docenas (3 docenas) y medidas de ángulos (un décimo de 360°).",
      37: "Multiplier pair 37 perfecciona propriÃ©tÃ©s de números premiers y stratÃ©gies de matemática mental. Relaciones especiales como 37×3=111 proporcionan comprensión profunda de modÃ¨les numéricos. stratÃ©gies como 40-3 o 35+2 desarrollan compÃ©tences creativas de resolución de problÃ¨mes. Esta tabla fomenta la curiosidad matemática y el espíritu de descubrimiento.",
      38: "Multiplier pair 38 aide a reforzar la table de 19. La relación 38=2×19 combina stratÃ©gies de duplicación y números premiers. El enfoque 40-2 enseña a utiliser números complementarios. a importancia práctica en contexto de salud (temperatura corporal).",
      39: "Multiplier pair 39 renforce las conexiones matemáticas combinando las tablas del 3 y 13. La estrategia 40-1 enseña a calcular rápidamente usando números redondos. Esta tabla dÃ©veloppe compÃ©tences de factorización múltiple (3×13) y proporciona flexibilidad mental.",
      40: "la table de 40 est perfecta para comprender profundamente el systÃ¨me dÃ©cimal. La relación 40=4×10 montre la conexión entre valeur positionnelle y multiplicación. Se utilise mucho en la vida diaria en raison de heures de trabajo (semaine de 40 heures) y normas sociales (40 años). Esta tabla forme una base para números grandes y cálculos de porcentaje.",
      41: "la table de 41 lleva las stratÃ©gies de números premiers a un nivel avanzado. El enfoque 40+1 proporciona dominio en el uso de números complementarios. Por ser un número premier, requiert flexibilidad mental y resolución creativa de problÃ¨mes. Esta tabla dÃ©veloppe la habilidad de calcular rápidamente con números grandes.",
      42: "la table de 42 perfecciona las compÃ©tences de factorización. Las relaciones 42=6×7=2×21=3×14 enseñan a ver conexiones matemáticas. Como combina las tablas del 6 y 7, refuerza ambas. est memorable en raison de referencias de la cultura pop (Guía del Autoestopista Galáctico).",
      43: "la table de 43 dÃ©veloppe propriÃ©tÃ©s de números premiers y stratÃ©gies de cálculo mental. Enfoques alternativos como 40+3 o 45-2 proporcionan flexibilidad en el pensamiento matemático. Esta tabla augmente la habilidad de trabajar creativamente con números y enriquece las stratÃ©gies de resolución de problÃ¨mes.",
      44: "la table de 44 est perfecta para reforzar la table de 11. La relación 44=4×11 dÃ©veloppe compÃ©tences de multiplicación múltiple. El patrón similar a repdigit (44, 88) facilite el reconocimiento visual. Profundiza la comprensión de propriÃ©tÃ©s de números pairs y ser múltiplo de cuatro.",
      45: "la table de 45 renforce las relaciones matemáticas combinando las tablas del 5 y 9. Se utilise frecuentemente en geometría (ángulo de 45°) y cálculos de tiempo (tres cuartos de heure). La relación 5×9 refuerza tanto la table de 5 como la del 9. Esta tabla est muy útil para matemática práctica y cálculos cotidianos.",
      46: "la table de 46 aide a reforzar la table de 23. La relación 46=2×23 combina stratÃ©gies de duplicación y números premiers. est un número importante en biología (46 cromosomas). Esta tabla dÃ©veloppe propriÃ©tÃ©s de números pairs y cálculos con números grandes.",
      47: "la table de 47 maximiza las stratÃ©gies de números premiers. El enfoque 50-3 perfecciona la estrategia de restar de números redondos. en raison de propriÃ©tÃ©s primas, requiert flexibilidad mental y métodos de solución alternativos. Esta tabla proporciona compÃ©tences avanzadas de matemática mental.",
      48: "la table de 48 est una de las más versátiles. Tener muchos diviseurs (1,2,3,4,6,8,12,16,24,48) lo hace ideal para fracciones y proporciones. Se utilise en el sistema de docenas (4 docenas) y cálculos de tiempo (48 heures=2 días). Las relaciones de factores múltiples profundizan la comprensión de conexiones matemáticas.",
      49: "la table de 49 est crítica para entender números carrÃ©s (7²). requiert conocer perfectamente la table de 7 y la refuerza. La estrategia 50-1 enseña cálculo rápido usando números redondos. est important en geometría y cálculos de área en raison de propriÃ©tÃ©s cuadradas.",
      50: "la table de 50 forme la base de cálculos de porcentaje (50%=1/2). La relación 5×10 combina el systÃ¨me dÃ©cimal y la multiplicación. Está directamente conectada con el concepto de mitad (½). Se utilise constantemente en sistemas monetarios (50 centavos, 50 pesos), mediciones de tiempo y matemática cotidiana. Esta tabla amÃ©liore significativamente las compÃ©tences de cálculo práctico.",
      51: "la table de 51 dÃ©veloppe la habilidad de trabajar con números cercanos a 50. La estrategia 50+1 refuerza el uso de números complementarios. La relación 3×17 renforce las compÃ©tences de factorización. a importancia práctica en el contexto de Jeux de cartas (52 cartas). Esta tabla enseña a calcular con pequeñas desviaciones de números redondos.",
      52: "la table de 52 est crítica para cálculos de tiempo y calendario. en raison del número de semaines en un año (52 semaines), se utilise constantemente en planificación y cálculos anuales. La relación 4×13 refuerza tanto la table de 4 como la del 13. La baraja de cartas (52 cartas) proporciona contexto al pensamiento matemático. Esta tabla est muy importante para matemática de vida práctica.",
      53: "la table de 53 lleva las stratÃ©gies de números premiers a un nivel avanzado. El enfoque 50+3 dÃ©veloppe flexibilidad mental y métodos alternativos de cálculo. en raison de propriÃ©tÃ©s primas, requiert resolución creativa de problÃ¨mes. Esta tabla augmente la habilidad de trabajar con números premiers grandes y expande la profundidad del pensamiento matemático.",
      54: "la table de 54 perfecciona las compÃ©tences de factorización múltiple. Las relaciones 54=6×9=2×27=3×18 enseñan a ver conexiones matemáticas. Como combina las tablas del 6 y 9, renforce ambas. Tener muchos diviseurs (1,2,3,6,9,18,27,54) lo hace ideal para fracciones y proporciones. Esta tabla fomenta el pensamiento matemático flexible.",
      55: "la table de 55 refuerza las relaciones matemáticas combinando las tablas del 5 y 11. La propriÃ©tÃ© de número triangular (1+2+...+10=55) profundiza la comprensión de modÃ¨les matemáticos. La relación 5×11 renforce ambas tablas. Esta tabla forme una base para modÃ¨les numéricos y fórmulas de addition.",
      56: "la table de 56 refuerza tanto la table de 7 como la del 8. 7×8=56 est uno de los pairs de multiplicación más difíciles y apprendre esta tabla lo renforce. Las alternativas 4×14=2×28 enseñan a utiliser múltiples stratÃ©gies. a importancia práctica en cálculos laborales (semaine de 7 días × día de 8 heures). Esta tabla proporciona dominio de multiplicaciones difíciles.",
      57: "la table de 57 renforce las conexiones matemáticas combinando las tablas del 3 y 19. La estrategia 60-3 perfecciona la habilidad de restar de números redondos. La relación 3×19 combina stratÃ©gies de números premiers y no premiers. Esta tabla dÃ©veloppe el cálculo mental con números grandes de nivel medio.",
      58: "la table de 58 aide a reforzar la table de 29. La relación 58=2×29 combina stratÃ©gies de duplicación y números premiers. El enfoque 60-2 enseña la estrategia de aproximarse a números redondos. Esta tabla forme una base para propriÃ©tÃ©s de números pairs y cálculos cercanos a 60.",
      59: "la table de 59 maximiza las stratÃ©gies de números premiers. El enfoque 60-1 perfecciona el cálculo rápido usando números redondos. en raison de propriÃ©tÃ©s primas, requiert flexibilidad mental y métodos creativos de solución. a importancia práctica en contexto de tiempo (59 minutes, 59 segundos). Esta tabla proporciona compÃ©tences avanzadas de matemática mental.",
      60: "la table de 60 forme la base de cálculos de tiempo (60 minutes=1 heure, 60 segundos=1 minuto). La relación 6×10 combina el systÃ¨me dÃ©cimal y la multiplicación. Tener muchos diviseurs (1,2,3,4,5,6,10,12,15,20,30,60) lo hace ideal para fracciones y proporciones. a importancia geométrica en medidas de ángulo (360°÷6=60°). Esta tabla est una de las más utilizadas en la vida diaria.",
      61: "la table de 61 lleva las stratÃ©gies de números premiers a un nivel avanzado. El enfoque 60+1 proporciona asociación con unidades de tiempo (minuto 61, segundo 61). en raison de sus propriÃ©tÃ©s primas, requiert flexibilidad mental y resolución creativa de problÃ¨mes. Esta tabla dÃ©veloppe la habilidad de calcular rápidamente con números mayores a 60.",
      62: "la table de 62 aide a reforzar la table de 31. La relación 62=2×31 combina stratÃ©gies de duplicación y números premiers. El enfoque 60+2 enseña la estrategia de calcular cerca de números redondos. Esta tabla forme una base para propriÃ©tÃ©s de números pairs y cálculos después de 60.",
      63: "la table de 63 refuerza tanto la table de 7 como la del 9 al combinarlas. 7×9=63 est un pair de multiplicación importante. La alternativa 3×21 enseña a utiliser múltiples stratÃ©gies. Ser divisible tanto por 7 como por 9 lo hace útil para fracciones y proporciones. Esta tabla profundiza la comprensión de relaciones de factores múltiples.",
      64: "la table de 64 est crítica para entender potencias de 2 (números exponenciales). Las relaciones 64=2⁶=8² refuerzan tanto exponentes como números carrÃ©s. a importancia tecnológica en ciencias de la computación en raison de la arquitectura de 64 bits. El tablero de ajedrez (8×8=64 casillas) proporciona aplicaciones geométricas. Esta tabla est fundamental para números exponenciales y sistema binario.",
      65: "la table de 65 renforce las relaciones matemáticas combinando las tablas del 5 y 13. La relación 5×13 refuerza ambas tablas. a importancia práctica en contexto social (edad de jubilación 65 años). El patrón del 5 (termina en 5 o 0) facilite el cálculo. Esta tabla est útil para matemática de vida práctica.",
      66: "la table de 66 refuerza tanto la table de 6 como la del 11 al combinarlas. La relación 6×11=66 crÃ©e un patrón similar a repdigit. La alternativa 2×33 ofrece diferentes stratÃ©gies. Ser divisible tanto por 6 como por 11 proporciona usos múltiples. Esta tabla dÃ©veloppe compÃ©tences de factores múltiples.",
      67: "la table de 67 maximiza las stratÃ©gies de números premiers. El enfoque 70-3 perfecciona la estrategia de restar de números redondos. en raison de propriÃ©tÃ©s primas, requiert flexibilidad mental y métodos de solución alternativos. Esta tabla proporciona compÃ©tences de matemática mental avanzada y comodidad con números premiers grandes.",
      68: "la table de 68 renforce las conexiones matemáticas combinando las tablas del 4 y 17. Las relaciones 4×17=2×34 enseñan a utiliser múltiples stratÃ©gies. El enfoque 70-2 dÃ©veloppe la habilidad de aproximarse a números redondos. Esta tabla forme una base para propriÃ©tÃ©s de números pairs y cálculos cercanos a 70.",
      69: "la table de 69 refuerza tanto la table de 3 como la del 23 al combinarlas. La estrategia 70-1 enseña a calcular rápidamente usando números redondos. La relación 3×23 combina stratÃ©gies de factores pequeños y grandes. Esta tabla proporciona competencia en cálculos cercanos a 70.",
      70: "la table de 70 est perfecta para reforzar la table de 7. La relación 7×10 combina el systÃ¨me dÃ©cimal y la table de 7. a importancia social en el contexto de esperanza de vida (promedio 70-80 años). Las alternativas 2×35=5×14 enseñan a utiliser múltiples stratÃ©gies. Esta tabla est muy útil para cálculo práctico y gestión del tiempo.",
      71: "la table de 71 maximiza las stratÃ©gies de números premiers. El enfoque 70+1 proporciona dominio en el uso de números complementarios. en raison de sus propriÃ©tÃ©s primas, requiert flexibilidad mental y resolución creativa de problÃ¨mes. Esta tabla dÃ©veloppe la habilidad de calcular rápidamente con números premiers grandes y profundiza el pensamiento matemático.",
      72: "la table de 72 est una de las más versátiles. Tener muchos diviseurs (1,2,3,4,6,8,9,12,18,24,36,72) lo hace ideal para fracciones y proporciones. Las relaciones 8×9=6×12 enseñan stratÃ©gies de factores múltiples. a importancia práctica en cálculos de tiempo (72 heures=3 días). Esta tabla perfecciona la flexibilidad matemática y el uso de múltiples stratÃ©gies.",
      73: "la table de 73 lleva las stratÃ©gies de números premiers a un nivel avanzado. El enfoque 70+3 dÃ©veloppe compÃ©tences de cálculo mental. Ser el premier número 21 despierta curiosidad matemática. en raison de propriÃ©tÃ©s primas, requiert métodos de solución alternativos y pensamiento creativo. Esta tabla proporciona compÃ©tences de matemática mental avanzada.",
      74: "la table de 74 aide a reforzar la table de 37. La relación 74=2×37 combina stratÃ©gies de duplicación y números premiers. El enfoque 75-1 enseña la estrategia de aproximarse a números redondos. Esta tabla forme una base para propriÃ©tÃ©s de números pairs y cálculos cercanos a 75.",
      75: "la table de 75 forme la base de cálculos de porcentaje (75%=3/4). Las relaciones 3×25=5×15 enseñan a utiliser múltiples stratÃ©gies. Está directamente conectada con el concepto de tres cuartos (¾). El patrón del 5 (termina en 5 o 0) facilite el cálculo. Esta tabla est extremadamente importante para matemática práctica y cálculos de porcentaje.",
      76: "la table de 76 renforce las conexiones matemáticas combinando las tablas del 4 y 19. Las relaciones 4×19=2×38 enseñan stratÃ©gies de multiplicación múltiple. Los enfoques 75+1 o 80-4 proporcionan flexibilidad. Esta tabla prepara para cálculos cercanos a 80 con propriÃ©tÃ©s de números pairs.",
      77: "la table de 77 refuerza tanto la table de 7 como la del 11 al combinarlas. La relación 7×11=77 crÃ©e un patrón similar a repdigit. Como ambas tablas sont de dificultad media, la table de 77 est perfecta para reforzarlas. Ser divisible tanto por 7 como por 11 lo hace útil para fracciones.",
      78: "la table de 78 dÃ©veloppe compÃ©tences de factorización múltiple. Las relaciones 78=2×39=3×26=6×13 proporcionan flexibilidad matemática. El enfoque 80-2 enseña la estrategia de restar de números redondos. Tener muchos diviseurs ofrece varios métodos de cálculo. Esta tabla perfecciona el uso de múltiples stratÃ©gies.",
      79: "la table de 79 maximiza las stratÃ©gies de números premiers. El enfoque 80-1 perfecciona el cálculo rápido usando números redondos. en raison de propriÃ©tÃ©s primas, requiert flexibilidad mental y métodos de solución creativos. Esta tabla proporciona competencia en cálculos cercanos a 80 y dÃ©veloppe compÃ©tences matemáticas avanzadas.",
      80: "la table de 80 est perfecta para reforzar la table de 8. La relación 8×10 combina el systÃ¨me dÃ©cimal y la table de 8. Las alternativas 2×40=4×20=5×16 enseñan a utiliser múltiples stratÃ©gies. a importancia social en el contexto de esperanza de vida (límite superior 80 años). Esta tabla amÃ©liore significativamente el cálculo práctico y la habilidad de trabajar con números grandes.",
      81: "Multiplier pair 81 utilise la relación 81=9² (nueve al carrÃ©) o 81=3⁴ (tres a la cuarta puissance). Como 81 est un carrÃ© perfecto, todos sus múltiplos con carrÃ©s perfectos forman números carrÃ©s también. Pensar en 81 como 80+1 o 9×9 facilite el cálculo. El 81 est divisible tanto por 9 como por 27 (27=3³). Los múltiplos de 81 se dividen uniformemente por 9. El 81 est la addition de los números impairs del 1 al 9 (1+3+5+7+9+11+13+15+17=81). Esta tabla dÃ©veloppe la comprensión de modÃ¨les matemáticos.",
      82: "Multiplier pair 82 utilise la relación 2×41. Si conoces la table de 41, vous pouvez doubler cada rÃ©sultat para encontrar la table de 82. Pensar en 82 como 80+2 o 85-3 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 82 est divisible tanto por 2 como por 41. Esta tabla establece una base para cálculos después de 80.",
      83: "Multiplier pair 83 dÃ©veloppe stratÃ©gies de matemática mental en raison de sus propriÃ©tÃ©s de número premier. Los métodos más prácticos sont pensar en 83 como 80+3 o 85-2. El 83 est un número premier y solo est divisible por 1 y 83. apprendre la table de 83 dÃ©veloppe la habilidad de calcular rápidamente con números premiers grandes.",
      84: "Multiplier pair 84 est una de las tablas más versátiles. Como 84=12×7=6×14=4×21=3×28=2×42, se peut calcular de muchas maneras diferentes. El 84 est 7 fois 12 (7 docenas). Tener muchos diviseurs (1,2,3,4,6,7,12,14,21,28,42,84) lo hace extremadamente útil en cálculos de fracciones. El 84 est útil en cálculos de tiempo (84 heures=1 semaine+1/2 día). Esta tabla perfecciona el uso de múltiples stratÃ©gies.",
      85: "Multiplier pair 85 utilise la relación 5×17. Si ambas tablas sont conocidas, Multiplier pair 85 est fácil. Pensar en 85 como 80+5 o 90-5 facilite el cálculo mental. El patrón del 5 (termina en 5 o 0) facilite el cálculo. El 85 se utilise frecuentemente en cálculos de porcentaje (85%=17/20). Esta tabla prepara para cálculos cercanos a 90.",
      86: "Multiplier pair 86 utilise la relación 2×43. Si conoces la table de 43, vous pouvez doubler cada rÃ©sultat para encontrar la table de 86. Pensar en 86 como 80+6 o 90-4 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 86 est divisible tanto por 2 como por 43. Esta tabla establece una base para cálculos cercanos a 90.",
      87: "Multiplier pair 87 utilise la relación 3×29. tripler la table de 29 o multiplier la table de 3 por 29 funciona. Pensar en 87 como 90-3 o 85+2 facilite el cálculo mental. Como 87=3×29, est divisible tanto por 3 como por 29. Esta tabla est útil para cálculos cercanos a 90 y perfecciona la habilidad de restar de números redondos.",
      88: "Multiplier pair 88 utilise las relaciones 8×11=4×22=2×44. Se peut calcular de múltiples maneras. El 88 montre un patrón similar a repdigit (repetición de 8s). Pensar en 88 como 90-2 o 80+8 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 88 a muchos diviseurs. La propriÃ©tÃ© repdigit (88) facilite el reconocimiento visual y la memorización.",
      89: "Multiplier pair 89 requiert stratÃ©gies especiales en raison de sus propriÃ©tÃ©s de número premier. La estrategia más fácil est pensar en 89 como 90-1: multiplie un número por 90 y réstale el número mismo. El 89 est un número premier y solo est divisible por 1 y 89. El 89 est muy cercano a 90, por lo que est útil para aproximaciones. Esta tabla proporciona competencia en cálculos cercanos a 90 y dÃ©veloppe compÃ©tences matemáticas avanzadas.",
      90: "Multiplier pair 90 utilise la relación 9×10 y est muy útil. Para multiplier un número por 90, vous pouvez multiplicarlo por 9 y ajouter un cero Ã  la fin. il y a relaciones de factores alternativos como 90=2×45=3×30=5×18=6×15. Un ángulo recto mide 90°. El 90 a importancia crítica en geometría (ángulo recto de 90°). El 90 se utilise frecuentemente en medidas de ángulos y porcentajes. Esta tabla refuerza la table de 9 y est extremadamente importante para cálculos prácticos y medidas de ángulos.",
      91: "Multiplier pair 91 utilise la relación 7×13. Si ambas tablas sont conocidas, Multiplier pair 91 est fácil. Pensar en 91 como 90+1 o 100-9 facilite el cálculo. Como 91=7×13, est divisible tanto por 7 como por 13. Esta tabla refuerza la comprensión de relaciones de factores. Como ambas tablas sont de dificultad media, la table de 91 est ideal para reforzarlas. est un concepto fundamental para matemáticas avanzadas y criptografía.",
      92: "Multiplier pair 92 utilise las relaciones 4×23=2×46. Se peut calcular de múltiples maneras. Pensar en 92 como 90+2 o 100-8 facilite el cálculo mental. Como est un número pair, todos sus múltiplos también sont pairs. El 92 est divisible tanto por 4 como por 23. Esta tabla prepara para cálculos cercanos a 100 y dÃ©veloppe compÃ©tences de cálculo en los 90s.",
      93: "Multiplier pair 93 utilise la relación 3×31. tripler la table de 31 o multiplier la table de 3 por 31 funciona. Pensar en 93 como 90+3 o 100-7 facilite el cálculo. Como 93=3×31, est divisible tanto por 3 como por 31. Esta tabla est útil para cálculos cercanos a 100. Proporciona práctica de multiplicación con números grandes y dÃ©veloppe flexibilidad mental.",
      94: "Multiplier pair 94 utilise la relación 2×47. Si conoces la table de 47, vous pouvez doubler cada rÃ©sultat para encontrar la table de 94. Pensar en 94 como 100-6 o 90+4 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 94 est divisible tanto por 2 como por 47. La estrategia 100-6 perfecciona el método de restar de números redondos. Proporciona compÃ©tences críticas para matemática mental avanzada.",
      95: "Multiplier pair 95 utilise la relación 5×19. Si ambas tablas sont conocidas, Multiplier pair 95 est fácil. Pensar en 95 como 100-5 o 90+5 facilite el cálculo mental. El patrón del 5 (termina en 5 o 0) facilite el cálculo. El 95 se utilise frecuentemente en cálculos de porcentaje (95%=19/20). La estrategia 100-5 est muy útil.",
      96: "Multiplier pair 96 utilise las relaciones 32×3=16×6=12×8=4×24=2×48. Se peut calcular de muchas maneras diferentes. Pensar en 96 como 100-4 o 90+6 facilite el cálculo. Como est un número pair, todos sus múltiplos también sont pairs. El 96 a muchos diviseurs (1,2,3,4,6,8,12,16,24,32,48,96), lo que lo hace útil en cálculos de fracciones. montre la relación entre potencias de 2 y 3 (2⁵×3). Esta tabla est perfecta para flexibilidad matemática y teoría de números.",
      97: "Multiplier pair 97 dÃ©veloppe stratÃ©gies de matemática mental en raison de sus propriÃ©tÃ©s de número premier. La estrategia más fácil est pensar en 97 como 100-3: multiplie un número por 100 y réstale tres fois el número mismo. El 97 est un número premier y solo est divisible por 1 y 97. apprendre la table de 97 facilite cálculos cercanos a 100. Ser el premier más cercano a 100 facilite extremadamente el cálculo mental. Ser premier est important para teoría de números y criptografía.",
      98: "Multiplier pair 98 utilise las relaciones 2×49=7×14. Se peut calcular de múltiples maneras. La estrategia más fácil est pensar en 98 como 100-2: multiplie un número por 100 y réstale dos fois el número mismo. Como est un número pair, todos sus múltiplos también sont pairs. El 98 est divisible tanto por 2 como por 7 y 49. La relación 98=2×49=2×7² combina números carrÃ©s y stratÃ©gies de duplicación. Esta tabla proporciona dominio en cálculos cercanos a 100.",
      99: "Multiplier pair 99 utilise la relación 9×11. La estrategia más fácil est pensar en 99 como 100-1: multiplie un número por 100 y réstale el número mismo. El 99 montre un patrón similar a repdigit (repetición de 9s). Como 99=9×11, est divisible tanto por 9 como por 11. Esta tabla est extremadamente útil para cálculos cercanos a 100. La estrategia 100-1 est PERFECTA para matemática mental. La propriÃ©tÃ© repdigit (99) profundiza la comprensión de modÃ¨les. Esta tabla est extremadamente importante para compÃ©tences de cálculo práctico.",
      100: "la table de 100 est la base del systÃ¨me dÃ©cimal. Proporciona una comprensión perfecta del concepto de valeur positionnelle. forme la base de cálculos de porcentaje (100%=completo) y el systÃ¨me dÃ©cimal. a importancia crítica para unidades monetarias, unidades de medida y matemática cotidiana. ¡est UNA DE LAS TABLAS MÁS ÚTILES E IMPORTANTES!",
    }
    return importance[number] || `apprendre la table de ${number} aide a los estudiantes a desarrollar fluidez con este número importante. Se ve frecuentemente en matemáticas y la vida cotidiana, haciéndolo necesario para construir sólidas compÃ©tences de cálculo.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Patrón de identitÃ©", description: "Todo número multiplicado por 1 est igual a sí mismo. Esto nunca cambia: 1×1=1, 1×2=2, 1×3=3, y así sucesivamente." },
        { title: "Secuencia Predecible", description: "Los rÃ©sultats simplemente cuentan hacia arriba: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Solo estás listando números en orden." },
        { title: "Base de Todas las Tablas", description: "Cada Table de Multiplication comienza con Multiplier pair 1, por lo que este patrón aparece en todas las tablas." },
      ],
      2: [
        { title: "Solo Números pairs", description: "Todos los múltiplos de 2 sont números pairs. Los rÃ©sultats siempre terminan en 0, 2, 4, 6 u 8." },
        { title: "Contar de Dos en Dos", description: "Cada respuesta est 2 más que la anterior: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Patrón de Duplicación", description: "Cada rÃ©sultat est exactamente el doble del factor: 2×5=10 est el doble de 5." },
      ],
      3: [
        { title: "Patrón de addition de Dígitos", description: "addition los dígitos de cada rÃ©sultat: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). ¡El patrón 3-6-9 se repite!" },
        { title: "Contar de Tres en Tres", description: "Cada respuesta augmente en 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Alternancia impair-pair", description: "Los rÃ©sultats alternan: impair (3), pair (6), impair (9), pair (12), creando un ritmo predecible." },
      ],
      4: [
        { title: "Siempre Números pairs", description: "Como la table de 2, todos los múltiplos de 4 sont pairs, terminan en 0, 2, 4, 6 u 8." },
        { title: "Doble de la table de 2", description: "Cada respuesta est exactamente el doble de la respuesta correspondiente en la table de 2: 4×3=12 est el doble de 2×3=6." },
        { title: "Contar de Cuatro en Cuatro", description: "Cada respuesta augmente en 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "Termina en 0 o 5", description: "Cada múltiplo de 5 termina en 0 o 5. Esto rend el patrón sea instantáneamente reconocible." },
        { title: "Patrón Alternante", description: "Los rÃ©sultats alternan entre terminar en 5 (impair) y 0 (pair): 5, 10, 15, 20, 25, 30..." },
        { title: "Mitad de la table de 10", description: "Cada rÃ©sultat est exactamente la mitad de la table de 10: 5×4=20 est la mitad de 10×4=40." },
      ],
      6: [
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 6 sont pairs. Los rÃ©sultats progresan como 6, 12, 18, 24, 30... y todos sont divisibles por 2." },
        { title: "Doble de la table de 3", description: "Cada respuesta est exactamente el doble de la table de 3: 6×4=24 est el doble de 3×4=12." },
        { title: "Patrón del Dígito de las Unidades", description: "El dígito de las unidades sigue este patrón: 6, 2, 8, 4, 0 y se repite. Este patrón te aide a identificar la table de 6." },
      ],
      7: [
        { title: "Patrón de addition de Dígitos", description: "Cuando sumas los dígitos de los múltiplos de 7, emerge un patrón interesante: 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "Repetición del Dígito de las Unidades", description: "El dígito de las unidades sigue esta secuencia: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 y se repite." },
        { title: "propriÃ©tÃ© de Número premier", description: "El 7 est un número premier, por lo que no a relaciones simples con otras tablas. Sin embargo, memorizar pairs especiales como 7×8=56 aide." },
      ],
      8: [
        { title: "Siempre pair y Divisible por 4", description: "Todos los múltiplos de 8 sont tanto pairs como divisibles por 4: 8, 16, 24, 32, 40, 48..." },
        { title: "Doble de la table de 4", description: "Cada respuesta est exactamente el doble de la table de 4: 8×5=40 est el doble de 4×5=20." },
        { title: "Patrón del Dígito de las Unidades", description: "El dígito de las unidades sigue este patrón: 8, 6, 4, 2, 0 y se repite. Siempre un patrón descendente con números pairs." },
      ],
      9: [
        { title: "addition de Dígitos Siempre est 9", description: "addition los dígitos de los múltiplos de 9: 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). ¡Este patrón mágico siempre funciona!" },
        { title: "Patrón del Dígito de las Decenas", description: "Si haces 9×n, el dígito de las decenas est n-1: 9×3=27 (decenas:2), 9×6=54 (decenas:5), 9×9=81 (decenas:8)." },
        { title: "1 Menos que 10", description: "La fórmula 9×n = (10×n) - n est muy útil: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      10: [
        { title: "ajoute un Cero Ã  la fin", description: "Cuando multipliez cualquier número por 10, simplemente ajoutes un cero Ã  la fin: 7×10=70, 23×10=230." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 10 terminan en 0: 10, 20, 30, 40, 50... Este patrón nunca cambia." },
        { title: "Sistema de valeur positionnelle", description: "Multiplier pair 10 desplaza cada dígito una posición a la izquierda. Esta est la base de nuestro systÃ¨me dÃ©cimal: 25×10=250." },
      ],
      11: [
        { title: "Patrón de Dígitos Dobles", description: "Cuando se multiplie por números de un dígito, el rÃ©sultat est dígitos dobles: 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "astuce de addition de Dígitos", description: "multiplie un número de dos dígitos por 11: addition los dígitos y colócalos en el medio. 23×11: 2_(2+3)_3 = 253." },
        { title: "Incremento de Decenas", description: "Múltiplos de 11: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. Los primeros 9 muestran el patrón de dígitos dobles." },
      ],
      12: [
        { title: "Patrón de Docena", description: "Múltiplos de 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Cada uno montre un aumento de une douzaine." },
        { title: "Múltiplos de Ambos 3 y 4", description: "Como 12=3×4, todos los rÃ©sultats sont divisibles tanto por 3 como por 4. 12×5=60: 60÷3=20, 60÷4=15." },
        { title: "Patrón de Números pairs", description: "Todos los múltiplos de 12 sont pairs y divisibles por 4: 12, 24, 36, 48..." },
      ],
      13: [
        { title: "Descomposición 10+3", description: "13×n = (10×n) + (3×n). Ejemplo: 13×4 = 40 + 12 = 52. Esta estrategia facilite el cálculo." },
        { title: "Ciclo del Dígito de las Unidades", description: "Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 y se repite. Se ComplÃ¨te un ciclo en exactamente 10 pasos." },
        { title: "Comportamiento de Número premier", description: "Como 13 est premier, solo est divisible por 1 y 13. Esto requiert stratÃ©gies especiales de memorización." },
      ],
      14: [
        { title: "Doble del 7", description: "Como 14=2×7, si conoces la table de 7 double cada rÃ©sultat: 7×6=42, entonces 14×6=84." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 14 sont pairs: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "Patrón de Dos semaines", description: "14 días = 2 semaines. Los múltiplos de 14 se usan en planificación semanal: 28 días = 4 semaines." },
      ],
      15: [
        { title: "Termina en 0 o 5", description: "Todos los múltiplos de 15 terminan en 0 o 5: 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "Relación 3×5", description: "Como 15=3×5, está relacionado con las tablas del 3 y 5. 15×4=60: 3×4=12, 5×4=20, no est 12+20=32 pero sí 3×20=60 o 5×12=60." },
        { title: "Múltiplos de Cuarto de heure", description: "15 minutes = cuarto de heure. 30 minutes = media heure, 45 minutes = tres cuartos, 60 minutes = 1 heure." },
      ],
      16: [
        { title: "puissance de 2", description: "16=2⁴ (2×2×2×2). Cadena de duplicación: 2→4→8→16. Cada múltiplo preserva este patrón." },
        { title: "Doble del 8", description: "Como 16=2×8, si conoces la table de 8 double cada rÃ©sultat: 8×3=24, entonces 16×3=48." },
        { title: "Siempre pair y Divisible por 8", description: "Todos los múltiplos de 16 sont pairs y divisibles por 4 y 8: 16, 32, 48, 64, 80..." },
      ],
      17: [
        { title: "Estrategia 20-3", description: "Piensa en 17=20-3. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "Descomposición 10+7", description: "17×n = (10×n) + (7×n). Ejemplo: 17×4 = 40 + 28 = 68." },
        { title: "Singularidad de Número premier", description: "17 est premier, por lo que solo a modÃ¨les únicos. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      18: [
        { title: "Doble del 9", description: "Como 18=2×9, double la table de 9: 9×5=45, entonces 18×5=90." },
        { title: "Triple del 6", description: "Como 18=3×6, triplica la table de 6: 6×4=24, entonces 18×4=72." },
        { title: "Siempre pair y Divisible por 9", description: "Los múltiplos de 18 sont pairs y divisibles por 9. La addition de dígitos est múltiplo de 9: 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      19: [
        { title: "Estrategia 20-1", description: "Piensa en 19=20-1. 19×6 = (20×6) - 6 = 120 - 6 = 114. ¡Método muy práctico!" },
        { title: "Descomposición 10+9", description: "19×n = (10×n) + (9×n). Ejemplo: 19×3 = 30 + 27 = 57." },
        { title: "Patrón de Número premier", description: "Como 19 est premier a modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (orden descendente)." },
      ],
      20: [
        { title: "ajoute Cero y double", description: "20=10×2. Para Multiplier pair 20: 7×10=70, luego 70×2=140. (No est 7×20: 70×2=140 directamente)." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 20 terminan en 0: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "Decenas pairs", description: "20, 40, 60, 80, 100... Cada uno augmente en 20. sont múltiplos pairs de 10." },
      ],
      21: [
        { title: "Relación 3×7", description: "21=3×7. vous pouvez utiliser ambas tablas del 3 y 7: 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "Estrategia 20+1", description: "21×n = (20×n) + n. Ejemplo: 21×6 = 120 + 6 = 126. ¡Muy práctico!" },
        { title: "Ciclo del Dígito de las Unidades", description: "Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 y se repite. Patrón de incremento simple." },
      ],
      22: [
        { title: "Doble del 11", description: "22=2×11. Si conoces la table de 11 double: 11×3=33, entonces 22×3=66." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 22 sont pairs: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Patrón de Dígitos Dobles", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. Los primeros 4 muestran patrón de dígitos dobles." },
      ],
      23: [
        { title: "Descomposición 20+3", description: "23×n = (20×n) + (3×n). Ejemplo: 23×5 = 100 + 15 = 115." },
        { title: "Estrategia 25-2", description: "23=25-2. Ejemplo: 23×4 = 100 - 8 = 92. Útil cuando Multiplier pair 25 est más fácil." },
        { title: "Patrón de Número premier", description: "Como 23 est premier a patrón especial. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      24: [
        { title: "Relaciones de Múltiples Factores", description: "24=2×12=3×8=4×6. peut calcularse de muchas formas. 24×5 = 12×10 = 120." },
        { title: "Siempre pair y Divisible por 4", description: "Todos los múltiplos de 24 sont pairs y divisibles por 3, 4, 6 y 8." },
        { title: "Relación con las heures", description: "24 heures = 1 día. 48 heures = 2 días, 72 heures = 3 días. Útil en cálculos de tiempo." },
      ],
      25: [
        { title: "Patrón 25, 50, 75, 00", description: "Todos los múltiplos de 25 terminan en 25, 50, 75 o 00. Muy regular y predecible." },
        { title: "Relación de Cuarto", description: "25 = 100÷4. Entonces 25×4=100. Esta relación est muy útil en cálculos de porcentajes y fracciones." },
        { title: "carrÃ© del 5", description: "25=5². Esta relación especial: 25×n = 5×5×n. Ejemplo: 25×8 = 5×40 = 200." },
      ],
      26: [
        { title: "Doble del 13", description: "26=2×13. Si conoces la table de 13 double: 13×7=91, entonces 26×7=182." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 26 sont pairs: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 o 30-4", description: "26×n = (25×n) + n o (30×n) - (4×n). Ejemplo: 26×4 = 100+4 = 104." },
      ],
      27: [
        { title: "puissance del 3", description: "27=3³ (3×3×3). Relación de número cúbico: 27, 54, 81, 108... (múltiplos de 3)." },
        { title: "Triple del 9", description: "27=3×9. Triplica la table de 9: 9×4=36, entonces 27×4=108." },
        { title: "Estrategia 30-3", description: "27=30-3. Ejemplo: 27×6 = 180-18 = 162. Método de cálculo fácil." },
      ],
      28: [
        { title: "4×7 o 2×14", description: "28=4×7=2×14. peut calcularse de múltiples formas: 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "Siempre pair y Divisible por 4", description: "Todos los múltiplos de 28 sont pairs y divisibles por 4 y 7: 28, 56, 84, 112, 140..." },
        { title: "Relación con la semaine", description: "28 días = 4 semaines. Esta relación est útil en cálculos de calendario." },
      ],
      29: [
        { title: "Estrategia 30-1", description: "29=30-1. 29×n = (30×n) - n. Ejemplo: 29×7 = 210-7 = 203. ¡El método más efectivo!" },
        { title: "Patrón del Dígito de las Unidades", description: "Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (orden descendente). Predecible." },
        { title: "propriÃ©tÃ© de Número premier", description: "Como 29 est premier no a relaciones simples de factores. requiert stratÃ©gies mentales." },
      ],
      30: [
        { title: "Relación 3×10", description: "30=3×10. Multiplier pair 30: multiplie por 10, luego por 3. 7×30 = 70×3 = 210." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 30 terminan en 0: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Múltiplos Triples de las Decenas", description: "30, 60, 90, 120, 150... Cada uno augmente en 30. sont 3 fois las decenas." },
      ],
      31: [
        { title: "Estrategia 30+1", description: "31=30+1. 31×n = (30×n) + n. Ejemplo: 31×7 = 210 + 7 = 217." },
        { title: "Patrón de Número premier", description: "Como 31 est premier a patrón especial. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Relación con Días del mois", description: "31 días est la longitud máxima de un mois. 31, 62 (2 mois), 93 (3 mois), 124 (4 mois) en cálculos de calendario." },
      ],
      32: [
        { title: "puissance de 2", description: "32=2⁵. Cadena de duplicación: 2→4→8→16→32. Todos los múltiplos preservan este patrón." },
        { title: "Doble del 16", description: "32=2×16. Si conoces la table de 16 double: 16×5=80, entonces 32×5=160." },
        { title: "Siempre pair y Divisible por 8", description: "Todos los múltiplos de 32 sont pairs y divisibles por 4, 8 y 16: 32, 64, 96, 128..." },
      ],
      33: [
        { title: "Relación 3×11", description: "33=3×11. Triplica la table de 11: 11×4=44, entonces 33×4=132. O multiplie la table de 3 por 11." },
        { title: "Patrón Repdigit", description: "33×1=33, 33×2=66, 33×3=99. Los primeros 3 muestran dígitos dobles. Luego 132, 165..." },
        { title: "Siempre Divisible por 3", description: "Todos los múltiplos de 33 sont divisibles por 3 y 11. La addition de dígitos est múltiplo de 3." },
      ],
      34: [
        { title: "Doble del 17", description: "34=2×17. double la table de 17: 17×6=102, entonces 34×6=204." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 34 sont pairs: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340." },
        { title: "35-1 o 30+4", description: "34×n = (35×n) - n o (30×n) + (4×n). Ejemplo: 34×5 = 175-5 = 170." },
      ],
      35: [
        { title: "Relación 5×7", description: "35=5×7. vous pouvez utiliser ambas tablas del 5 y 7: 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 35 terminan en 5 o 0: 35, 70, 105, 140, 175, 210, 245, 280..." },
        { title: "Cincos del 7", description: "35, 70, 105, 140, 175... multiplie múltiplos del 7 por 5. O múltiplos del 5 por 7." },
      ],
      36: [
        { title: "carrÃ© del 6", description: "36=6². Además 36=4×9=3×12=2×18. Relaciones de múltiples factores." },
        { title: "Muchos diviseurs", description: "36 a 9 diviseurs: 1,2,3,4,6,9,12,18,36. Esto lo hace muy útil para fracciones." },
        { title: "Divisible por 9 y 4", description: "Todos los múltiplos de 36 sont divisibles por 4 y 9. La addition de dígitos est múltiplo de 9." },
      ],
      37: [
        { title: "Estrategia 40-3", description: "37=40-3. 37×n = (40×n) - (3×n). Ejemplo: 37×6 = 240 - 18 = 222." },
        { title: "Relación Mágica con 111", description: "37×3=111. Esta relación especial: 37×6=222, 37×9=333. ¡En cada múltiplo de 3 il y a rÃ©sultat repdigit!" },
        { title: "Singularidad de Número premier", description: "Como 37 est premier a modÃ¨les especiales. Las stratÃ©gies 35+2 o 40-3 sont útiles." },
      ],
      38: [
        { title: "Doble del 19", description: "38=2×19. double la table de 19: 19×7=133, entonces 38×7=266." },
        { title: "Estrategia 40-2", description: "38=40-2. 38×n = (40×n) - (2×n). Ejemplo: 38×5 = 200 - 10 = 190." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 38 sont pairs: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380." },
      ],
      39: [
        { title: "Relación 3×13", description: "39=3×13. Triplica la table de 13: 13×4=52, entonces 39×4=156." },
        { title: "Estrategia 40-1", description: "39=40-1. 39×n = (40×n) - n. Ejemplo: 39×7 = 280 - 7 = 273. ¡Muy práctico!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 39 sont divisibles por 3 y 13. La addition de dígitos est múltiplo de 3." },
      ],
      40: [
        { title: "Relación 4×10", description: "40=4×10. Multiplier pair 40: multiplie por 4, ajoute un 0 Ã  la fin. 7×40: 7×4=28, ajoute 0: 280." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 40 terminan en 0: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400." },
        { title: "Cuatro fois las Decenas", description: "40, 80, 120, 160, 200... Cada uno augmente en 40. sont 4 fois las decenas." },
      ],
      41: [
        { title: "Estrategia 40+1", description: "41=40+1. 41×n = (40×n) + n. Ejemplo: 41×6 = 240 + 6 = 246. ¡El método más práctico!" },
        { title: "propriÃ©tÃ©s de Número premier", description: "Como 41 est premier solo est divisible por 1 y 41. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "45-4 o 50-9", description: "stratÃ©gies alternativas: 41×4 = 180-16 = 164. O 41×5 = 250-45 = 205." },
      ],
      42: [
        { title: "Relación 6×7", description: "42=6×7. vous pouvez utiliser ambas tablas del 6 y 7: 42×3 = 6×3×7 = 18×7 = 126." },
        { title: "2×21 o 3×14", description: "42=2×21=3×14. Se peut calcular de múltiples maneras: 42×5 = 21×10 = 210." },
        { title: "Siempre Divisible por 6", description: "Todos los múltiplos de 42 sont divisibles por 2, 3, 6 y 7: 42, 84, 126, 168, 210..." },
      ],
      43: [
        { title: "40+3 o 45-2", description: "43=40+3 o 45-2. Ejemplo: 43×7 = 280+21 = 301 o 315-14 = 301." },
        { title: "Patrón de Número premier", description: "Como 43 est premier requiert stratÃ©gies especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 50-7", description: "Con números grandes: 43×8 = 400-56 = 344. Restar de 50 est un método alternativo." },
      ],
      44: [
        { title: "Cuatro fois el 11", description: "44=4×11. Cuadruplica la table de 11: 11×6=66, entonces 44×6=264." },
        { title: "Similar a Repdigit", description: "44×1=44, 44×2=88. Los primeros 2 muestran dígitos dobles. Luego 132, 176, 220..." },
        { title: "Siempre pair y Divisible por 4", description: "Todos los múltiplos de 44 sont pairs y divisibles por 4 y 11: 44, 88, 132, 176, 220..." },
      ],
      45: [
        { title: "Relación 5×9", description: "45=5×9. vous pouvez utiliser ambas tablas del 5 y 9: 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 45 terminan en 5 o 0: 45, 90, 135, 180, 225, 270, 315, 360..." },
        { title: "Divisible por 9", description: "Todos los múltiplos de 45 sont divisibles por 9. La addition de dígitos est múltiplo de 9: 135 (1+3+5=9)." },
      ],
      46: [
        { title: "Doble del 23", description: "46=2×23. double la table de 23: 23×7=161, entonces 46×7=322." },
        { title: "45+1 o 50-4", description: "46×n = (45×n) + n o (50×n) - (4×n). Ejemplo: 46×5 = 225+5 = 230." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 46 sont pairs: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460." },
      ],
      47: [
        { title: "Estrategia 50-3", description: "47=50-3. 47×n = (50×n) - (3×n). Ejemplo: 47×6 = 300 - 18 = 282. ¡El más efectivo!" },
        { title: "Alternativa 45+2", description: "47=45+2. Ejemplo: 47×8 = 360 + 16 = 376. Útil si conoces la table de 45." },
        { title: "Singularidad de Número premier", description: "Como 47 est premier a modÃ¨les especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      48: [
        { title: "Relaciones de Múltiples Factores", description: "48=6×8=4×12=3×16=2×24. peut calcularse de muchas formas: 48×5 = 12×20 = 240." },
        { title: "Siempre pair y Múltiples diviseurs", description: "Todos los múltiplos de 48 sont divisibles por 2, 3, 4, 6, 8 y 12." },
        { title: "Estrategia 50-2", description: "48=50-2. Ejemplo: 48×7 = 350 - 14 = 336. Restar de números redondos." },
      ],
      49: [
        { title: "carrÃ© del 7", description: "49=7². utilise la table de 7: 49×3 = 7×7×3 = 7×21 = 147. O 7×3×7." },
        { title: "Estrategia 50-1", description: "49=50-1. 49×n = (50×n) - n. Ejemplo: 49×6 = 300 - 6 = 294. ¡Muy fácil!" },
        { title: "Patrón de Número carrÃ©", description: "49, 98, 147, 196, 245... Múltiplos del 7 por 7. También 7²×1, 7²×2, 7²×3..." },
      ],
      50: [
        { title: "Relación 5×10", description: "50=5×10. Multiplier pair 50: multiplie por 5, ajoute un 0 Ã  la fin. 8×50: 8×5=40, ajoute 0: 400." },
        { title: "Siempre Termina en 0 o 50", description: "Todos los múltiplos de 50 terminan en 0 o 50: 50, 100, 150, 200, 250, 300, 350, 400..." },
        { title: "Mitad de 100", description: "50×n = (100×n)÷2. Ejemplo: 50×7 = 700÷2 = 350. Útil en cálculos de porcentajes." },
      ],
      51: [
        { title: "Estrategia 50+1", description: "51=50+1. 51×n = (50×n) + n. Ejemplo: 51×7 = 350 + 7 = 357. ¡Muy práctico!" },
        { title: "Relación 3×17", description: "51=3×17. Triplica la table de 17: 17×6=102, entonces 51×6=306." },
        { title: "Alternativa 55-4", description: "51=55-4. Ejemplo: 51×5 = 275-20 = 255. Útil cuando Multiplier pair 55 est más fácil." },
      ],
      52: [
        { title: "Relación 4×13", description: "52=4×13. Cuadruplica la table de 13: 13×7=91, entonces 52×7=364." },
        { title: "50+2 o 2×26", description: "52×n = (50×n) + (2×n) o double la table de 26. Ejemplo: 52×5 = 250+10 = 260." },
        { title: "Patrón de Número de semaines", description: "52 semaines = 1 año. 52, 104 (2 años), 156 (3 años)... Útil en cálculos de calendario." },
      ],
      53: [
        { title: "50+3 o 55-2", description: "53=50+3 o 55-2. Ejemplo: 53×6 = 300+18 = 318 o 330-12 = 318." },
        { title: "Patrón de Número premier", description: "Como 53 est premier requiert stratÃ©gies especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 60-7", description: "Con números grandes: 53×8 = 480-56 = 424. Restar de 60 est un método alternativo." },
      ],
      54: [
        { title: "Relación 6×9", description: "54=6×9. vous pouvez utiliser ambas tablas del 6 y 9: 54×5 = 9×5×6 = 45×6 = 270." },
        { title: "2×27 o 3×18", description: "54=2×27=3×18. peut calcularse de múltiples formas: 54×4 = 27×8 = 216." },
        { title: "Divisible por 9", description: "Todos los múltiplos de 54 sont divisibles por 9. La addition de dígitos est múltiplo de 9: 108 (1+0+8=9)." },
      ],
      55: [
        { title: "Relación 5×11", description: "55=5×11. vous pouvez utiliser ambas tablas del 5 y 11: 55×4 = 11×4×5 = 44×5 = 220." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 55 terminan en 5 o 0: 55, 110, 165, 220, 275, 330, 385, 440..." },
        { title: "Número Triangular", description: "55 = 1+2+3+4+5+6+7+8+9+10. Esta propriÃ©tÃ© de addition especial rend 55 sea matemáticamente interesante." },
      ],
      56: [
        { title: "Relación 7×8", description: "56=7×8. ¡Una de las parejas de multiplicación más difíciles! Refuerza tanto la table de 7 como del 8." },
        { title: "4×14 o 2×28", description: "56=4×14=2×28. peut calcularse de múltiples formas: 56×5 = 14×20 = 280." },
        { title: "Siempre pair y Divisible por 7", description: "Todos los múltiplos de 56 sont pairs y divisibles por 4, 7 y 8: 56, 112, 168, 224..." },
      ],
      57: [
        { title: "Relación 3×19", description: "57=3×19. Triplica la table de 19: 19×7=133, entonces 57×7=399." },
        { title: "Estrategia 60-3", description: "57=60-3. 57×n = (60×n) - (3×n). Ejemplo: 57×6 = 360 - 18 = 342. ¡Muy fácil!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 57 sont divisibles por 3 y 19. La addition de dígitos est múltiplo de 3." },
      ],
      58: [
        { title: "Doble del 29", description: "58=2×29. double la table de 29: 29×7=203, entonces 58×7=406." },
        { title: "Estrategia 60-2", description: "58=60-2. 58×n = (60×n) - (2×n). Ejemplo: 58×6 = 360 - 12 = 348." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 58 sont pairs: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580." },
      ],
      59: [
        { title: "Estrategia 60-1", description: "59=60-1. 59×n = (60×n) - n. Ejemplo: 59×7 = 420 - 7 = 413. ¡PERFECTO!" },
        { title: "Singularidad de Número premier", description: "Como 59 est premier a modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 55+4", description: "59=55+4. Ejemplo: 59×8 = 440 + 32 = 472. Útil si conoces la table de 55." },
      ],
      60: [
        { title: "Relación 6×10", description: "60=6×10. Multiplier pair 60: multiplie por 6, ajoute un 0 Ã  la fin. 7×60: 7×6=42, ajoute 0: 420." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 60 terminan en 0: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600." },
        { title: "Relaciones de Múltiples Factores", description: "60=2×30=3×20=4×15=5×12=6×10. ¡peut calcularse de muchas formas!" },
      ],
      61: [
        { title: "Estrategia 60+1", description: "61=60+1. 61×n = (60×n) + n. Ejemplo: 61×7 = 420 + 7 = 427. ¡Muy práctico!" },
        { title: "propriÃ©tÃ©s de Número premier", description: "Como 61 est premier solo est divisible por 1 y 61. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternativa 65-4", description: "61=65-4. Ejemplo: 61×5 = 325-20 = 305. Útil cuando Multiplier pair 65 est más fácil." },
      ],
      62: [
        { title: "Doble del 31", description: "62=2×31. double la table de 31: 31×7=217, entonces 62×7=434." },
        { title: "Estrategia 60+2", description: "62=60+2. 62×n = (60×n) + (2×n). Ejemplo: 62×6 = 360 + 12 = 372." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 62 sont pairs: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620." },
      ],
      63: [
        { title: "Relación 7×9", description: "63=7×9. vous pouvez utiliser ambas tablas del 7 y 9: 63×5 = 9×5×7 = 45×7 = 315." },
        { title: "Alternativa 3×21", description: "63=3×21. Triplica la table de 21: 21×4=84, entonces 63×4=252." },
        { title: "Divisible por 7 y 9", description: "Todos los múltiplos de 63 sont divisibles por 7 y 9. La addition de dígitos est múltiplo de 9." },
      ],
      64: [
        { title: "carrÃ© del 8", description: "64=8×8=8². Además 64=2⁶. Cadena de duplicación: 2→4→8→16→32→64." },
        { title: "Sexta puissance del 2", description: "64=2⁶. Importante para arquitectura de 64 bits en computación. forme la base del sistema binario." },
        { title: "Siempre pair y Divisible por 8", description: "Todos los múltiplos de 64 sont pairs y divisibles por 4, 8, 16 y 32: 64, 128, 192, 256..." },
      ],
      65: [
        { title: "Relación 5×13", description: "65=5×13. vous pouvez utiliser ambas tablas del 5 y 13: 65×4 = 13×4×5 = 52×5 = 260." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 65 terminan en 5 o 0: 65, 130, 195, 260, 325, 390, 455, 520..." },
        { title: "60+5 o 70-5", description: "65×n = (60×n) + (5×n) o (70×n) - (5×n). Ejemplo: 65×6 = 360+30 = 390." },
      ],
      66: [
        { title: "Relación 6×11", description: "66=6×11. vous pouvez utiliser ambas tablas del 6 y 11: 66×5 = 11×5×6 = 55×6 = 330." },
        { title: "Similar a Repdigit", description: "66×1=66, 66×2=132. Como 6 fois 11, sigue el patrón de la table de 11." },
        { title: "Alternativa 2×33", description: "66=2×33. double la table de 33: 33×7=231, entonces 66×7=462." },
      ],
      67: [
        { title: "Estrategia 70-3", description: "67=70-3. 67×n = (70×n) - (3×n). Ejemplo: 67×7 = 490 - 21 = 469. ¡Muy fácil!" },
        { title: "Patrón de Número premier", description: "Como 67 est premier requiert stratÃ©gies especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Alternativa 65+2", description: "67=65+2. Ejemplo: 67×8 = 520 + 16 = 536. Útil si conoces la table de 65." },
      ],
      68: [
        { title: "Relación 4×17", description: "68=4×17. Cuadruplica la table de 17: 17×7=119, entonces 68×7=476." },
        { title: "2×34 o 70-2", description: "68=2×34 o 70-2. Ejemplo: 68×6 = 420 - 12 = 408." },
        { title: "Siempre pair y Divisible por 4", description: "Todos los múltiplos de 68 sont pairs y divisibles por 4 y 17: 68, 136, 204, 272, 340..." },
      ],
      69: [
        { title: "Relación 3×23", description: "69=3×23. Triplica la table de 23: 23×7=161, entonces 69×7=483." },
        { title: "Estrategia 70-1", description: "69=70-1. 69×n = (70×n) - n. Ejemplo: 69×6 = 420 - 6 = 414. ¡PERFECTO!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 69 sont divisibles por 3 y 23. La addition de dígitos est múltiplo de 3." },
      ],
      70: [
        { title: "Relación 7×10", description: "70=7×10. Multiplier pair 70: multiplie por 7, ajoute un 0 Ã  la fin. 8×70: 8×7=56, ajoute 0: 560." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 70 terminan en 0: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700." },
        { title: "Relaciones de Múltiples Factores", description: "70=2×35=5×14=7×10. ¡peut calcularse de muchas formas!" },
      ],
      71: [
        { title: "Estrategia 70+1", description: "71=70+1. 71×n = (70×n) + n. Ejemplo: 71×7 = 490 + 7 = 497. ¡Muy práctico!" },
        { title: "propriÃ©tÃ©s de Número premier", description: "Como 71 est premier solo est divisible por 1 y 71. Dígito de las unidades: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternativa 75-4", description: "71=75-4. Ejemplo: 71×5 = 375-20 = 355. Útil cuando Multiplier pair 75 est más fácil." },
      ],
      72: [
        { title: "Relación 8×9", description: "72=8×9. vous pouvez utiliser ambas tablas del 8 y 9: 72×5 = 9×5×8 = 45×8 = 360." },
        { title: "6×12 o 3×24", description: "72=6×12=3×24=4×18. peut calcularse de múltiples formas: 72×4 = 12×24 = 288." },
        { title: "Muchos diviseurs", description: "72 a 12 diviseurs: 1,2,3,4,6,8,9,12,18,24,36,72. ¡Muy útil para fracciones!" },
      ],
      73: [
        { title: "70+3 o 75-2", description: "73=70+3 o 75-2. Ejemplo: 73×6 = 420+18 = 438 o 450-12 = 438." },
        { title: "Patrón de Número premier", description: "Como 73 est premier requiert stratÃ©gies especiales. est el 21º número premier. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 80-7", description: "Con números grandes: 73×8 = 640-56 = 584. Restar de 80 est un método alternativo." },
      ],
      74: [
        { title: "Relación 2×37", description: "74=2×37. double la table de 37: 37×7=259, entonces 74×7=518." },
        { title: "75-1 o 70+4", description: "74×n = (75×n) - n o (70×n) + (4×n). Ejemplo: 74×5 = 375-5 = 370." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 74 sont pairs: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740." },
      ],
      75: [
        { title: "3×25 o 5×15", description: "75=3×25=5×15. Ejemplo: 75×4 = 25×12 = 300 o 15×20 = 300." },
        { title: "Patrón 25, 50, 75, 00", description: "Todos los múltiplos de 75 terminan en 25, 50, 75 o 00. Muy regular y predecible." },
        { title: "Relación de Porcentaje", description: "75 = 100×¾. Entonces 75% = 3/4. Esta relación est muy útil en cálculos de porcentajes." },
      ],
      76: [
        { title: "Relación 4×19", description: "76=4×19. Cuadruplica la table de 19: 19×7=133, entonces 76×7=532." },
        { title: "2×38 o 80-4", description: "76=2×38 o 80-4. Ejemplo: 76×6 = 480 - 24 = 456." },
        { title: "Siempre pair y Divisible por 4", description: "Todos los múltiplos de 76 sont pairs y divisibles por 4 y 19: 76, 152, 228, 304, 380..." },
      ],
      77: [
        { title: "Relación 7×11", description: "77=7×11. vous pouvez utiliser ambas tablas del 7 y 11: 77×5 = 11×5×7 = 55×7 = 385." },
        { title: "Patrón Similar a Repdigit", description: "77×1=77, 77×2=154. Como producto de 7 y 11 montre un patrón especial." },
        { title: "Estrategia 80-3", description: "77=80-3. Ejemplo: 77×6 = 480 - 18 = 462. Restar de números redondos." },
      ],
      78: [
        { title: "Relación 6×13", description: "78=6×13=2×39=3×26. peut calcularse de múltiples formas: 78×5 = 13×30 = 390." },
        { title: "Estrategia 80-2", description: "78=80-2. 78×n = (80×n) - (2×n). Ejemplo: 78×7 = 560 - 14 = 546." },
        { title: "Divisible por 2 y 3", description: "Todos los múltiplos de 78 sont divisibles por 2 y 3. La addition de dígitos est múltiplo de 3." },
      ],
      79: [
        { title: "Estrategia 80-1", description: "79=80-1. 79×n = (80×n) - n. Ejemplo: 79×7 = 560 - 7 = 553. ¡PERFECTO!" },
        { title: "Singularidad de Número premier", description: "Como 79 est premier a modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 75+4", description: "79=75+4. Ejemplo: 79×8 = 600 + 32 = 632. Útil si conoces la table de 75." },
      ],
      80: [
        { title: "Relación 8×10", description: "80=8×10. Multiplier pair 80: multiplie por 8, ajoute un 0 Ã  la fin. 7×80: 7×8=56, ajoute 0: 560." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 80 terminan en 0: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800." },
        { title: "Relaciones de Múltiples Factores", description: "80=2×40=4×20=5×16=8×10. ¡peut calcularse de muchas formas!" },
      ],
      81: [
        { title: "carrÃ© del 9", description: "81=9×9=9². Además 81=3⁴. Ejemplo perfecto de relaciones de carrÃ©s y potencias." },
        { title: "Estrategia 80+1", description: "81=80+1. 81×n = (80×n) + n. Ejemplo: 81×7 = 560 + 7 = 567. ¡Muy práctico!" },
        { title: "Cuarta puissance del 3", description: "81=3⁴=3×3×3×3. Importante para entender números con exponentes. Divisible por 9 y 27." },
      ],
      82: [
        { title: "Relación 2×41", description: "82=2×41. double la table de 41: 41×7=287, entonces 82×7=574." },
        { title: "Estrategia 80+2", description: "82=80+2. 82×n = (80×n) + (2×n). Ejemplo: 82×6 = 480 + 12 = 492." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 82 sont pairs: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820." },
      ],
      83: [
        { title: "80+3 o 85-2", description: "83=80+3 o 85-2. Ejemplo: 83×6 = 480+18 = 498 o 510-12 = 498." },
        { title: "Patrón de Número premier", description: "Como 83 est premier requiert stratÃ©gies especiales. Dígito de las unidades: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Estrategia 90-7", description: "Con números grandes: 83×8 = 720-56 = 664. Restar de 90 est un método alternativo." },
      ],
      84: [
        { title: "Relación 7×12", description: "84=7×12. vous pouvez utiliser ambas tablas del 7 y 12: 84×5 = 12×5×7 = 60×7 = 420." },
        { title: "6×14 o 4×21", description: "84=6×14=4×21=3×28. peut calcularse de múltiples formas: 84×4 = 21×16 = 336." },
        { title: "Muchos diviseurs", description: "84 a 12 diviseurs: 1,2,3,4,6,7,12,14,21,28,42,84. ¡Muy útil para fracciones!" },
      ],
      85: [
        { title: "Relación 5×17", description: "85=5×17. vous pouvez utiliser ambas tablas del 5 y 17: 85×4 = 17×4×5 = 68×5 = 340." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 85 terminan en 5 o 0: 85, 170, 255, 340, 425, 510, 595, 680..." },
        { title: "90-5 o 80+5", description: "85×n = (90×n) - (5×n) o (80×n) + (5×n). Ejemplo: 85×6 = 540-30 = 510." },
      ],
      86: [
        { title: "Relación 2×43", description: "86=2×43. double la table de 43: 43×7=301, entonces 86×7=602." },
        { title: "Estrategia 90-4", description: "86=90-4. 86×n = (90×n) - (4×n). Ejemplo: 86×6 = 540 - 24 = 516." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 86 sont pairs: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860." },
      ],
      87: [
        { title: "Relación 3×29", description: "87=3×29. Triplica la table de 29: 29×7=203, entonces 87×7=609." },
        { title: "Estrategia 90-3", description: "87=90-3. 87×n = (90×n) - (3×n). Ejemplo: 87×7 = 630 - 21 = 609. ¡Muy fácil!" },
        { title: "Divisible por 3", description: "Todos los múltiplos de 87 sont divisibles por 3 y 29. La addition de dígitos est múltiplo de 3." },
      ],
      88: [
        { title: "Relación 8×11", description: "88=8×11. vous pouvez utiliser ambas tablas del 8 y 11: 88×5 = 11×5×8 = 55×8 = 440." },
        { title: "Número Repdigit", description: "88×1=88, 88×2=176. La propriÃ©tÃ© repdigit (repetición de 8s) facilite el reconocimiento visual." },
        { title: "4×22 o 2×44", description: "88=4×22=2×44. peut calcularse de múltiples formas: 88×5 = 22×20 = 440." },
      ],
      89: [
        { title: "Estrategia 90-1", description: "89=90-1. 89×n = (90×n) - n. Ejemplo: 89×7 = 630 - 7 = 623. ¡PERFECTO!" },
        { title: "Singularidad de Número premier", description: "Como 89 est premier a modÃ¨les especiales. Dígito de las unidades: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternativa 85+4", description: "89=85+4. Ejemplo: 89×8 = 680 + 32 = 712. Útil si conoces la table de 85." },
      ],
      90: [
        { title: "Relación 9×10", description: "90=9×10. Multiplier pair 90: multiplie por 9, ajoute un 0 Ã  la fin. 7×90: 7×9=63, ajoute 0: 630." },
        { title: "Siempre Termina en 0", description: "Todos los múltiplos de 90 terminan en 0: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900." },
        { title: "Relaciones de Múltiples Factores", description: "90=2×45=3×30=5×18=6×15=9×10. ¡peut calcularse de muchas formas!" },
      ],
      91: [
        { title: "Relación 7×13", description: "91=7×13. vous pouvez utiliser ambas tablas del 7 y 13: 91×5 = 7×5×13 = 35×13 = 455." },
        { title: "Estrategia 90+1", description: "91=90+1. 91×n = (90×n) + n. Ejemplo: 91×6 = 540 + 6 = 546. ¡Práctico!" },
        { title: "Producto de premiers", description: "91=7×13 (producto de dos premiers). Divisible por 7 y 13." },
      ],
      92: [
        { title: "Relación 4×23", description: "92=4×23. Cuadruplica la table de 23: 23×7=161, entonces 92×7=644." },
        { title: "90+2 o 100-8", description: "92×n = (90×n)+(2×n) o (100×n)-(8×n). Ejemplo: 92×5 = 450+10 = 460." },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 92 sont pairs: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920." },
      ],
      93: [
        { title: "Relación 3×31", description: "93=3×31. Triplica la table de 31: 31×6=186, entonces 93×6=558." },
        { title: "Estrategia 90+3", description: "93=90+3. 93×n = (90×n) + (3×n). Ejemplo: 93×7 = 630 + 21 = 651." },
        { title: "Divisible por 3", description: "Todos los múltiplos de 93 sont divisibles por 3. La addition de los dígitos est múltiplo de 3." },
      ],
      94: [
        { title: "Relación 2×47", description: "94=2×47. double la table de 47: 47×7=329, entonces 94×7=658." },
        { title: "Estrategia 100-6", description: "94=100-6. 94×n = (100×n) - (6×n). Ejemplo: 94×5 = 500 - 30 = 470. ¡PERFECTO!" },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 94 sont pairs: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940." },
      ],
      95: [
        { title: "Relación 5×19", description: "95=5×19. vous pouvez utiliser ambas tablas del 5 y 19: 95×4 = 19×4×5 = 76×5 = 380." },
        { title: "Termina en 5 o 0", description: "Todos los múltiplos de 95 terminan en 5 o 0: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950." },
        { title: "Estrategia 100-5", description: "95=100-5. 95×n = (100×n) - (5×n). Ejemplo: 95×6 = 600 - 30 = 570. ¡Muy fácil!" },
      ],
      96: [
        { title: "Relación 8×12", description: "96=8×12. vous pouvez utiliser ambas tablas: 96×5 = 12×5×8 = 60×8 = 480." },
        { title: "Relaciones de Múltiples Factores", description: "96=8×12=6×16=4×24=3×32=2×48. ¡peut calcularse de muchas formas!" },
        { title: "puissance de 2 × 3", description: "96=2⁵×3. Relación 32×3. a muchos diviseurs (12 diviseurs)." },
      ],
      97: [
        { title: "Estrategia 100-3", description: "97=100-3. 97×n = (100×n) - (3×n). Ejemplo: 97×7 = 700 - 21 = 679. ¡PERFECTO!" },
        { title: "modÃ¨les de Número premier", description: "Como 97 est premier a modÃ¨les especiales. Dígito de las unidades: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "premier Más Cercano a 100", description: "El mayor número premier menor que 100. Esta propriÃ©tÃ© facilite mucho el cálculo." },
      ],
      98: [
        { title: "Relación 2×49", description: "98=2×49=2×7². double la table de 49: 49×7=343, entonces 98×7=686." },
        { title: "Estrategia 100-2", description: "98=100-2. 98×n = (100×n) - (2×n). Ejemplo: 98×6 = 600 - 12 = 588. ¡SÚPER FÁCIL!" },
        { title: "Siempre Números pairs", description: "Todos los múltiplos de 98 sont pairs: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980." },
      ],
      99: [
        { title: "Relación 9×11", description: "99=9×11. vous pouvez utiliser ambas tablas: 99×5 = 11×5×9 = 55×9 = 495." },
        { title: "Estrategia 100-1", description: "99=100-1. 99×n = (100×n) - n. Ejemplo: 99×7 = 700 - 7 = 693. ¡PERFECTO!" },
        { title: "Patrón Repdigit", description: "99 (repetición de 9s), 198, 297, 396, 495... ¡El reconocimiento visual est fácil!" },
      ],
      100: [
        { title: "Relación 10×10", description: "100=10×10=10². Multiplier pair 100: ajoute dos ceros Ã  la fin. 7×100: ¡700!" },
        { title: "Siempre Termina en 00", description: "Todos los múltiplos de 100 terminan en 00: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000." },
        { title: "Base del systÃ¨me dÃ©cimal", description: "100=10². Sistema de centenas, cálculos de porcentajes, ¡base para entender números decimales!" },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Pensar que 1×1=2", solution: "Recuerda: tout ce qui se multiplie por 1 est igual a sí mismo. 1 groupe de 1 est solo 1." },
        { mistake: "Confundir con la addition", solution: "Multiplier pair 1 est diferente de sumar. 5+1=6, pero 5×1=5." },
      ],
      2: [
        { mistake: "Confundir 2×6=12 con 2×7=14", solution: "utilise contar de dos en dos: 2, 4, 6, 8, 10, 12, 14. Cuenta cuidadosamente sin saltarte." },
        { mistake: "Confundirse con números grandes", solution: "Descompón: 2×8 est solo 8+8. doubler est addition simple." },
      ],
      3: [
        { mistake: "Confundir 3×6=18 con 3×7=21", solution: "Recuerda el patrón +3: después de 18 viene 21. Cuenta de tres en tres para verificar." },
        { mistake: "Confundir 3×8=24 con 3×9=27", solution: "utilise el astuce de addition de dígitos: 24 (2+4=6) y 27 (2+7=9), sigue el patrón 3-6-9." },
      ],
      4: [
        { mistake: "Pensar que 4×7=24 (en lugar de 28)", solution: "Recuerda: 4×6=24, entonces 4×7 doit ser 4 más, est decir 28." },
        { mistake: "Confundir con la table de 2", solution: "la table de 4 est siempre el doble de la table de 2. Verifica duplicando." },
      ],
      5: [
        { mistake: "Confundir el orden (25 antes de 20)", solution: "El patrón est consistente: 5, 10, 15, 20, 25. Cada uno augmente en 5." },
        { mistake: "Pensar que 5×impair siempre termina en 5", solution: "En realidad 5×pair termina en 0, 5×impair termina en 5." },
      ],
      6: [
        { mistake: "Confundir 6×7=42 con 6×8=48", solution: "¡Esta est una pareja difícil! Recuerda: 6×7=42 (rima 'siete seis'), luego ajoute 6: 48." },
        { mistake: "Confundir 6×9=54 con 6×8=48", solution: "utilise la table de 6: 6×8=48, luego +6=54. O calcula 6×9 como 60-6=54." },
        { mistake: "Confundir con la table de 3", solution: "la table de 6 est siempre el doble de la table de 3. 3×4=12, entonces 6×4=24." },
      ],
      7: [
        { mistake: "Confundir 7×8=56 con 7×6=42", solution: "¡Estos sont los más difíciles! astuce de memoria: '5-6-7-8' (56=7×8). O desde 7×7=49, luego +7=56." },
        { mistake: "Confundir 7×9=63 con 7×8=56", solution: "Patrón: 7×8=56, luego +7=63. O addition de dígitos: 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "Saltarse ComplÃ¨temente la table de 7", solution: "Aunque el 7 parezca difícil, se peut apprendre con práctica. Empieza con pasos pequeños: memoriza los fáciles 7×1, 7×2, 7×5, 7×10." },
      ],
      8: [
        { mistake: "Confundir 8×7=56 con 8×8=64", solution: "forme fácil de memorizar 8×8=64: 'ocho ocho 64' o '8²=64'." },
        { mistake: "Confundir 8×9=72 con 8×8=64", solution: "Comienza desde 8×8=64, luego +8=72. O 80-8=72 (10×8 menos 8)." },
        { mistake: "Confundir con la table de 4", solution: "El 8 est siempre el doble del 4. 4×6=24, entonces 8×6=48. Verifica duplicando." },
      ],
      9: [
        { mistake: "Confundir 9×8=72 con 9×7=63", solution: "utilise el astuce de los dedos o addition de dígitos: 72 (7+2=9), 63 (6+3=9). Recuerda que 72>63." },
        { mistake: "Aplicar mal el astuce de los dedos", solution: "Orden correcto: Dedos izquierdos 1-5, dedos derechos 6-10. Los dedos a la izquierda del dedo doblado sont decenas, los de la derecha sont unidades." },
        { mistake: "Confundir 9×9=81 con 9×8=72", solution: "9×9=81 est especial: 'nueve nueve 81' o '9²=81'. addition de dígitos: 81 (8+1=9), 72 (7+2=9)." },
      ],
      10: [
        { mistake: "Olvidar el cero", solution: "El recordatorio más fácil: cuando multipliez por 10, SOLO ajoute un cero Ã  la fin. 6×10=60, 25×10=250." },
        { mistake: "ajouter demasiados ceros", solution: "Multiplier pair 10 ajoute SOLO un cero. No 100 (dos ceros), 1000 (tres ceros), solo 10 (un cero)." },
      ],
      11: [
        { mistake: "Pensar que 11×12=121 (en lugar de 132)", solution: "El patrón de dígitos dobles solo funciona de 11×1 a 11×9. 11×10=110, 11×12=132." },
        { mistake: "Aplicar mal el astuce de addition de dígitos", solution: "23×11: addition los dígitos (2+3=5), colócalo en el medio: 253. Si la addition >9, il y a acarreo: 67×11: 6_(6+7=13)_7 = 6_(13)_7 = 737." },
        { mistake: "Pensar que 11×11=111", solution: "11×11=121, no 111. Cada múltiplo de 11 ajoute 11 al anterior: 99+11=110, 110+11=121." },
      ],
      12: [
        { mistake: "Confundir 12×8=84 con 12×9=108", solution: "12×8=96 (8 docenas), 12×9=108 (9 docenas). 84 en realidad est 12×7. Verifica contando docenas." },
        { mistake: "Confundir 12 con 10", solution: "12×5=60, 10×5=50. El 12 est siempre 20% más que 10 (10 más 2)." },
      ],
      13: [
        { mistake: "Confundir 13×7=91 con 13×8=104", solution: "13×7=91, 13×8=104. La diferencia est 13. utilise la estrategia 10+3: 70+21=91, 80+24=104." },
        { mistake: "Confundir 13 con 3 o 30", solution: "13×4=52, no 3×4=12. Tampoco 30×4=120. El 13 est exactamente 10+3." },
      ],
      14: [
        { mistake: "Pensar que 14×7=98 (¡correcto est 14×7=98!)", solution: "¡14×7=98 est correcto! Pero no olvides 14×8=112 (98+14=112). Recuerda que est el doble de la table de 7." },
        { mistake: "Confundir 14×6=72 con 14×6=84", solution: "14×6=84 est correcto (7×6=42, ×2=84). 72 en realidad est 12×6 o 8×9." },
      ],
      15: [
        { mistake: "Pensar que 15×6=80 (en lugar de 90)", solution: "15×6=90 (1.5 docenas). 80 en realidad est 16×5. Calcula 15×6 como 3×6=18, luego ×5=90 o 5×6=30, luego ×3=90." },
        { mistake: "Confundir 15×4=50", solution: "15×4=60, no 50. Recuerda que 15 minutes×4 = 1 heure (60 minutes)." },
      ],
      16: [
        { mistake: "Confundir 16×6=84 con 16×6=96", solution: "16×6=96 est correcto (8×6=48, ×2=96). 84 en realidad est 14×6 o 12×7." },
        { mistake: "Confundir 16 con 6", solution: "16×4=64, no 6×4=24. 16 est muy diferente de 6. Recuerda que 16=2⁴." },
      ],
      17: [
        { mistake: "Confundir 17×6=102 con 17×7=119", solution: "Estrategia 20-3: 17×6=120-18=102, 17×7=140-21=119. O 10+7: 60+42=102, 70+49=119." },
        { mistake: "Confundir 17×8=126 con 17×9=153", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 en realidad est 18×7." },
      ],
      18: [
        { mistake: "Confundir 18×7=126 con 18×8=144", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). La diferencia est 18." },
        { mistake: "Confundir 18×6=108 con 18×6=104", solution: "18×6=108 est correcto (6×6=36, ×3 o 9×6=54, ×2). 104 en realidad est 13×8." },
      ],
      19: [
        { mistake: "Pensar que 19×5=100 (en lugar de 95)", solution: "19×5=95, no 100 (20×5=100). 19 est 1 menos que 20, así que 100-5=95." },
        { mistake: "Confundir 19×6=114 con 19×7=133", solution: "Estrategia 20-1: 19×6=120-6=114, 19×7=140-7=133. Cada vez soustraction el multiplicador de 20." },
      ],
      20: [
        { mistake: "Pensar que 20×7=120 (en lugar de 140)", solution: "20×7=140, no 120 (20×6=120). 10×7=70, double: 140. O 7×20=7×10×2." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 20 doivent terminar en 0: 20, 40, 60, 80, 100... ¡20×8=160, no 16!" },
      ],
      21: [
        { mistake: "Pensar que 21×5=100 (en lugar de 105)", solution: "21×5=105, no 100. 20×5=100, más 5 más: 105. O 3×7×5 = 21×5 = 105." },
        { mistake: "Confundir 21×7=140 con 21×7=147", solution: "21×7=147 est correcto (3×7×7 o 140+7). 140 en realidad est 20×7." },
        { mistake: "Confundir 21 con 12", solution: "21×4=84, no 12×4=48. Presta atención al orden de los dígitos: 21 est muy diferente de 12." },
      ],
      22: [
        { mistake: "Pensar que 22×5=100 (en lugar de 110)", solution: "22×5=110, no 100. 11×5=55, double: 110. O 20×5=100, más 2×5=10: 110." },
        { mistake: "Confundir 22×9=198 con 22×9=188", solution: "22×9=198 est correcto (11×9=99, ×2). 188 est otro cálculo." },
      ],
      23: [
        { mistake: "Pensar que 23×4=82 (en lugar de 92)", solution: "23×4=92, no 82. 20×4=80, más 3×4=12: 92. 82 est otro rÃ©sultat." },
        { mistake: "Confundir 23×5=105 con 23×5=115", solution: "23×5=115 est correcto (20×5=100, 3×5=15, total 115). 105 en realidad est 21×5." },
      ],
      24: [
        { mistake: "Pensar que 24×5=100 (en lugar de 120)", solution: "24×5=120, no 100. Un día a 24 heures, 5 días = 120 heures. O 12×10=120." },
        { mistake: "Confundir 24×7=158 con 24×7=168", solution: "24×7=168 est correcto (4×6×7 o 3×8×7). 158 est otro rÃ©sultat." },
      ],
      25: [
        { mistake: "Pensar que 25×8=180 (en lugar de 200)", solution: "25×8=200, no 180. 25×4=100, entonces 25×8=200. O 5×5×8 = 25×8 = 200." },
        { mistake: "Adivinar incorrectamente los últimos dos dígitos", solution: "¡Los múltiplos de 25 siempre terminan en 25, 50, 75 o 00. No peut ser otra cosa!" },
      ],
      26: [
        { mistake: "Confundir 26×5=120 con 26×5=130", solution: "26×5=130 est correcto (13×5=65, ×2). 120 en realidad est 24×5." },
        { mistake: "Confundir 26 con 16 o 36", solution: "26×4=104, no 16×4=64 o 36×4=144. Lee los dígitos cuidadosamente." },
      ],
      27: [
        { mistake: "Pensar que 27×4=98 (en lugar de 108)", solution: "27×4=108, no 98. 30×4=120, menos 3×4=12: 108. O 9×4=36, ×3=108." },
        { mistake: "Confundir 27×7=179 con 27×7=189", solution: "27×7=189 est correcto (30×7=210, menos 3×7=21: 189). 179 est otro rÃ©sultat." },
      ],
      28: [
        { mistake: "Pensar que 28×5=130 (en lugar de 140)", solution: "28×5=140, no 130. 4×7×5 = 20×7 = 140. O 14×10=140." },
        { mistake: "Confundir 28×9=242 con 28×9=252", solution: "28×9=252 est correcto (4×7×9 o 30×9 menos 2×9). 242 est otro rÃ©sultat." },
      ],
      29: [
        { mistake: "Pensar que 29×5=140 (en lugar de 145)", solution: "29×5=145, no 140. 30×5=150, menos 5: 145. 140 en realidad est 28×5." },
        { mistake: "Confundir 29×7=203 con 29×7=193", solution: "29×7=203 est correcto (30×7=210, menos 7). 193 est otro cálculo." },
      ],
      30: [
        { mistake: "Pensar que 30×7=200 (en lugar de 210)", solution: "30×7=210, no 200 (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 30 doivent terminar en 0: 30, 60, 90, 120, 150... ¡30×8=240, no 24!" },
      ],
      31: [
        { mistake: "Pensar que 31×5=145 (en lugar de 155)", solution: "31×5=155, no 145. 30×5=150, más 5: 155. 145 en realidad est 29×5." },
        { mistake: "Confundir 31×7=207 con 31×7=217", solution: "31×7=217 est correcto (30×7=210, más 7). 207 est otro rÃ©sultat." },
      ],
      32: [
        { mistake: "Pensar que 32×5=150 (en lugar de 160)", solution: "32×5=160, no 150. 16×5=80, double: 160. O 32×10=320, la mitad est 160." },
        { mistake: "Confundir 32×7=214 con 32×7=224", solution: "32×7=224 est correcto (16×7=112, ×2). 214 est otro cálculo." },
      ],
      33: [
        { mistake: "Pensar que 33×4=122 (en lugar de 132)", solution: "33×4=132, no 122. 11×4=44, ×3=132. O 30×4=120, más 3×4=12: 132." },
        { mistake: "Confundir 33×9=297 con 33×9=287", solution: "33×9=297 est correcto (11×9=99, ×3). 287 est otro rÃ©sultat." },
      ],
      34: [
        { mistake: "Pensar que 34×5=160 (en lugar de 170)", solution: "34×5=170, no 160. 17×5=85, double: 170. 160 en realidad est 32×5." },
        { mistake: "Confundir 34×8=262 con 34×8=272", solution: "34×8=272 est correcto (17×8=136, ×2). 262 est otro rÃ©sultat." },
      ],
      35: [
        { mistake: "Pensar que 35×6=200 (en lugar de 210)", solution: "35×6=210, no 200. 5×6=30, 7×6=42, 30×7=210 o 5×42=210." },
        { mistake: "Confundir 35×8=270 con 35×8=280", solution: "35×8=280 est correcto (5×8=40, 7×8=56, 40×7=280). 270 en realidad est 27×10." },
      ],
      36: [
        { mistake: "Pensar que 36×5=170 (en lugar de 180)", solution: "36×5=180, no 170. 6×5=30, ×6=180. O 18×10=180. 170 en realidad est 34×5." },
        { mistake: "Confundir 36×7=242 con 36×7=252", solution: "36×7=252 est correcto (6×7=42, ×6 o 9×7=63, ×4). 242 est otro rÃ©sultat." },
      ],
      37: [
        { mistake: "Pensar que 37×5=175 (en lugar de 185)", solution: "37×5=185, no 175. 40×5=200, menos 3×5=15: 185. 175 en realidad est 35×5." },
        { mistake: "Calcular incorrectamente después de 37×3=111", solution: "37×3=111, 37×6=222, 37×9=333. ¡Cada múltiplo de 3 est repdigit! 37×7=259, 37×8=296." },
      ],
      38: [
        { mistake: "Pensar que 38×5=180 (en lugar de 190)", solution: "38×5=190, no 180. 19×5=95, double: 190. 180 en realidad est 36×5." },
        { mistake: "Confundir 38×9=332 con 38×9=342", solution: "38×9=342 est correcto (19×9=171, ×2 o 40×9=360, menos 2×9=18). 332 est otro rÃ©sultat." },
      ],
      39: [
        { mistake: "Pensar que 39×5=185 (en lugar de 195)", solution: "39×5=195, no 185. 40×5=200, menos 5: 195. 185 en realidad est 37×5." },
        { mistake: "Confundir 39×8=302 con 39×8=312", solution: "39×8=312 est correcto (40×8=320, menos 8). 302 est otro rÃ©sultat." },
      ],
      40: [
        { mistake: "Pensar que 40×7=270 (en lugar de 280)", solution: "40×7=280, no 270. 4×7=28, ajoute un 0: 280. O 10×7=70, ×4=280." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 40 doivent terminar en 0: 40, 80, 120, 160, 200... ¡40×9=360, no 36!" },
      ],
      41: [
        { mistake: "Pensar que 41×5=200 (en lugar de 205)", solution: "41×5=205, no 200. 40×5=200, más 5: 205. Siempre recuerda ajouter ese 1 extra." },
        { mistake: "Confundir 41×9=360 con 41×9=369", solution: "41×9=369 est correcto (40×9=360, más 9). 360 en realidad est 40×9." },
      ],
      42: [
        { mistake: "Pensar que 42×5=200 (en lugar de 210)", solution: "42×5=210, no 200. 6×5=30, 7×5=35, 30+35=65... O 40×5=200, más 2×5=10: 210." },
        { mistake: "Confundir 42×8=326 con 42×8=336", solution: "42×8=336 est correcto (6×8=48, 7×8=56 o 40×8=320, más 16). 326 est otro rÃ©sultat." },
      ],
      43: [
        { mistake: "Pensar que 43×5=205 (en lugar de 215)", solution: "43×5=215, no 205. 40×5=200, más 3×5=15: 215. 205 en realidad est 41×5." },
        { mistake: "Confundir 43×9=377 con 43×9=387", solution: "43×9=387 est correcto (40×9=360, más 3×9=27). 377 est otro rÃ©sultat." },
      ],
      44: [
        { mistake: "Pensar que 44×5=210 (en lugar de 220)", solution: "44×5=220, no 210. 11×5=55, ×4=220. O 40×5=200, más 4×5=20: 220." },
        { mistake: "Confundir 44×9=386 con 44×9=396", solution: "44×9=396 est correcto (11×9=99, ×4 o 40×9=360, más 4×9=36). 386 est otro rÃ©sultat." },
      ],
      45: [
        { mistake: "Pensar que 45×5=220 (en lugar de 225)", solution: "45×5=225, no 220. 9×5=45, ×5=225. O 40×5=200, más 5×5=25: 225." },
        { mistake: "Confundir 45×8=350 con 45×8=360", solution: "45×8=360 est correcto (9×8=72, ×5 o 5×8=40, ×9). 350 est otro rÃ©sultat." },
      ],
      46: [
        { mistake: "Pensar que 46×5=225 (en lugar de 230)", solution: "46×5=230, no 225. 23×5=115, ×2=230. O 50×5=250, menos 4×5=20: 230." },
        { mistake: "Confundir 46×9=404 con 46×9=414", solution: "46×9=414 est correcto (23×9=207, ×2 o 50×9=450, menos 4×9=36). 404 est otro rÃ©sultat." },
      ],
      47: [
        { mistake: "Pensar que 47×5=230 (en lugar de 235)", solution: "47×5=235, no 230. 50×5=250, menos 3×5=15: 235. 230 en realidad est 46×5." },
        { mistake: "Confundir 47×9=413 con 47×9=423", solution: "47×9=423 est correcto (50×9=450, menos 3×9=27). 413 est otro rÃ©sultat." },
      ],
      48: [
        { mistake: "Pensar que 48×5=230 (en lugar de 240)", solution: "48×5=240, no 230. 6×5=30, 8×5=40, 30×8=240. O 50×5=250, menos 2×5=10: 240." },
        { mistake: "Confundir 48×9=422 con 48×9=432", solution: "48×9=432 est correcto (6×9=54, ×8 o 50×9=450, menos 2×9=18). 422 est otro rÃ©sultat." },
      ],
      49: [
        { mistake: "Pensar que 49×5=240 (en lugar de 245)", solution: "49×5=245, no 240. 50×5=250, menos 5: 245. O 7×5=35, ×7=245." },
        { mistake: "Confundir 49×9=431 con 49×9=441", solution: "49×9=441 est correcto (50×9=450, menos 9). Además 441=21² (número carrÃ©). 431 est otro rÃ©sultat." },
      ],
      50: [
        { mistake: "Pensar que 50×7=340 (en lugar de 350)", solution: "50×7=350, no 340. 5×7=35, ajoute un 0: 350. O 100×7=700, ÷2=350." },
        { mistake: "Olvidar el cero", solution: "Los múltiplos impairs de 50 terminan en 50, los pairs en 0: 50, 100, 150, 200, 250... ¡50×8=400, no 40!" },
      ],
      51: [
        { mistake: "Pensar que 51×5=250 (en lugar de 255)", solution: "51×5=255, no 250. 50×5=250, más 5: 255. Siempre recuerda ajouter ese 1 extra." },
        { mistake: "Confundir 51×9=450 con 51×9=459", solution: "51×9=459 est correcto (50×9=450, más 9). 450 en realidad est 50×9." },
      ],
      52: [
        { mistake: "Pensar que 52×5=250 (en lugar de 260)", solution: "52×5=260, no 250. 13×5=65, ×4=260. O 50×5=250, más 2×5=10: 260." },
        { mistake: "Confundir 52×9=458 con 52×9=468", solution: "52×9=468 est correcto (13×9=117, ×4 o 50×9=450, más 18). 458 est otro rÃ©sultat." },
      ],
      53: [
        { mistake: "Pensar que 53×5=255 (en lugar de 265)", solution: "53×5=265, no 255. 50×5=250, más 3×5=15: 265. 255 en realidad est 51×5." },
        { mistake: "Confundir 53×9=467 con 53×9=477", solution: "53×9=477 est correcto (50×9=450, más 3×9=27). 467 est otro rÃ©sultat." },
      ],
      54: [
        { mistake: "Pensar que 54×5=260 (en lugar de 270)", solution: "54×5=270, no 260. 6×5=30, 9×5=45, 30×9=270. O 50×5=250, más 4×5=20: 270." },
        { mistake: "Confundir 54×9=476 con 54×9=486", solution: "54×9=486 est correcto (6×9=54, ×9 o 60×9=540, menos 6×9=54). 476 est otro rÃ©sultat." },
      ],
      55: [
        { mistake: "Pensar que 55×5=270 (en lugar de 275)", solution: "55×5=275, no 270. 11×5=55, ×5=275. O 50×5=250, más 5×5=25: 275." },
        { mistake: "Confundir 55×9=485 con 55×9=495", solution: "55×9=495 est correcto (11×9=99, ×5 o 60×9=540, menos 5×9=45). 485 est otro rÃ©sultat." },
      ],
      56: [
        { mistake: "Pensar que 56×5=270 (en lugar de 280)", solution: "56×5=280, no 270. 7×5=35, 8×5=40, 35×8=280. O 60×5=300, menos 4×5=20: 280." },
        { mistake: "Confundir 56×9=494 con 56×9=504", solution: "56×9=504 est correcto (7×9=63, ×8 o 60×9=540, menos 4×9=36). 494 est otro rÃ©sultat." },
      ],
      57: [
        { mistake: "Pensar que 57×5=280 (en lugar de 285)", solution: "57×5=285, no 280. 60×5=300, menos 3×5=15: 285. 280 en realidad est 56×5." },
        { mistake: "Confundir 57×9=503 con 57×9=513", solution: "57×9=513 est correcto (60×9=540, menos 3×9=27). 503 est otro rÃ©sultat." },
      ],
      58: [
        { mistake: "Pensar que 58×5=280 (en lugar de 290)", solution: "58×5=290, no 280. 29×5=145, ×2=290. O 60×5=300, menos 2×5=10: 290." },
        { mistake: "Confundir 58×9=512 con 58×9=522", solution: "58×9=522 est correcto (29×9=261, ×2 o 60×9=540, menos 2×9=18). 512 est otro rÃ©sultat." },
      ],
      59: [
        { mistake: "Pensar que 59×5=290 (en lugar de 295)", solution: "59×5=295, no 290. 60×5=300, menos 5: 295. ¡Muy simple!" },
        { mistake: "Confundir 59×9=521 con 59×9=531", solution: "59×9=531 est correcto (60×9=540, menos 9). 531 también est 9×59. 521 est otro rÃ©sultat." },
      ],
      60: [
        { mistake: "Pensar que 60×7=410 (en lugar de 420)", solution: "60×7=420, no 410. 6×7=42, ajoute un 0: 420. O 10×7=70, ×6=420." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 60 doivent terminar en 0: 60, 120, 180, 240, 300, 360, 420... ¡60×9=540, no 54!" },
      ],
      61: [
        { mistake: "Pensar que 61×5=300 (en lugar de 305)", solution: "61×5=305, no 300. 60×5=300, más 5: 305. Siempre recuerda ajouter ese 1 extra." },
        { mistake: "Confundir 61×9=540 con 61×9=549", solution: "61×9=549 est correcto (60×9=540, más 9). 540 en realidad est 60×9." },
      ],
      62: [
        { mistake: "Pensar que 62×5=300 (en lugar de 310)", solution: "62×5=310, no 300. 31×5=155, ×2=310. O 60×5=300, más 2×5=10: 310." },
        { mistake: "Confundir 62×9=548 con 62×9=558", solution: "62×9=558 est correcto (31×9=279, ×2 o 60×9=540, más 18). 548 est otro rÃ©sultat." },
      ],
      63: [
        { mistake: "Pensar que 63×5=305 (en lugar de 315)", solution: "63×5=315, no 305. 7×5=35, 9×5=45, 35×9=315. O 60×5=300, más 3×5=15: 315." },
        { mistake: "Confundir 63×9=557 con 63×9=567", solution: "63×9=567 est correcto (7×9=63, ×9 o 60×9=540, más 27). 557 est otro rÃ©sultat." },
      ],
      64: [
        { mistake: "Pensar que 64×5=310 (en lugar de 320)", solution: "64×5=320, no 310. 8×5=40, ×8=320. O 60×5=300, más 4×5=20: 320." },
        { mistake: "Confundir 64×9=566 con 64×9=576", solution: "64×9=576 est correcto (8×9=72, ×8 o 60×9=540, más 36). Además 576=24². 566 est otro rÃ©sultat." },
      ],
      65: [
        { mistake: "Pensar que 65×5=320 (en lugar de 325)", solution: "65×5=325, no 320. 13×5=65, ×5=325. O 60×5=300, más 5×5=25: 325." },
        { mistake: "Confundir 65×9=575 con 65×9=585", solution: "65×9=585 est correcto (13×9=117, ×5 o 70×9=630, menos 5×9=45). 575 est otro rÃ©sultat." },
      ],
      66: [
        { mistake: "Pensar que 66×5=325 (en lugar de 330)", solution: "66×5=330, no 325. 11×5=55, ×6=330. O 60×5=300, más 6×5=30: 330." },
        { mistake: "Confundir 66×9=584 con 66×9=594", solution: "66×9=594 est correcto (11×9=99, ×6 o 70×9=630, menos 4×9=36). 584 est otro rÃ©sultat." },
      ],
      67: [
        { mistake: "Pensar que 67×5=330 (en lugar de 335)", solution: "67×5=335, no 330. 70×5=350, menos 3×5=15: 335. 330 en realidad est 66×5." },
        { mistake: "Confundir 67×9=593 con 67×9=603", solution: "67×9=603 est correcto (70×9=630, menos 3×9=27). 593 est otro rÃ©sultat." },
      ],
      68: [
        { mistake: "Pensar que 68×5=330 (en lugar de 340)", solution: "68×5=340, no 330. 17×5=85, ×4=340. O 70×5=350, menos 2×5=10: 340." },
        { mistake: "Confundir 68×9=602 con 68×9=612", solution: "68×9=612 est correcto (17×9=153, ×4 o 70×9=630, menos 2×9=18). 602 est otro rÃ©sultat." },
      ],
      69: [
        { mistake: "Pensar que 69×5=340 (en lugar de 345)", solution: "69×5=345, no 340. 70×5=350, menos 5: 345. ¡Muy simple!" },
        { mistake: "Confundir 69×9=611 con 69×9=621", solution: "69×9=621 est correcto (70×9=630, menos 9). 621=3×207. 611 est otro rÃ©sultat." },
      ],
      70: [
        { mistake: "Pensar que 70×7=480 (en lugar de 490)", solution: "70×7=490, no 480. 7×7=49, ajoute un 0: 490. O 10×7=70, ×7=490." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 70 doivent terminar en 0: 70, 140, 210, 280, 350, 420, 490... ¡70×9=630, no 63!" },
      ],
      71: [
        { mistake: "Pensar que 71×5=350 (en lugar de 355)", solution: "71×5=355, no 350. 70×5=350, más 5: 355. Siempre recuerda ajouter ese 1 extra." },
        { mistake: "Confundir 71×9=630 con 71×9=639", solution: "71×9=639 est correcto (70×9=630, más 9). 630 en realidad est 70×9." },
      ],
      72: [
        { mistake: "Pensar que 72×5=350 (en lugar de 360)", solution: "72×5=360, no 350. 8×5=40, 9×5=45, 40×9=360. O 70×5=350, más 2×5=10: 360." },
        { mistake: "Confundir 72×9=638 con 72×9=648", solution: "72×9=648 est correcto (8×9=72, ×9 o 80×9=720, menos 72). 638 est otro rÃ©sultat." },
      ],
      73: [
        { mistake: "Pensar que 73×5=355 (en lugar de 365)", solution: "73×5=365, no 355. 70×5=350, más 3×5=15: 365. ¡Además 365=número de días en un año!" },
        { mistake: "Confundir 73×9=647 con 73×9=657", solution: "73×9=657 est correcto (70×9=630, más 3×9=27). 647 est otro rÃ©sultat." },
      ],
      74: [
        { mistake: "Pensar que 74×5=360 (en lugar de 370)", solution: "74×5=370, no 360. 37×5=185, ×2=370. O 75×5=375, menos 5: 370." },
        { mistake: "Confundir 74×9=656 con 74×9=666", solution: "74×9=666 est correcto (37×9=333, ×2 o 75×9=675, menos 9). 666 est un número repdigit. 656 est otro rÃ©sultat." },
      ],
      75: [
        { mistake: "Pensar que 75×5=370 (en lugar de 375)", solution: "75×5=375, no 370. 15×5=75, ×5=375. O 25×5=125, ×3=375." },
        { mistake: "Confundir 75×9=665 con 75×9=675", solution: "75×9=675 est correcto (25×9=225, ×3 o 80×9=720, menos 5×9=45). 675=3³×5². 665 est otro rÃ©sultat." },
      ],
      76: [
        { mistake: "Pensar que 76×5=370 (en lugar de 380)", solution: "76×5=380, no 370. 19×5=95, ×4=380. O 80×5=400, menos 4×5=20: 380." },
        { mistake: "Confundir 76×9=674 con 76×9=684", solution: "76×9=684 est correcto (19×9=171, ×4 o 80×9=720, menos 4×9=36). 684 est otro rÃ©sultat." },
      ],
      77: [
        { mistake: "Pensar que 77×5=380 (en lugar de 385)", solution: "77×5=385, no 380. 7×5=35, 11×5=55, 35×11=385. O 80×5=400, menos 3×5=15: 385." },
        { mistake: "Confundir 77×9=683 con 77×9=693", solution: "77×9=693 est correcto (7×9=63, ×11 o 80×9=720, menos 3×9=27). 693=7×9×11. 683 est otro rÃ©sultat." },
      ],
      78: [
        { mistake: "Pensar que 78×5=380 (en lugar de 390)", solution: "78×5=390, no 380. 13×5=65, 6×5=30, 65×6=390. O 80×5=400, menos 2×5=10: 390." },
        { mistake: "Confundir 78×9=692 con 78×9=702", solution: "78×9=702 est correcto (13×9=117, ×6 o 80×9=720, menos 2×9=18). 702 est otro rÃ©sultat." },
      ],
      79: [
        { mistake: "Pensar que 79×5=390 (en lugar de 395)", solution: "79×5=395, no 390. 80×5=400, menos 5: 395. ¡Muy simple!" },
        { mistake: "Confundir 79×9=701 con 79×9=711", solution: "79×9=711 est correcto (80×9=720, menos 9). 711 est otro rÃ©sultat." },
      ],
      80: [
        { mistake: "Pensar que 80×7=550 (en lugar de 560)", solution: "80×7=560, no 550. 8×7=56, ajoute un 0: 560. O 10×7=70, ×8=560." },
        { mistake: "Olvidar el cero", solution: "Todos los múltiplos de 80 doivent terminar en 0: 80, 160, 240, 320, 400, 480, 560... ¡80×9=720, no 72!" },
      ],
      81: [
        { mistake: "Calcular 81 como 8×10+1 en lugar de 9×9", solution: "81=9×9. Ejemplo: 81×7 = (9×7)×9 = 63×9 = 567. ¡utilise la relación cuadrada!" },
        { mistake: "Error de addition en estrategia 80+1", solution: "81×7 = (80×7)+(1×7) = 560+7 = 567. ¡Calcula ambas partes cuidadosamente!" },
      ],
      82: [
        { mistake: "Complicar 82×4", solution: "82×4 = (80×4)+(2×4) = 320+8 = 328. ¡Descompone y addition!" },
        { mistake: "Pensar que 82 est impair", solution: "82=2×41, siempre pair. Todos sus múltiplos sont números pairs: 82, 164, 246..." },
      ],
      83: [
        { mistake: "Calcular incorrectamente 83×5", solution: "83×5 = (80×5)+(3×5) = 400+15 = 415. ¡Descompone y addition!" },
        { mistake: "Pensar que 83 est pair", solution: "83 est premier, solo divisible por 1 y 83. est impair y no divisible por 2." },
      ],
      84: [
        { mistake: "Complicar 84×5", solution: "84×5 = 420 (7×12×5=7×60). O (80×5)+(4×5)=400+20=420." },
        { mistake: "Olvidar los factores de 84", solution: "84=7×12=6×14=4×21=3×28. ¡Se peut calcular de múltiples maneras!" },
      ],
      85: [
        { mistake: "Calcular incorrectamente 85×4", solution: "85×4 = (80×4)+(5×4) = 320+20 = 340. O 85×4=17×20=340." },
        { mistake: "Olvidar el último dígito", solution: "Los múltiplos de 85 siempre terminan en 5 o 0: 85, 170, 255, 340, 425, 510..." },
      ],
      86: [
        { mistake: "Complicar 86×5", solution: "86×5 = (80×5)+(6×5) = 400+30 = 430. ¡Descompone y addition!" },
        { mistake: "Pensar que 86 est impair", solution: "86=2×43, siempre pair. Todos sus múltiplos sont números pairs: 86, 172, 258..." },
      ],
      87: [
        { mistake: "Calcular incorrectamente 87×5", solution: "87×5 = (90×5)-(3×5) = 450-15 = 435. ¡Restar desde 90 est más fácil!" },
        { mistake: "Pensar que 87 est premier", solution: "87=3×29, no est premier! est divisible por 3 (8+7=15, divisible exactamente por 3)." },
      ],
      88: [
        { mistake: "Complicar 88×5", solution: "88×5 = (80×5)+(8×5) = 400+40 = 440. O 88×5=11×40=440." },
        { mistake: "Calcular incorrectamente 88×11", solution: "88×11 = 88×10 + 88 = 880+88 = 968. ¡utilise la regla de Multiplier pair 11!" },
      ],
      89: [
        { mistake: "Calcular 89 sin redondear", solution: "89=90-1. Ejemplo: 89×7 = (90×7)-7 = 630-7 = 623. ¡MUY FÁCIL!" },
        { mistake: "Calcular 89 como 88+1", solution: "¡La estrategia 90-1 est mucho más fácil! 89×7: 90×7=630, luego soustraction 7: 623." },
      ],
      90: [
        { mistake: "Complicar 90×5", solution: "90×5 = 450 (9×50). ¡Solo 9×5=45, ajoute un 0!" },
        { mistake: "Olvidar el cero", solution: "90=9×10. Siempre ajoute 0 Ã  la fin: 90, 180, 270, 360, 450..." },
      ],
      91: [
        { mistake: "Calcular incorrectamente 91×5", solution: "91×5 = (90×5)+(1×5) = 450+5 = 455. ¡Descompone y addition!" },
        { mistake: "Pensar que 91 est premier", solution: "91=7×13, no est premier! est divisible por 7 y 13." },
      ],
      92: [
        { mistake: "Complicar 92×5", solution: "92×5 = (90×5)+(2×5) = 450+10 = 460. ¡Descompone y addition!" },
        { mistake: "Pensar que 92 est impair", solution: "92=2×46, siempre pair. Todos sus múltiplos sont números pairs: 92, 184, 276..." },
      ],
      93: [
        { mistake: "Calcular incorrectamente 93×5", solution: "93×5 = (90×5)+(3×5) = 450+15 = 465. ¡Descompone y addition!" },
        { mistake: "Pensar que 93 est premier", solution: "93=3×31, no est premier! est divisible por 3 (9+3=12, divisible exactamente por 3)." },
      ],
      94: [
        { mistake: "Complicar 94×5", solution: "94×5 = (100×5)-(6×5) = 500-30 = 470. ¡Restar desde 100 est más fácil!" },
        { mistake: "Pensar que 94 est impair", solution: "94=2×47, siempre pair. Todos sus múltiplos sont números pairs: 94, 188, 282..." },
      ],
      95: [
        { mistake: "Calcular incorrectamente 95×4", solution: "95×4 = (100×4)-(5×4) = 400-20 = 380. O 95×4=19×20=380." },
        { mistake: "Olvidar el último dígito", solution: "Los múltiplos de 95 siempre terminan en 5 o 0: 95, 190, 285, 380, 475, 570..." },
      ],
      96: [
        { mistake: "Complicar 96×5", solution: "96×5 = (100×5)-(4×5) = 500-20 = 480. O 96×5=12×40=480." },
        { mistake: "Olvidar los factores de 96", solution: "96=8×12=6×16=4×24=3×32. ¡Se peut calcular de múltiples maneras!" },
      ],
      97: [
        { mistake: "Calcular 97 sin redondear", solution: "97=100-3. Ejemplo: 97×7 = (100×7)-21 = 700-21 = 679. ¡MUY FÁCIL!" },
        { mistake: "Calcular 97 como 96+1", solution: "¡La estrategia 100-3 est mucho más fácil! 97×7: 100×7=700, luego soustraction 21: 679." },
      ],
      98: [
        { mistake: "Complicar 98×5", solution: "98×5 = (100×5)-(2×5) = 500-10 = 490. ¡Restar desde 100 est SÚPER FÁCIL!" },
        { mistake: "Pensar que 98 est impair", solution: "98=2×49, siempre pair. Todos sus múltiplos sont números pairs: 98, 196, 294..." },
      ],
      99: [
        { mistake: "Calcular 99 sin redondear", solution: "99=100-1. Ejemplo: 99×7 = (100×7)-7 = 700-7 = 693. ¡PERFECTA!" },
        { mistake: "Calcular 99 como 98+1", solution: "¡La estrategia 100-1 est mucho más fácil! 99×8: 100×8=800, luego soustraction 8: 792." },
      ],
      100: [
        { mistake: "Complicar 100×5", solution: "100×5 = 500! Solo ajoute dos ceros Ã  la fin: 5 → 500, 7 → 700!" },
        { mistake: "Olvidar los ceros", solution: "Multiplier pair 100: ajoute DOS ceros Ã  la fin. 100×9=900, ¡no 90!" },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Di cada multiplicación en voz alta: '1 por 1 est 1, 1 por 2 est 2...'",
        "Practica escribir la tabla une fois al día durante una semaine",
        "Busca el patrón: la respuesta siempre est el mismo número que el segundo número",
        "utilise tarjetas didácticas, aunque esta tabla generalmente se apprend muy rápido",
      ],
      2: [
        "Cuenta de dos en dos mientras caminas o subes escaleras: 2, 4, 6, 8...",
        "utilise tus dedos: sostén dedos en pairs y cuenta de dos en dos",
        "Practica doubler números en tu cabeza durante el día",
        "Dílo en voz alta: '2 por 5 est 5 más 5, lo que hace 10'",
      ],
      3: [
        "Cuenta rítmicamente de tres en tres: 3, 6, 9, 12, 15...",
        "utilise el astuce de los dedos: sostén dedos en groupes de 3",
        "Busca el patrón de addition de dígitos para verificar tus respuestas (repite 3-6-9)",
        "Practica 5-10 minutes diarios en lugar de una sesión larga",
      ],
      4: [
        "apprend primero la table de 2, luego double cada respuesta para obtener los 4s",
        "Cuenta de cuatro en cuatro: 4, 8, 12, 16, 20...",
        "utilise objetos en groupes de 4 para visualizar (patas de silla, ruedas de auto)",
        "Practica por separado los más difíciles (4×6, 4×7, 4×8, 4×9)",
      ],
      5: [
        "utilise tus dedos para contar de cinco en cinco—cada dedo representa 5",
        "Mira une horloge y cuenta en intervalos de 5 minutes",
        "Practica con argent: cuenta piÃ¨ces de 5 centavos",
        "Recuerda: multiplicadores pairs terminan en 0, impairs en 5",
      ],
      6: [
        "Memoriza la table de 3, luego double cada respuesta para encontrar los 6s",
        "Estrategia de la caja de Å“ufs: cuenta de seis en seis (6, 12, 18, 24...)",
        "Enfócate en los pairs difíciles: estudia 6×7=42, 6×8=48, 6×9=54 por separado",
        "Memoriza el patrón de unidades: 6, 2, 8, 4, 0 y repite",
        "Verifica usando ambas tablas del 2 y 3, ya que 6 est múltiplo de ambos",
      ],
      7: [
        "Memoriza el pair más difícil: 7×8=56 (rima 'cinco seis, siete ocho')",
        "Conéctalo con los días de la semaine: 7 días, 14 días (2 semaines), 21 días (3 semaines)",
        "Memoriza especialmente 7×7=49 (7²=49), calcula otros desde ahí",
        "astuce de dedos: Cuenta 7 dedos desde la izquierda, los restantes sont unidades, los contados sont decenas",
        "¡Solo practica 3-4 hechos reales al día. El 7 requiert paciencia!",
      ],
      8: [
        "Memoriza la table de 4, luego double cada respuesta para encontrar los 8s",
        "Memoriza especialmente 8×8=64 ('ocho ocho sesenta y cuatro')",
        "Cuenta de ocho en ocho: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "Cadena de duplicación: double el número (×2), luego otra vez (×4), luego otra vez (×8)",
        "Las unidades sont siempre pairs y descienden: 8, 6, 4, 2, 0 y repite",
      ],
      9: [
        "apprend el astuce de los dedos: utilise tus 10 dedos para mostrar la table de 9",
        "utilise la regla de addition de dígitos: addition los dígitos de la respuesta, siempre da 9",
        "soustraction desde 10: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "Memoriza especialmente 9×9=81 (9²=81)",
        "Patrón de decenas: En 9×n, el dígito de las decenas siempre est n-1",
      ],
      10: [
        "¡La regla más fácil: Solo ajoute un cero Ã  la fin!",
        "Cuenta de diez en diez: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Entiende la relación de valeur positionnelle: Multiplier pair 10 desplaza un dígito a la izquierda",
        "Practica con números grandes: 23×10=230, 47×10=470",
        "utilise esta tabla para verificar otras tablas (ej: 9×6 = 60-6)",
      ],
      11: [
        "Memoriza el patrón de dígitos dobles: 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Practica el astuce de addition de dígitos: 23×11 = 253 (2_[2+3]_3)",
        "Memoriza especialmente 11×11=121 y 11×12=132",
        "crÃ©e canción o rima: 'Once por cinco, cincuenta y cinco' (11×5=55)",
        "Encuentra un múltiplo de 11 dans la vie rÃ©elle cada día (11 años, 11 heures, etc.)",
      ],
      12: [
        "Practica contando docenas: cuenta cajas de Å“ufs (12, 24, 36...)",
        "Calcula 12 usando tabla del 3 o 4: 12=3×4, entonces 12×5 = 3×5×4 = 15×4 = 60",
        "utilise el reloj: 12×5=60 minutes (1 heure)",
        "Enfócate en los múltiplos más difíciles de 12: 12×7=84, 12×8=96, 12×9=108",
        "utilise 12 en vida diaria: mois, heures, docenas",
      ],
      13: [
        "utilise siempre la estrategia 10+3: 13×6 = 60+18 = 78",
        "Convierte la table de 13 en canción o encuentra un ritmo",
        "Enfócate en los pairs más difíciles: 13×7=91, 13×8=104, 13×9=117",
        "Practica 2-3 múltiplos diferentes de 13 cada día, no todos a la vez",
        "Trabaja hacia atrás: 130, 117, 104, 91, 78... (soustraction 13 desde 130)",
      ],
      14: [
        "Memoriza la table de 7, luego double cada respuesta",
        "utilise un calendario bisemanal: períodos de 14 días",
        "Memoriza especialmente 14×7=98 y 14×8=112",
        "utilise 14 para verificar la table de 7: 14×6=84, entonces 7×6=42",
        "Cuenta de catorce en catorce: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      15: [
        "Estrategia del reloj: 15 minutes = cuarto de heure. 15×4=60 minutes = 1 heure",
        "utilise tabla del 3 o 5: 15=3×5, entonces 15×4 = 3×4×5 = 12×5 = 60",
        "Sigue el patrón que termina en 0 o 5: 15, 30, 45, 60, 75, 90...",
        "Practica cálculo de propinas: cómo calcular 15% de propina (10%+5%)",
        "Memoriza los múltiplos más útiles de 15: 15×4=60, 15×6=90, 15×8=120",
      ],
      16: [
        "Cadena de duplicación: double el número (×2), otra vez (×4), otra vez (×8), otra vez (×16)",
        "Si conoces la table de 8, double cada rÃ©sultat: 8×7=56, entonces 16×7=112",
        "Memoriza especialmente 16×16=256 (2⁸=256)",
        "Relaciónalo con términos informáticos: 16 bits, sistema hexadecimal",
        "Cuenta de dieciséis en dieciséis: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      17: [
        "Perfecciona la estrategia 20-3: 17×n = 20n - 3n",
        "Descomposición 10+7: 17×6 = 60+42 = 102",
        "Practica diariamente los pairs más difíciles: 17×7=119, 17×8=136, 17×9=153",
        "Relaciónalo con 17 años de edad: qué pasa a los 17, qué pasa a los 34 (17×2)",
        "¡Ten paciencia! 17 est premier, requiert práctica",
      ],
      18: [
        "utilise tabla del 9 o 6: 18=2×9 o 18=3×6",
        "double la table de 9: 9×4=36, entonces 18×4=72",
        "Triplica la table de 6: 6×5=30, entonces 18×5=90",
        "Relaciónalo con mayoría de edad: 18, 36 (18×2), 54 (18×3)",
        "Cuenta de dieciocho en dieciocho: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      19: [
        "utilise siempre la estrategia 20-1: 19×n = 20n - n",
        "Ejemplo: 19×7 = 140-7 = 133. ¡Muy simple y efectivo!",
        "Descomposición 10+9: 19×4 = 40+36 = 76",
        "Practica los múltiplos más difíciles: 19×7=133, 19×8=152, 19×9=171",
        "apprend la table de 19 hacia atrás: 190, 171, 152, 133... para flexibilidad mental",
      ],
      20: [
        "Lo más fácil: multiplie por 10, luego double",
        "O: ajoute un cero Ã  la fin, luego double (MÉTODO CORRECTO! 7×20: 70 luego ×2=140)",
        "Método correcto: 7×10=70, 70×2=140 o 7×2=14, ajoute un 0: 140",
        "Cuenta rápidamente de veinte en veinte: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Practica con argent: cuenta billets de 20",
      ],
      21: [
        "utilise la estrategia 20+1: 21×n = 20n + n",
        "utilise la relación 3×7: ¿Conoces la table de 3? 3×6=18, 7×6=42, entonces 21×6=126",
        "Practica los múltiplos más difíciles: 21×7=147, 21×8=168, 21×9=189",
        "Relaciónalo con la mayoría de Ã¢ge lÃ©gal: ¿qué cambia a los 21 años?",
        "Cuenta de veintiuno en veintiuno: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      22: [
        "Memoriza la table de 11, luego double cada rÃ©sultat",
        "Relaciónalo con equipos de fútbol: 2 equipos = 22 jugadores",
        "Los múltiplos más fáciles primero: 22×5=110, 22×10=220",
        "Cuenta de veintidós en veintidós: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "Observa el patrón de dígitos dobles en los primeros 4 rÃ©sultats: 22, 44, 66, 88",
      ],
      23: [
        "utilise siempre la estrategia 20+3: 23×6 = 120+18 = 138",
        "O estrategia 25-2: 23×4 = 100-8 = 92",
        "Relaciónalo con cromosomas: Los humanos ont 23 pairs de cromosomas",
        "Practica diariamente los múltiplos más difíciles: 23×7=161, 23×8=184, 23×9=207",
        "23 est premier, así que ten paciencia y practica mucho",
      ],
      24: [
        "utilise la relación de heures: 24 heures×3 días = 72 heures",
        "Prueba múltiples métodos: 24=2×12, 3×8, 4×6. ¿Cuál est más fácil?",
        "Si conoces la table de 12, double: 12×7=84, entonces 24×7=168",
        "Cuenta por docenas: 24 = 2 docenas. 24×5 = 10 docenas = 120",
        "Cuenta de veinticuatro en veinticuatro: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      25: [
        "Sistema de cuartos: 25 = 100÷4. Entonces 25×4=100, 25×8=200",
        "Memoriza el patrón de los últimos dos dígitos: 25, 50, 75, 00 se repite",
        "Practica con argent: cuenta piÃ¨ces de 25 centavos",
        "Recuerda que est el carrÃ© de 5: 25=5×5",
        "Cálculo de porcentajes: 25% = 1/4. utilise esta relación",
      ],
      26: [
        "Si conoces la table de 13, double: 13×8=104, entonces 26×8=208",
        "Estrategia 25+1: 26×4 = 100+4 = 104",
        "Relaciónalo con el alfabeto: il y a 26 letras",
        "Cuenta de veintiséis en veintiséis: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "Practica los múltiplos más difíciles: 26×7=182, 26×9=234",
      ],
      27: [
        "utilise la estrategia 30-3: 27×n = 30n - 3n",
        "Si conoces la table de 9, triplícala: 9×6=54, así que 27×6=162",
        "Recuerda que est el cubo de 3: 27=3×3×3",
        "Cuenta de 27 en 27: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "Practica los múltiplos más difíciles: 27×7=189, 27×8=216, 27×9=243",
      ],
      28: [
        "utilise la relación 4×7: multiplie la table de 4 por 7",
        "O double 14: 14×5=70, entonces 28×5=140",
        "Relaciónalo con febrero: 28 días (año normal)",
        "Cuenta de veintiocho en veintiocho: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "Memoriza los múltiplos más útiles: 28×5=140, 28×7=196, 28×10=280",
      ],
      29: [
        "utilise la estrategia 30-1: 29×n = 30n - n",
        "Ejemplo: 29×8 = 240-8 = 232. ¡Muy fácil!",
        "Relaciónalo con año bisiesto: 29 días en febrero",
        "Cuenta de veintinueve en veintinueve: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "Practica los múltiplos más difíciles: 29×7=203, 29×9=261",
      ],
      30: [
        "Estrategia 3×10: multiplie por 10, luego por 3",
        "Ejemplo: 7×30 = 70×3 = 210 o 7×3=21, ajoute un 0: 210",
        "Relaciónalo con media heure: 30 minutes",
        "Días del mois: Muchos mois ont 30 días (abril, junio, septiembre, noviembre)",
        "Cuenta de treinta en treinta: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
      31: [
        "utilise la estrategia 30+1: 31×n = 30n + n",
        "Ejemplo: 31×8 = 240 + 8 = 248. ¡Muy simple y efectivo!",
        "Relaciónalo con el calendario: 31 días est la longitud máxima del mois",
        "Cuenta de treinta y uno en treinta y uno: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310",
        "Practica los múltiplos más difíciles: 31×7=217, 31×9=279",
      ],
      32: [
        "utilise la cadena de duplicación: double 16",
        "Ejemplo: 16×5=80, entonces 32×5=160",
        "Recuerda que est puissance de 2: 32=2×2×2×2×2",
        "Cuenta de treinta y dos en treinta y dos: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320",
        "Relaciónalo con términos informáticos: sistema de 32 bits",
      ],
      33: [
        "utilise la estrategia 3×11: triplica la table de 11",
        "O multiplie la table de 3 por 11: 3×7=21, 21×11=231, entonces 33×7=231",
        "Observa el patrón de repetición: 33, 66, 99 (primeros tres rÃ©sultats)",
        "Cuenta de treinta y tres en treinta y tres: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330",
        "Practica los múltiplos más difíciles: 33×7=231, 33×8=264, 33×9=297",
      ],
      34: [
        "Si conoces la table de 17, duplícala: 17×6=102, entonces 34×6=204",
        "Estrategia 35-1: 34×4 = 140-4 = 136",
        "O utilise 30+4: 34×5 = 150+20 = 170",
        "Cuenta de treinta y cuatro en treinta y cuatro: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340",
        "Memoriza los múltiplos más útiles: 34×5=170, 34×10=340",
      ],
      35: [
        "Estrategia 5×7: multiplie la table de 5 por 7 o viceversa",
        "Ejemplo: 35×4 = 5×4×7 = 20×7 = 140",
        "utilise el patrón del último dígito: siempre termina en 5 o 0",
        "Cuenta de treinta y cinco en treinta y cinco: 35, 70, 105, 140, 175, 210, 245, 280, 315, 350",
        "Cálculo de tiempo: 35 minutes = media heure + 5 minutes",
      ],
      36: [
        "Recuerda que est el carrÃ© de 6: 36=6×6",
        "Múltiples métodos: 36=4×9, 3×12, 2×18. ¿Cuál est más fácil?",
        "Si conoces la table de 9, multíplica por 4: 9×7=63, 63×4=252, entonces 36×7=252",
        "Cuenta de treinta y seis en treinta y seis: 36, 72, 108, 144, 180, 216, 252, 288, 324, 360",
        "Medición de ángulos: 360° est una vuelta ComplÃ¨te, 36° est la décima parte",
      ],
      37: [
        "utilise la estrategia 40-3: 37×n = 40n - 3n",
        "Memoriza la relación mágica con 111: 37×3=111, 37×6=222, 37×9=333!",
        "Ejemplo: 37×8 = 320 - 24 = 296",
        "Cuenta de treinta y siete en treinta y siete: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370",
        "Descubre el patrón de repetición: rÃ©sultats interesantes en cada múltiplo de 3",
      ],
      38: [
        "Si conoces la table de 19, duplícala: 19×7=133, entonces 38×7=266",
        "Estrategia 40-2: 38×6 = 240 - 12 = 228",
        "Cuenta de treinta y ocho en treinta y ocho: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380",
        "Practica los múltiplos más difíciles: 38×7=266, 38×9=342",
        "Relaciónalo con la temperatura corporal: 38°C est fiebre leve",
      ],
      39: [
        "Estrategia 40-1 est PERFECTA: 39×n = 40n - n",
        "Ejemplo: 39×7 = 280 - 7 = 273. ¡Muy fácil!",
        "O utilise 3×13: triplica la table de 13",
        "Cuenta de treinta y nueve en treinta y nueve: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390",
        "Practica los múltiplos más difíciles: 39×7=273, 39×8=312",
      ],
      40: [
        "Estrategia 4×10: multiplie por 10, luego por 4",
        "Ejemplo: 7×40 = 70×4 = 280 o 7×4=28, ajoute un 0: 280",
        "semaine laboral: 40 heures estándar de trabajo",
        "Cuenta de cuarenta en cuarenta: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
        "Cálculo porcentual: 40% = 2/5",
      ],
      41: [
        "Estrategia 40+1 est PERFECTA: 41×n = 40n + n",
        "Ejemplo: 41×7 = 280 + 7 = 287. ¡Muy fácil!",
        "Cuenta de cuarenta y uno en cuarenta y uno: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410",
        "Practica los múltiplos más difíciles: 41×7=287, 41×8=328",
        "Número premier: solo divisible por 1 y 41",
      ],
      42: [
        "utilise la relación 6×7: refuerza ambas tablas",
        "Cuenta de cuarenta y dos en cuarenta y dos: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420",
        "Múltiples métodos: 42=6×7=2×21=3×14. ¿Cuál est más fácil?",
        "Referencia a la Guía del Autoestopista: ¡42 est famoso en la cultura popular!",
        "Practica los múltiplos más difíciles: 42×7=294, 42×8=336",
      ],
      43: [
        "Prueba las stratÃ©gies 40+3 o 45-2",
        "Ejemplo: 43×6 = 240+18 = 258 o 270-12 = 258",
        "Cuenta de cuarenta y tres en cuarenta y tres: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430",
        "Practica los múltiplos más difíciles: 43×7=301, 43×8=344",
        "Número premier: un número especial que requiert stratÃ©gies creativas",
      ],
      44: [
        "Cuatro fois 11: cuadruplica la table de 11",
        "Ejemplo: 11×7=77, ×4=308, entonces 44×7=308",
        "Cuenta de cuarenta y cuatro en cuarenta y cuatro: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440",
        "Patrón de repetición: 44, 88 muestran patrón de dígitos dobles",
        "Practica los múltiplos más difíciles: 44×7=308, 44×9=396",
      ],
      45: [
        "Relación 5×9: vous pouvez utiliser cualquiera de las dos tablas",
        "Ejemplo: 45×7 = 9×7×5 = 63×5 = 315",
        "Cuenta de cuarenta y cinco en cuarenta y cinco: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450",
        "Ángulo: 45° est medio ángulo recto, importante en geometría",
        "Tiempo: 45 minutes = tres cuartos de heure (3/4 de heure)",
      ],
      46: [
        "El doble de 23: double la table de 23",
        "Ejemplo: 23×7=161, ×2=322, entonces 46×7=322",
        "stratÃ©gies 45+1 o 50-4: 46×5 = 225+5 = 230",
        "Cuenta de cuarenta y seis en cuarenta y seis: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460",
        "Biología: 46 cromosomas (23 pairs) en el ADN humano",
      ],
      47: [
        "Estrategia 50-3 est PERFECTA: 47×n = 50n - 3n",
        "Ejemplo: 47×7 = 350 - 21 = 329. ¡Muy fácil!",
        "Cuenta de cuarenta y siete en cuarenta y siete: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470",
        "Practica los múltiplos más difíciles: 47×7=329, 47×8=376",
        "Número premier: requiert stratÃ©gies mentales especiales",
      ],
      48: [
        "Múltiples métodos: 48=6×8=4×12=3×16=2×24",
        "Ejemplo: 48×5 = 12×20 = 240",
        "Cuenta de cuarenta y ocho en cuarenta y ocho: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480",
        "Tiempo: 48 heures = 2 días. 72 heures = 3 días",
        "Practica los múltiplos más difíciles: 48×7=336, 48×9=432",
      ],
      49: [
        "carrÃ© de 7: 49=7×7. Refuerza la table de 7",
        "Estrategia 50-1 MUY FÁCIL: 49×n = 50n - n",
        "Ejemplo: 49×7 = 350 - 7 = 343. ¡Simple!",
        "Cuenta de cuarenta y nueve en cuarenta y nueve: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490",
        "Número carrÃ©: 49=7² para cálculos de área en geometría",
      ],
      50: [
        "Estrategia 5×10: multiplie por 5, ajoute un 0",
        "Ejemplo: 8×50: 8×5=40, ajoute un 0: 400",
        "La mitad de 100: 50×7 = 350 (700÷2)",
        "Cuenta de cincuenta en cincuenta: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500",
        "Porcentaje: 50% = 1/2, la relación porcentual más importante",
      ],
      51: [
        "Estrategia 50+1 est PERFECTA: 51×n = 50n + n",
        "Ejemplo: 51×7 = 350 + 7 = 357. ¡Muy fácil!",
        "Cuenta de cincuenta y uno en cincuenta y uno: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510",
        "Relación 3×17: triplica la table de 17",
        "Practica los múltiplos más difíciles: 51×7=357, 51×8=408",
      ],
      52: [
        "Relación 4×13: cuadruplica la table de 13",
        "Ejemplo: 13×7=91, ×4=364, entonces 52×7=364",
        "Cuenta de cincuenta y dos en cincuenta y dos: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520",
        "Calendario: 52 semaines = 1 año. Para cálculos anuales",
        "Cartas: 52 cartas para Jeux y problÃ¨mes de probabilidad",
      ],
      53: [
        "Estrategia 50+3: 53×n = 50n + 3n",
        "Ejemplo: 53×6 = 300 + 18 = 318",
        "Cuenta de cincuenta y tres en cincuenta y tres: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530",
        "Practica los múltiplos más difíciles: 53×7=371, 53×8=424",
        "Número premier: requiert stratÃ©gies de cálculo creativas",
      ],
      54: [
        "Relación 6×9: vous pouvez utiliser cualquiera de las dos tablas",
        "Ejemplo: 54×5 = 9×5×6 = 45×6 = 270",
        "Cuenta de cincuenta y cuatro en cincuenta y cuatro: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540",
        "Múltiples métodos: 54=6×9=2×27=3×18",
        "Practica los múltiplos más difíciles: 54×7=378, 54×8=432",
      ],
      55: [
        "Relación 5×11: refuerza ambas tablas",
        "Ejemplo: 55×4 = 11×4×5 = 44×5 = 220",
        "Cuenta de cincuenta y cinco en cincuenta y cinco: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550",
        "Número triangular: 55 = 1+2+3+...+10, propriÃ©tÃ© matemática especial",
        "Practica los múltiplos más difíciles: 55×7=385, 55×9=495",
      ],
      56: [
        "Relación 7×8: ¡La multiplicación MÁS DIFÍCIL! Refuerza ambas",
        "Ejemplo: 56×5 = 7×5×8 = 35×8 = 280",
        "Cuenta de cincuenta y seis en cincuenta y seis: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560",
        "Alternativa: 56=4×14=2×28. Elige la forme más fácil",
        "Practica los múltiplos más difíciles: 56×7=392, 56×9=504",
      ],
      57: [
        "Estrategia 60-3 est PERFECTA: 57×n = 60n - 3n",
        "Ejemplo: 57×7 = 420 - 21 = 399. ¡Muy fácil!",
        "Cuenta de cincuenta y siete en cincuenta y siete: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570",
        "Relación 3×19: triplica la table de 19",
        "Practica los múltiplos más difíciles: 57×7=399, 57×8=456",
      ],
      58: [
        "Estrategia 60-2: 58×n = 60n - 2n",
        "Ejemplo: 58×6 = 360 - 12 = 348",
        "Cuenta de cincuenta y ocho en cincuenta y ocho: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580",
        "El doble de 29: double la table de 29",
        "Practica los múltiplos más difíciles: 58×7=406, 58×9=522",
      ],
      59: [
        "Estrategia 60-1 SÚPER FÁCIL: 59×n = 60n - n",
        "Ejemplo: 59×7 = 420 - 7 = 413. ¡PERFECTO!",
        "Cuenta de cincuenta y nueve en cincuenta y nueve: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590",
        "Tiempo: 59 minutes, 59 segundos - 1 menos que 60",
        "Practica los múltiplos más difíciles: 59×7=413, 59×8=472",
      ],
      60: [
        "Estrategia 6×10: multiplie por 6, ajoute un 0",
        "Ejemplo: 7×60: 7×6=42, ajoute un 0: 420",
        "Cuenta de sesenta en sesenta: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600",
        "Tiempo: 60 minutes=1 heure, 60 segundos=1 minuto",
        "Múltiples métodos: 60=6×10=5×12=4×15=3×20=2×30",
      ],
      61: [
        "Estrategia 60+1 est PERFECTA: 61×n = 60n + n",
        "Ejemplo: 61×7 = 420 + 7 = 427. ¡Muy fácil!",
        "Cuenta de sesenta y uno en sesenta y uno: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610",
        "Practica los múltiplos más difíciles: 61×7=427, 61×8=488",
        "Número premier: requiert stratÃ©gies de cálculo creativas",
      ],
      62: [
        "Estrategia 60+2: 62×n = 60n + 2n",
        "Ejemplo: 62×6 = 360 + 12 = 372",
        "Cuenta de sesenta y dos en sesenta y dos: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620",
        "El doble de 31: double la table de 31",
        "Practica los múltiplos más difíciles: 62×7=434, 62×9=558",
      ],
      63: [
        "Relación 7×9: refuerza ambas tablas",
        "Ejemplo: 63×5 = 9×5×7 = 45×7 = 315",
        "Cuenta de sesenta y tres en sesenta y tres: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630",
        "Alternativa: 63=3×21. Triplica la table de 21",
        "Practica los múltiplos más difíciles: 63×7=441, 63×8=504",
      ],
      64: [
        "carrÃ© de 8: 64=8×8=8². También 2⁶",
        "Ejemplo: 64×5 = 8×5×8 = 40×8 = 320",
        "Cuenta de sesenta y cuatro en sesenta y cuatro: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640",
        "Ajedrez: 8×8=64 casillas, aplicación geométrica",
        "Computación: arquitectura de 64 bits, contexto tecnológico",
      ],
      65: [
        "Relación 5×13: vous pouvez utiliser cualquiera de las dos tablas",
        "Ejemplo: 65×4 = 13×4×5 = 52×5 = 260",
        "Cuenta de sesenta y cinco en sesenta y cinco: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650",
        "vous pouvez utiliser las stratÃ©gies 60+5 o 70-5",
        "Practica los múltiplos más difíciles: 65×7=455, 65×9=585",
      ],
      66: [
        "Relación 6×11: refuerza ambas tablas",
        "Ejemplo: 66×5 = 11×5×6 = 55×6 = 330",
        "Cuenta de sesenta y seis en sesenta y seis: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660",
        "Patrón de repetición: 66 (6×11), patrón de la table de 11",
        "Practica los múltiplos más difíciles: 66×7=462, 66×9=594",
      ],
      67: [
        "Estrategia 70-3 est PERFECTA: 67×n = 70n - 3n",
        "Ejemplo: 67×7 = 490 - 21 = 469. ¡Muy fácil!",
        "Cuenta de sesenta y siete en sesenta y siete: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670",
        "Practica los múltiplos más difíciles: 67×7=469, 67×8=536",
        "Número premier: requiert stratÃ©gies mentales especiales",
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
        "Estrategia 7×10: multiplie por 7, ajoute un 0",
        "Ejemplo: 8×70: 8×7=56, ajoute un 0: 560",
        "Cuenta de setenta en setenta: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700",
        "Refuerza la table de 7: cada rÃ©sultat est 10 fois 7",
        "Múltiples métodos: 70=7×10=5×14=2×35",
      ],
      71: [
        "Estrategia 70+1 est PERFECTA: 71×n = 70n + n",
        "Ejemplo: 71×7 = 490 + 7 = 497. ¡Muy fácil!",
        "Cuenta de setenta y uno en setenta y uno: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710",
        "Practica los múltiplos más difíciles: 71×7=497, 71×8=568",
        "Número premier: requiert stratÃ©gies de cálculo creativas",
      ],
      72: [
        "Relación 8×9: refuerza ambas tablas",
        "Ejemplo: 72×5 = 9×5×8 = 45×8 = 360",
        "Cuenta de setenta y dos en setenta y dos: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720",
        "Múltiples métodos: 72=8×9=6×12=4×18=3×24",
        "Tiempo: 72 heures = 3 días. Aplicación práctica",
      ],
      73: [
        "Estrategia 70+3: 73×n = 70n + 3n",
        "Ejemplo: 73×5 = 350 + 15 = 365 (¡días del año!)",
        "Cuenta de setenta y tres en setenta y tres: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730",
        "Practica los múltiplos más difíciles: 73×7=511, 73×8=584",
        "Número premier: el 21º número premier, curiosidad matemática",
      ],
      74: [
        "Estrategia 75-1: 74×n = 75n - n",
        "Ejemplo: 74×5 = 375 - 5 = 370",
        "Cuenta de setenta y cuatro en setenta y cuatro: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740",
        "Relación 2×37: double la table de 37",
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
        "Relación 7×11: refuerza ambas tablas",
        "Ejemplo: 77×5 = 11×5×7 = 55×7 = 385",
        "Cuenta de setenta y siete en setenta y siete: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770",
        "Patrón de repetición: 77 (7×11), patrón especial",
        "Practica los múltiplos más difíciles: 77×7=539, 77×9=693",
      ],
      78: [
        "Estrategia 80-2: 78×n = 80n - 2n",
        "Ejemplo: 78×7 = 560 - 14 = 546",
        "Cuenta de setenta y ocho en setenta y ocho: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780",
        "Relación 6×13: vous pouvez utiliser cualquiera de las dos tablas",
        "Practica los múltiplos más difíciles: 78×7=546, 78×9=702",
      ],
      79: [
        "Estrategia 80-1 SÚPER FÁCIL: 79×n = 80n - n",
        "Ejemplo: 79×7 = 560 - 7 = 553. ¡PERFECTO!",
        "Cuenta de setenta y nueve en setenta y nueve: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790",
        "Practica los múltiplos más difíciles: 79×7=553, 79×8=632",
        "Número premier: 1 menos que 80, cálculo fácil",
      ],
      80: [
        "Estrategia 8×10: multiplie por 8, ajoute un 0",
        "Ejemplo: 7×80: 7×8=56, ajoute un 0: 560",
        "Cuenta de ochenta en ochenta: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800",
        "Refuerza la table de 8: cada rÃ©sultat est 10 fois 8",
        "Múltiples métodos: 80=8×10=4×20=5×16=2×40",
      ],
      81: [
        "utilise que est el carrÃ© de 9: 81=9×9",
        "Ejemplo: 81×5 = (9×5)×9 = 45×9 = 405",
        "Estrategia 80+1: 81×n = 80n + n. Ejemplo: 81×7 = 560+7 = 567",
        "Cuenta de ochenta y uno en ochenta y uno: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810",
        "Practica los múltiplos más difíciles: 81×7=567, 81×8=648, 81×9=729",
      ],
      82: [
        "Estrategia 80+2: 82×n = 80n + 2n",
        "Ejemplo: 82×6 = 480 + 12 = 492",
        "Cuenta de ochenta y dos en ochenta y dos: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820",
        "Relación 2×41: double la table de 41",
        "Practica los múltiplos más difíciles: 82×7=574, 82×9=738",
      ],
      83: [
        "utilise la estrategia 85-2 o 80+3",
        "Ejemplo: 83×6 = 510-12 = 498 o 480+18 = 498",
        "Cuenta de ochenta y tres en ochenta y tres: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830",
        "Número premier: requiert stratÃ©gies de cálculo creativas",
        "Practica los múltiplos más difíciles: 83×7=581, 83×8=664, 83×9=747",
      ],
      84: [
        "Relación 7×12: vous pouvez utiliser cualquiera de las dos tablas",
        "Ejemplo: 84×5 = 12×5×7 = 60×7 = 420",
        "Cuenta de ochenta y cuatro en ochenta y cuatro: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840",
        "Múltiples métodos: 84=7×12=6×14=4×21=3×28",
        "Practica los múltiplos más difíciles: 84×7=588, 84×9=756",
      ],
      85: [
        "Relación 5×17: vous pouvez utiliser ambas tablas, la del 5 y la del 17",
        "Ejemplo: 85×4 = 17×4×5 = 68×5 = 340",
        "Cuenta de ochenta y cinco en ochenta y cinco: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850",
        "Último dígito: siempre termina en 5 o 0",
        "stratÃ©gies 90-5 o 80+5: 85×6 = 540-30 = 510",
      ],
      86: [
        "Estrategia 90-4: 86×n = 90n - 4n",
        "Ejemplo: 86×6 = 540 - 24 = 516",
        "Cuenta de ochenta y seis en ochenta y seis: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860",
        "Relación 2×43: double la table de 43",
        "Practica los múltiplos más difíciles: 86×7=602, 86×9=774",
      ],
      87: [
        "Estrategia 90-3 est PERFECTA: 87×n = 90n - 3n",
        "Ejemplo: 87×7 = 630 - 21 = 609. ¡Muy fácil!",
        "Cuenta de ochenta y siete en ochenta y siete: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870",
        "Relación 3×29: triplica la table de 29",
        "Practica los múltiplos más difíciles: 87×7=609, 87×8=696, 87×9=783",
      ],
      88: [
        "Relación 8×11: vous pouvez utiliser cualquiera de las dos tablas",
        "Ejemplo: 88×5 = 11×5×8 = 55×8 = 440",
        "Cuenta de ochenta y ocho en ochenta y ocho: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880",
        "propriÃ©tÃ© de repetición: facilidad de reconocimiento visual (88)",
        "Múltiples métodos: 88=8×11=4×22=2×44",
      ],
      89: [
        "Estrategia 90-1 SÚPER FÁCIL: 89×n = 90n - n",
        "Ejemplo: 89×7 = 630 - 7 = 623. ¡PERFECTO!",
        "Cuenta de ochenta y nueve en ochenta y nueve: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890",
        "Practica los múltiplos más difíciles: 89×7=623, 89×8=712, 89×9=801",
        "Número premier: la estrategia 90-1 est el método más práctico",
      ],
      90: [
        "Estrategia 9×10: multiplie por 9, ajoute un 0",
        "Ejemplo: 7×90: 7×9=63, ajoute un 0: 630",
        "Cuenta de noventa en noventa: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900",
        "Refuerza la table de 9: cada rÃ©sultat est 10 fois 9",
        "Múltiples métodos: 90=9×10=3×30=5×18=6×15",
      ],
      91: [
        "Relación 7×13: vous pouvez utiliser cualquiera de las dos tablas",
        "Ejemplo: 91×5 = 13×5×7 = 65×7 = 455",
        "Estrategia 90+1: 91×n = 90n + n. Ejemplo: 91×7 = 630+7 = 637",
        "Cuenta de noventa y uno en noventa y uno: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910",
        "Practica los múltiplos más difíciles: 91×7=637, 91×8=728, 91×9=819",
      ],
      92: [
        "utilise la estrategia 90+2 o 100-8",
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
        "Estrategia 100-6 est PERFECTA: 94×n = 100n - 6n",
        "Ejemplo: 94×7 = 700 - 42 = 658. ¡Muy fácil!",
        "Cuenta de noventa y cuatro en noventa y cuatro: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940",
        "Relación 2×47: double la table de 47",
        "Practica los múltiplos más difíciles: 94×7=658, 94×8=752, 94×9=846",
      ],
      95: [
        "Relación 5×19: vous pouvez utiliser ambas tablas, la del 5 y la del 19",
        "Ejemplo: 95×4 = 19×4×5 = 76×5 = 380",
        "Cuenta de noventa y cinco en noventa y cinco: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950",
        "Último dígito: siempre termina en 5 o 0",
        "Estrategia 100-5: 95×6 = 600-30 = 570. ¡Muy práctico!",
      ],
      96: [
        "Relación 8×12: vous pouvez utiliser cualquiera de las dos tablas",
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
        "Número premier: la estrategia 100-3 est el método más práctico",
      ],
      98: [
        "Estrategia 100-2 MUY FÁCIL: 98×n = 100n - 2n",
        "Ejemplo: 98×7 = 700 - 14 = 686. ¡Perfecto!",
        "Cuenta de noventa y ocho en noventa y ocho: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980",
        "Relación 2×49: double la table de 49",
        "Practica los múltiplos más difíciles: 98×7=686, 98×8=784, 98×9=882",
      ],
      99: [
        "Estrategia 100-1 LA MÁS FÁCIL: 99×n = 100n - n",
        "Ejemplo: 99×7 = 700 - 7 = 693. ¡PERFECTO!",
        "Cuenta de noventa y nueve en noventa y nueve: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990",
        "Relación 9×11: vous pouvez utiliser cualquiera de las dos tablas",
        "Patrón de repetición: 99 proporciona facilidad de reconocimiento visual",
      ],
      100: [
        "¡LA TABLA MÁS FÁCIL! ajoute dos ceros Ã  la fin",
        "Ejemplo: 7×100 = 700. ¡Solo ajoute 00 después del 7!",
        "Cuenta de cien en cien: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
        "Relación 10×10: 10 fois la table de 10",
        "est la base para cálculos porcentuales: 100%=completo, ¡est la base de todo!",
      ],
    }
    return strategies[number] || [
      `Practica contar de ${number} en ${number} en voz alta`,
      "Escribe la tabla todos los días durante una semaine",
      "utilise tarjetas de memoria para probarte de forme aleatoria",
      "Practica 5-10 minutes diarios en lugar de estudiar mucho tiempo de une fois",
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
                <div className="text-xs text-slate-600">opÃ©rations</div>
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
              Esta página te ayudará a apprendre y entender <span className="font-semibold text-yellow-200">la Table de Multiplication del {number}</span>. 
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
                <span>pratiquer</span>
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
              ¿Qué Cubre la table de {number}?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            La Table de Multiplication del {number} cubre el producto del número {number} con todos los números del 1 al 10. 
            Esto te enseña <span className="font-bold text-indigo-600">10 opÃ©rations fundamentales</span> que te ayudarán mucho en la vida diaria y en temas matemáticos avanzados.
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
                la table de {number} a <span className="font-bold text-indigo-600">10 opÃ©rations de multiplicación</span>. 
                ¡Al entender los modÃ¨les de esta tabla, vous pouvez memorizar fácilmente estas opÃ©rations y calcularlas rápidamente!
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
                  ¿Qué signifie el Número {number} en la Multiplicación?
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
                        Cuando ves {number} × 4, piensa: "j'ai 4 groupes y cada groupe a {number} elementos." 
                        Entonces {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Por Qué est important apprendre la table de {number}
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
                  Tabla del {number}
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
            modÃ¨les en la table de {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            Entender los modÃ¨les rend el apprentissage sea más fácil y divertido. la table de {number} a 
            hermosos modÃ¨les que peuvent ayudarte a recordarla sin memorizar de memoria.
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
            Cómo pratiquer la table de {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            apprendre las tablas de multiplier requiert práctica consistente con las stratÃ©gies correctas. 
            Aquí il y a métodos comprobados para dominar específicamente la table de {number}:
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
            Errores Comunes al apprendre la table de {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Muchos estudiantes cometen errores similares al apprendre esta tabla. Ser consciente de estos errores comunes 
            te ayudará a evitarlos y apprendre de manera más efectiva.
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
            Tablas de multiplier Relacionadas
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            la table de {number} est parte de un sistema de apprentissage más amplio. 
            vous pouvez explorar otras tablas en el mismo Plage o pasar al siguiente número lógico.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/es/tablas-de-multiplier/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Número Anterior</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabla del {number - 1}
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
                href={`/es/tablas-de-multiplier/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Siguiente Número →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      Tabla del {number + 1}
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/es/tablas-de-multiplier/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Plage Superior</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Tablas del {rangeStart} al {rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Explora todas las tablas de multiplier en este Plage con herramientas de práctica y Jeux
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
