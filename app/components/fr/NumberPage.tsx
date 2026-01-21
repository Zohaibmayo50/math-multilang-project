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
              <title>Table de multiplication de ${number}</title>
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
              <h1>Table de multiplication de ${number}</h1>
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
        ctx.fillText(number + 'er-Einfoiseins', 300, 60)

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
            link.download = number + '-einfoiseins-multiplication de.png'
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
      1: "Mit 1 multiplizieren ist ein Spezialfall in der Mathematik. Lorsque vous eine beliebige nombre mit 1 multipliez, ist das rÃ©sultat toujours diese nombre selbst. Das nennt man die IdentitätspropriÃ©tÃ© der multiplication. Stell es dir so vor: 'comme viele groupes von etce qui ai-je?' Lorsque vous seulement 1 Gruppe hast, hast du exactement das, womit du avez commencÃ©.",
      2: "Mit 2 multiplizierensignifie, eine nombre zu doubler. Lorsque vous etce qui mit 2 multipliez, addierst du es zu lui-mÃªme. Das ist eine der pratiquesten multiplicationsoperationen, parce que wir im Alltag häufig choses doubler müssen—Schuhpaare zählen, Fahrradräder ou etce qui gleichmäßig entre deux personnes aufteilen.",
      3: "Mit 3 multiplizierensignifie, eine nombre dreifois zu nehmen. Du kannst es dir vorstellen, comme würdest du dieselbe nombre dreifois zu lui-mÃªme addieren. Diese Reihe ist wichtig, um Dreiecke, trios et tout zu verstehen, ce qui in Dreiergroupes kommt.",
      4: "Mit 4 multiplizieren ist comme zweifois doubler. Da 4 = 2 × 2 ist, kannst du eine nombre doubler und dann das rÃ©sultat nochfois doubler. Dasrend das Lernen der 4er-Reihe einfacher, Lorsque vous die 2er-Reihe schon kennst. Die nombre 4 kommt häufig in der Geometrie vor (Quadrate haben 4 Seiten) und bei der Zeitmessung (esdonne 4 Viertelstunden).",
      5: "Mit 5 multiplizieren erzeugt eines der schönsten ModÃ¨les dans la table de Mathematik. Alle Vielfachen von 5 enden auf 0 ou 5, ce qui diese Reihe sehr vorhersagbarrend. Es ist extrem nützlich zum Geld zählen (5-Cent-Münzen, 5-Euro-Scheine) und zum Ablesen der Uhrzeit (5-Minuten-Intervalle).",
      6: "Mit 6 multiplizierensignifie, sechs groupes einer nombre zu nehmen. Die 6 ist die erste 'echte' Einfoiseinsreihe, parce que sie nicht einfach Vielfache von 2 ou 3 ist. Da aber 6 = 2 × 3 ist, kannst du eine nombre mit 2 und dann mit 3 multiplizieren (ou umgekehrt), um mit 6 zu multiplizieren. Die nombre 6 kommt häufig in der Natur vor (Bienenwaben-Zellen) und im Alltag (Eierkartons, Würfelseiten).",
      7: "Mit 7 multiplizieren ist norfoiserweise eine der Reihen, mit denen Schüler am meisten Schcommerigkeiten haben, parce que 7 eine Primnombre ist und nicht einfach von anderen Reihen abgeleitet werden kann. Trotzdemdonne es schöne modÃ¨le in allen Vielfachen der 7, und sie kann mit Übung gelernt werden. Die 7 ist eine wichtige nombre bei Wochentagen, Kontinenten der Welt und vielen kulturellen Bezügen.",
      8: "Mit 8 multiplizieren ist comme dreifois doubler (8 = 2 × 2 × 2). Verdopple eine nombre, verdopple das rÃ©sultat nochfois, und verdopple es noch einfois—dann hast du mit 8 multipliziert. Diese Reihe ist leichter zu lernen, Lorsque vous die 2er- und 4er-Reihe gut kennst. Die 8 ist eine wichtige nombre in der Geometrie (Oktogone) und Musik (Oktave).",
      9: "Mit 9 multiplizierena eines der faszinierendsten ModÃ¨les dans la table de Mathematik. Lorsque vous die Ziffern aller Vielfachen von 9 addierst, ist das rÃ©sultat toujours durch 9 teilbar. Außerdem ist die Zehnerstelle von 9 × n toujours n-1. Diese Reihe kann auch mit dem Finger-Trick gelernt werden. Da 9 seulement 1 weniger comme 10 ist, kann sie auch mit der 10er-Reihe berechnet werden.",
      10: "Mit 10 multiplizieren ist eine der einfachsten Einfoiseinsreihen. Lorsque vous eine beliebige nombre mit 10 multipliez, hängst du einfach eine Null ans Ende. Dasforme die Grundlage unseres Dezifoissystems. Das Lernen der multiplication mit 10 lehrt Schüler das Konzept des Stellenwerts und comme man mit großen nombreen arbeitet. Die 10er-Reihe ist ein Bezugspunkt, um alle anderen Einfoiseinsreihen zu verstehen.",
      11: "Mit 11 multiplizierena eines der interessantesten ModÃ¨les dans la table de Mathematik. Lorsque vous einstellige nombreen mit 11 multipliez, ist das rÃ©sultat diese nombre zweifois commederholt (11×3=33, 11×7=77). Beim Multiplizieren von zweistelligen nombreen mit 11donne es auch ein schönes modÃ¨le: Du addierst die Ziffern und platzierst sie in der Mitte. Die 11 ist eine Primnombre unda besondere mathematische propriÃ©tÃ©en.",
      12: "Mit 12 multiplizieren ist eine der pratiquesten Reihen, parce que 12 durch viele nombreen teilbar ist (1, 2, 3, 4, 6, 12). Diese propriÃ©tÃ©rend die 12 sehr nützlich im Alltag – esdonne 12 Objekte in einem Dutzend, 12 Stunden auf einer Uhr, 12 Monate in einem Jahr. Da 12 = 3 × 4 = 2 × 6, kannst du diese Reihe auf mehrere Arten lernen.",
      13: "Mit 13 multiplizierendÃ©veloppe die modÃ¨leerkennung der Schüler. Die 13 ist eine Primnombre, daher kann sie nicht einfach aus anderen Reihen abgeleitet werden. Es ist jedoch sehr hilfreich, 13 comme 10+3 zu denken: Eine nombre mit 13 multiplizierensignifie, sie mit 10 zu multiplizieren und das rÃ©sultat der multiplication mit 3 zu addieren. Die 13 ist eine nombre mit besonderer Bedeutung in vielen Kulturen.",
      14: "Mit 14 multiplizieren ist das Doppelte der 7er-Reihe. Da 14 = 2 × 7, kannst du, Lorsque vous die 7er-Reihe kennst, jedes rÃ©sultat doubler, um die 14er-Reihe zu erhalten. Die 14 ist wichtig in der Wochenplanung (2 Wochen = 14 Tage) undmontre propriÃ©tÃ©en pairr nombreen.",
      15: "Mit 15 multiplizieren kombiniert die Vielfachen von 3 und 5. Da 15 = 3 × 5, trägt diese Reihe die propriÃ©tÃ©en beider nombreen. Alle Vielfachen von 15 sind sowohl durch 3 comme auch durch 5 teilbar. Da 15 Minuten eine Viertelstunde sind, wird es häufig in Zeitberechnungenutilise.",
      16: "Mit 16 multiplizieren ist die vierte Potenz von 2 (2×2×2×2=16). Dasrend es möglich, die 16er-Reihe durch Verdopplungsketten zu lernen. Du kannst 8 doubler, um 16 zu erhalten. In der Informatik ist die 16 eine wichtige nombre (Hexadezifoissystem) und erscheint auch häufig im Alltag.",
      17: "Mit 17 multiplizieren kann aufgrund ihrer PrimnombrepropriÃ©tÃ©en schcommerig sein. Die 17 kann nicht einfach aus anderen Reihen abgeleitet werden. Es erleichtert jedoch die Berechnungen, 17 comme 20-3 ou 10+7 zu denken. Das Lernen der 17er-ReihedÃ©veloppe Kopfrechenfähigkeiten und Problemlösungsstrategien.",
      18: "Mit 18 multiplizieren enthält viele Beziehungen. Da 18 = 2 × 9 = 3 × 6, kannst du diese Reihe auf mehrere Arten lernen. Das doubler der 9er-Reihe ou das Verdreifachen der 6er-Reihe ergibt die 18er-Reihe. Die 18 ist wichtig comme Volljährigkeitsalter in vielen Ländern.",
      19: "Mit 19 multiplizieren kann nicht aus anderen Reihen abgeleitet werden, parce que 19 eine Primnombre ist. Es ist jedoch sehr pratique, 19 comme 20-1 zu denken: Multipliziere eine nombre mit 20 und ziehe die nombre selbst ab. Diese Strategie erleichtert das Kopfrechnen der 19er-Reihe erheblich.",
      20: "Mit 20 multiplizieren ist die natürliche Erweiterung der 10er-Reihe. Lorsque vous eine beliebige nombre mit 20 multipliez, kannst du sie mit 10 multiplizieren und das rÃ©sultat doubler. ou füge einfach eine Null am Ende hinzu und verdopple. Die 20er-Reihe wird ständig in Geldberechnungen (20 Euro) und Messungen (20 Meter, 20 Kilogramm)utilise.",
      21: "Mit 21 multiplizierenrequiert das Verstehen der Beziehung 3×7. Da 21=3×7, trägt diese Reihe die propriÃ©tÃ©en der 3er- und 7er-Reihe. Die 21 ist wichtig comme gesetzliches Volljährigkeitsalter in vielen Ländern. 21 comme 20+1 zu denken erleichtert die Berechnungen: Multipliziere eine nombre mit 20 und addiere die nombre selbst.",
      22: "Mit 22 multiplizieren ist das Doppelte von 11 (22=2×11). Lorsque vous die 11er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 22er-Reihe zu erhalten. Da 22 auch 2×11 ist,montre es propriÃ©tÃ©en pairr nombreen. Die 22 erscheint häufig im Sport (Fußballmannschaft) und im täglichen Zählen.",
      23: "Mit 23 multiplizieren kann aufgrund ihrer PrimnombrepropriÃ©tÃ©en nicht aus anderen Reihen abgeleitet werden. Es erleichtert jedoch die Berechnungen, 23 comme 20+3 ou 25-2 zu denken. Die 23 ist eine wichtige nombre in der Biologie (Annombre der menschlichen Chromosomenpaare). Das Lernen der 23er-Reihe stärkt die Kopfrechenfähigkeiten.",
      24: "Mit 24 multiplizieren ist eine der vielseitigsten Reihen. Da 24=2×12=3×8=4×6, kann sie auf viele verschiedene Arten berechnet werden. Aufgrund der Tag-Stunden-Beziehung (24 Stunden) ist es eine grundlegende nombre in Zeitberechnungen. Die 24 sind auch 2 Dutzend und werden häufig beim Verpacken und Gruppierenutilise.",
      25: "Mit 25 multiplizieren nutzt die Beziehung 5×5 (5²). Da 25 das Quadrat von 5 ist,a es sehr besondere mathematische propriÃ©tÃ©en. Es ist wichtig in Geldberechnungen (25 Cent sind ein Viertel). Alle Vielfachen von 25 enden auf 25, 50, 75, 00 – ein sehr regelmäßiges modÃ¨le.",
      26: "Mit 26 multiplizieren ist das Doppelte von 13 (26=2×13). Lorsque vous die 13er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 26er-Reihe zu erhalten. Die 26 ist die Annombre der Buchstaben im englischen Alphabet. 26 comme 25+1 ou 30-4 zu denken erleichtert die Berechnungen.",
      27: "Mit 27 multiplizieren ist die dritte DreierPotenz (27=3³=3×3×3). Diese besondere Beziehungrend die 27 wichtig in Mathematik und Geometrie. Da 27=3×9, kann sie mithilfe der 3er- ou 9er-Reihe berechnet werden. 27 comme 30-3 zu denken erleichtert das Kopfrechnen.",
      28: "Mit 28 multiplizieren nutzt die Beziehung 4×7. Da 28=4×7=2×14, kann sie auf mehrere Arten gelernt werden. 28 Tage ist die Annombre der Tage im Februar (wenn es kein Schaltjahr ist). Die 28 ist auch eine vollkommene nombre (die Summe ihrer Teiler ist gleich lui-mÃªme: 1+2+4+7+14=28).",
      29: "Mit 29 multiplizierenrequiert besondere Strategien, da es eine Primnombre ist. Die pratiqueste Methode ist, 29 comme 30-1 zu denken: Multipliziere eine nombre mit 30 und ziehe die nombre selbst ab. 29 Tage ist die Annombre der Tage im Februar in Schaltjahren. Das Lernen der 29er-ReihedÃ©veloppe Problemlösungsfähigkeiten.",
      30: "Mit 30 multiplizieren nutzt die Beziehung 10×3. Um eine nombre mit 30 zu multiplizieren, kannst du sie mit 10 multiplizieren und dann das rÃ©sultat mit 3 multiplizieren. 30 Tage ist die Annombre der Tage in vielen Monaten (April, Juni, September, November). Die 30 ist auch eine halbe Stunde (30 Minuten). Die 30er-Reihe wird häufig in Prozentberechnungenutilise (30% Rabatt).",
      31: "Mit 31 multiplizierenrequiert besondere Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiqueste Methode ist, 31 comme 30+1 zu denken: Multipliziere eine nombre mit 30 und addiere die nombre selbst. 31 Tage ist die maxifoise Annombre von Tagen in vielen Monaten (Januar, März, Mai, Juli, August, Oktober, Dezember). Das Lernen der 31er-ReihedÃ©veloppe Kopfrechenfähigkeiten mit großen nombreen.",
      32: "Mit 32 multiplizieren ist die fünfte Potenz von 2 (2⁵=2×2×2×2×2=32). Dasrend es möglich, die 32 durch Verdopplungsketten zu lernen. Du kannst 16 doubler, um 32 zu erhalten. 32 Grad Fahrenheit ist der Gefrierpunkt von ce quiser. In der Informatik sind 32-Bit-Systeme verbreitet. Die Beziehungen 32=4×8=2×16 bieten verschiedene Rechenmethoden.",
      33: "Mit 33 multiplizieren nutzt die Beziehung 3×11. Lorsque vous die 11er-Reihe kennst, kannst du sie verdreifachen, ou Lorsque vous die 3er-Reihe kennst, kannst du sie mit 11 multiplizieren, um die 33er-Reihe zu finden. Die 33 ist die größte zweistellige Schnapsnombre (commederholung derselben Ziffern). Dass alle Ziffern der 33 gleich sind, erzeugt interessante modÃ¨le.",
      34: "Mit 34 multiplizieren ist das Doppelte von 17 (34=2×17). Lorsque vous die 17er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 34er-Reihe zu erhalten. Die Summe der Ziffern von 34 ist 7 (3+4=7), ce qui zu modÃ¨len führt, die mit der 7 verbunden sind. 34 comme 35-1 ou 30+4 zu denken erleichtert die Berechnungen.",
      35: "Mit 35 multiplizieren nutzt die Beziehung 5×7. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 35 ziemlich einfach. Alle Vielfachen von 35 enden auf 5 ou 0 (comme die Vielfachen von 5). 35 Minuten sind 5 Minuten mehr comme eine halbe Stunde. Die Beziehung 35=5×7 kombiniert die propriÃ©tÃ©en beider Reihen.",
      36: "Mit 36 multiplizieren ist eine der vielseitigsten Reihen. Da 36=6×6=4×9=3×12=2×18, kann sie auf viele verschiedene Arten berechnet werden. Die 36 ist das Quadrat von 6 (6²). Die 36 sind Vielfache eines vollen Dutzends (1 Dutzend = 12, 3 Dutzend = 36). Die 36a viele Teiler, ce qui sie sehr nützlich für Brücherend.",
      37: "Mit 37 multiplizierenrequiert besondere Strategien, da es eine Primnombre ist. 37 comme 40-3 ou 35+2 zu denken erleichtert die Berechnungen. Die 37a interessante Beziehungen zu Schnapsnombreen: 37×3=111. Diese besondere propriÃ©tÃ© der 37 kann für einige Rechentricksutilise werden.",
      38: "Mit 38 multiplizieren ist das Doppelte von 19 (38=2×19). Lorsque vous die 19er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 38er-Reihe zu erhalten. 38 comme 40-2 zu denken erleichtert das Kopfrechnen. 38 Grad Celsius ist leichtes Fieber für die menschliche Körpertemperatur.",
      39: "Mit 39 multiplizieren nutzt die Beziehung 3×13. Da 39=3×13, kann sie berechnet werden, indem man die 13er-Reihe verdreifacht ou die 3er-Reihe mit 13 multipliziert. Die pratiqueste Methode ist, 39 comme 40-1 zu denken. Die 39 ist eine interessante nombre, die sowohl durch 3 comme auch durch 13 teilbar ist.",
      40: "Mit 40 multiplizieren nutzt die Beziehung 4×10. Um eine nombre mit 40 zu multiplizieren, kannst du sie mit 10 multiplizieren und dann das rÃ©sultat mit 4 multiplizieren. ou multipliziere mit 4 und füge eine Null am Ende hinzu. Die 40 wird häufig im Alltagutilise: 40-Stunden-Arbeitswoche, 40 Jahre gilt comme mittleres Alter. Die 40er-Reihe ist sehr regelmäßig, parce que sie die 10er mit 4 multipliziert.",
      41: "Mit 41 multiplizierendÃ©veloppe Kopfrechenfähigkeiten aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiqueste Methode ist, 41 comme 40+1 zu denken: Multipliziere eine nombre mit 40 und addiere die nombre selbst. Die 41 ist eine Primnombre und kann nicht einfach aus anderen Reihen abgeleitet werden. Das Lernen der 41er-Reihe erhöht die Fähigkeit, schnell mit großen nombreen zu rechnen.",
      42: "Mit 42 multiplizieren ist eine der vielseitigsten Reihen. Da 42=6×7=2×21=3×14, kann sie auf mehrere Arten berechnet werden. Die 42 ist berühmt in der Science-Fiction-Kultur comme 'Die Antwort auf alles' (Per Anhalter durch die Galaxis). Da sie die 6er- und 7er-Reihe kombiniert, verstärkt sie beide.",
      43: "Mit 43 multiplizierenrequiert besondere Strategien, da es eine Primnombre ist. 43 comme 40+3 ou 45-2 zu denken erleichtert die Berechnungen. Die 43 ist eine Primnombre und seulement durch 1 und 43 teilbar. Das Lernen der 43er-ReihedÃ©veloppe die Fähigkeit, kreativ mit nombreen zu denken.",
      44: "Mit 44 multiplizieren ist vierfois die 11 (44=4×11). Lorsque vous die 11er-Reihe kennst, kannst du sie vervierfachen, ou die 4er-Reihe mit 11 multiplizieren, um sie zu berechnen. Die Beziehung 44=2×22 bietet auch eine andere Methode. Die 44montre ein schnapsnombreähnliches modÃ¨le unda propriÃ©tÃ©en pairr nombreen.",
      45: "Mit 45 multiplizieren nutzt die Beziehung 5×9. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 45 einfach. 45 Grad ist ein halber rechter Winkel, ein wichtiger Winkel in der Geometrie. 45 Minuten sind drei Viertel einer Stunde (45 Minuten = 0,75 Stunden). Alle Vielfachen von 45 enden auf 5 ou 0.",
      46: "Mit 46 multiplizieren ist das Doppelte von 23 (46=2×23). Lorsque vous die 23er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 46er-Reihe zu erhalten. 46 comme 45+1 ou 50-4 zu denken erleichtert die Berechnungen. Die 46 ist die Gesamtnombre der menschlichen Chromosomen (23 Paare).",
      47: "Mit 47 multiplizierenrequiert mentale Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die effektivsten Methoden sind, 47 comme 50-3 ou 45+2 zu denken. Die 47 ist eine Primnombre unda besondere mathematische propriÃ©tÃ©en. Das Lernen der 47er-ReihedÃ©veloppe die Fähigkeit, komfortabel mit komplexen nombreen zu arbeiten.",
      48: "Mit 48 multiplizierena viele Faktorbeziehungen. Da 48=6×8=4×12=3×16=2×24, kann sie auf mehrere Arten berechnet werden. Da 48 4-fois 12 ist, ist sie nützlich für Dutzendberechnungen (4 Dutzend). 48 Stunden = 2 Tage, wird häufig in Zeitberechnungen gefunden.",
      49: "Mit 49 multiplizieren ist das Quadrat von 7 (49=7×7=7²). Diese besondere Beziehungrequiert perfekte Kenntnis der 7er-Reihe. 49 comme 50-1 zu denken erleichtert das Kopfrechnen enorm. Da es eine Quadratnombre ist, ist die 49 wichtig in Geometrie und Flächenberechnungen.",
      50: "Mit 50 multiplizieren nutzt die Beziehung 5×10 und ist eine der einfachsten Reihen. Um eine nombre mit 50 zu multiplizieren, kannst du sie mit 5 multiplizieren und eine Null am Ende hinzufügen. ou Pensez-y comme die Hälfte von 100. Die 50 wird häufigutilise: halbes Jahrhundert und in Prozentberechnungen (50%=1/2).",
      51: "Mit 51 multiplizieren nutzt die Strategie 50+1. Um eine nombre mit 51 zu multiplizieren, multipliziere sie mit 50 und addiere die nombre selbst. Die Beziehung 51=3×17 bietet eine alternative Methode. Das Lernen der 51er-ReihedÃ©veloppe die Fähigkeit, mit nombreen nahe 50 zu rechnen.",
      52: "Mit 52 multiplizieren nutzt die Beziehung 4×13. Es ist die Annombre der Wochen in einem Jahr (52 Wochen) und die Annombre der Karten in einem Standard-Kartenspiel (52 Karten). Da 52=2×26, funktioniert auch das doubler der 26er-Reihe. 52 comme 50+2 zu denken erleichtert das Kopfrechnen. Diese Reihe ist sehr nützlich für Zeit- und Kalenderberechnungen.",
      53: "Mit 53 multiplizierendÃ©veloppe Kopfrechenstrategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiquesten Methoden sind, 53 comme 50+3 ou 55-2 zu denken. Die 53 ist eine Primnombre und seulement durch 1 und 53 teilbar. Das Lernen der 53er-Reihe erhöht die Fähigkeit, mit großen Primnombreen zu arbeiten und vertieft das mathematische Denken.",
      54: "Mit 54 multiplizieren ist eine der vielseitigsten Reihen. Da 54=6×9=2×27=3×18, kann sie auf viele verschiedene Arten berechnet werden. Da sie die 6er- und 9er-Reihe kombiniert, verstärkt sie beide. Viele Teiler zu habenrend sie nützlich für Bruchberechnungen.",
      55: "Mit 55 multiplizieren nutzt die Beziehung 5×11. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 55 einfach. Die Strategie 55=50+5 ist auch sehr pratique. Die 55 ist die Summe der nombreen von 1 bis 10 (1+2+3+...+10=55), diese besondere mathematische Beziehungrend sie interessant. Das modÃ¨le der 5 (endet auf 5 ou 0) erleichtert die Berechnung.",
      56: "Mit 56 multiplizieren nutzt die Beziehung 7×8. Da sie diese beiden schcommerigen Reihen kombiniert, verstärkt sie beide. Die Alternativen 56=4×14=2×28 bieten verschiedene Strategien. Die 56 ist die Gesamtannombre der Stunden in 7 Tagen mit 8-Stunden-Arbeitstagen (7×8). 56 comme 60-4 zu denken erleichtert auch das Kopfrechnen.",
      57: "Mit 57 multiplizieren nutzt die Beziehung 3×19. Die 19er-Reihe zu verdreifachen ou die 3er-Reihe mit 19 zu multiplizieren funktioniert. 57 comme 60-3 ou 55+2 zu denken erleichtert die Berechnung. Da 57=3×19, ist sie sowohl durch 3 comme auch durch 19 teilbar. Das Lernen der 57er-ReihedÃ©veloppe die Fähigkeit, mit großen mittleren nombreen zu arbeiten.",
      58: "Mit 58 multiplizieren ist das Doppelte von 29 (58=2×29). Lorsque vous die 29er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 58er-Reihe zu erhalten. 58 comme 60-2 ou 50+8 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Diese Reihe verstärkt Verdopplungs- und Annäherungsstrategien an runde nombreen.",
      59: "Mit 59 multiplizierenrequiert besondere Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en und Nähe zur 60. Die effektivste Methode ist, 59 comme 60-1 zu denken: Multipliziere eine nombre mit 60 und ziehe die nombre selbst ab. Die 59 ist eine Primnombre und seulement durch 1 und 59 teilbar. Die 59er-Reihe bietet Kontext für Minuten- und Zeitberechnungen (59 Minuten) aufgrund ihrer Nähe zur 60.",
      60: "Mit 60 multiplizieren nutzt die Beziehung 6×10 und ist sehr nützlich. Um eine nombre mit 60 zu multiplizieren, kannst du sie mit 6 multiplizieren und eine Null am Ende hinzufügen. Die 60 ist die Annombre der Minuten in einer Stunde, die Annombre der Sekunden in einer Minute und ein Sechstel der 360° eines Kreises. Esdonne viele Faktorbeziehungen comme 60=2×30=3×20=4×15=5×12. Diese Reihe ist kritisch für Zeitberechnungen.",
      61: "Mit 61 multiplizierenrequiert besondere Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en und Nähe zur 60. Die pratiqueste Methode ist, 61 comme 60+1 zu denken: Multipliziere eine nombre mit 60 und addiere die nombre selbst. Die 61 ist eine Primnombre und seulement durch 1 und 61 teilbar. Das Lernen der 61er-ReihedÃ©veloppe die Fähigkeit zum Kopfrechnen mit nombreen über 60.",
      62: "Mit 62 multiplizieren ist das Doppelte von 31 (62=2×31). Lorsque vous die 31er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 62er-Reihe zu erhalten. 62 comme 60+2 ou 65-3 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Diese Reihe ist nützlich für Verdopplungs- und Berechnungen nahe 60.",
      63: "Mit 63 multiplizieren nutzt die Beziehung 7×9. Da sie diese beiden wichtigen Reihen kombiniert, verstärkt sie beide. Die Alternative 63=3×21 bietet eine andere Strategie. 63 comme 60+3 ou 65-2 zu denken erleichtert das Kopfrechnen. Die 63 ist sehr vielseitig, parce que sie sowohl durch 7 comme auch durch 9 teilbar ist.",
      64: "Mit 64 multiplizieren ist eine Potenz von 2 (64=2⁶=8×8). Da die 64-Bit-Architektur in der Informatik verbreitet ist, ist sie im technologischen Zeitalter wichtig. Die Beziehung 64=8² (acht zum Quadrat) est essentielle zum Verständnis von Quadratnombreen. 64 comme 60+4 ou 65-1 zu denken erleichtert die Berechnung. Esdonne 64 Felder auf einem Schachbrett (8×8).",
      65: "Mit 65 multiplizieren nutzt die Beziehung 5×13. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 65 einfach. Die 65 wird in vielen Ländern comme Rentenalterutilise. 65 comme 60+5 ou 70-5 zu denken erleichtert das Kopfrechnen. Das modÃ¨le der 5 (endet auf 5 ou 0) erleichtert die Berechnung.",
      66: "Mit 66 multiplizieren nutzt die Beziehung 6×11 ou die Beziehung 2×33. Da 66=6×11,a sie schnapsnombreähnliche modÃ¨le. 66 comme 60+6 ou 70-4 zu denken erleichtert die Berechnung. Die 66 ist sowohl durch 6 comme auch durch 11 teilbar. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair.",
      67: "Mit 67 multiplizierendÃ©veloppe Kopfrechenstrategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiquesten Methoden sind, 67 comme 70-3 ou 65+2 zu denken. Die 67 ist eine Primnombre und seulement durch 1 und 67 teilbar. Das Lernen der 67er-Reihe erhöht die Fähigkeit, mit großen Primnombreen zu arbeiten.",
      68: "Mit 68 multiplizieren nutzt die Beziehung 4×17 ou die Beziehung 2×34. Die 17er-Reihe zu vervierfachen ou die 34er-Reihe zu doubler funktioniert. 68 comme 70-2 ou 60+8 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 68 ist sowohl durch 4 comme auch durch 17 teilbar.",
      69: "Mit 69 multiplizieren nutzt die Beziehung 3×23. Die 23er-Reihe zu verdreifachen ou die 3er-Reihe mit 23 zu multiplizieren funktioniert. Die einfachste Strategie ist, 69 comme 70-1 zu denken: Multipliziere eine nombre mit 70 und ziehe die nombre selbst ab. Da 69=3×23, ist sie sowohl durch 3 comme auch durch 23 teilbar. Diese Reihe ist nützlich für Berechnungen nahe 70.",
      70: "Mit 70 multiplizieren nutzt die Beziehung 7×10 und ist sehr nützlich. Um eine nombre mit 70 zu multiplizieren, kannst du sie mit 7 multiplizieren und eine Null am Ende hinzufügen. Die 70 wird mit der durchschnittlichen Lebenserwartung assoziiert (entre 70-80 in den meisten Ländern). Esdonne alternative Faktorbeziehungen comme 70=2×35=5×14. Diese Reihe verstärkt die 7er-Reihe.",
      71: "Mit 71 multiplizierendÃ©veloppe Kopfrechenstrategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiqueste Methode ist, 71 comme 70+1 zu denken: Multipliziere eine nombre mit 70 und addiere die nombre selbst. Die 71 ist eine Primnombre und seulement durch 1 und 71 teilbar. Das Lernen der 71er-ReihedÃ©veloppe die Fähigkeit, schnell mit großen Primnombreen zu rechnen.",
      72: "Mit 72 multiplizieren ist eine der vielseitigsten Reihen. Da 72=8×9=6×12=4×18=3×24=2×36, kann sie auf viele verschiedene Arten berechnet werden. Die 72 ist 3-fois die Annombre der Stunden an einem Tag (72 Stunden = 3 Tage). Viele Teiler zu habenrend sie extrem nützlich für Bruchberechnungen. Die 72 ist 6-fois 12 (6 Dutzend).",
      73: "Mit 73 multiplizierendÃ©veloppe PrimnombrepropriÃ©tÃ©en und Kopfrechenstrategien. Die pratiquesten Methoden sind, 73 comme 70+3 ou 75-2 zu denken. Die 73 ist eine Primnombre und seulement durch 1 und 73 teilbar. Die 73 ist auch die 21. Primnombre unda interessante mathematische propriÃ©tÃ©en.",
      74: "Mit 74 multiplizieren nutzt die Beziehung 2×37. Lorsque vous die 37er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 74er-Reihe zu erhalten. 74 comme 70+4 ou 75-1 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 74 ist sowohl durch 2 comme auch durch 37 teilbar.",
      75: "Mit 75 multiplizieren nutzt die Beziehungen 3×25=5×15. Die 75 ist drei Viertel von 100 (75%=3/4). Es kann auch comme 75=3×5×5 ausgedrückt werden. 75 comme 70+5 ou 80-5 zu denken erleichtert das Kopfrechnen. Das modÃ¨le der 5 (endet auf 5 ou 0) erleichtert die Berechnung. Sie wird häufig in Prozentberechnungenutilise (75%=¾).",
      76: "Mit 76 multiplizieren nutzt die Beziehung 4×19 ou die Beziehung 2×38. Die 19er-Reihe zu vervierfachen ou die 38er-Reihe zu doubler funktioniert. 76 comme 75+1 ou 80-4 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 76 ist sowohl durch 4 comme auch durch 19 teilbar.",
      77: "Mit 77 multiplizieren nutzt die Beziehung 7×11. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 77 einfach. Die 77montre ein schnapsnombreähnliches modÃ¨le (commederholung der 7en). 77 comme 80-3 ou 75+2 zu denken erleichtert die Berechnung. Da 77=7×11, ist sie sowohl durch 7 comme auch durch 11 teilbar.",
      78: "Mit 78 multiplizieren nutzt die Beziehungen 2×39=3×26=6×13. Sie kann auf mehrere Arten berechnet werden. 78 comme 80-2 ou 75+3 zu denken erleichtert das Kopfrechnen. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 78 ist durch 2, 3, 6, 13, 26, 39 teilbar.",
      79: "Mit 79 multiplizierenrequiert besondere Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die einfachste Strategie ist, 79 comme 80-1 zu denken: Multipliziere eine nombre mit 80 und ziehe die nombre selbst ab. Die 79 ist eine Primnombre und seulement durch 1 und 79 teilbar. Das Lernen der 79er-ReihecrÃ©e eine perfekte Grundlage für Berechnungen nahe 80.",
      80: "Mit 80 multiplizieren nutzt die Beziehung 8×10 und ist sehr nützlich. Um eine nombre mit 80 zu multiplizieren, kannst du sie mit 8 multiplizieren und eine Null am Ende hinzufügen. Esdonne alternative Faktorbeziehungen comme 80=2×40=4×20=5×16. Die 80 wird mit der oberen Grenze der durchschnittlichen Lebenserwartung assoziiert (entre 70-80 in den meisten Ländern). Diese Reihe verstärkt die 8er-Reihe.",
      81: "Mit 81 multiplizieren ist das Quadrat von 9 (81=9×9=9²). Diese besondere Beziehungrequiert perfekte Kenntnis der 9er-Reihe. Es ist auch interessant, dass 81=3⁴ (die vierte Dreierpotenz) ist. 81 comme 80+1 zu denken erleichtert das Kopfrechnen. Da 81 eine Quadratnombre ist, ist sie wichtig in Geometrie und Flächenberechnungen.",
      82: "Mit 82 multiplizieren nutzt die Beziehung 2×41. Lorsque vous die 41er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 82er-Reihe zu erhalten. 82 comme 80+2 ou 85-3 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 82 ist sowohl durch 2 comme auch durch 41 teilbar.",
      83: "Mit 83 multiplizierendÃ©veloppe Kopfrechenstrategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiquesten Methoden sind, 83 comme 80+3 ou 85-2 zu denken. Die 83 ist eine Primnombre und seulement durch 1 und 83 teilbar. Das Lernen der 83er-Reihe erhöht die Fähigkeit, mit großen Primnombreen zu arbeiten.",
      84: "Mit 84 multiplizieren ist eine der vielseitigsten Reihen. Da 84=7×12=6×14=4×21=3×28=2×42, kann sie auf viele verschiedene Arten berechnet werden. Die 84 ist 12-fois die Annombre der Stunden in einer Woche, ou 7-fois ein halber Tag von 12 Stunden. Viele Teiler zu habenrend sie nützlich für Bruchberechnungen.",
      85: "Mit 85 multiplizieren nutzt die Beziehung 5×17. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 85 einfach. Die Strategie 85=80+5 ou 90-5 ist auch sehr pratique. Das modÃ¨le der 5 (endet auf 5 ou 0) erleichtert die Berechnung. Die 85 ist sowohl durch 5 comme auch durch 17 teilbar.",
      86: "Mit 86 multiplizieren nutzt die Beziehung 2×43. Lorsque vous die 43er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 86er-Reihe zu erhalten. 86 comme 90-4 ou 85+1 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 86 ist sowohl durch 2 comme auch durch 43 teilbar.",
      87: "Mit 87 multiplizieren nutzt die Beziehung 3×29. Die 29er-Reihe zu verdreifachen ou die 3er-Reihe mit 29 zu multiplizieren funktioniert. 87 comme 90-3 ou 85+2 zu denken erleichtert die Berechnung. Da 87=3×29, ist sie sowohl durch 3 comme auch durch 29 teilbar.",
      88: "Mit 88 multiplizieren nutzt die Beziehung 8×11 ou die Beziehung 4×22. Die 88 ist eine Schnapsnombre (commederholung der 8en). Sie kann auch comme 88=2×44 ausgedrückt werden. 88 comme 90-2 ou 80+8 zu denken erleichtert das Kopfrechnen. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair.",
      89: "Mit 89 multiplizierenrequiert besondere Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die einfachste Strategie ist, 89 comme 90-1 zu denken: Multipliziere eine nombre mit 90 und ziehe die nombre selbst ab. Die 89 ist eine Primnombre und seulement durch 1 und 89 teilbar. Das Lernen der 89er-ReihecrÃ©e eine perfekte Grundlage für Berechnungen nahe 90.",
      90: "Mit 90 multiplizieren nutzt die Beziehung 9×10 und ist sehr nützlich. Um eine nombre mit 90 zu multiplizieren, kannst du sie mit 9 multiplizieren und eine Null am Ende hinzufügen. Esdonne viele Faktorbeziehungen comme 90=2×45=3×30=5×18=6×15. 90 Grad ist ein rechter Winkel, sehr wichtig in der Geometrie. Diese Reihe verstärkt die 9er-Reihe.",
      91: "Mit 91 multiplizieren nutzt die Beziehung 7×13. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 91 einfach. Dass 91=7×13 ist wichtig, um das Produkt von Primnombreen zu verstehen. 91 comme 90+1 zu denken erleichtert das Kopfrechnen. Sie ist sowohl durch 7 comme auch durch 13 teilbar.",
      92: "Mit 92 multiplizieren nutzt die Beziehung 4×23 ou die Beziehung 2×46. Die 23er-Reihe zu vervierfachen funktioniert. 92 comme 90+2 ou 100-8 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 92 ist sowohl durch 4 comme auch durch 23 teilbar.",
      93: "Mit 93 multiplizieren nutzt die Beziehung 3×31. Die 31er-Reihe zu verdreifachen ou die 3er-Reihe mit 31 zu multiplizieren funktioniert. 93 comme 90+3 ou 100-7 zu denken erleichtert die Berechnung. Da 93=3×31, ist sie sowohl durch 3 comme auch durch 31 teilbar.",
      94: "Mit 94 multiplizieren nutzt die Beziehung 2×47. Lorsque vous die 47er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 94er-Reihe zu erhalten. 94 comme 100-6 ou 90+4 zu denken erleichtert die Berechnung. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair. Die 94 ist sowohl durch 2 comme auch durch 47 teilbar.",
      95: "Mit 95 multiplizieren nutzt die Beziehung 5×19. Wenn beide Reihen bekannt sind, ist das Multiplizieren mit 95 einfach. Die Strategie 95=100-5 ist sehr pratique. Das modÃ¨le der 5 (endet auf 5 ou 0) erleichtert die Berechnung. Die 95 ist sowohl durch 5 comme auch durch 19 teilbar. Sie ist nützlich in Prozentberechnungen (95%).",
      96: "Mit 96 multiplizieren ist eine der vielseitigsten Reihen. Da 96=8×12=6×16=4×24=3×32=2×48, kann sie auf viele verschiedene Arten berechnet werden. Dass 96=2⁵×3 ist wichtig in Bezug auf Potenzen von 2. Viele Teiler zu habenrend sie nützlich für Bruchberechnungen.",
      97: "Mit 97 multiplizierenrequiert besondere Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die einfachste Strategie ist, 97 comme 100-3 zu denken: Multipliziere eine nombre mit 100 und ziehe 3-fois die nombre ab. Die 97 ist eine Primnombre und seulement durch 1 und 97 teilbar. comme die Primnombre, die der 100 am nächsten ist, erleichtert sie das Kopfrechnen sehr.",
      98: "Mit 98 multiplizieren nutzt die Beziehung 2×49. Lorsque vous die 49er-Reihe kennst, kannst du jedes rÃ©sultat doubler, um die 98er-Reihe zu erhalten. Die Beziehung 98=2×7² ist interessant. 98 comme 100-2 zu denken ist die einfachste Strategie. Da es eine pair nombre ist, sind alle ihre Vielfachen auch pair.",
      99: "Mit 99 multiplizieren nutzt die Beziehung 9×11. Die 99 ist eine Schnapsnombre (commederholung der 9en). 99 comme 100-1 zu denken ist die einfachste Strategie: Multipliziere eine nombre mit 100 und ziehe die nombre selbst ab. Da 99=9×11, ist sie sowohl durch 9 comme auch durch 11 teilbar. Es ist eine der einfachsten Reihen für das Kopfrechnen.",
      100: "Mit 100 multiplizieren ist eine der allereinfachsten Reihen. Um eine beliebige nombre mit 100 zu multiplizieren, füge einfach zwei Nullen am Ende hinzu. Die 100 ist die Grundlage unseres Dezifoissystems und wird ständig in Prozentberechnungenutilise. Das Verstehen der 100er-Reihe ist grundlegend für das Arbeiten mit größeren nombreen und das Dezifoissystem."
    }
    return meanings[number] || `Mit ${number} multiplizierensignifie, die nombre ${number} commederholt zu addieren. Jedes fois, Lorsque vous multipliez, zählst du groupes von ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "Die 1er-Einfoiseins-multiplication de ist die Grundlage aller multiplicationsoperationen. Sie lehrt Schüler, dass nombreen eine Identität haben: Bei multiplication mit 1 bleiben sie unverändert. Dieses Konzept est essentielle für das Verständnis späterer algebraischer propriÃ©tÃ©en. Obwohl es einfach erscheint,crÃ©e das Lernen dieser multiplication de Vertrauen und etabliert das modÃ¨le, dass multiplication geordnet und vorhersehbar ist.",
      2: "Die 2er-Einfoiseins-multiplication de ist in der Regel die erste echte Table de Multiplication, die Schüler lernen, und das aus gutem Grund. doubler ist ein natürliches Konzept, dem Kinder täglich begegnen. Das Lernen dieser multiplication derend Kopfrechnen viel schneller und bereitet Schüler auf pair nombreen, Brüche (Hälften) und grundlegende division vor. Viele Schüler empfinden sie comme die einfachste multiplication de, ce qui Vertrauen für schcommerigere multiplication dencrÃ©e.",
      3: "Die 3er-Einfoiseins-multiplication de schließt die Lücke entre einfachen und herausfordernden multiplication den. Sierequiert, dass Schüler über einfaches doubler hinausgehen und neue modÃ¨le erkennen. Diese multiplication de erscheint ständig in realen Kontexten comme Zählen in Dreiergroupes, Verstehen dreieckiger Formen und Arbeiten mit Zeit (drei Perioden pro Tag). Schüler, die die 3er-multiplication de lernen, zeigen, dass sie abstraktes Zählen beherrschen.",
      4: "Das Lernen der 4er-Einfoiseins-multiplication de verstärkt das Verständnis der Schüler für pair nombreen und geometrisches Denken. Da 4 das Doppelte von 2 ist, können Schüler die 2er-multiplication de comme Sprungbrett nutzen, ce qui mathematische Effizienz lehrt. Diese multiplication de ist notwendig zum Verstehen von Quadraten, Flächenberechnungen und Teilungen durch Viertel. Sie wird auch häufig in alltäglichen Situationen comme dem Zählen von Stuhlbeinen ou Autorädernutilise.",
      5: "Die 5er-Einfoiseins-multiplication de ist eine der pratiquesten und modÃ¨lereichsten. Schüler lieben sie, parce que jede Antwort auf 0 ou 5 endet, ce qui sie äußerst vorhersehbarrend. Diese multiplication de verbindet sich direkt mit Geld (in Fünfern zählen), Uhrzeiten (5-Minuten-Intervalle) und Messsystemen. Das Lernen der 5er-multiplication dedonne Schülern Vertrauen undmontre, dass Mathematik schöne, konsistente modÃ¨lea.",
      6: "Das Lernen der 6er-Einfoiseins-multiplication de ermöglicht Schülern den Übergang zu komplexeren multiplicationen. Dass 6 sowohl ein Vielfaches von 2 comme auch von 3 ist,montre Schülern die distributive propriÃ©tÃ© der multiplication. Diese multiplication de erscheint ständig im Alltag: Eierkartons zählen, WürfelJeux, Sechserpacks. Das Lernen der 6er-multiplication dedonne Schülern Vertrauen für die Arbeit mit größeren nombreen.",
      7: "Die 7er-Einfoiseins-multiplication de testet wirklich die Gedächtnis- und modÃ¨leerkennungsfähigkeiten der Schüler. Da 7 eine Primnombre ist, kann sie nicht einfach von anderen multiplication den abgeleitet werden, ce qui sie zu einer herausfordernden, aber lohnenden Lernerfahrungrend. Das Lernen der 7er-multiplication dedonne Schülern die Möglichkeit, Herausforderungen zu überwinden und neue Strategien zu entwickeln. Sie wird an vielen Stellenutilise, vom Zählen der Wochentage bis zu Kalenderberechnungen.",
      8: "Das Lernen der 8er-Einfoiseins-multiplication deaide Schülern, Verdopplungsstrategien zu verstärken. Da 8 = 2 × 2 × 2, können Schüler die 8er-multiplication de mithilfe der 2er- und 4er-multiplication den lernen. Diese multiplication de ist wichtig für Flächenberechnungen (8-seitige Figuren), Musiktheorie (Oktaven) und Informatik (8 Bits = 1 Byte). Das Lernen der 8er-multiplication dedÃ©veloppe mathematische Denkfähigkeiten.",
      9: "Die 9er-Einfoiseins-multiplication dea eines der faszinierendsten mathematischen modÃ¨le. Die Quersummenregel und der Finger-Trick zeigen Schülern die magische Seite der Mathematik. Das Lernen der 9er-multiplication de ist nicht seulement MÃ©morisation, es lehrt modÃ¨leerkennung und Verständnis mathematischer Beziehungen. Diese multiplication de ist perfekt zum Entwickeln von Kopfrechenfähigkeiten und zum Aufbau mathematischen Vertrauens.",
      10: "Die 10er-Einfoiseins-multiplication de ist grundlegend für das Lehren des Stellenwertkonzepts. Wenn Schüler lernen, mit 10 zu multiplizieren, beginnen sie zu verstehen, comme unser Dezifoissystem funktioniert. Diese multiplication de ist vital für Geldberechnungen, Umrechnungen entre Maßeinheiten und Arbeiten mit großen nombreen. Das Lernen der 10er-multiplication decrÃ©e eine solide Grundlage zum Verstehen aller anderen Table de Multiplicationn und verbessert enorm die Kopfrechenfähigkeiten.",
      11: "Die 11er-Einfoiseins-multiplication de ist perfekt zur Entwicklung von modÃ¨leerkennungsfähigkeiten. Das commederholungsmodÃ¨le, das beim Multiplizieren mit einstelligen nombreen entsteht (11×4=44),montre Schülern die Schönheit der Mathematik. Das Lernen der 11er-multiplication dedÃ©veloppe Kopfrechenstrategien und erhöht die Fähigkeit, nombreenmodÃ¨le zu erkennen. Diese multiplication decrÃ©e Vertrauen für die Arbeit mit großen nombreen.",
      12: "Die 12er-Einfoiseins-multiplication de ist eine der am häufigsten im Alltagutiliseen. 12 wird in vielen Plageen genutzt comme Dutzende zählen, Uhrzeiten lesen und Jahresplanung. Dass 12 viele Teilera (1,2,3,4,6,12),rend es ideal zum Verstehen von Brüchen und Verhältnissen. Das Lernen dieser multiplication de verbessert pratiquee mathematische Fähigkeiten erheblich.",
      13: "Die 13er-Einfoiseins-multiplication dedÃ©veloppe mathematische Widerstandsfähigkeit. comme Primnombredonne es keine einfachen Abkürzungen, ce qui echtes Verständnisrequiert. Das Lernen der 13er-multiplication de stärkt mentale Arithmetikfähigkeiten und lehrt, nombreen auf verschiedene Arten zu denken (10+3 Zerlegungsstrategie).",
      14: "Die 14er-Einfoiseins-multiplication deaide, die 7er-multiplication de zu verstärken. Die Beziehung 14=2×7montre Schülern die distributive propriÃ©tÃ© der multiplication. Sie ist notwendig für die Berechnung von Wochen- und Halbmonatsperioden. Diese multiplication de vertieft das Verständnis pairr nombreen und Verdopplungsstrategien.",
      15: "Die 15er-Einfoiseins-multiplication de kombiniert sowohl die 3er- comme auch die 5er-multiplication de, ce qui hervorragend zum Verständnis mathematischer Verbindungen ist. Sie ist wichtig für Viertelstundenberechnungen (15 Minuten). Das Lernen der 15er-multiplication de lehrt, Teilbarkeitsregeln zu verstehen und Beziehungen entre nombreen zu erkennen. Sie wird häufig bei Prozentberechnungenutilise (comme 15% Trinkgeld).",
      16: "Die 16er-Einfoiseins-multiplication de ist perfekt zum Verständnis binärer Systeme und Exponentialnombreen. Die Beziehung 2⁴=16montre die Kraft von Exponenten. Siea kritische Bedeutung in der Informatik (16 Bit, Hexadezifoissystem). Diese multiplication dedÃ©veloppe das Verständnis mehrfacher Verdopplungsstrategien und geometrischer Sequenzen.",
      17: "Die 17er-Einfoiseins-multiplication de ist ein hervorragendes Werkzeug zur Entwicklung mentaler Mathematikstrategien. comme Primnombre zwingt sie Schüler, kreative Berechnungsmethoden zu finden (20-3 ou 10+7 Strategien). Diese multiplication dedÃ©veloppe Problemlösungsfähigkeiten und Flexibilität mit nombreen.",
      18: "Die 18er-Einfoiseins-multiplication demontre den Reichtum mathematischer Beziehungen. Dass 18=2×9=3×6 lehrt, verschiedene Faktorkombinationen zu verstehen. Siea kulturelle Bedeutung comme Volljährigkeitsalter. Diese multiplication de lehrt, ein Problem mit mehreren Strategien anzugehen und die effizienteste Methode zu wählen.",
      19: "Die 19er-Einfoiseins-multiplication de maximiert mentale Rechenfähigkeiten. Die Strategie '20-1' lehrt Schüler, komplementäre nombreen zu verwenden. comme Primnombre betont sie echtes Verständnis mehr comme modÃ¨leerkennung. Diese multiplication dedÃ©veloppe die Fähigkeit, komplexe Berechnungen in einfache Schritte zu zerlegen.",
      20: "Die 20er-Einfoiseins-multiplication de ist kritisch zur Verstärkung des Stellenwertsystems und zum komfortablen Arbeiten mit großen nombreen. Die Beziehung 20=2×10 vertieft das Verständnis des Dezifoissystems. Sie wird ständig in Geldberechnungen (20-Euro-Scheine) und Messungenutilise. Diese multiplication deforme die Grundlage für Prozentberechnungen (20% Rabatt).",
      21: "Die 21er-Einfoiseins-multiplication de ist perfekt zum Verständnis der Faktorisierungsbeziehung 3×7. Diese multiplication demontre Schülern, dass eine nombre mehr comme einen Faktor haben kann. Die 21a soziale Bedeutung comme Alter für rechtliche Transaktionen und Volljährigkeit. Das Lernen dieser multiplication de vertieft das Verständnis der Beziehungen entre Faktoren und Vielfachen.",
      22: "Die 22er-Einfoiseins-multiplication deaide, die 11er-multiplication de zu verstärken. Die Beziehung 22=2×11 stärkt Verdopplungsstrategien. Sie wird im Sport (Fußballmannschaft) und täglichem Zählenutilise. Diese multiplication dedÃ©veloppe das Verständnis pairr nombreenpropriÃ©tÃ©en und mathematischer Beziehungen.",
      23: "Die 23er-Einfoiseins-multiplication dedÃ©veloppe Fähigkeiten zum Arbeiten mit Primnombreen. Da sie nicht von anderen multiplication den abgeleitet werden kann, müssen Schüler neue Strategien entwickeln. Die 23 ist eine wichtige nombre in der Biologie (Chromosomenpaare). Das Lernen dieser multiplication de erhöht mentale Flexibilität und Problemlösungsfähigkeiten.",
      24: "Die 24er-Einfoiseins-multiplication de ist eine der nützlichsten im Alltag. Sie wird ständig aufgrund der Tag-Stunden-Beziehungutilise (24 Stunden). Dass 24 viele Teilera (1,2,3,4,6,8,12,24),rend es ideal für Brüche und Verhältnisse. Diese multiplication dedÃ©veloppe Zeitmanagement- und Planungsfähigkeiten.",
      25: "Die 25er-Einfoiseins-multiplication de ist grundlegend zum Verständnis quadratischer nombreen (5²). Sie spielt eine zentrale Rolle in Währungssystemen (25 Cent). Das regelmäßige modÃ¨le der 25 (25,50,75,00) erleichtert Berechnungen erheblich. Diese multiplication de wird häufig bei Prozentberechnungen (25%=1/4) und Brüchenutilise.",
      26: "Die 26er-Einfoiseins-multiplication deaide, die 13er-multiplication de zu verstärken. Sie ist wichtig in alphabetischen Systemen (26 Buchstaben). Die Beziehung 26=2×13montre die Verbindung entre Primnombreen und pairn nombreen. Das Lernen dieser multiplication dedÃ©veloppe die Fähigkeit, mathematische Beziehungen zu erkennen.",
      27: "Die 27er-Einfoiseins-multiplication de ist kritisch zum Verständnis von Exponentialnombreen (3³). Sie ist wichtig in der Geometrie (3×3×3 Würfel im 3D-Raum) und Volumenberechnungen. Die Beziehung 27=3×9 stärkt die Verbindung entre der 3er- und 9er-multiplication de. Diese multiplication deforme eine Grundlage im mathematischen Denken und Exponentialnombreen.",
      28: "Die 28er-Einfoiseins-multiplication de ist wichtig für Kalenderwissen (Februar-Monat). Dass 28 eine perfekte nombre ist (Summe der Teiler gleich lui-mÃªme),montre spezielle mathematische propriÃ©tÃ©en. Die Beziehung 28=4×7 vertieft das Verständnis von Faktorisierung. Diese multiplication de wird in Zeitberechnungen und Wochenplanungutilise.",
      29: "Die 29er-Einfoiseins-multiplication de ist perfekt zur Perfektionierung von Primnombrestrategien. Die Beziehung 30-1 lehrt, komplementäre nombreen zu verwenden. Sie ist notwendig für Kalenderwissen (Februar im Schaltjahr). Das Lernen dieser multiplication de maximiert mentale Rechenfähigkeiten.",
      30: "Die 30er-Einfoiseins-multiplication de ist die Brücke entre dem Dezifoissystem und multiplication. Die Beziehung 30=3×10 stärkt das Verständnis des Stellenwerts. Sie wird ständig in Zeit (halbe Stunde), Kalender (Tage des Monats) und Winkelmessungen (30°)utilise. Diese multiplication deforme die Grundlage für Prozentberechnungen (30% Rabatt) und pratiquee Mathematik.",
      31: "Mit 31 multiplizieren ist kritisch für Kalenderwissen. Da die meisten Monate 31 Tage haben, wird es ständig in Datums- und Zeitberechnungenutilise. Da 31 eine Primnombre ist, eignet es sich perfekt zur Entwicklung mentaler Rechenstrategien. Die Strategie 30+1 lehrt, komplementäre nombreen zu verwenden und bietet Kompetenz in Berechnungen großer nombreen.",
      32: "Mit 32 multiplizieren ist wichtig zum Verständnis von Exponentialnombreen (2⁵) und binären Systemen. Da 32-Bit-Architektur in der Informatik üblich ist,a es pratiquee Bedeutung im Technologiezeitalter. Es ist perfekt zur Perfektionierung von Verdopplungsketten. Es wird in Temperaturumrechnungen (Fahrenheit)utilise.",
      33: "Mit 33 multiplizieren stärkt mathematische Beziehungen durch Kombination der 3er- und 11er-multiplication den. Die Repdigit-propriÃ©tÃ© (33, 66, 99...) erleichtert die modÃ¨leerkennung. Die Beziehung 33=3×11 vertieft das Verständnis der Verbindungen entre Faktoren und Vielfachen. Diese multiplication de lehrt mehrfache multiplicationsstrategien.",
      34: "Mit 34 multiplizierenaide, die 17er-multiplication de zu verstärken. Die Beziehung 34=2×17montre die Verbindung entre Primnombreen und pairn nombreen. Diese multiplication dedÃ©veloppe mentale Flexibilität und alternative Berechnungsmethoden (35-1, 30+4). Sie verstärkt propriÃ©tÃ©en pairr nombreen und Verdopplungsfähigkeiten.",
      35: "Mit 35 multiplizierendÃ©veloppe Faktorisierungsfähigkeiten comme Kombination der 5er- und 7er-multiplication den. Die Beziehung 5×7 verstärkt beide multiplication den. Es wird in Zeitberechnungen (35 Minuten) und alltäglicher Mathematikutilise. Diese multiplication de erzeugt erkennbare modÃ¨le mit dem 5er-modÃ¨le (letzte Ziffer 5 ou 0).",
      36: "Mit 36 multiplizieren ist eine der nützlichsten multiplication den. Dass 36=6² ist kritisch zum Verständnis quadratischer nombreen. Viele Teiler zu haben (1,2,3,4,6,9,12,18,36)rend es ideal für Brüche und Verhältnisse. Es wird häufig im Dutzend-System (3 Dutzend) und Winkelmessungen (ein Zehntel von 360°)utilise.",
      37: "Mit 37 multiplizieren perfektioniert PrimnombrepropriÃ©tÃ©en und mentale Mathematikstrategien. Spezielle Beziehungen comme 37×3=111 bieten tiefes Verständnis numerischer modÃ¨le. Strategien comme 40-3 ou 35+2 entwickeln kreative Problemlösungsfähigkeiten. Diese multiplication de fördert mathematische Neugier und Entdeckungsgeist.",
      38: "Mit 38 multiplizierenaide, die 19er-multiplication de zu verstärken. Die Beziehung 38=2×19 kombiniert Verdopplungsstrategien und Primnombreen. Der Ansatz 40-2 lehrt, komplementäre nombreen zu verwenden. Esa pratiquee Bedeutung im Gesundheitskontext (Körpertemperatur).",
      39: "Mit 39 multiplizieren stärkt mathematische Verbindungen durch Kombination der 3er- und 13er-multiplication den. Die Strategie 40-1 lehrt schnelles Rechnen mit runden nombreen. Diese multiplication dedÃ©veloppe mehrfache Faktorisierungsfähigkeiten (3×13) und bietet mentale Flexibilität.",
      40: "Die 40er-multiplication de ist perfekt zum tiefen Verständnis des Dezifoissystems. Die Beziehung 40=4×10montre die Verbindung entre Stellenwert und multiplication. Sie wird viel im Alltagutilise aufgrund von Arbeitszeiten (40-Stunden-Woche) und sozialen Normen (40 Jahre). Diese multiplication deforme eine Grundlage für große nombreen und Prozentberechnungen.",
      41: "Die 41er-multiplication de hebt Primnombrestrategien auf ein fortgeschrittenes Niveau. Der Ansatz 40+1 bietet Beherrschung im Gebrauch komplementärer nombreen. comme Primnombrerequiert sie mentale Flexibilität und kreative Problemlösung. Diese multiplication dedÃ©veloppe die Fähigkeit, schnell mit großen nombreen zu rechnen.",
      42: "Die 42er-multiplication de perfektioniert Faktorisierungsfähigkeiten. Die Beziehungen 42=6×7=2×21=3×14 lehren, mathematische Verbindungen zu sehen. Da sie die 6er- und 7er-multiplication den kombiniert, verstärkt sie beide. Sie ist einprägsam aufgrund von Popkultur-Referenzen (Per Anhalter durch die Galaxis).",
      43: "Die 43er-multiplication dedÃ©veloppe PrimnombrepropriÃ©tÃ©en und mentale Rechenstrategien. Alternative Ansätze comme 40+3 ou 45-2 bieten Flexibilität im mathematischen Denken. Diese multiplication de erhöht die Fähigkeit, kreativ mit nombreen zu arbeiten und Plageert Problemlösungsstrategien.",
      44: "Die 44er-multiplication de ist perfekt zur Verstärkung der 11er-multiplication de. Die Beziehung 44=4×11dÃ©veloppe mehrfache multiplicationsfähigkeiten. Das repdigit-ähnliche modÃ¨le (44, 88) erleichtert visuelle Erkennung. Sie vertieft das Verständnis pairr nombreenpropriÃ©tÃ©en und Vielfache von vier.",
      45: "Die 45er-multiplication de stärkt mathematische Beziehungen durch Kombination der 5er- und 9er-multiplication den. Sie wird häufig in Geometrie (45°-Winkel) und Zeitberechnungen (drei Viertelstunden)utilise. Die Beziehung 5×9 verstärkt sowohl die 5er- comme auch die 9er-multiplication de. Diese multiplication de ist sehr nützlich für pratiquee Mathematik und alltägliche Berechnungen.",
      46: "Die 46er-multiplication deaide, die 23er-multiplication de zu verstärken. Die Beziehung 46=2×23 kombiniert Verdopplungsstrategien und Primnombreen. Es ist eine wichtige nombre in der Biologie (46 Chromosomen). Diese multiplication dedÃ©veloppe propriÃ©tÃ©en pairr nombreen und Berechnungen mit großen nombreen.",
      47: "Die 47er-multiplication de maximiert Primnombrestrategien. Der Ansatz 50-3 perfektioniert die Strategie, von runden nombreen zu subtrahieren. Aufgrund von PrimnombrepropriÃ©tÃ©enrequiert sie mentale Flexibilität und alternative Lösungsmethoden. Diese multiplication de bietet fortgeschrittene mentale Mathematikfähigkeiten.",
      48: "Die 48er-multiplication de ist eine der vielseitigsten. Viele Teiler zu haben (1,2,3,4,6,8,12,16,24,48)rend sie ideal für Brüche und Verhältnisse. Sie wird im Dutzend-System (4 Dutzend) und Zeitberechnungen (48 Stunden=2 Tage)utilise. Die mehrfachen Faktorbeziehungen vertiefen das Verständnis mathematischer Verbindungen.",
      49: "Die 49er-multiplication de ist kritisch zum Verständnis quadratischer nombreen (7²). Sierequiert perfekte Kenntnis der 7er-multiplication de und verstärkt diese. Die Strategie 50-1 lehrt schnelles Rechnen mit runden nombreen. Sie ist wichtig in Geometrie und Flächenberechnungen aufgrund quadratischer propriÃ©tÃ©en.",
      50: "Die 50er-multiplication deforme die Grundlage für Prozentberechnungen (50%=1/2). Die Beziehung 5×10 kombiniert das Dezifoissystem und multiplication. Sie ist direkt mit dem Hälften-Konzept (½) verbunden. Sie wird ständig in Währungssystemen (50 Cent, 50 Euro) und Zeitmessungenutilise. Diese multiplication de verbessert pratiquee Rechenfähigkeiten erheblich.",
      51: "Die 51er-multiplication dedÃ©veloppe die Fähigkeit, mit nombreen nahe 50 zu arbeiten. Die Strategie 50+1 verstärkt die Verwendung komplementärer nombreen. Die Beziehung 3×17 stärkt Faktorisierungsfähigkeiten. Siea pratiquee Bedeutung im Kartenspiel-Kontext (52 Karten). Diese multiplication de lehrt, mit kleinen Abweichungen von runden nombreen zu rechnen.",
      52: "Die 52er-multiplication de ist kritisch für Zeit- und Kalenderberechnungen. Aufgrund der Wochenannombre im Jahr (52 Wochen) wird sie ständig in Planung und Jahresberechnungenutilise. Die Beziehung 4×13 verstärkt sowohl die 4er- comme auch die 13er-multiplication de. Das Kartenspiel (52 Karten) bietet Kontext für pensÃ©e mathÃ©matique. Diese multiplication de ist sehr wichtig für pratiquee Alltagsmathematik.",
      53: "Die 53er-multiplication de hebt Primnombrestrategien auf ein fortgeschrittenes Niveau. Der Ansatz 50+3dÃ©veloppe mentale Flexibilität und alternative Berechnungsmethoden. Aufgrund von PrimnombrepropriÃ©tÃ©enrequiert sie kreative Problemlösung. Diese multiplication de erhöht die Fähigkeit, mit großen Primnombreen zu arbeiten und erweitert die Tiefe mathematischen Denkens.",
      54: "Die 54er-multiplication de perfektioniert mehrfache Faktorisierungsfähigkeiten. Die Beziehungen 54=6×9=2×27=3×18 lehren, mathematische Verbindungen zu sehen. Da sie die 6er- und 9er-multiplication den kombiniert, stärkt sie beide. Viele Teiler zu haben (1,2,3,6,9,18,27,54)rend sie ideal für Brüche und Verhältnisse. Diese multiplication de fördert flexibles pensÃ©e mathÃ©matique.",
      55: "Die 55er-multiplication de verstärkt mathematische Beziehungen durch Kombination der 5er- und 11er-multiplication den. Die Dreiecksnombre-propriÃ©tÃ© (1+2+...+10=55) vertieft das Verständnis mathematischer modÃ¨le. Die Beziehung 5×11 stärkt beide multiplication den. Diese multiplication deforme eine Grundlage für nombreenmodÃ¨le und Summenformeln.",
      56: "Die 56er-multiplication de verstärkt sowohl die 7er- comme auch die 8er-multiplication de. 7×8=56 ist eines der schcommerigsten multiplicationspaare und das Lernen dieser multiplication de stärkt es. Die Alternativen 4×14=2×28 lehren, mehrere Strategien zu verwenden. Siea pratiquee Bedeutung in Arbeitsberechnungen (7-Tage-Woche × 8-Stunden-Tag). Diese multiplication de bietet Beherrschung schcommeriger multiplicationen.",
      57: "Die 57er-multiplication de stärkt mathematische Verbindungen durch Kombination der 3er- und 19er-multiplication den. Die Strategie 60-3 perfektioniert die Fähigkeit, von runden nombreen zu subtrahieren. Die Beziehung 3×19 kombiniert Primnombre- und Nicht-Primnombre-Strategien. Diese multiplication dedÃ©veloppe mentales Rechnen mit mittleren großen nombreen.",
      58: "Die 58er-multiplication deaide, die 29er-multiplication de zu verstärken. Die Beziehung 58=2×29 kombiniert Verdopplungsstrategien und Primnombreen. Der Ansatz 60-2 lehrt die Strategie, sich runden nombreen anzunähern. Diese multiplication deforme eine Grundlage für propriÃ©tÃ©en pairr nombreen und Berechnungen nahe 60.",
      59: "Die 59er-multiplication de maximiert Primnombrestrategien. Der Ansatz 60-1 perfektioniert schnelles Rechnen mit runden nombreen. Aufgrund von PrimnombrepropriÃ©tÃ©enrequiert sie mentale Flexibilität und kreative Lösungsmethoden. Siea pratiquee Bedeutung im Zeitkontext (59 Minuten, 59 Sekunden). Diese multiplication de bietet fortgeschrittene mentale Mathematikfähigkeiten.",
      60: "Die 60er-multiplication deforme die Grundlage für Zeitberechnungen (60 Minuten=1 Stunde, 60 Sekunden=1 Minute). Die Beziehung 6×10 kombiniert das Dezifoissystem und multiplication. Viele Teiler zu haben (1,2,3,4,5,6,10,12,15,20,30,60)rend sie ideal für Brüche und Verhältnisse. Siea geometrische Bedeutung in Winkelmessungen (360°÷6=60°). Diese multiplication de ist eine der meist genutzten im Alltag.",
      61: "Die 61er-multiplication de hebt Primnombrestrategien auf ein fortgeschrittenes Niveau. Der Ansatz 60+1 bietet Assoziation mit Zeiteinheiten (Minute 61, Sekunde 61). Aufgrund ihrer PrimnombrepropriÃ©tÃ©enrequiert sie mentale Flexibilität und kreative Problemlösung. Diese multiplication dedÃ©veloppe die Fähigkeit, schnell mit nombreen über 60 zu rechnen.",
      62: "Die 62er-multiplication deaide, die 31er-multiplication de zu verstärken. Die Beziehung 62=2×31 kombiniert Verdopplungsstrategien und Primnombreen. Der Ansatz 60+2 lehrt die Strategie, nahe runden nombreen zu rechnen. Diese multiplication deforme eine Grundlage für propriÃ©tÃ©en pairr nombreen und Berechnungen nach 60.",
      63: "Die 63er-multiplication de verstärkt sowohl die 7er- comme auch die 9er-multiplication de durch ihre Kombination. 7×9=63 ist ein wichtiges multiplicationspaar. Die Alternative 3×21 lehrt, mehrere Strategien zu verwenden. Durch 7 und 9 teilbar zu seinrend sie nützlich für Brüche und Verhältnisse. Diese multiplication de vertieft das Verständnis mehrfacher Faktorbeziehungen.",
      64: "Die 64er-multiplication de ist kritisch zum Verständnis von Zweierpotenzen (Exponentialnombreen). Die Beziehungen 64=2⁶=8² verstärken sowohl Exponenten comme auch quadratische nombreen. Siea technologische Bedeutung in der Informatik aufgrund der 64-Bit-Architektur. Das Schachbrett (8×8=64 Felder) bietet geometrische Anwendungen. Diese multiplication de ist grundlegend für Exponentialnombreen und das binäre System.",
      65: "Die 65er-multiplication de stärkt mathematische Beziehungen durch Kombination der 5er- und 13er-multiplication den. Die Beziehung 5×13 verstärkt beide multiplication den. Siea pratiquee Bedeutung im sozialen Kontext (Rentenalter 65 Jahre). Das 5er-modÃ¨le (endet auf 5 ou 0) erleichtert die Berechnung. Diese multiplication de ist nützlich für pratiquee Alltagsmathematik.",
      66: "Die 66er-multiplication de verstärkt sowohl die 6er- comme auch die 11er-multiplication de durch ihre Kombination. Die Beziehung 6×11=66 erzeugt ein repdigit-ähnliches modÃ¨le. Die Alternative 2×33 bietet verschiedene Strategien. Durch 6 und 11 teilbar zu sein bietet mehrfache Verwendungen. Diese multiplication dedÃ©veloppe Fähigkeiten mehrfacher Faktoren.",
      67: "Die 67er-multiplication de maximiert Primnombrestrategien. Der Ansatz 70-3 perfektioniert die Strategie, von runden nombreen zu subtrahieren. Aufgrund von PrimnombrepropriÃ©tÃ©enrequiert sie mentale Flexibilität und alternative Lösungsmethoden. Diese multiplication de bietet fortgeschrittene mentale Mathematikfähigkeiten und Vertrautheit mit großen Primnombreen.",
      68: "Die 68er-multiplication de stärkt mathematische Verbindungen durch Kombination der 4er- und 17er-multiplication den. Die Beziehungen 4×17=2×34 lehren, mehrere Strategien zu verwenden. Der Ansatz 70-2dÃ©veloppe die Fähigkeit, sich runden nombreen anzunähern. Diese multiplication deforme eine Grundlage für propriÃ©tÃ©en pairr nombreen und Berechnungen nahe 70.",
      69: "Die 69er-multiplication de verstärkt sowohl die 3er- comme auch die 23er-multiplication de durch ihre Kombination. Die Strategie 70-1 lehrt schnelles Rechnen mit runden nombreen. Die Beziehung 3×23 kombiniert Strategien kleiner und großer Faktoren. Diese multiplication de bietet Kompetenz in Berechnungen nahe 70.",
      70: "Die 70er-multiplication de ist perfekt zur Verstärkung der 7er-multiplication de. Die Beziehung 7×10 kombiniert das Dezifoissystem und die 7er-multiplication de. Siea soziale Bedeutung im Kontext der Lebenserwartung (Durchschnitt 70-80 Jahre). Die Alternativen 2×35=5×14 lehren, mehrere Strategien zu verwenden. Diese multiplication de ist sehr nützlich für pratiquees Rechnen und Zeitmanagement.",
      71: "Die 71er-multiplication de maximiert Primnombrestrategien. Der Ansatz 70+1 bietet Beherrschung im Gebrauch komplementärer nombreen. Aufgrund ihrer PrimnombrepropriÃ©tÃ©enrequiert sie mentale Flexibilität und kreative Problemlösung. Diese multiplication dedÃ©veloppe die Fähigkeit, schnell mit großen Primnombreen zu rechnen und vertieft pensÃ©e mathÃ©matique.",
      72: "Die 72er-multiplication de ist eine der vielseitigsten. Viele Teiler zu haben (1,2,3,4,6,8,9,12,18,24,36,72)rend sie ideal für Brüche und Verhältnisse. Die Beziehungen 8×9=6×12 lehren Strategien mehrfacher Faktoren. Siea pratiquee Bedeutung in Zeitberechnungen (72 Stunden=3 Tage). Diese multiplication de perfektioniert mathematische Flexibilität und den Gebrauch mehrfacher Strategien.",
      73: "Die 73er-multiplication de hebt Primnombrestrategien auf ein fortgeschrittenes Niveau. Der Ansatz 70+3dÃ©veloppe mentale Rechenfähigkeiten. comme 21. Primnombre weckt sie mathematische Neugier. Aufgrund von PrimnombrepropriÃ©tÃ©enrequiert sie alternative Lösungsmethoden und kreatives Denken. Diese multiplication de bietet fortgeschrittene mentale Mathematikfähigkeiten.",
      74: "Die 74er-multiplication deaide, die 37er-multiplication de zu verstärken. Die Beziehung 74=2×37 kombiniert Verdopplungsstrategien und Primnombreen. Der Ansatz 75-1 lehrt die Strategie, sich runden nombreen anzunähern. Diese multiplication deforme eine Grundlage für propriÃ©tÃ©en pairr nombreen und Berechnungen nahe 75.",
      75: "Die 75er-multiplication deforme die Grundlage für Prozentberechnungen (75%=3/4). Die Beziehungen 3×25=5×15 lehren, mehrere Strategien zu verwenden. Sie ist direkt mit dem Drei-Viertel-Konzept (¾) verbunden. Das 5er-modÃ¨le (endet auf 5 ou 0) erleichtert die Berechnung. Diese multiplication de ist extrem wichtig für pratiquee Mathematik und Prozentberechnungen.",
      76: "Die 76er-multiplication de stärkt mathematische Verbindungen durch Kombination der 4er- und 19er-multiplication den. Die Beziehungen 4×19=2×38 lehren mehrfache multiplicationsstrategien. Die Ansätze 75+1 ou 80-4 bieten Flexibilität. Diese multiplication de bereitet auf Berechnungen nahe 80 mit propriÃ©tÃ©en pairr nombreen vor.",
      77: "Die 77er-multiplication de verstärkt sowohl die 7er- comme auch die 11er-multiplication de durch ihre Kombination. Die Beziehung 7×11=77 erzeugt ein repdigit-ähnliches modÃ¨le. Da beide multiplication den mittelschwer sind, ist die 77er-multiplication de perfekt zu ihrer Verstärkung. Durch 7 und 11 teilbar zu seinrend sie nützlich für Brüche.",
      78: "Die 78er-multiplication dedÃ©veloppe mehrfache Faktorisierungsfähigkeiten. Die Beziehungen 78=2×39=3×26=6×13 bieten mathematische Flexibilität. Der Ansatz 80-2 lehrt die Strategie, von runden nombreen zu subtrahieren. Viele Teiler zu haben bietet verschiedene Berechnungsmethoden. Diese multiplication de perfektioniert den Gebrauch mehrfacher Strategien.",
      79: "Die 79er-multiplication de maximiert Primnombrestrategien. Der Ansatz 80-1 perfektioniert schnelles Rechnen mit runden nombreen. Aufgrund von PrimnombrepropriÃ©tÃ©enrequiert sie mentale Flexibilität und kreative Lösungsmethoden. Diese multiplication de bietet Kompetenz in Berechnungen nahe 80 unddÃ©veloppe fortgeschrittene mathematische Fähigkeiten.",
      80: "Die 80er-multiplication de ist perfekt zur Verstärkung der 8er-multiplication de. Die Beziehung 8×10 kombiniert das Dezifoissystem und die 8er-multiplication de. Die Alternativen 2×40=4×20=5×16 lehren, mehrere Strategien zu verwenden. Siea soziale Bedeutung im Kontext der Lebenserwartung (Obergrenze 80 Jahre). Diese multiplication de verbessert pratiquees Rechnen und die Fähigkeit, mit großen nombreen zu arbeiten, erheblich.",
      81: "Mit 81 multiplizieren nutzt die Beziehung 81=9² (neun zum Quadrat) ou 81=3⁴ (drei zur vierten Potenz). Da 81 eine perfekte Quadratnombre ist, bilden alle ihre Vielfachen mit perfekten Quadratnombreen ebenfalls quadratische nombreen. 81 comme 80+1 ou 9×9 zu denken erleichtert die Berechnung. Die 81 ist sowohl durch 9 comme auch durch 27 (27=3³) teilbar. Vielfache von 81 sind gleichmäßig durch 9 teilbar. Die 81 ist die Summe der unpairn nombreen von 1 bis 9 (1+3+5+7+9+11+13+15+17=81). Diese multiplication dedÃ©veloppe das Verständnis mathematischer modÃ¨le.",
      82: "Mit 82 multiplizieren nutzt die Beziehung 2×41. Wenn Sie die 41er-multiplication de kennen, können Sie jedes rÃ©sultat doubler, um die 82er-multiplication de zu finden. 82 comme 80+2 ou 85-3 zu denken erleichtert die Berechnung. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 82 ist sowohl durch 2 comme auch durch 41 teilbar. Diese multiplication deforme eine Grundlage für Berechnungen nach 80.",
      83: "Mit 83 multiplizierendÃ©veloppe mentale Mathematikstrategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die pratiquesten Methoden sind, 83 comme 80+3 ou 85-2 zu denken. Die 83 ist eine Primnombre und seulement durch 1 und 83 teilbar. Das Lernen der 83er-multiplication dedÃ©veloppe die Fähigkeit, schnell mit großen Primnombreen zu rechnen.",
      84: "Mit 84 multiplizieren ist eine der vielseitigsten multiplication den. Da 84=12×7=6×14=4×21=3×28=2×42, kann sie auf viele verschiedene Arten berechnet werden. Die 84 ist 7 fois 12 (7 Dutzend). Viele Teiler zu haben (1,2,3,4,6,7,12,14,21,28,42,84)rend sie extrem nützlich für Bruchberechnungen. Die 84 ist nützlich in Zeitberechnungen (84 Stunden=1 Woche+1/2 Tag). Diese multiplication de perfektioniert den Gebrauch mehrfacher Strategien.",
      85: "Mit 85 multiplizieren nutzt die Beziehung 5×17. Wenn beide multiplication den bekannt sind, ist mit 85 multiplizieren einfach. 85 comme 80+5 ou 90-5 zu denken erleichtert mentales Rechnen. Das 5er-modÃ¨le (endet auf 5 ou 0) erleichtert die Berechnung. Die 85 wird häufig in Prozentberechnungenutilise (85%=17/20). Diese multiplication de bereitet auf Berechnungen nahe 90 vor.",
      86: "Mit 86 multiplizieren nutzt die Beziehung 2×43. Wenn Sie die 43er-multiplication de kennen, können Sie jedes rÃ©sultat doubler, um die 86er-multiplication de zu finden. 86 comme 80+6 ou 90-4 zu denken erleichtert die Berechnung. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 86 ist sowohl durch 2 comme auch durch 43 teilbar. Diese multiplication deforme eine Grundlage für Berechnungen nahe 90.",
      87: "Mit 87 multiplizieren nutzt die Beziehung 3×29. Die 29er-multiplication de verdreifachen ou die 3er-multiplication de mit 29 multiplizieren funktioniert. 87 comme 90-3 ou 85+2 zu denken erleichtert mentales Rechnen. Da 87=3×29, ist sie sowohl durch 3 comme auch durch 29 teilbar. Diese multiplication de ist nützlich für Berechnungen nahe 90 und perfektioniert die Fähigkeit, von runden nombreen zu subtrahieren.",
      88: "Mit 88 multiplizieren nutzt die Beziehungen 8×11=4×22=2×44. Sie kann auf mehrere Arten berechnet werden. Die 88montre ein repdigit-ähnliches modÃ¨le (commederholung von 8en). 88 comme 90-2 ou 80+8 zu denken erleichtert die Berechnung. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 88a viele Teiler. Die Repdigit-propriÃ©tÃ© (88) erleichtert visuelle Erkennung und Einprägung.",
      89: "Mit 89 multiplizierenrequiert spezielle Strategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die einfachste Strategie ist, 89 comme 90-1 zu denken: multipliziere eine nombre mit 90 und subtrahiere die nombre selbst. Die 89 ist eine Primnombre und seulement durch 1 und 89 teilbar. Die 89 ist sehr nahe an 90, daher ist sie nützlich für Annäherungen. Diese multiplication de bietet Kompetenz in Berechnungen nahe 90 unddÃ©veloppe fortgeschrittene mathematische Fähigkeiten.",
      90: "Mit 90 multiplizieren nutzt die Beziehung 9×10 und ist sehr nützlich. Um eine nombre mit 90 zu multiplizieren, kann man sie mit 9 multiplizieren und eine Null am Ende hinzufügen. Esdonne alternative Faktorbeziehungen comme 90=2×45=3×30=5×18=6×15. Ein rechter Winkel misst 90°. Die 90a kritische Bedeutung in der Geometrie (rechter Winkel von 90°). Die 90 wird häufig in Winkelmessungen und Prozentsätzenutilise. Diese multiplication de verstärkt die 9er-multiplication de und ist extrem wichtig für pratiquee Berechnungen und Winkelmessungen.",
      91: "Mit 91 multiplizieren nutzt die Beziehung 7×13. Wenn beide multiplication den bekannt sind, ist mit 91 multiplizieren einfach. 91 comme 90+1 ou 100-9 zu denken erleichtert die Berechnung. Da 91=7×13, ist sie sowohl durch 7 comme auch durch 13 teilbar. Diese multiplication de verstärkt das Verständnis von Faktorbeziehungen. Da beide multiplication den mittelschwer sind, ist die 91er-multiplication de ideal zu ihrer Verstärkung. Sie ist ein grundlegendes Konzept für fortgeschrittene Mathematik und Kryptographie.",
      92: "Mit 92 multiplizieren nutzt die Beziehungen 4×23=2×46. Sie kann auf mehrere Arten berechnet werden. 92 comme 90+2 ou 100-8 zu denken erleichtert mentales Rechnen. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 92 ist sowohl durch 4 comme auch durch 23 teilbar. Diese multiplication de bereitet auf Berechnungen nahe 100 vor unddÃ©veloppe Rechenfähigkeiten in den 90ern.",
      93: "Mit 93 multiplizieren nutzt die Beziehung 3×31. Die 31er-multiplication de verdreifachen ou die 3er-multiplication de mit 31 multiplizieren funktioniert. 93 comme 90+3 ou 100-7 zu denken erleichtert die Berechnung. Da 93=3×31, ist sie sowohl durch 3 comme auch durch 31 teilbar. Diese multiplication de ist nützlich für Berechnungen nahe 100. Sie bietet Übung bei der multiplication mit großen nombreen unddÃ©veloppe mentale Flexibilität.",
      94: "Mit 94 multiplizieren nutzt die Beziehung 2×47. Wenn Sie die 47er-multiplication de kennen, können Sie jedes rÃ©sultat doubler, um die 94er-multiplication de zu finden. 94 comme 100-6 ou 90+4 zu denken erleichtert die Berechnung. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 94 ist sowohl durch 2 comme auch durch 47 teilbar. Die Strategie 100-6 perfektioniert die Methode, von runden nombreen zu subtrahieren. Sie bietet kritische Fähigkeiten für fortgeschrittenes mentales Rechnen.",
      95: "Mit 95 multiplizieren nutzt die Beziehung 5×19. Wenn beide multiplication den bekannt sind, ist mit 95 multiplizieren einfach. 95 comme 100-5 ou 90+5 zu denken erleichtert mentales Rechnen. Das 5er-modÃ¨le (endet auf 5 ou 0) erleichtert die Berechnung. Die 95 wird häufig in Prozentberechnungenutilise (95%=19/20). Die Strategie 100-5 ist sehr nützlich.",
      96: "Mit 96 multiplizieren nutzt die Beziehungen 32×3=16×6=12×8=4×24=2×48. Sie kann auf viele verschiedene Arten berechnet werden. 96 comme 100-4 ou 90+6 zu denken erleichtert die Berechnung. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 96a viele Teiler (1,2,3,4,6,8,12,16,24,32,48,96), ce qui sie nützlich für Bruchberechnungenrend. Siemontre die Beziehung entre Zweier- und Dreierpotenzen (2⁵×3). Diese multiplication de ist perfekt für mathematische Flexibilität und nombreentheorie.",
      97: "Mit 97 multiplizierendÃ©veloppe mentale Mathematikstrategien aufgrund ihrer PrimnombrepropriÃ©tÃ©en. Die einfachste Strategie ist, 97 comme 100-3 zu denken: multipliziere eine nombre mit 100 und subtrahiere dreifois die nombre selbst. Die 97 ist eine Primnombre und seulement durch 1 und 97 teilbar. Das Lernen der 97er-multiplication de erleichtert Berechnungen nahe 100. comme die 100 nächste Primnombre erleichtert sie mentales Rechnen extrem. comme Primnombre ist sie wichtig für nombreentheorie und Kryptographie.",
      98: "Mit 98 multiplizieren nutzt die Beziehungen 2×49=7×14. Sie kann auf mehrere Arten berechnet werden. Die einfachste Strategie ist, 98 comme 100-2 zu denken: multipliziere eine nombre mit 100 und subtrahiere zweifois die nombre selbst. Da sie eine pair nombre ist, sind alle ihre Vielfachen ebenfalls pair. Die 98 ist sowohl durch 2 comme auch durch 7 und 49 teilbar. Die Beziehung 98=2×49=2×7² kombiniert quadratische nombreen und Verdopplungsstrategien. Diese multiplication de bietet Beherrschung von Berechnungen nahe 100.",
      99: "Mit 99 multiplizieren nutzt die Beziehung 9×11. Die einfachste Strategie ist, 99 comme 100-1 zu denken: multipliziere eine nombre mit 100 und subtrahiere die nombre selbst. Die 99montre ein repdigit-ähnliches modÃ¨le (commederholung von 9en). Da 99=9×11, ist sie sowohl durch 9 comme auch durch 11 teilbar. Diese multiplication de ist extrem nützlich für Berechnungen nahe 100. Die Strategie 100-1 ist PERFEKT für mentales Rechnen. Die Repdigit-propriÃ©tÃ© (99) vertieft das Verständnis von modÃ¨len. Diese multiplication de ist extrem wichtig für pratiquee Rechenfähigkeiten.",
      100: "Die 100er-multiplication de ist die Grundlage des Dezifoissystems. Sie bietet ein perfektes Verständnis des Stellenwertkonzepts. Sieforme die Grundlage für Prozentberechnungen (100%=vollständig) und das Dezifoissystem. Siea kritische Bedeutung für Währungseinheiten, Maßeinheiten und alltägliche Mathematik. SIE IST EINE DER NÜTZLICHSTEN UND WICHTIGSTEN multiplication deN!",
    }
    return importance[number] || `Das Lernen der Table de multiplication de ${number}aide Schülern, Gewandtheit mit dieser wichtigen nombre zu entwickeln. Sie erscheint häufig in Mathematik und Alltag und ist notwendig, um solide Rechenfähigkeiten aufzubauen.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "IdentitätsmodÃ¨le", description: "Jede nombre multipliziert mit 1 ergibt lui-mÃªme. Das ändert sich nie: 1×1=1, 1×2=2, 1×3=3, und so weiter." },
        { title: "Vorhersehbare Sequenz", description: "Die rÃ©sultatse zählen einfach aufwärts: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Du listest seulement nombreen in Reihenfolge auf." },
        { title: "Basis aller multiplication den", description: "Jede Table de Multiplication beginnt mit multiplication mit 1, daher erscheint dieses modÃ¨le in allen multiplication den." },
      ],
      2: [
        { title: "seulement pair nombreen", description: "Alle Vielfachen von 2 sind pair nombreen. Die rÃ©sultatse enden toujours auf 0, 2, 4, 6 ou 8." },
        { title: "In Zweierschritten Zählen", description: "Jede Antwort ist 2 mehr comme die vorherige: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "VerdopplungsmodÃ¨le", description: "Jedes rÃ©sultat ist exactement das Doppelte des Faktors: 2×5=10 ist das Doppelte von 5." },
      ],
      3: [
        { title: "QuersummenmodÃ¨le", description: "Addiere die Ziffern jedes rÃ©sultatses: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Das modÃ¨le 3-6-9 commederholt sich!" },
        { title: "In Dreierschritten Zählen", description: "Jede Antwort erhöht sich um 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Unpair-pair-Wechsel", description: "Die rÃ©sultatse wechseln: unpair (3), pair (6), unpair (9), pair (12), ce qui einen vorhersehbaren Rhythmus erzeugt." },
      ],
      4: [
        { title: "toujours pair nombreen", description: "comme bei der 2er-multiplication de sind alle Vielfachen von 4 pair und enden auf 0, 2, 4, 6 ou 8." },
        { title: "Doppelte der 2er-multiplication de", description: "Jede Antwort ist exactement das Doppelte der entsprechenden Antwort in der 2er-multiplication de: 4×3=12 ist das Doppelte von 2×3=6." },
        { title: "In Viererschritten Zählen", description: "Jede Antwort erhöht sich um 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "Endet auf 0 ou 5", description: "Jedes Vielfache von 5 endet auf 0 ou 5. Dasrend das modÃ¨le sofort erkennbar." },
        { title: "WechselmodÃ¨le", description: "Die rÃ©sultatse wechseln entre Endung auf 5 (unpair) und 0 (pair): 5, 10, 15, 20, 25, 30..." },
        { title: "Hälfte der 10er-multiplication de", description: "Jedes rÃ©sultat ist exactement die Hälfte der 10er-multiplication de: 5×4=20 ist die Hälfte von 10×4=40." },
      ],
      6: [
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 6 sind pair. Die rÃ©sultatse verlaufen comme 6, 12, 18, 24, 30... und alle sind durch 2 teilbar." },
        { title: "Doppelte der 3er-multiplication de", description: "Jede Antwort ist exactement das Doppelte der 3er-multiplication de: 6×4=24 ist das Doppelte von 3×4=12." },
        { title: "Einerziffer-modÃ¨le", description: "Die Einerziffer folgt diesem modÃ¨le: 6, 2, 8, 4, 0 und commederholt sich. Dieses modÃ¨leaide, die 6er-multiplication de zu erkennen." },
      ],
      7: [
        { title: "QuersummenmodÃ¨le", description: "Lorsque vous die Ziffern der Vielfachen von 7 addierst, entsteht ein interessantes modÃ¨le: 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "commederholung der Einerziffer", description: "Die Einerziffer folgt dieser Sequenz: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 und commederholt sich." },
        { title: "PrimnombrepropriÃ©tÃ©", description: "Die 7 ist eine Primnombre, dahera sie keine einfachen Beziehungen zu anderen multiplication den. Spezielle Paare comme 7×8=56 zu merkenaide jedoch." },
      ],
      8: [
        { title: "toujours pair und durch 4 Teilbar", description: "Alle Vielfachen von 8 sind sowohl pair comme auch durch 4 teilbar: 8, 16, 24, 32, 40, 48..." },
        { title: "Doppelte der 4er-multiplication de", description: "Jede Antwort ist exactement das Doppelte der 4er-multiplication de: 8×5=40 ist das Doppelte von 4×5=20." },
        { title: "Einerziffer-modÃ¨le", description: "Die Einerziffer folgt diesem modÃ¨le: 8, 6, 4, 2, 0 und commederholt sich. toujours ein absteigendes modÃ¨le mit pairn nombreen." },
      ],
      9: [
        { title: "Quersumme ist toujours 9", description: "Addiere die Ziffern der Vielfachen von 9: 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). Dieses magische modÃ¨le funktioniert toujours!" },
        { title: "Zehnerziffer-modÃ¨le", description: "Bei 9×n ist die Zehnerziffer n-1: 9×3=27 (Zehner:2), 9×6=54 (Zehner:5), 9×9=81 (Zehner:8)." },
        { title: "1 Weniger comme 10", description: "Die FormDie 9×n = (10×n) - n ist sehr nützlich: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      10: [
        { title: "Füge eine Null am Ende Hinzu", description: "Lorsque vous eine beliebige nombre mit 10 multipliez, fügst du einfach eine Null am Ende hinzu: 7×10=70, 23×10=230." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 10 enden auf 0: 10, 20, 30, 40, 50... Dieses modÃ¨le ändert sich nie." },
        { title: "Stellenwertsystem", description: "Multiplizieren mit 10 verschiebt jede Ziffer eine Position nach links. Das ist die Basis unseres Dezifoissystems: 25×10=250." },
      ],
      11: [
        { title: "Doppelte Ziffern-modÃ¨le", description: "Wenn mit einstelligen nombreen multipliziert wird, ist das rÃ©sultat eine doppelte Ziffer: 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "Ziffernsummen-Trick", description: "Multipliziere eine zweistellige nombre mit 11: Addiere die Ziffern und setze sie in die Mitte. 23×11: 2_(2+3)_3 = 253." },
        { title: "Zehnerschritt", description: "Vielfache von 11: 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. Die ersten 9 zeigen das Doppelziffern-modÃ¨le." },
      ],
      12: [
        { title: "Dutzend-modÃ¨le", description: "Vielfache von 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Jedesmontre einen Anstieg um ein Dutzend." },
        { title: "Vielfache von sowohl 3 comme auch 4", description: "Da 12=3×4, sind alle rÃ©sultatse sowohl durch 3 comme auch durch 4 teilbar. 12×5=60: 60÷3=20, 60÷4=15." },
        { title: "pair nombreen-modÃ¨le", description: "Alle Vielfachen von 12 sind pair und durch 4 teilbar: 12, 24, 36, 48..." },
      ],
      13: [
        { title: "10+3 Zerlegung", description: "13×n = (10×n) + (3×n). Beispiel: 13×4 = 40 + 12 = 52. Diese Strategie erleichtert die Berechnung." },
        { title: "Einerziffer-Zyklus", description: "Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 und commederholt sich. Vollendet einen Zyklus in exactement 10 Schritten." },
        { title: "Primnombre-Verhalten", description: "Da 13 eine Primnombre ist, ist sie seulement durch 1 und 13 teilbar. Diesrequiert spezielle Merkstrategien." },
      ],
      14: [
        { title: "Doppelte der 7", description: "Da 14=2×7, verdopple einfach jedes rÃ©sultat der 7er-multiplication de: 7×6=42, commeo 14×6=84." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 14 sind pair: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "Zwei-Wochen-modÃ¨le", description: "14 Tage = 2 Wochen. Vielfache von 14 werden in der Wochenplanungutilise: 28 Tage = 4 Wochen." },
      ],
      15: [
        { title: "Endet auf 0 ou 5", description: "Alle Vielfachen von 15 enden auf 0 ou 5: 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "3×5 Beziehung", description: "Da 15=3×5, ist es mit den 3er- und 5er-multiplication den verbunden. 15×4=60: 3×4=12, 5×4=20, nicht 12+20=32, aber 3×20=60 ou 5×12=60." },
        { title: "Viertelstunden-Vielfache", description: "15 Minuten = Viertelstunde. 30 Minuten = halbe Stunde, 45 Minuten = Dreiviertelstunde, 60 Minuten = 1 Stunde." },
      ],
      16: [
        { title: "Zweierpotenz", description: "16=2⁴ (2×2×2×2). Verdopplungskette: 2→4→8→16. Jedes Vielfache behält dieses modÃ¨le bei." },
        { title: "Doppelte der 8", description: "Da 16=2×8, verdopple einfach jedes rÃ©sultat der 8er-multiplication de: 8×3=24, commeo 16×3=48." },
        { title: "toujours pair und durch 8 Teilbar", description: "Alle Vielfachen von 16 sind pair und durch 4 und 8 teilbar: 16, 32, 48, 64, 80..." },
      ],
      17: [
        { title: "20-3 Strategie", description: "Denke an 17=20-3. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "10+7 Zerlegung", description: "17×n = (10×n) + (7×n). Beispiel: 17×4 = 40 + 28 = 68." },
        { title: "Primnombre-Einzigartigkeit", description: "17 ist eine Primnombre,a commeo seulement einzigartige modÃ¨le. Einerziffer: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      18: [
        { title: "Doppelte der 9", description: "Da 18=2×9, verdopple die 9er-multiplication de: 9×5=45, commeo 18×5=90." },
        { title: "Dreifache der 6", description: "Da 18=3×6, verdreifache die 6er-multiplication de: 6×4=24, commeo 18×4=72." },
        { title: "toujours pair und durch 9 Teilbar", description: "Die Vielfachen von 18 sind pair und durch 9 teilbar. Die Quersumme ist ein Vielfaches von 9: 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      19: [
        { title: "20-1 Strategie", description: "Denke an 19=20-1. 19×6 = (20×6) - 6 = 120 - 6 = 114. Sehr pratiquee Methode!" },
        { title: "10+9 Zerlegung", description: "19×n = (10×n) + (9×n). Beispiel: 19×3 = 30 + 27 = 57." },
        { title: "Primnombre-modÃ¨le", description: "Da 19 eine Primnombre ist,a sie spezielle modÃ¨le. Einerziffer: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (absteigende Reihenfolge)." },
      ],
      20: [
        { title: "Füge Null Hinzu und Verdopple", description: "20=10×2. Um mit 20 zu multiplizieren: 7×10=70, dann 70×2=140. (Nicht 7×20: 70×2=140 direkt)." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 20 enden auf 0: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "pair Zehner", description: "20, 40, 60, 80, 100... Jede nombre erhöht sich um 20. Sie sind pair Vielfache von 10." },
      ],
      21: [
        { title: "3×7 Beziehung", description: "21=3×7. Du kannst beide multiplication den nutzen: 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "20+1 Strategie", description: "21×n = (20×n) + n. Beispiel: 21×6 = 120 + 6 = 126. Sehr pratique!" },
        { title: "Einerziffer-Zyklus", description: "Einerziffer: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 und commederholt sich. Einfaches SteigerungsmodÃ¨le." },
      ],
      22: [
        { title: "Doppelte der 11", description: "22=2×11. Lorsque vous die 11er-multiplication de kennst, verdopple: 11×3=33, commeo 22×3=66." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 22 sind pair: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Doppelziffern-modÃ¨le", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. Die ersten 4 zeigen ein Doppelziffern-modÃ¨le." },
      ],
      23: [
        { title: "20+3 Zerlegung", description: "23×n = (20×n) + (3×n). Beispiel: 23×5 = 100 + 15 = 115." },
        { title: "25-2 Strategie", description: "23=25-2. Beispiel: 23×4 = 100 - 8 = 92. Nützlich wenn multiplication mit 25 einfacher ist." },
        { title: "Primnombre-modÃ¨le", description: "Da 23 eine Primnombre ist,a sie ein spezielles modÃ¨le. Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      24: [
        { title: "Mehrfach-Faktor-Beziehungen", description: "24=2×12=3×8=4×6. Kann auf viele Arten berechnet werden. 24×5 = 12×10 = 120." },
        { title: "toujours pair und durch 4 Teilbar", description: "Alle Vielfachen von 24 sind pair und durch 3, 4, 6 und 8 teilbar." },
        { title: "Stunden-Beziehung", description: "24 Stunden = 1 Tag. 48 Stunden = 2 Tage, 72 Stunden = 3 Tage. Nützlich für Zeitberechnungen." },
      ],
      25: [
        { title: "25, 50, 75, 00 modÃ¨le", description: "Alle Vielfachen von 25 enden auf 25, 50, 75 ou 00. Sehr regelmäßig und vorhersehbar." },
        { title: "Viertel-Beziehung", description: "25 = 100÷4. commeo 25×4=100. Diese Beziehung ist sehr nützlich für Prozent- und Bruchrechnungen." },
        { title: "Quadrat von 5", description: "25=5². Diese spezielle Beziehung: 25×n = 5×5×n. Beispiel: 25×8 = 5×40 = 200." },
      ],
      26: [
        { title: "Doppelte der 13", description: "26=2×13. Lorsque vous die 13er-multiplication de kennst, verdopple: 13×7=91, commeo 26×7=182." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 26 sind pair: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 ou 30-4", description: "26×n = (25×n) + n ou (30×n) - (4×n). Beispiel: 26×4 = 100+4 = 104." },
      ],
      27: [
        { title: "Dreierpotenz", description: "27=3³ (3×3×3). Kubiknombre-Beziehung: 27, 54, 81, 108... (Vielfachen von 3)." },
        { title: "Dreifache der 9", description: "27=3×9. Verdreifache die 9er-multiplication de: 9×4=36, commeo 27×4=108." },
        { title: "30-3 Strategie", description: "27=30-3. Beispiel: 27×6 = 180-18 = 162. Einfache Berechnungsmethode." },
      ],
      28: [
        { title: "4×7 ou 2×14", description: "28=4×7=2×14. Kann auf mehrere Arten berechnet werden: 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "toujours pair und Durch 4 Teilbar", description: "Alle Vielfachen von 28 sind pair und durch ... teilbar 4 und 7: 28, 56, 84, 112, 140..." },
        { title: "Wochen-Beziehung", description: "28 Tage = 4 Wochen. Diese Beziehung ist nützlich für Kalenderberechnungen." },
      ],
      29: [
        { title: "30-1 Strategie", description: "29=30-1. 29×n = (30×n) - n. Beispiel: 29×7 = 210-7 = 203. Die effektivste Methode!" },
        { title: "Einerziffer-modÃ¨le", description: "Einerziffer: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (absteigende Reihenfolge). Vorhersehbar." },
        { title: "Primnombre-propriÃ©tÃ©", description: "Da 29 eine Primnombre ist,a sie keine einfachen Faktor-Beziehungen.requiert mentale Strategien." },
      ],
      30: [
        { title: "3×10", description: "30=3×10. Mit 30 multiplizieren: mit 10 multiplizieren, dann mit 3. 7×30 = 70×3 = 210." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 30 enden auf 0: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Dreifache Zehner-Vielfache", description: "30, 60, 90, 120, 150... Jede nombre erhÃ¶ht sich um 30. Sie sind das Dreifache der Zehner." },
      ],
      31: [
        { title: "30+1 Strategie", description: "31=30+1. 31×n = (30×n) + n. Beispiel: 31×7 = 210 + 7 = 217." },
        { title: "Primnombre-modÃ¨le", description: "Da 31 eine Primnombre ista ein spezielles modÃ¨le. Einerziffer: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Monatstage-Beziehung", description: "31 Tage ist die maxifoise Monatslänge. 31, 62 (2 Monate), 93 (3 Monate), 124 (4 Monate) für Kalenderberechnungen." },
      ],
      32: [
        { title: "Potenz von 2", description: "32=2⁵. Verdopplungskette: 2→4→8→16→32. Alle Vielfachen bewahren dieses modÃ¨le." },
        { title: "Doppelte der 16", description: "32=2×16. Lorsque vous die 16er-multiplication de kennst, verdopple: 16×5=80, commeo 32×5=160." },
        { title: "toujours pair und Durch 8 Teilbar", description: "Alle Vielfachen von 32 sind pair und durch ... teilbar 4, 8 und 16: 32, 64, 96, 128..." },
      ],
      33: [
        { title: "3×11", description: "33=3×11. Verdreifache die 11er-multiplication de: 11×4=44, commeo 33×4=132. ou multipliziere die 3er-multiplication de mit 11." },
        { title: "Repdigit-modÃ¨le", description: "33×1=33, 33×2=66, 33×3=99. Die ersten 3 zeigen Doppelziffern. Dann 132, 165..." },
        { title: "toujours durch 3 Teilbar", description: "Alle Vielfachen von 33 sind durch 3 und 11. Die Quersumme ist ein Vielfaches von 3." },
      ],
      34: [
        { title: "Doppelte der 17", description: "34=2×17. Verdopple die 17er-multiplication de: 17×6=102, commeo 34×6=204." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 34 sind pair: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340." },
        { title: "35-1 ou 30+4", description: "34×n = (35×n) - n ou (30×n) + (4×n). Beispiel: 34×5 = 175-5 = 170." },
      ],
      35: [
        { title: "5×7", description: "35=5×7. Du kannst beide multiplication den (5 und 7) nutzen: 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "Endet auf 5 ou 0", description: "Alle Vielfachen von 35 enden auf 5 ou 0: 35, 70, 105, 140, 175, 210, 245, 280..." },
        { title: "FÃ¼nfer von 7", description: "35, 70, 105, 140, 175... Multipliziere Vielfache von 7 mit 5. ou Vielfache von 5 mit 7." },
      ],
      36: [
        { title: "Quadrat von 6", description: "36=6². Außerdem 36=4×9=3×12=2×18. Mehrfache Faktor-Beziehungen." },
        { title: "Viele Teiler", description: "36a 9 Teiler: 1,2,3,4,6,9,12,18,36. Dasrend es sehr nützlich für Brüche." },
        { title: "Durch 4 und 9 Teilbar", description: "Alle Vielfachen von 36 sind durch 4 und 9. Die Quersumme ist ein Vielfaches von 9." },
      ],
      37: [
        { title: "40-3 Strategie", description: "37=40-3. 37×n = (40×n) - (3×n). Beispiel: 37×6 = 240 - 18 = 222." },
        { title: "Magische Beziehung zu 111", description: "37×3=111. Diese spezielle Beziehung: 37×6=222, 37×9=333. Bei jedem Vielfachen von 3donne es ein Repdigit-rÃ©sultat!" },
        { title: "Primnombre-Einzigartigkeit", description: "Da 37 eine Primnombre ista spezielle modÃ¨le. Die Strategien 35+2 ou 40-3 sind nützlich." },
      ],
      38: [
        { title: "Doppelte der 19", description: "38=2×19. Verdopple die 19er-multiplication de: 19×7=133, commeo 38×7=266." },
        { title: "40-2 Strategie", description: "38=40-2. 38×n = (40×n) - (2×n). Beispiel: 38×5 = 200 - 10 = 190." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 38 sind pair: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380." },
      ],
      39: [
        { title: "3×13", description: "39=3×13. Verdreifache die 13er-multiplication de: 13×4=52, commeo 39×4=156." },
        { title: "40-1 Strategie", description: "39=40-1. 39×n = (40×n) - n. Beispiel: 39×7 = 280 - 7 = 273. Sehr pratique!" },
        { title: "Durch 3 Teilbar", description: "Alle Vielfachen von 39 sind durch 3 und 13. Die Quersumme ist ein Vielfaches von 3." },
      ],
      40: [
        { title: "4×10", description: "40=4×10. Mit 40 multiplizieren: mit 4 multiplizieren, fÃ¼ge eine 0 am Ende hinzu. 7×40: 7×4=28, fÃ¼ge 0 hinzu: 280." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 40 enden auf 0: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400." },
        { title: "Vierfache der Zehner", description: "40, 80, 120, 160, 200... Jede nombre erhÃ¶ht sich um 40. Sie sind das 4-fache der Zehner." },
      ],
      41: [
        { title: "40+1 Strategie", description: "41=40+1. 41×n = (40×n) + n. Beispiel: 41×6 = 240 + 6 = 246. Die pratiqueste Methode!" },
        { title: "Primnombre-propriÃ©tÃ©en", description: "Da 41 eine Primnombre ist ist seulement durch 1 und 41 teilbar. Einerziffer: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "45-4 ou 50-9", description: "Alternative Strategien: 41×4 = 180-16 = 164. ou 41×5 = 250-45 = 205." },
      ],
      42: [
        { title: "6×7", description: "42=6×7. Du kannst beide multiplication den (6 und 7) nutzen: 42×3 = 6×3×7 = 18×7 = 126." },
        { title: "2×21 ou 3×14", description: "42=2×21=3×14. Kann auf mehrere Arten berechnet werden: 42×5 = 21×10 = 210." },
        { title: "toujours durch 6 Teilbar", description: "Alle Vielfachen von 42 sind durch 2, 3, 6 und 7: 42, 84, 126, 168, 210..." },
      ],
      43: [
        { title: "40+3 ou 45-2", description: "43=40+3 ou 45-2. Beispiel: 43×7 = 280+21 = 301 ou 315-14 = 301." },
        { title: "Primnombre-modÃ¨le", description: "Da 43 eine Primnombre istrequiert spezielle Strategien. Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "50-7 Strategie", description: "Mit großen nombreen: 43×8 = 400-56 = 344. Von 50 subtrahieren ist eine alternative Methode." },
      ],
      44: [
        { title: "Vierfache der 11", description: "44=4×11. Vervierfache die 11er-multiplication de: 11×6=66, commeo 44×6=264." },
        { title: "Repdigit-Ã¤hnlich", description: "44×1=44, 44×2=88. Die ersten 2 zeigen Doppelziffern. Dann 132, 176, 220..." },
        { title: "toujours pair und Durch 4 Teilbar", description: "Alle Vielfachen von 44 sind pair und durch ... teilbar 4 und 11: 44, 88, 132, 176, 220..." },
      ],
      45: [
        { title: "5×9", description: "45=5×9. Du kannst beide multiplication den (5 und 9) nutzen: 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "Endet auf 5 ou 0", description: "Alle Vielfachen von 45 enden auf 5 ou 0: 45, 90, 135, 180, 225, 270, 315, 360..." },
        { title: "Durch 9 Teilbar", description: "Alle Vielfachen von 45 sind durch 9. Die Quersumme ist ein Vielfaches von 9: 135 (1+3+5=9)." },
      ],
      46: [
        { title: "Doppelte der 23", description: "46=2×23. Verdopple die 23er-multiplication de: 23×7=161, commeo 46×7=322." },
        { title: "45+1 ou 50-4", description: "46×n = (45×n) + n ou (50×n) - (4×n). Beispiel: 46×5 = 225+5 = 230." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 46 sind pair: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460." },
      ],
      47: [
        { title: "50-3 Strategie", description: "47=50-3. 47×n = (50×n) - (3×n). Beispiel: 47×6 = 300 - 18 = 282. Die effektivste Methode!" },
        { title: "45+2 Alternative", description: "47=45+2. Beispiel: 47×8 = 360 + 16 = 376. Nützlich, Lorsque vous die 45er-multiplication de kennst." },
        { title: "Primnombre-Einzigartigkeit", description: "Da 47 eine Primnombre ista spezielle modÃ¨le. Einerziffer: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      48: [
        { title: "Mehrfache Faktor-Beziehungen", description: "48=6×8=4×12=3×16=2×24. Kann auf viele Arten berechnet werden: 48×5 = 12×20 = 240." },
        { title: "toujours pair mit mehreren Teilern", description: "Alle Vielfachen von 48 sind durch 2, 3, 4, 6, 8 und 12." },
        { title: "50-2 Strategie", description: "48=50-2. Beispiel: 48×7 = 350 - 14 = 336. Von runden nombreen subtrahieren." },
      ],
      49: [
        { title: "Quadrat von 7", description: "49=7². Nutze die 7er-multiplication de: 49×3 = 7×7×3 = 7×21 = 147. ou 7×3×7." },
        { title: "50-1 Strategie", description: "49=50-1. 49×n = (50×n) - n. Beispiel: 49×6 = 300 - 6 = 294. Sehr einfach!" },
        { title: "Quadratnombre-modÃ¨le", description: "49, 98, 147, 196, 245... Vielfache von 7 mit 7. Auch 7²×1, 7²×2, 7²×3..." },
      ],
      50: [
        { title: "5×10", description: "50=5×10. Mit 50 multiplizieren: mit 5 multiplizieren, fÃ¼ge eine 0 am Ende hinzu. 8×50: 8×5=40, fÃ¼ge 0 hinzu: 400." },
        { title: "Endet auf 0 ou 50", description: "Alle Vielfachen von 50 enden auf 0 ou 50: 50, 100, 150, 200, 250, 300, 350, 400..." },
        { title: "HÃ¤lfte von 100", description: "50×n = (100×n)÷2. Beispiel: 50×7 = 700÷2 = 350. Útil en Berechnungen Prozent-Beziehungs." },
      ],
      51: [
        { title: "50+1 Strategie", description: "51=50+1. 51×n = (50×n) + n. Beispiel: 51×7 = 350 + 7 = 357. Sehr pratique!" },
        { title: "3×17", description: "51=3×17. Verdreifache die 17er-multiplication de: 17×6=102, commeo 51×6=306." },
        { title: "55-4 Alternative", description: "51=55-4. Beispiel: 51×5 = 275-20 = 255. Nützlich, wenn multiplication mit 55 einfacher ist." },
      ],
      52: [
        { title: "4×13", description: "52=4×13. Vervierfache die 13er-multiplication de: 13×7=91, commeo 52×7=364." },
        { title: "50+2 ou 2×26", description: "52×n = (50×n) + (2×n) ou verdopple die 26er-multiplication de. Beispiel: 52×5 = 250+10 = 260." },
        { title: "Wochen-Annombre-modÃ¨le", description: "52 Wochen = 1 Jahr. 52, 104 (2 Jahre), 156 (3 Jahre)... Nützlich für Kalenderberechnungen." },
      ],
      53: [
        { title: "50+3 ou 55-2", description: "53=50+3 ou 55-2. Beispiel: 53×6 = 300+18 = 318 ou 330-12 = 318." },
        { title: "Primnombre-modÃ¨le", description: "Da 53 eine Primnombre istrequiert spezielle Strategien. Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "60-7 Strategie", description: "Mit großen nombreen: 53×8 = 480-56 = 424. Von 60 subtrahieren ist eine alternative Methode." },
      ],
      54: [
        { title: "6×9", description: "54=6×9. Du kannst beide multiplication den (6 und 9) nutzen: 54×5 = 9×5×6 = 45×6 = 270." },
        { title: "2×27 ou 3×18", description: "54=2×27=3×18. Kann auf mehrere Arten berechnet werden: 54×4 = 27×8 = 216." },
        { title: "Durch 9 Teilbar", description: "Alle Vielfachen von 54 sind durch 9. Die Quersumme ist ein Vielfaches von 9: 108 (1+0+8=9)." },
      ],
      55: [
        { title: "5×11", description: "55=5×11. Du kannst beide multiplication den (5 und 11) nutzen: 55×4 = 11×4×5 = 44×5 = 220." },
        { title: "Endet auf 5 ou 0", description: "Alle Vielfachen von 55 enden auf 5 ou 0: 55, 110, 165, 220, 275, 330, 385, 440..." },
        { title: "Dreiecksnombre", description: "55 = 1+2+3+4+5+6+7+8+9+10. Diese besondere SummenpropriÃ©tÃ©rend 55 mathematisch interessant." },
      ],
      56: [
        { title: "7×8", description: "56=7×8. Eines der schcommerigsten multiplicationspaare! Stärkt sowohl die 7er comme auch die 8er-multiplication de." },
        { title: "4×14 ou 2×28", description: "56=4×14=2×28. Kann auf mehrere Arten berechnet werden: 56×5 = 14×20 = 280." },
        { title: "toujours pair und Durch 7 Teilbar", description: "Alle Vielfachen von 56 sind pair und durch ... teilbar 4, 7 und 8: 56, 112, 168, 224..." },
      ],
      57: [
        { title: "3×19", description: "57=3×19. Verdreifache die 19er-multiplication de: 19×7=133, commeo 57×7=399." },
        { title: "60-3 Strategie", description: "57=60-3. 57×n = (60×n) - (3×n). Beispiel: 57×6 = 360 - 18 = 342. Sehr einfach!" },
        { title: "Durch 3 Teilbar", description: "Alle Vielfachen von 57 sind durch 3 und 19. Die Quersumme ist ein Vielfaches von 3." },
      ],
      58: [
        { title: "Doppelte der 29", description: "58=2×29. Verdopple die 29er-multiplication de: 29×7=203, commeo 58×7=406." },
        { title: "60-2 Strategie", description: "58=60-2. 58×n = (60×n) - (2×n). Beispiel: 58×6 = 360 - 12 = 348." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 58 sind pair: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580." },
      ],
      59: [
        { title: "60-1 Strategie", description: "59=60-1. 59×n = (60×n) - n. Beispiel: 59×7 = 420 - 7 = 413. PERFEKT!" },
        { title: "Primnombre-Einzigartigkeit", description: "Da 59 eine Primnombre ista spezielle modÃ¨le. Einerziffer: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "55+4 Alternative", description: "59=55+4. Beispiel: 59×8 = 440 + 32 = 472. Nützlich, Lorsque vous die 55er-multiplication de kennst." },
      ],
      60: [
        { title: "6×10", description: "60=6×10. Mit 60 multiplizieren: mit 6 multiplizieren, fÃ¼ge eine 0 am Ende hinzu. 7×60: 7×6=42, fÃ¼ge 0 hinzu: 420." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 60 enden auf 0: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600." },
        { title: "Mehrfache Faktor-Beziehungen", description: "60=2×30=3×20=4×15=5×12=6×10. Kann auf viele Arten berechnet werden!" },
      ],
      61: [
        { title: "60+1 Strategie", description: "61=60+1. 61×n = (60×n) + n. Beispiel: 61×7 = 420 + 7 = 427. Sehr pratique!" },
        { title: "Primnombre-propriÃ©tÃ©en", description: "Da 61 eine Primnombre ist ist seulement durch 1 und 61 teilbar. Einerziffer: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "65-4 Alternative", description: "61=65-4. Beispiel: 61×5 = 325-20 = 305. Nützlich, wenn multiplication mit 65 einfacher ist." },
      ],
      62: [
        { title: "Doppelte der 31", description: "62=2×31. Verdopple die 31er-multiplication de: 31×7=217, commeo 62×7=434." },
        { title: "60+2 Strategie", description: "62=60+2. 62×n = (60×n) + (2×n). Beispiel: 62×6 = 360 + 12 = 372." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 62 sind pair: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620." },
      ],
      63: [
        { title: "7×9", description: "63=7×9. Du kannst beide multiplication den (7 und 9) nutzen: 63×5 = 9×5×7 = 45×7 = 315." },
        { title: "Alternativa 3×21", description: "63=3×21. Verdreifache die 21er-multiplication de: 21×4=84, commeo 63×4=252." },
        { title: "Durch 7 und 9 Teilbar", description: "Alle Vielfachen von 63 sind durch 7 und 9. Die Quersumme ist ein Vielfaches von 9." },
      ],
      64: [
        { title: "Quadrat von 8", description: "64=8×8=8². Außerdem 64=2⁶. Verdopplungskette: 2→4→8→16→32→64." },
        { title: "Sechste Potenz von 2", description: "64=2⁶. Wichtig für 64-Bit-Architektur in der Computertechnik.forme die Grundlage des Binärsystems." },
        { title: "toujours pair und Durch 8 Teilbar", description: "Alle Vielfachen von 64 sind pair und durch ... teilbar 4, 8, 16 und 32: 64, 128, 192, 256..." },
      ],
      65: [
        { title: "5×13", description: "65=5×13. Du kannst beide multiplication den (5 und 13) nutzen: 65×4 = 13×4×5 = 52×5 = 260." },
        { title: "Endet auf 5 ou 0", description: "Alle Vielfachen von 65 enden auf 5 ou 0: 65, 130, 195, 260, 325, 390, 455, 520..." },
        { title: "60+5 ou 70-5", description: "65×n = (60×n) + (5×n) ou (70×n) - (5×n). Beispiel: 65×6 = 360+30 = 390." },
      ],
      66: [
        { title: "6×11", description: "66=6×11. Du kannst beide multiplication den (6 und 11) nutzen: 66×5 = 11×5×6 = 55×6 = 330." },
        { title: "Repdigit-Ã¤hnlich", description: "66×1=66, 66×2=132. comme 6 fois 11 folgt es dem modÃ¨le der 11er-multiplication de." },
        { title: "Alternativa 2×33", description: "66=2×33. Verdopple die 33er-multiplication de: 33×7=231, commeo 66×7=462." },
      ],
      67: [
        { title: "70-3 Strategie", description: "67=70-3. 67×n = (70×n) - (3×n). Beispiel: 67×7 = 490 - 21 = 469. Sehr einfach!" },
        { title: "Primnombre-modÃ¨le", description: "Da 67 eine Primnombre istrequiert spezielle Strategien. Einerziffer: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "65+2 Alternative", description: "67=65+2. Beispiel: 67×8 = 520 + 16 = 536. Nützlich, Lorsque vous die 65er-multiplication de kennst." },
      ],
      68: [
        { title: "4×17", description: "68=4×17. Vervierfache die 17er-multiplication de: 17×7=119, commeo 68×7=476." },
        { title: "2×34 ou 70-2", description: "68=2×34 ou 70-2. Beispiel: 68×6 = 420 - 12 = 408." },
        { title: "toujours pair und Durch 4 Teilbar", description: "Alle Vielfachen von 68 sind pair und durch ... teilbar 4 und 17: 68, 136, 204, 272, 340..." },
      ],
      69: [
        { title: "3×23", description: "69=3×23. Verdreifache die 23er-multiplication de: 23×7=161, commeo 69×7=483." },
        { title: "70-1 Strategie", description: "69=70-1. 69×n = (70×n) - n. Beispiel: 69×6 = 420 - 6 = 414. PERFEKT!" },
        { title: "Durch 3 Teilbar", description: "Alle Vielfachen von 69 sind durch 3 und 23. Die Quersumme ist ein Vielfaches von 3." },
      ],
      70: [
        { title: "7×10", description: "70=7×10. Mit 70 multiplizieren: mit 7 multiplizieren, fÃ¼ge eine 0 am Ende hinzu. 8×70: 8×7=56, fÃ¼ge 0 hinzu: 560." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 70 enden auf 0: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700." },
        { title: "Mehrfache Faktor-Beziehungen", description: "70=2×35=5×14=7×10. Kann auf viele Arten berechnet werden!" },
      ],
      71: [
        { title: "70+1 Strategie", description: "71=70+1. 71×n = (70×n) + n. Beispiel: 71×7 = 490 + 7 = 497. Sehr pratique!" },
        { title: "Primnombre-propriÃ©tÃ©en", description: "Da 71 eine Primnombre ist ist seulement durch 1 und 71 teilbar. Einerziffer: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "75-4 Alternative", description: "71=75-4. Beispiel: 71×5 = 375-20 = 355. Nützlich, wenn multiplication mit 75 einfacher ist." },
      ],
      72: [
        { title: "8×9", description: "72=8×9. Du kannst beide multiplication den (8 und 9) nutzen: 72×5 = 9×5×8 = 45×8 = 360." },
        { title: "6×12 ou 3×24", description: "72=6×12=3×24=4×18. Kann auf mehrere Arten berechnet werden: 72×4 = 12×24 = 288." },
        { title: "Viele Teiler", description: "72a 12 Teiler: 1,2,3,4,6,8,9,12,18,24,36,72. Sehr nützlich für Brüche!" },
      ],
      73: [
        { title: "70+3 ou 75-2", description: "73=70+3 ou 75-2. Beispiel: 73×6 = 420+18 = 438 ou 450-12 = 438." },
        { title: "Primnombre-modÃ¨le", description: "Da 73 eine Primnombre istrequiert spezielle Strategien. Es Die 21º número primo. Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "80-7 Strategie", description: "Mit großen nombreen: 73×8 = 640-56 = 584. Von 80 subtrahieren ist eine alternative Methode." },
      ],
      74: [
        { title: "2×37", description: "74=2×37. Verdopple die 37er-multiplication de: 37×7=259, commeo 74×7=518." },
        { title: "75-1 ou 70+4", description: "74×n = (75×n) - n ou (70×n) + (4×n). Beispiel: 74×5 = 375-5 = 370." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 74 sind pair: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740." },
      ],
      75: [
        { title: "3×25 ou 5×15", description: "75=3×25=5×15. Beispiel: 75×4 = 25×12 = 300 ou 15×20 = 300." },
        { title: "modÃ¨le 25, 50, 75, 00", description: "Alle Vielfachen von 75 enden auf 25, 50, 75 ou 00. Sehr regelmäßig und vorhersagbar." },
        { title: "Prozent-Beziehung", description: "75 = 100×¾. commeo 75% = 3/4. Diese Beziehung ist sehr nützlich für Prozentberechnungen." },
      ],
      76: [
        { title: "4×19", description: "76=4×19. Vervierfache die 19er-multiplication de: 19×7=133, commeo 76×7=532." },
        { title: "2×38 ou 80-4", description: "76=2×38 ou 80-4. Beispiel: 76×6 = 480 - 24 = 456." },
        { title: "toujours pair und Durch 4 Teilbar", description: "Alle Vielfachen von 76 sind pair und durch ... teilbar 4 und 19: 76, 152, 228, 304, 380..." },
      ],
      77: [
        { title: "7×11", description: "77=7×11. Du kannst beide multiplication den (7 und 11) nutzen: 77×5 = 11×5×7 = 55×7 = 385." },
        { title: "Repdigit-modÃ¨le-Ã¤hnlich", description: "77×1=77, 77×2=154. comme Produkt von 7 und 11montre ein spezielles modÃ¨le." },
        { title: "80-3 Strategie", description: "77=80-3. Beispiel: 77×6 = 480 - 18 = 462. Von runden nombreen subtrahieren." },
      ],
      78: [
        { title: "6×13", description: "78=6×13=2×39=3×26. Kann auf mehrere Arten berechnet werden: 78×5 = 13×30 = 390." },
        { title: "80-2 Strategie", description: "78=80-2. 78×n = (80×n) - (2×n). Beispiel: 78×7 = 560 - 14 = 546." },
        { title: "Durch 2 Teilbar und 3", description: "Alle Vielfachen von 78 sind durch 2 und 3. Die Quersumme ist ein Vielfaches von 3." },
      ],
      79: [
        { title: "80-1 Strategie", description: "79=80-1. 79×n = (80×n) - n. Beispiel: 79×7 = 560 - 7 = 553. PERFEKT!" },
        { title: "Primnombre-Einzigartigkeit", description: "Da 79 eine Primnombre ista spezielle modÃ¨le. Einerziffer: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "75+4 Alternative", description: "79=75+4. Beispiel: 79×8 = 600 + 32 = 632. Nützlich, Lorsque vous die 75er-multiplication de kennst." },
      ],
      80: [
        { title: "8×10", description: "80=8×10. Mit 80 multiplizieren: mit 8 multiplizieren, fÃ¼ge eine 0 am Ende hinzu. 7×80: 7×8=56, fÃ¼ge 0 hinzu: 560." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 80 enden auf 0: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800." },
        { title: "Mehrfache Faktor-Beziehungen", description: "80=2×40=4×20=5×16=8×10. Kann auf viele Arten berechnet werden!" },
      ],
      81: [
        { title: "Quadrat von 9", description: "81=9×9=9². Außerdem 81=3⁴. Ejemplo perfecto de Beziehungen von cuadrados y potencias." },
        { title: "80+1 Strategie", description: "81=80+1. 81×n = (80×n) + n. Beispiel: 81×7 = 560 + 7 = 567. Sehr pratique!" },
        { title: "Vierte Dreierpotenz", description: "81=3⁴=3×3×3×3. Wichtig für nombreen mit Exponenten zu verstehen. Durch 9 Teilbar und 27." },
      ],
      82: [
        { title: "2×41", description: "82=2×41. Verdopple die 41er-multiplication de: 41×7=287, commeo 82×7=574." },
        { title: "80+2 Strategie", description: "82=80+2. 82×n = (80×n) + (2×n). Beispiel: 82×6 = 480 + 12 = 492." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 82 sind pair: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820." },
      ],
      83: [
        { title: "80+3 ou 85-2", description: "83=80+3 ou 85-2. Beispiel: 83×6 = 480+18 = 498 ou 510-12 = 498." },
        { title: "Primnombre-modÃ¨le", description: "Da 83 eine Primnombre istrequiert spezielle Strategien. Einerziffer: 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "90-7 Strategie", description: "Mit großen nombreen: 83×8 = 720-56 = 664. Von 90 subtrahieren ist eine alternative Methode." },
      ],
      84: [
        { title: "7×12", description: "84=7×12. Du kannst beide multiplication den (7 und 12) nutzen: 84×5 = 12×5×7 = 60×7 = 420." },
        { title: "6×14 ou 4×21", description: "84=6×14=4×21=3×28. Kann auf mehrere Arten berechnet werden: 84×4 = 21×16 = 336." },
        { title: "Viele Teiler", description: "84a 12 Teiler: 1,2,3,4,6,7,12,14,21,28,42,84. Sehr nützlich für Brüche!" },
      ],
      85: [
        { title: "5×17", description: "85=5×17. Du kannst beide multiplication den (5 und 17) nutzen: 85×4 = 17×4×5 = 68×5 = 340." },
        { title: "Endet auf 5 ou 0", description: "Alle Vielfachen von 85 enden auf 5 ou 0: 85, 170, 255, 340, 425, 510, 595, 680..." },
        { title: "90-5 ou 80+5", description: "85×n = (90×n) - (5×n) ou (80×n) + (5×n). Beispiel: 85×6 = 540-30 = 510." },
      ],
      86: [
        { title: "2×43", description: "86=2×43. Verdopple die 43er-multiplication de: 43×7=301, commeo 86×7=602." },
        { title: "90-4 Strategie", description: "86=90-4. 86×n = (90×n) - (4×n). Beispiel: 86×6 = 540 - 24 = 516." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 86 sind pair: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860." },
      ],
      87: [
        { title: "3×29", description: "87=3×29. Verdreifache die 29er-multiplication de: 29×7=203, commeo 87×7=609." },
        { title: "90-3 Strategie", description: "87=90-3. 87×n = (90×n) - (3×n). Beispiel: 87×7 = 630 - 21 = 609. Sehr einfach!" },
        { title: "Durch 3 Teilbar", description: "Alle Vielfachen von 87 sind durch 3 und 29. Die Quersumme ist ein Vielfaches von 3." },
      ],
      88: [
        { title: "8×11", description: "88=8×11. Du kannst beide multiplication den (8 und 11) nutzen: 88×5 = 11×5×8 = 55×8 = 440." },
        { title: "Repdigit-nombre", description: "88×1=88, 88×2=176. Die Repdigit-propriÃ©tÃ© (commederholung von 8s) erleichtert die visuelle Erkennung." },
        { title: "4×22 ou 2×44", description: "88=4×22=2×44. Kann auf mehrere Arten berechnet werden: 88×5 = 22×20 = 440." },
      ],
      89: [
        { title: "90-1 Strategie", description: "89=90-1. 89×n = (90×n) - n. Beispiel: 89×7 = 630 - 7 = 623. PERFEKT!" },
        { title: "Primnombre-Einzigartigkeit", description: "Da 89 eine Primnombre ista spezielle modÃ¨le. Einerziffer: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "85+4 Alternative", description: "89=85+4. Beispiel: 89×8 = 680 + 32 = 712. Nützlich, Lorsque vous die 85er-multiplication de kennst." },
      ],
      90: [
        { title: "9×10", description: "90=9×10. Mit 90 multiplizieren: mit 9 multiplizieren, fÃ¼ge eine 0 am Ende hinzu. 7×90: 7×9=63, fÃ¼ge 0 hinzu: 630." },
        { title: "Endet toujours auf 0", description: "Alle Vielfachen von 90 enden auf 0: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900." },
        { title: "Mehrfache Faktor-Beziehungen", description: "90=2×45=3×30=5×18=6×15=9×10. Kann auf viele Arten berechnet werden!" },
      ],
      91: [
        { title: "7×13", description: "91=7×13. Du kannst beide multiplication den (7 und 13) nutzen: 91×5 = 7×5×13 = 35×13 = 455." },
        { title: "90+1 Strategie", description: "91=90+1. 91×n = (90×n) + n. Beispiel: 91×6 = 540 + 6 = 546. Práctico!" },
        { title: "Producto de Primos", description: "91=7×13 (producto de dos primos). Durch 7 Teilbar und 13." },
      ],
      92: [
        { title: "4×23", description: "92=4×23. Vervierfache die 23er-multiplication de: 23×7=161, commeo 92×7=644." },
        { title: "90+2 ou 100-8", description: "92×n = (90×n)+(2×n) ou (100×n)-(8×n). Beispiel: 92×5 = 450+10 = 460." },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 92 sind pair: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920." },
      ],
      93: [
        { title: "3×31", description: "93=3×31. Verdreifache die 31er-multiplication de: 31×6=186, commeo 93×6=558." },
        { title: "90+3 Strategie", description: "93=90+3. 93×n = (90×n) + (3×n). Beispiel: 93×7 = 630 + 21 = 651." },
        { title: "Durch 3 Teilbar", description: "Alle Vielfachen von 93 sind durch 3. Die Quersumme ist ein Vielfaches von 3." },
      ],
      94: [
        { title: "2×47", description: "94=2×47. Verdopple die 47er-multiplication de: 47×7=329, commeo 94×7=658." },
        { title: "100-6 Strategie", description: "94=100-6. 94×n = (100×n) - (6×n). Beispiel: 94×5 = 500 - 30 = 470. PERFEKT!" },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 94 sind pair: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940." },
      ],
      95: [
        { title: "5×19", description: "95=5×19. Du kannst beide multiplication den (5 und 19) nutzen: 95×4 = 19×4×5 = 76×5 = 380." },
        { title: "Endet auf 5 ou 0", description: "Alle Vielfachen von 95 enden auf 5 ou 0: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950." },
        { title: "100-5 Strategie", description: "95=100-5. 95×n = (100×n) - (5×n). Beispiel: 95×6 = 600 - 30 = 570. Sehr einfach!" },
      ],
      96: [
        { title: "8×12", description: "96=8×12. Du kannst beide multiplication den nutzen: 96×5 = 12×5×8 = 60×8 = 480." },
        { title: "Mehrfache Faktor-Beziehungen", description: "96=8×12=6×16=4×24=3×32=2×48. Kann auf viele Arten berechnet werden!" },
        { title: "Potenz von 2 × 3", description: "96=2⁵×3. 32 Beziehung×3.a viele Teiler (12 Teiler)." },
      ],
      97: [
        { title: "100-3 Strategie", description: "97=100-3. 97×n = (100×n) - (3×n). Beispiel: 97×7 = 700 - 21 = 679. PERFEKT!" },
        { title: "Primnombre-modÃ¨le", description: "Da 97 eine Primnombre ista spezielle modÃ¨le. Einerziffer: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Primnombre am nächsten zu 100", description: "Die größte Primnombre kleiner comme 100. Diese propriÃ©tÃ© erleichtert die Berechnung sehr." },
      ],
      98: [
        { title: "2×49", description: "98=2×49=2×7². Verdopple die 49er-multiplication de: 49×7=343, commeo 98×7=686." },
        { title: "100-2 Strategie", description: "98=100-2. 98×n = (100×n) - (2×n). Beispiel: 98×6 = 600 - 12 = 588. SUPER EINFACH!" },
        { title: "toujours pair nombreen", description: "Alle Vielfachen von 98 sind pair: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980." },
      ],
      99: [
        { title: "9×11", description: "99=9×11. Du kannst beide multiplication den nutzen: 99×5 = 11×5×9 = 55×9 = 495." },
        { title: "100-1 Strategie", description: "99=100-1. 99×n = (100×n) - n. Beispiel: 99×7 = 700 - 7 = 693. PERFEKT!" },
        { title: "Repdigit-modÃ¨le", description: "99 (commederholung von 9s), 198, 297, 396, 495... Die visuelle Erkennung ist einfach!" },
      ],
      100: [
        { title: "10×10 Beziehung", description: "100=10×10=10². Mit 100 multiplizieren: füge zwei Nullen am Ende hinzu. 7×100: 700!" },
        { title: "Endet toujours auf 00", description: "Alle Vielfachen von 100 enden auf 00: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000." },
        { title: "Basis des Dezifoissystems", description: "100=10². Hundertersystem, Prozentberechnungen, Grundlage zum Verständnis von Dezifoisnombreen!" },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Denken, dass 1×1=2", solution: "Denk daran: Alles, ce qui mit 1 multipliziert wird, bleibt gleich. 1 Gruppe von 1 ist seulement 1." },
        { mistake: "Verwechseln mit der addition", solution: "Mit 1 multiplizieren ist anders comme addieren. 5+1=6, aber 5×1=5." },
      ],
      2: [
        { mistake: "Verwechseln 2×6=12 mit 2×7=14", solution: "Nutze in Zweierschritten zählen: 2, 4, 6, 8, 10, 12, 14. Zähle sorgfältig ohne zu überspringen." },
        { mistake: "Verwechselnse mit großen nombreen", solution: "Zerlege: 2×8 ist seulement 8+8. doubler ist einfache addition." },
      ],
      3: [
        { mistake: "Verwechseln 3×6=18 mit 3×7=21", solution: "Denk daran, das +3-modÃ¨le: nach 18 kommt 21. Zähle in Dreierschritten zur Überprüfung." },
        { mistake: "Verwechseln 3×8=24 mit 3×9=27", solution: "Nutze den Trick von Quersumme: 24 (2+4=6) und 27 (2+7=9), folgt dem 3-6-9-modÃ¨le." },
      ],
      4: [
        { mistake: "Denken, dass 4×7=24 (statt 28)", solution: "Denk daran: 4×6=24, commeo 4×7 muss 4 mehr sein, commeo 28." },
        { mistake: "Verwechseln mit der multiplication de der 2", solution: "Die 4er-multiplication de ist toujours el doble de Die 2er-multiplication de. Überprüfe doubler." },
      ],
      5: [
        { mistake: "Verwechseln el orden (25 antes de 20)", solution: "Das modÃ¨le ist konsistent: 5, 10, 15, 20, 25. Jede nombre erhÃ¶ht sich um 5." },
        { mistake: "Denken, dass 5×impar Endet toujours auf 5", solution: "En realidad 5×par endet auf 0, 5×impar endet auf 5." },
      ],
      6: [
        { mistake: "Verwechseln 6×7=42 mit 6×8=48", solution: "Das ist ein schcommeriges Paar! Denk daran: 6×7=42 (reimt sich 'sieben sechs'), dann fÃ¼ge 6 hinzu: 48." },
        { mistake: "Verwechseln 6×9=54 mit 6×8=48", solution: "Nutze die 6er-multiplication de: 6×8=48, dann +6=54. ou berechne 6×9 como 60-6=54." },
        { mistake: "Verwechseln mit der multiplication de der 3", solution: "Die 6er-multiplication de ist toujours el doble de Die 3er-multiplication de. 3×4=12, commeo 6×4=24." },
      ],
      7: [
        { mistake: "Verwechseln 7×8=56 mit 7×6=42", solution: "Das sind die schcommerigsten! Merktrick: '5-6-7-8' (56=7×8). O desde 7×7=49, dann +7=56." },
        { mistake: "Verwechseln 7×9=63 mit 7×8=56", solution: "modÃ¨le: 7×8=56, dann +7=63. O Quersumme: 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "Vollständig überspringen Die 7er-multiplication de", solution: "Obwohl die 7 schcommerig erscheint, kann sie mit Übung gelernt werden. Beginne mit kleinen Schritten: lerne die einfachen 7×1, 7×2, 7×5, 7×10." },
      ],
      8: [
        { mistake: "Verwechseln 8×7=56 mit 8×8=64", solution: "Einfacher Merktrick 8×8=64: 'ocho ocho 64' o '8²=64'." },
        { mistake: "Verwechseln 8×9=72 mit 8×8=64", solution: "Beginne von 8×8=64, dann +8=72. ou 80-8=72 (10×8 minus 8)." },
        { mistake: "Verwechseln mit der multiplication de der 4", solution: "Die 8 ist toujours el Doppelte der 4. 4×6=24, commeo 8×6=48. Überprüfe doubler." },
      ],
      9: [
        { mistake: "Verwechseln 9×8=72 mit 9×7=63", solution: "Nutze der Finger-Trick o Quersumme: 72 (7+2=9), 63 (6+3=9). Denk daran, dass 72>63." },
        { mistake: "Fcommech anwenden der Finger-Trick", solution: "Richtige Reihenfolge: Linke Finger 1-5, rechte Finger 6-10. Die Finger links vom gebeugten Finger sind Zehner, die rechts sind Einer." },
        { mistake: "Verwechseln 9×9=81 mit 9×8=72", solution: "9×9=81 ist besonders: 'nueve nueve 81' o '9²=81'. Quersumme: 81 (8+1=9), 72 (7+2=9)." },
      ],
      10: [
        { mistake: "Vergessen die Null", solution: "Die einfachste Erinnerung: Lorsque vous mit 10 multipliez, füge seulement eine Null am Ende hinzu. 6×10=60, 25×10=250." },
        { mistake: "Zu viele Nullen hinzufügen", solution: "multiplication mit 10 fügt seulement eine Null hinzu. Nicht 100 (zwei Nullen), 1000 (drei Nullen), seulement 10 (eine Null)." },
      ],
      11: [
        { mistake: "Denken, dass 11×12=121 (statt 132)", solution: "Das modÃ¨le von Doppelziffern funktioniert seulement von 11×1 bis 11×9. 11×10=110, 11×12=132." },
        { mistake: "Fcommech anwenden den Trick von Ziffernsumme", solution: "23×11: Addiere die Ziffern (2+3=5), setze es in die Mitte: 253. Wenn die Summe >9,donne es einen Übertrag: 67×11: 6_(6+7=13)_7 = 6_(13)_7 = 737." },
        { mistake: "Denken, dass 11×11=111", solution: "11×11=121, nicht 111. Jedes Vielfache von 11 fügt 11 zum vorherigen hinzu: 99+11=110, 110+11=121." },
      ],
      12: [
        { mistake: "Verwechseln 12×8=84 mit 12×9=108", solution: "12×8=96 (8 docenas), 12×9=108 (9 docenas). 84 ist tatsächlich 12×7. Überprüfe contando docenas." },
        { mistake: "Verwechseln 12 mit 10", solution: "12×5=60, 10×5=50. Die 12 ist toujours 20% más que 10 (10 más 2)." },
      ],
      13: [
        { mistake: "Verwechseln 13×7=91 mit 13×8=104", solution: "13×7=91, 13×8=104. Der Unterschied ist 13. Nutze la 10+3 Strategie: 70+21=91, 80+24=104." },
        { mistake: "Verwechseln 13 mit 3 ou 30", solution: "13×4=52, no 3×4=12. Auch nicht 30×4=120. Die 13 ist exactement 10+3." },
      ],
      14: [
        { mistake: "Denken, dass 14×7=98 (korrekt ist 14×7=98!)", solution: "14×7=98 ist korrekt! Aber vergiss nicht 14×8=112 (98+14=112). Denk daran, dass es el doble de Die 7er-multiplication de." },
        { mistake: "Verwechseln 14×6=72 mit 14×6=84", solution: "14×6=84 ist korrekt (7×6=42, ×2=84). 72 ist tatsächlich 12×6 ou 8×9." },
      ],
      15: [
        { mistake: "Denken, dass 15×6=80 (statt 90)", solution: "15×6=90 (1.5 docenas). 80 ist tatsächlich 16×5. Calcula 15×6 como 3×6=18, dann ×5=90 ou 5×6=30, dann ×3=90." },
        { mistake: "Verwechseln 15×4=50", solution: "15×4=60, nicht 50. Denk daran, dass 15 minutos×4 = 1 hora (60 minutos)." },
      ],
      16: [
        { mistake: "Verwechseln 16×6=84 mit 16×6=96", solution: "16×6=96 ist korrekt (8×6=48, ×2=96). 84 ist tatsächlich 14×6 ou 12×7." },
        { mistake: "Verwechseln 16 mit 6", solution: "16×4=64, no 6×4=24. 16 es muy diferente de 6. Denk daran, dass 16=2⁴." },
      ],
      17: [
        { mistake: "Verwechseln 17×6=102 mit 17×7=119", solution: "20-3 Strategie: 17×6=120-18=102, 17×7=140-21=119. ou 10+7: 60+42=102, 70+49=119." },
        { mistake: "Verwechseln 17×8=126 mit 17×9=153", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 ist tatsächlich 18×7." },
      ],
      18: [
        { mistake: "Verwechseln 18×7=126 mit 18×8=144", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). Der Unterschied ist 18." },
        { mistake: "Verwechseln 18×6=108 mit 18×6=104", solution: "18×6=108 ist korrekt (6×6=36, ×3 ou 9×6=54, ×2). 104 ist tatsächlich 13×8." },
      ],
      19: [
        { mistake: "Denken, dass 19×5=100 (statt 95)", solution: "19×5=95, no 100 (20×5=100). 19 es 1 minus que 20, así que 100-5=95." },
        { mistake: "Verwechseln 19×6=114 mit 19×7=133", solution: "20-1 Strategie: 19×6=120-6=114, 19×7=140-7=133. Jedes fois subtrahiere den Multiplikator von 20." },
      ],
      20: [
        { mistake: "Denken, dass 20×7=120 (statt 140)", solution: "20×7=140, no 120 (20×6=120). 10×7=70, duplica: 140. ou 7×20=7×10×2." },
        { mistake: "Vergessen el cero", solution: "Alle Vielfachen von 20 müssen enden auf 0: 20, 40, 60, 80, 100... 20×8=160, no 16!" },
      ],
      21: [
        { mistake: "Denken, dass 21×5=100 (statt 105)", solution: "21×5=105, nicht 100. 20×5=100, más 5 más: 105. ou 3×7×5 = 21×5 = 105." },
        { mistake: "Verwechseln 21×7=140 mit 21×7=147", solution: "21×7=147 ist korrekt (3×7×7 ou 140+7). 140 ist tatsächlich 20×7." },
        { mistake: "Verwechseln 21 mit 12", solution: "21×4=84, no 12×4=48. Presta atención al orden de los dígitos: 21 es muy diferente de 12." },
      ],
      22: [
        { mistake: "Denken, dass 22×5=100 (statt 110)", solution: "22×5=110, nicht 100. 11×5=55, duplica: 110. ou 20×5=100, más 2×5=10: 110." },
        { mistake: "Verwechseln 22×9=198 mit 22×9=188", solution: "22×9=198 ist korrekt (11×9=99, ×2). 188 es otro cálculo." },
      ],
      23: [
        { mistake: "Denken, dass 23×4=82 (statt 92)", solution: "23×4=92, nicht 82. 20×4=80, más 3×4=12: 92. 82 ist ein anderes rÃ©sultat." },
        { mistake: "Verwechseln 23×5=105 mit 23×5=115", solution: "23×5=115 ist korrekt (20×5=100, 3×5=15, total 115). 105 ist tatsächlich 21×5." },
      ],
      24: [
        { mistake: "Denken, dass 24×5=100 (statt 120)", solution: "24×5=120, nicht 100. Un díaa 24 horas, 5 Tage = 120 horas. ou 12×10=120." },
        { mistake: "Verwechseln 24×7=158 mit 24×7=168", solution: "24×7=168 ist korrekt (4×6×7 ou 3×8×7). 158 ist ein anderes rÃ©sultat." },
      ],
      25: [
        { mistake: "Denken, dass 25×8=180 (statt 200)", solution: "25×8=200, nicht 180. 25×4=100, commeo 25×8=200. ou 5×5×8 = 25×8 = 200." },
        { mistake: "Adivinar incorrectamente los últimos dos dígitos", solution: "Los Vielfachen von 25 siempre enden auf 25, 50, 75 ou 00. No puede ser otra cosa!" },
      ],
      26: [
        { mistake: "Verwechseln 26×5=120 mit 26×5=130", solution: "26×5=130 ist korrekt (13×5=65, ×2). 120 ist tatsächlich 24×5." },
        { mistake: "Verwechseln 26 mit 16 ou 36", solution: "26×4=104, no 16×4=64 ou 36×4=144. Lee los dígitos cuidadosamente." },
      ],
      27: [
        { mistake: "Denken, dass 27×4=98 (statt 108)", solution: "27×4=108, nicht 98. 30×4=120, minus 3×4=12: 108. ou 9×4=36, ×3=108." },
        { mistake: "Verwechseln 27×7=179 mit 27×7=189", solution: "27×7=189 ist korrekt (30×7=210, minus 3×7=21: 189). 179 ist ein anderes rÃ©sultat." },
      ],
      28: [
        { mistake: "Denken, dass 28×5=130 (statt 140)", solution: "28×5=140, nicht 130. 4×7×5 = 20×7 = 140. ou 14×10=140." },
        { mistake: "Verwechseln 28×9=242 mit 28×9=252", solution: "28×9=252 ist korrekt (4×7×9 ou 30×9 minus 2×9). 242 ist ein anderes rÃ©sultat." },
      ],
      29: [
        { mistake: "Denken, dass 29×5=140 (statt 145)", solution: "29×5=145, nicht 140. 30×5=150, minus 5: 145. 140 ist tatsächlich 28×5." },
        { mistake: "Verwechseln 29×7=203 mit 29×7=193", solution: "29×7=203 ist korrekt (30×7=210, minus 7). 193 es otro cálculo." },
      ],
      30: [
        { mistake: "Denken, dass 30×7=200 (statt 210)", solution: "30×7=210, no 200 (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Vergessen el cero", solution: "Alle Vielfachen von 30 müssen enden auf 0: 30, 60, 90, 120, 150... 30×8=240, no 24!" },
      ],
      31: [
        { mistake: "Denken, dass 31×5=145 (statt 155)", solution: "31×5=155, nicht 145. 30×5=150, más 5: 155. 145 ist tatsächlich 29×5." },
        { mistake: "Verwechseln 31×7=207 mit 31×7=217", solution: "31×7=217 ist korrekt (30×7=210, más 7). 207 ist ein anderes rÃ©sultat." },
      ],
      32: [
        { mistake: "Denken, dass 32×5=150 (statt 160)", solution: "32×5=160, nicht 150. 16×5=80, duplica: 160. ou 32×10=320, la mitad es 160." },
        { mistake: "Verwechseln 32×7=214 mit 32×7=224", solution: "32×7=224 ist korrekt (16×7=112, ×2). 214 es otro cálculo." },
      ],
      33: [
        { mistake: "Denken, dass 33×4=122 (statt 132)", solution: "33×4=132, nicht 122. 11×4=44, ×3=132. ou 30×4=120, más 3×4=12: 132." },
        { mistake: "Verwechseln 33×9=297 mit 33×9=287", solution: "33×9=297 ist korrekt (11×9=99, ×3). 287 ist ein anderes rÃ©sultat." },
      ],
      34: [
        { mistake: "Denken, dass 34×5=160 (statt 170)", solution: "34×5=170, nicht 160. 17×5=85, duplica: 170. 160 ist tatsächlich 32×5." },
        { mistake: "Verwechseln 34×8=262 mit 34×8=272", solution: "34×8=272 ist korrekt (17×8=136, ×2). 262 ist ein anderes rÃ©sultat." },
      ],
      35: [
        { mistake: "Denken, dass 35×6=200 (statt 210)", solution: "35×6=210, nicht 200. 5×6=30, 7×6=42, 30×7=210 ou 5×42=210." },
        { mistake: "Verwechseln 35×8=270 mit 35×8=280", solution: "35×8=280 ist korrekt (5×8=40, 7×8=56, 40×7=280). 270 ist tatsächlich 27×10." },
      ],
      36: [
        { mistake: "Denken, dass 36×5=170 (statt 180)", solution: "36×5=180, nicht 170. 6×5=30, ×6=180. ou 18×10=180. 170 ist tatsächlich 34×5." },
        { mistake: "Verwechseln 36×7=242 mit 36×7=252", solution: "36×7=252 ist korrekt (6×7=42, ×6 ou 9×7=63, ×4). 242 ist ein anderes rÃ©sultat." },
      ],
      37: [
        { mistake: "Denken, dass 37×5=175 (statt 185)", solution: "37×5=185, nicht 175. 40×5=200, minus 3×5=15: 185. 175 ist tatsächlich 35×5." },
        { mistake: "Calcular incorrectamente después de 37×3=111", solution: "37×3=111, 37×6=222, 37×9=333. Cada múltiplo de 3 es repdigit! 37×7=259, 37×8=296." },
      ],
      38: [
        { mistake: "Denken, dass 38×5=180 (statt 190)", solution: "38×5=190, nicht 180. 19×5=95, duplica: 190. 180 ist tatsächlich 36×5." },
        { mistake: "Verwechseln 38×9=332 mit 38×9=342", solution: "38×9=342 ist korrekt (19×9=171, ×2 ou 40×9=360, minus 2×9=18). 332 ist ein anderes rÃ©sultat." },
      ],
      39: [
        { mistake: "Denken, dass 39×5=185 (statt 195)", solution: "39×5=195, nicht 185. 40×5=200, minus 5: 195. 185 ist tatsächlich 37×5." },
        { mistake: "Verwechseln 39×8=302 mit 39×8=312", solution: "39×8=312 ist korrekt (40×8=320, minus 8). 302 ist ein anderes rÃ©sultat." },
      ],
      40: [
        { mistake: "Denken, dass 40×7=270 (statt 280)", solution: "40×7=280, nicht 270. 4×7=28, fÃ¼ge hinzu un 0: 280. ou 10×7=70, ×4=280." },
        { mistake: "Vergessen el cero", solution: "Alle Vielfachen von 40 müssen enden auf 0: 40, 80, 120, 160, 200... 40×9=360, no 36!" },
      ],
      41: [
        { mistake: "Denken, dass 41×5=200 (statt 205)", solution: "41×5=205, nicht 200. 40×5=200, más 5: 205. Denk toujours daran fÃ¼ge hinzur ese 1 extra." },
        { mistake: "Verwechseln 41×9=360 mit 41×9=369", solution: "41×9=369 ist korrekt (40×9=360, más 9). 360 ist tatsächlich 40×9." },
      ],
      42: [
        { mistake: "Denken, dass 42×5=200 (statt 210)", solution: "42×5=210, nicht 200. 6×5=30, 7×5=35, 30+35=65... ou 40×5=200, más 2×5=10: 210." },
        { mistake: "Verwechseln 42×8=326 mit 42×8=336", solution: "42×8=336 ist korrekt (6×8=48, 7×8=56 ou 40×8=320, más 16). 326 ist ein anderes rÃ©sultat." },
      ],
      43: [
        { mistake: "Denken, dass 43×5=205 (statt 215)", solution: "43×5=215, nicht 205. 40×5=200, más 3×5=15: 215. 205 ist tatsächlich 41×5." },
        { mistake: "Verwechseln 43×9=377 mit 43×9=387", solution: "43×9=387 ist korrekt (40×9=360, más 3×9=27). 377 ist ein anderes rÃ©sultat." },
      ],
      44: [
        { mistake: "Denken, dass 44×5=210 (statt 220)", solution: "44×5=220, nicht 210. 11×5=55, ×4=220. ou 40×5=200, más 4×5=20: 220." },
        { mistake: "Verwechseln 44×9=386 mit 44×9=396", solution: "44×9=396 ist korrekt (11×9=99, ×4 ou 40×9=360, más 4×9=36). 386 ist ein anderes rÃ©sultat." },
      ],
      45: [
        { mistake: "Denken, dass 45×5=220 (statt 225)", solution: "45×5=225, nicht 220. 9×5=45, ×5=225. ou 40×5=200, más 5×5=25: 225." },
        { mistake: "Verwechseln 45×8=350 mit 45×8=360", solution: "45×8=360 ist korrekt (9×8=72, ×5 ou 5×8=40, ×9). 350 ist ein anderes rÃ©sultat." },
      ],
      46: [
        { mistake: "Denken, dass 46×5=225 (statt 230)", solution: "46×5=230, nicht 225. 23×5=115, ×2=230. ou 50×5=250, minus 4×5=20: 230." },
        { mistake: "Verwechseln 46×9=404 mit 46×9=414", solution: "46×9=414 ist korrekt (23×9=207, ×2 ou 50×9=450, minus 4×9=36). 404 ist ein anderes rÃ©sultat." },
      ],
      47: [
        { mistake: "Denken, dass 47×5=230 (statt 235)", solution: "47×5=235, nicht 230. 50×5=250, minus 3×5=15: 235. 230 ist tatsächlich 46×5." },
        { mistake: "Verwechseln 47×9=413 mit 47×9=423", solution: "47×9=423 ist korrekt (50×9=450, minus 3×9=27). 413 ist ein anderes rÃ©sultat." },
      ],
      48: [
        { mistake: "Denken, dass 48×5=230 (statt 240)", solution: "48×5=240, nicht 230. 6×5=30, 8×5=40, 30×8=240. ou 50×5=250, minus 2×5=10: 240." },
        { mistake: "Verwechseln 48×9=422 mit 48×9=432", solution: "48×9=432 ist korrekt (6×9=54, ×8 ou 50×9=450, minus 2×9=18). 422 ist ein anderes rÃ©sultat." },
      ],
      49: [
        { mistake: "Denken, dass 49×5=240 (statt 245)", solution: "49×5=245, nicht 240. 50×5=250, minus 5: 245. ou 7×5=35, ×7=245." },
        { mistake: "Verwechseln 49×9=431 mit 49×9=441", solution: "49×9=441 ist korrekt (50×9=450, minus 9). Außerdem 441=21² (Quadratnombre). 431 ist ein anderes rÃ©sultat." },
      ],
      50: [
        { mistake: "Denken, dass 50×7=340 (statt 350)", solution: "50×7=350, nicht 340. 5×7=35, fÃ¼ge hinzu un 0: 350. ou 100×7=700, ÷2=350." },
        { mistake: "Vergessen el cero", solution: "Die unpairn Vielfachen von 50 enden auf 50, die pairn auf 0: 50, 100, 150, 200, 250... 50×8=400, no 40!" },
      ],
      51: [
        { mistake: "Denken, dass 51×5=250 (statt 255)", solution: "51×5=255, nicht 250. 50×5=250, más 5: 255. Denk toujours daran fÃ¼ge hinzur ese 1 extra." },
        { mistake: "Verwechseln 51×9=450 mit 51×9=459", solution: "51×9=459 ist korrekt (50×9=450, más 9). 450 ist tatsächlich 50×9." },
      ],
      52: [
        { mistake: "Denken, dass 52×5=250 (statt 260)", solution: "52×5=260, nicht 250. 13×5=65, ×4=260. ou 50×5=250, más 2×5=10: 260." },
        { mistake: "Verwechseln 52×9=458 mit 52×9=468", solution: "52×9=468 ist korrekt (13×9=117, ×4 ou 50×9=450, más 18). 458 ist ein anderes rÃ©sultat." },
      ],
      53: [
        { mistake: "Denken, dass 53×5=255 (statt 265)", solution: "53×5=265, nicht 255. 50×5=250, más 3×5=15: 265. 255 ist tatsächlich 51×5." },
        { mistake: "Verwechseln 53×9=467 mit 53×9=477", solution: "53×9=477 ist korrekt (50×9=450, más 3×9=27). 467 ist ein anderes rÃ©sultat." },
      ],
      54: [
        { mistake: "Denken, dass 54×5=260 (statt 270)", solution: "54×5=270, nicht 260. 6×5=30, 9×5=45, 30×9=270. ou 50×5=250, más 4×5=20: 270." },
        { mistake: "Verwechseln 54×9=476 mit 54×9=486", solution: "54×9=486 ist korrekt (6×9=54, ×9 ou 60×9=540, minus 6×9=54). 476 ist ein anderes rÃ©sultat." },
      ],
      55: [
        { mistake: "Denken, dass 55×5=270 (statt 275)", solution: "55×5=275, nicht 270. 11×5=55, ×5=275. ou 50×5=250, más 5×5=25: 275." },
        { mistake: "Verwechseln 55×9=485 mit 55×9=495", solution: "55×9=495 ist korrekt (11×9=99, ×5 ou 60×9=540, minus 5×9=45). 485 ist ein anderes rÃ©sultat." },
      ],
      56: [
        { mistake: "Denken, dass 56×5=270 (statt 280)", solution: "56×5=280, nicht 270. 7×5=35, 8×5=40, 35×8=280. ou 60×5=300, minus 4×5=20: 280." },
        { mistake: "Verwechseln 56×9=494 mit 56×9=504", solution: "56×9=504 ist korrekt (7×9=63, ×8 ou 60×9=540, minus 4×9=36). 494 ist ein anderes rÃ©sultat." },
      ],
      57: [
        { mistake: "Denken, dass 57×5=280 (statt 285)", solution: "57×5=285, nicht 280. 60×5=300, minus 3×5=15: 285. 280 ist tatsächlich 56×5." },
        { mistake: "Verwechseln 57×9=503 mit 57×9=513", solution: "57×9=513 ist korrekt (60×9=540, minus 3×9=27). 503 ist ein anderes rÃ©sultat." },
      ],
      58: [
        { mistake: "Denken, dass 58×5=280 (statt 290)", solution: "58×5=290, nicht 280. 29×5=145, ×2=290. ou 60×5=300, minus 2×5=10: 290." },
        { mistake: "Verwechseln 58×9=512 mit 58×9=522", solution: "58×9=522 ist korrekt (29×9=261, ×2 ou 60×9=540, minus 2×9=18). 512 ist ein anderes rÃ©sultat." },
      ],
      59: [
        { mistake: "Denken, dass 59×5=290 (statt 295)", solution: "59×5=295, nicht 290. 60×5=300, minus 5: 295. Muy simple!" },
        { mistake: "Verwechseln 59×9=521 mit 59×9=531", solution: "59×9=531 ist korrekt (60×9=540, minus 9). 531 Auch es 9×59. 521 ist ein anderes rÃ©sultat." },
      ],
      60: [
        { mistake: "Denken, dass 60×7=410 (statt 420)", solution: "60×7=420, nicht 410. 6×7=42, fÃ¼ge hinzu un 0: 420. ou 10×7=70, ×6=420." },
        { mistake: "Vergessen el cero", solution: "Alle Vielfachen von 60 müssen enden auf 0: 60, 120, 180, 240, 300, 360, 420... 60×9=540, no 54!" },
      ],
      61: [
        { mistake: "Denken, dass 61×5=300 (statt 305)", solution: "61×5=305, nicht 300. 60×5=300, más 5: 305. Denk toujours daran fÃ¼ge hinzur ese 1 extra." },
        { mistake: "Verwechseln 61×9=540 mit 61×9=549", solution: "61×9=549 ist korrekt (60×9=540, más 9). 540 ist tatsächlich 60×9." },
      ],
      62: [
        { mistake: "Denken, dass 62×5=300 (statt 310)", solution: "62×5=310, nicht 300. 31×5=155, ×2=310. ou 60×5=300, más 2×5=10: 310." },
        { mistake: "Verwechseln 62×9=548 mit 62×9=558", solution: "62×9=558 ist korrekt (31×9=279, ×2 ou 60×9=540, más 18). 548 ist ein anderes rÃ©sultat." },
      ],
      63: [
        { mistake: "Denken, dass 63×5=305 (statt 315)", solution: "63×5=315, nicht 305. 7×5=35, 9×5=45, 35×9=315. ou 60×5=300, más 3×5=15: 315." },
        { mistake: "Verwechseln 63×9=557 mit 63×9=567", solution: "63×9=567 ist korrekt (7×9=63, ×9 ou 60×9=540, más 27). 557 ist ein anderes rÃ©sultat." },
      ],
      64: [
        { mistake: "Denken, dass 64×5=310 (statt 320)", solution: "64×5=320, nicht 310. 8×5=40, ×8=320. ou 60×5=300, más 4×5=20: 320." },
        { mistake: "Verwechseln 64×9=566 mit 64×9=576", solution: "64×9=576 ist korrekt (8×9=72, ×8 ou 60×9=540, más 36). Außerdem 576=24². 566 ist ein anderes rÃ©sultat." },
      ],
      65: [
        { mistake: "Denken, dass 65×5=320 (statt 325)", solution: "65×5=325, nicht 320. 13×5=65, ×5=325. ou 60×5=300, más 5×5=25: 325." },
        { mistake: "Verwechseln 65×9=575 mit 65×9=585", solution: "65×9=585 ist korrekt (13×9=117, ×5 ou 70×9=630, minus 5×9=45). 575 ist ein anderes rÃ©sultat." },
      ],
      66: [
        { mistake: "Denken, dass 66×5=325 (statt 330)", solution: "66×5=330, nicht 325. 11×5=55, ×6=330. ou 60×5=300, más 6×5=30: 330." },
        { mistake: "Verwechseln 66×9=584 mit 66×9=594", solution: "66×9=594 ist korrekt (11×9=99, ×6 ou 70×9=630, minus 4×9=36). 584 ist ein anderes rÃ©sultat." },
      ],
      67: [
        { mistake: "Denken, dass 67×5=330 (statt 335)", solution: "67×5=335, nicht 330. 70×5=350, minus 3×5=15: 335. 330 ist tatsächlich 66×5." },
        { mistake: "Verwechseln 67×9=593 mit 67×9=603", solution: "67×9=603 ist korrekt (70×9=630, minus 3×9=27). 593 ist ein anderes rÃ©sultat." },
      ],
      68: [
        { mistake: "Denken, dass 68×5=330 (statt 340)", solution: "68×5=340, nicht 330. 17×5=85, ×4=340. ou 70×5=350, minus 2×5=10: 340." },
        { mistake: "Verwechseln 68×9=602 mit 68×9=612", solution: "68×9=612 ist korrekt (17×9=153, ×4 ou 70×9=630, minus 2×9=18). 602 ist ein anderes rÃ©sultat." },
      ],
      69: [
        { mistake: "Denken, dass 69×5=340 (statt 345)", solution: "69×5=345, nicht 340. 70×5=350, minus 5: 345. Muy simple!" },
        { mistake: "Verwechseln 69×9=611 mit 69×9=621", solution: "69×9=621 ist korrekt (70×9=630, minus 9). 621=3×207. 611 ist ein anderes rÃ©sultat." },
      ],
      70: [
        { mistake: "Denken, dass 70×7=480 (statt 490)", solution: "70×7=490, nicht 480. 7×7=49, fÃ¼ge hinzu un 0: 490. ou 10×7=70, ×7=490." },
        { mistake: "Vergessen el cero", solution: "Alle Vielfachen von 70 müssen enden auf 0: 70, 140, 210, 280, 350, 420, 490... 70×9=630, no 63!" },
      ],
      71: [
        { mistake: "Denken, dass 71×5=350 (statt 355)", solution: "71×5=355, nicht 350. 70×5=350, más 5: 355. Denk toujours daran fÃ¼ge hinzur ese 1 extra." },
        { mistake: "Verwechseln 71×9=630 mit 71×9=639", solution: "71×9=639 ist korrekt (70×9=630, más 9). 630 ist tatsächlich 70×9." },
      ],
      72: [
        { mistake: "Denken, dass 72×5=350 (statt 360)", solution: "72×5=360, nicht 350. 8×5=40, 9×5=45, 40×9=360. ou 70×5=350, más 2×5=10: 360." },
        { mistake: "Verwechseln 72×9=638 mit 72×9=648", solution: "72×9=648 ist korrekt (8×9=72, ×9 ou 80×9=720, minus 72). 638 ist ein anderes rÃ©sultat." },
      ],
      73: [
        { mistake: "Denken, dass 73×5=355 (statt 365)", solution: "73×5=365, nicht 355. 70×5=350, más 3×5=15: 365. Außerdem 365=Annombre der Tage in einem Jahr!" },
        { mistake: "Verwechseln 73×9=647 mit 73×9=657", solution: "73×9=657 ist korrekt (70×9=630, más 3×9=27). 647 ist ein anderes rÃ©sultat." },
      ],
      74: [
        { mistake: "Denken, dass 74×5=360 (statt 370)", solution: "74×5=370, nicht 360. 37×5=185, ×2=370. ou 75×5=375, minus 5: 370." },
        { mistake: "Verwechseln 74×9=656 mit 74×9=666", solution: "74×9=666 ist korrekt (37×9=333, ×2 ou 75×9=675, minus 9). 666 es un Repdigit-nombre. 656 ist ein anderes rÃ©sultat." },
      ],
      75: [
        { mistake: "Denken, dass 75×5=370 (statt 375)", solution: "75×5=375, nicht 370. 15×5=75, ×5=375. ou 25×5=125, ×3=375." },
        { mistake: "Verwechseln 75×9=665 mit 75×9=675", solution: "75×9=675 ist korrekt (25×9=225, ×3 ou 80×9=720, minus 5×9=45). 675=3³×5². 665 ist ein anderes rÃ©sultat." },
      ],
      76: [
        { mistake: "Denken, dass 76×5=370 (statt 380)", solution: "76×5=380, nicht 370. 19×5=95, ×4=380. ou 80×5=400, minus 4×5=20: 380." },
        { mistake: "Verwechseln 76×9=674 mit 76×9=684", solution: "76×9=684 ist korrekt (19×9=171, ×4 ou 80×9=720, minus 4×9=36). 684 ist ein anderes rÃ©sultat." },
      ],
      77: [
        { mistake: "Denken, dass 77×5=380 (statt 385)", solution: "77×5=385, nicht 380. 7×5=35, 11×5=55, 35×11=385. ou 80×5=400, minus 3×5=15: 385." },
        { mistake: "Verwechseln 77×9=683 mit 77×9=693", solution: "77×9=693 ist korrekt (7×9=63, ×11 ou 80×9=720, minus 3×9=27). 693=7×9×11. 683 ist ein anderes rÃ©sultat." },
      ],
      78: [
        { mistake: "Denken, dass 78×5=380 (statt 390)", solution: "78×5=390, nicht 380. 13×5=65, 6×5=30, 65×6=390. ou 80×5=400, minus 2×5=10: 390." },
        { mistake: "Verwechseln 78×9=692 mit 78×9=702", solution: "78×9=702 ist korrekt (13×9=117, ×6 ou 80×9=720, minus 2×9=18). 702 ist ein anderes rÃ©sultat." },
      ],
      79: [
        { mistake: "Denken, dass 79×5=390 (statt 395)", solution: "79×5=395, nicht 390. 80×5=400, minus 5: 395. Muy simple!" },
        { mistake: "Verwechseln 79×9=701 mit 79×9=711", solution: "79×9=711 ist korrekt (80×9=720, minus 9). 711 ist ein anderes rÃ©sultat." },
      ],
      80: [
        { mistake: "Denken, dass 80×7=550 (statt 560)", solution: "80×7=560, nicht 550. 8×7=56, fÃ¼ge hinzu un 0: 560. ou 10×7=70, ×8=560." },
        { mistake: "Vergessen el cero", solution: "Alle Vielfachen von 80 müssen enden auf 0: 80, 160, 240, 320, 400, 480, 560... 80×9=720, no 72!" },
      ],
      81: [
        { mistake: "Calcular 81 como 8×10+1 statt 9×9", solution: "81=9×9. Beispiel: 81×7 = (9×7)×9 = 63×9 = 567. Nutze die Quadratnombre-Beziehung!" },
        { mistake: "Error de suma en 80+1 Strategie", solution: "81×7 = (80×7)+(1×7) = 560+7 = 567. Calcula beide partes cuidadosamente!" },
      ],
      82: [
        { mistake: "Complicar 82×4", solution: "82×4 = (80×4)+(2×4) = 320+8 = 328. Descompone y suma!" },
        { mistake: "Denken, dass 82 ist unpair", solution: "82=2×41, toujours pair. Alle Vielfachen sind pair nombreen: 82, 164, 246..." },
      ],
      83: [
        { mistake: "Calcular incorrectamente 83×5", solution: "83×5 = (80×5)+(3×5) = 400+15 = 415. Descompone y suma!" },
        { mistake: "Denken, dass 83 es par", solution: "83 es primo, seulement Durch 1 Teilbar und 83. ist unpair y no Durch 2 Teilbar." },
      ],
      84: [
        { mistake: "Complicar 84×5", solution: "84×5 = 420 (7×12×5=7×60). ou (80×5)+(4×5)=400+20=420." },
        { mistake: "Vergessen los factores de 84", solution: "84=7×12=6×14=4×21=3×28. Se puede calcular de múltiples maneras!" },
      ],
      85: [
        { mistake: "Calcular incorrectamente 85×4", solution: "85×4 = (80×4)+(5×4) = 320+20 = 340. ou 85×4=17×20=340." },
        { mistake: "Vergessen el último dígito", solution: "Los Vielfachen von 85 siempre enden auf 5 ou 0: 85, 170, 255, 340, 425, 510..." },
      ],
      86: [
        { mistake: "Complicar 86×5", solution: "86×5 = (80×5)+(6×5) = 400+30 = 430. Descompone y suma!" },
        { mistake: "Denken, dass 86 ist unpair", solution: "86=2×43, toujours pair. Alle Vielfachen sind pair nombreen: 86, 172, 258..." },
      ],
      87: [
        { mistake: "Calcular incorrectamente 87×5", solution: "87×5 = (90×5)-(3×5) = 450-15 = 435. Restar desde 90 es einfacher!" },
        { mistake: "Denken, dass 87 eine Primnombre ist", solution: "87=3×29, ist keine Primnombre! Ist durch 3 teilbar (8+7=15, exakt durch 3 teilbar)." },
      ],
      88: [
        { mistake: "88×5 kompliziert machen", solution: "88×5 = (80×5)+(8×5) = 400+40 = 440. ou 88×5=11×40=440." },
        { mistake: "88×11 fcommech berechnen", solution: "88×11 = 88×10 + 88 = 880+88 = 968. Nutze die Regel für multiplication mit 11!" },
      ],
      89: [
        { mistake: "89 berechnen ohne zu runden", solution: "89=90-1. Beispiel: 89×7 = (90×7)-7 = 630-7 = 623. Sehr einfach!" },
        { mistake: "89 comme 88+1 berechnen", solution: "Die 90-1 Strategie ist viel einfacher! 89×7: 90×7=630, dann ziehe 7 ab: 623." },
      ],
      90: [
        { mistake: "90×5 kompliziert machen", solution: "90×5 = 450 (9×50). seulement 9×5=45, füge eine 0 hinzu!" },
        { mistake: "Vergessen die Null", solution: "90=9×10. toujours eine 0 am Ende hinzufügen: 90, 180, 270, 360, 450..." },
      ],
      91: [
        { mistake: "91×5 fcommech berechnen", solution: "91×5 = (90×5)+(1×5) = 450+5 = 455. Zerlege und addiere!" },
        { mistake: "Denken, dass 91 eine Primnombre ist", solution: "91=7×13, ist keine Primnombre! Ist durch 7 und 13 teilbar." },
      ],
      92: [
        { mistake: "92×5 kompliziert machen", solution: "92×5 = (90×5)+(2×5) = 450+10 = 460. Zerlege und addiere!" },
        { mistake: "Denken, dass 92 unpair ist", solution: "92=2×46, toujours pair. Alle Vielfachen sind pair nombreen: 92, 184, 276..." },
      ],
      93: [
        { mistake: "Calcular incorrectamente 93×5", solution: "93×5 = (90×5)+(3×5) = 450+15 = 465. Descompone y suma!" },
        { mistake: "Denken, dass 93 es primo", solution: "93=3×31, no es primo! Es Durch 3 Teilbar (9+3=12, divisible exactamente por 3)." },
      ],
      94: [
        { mistake: "Complicar 94×5", solution: "94×5 = (100×5)-(6×5) = 500-30 = 470. Restar desde 100 es einfacher!" },
        { mistake: "Denken, dass 94 ist unpair", solution: "94=2×47, toujours pair. Alle Vielfachen sind pair nombreen: 94, 188, 282..." },
      ],
      95: [
        { mistake: "Calcular incorrectamente 95×4", solution: "95×4 = (100×4)-(5×4) = 400-20 = 380. ou 95×4=19×20=380." },
        { mistake: "Vergessen el último dígito", solution: "Los Vielfachen von 95 siempre enden auf 5 ou 0: 95, 190, 285, 380, 475, 570..." },
      ],
      96: [
        { mistake: "Complicar 96×5", solution: "96×5 = (100×5)-(4×5) = 500-20 = 480. ou 96×5=12×40=480." },
        { mistake: "Vergessen los factores de 96", solution: "96=8×12=6×16=4×24=3×32. Se puede calcular de múltiples maneras!" },
      ],
      97: [
        { mistake: "Calcular 97 sin redondear", solution: "97=100-3. Beispiel: 97×7 = (100×7)-21 = 700-21 = 679. Sehr einfach!" },
        { mistake: "Calcular 97 como 96+1", solution: "La 100-3 Strategie es mucho einfacher! 97×7: 100×7=700, dann resta 21: 679." },
      ],
      98: [
        { mistake: "Complicar 98×5", solution: "98×5 = (100×5)-(2×5) = 500-10 = 490. Restar desde 100 es SUPER EINFACH!" },
        { mistake: "Denken, dass 98 ist unpair", solution: "98=2×49, toujours pair. Alle Vielfachen sind pair nombreen: 98, 196, 294..." },
      ],
      99: [
        { mistake: "Calcular 99 sin redondear", solution: "99=100-1. Beispiel: 99×7 = (100×7)-7 = 700-7 = 693. PERFECTA!" },
        { mistake: "Calcular 99 como 98+1", solution: "La 100-1 Strategie es mucho einfacher! 99×8: 100×8=800, dann resta 8: 792." },
      ],
      100: [
        { mistake: "Complicar 100×5", solution: "100×5 = 500! seulement fÃ¼ge hinzu dos ceros al final: 5 → 500, 7 → 700!" },
        { mistake: "Vergessen los ceros", solution: "Mit 100 multiplizieren: fÃ¼ge hinzu DOS ceros am Ende. 100×9=900, no 90!" },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Sage jede multiplication laut: '1 por 1 es 1, 1 por 2 es 2...'",
        "Übe das Schreiben der multiplication de einfois täglich für eine Woche",
        "Suche das modÃ¨le: die Antwort ist toujours dieselbe nombre comme die zweite nombre",
        "Nutze tarjetas didácticas, obwohl diese multiplication de norfoiserweise sehr schnell gelernt wird",
      ],
      2: [
        "Zähle in Zweierschritten beim Gehen ou Treppensteigen: 2, 4, 6, 8...",
        "Nutze tus dedos: halte Finger in Paaren und zähle in Zweierschritten",
        "Übe das doubler von nombreen im Kopf während des Tages",
        "Sage es laut: '2 por 5 ist 5 plus 5, ce qui 10'",
      ],
      3: [
        "Zähle rhythmisch in Dreierschritten: 3, 6, 9, 12, 15...",
        "Nutze der Finger-Trick: halte Finger in 3er-groupes",
        "Suche das modÃ¨le der Ziffernsumme um deine Antworten zu überprüfen (commederholt 3-6-9)",
        "Übe 5-10 Minuten täglich statt einer langen Sitzung",
      ],
      4: [
        "Lerne zuerst die 2er-multiplication de, dann verdopple jede Antwort um die 4er zu bekommen",
        "Zähle in Viererschritten: 4, 8, 12, 16, 20...",
        "Nutze Objekte in 4er-groupes zum Visualisieren (Stuhlbeine, Autoräder)",
        "Übe separat die schcommerigsten (4×6, 4×7, 4×8, 4×9)",
      ],
      5: [
        "Nutze deine Finger um in Fünferschritten zu zählen—jeder Finger steht für 5",
        "Schau auf eine Uhr und zähle in 5-Minuten-Intervallen",
        "Übe mit Geld: zähle 5-Cent-Münzen",
        "Denk daran: pair Multiplikatoren enden auf 0, unpair auf 5",
      ],
      6: [
        "Lerne die 3er-multiplication de auswendig, dann verdopple jede Antwort um die 6er zu finden",
        "Eierkarton-Strategie: zähle in Sechserschritten (6, 12, 18, 24...)",
        "Konzentriere dich auf die schcommerigen Paare: übe 6×7=42, 6×8=48, 6×9=54 separat",
        "Lerne modÃ¨le der Einerstellen: 6, 2, 8, 4, 0 und commederhole",
        "Überprüfe mit beiden multiplication den (2 und 3), da 6 ein Vielfaches von beiden ist",
      ],
      7: [
        "Lerne das schcommerigste Paar: 7×8=56 (reimt sich 'fünf sechs, sieben acht')",
        "Verbinde es mit den Tagen der Woche: 7 Tage, 14 Tage (2 Wochen), 21 Tage (3 Wochen)",
        "Lerne besonders 7×7=49 (7²=49), berechne andere davon ausgehend",
        "Finger-Trick: Zähle 7 Finger von links, die übrigen sind Einer, die gezählten sind Zehner",
        "seulement Übe 3-4 echte Aufgaben pro Tag. Die 7requiert Geduld!",
      ],
      8: [
        "Lerne die 4er-multiplication de auswendig, dann verdopple jede Antwort um die 8er zu finden",
        "Lerne besonders 8×8=64 ('acht acht vierundsechzig')",
        "Zähle in Achterschritten: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "Verdopplungskette: Verdopple die nombre (×2), dann nochfois (×4), dann nochfois (×8)",
        "Die Einer sind toujours pair und absteigend: 8, 6, 4, 2, 0 und commederhole",
      ],
      9: [
        "Lerne den Finger-Trick: Nutze deine 10 Finger um die 9er-multiplication de zu zeigen",
        "Nutze die Quersummenregel: Addiere die Ziffern der Antwort, ergibt toujours 9",
        "Subtrahiere von 10: 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "Lerne besonders 9×9=81 (9²=81)",
        "Zehner-modÃ¨le: Bei 9×n ist die Zehnerstelle toujours n-1",
      ],
      10: [
        "Die einfachste Regel: seulement eine Null am Ende hinzufügen!",
        "Zähle in Zehnerschritten: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Verstehe die Stellenwert-Beziehung: multiplication mit 10 verschiebt eine Ziffer nach links",
        "Übe mit großen nombreen: 23×10=230, 47×10=470",
        "Nutze diese multiplication de um andere zu überprüfen (z.B.: 9×6 = 60-6)",
      ],
      11: [
        "Lerne das Doppelziffern-modÃ¨le: 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Übe den Trick der Quersumme: 23×11 = 253 (2_[2+3]_3)",
        "Lerne besonders 11×11=121 und 11×12=132",
        "Erstelle ein Lied ou Reim: 'Elf fois fünf, fünfundfünfzig' (11×5=55)",
        "Finde ein Vielfaches von 11 im Alltag jeden Tag (11 Jahre, 11 Stunden, etc.)",
      ],
      12: [
        "Übe Dutzende zählend: zÃ¤hle Eierschachteln (12, 24, 36...)",
        "Berechne 12 mit der 3er ou 4er-multiplication de: 12=3×4, commeo 12×5 = 3×5×4 = 15×4 = 60",
        "Nutze el reloj: 12×5=60 minutos (1 hora)",
        "Konzentriere dich auf los Vielfache más difíciles de 12: 12×7=84, 12×8=96, 12×9=108",
        "Nutze 12 en vida diaria: Monate, Stunden, Dutzende",
      ],
      13: [
        "Nutze siempre la 10+3 Strategie: 13×6 = 60+18 = 78",
        "Convierte Die 13er-multiplication de en canción o encuentra un ritmo",
        "Konzentriere dich auf los pares más difíciles: 13×7=91, 13×8=104, 13×9=117",
        "Übe 2-3 Vielfache diferentes de 13 cada día, nicht alle auf einfois",
        "Trabaja hacia atrás: 130, 117, 104, 91, 78... (subtrahiere 13 von 130)",
      ],
      14: [
        "Lerne die 7er-multiplication de auswendig, dann verdopple jede Antwort",
        "Nutze einen Zwei-Wochen-Kalender: 14-Tage-Perioden",
        "Lerne besonders 14×7=98 und 14×8=112",
        "Nutze 14 um die 7er-multiplication de zu überprüfen: 14×6=84, commeo 7×6=42",
        "Zähle in Vierzehnerschritten: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      15: [
        "Uhr-Strategie: 15 Minuten = Viertelstunde. 15×4=60 Minuten = 1 Stunde",
        "Nutze die 3er ou 5er-multiplication de: 15=3×5, commeo 15×4 = 3×4×5 = 12×5 = 60",
        "Folge dem modÃ¨le das auf 0 ou 5 endet: 15, 30, 45, 60, 75, 90...",
        "Übe Trinkgeld-Berechnung: comme man 15% Trinkgeld berechnet (10%+5%)",
        "Lerne auswendig die nützlichsten Vielfachen von 15: 15×4=60, 15×6=90, 15×8=120",
      ],
      16: [
        "Verdopplungskette: Verdopple die nombre (×2), nochfois (×4), nochfois (×8), nochfois (×16)",
        "Lorsque vous die 8er-multiplication de kennst, verdopple jedes rÃ©sultat: 8×7=56, commeo 16×7=112",
        "Lerne besonders 16×16=256 (2⁸=256)",
        "Verbinde es mit Computer-Begriffen: 16 bits, Hexadezifoissystem",
        "Zähle in Sechzehnerschritten: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      17: [
        "Perfektioniere die 20-3 Strategie: 17×n = 20n - 3n",
        "Zerlegung 10+7: 17×6 = 60+42 = 102",
        "Übe täglich die schcommerigsten Paare: 17×7=119, 17×8=136, 17×9=153",
        "Verbinde es mit 17 Jahre alt: ce qui mit 17 Jahren passiert, ce qui mit 34 Jahren passiert (17×2)",
        "Hab Geduld! 17 ist eine Primnombre und braucht Übung",
      ],
      18: [
        "Nutze die 9er ou 6er-multiplication de: 18=2×9 ou 18=3×6",
        "Verdopple die 9er-multiplication de: 9×4=36, commeo 18×4=72",
        "Verdreifache die 6er-multiplication de: 6×5=30, commeo 18×5=90",
        "Verbinde es mit Volljährigkeit: 18, 36 (18×2), 54 (18×3)",
        "Zähle in Achtzehnerchritten: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      19: [
        "Nutze siempre la 20-1 Strategie: 19×n = 20n - n",
        "Beispiel: 19×7 = 140-7 = 133. Muy simple y efectivo!",
        "Descomposición 10+9: 19×4 = 40+36 = 76",
        "Übe los Vielfache más difíciles: 19×7=133, 19×8=152, 19×9=171",
        "Aprende Die 19er-multiplication de hacia atrás: 190, 171, 152, 133... para flexibilidad mental",
      ],
      20: [
        "Lo einfacher: mit 10 multiplizieren, dann duplica",
        "O: fÃ¼ge hinzu un cero al final, dann duplica (MÉTODO CORRECTO! 7×20: 70 luego ×2=140)",
        "Método correcto: 7×10=70, 70×2=140 ou 7×2=14, fÃ¼ge hinzu un 0: 140",
        "Cuenta rápidamente de veinte en veinte: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Ãœbe mit Geld: cuenta billetes de 20",
      ],
      21: [
        "Nutze la 20+1 Strategie: 21×n = 20n + n",
        "Nutze die Beziehung 3×7: Kennst du die 3er-multiplication de? 3×6=18, 7×6=42, commeo 21×6=126",
        "Übe los Vielfache más difíciles: 21×7=147, 21×8=168, 21×9=189",
        "Verbinde es mit der gesetzlichen Volljährigkeit: ce qui ändert sich mit 21 Jahren?",
        "Zähle in veintiuno en veintiuno: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      22: [
        "Lerne auswendig Die 11er-multiplication de, dann duplica cada resultado",
        "Verbinde es mit equipos de fútbol: 2 equipos = 22 jugadores",
        "Los Vielfache einfacheres primero: 22×5=110, 22×10=220",
        "Zähle in veintidós en veintidós: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "Observa el modÃ¨le de Doppelziffern en los primeros 4 resultados: 22, 44, 66, 88",
      ],
      23: [
        "Nutze siempre la 20+3 Strategie: 23×6 = 120+18 = 138",
        "O 25-2 Strategie: 23×4 = 100-8 = 92",
        "Verbinde es mit cromosomas: Los humanos tienen 23 pares de cromosomas",
        "Übe diariamente los Vielfache más difíciles: 23×7=161, 23×8=184, 23×9=207",
        "23 es primo, así que ten paciencia y Übe mucho",
      ],
      24: [
        "Nutze die Beziehung de horas: 24 horas×3 Tage = 72 horas",
        "Probiere mehrere Methoden: 24=2×12, 3×8, 4×6. Welche ist einfacher?",
        "Si conoces Die 12er-multiplication de, duplica: 12×7=84, commeo 24×7=168",
        "Cuenta por docenas: 24 = 2 docenas. 24×5 = 10 docenas = 120",
        "Zähle in veinticuatro en veinticuatro: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      25: [
        "System von cuartos: 25 = 100÷4. commeo 25×4=100, 25×8=200",
        "Lerne modÃ¨le de los últimos dos dígitos: 25, 50, 75, 00 se repite",
        "Ãœbe mit Geld: cuenta monedas de 25 centavos",
        "Denk daran, dass es el cuadrado de 5: 25=5×5",
        "Cálculo Prozent-Beziehungs: 25% = 1/4. Nutze Diese Beziehung",
      ],
      26: [
        "Si conoces Die 13er-multiplication de, duplica: 13×8=104, commeo 26×8=208",
        "25+1 Strategie: 26×4 = 100+4 = 104",
        "Verbinde es mit el alfabeto: hay 26 letras",
        "Zähle in veintiséis en veintiséis: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "Übe los Vielfache más difíciles: 26×7=182, 26×9=234",
      ],
      27: [
        "Nutze la 30-3 Strategie: 27×n = 30n - 3n",
        "Si conoces Die 9er-multiplication de, triplícala: 9×6=54, así que 27×6=162",
        "Denk daran, dass es el cubo de 3: 27=3×3×3",
        "ZÃ¤hle in 27er-Schritten: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "Übe los Vielfache más difíciles: 27×7=189, 27×8=216, 27×9=243",
      ],
      28: [
        "Nutze die Beziehung 4×7: multiplica Die 4er-multiplication de por 7",
        "O duplica 14: 14×5=70, commeo 28×5=140",
        "Verbinde es mit febrero: 28 Tage (año norfois)",
        "Zähle in veintiocho en veintiocho: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "Lerne auswendig los Vielfache más útiles: 28×5=140, 28×7=196, 28×10=280",
      ],
      29: [
        "Nutze la 30-1 Strategie: 29×n = 30n - n",
        "Beispiel: 29×8 = 240-8 = 232. Sehr einfach!",
        "Verbinde es mit año bisiesto: 29 Tage en febrero",
        "Zähle in veintinueve en veintinueve: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "Übe los Vielfache más difíciles: 29×7=203, 29×9=261",
      ],
      30: [
        "Estrategia 3×10: mit 10 multiplizieren, dann mit 3",
        "Beispiel: 7×30 = 70×3 = 210 ou 7×3=21, fÃ¼ge hinzu un 0: 210",
        "Verbinde es mit media hora: 30 minutos",
        "Tage del mes: Muchos Monate tienen 30 Tage (abril, junio, septiembre, noviembre)",
        "Zähle in treinta en treinta: 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
      31: [
        "Nutze la 30+1 Strategie: 31×n = 30n + n",
        "Beispiel: 31×8 = 240 + 8 = 248. Muy simple y efectivo!",
        "Verbinde es mit el calendario: 31 Tage es la longitud máxima del mes",
        "Zähle in treinta y uno en treinta y uno: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310",
        "Übe los Vielfache más difíciles: 31×7=217, 31×9=279",
      ],
      32: [
        "Nutze la Verdopplungskette: duplica 16",
        "Beispiel: 16×5=80, commeo 32×5=160",
        "Denk daran, dass es Potenz von 2: 32=2×2×2×2×2",
        "Zähle in treinta y dos en treinta y dos: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320",
        "Verbinde es mit Computer-Begriffen: System von 32 bits",
      ],
      33: [
        "Nutze la estrategia 3×11: Verdreifache die 11er-multiplication de",
        "ou multipliziere die 3er-multiplication de mit 11: 3×7=21, 21×11=231, commeo 33×7=231",
        "Observa el modÃ¨le de repetición: 33, 66, 99 (primeros tres resultados)",
        "Zähle in treinta y tres en treinta y tres: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330",
        "Übe los Vielfache más difíciles: 33×7=231, 33×8=264, 33×9=297",
      ],
      34: [
        "Si conoces Die 17er-multiplication de, duplícala: 17×6=102, commeo 34×6=204",
        "35-1 Strategie: 34×4 = 140-4 = 136",
        "O Nutze 30+4: 34×5 = 150+20 = 170",
        "Zähle in treinta y cuatro en treinta y cuatro: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340",
        "Lerne auswendig los Vielfache más útiles: 34×5=170, 34×10=340",
      ],
      35: [
        "Estrategia 5×7: multiplica Die 5er-multiplication de por 7 o viceversa",
        "Beispiel: 35×4 = 5×4×7 = 20×7 = 140",
        "Nutze el modÃ¨le del último dígito: Endet auf 5 ou 0",
        "Zähle in treinta y cinco en treinta y cinco: 35, 70, 105, 140, 175, 210, 245, 280, 315, 350",
        "Cálculo de tiempo: 35 minutos = media hora + 5 minutos",
      ],
      36: [
        "Denk daran, dass es el cuadrado de 6: 36=6×6",
        "Mehrere Methoden: 36=4×9, 3×12, 2×18. Welche ist einfacher?",
        "Si conoces Die 9er-multiplication de, multíplica por 4: 9×7=63, 63×4=252, commeo 36×7=252",
        "Zähle in treinta y seis en treinta y seis: 36, 72, 108, 144, 180, 216, 252, 288, 324, 360",
        "Medición de ángulos: 360° es una vuelta completa, 36° es la décima parte",
      ],
      37: [
        "Nutze la 40-3 Strategie: 37×n = 40n - 3n",
        "Lerne auswendig la Magische Beziehung zu 111: 37×3=111, 37×6=222, 37×9=333!",
        "Beispiel: 37×8 = 320 - 24 = 296",
        "Zähle in treinta y siete en treinta y siete: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370",
        "Descubre el modÃ¨le de repetición: resultados interesantes en cada múltiplo de 3",
      ],
      38: [
        "Si conoces Die 19er-multiplication de, duplícala: 19×7=133, commeo 38×7=266",
        "40-2 Strategie: 38×6 = 240 - 12 = 228",
        "Zähle in treinta y ocho en treinta y ocho: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380",
        "Übe los Vielfache más difíciles: 38×7=266, 38×9=342",
        "Verbinde es mit la temperatura corporal: 38°C es fiebre leve",
      ],
      39: [
        "40-1 Strategie es PERFECTA: 39×n = 40n - n",
        "Beispiel: 39×7 = 280 - 7 = 273. Sehr einfach!",
        "O Nutze 3×13: Verdreifache die 13er-multiplication de",
        "Zähle in treinta y nueve en treinta y nueve: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390",
        "Übe los Vielfache más difíciles: 39×7=273, 39×8=312",
      ],
      40: [
        "Estrategia 4×10: mit 10 multiplizieren, dann mit 4",
        "Beispiel: 7×40 = 70×4 = 280 ou 7×4=28, fÃ¼ge hinzu un 0: 280",
        "Semana laboral: 40 horas estándar de trabajo",
        "Zähle in cuarenta en cuarenta: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
        "Cálculo porcentual: 40% = 2/5",
      ],
      41: [
        "40+1 Strategie es PERFECTA: 41×n = 40n + n",
        "Beispiel: 41×7 = 280 + 7 = 287. Sehr einfach!",
        "Zähle in cuarenta y uno en cuarenta y uno: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410",
        "Übe los Vielfache más difíciles: 41×7=287, 41×8=328",
        "Número primo: seulement Durch 1 Teilbar und 41",
      ],
      42: [
        "Nutze die Beziehung 6×7: Stärkt beide multiplication den",
        "Zähle in cuarenta y dos en cuarenta y dos: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420",
        "Mehrere Methoden: 42=6×7=2×21=3×14. Welche ist einfacher?",
        "Referencia a la Guía del Autoestopista: 42 es famoso en la cultura popular!",
        "Übe los Vielfache más difíciles: 42×7=294, 42×8=336",
      ],
      43: [
        "Prueba Die Strategien 40+3 ou 45-2",
        "Beispiel: 43×6 = 240+18 = 258 ou 270-12 = 258",
        "Zähle in cuarenta y tres en cuarenta y tres: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430",
        "Übe los Vielfache más difíciles: 43×7=301, 43×8=344",
        "Número primo: un número especial que requiere estrategias creativas",
      ],
      44: [
        "Cuatro veces 11: Vervierfache die 11er-multiplication de",
        "Beispiel: 11×7=77, ×4=308, commeo 44×7=308",
        "Zähle in cuarenta y cuatro en cuarenta y cuatro: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440",
        "modÃ¨le de repetición: 44, 88 muestran modÃ¨le de Doppelziffern",
        "Übe los Vielfache más difíciles: 44×7=308, 44×9=396",
      ],
      45: [
        "Relación 5×9: Du kannst beide multiplication den nutzen",
        "Beispiel: 45×7 = 9×7×5 = 63×5 = 315",
        "Zähle in cuarenta y cinco en cuarenta y cinco: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450",
        "Ángulo: 45° es medio ángulo recto, importante en geometría",
        "Tiempo: 45 minutos = tres cuartos de hora (3/4 de hora)",
      ],
      46: [
        "El doble de 23: Verdopple die 23er-multiplication de",
        "Beispiel: 23×7=161, ×2=322, commeo 46×7=322",
        "Estrategias 45+1 ou 50-4: 46×5 = 225+5 = 230",
        "Zähle in cuarenta y seis en cuarenta y seis: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460",
        "Biología: 46 cromosomas (23 pares) en el ADN humano",
      ],
      47: [
        "50-3 Strategie es PERFECTA: 47×n = 50n - 3n",
        "Beispiel: 47×7 = 350 - 21 = 329. Sehr einfach!",
        "Zähle in cuarenta y siete en cuarenta y siete: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470",
        "Übe los Vielfache más difíciles: 47×7=329, 47×8=376",
        "Número primo: requiere estrategias mentales especiales",
      ],
      48: [
        "Múltiples métodos: 48=6×8=4×12=3×16=2×24",
        "Beispiel: 48×5 = 12×20 = 240",
        "Zähle in cuarenta y ocho en cuarenta y ocho: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480",
        "Tiempo: 48 horas = 2 Tage. 72 horas = 3 Tage",
        "Übe los Vielfache más difíciles: 48×7=336, 48×9=432",
      ],
      49: [
        "Cuadrado de 7: 49=7×7. Stärkt Die 7er-multiplication de",
        "50-1 Strategie MUY FÁCIL: 49×n = 50n - n",
        "Beispiel: 49×7 = 350 - 7 = 343. Simple!",
        "Zähle in cuarenta y nueve en cuarenta y nueve: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490",
        "Quadratnombre: 49=7² para Berechnungen de área en geometría",
      ],
      50: [
        "Estrategia 5×10: mit 5 multiplizieren, fÃ¼ge hinzu un 0",
        "Beispiel: 8×50: 8×5=40, fÃ¼ge hinzu un 0: 400",
        "La HÃ¤lfte von 100: 50×7 = 350 (700÷2)",
        "Zähle in cincuenta en cincuenta: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500",
        "Porcentaje: 50% = 1/2, die Beziehung porcentual más importante",
      ],
      51: [
        "50+1 Strategie es PERFECTA: 51×n = 50n + n",
        "Beispiel: 51×7 = 350 + 7 = 357. Sehr einfach!",
        "Zähle in cincuenta y uno en cincuenta y uno: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510",
        "Relación 3×17: Verdreifache die 17er-multiplication de",
        "Übe los Vielfache más difíciles: 51×7=357, 51×8=408",
      ],
      52: [
        "Relación 4×13: Vervierfache die 13er-multiplication de",
        "Beispiel: 13×7=91, ×4=364, commeo 52×7=364",
        "Zähle in cincuenta y dos en cincuenta y dos: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520",
        "Calendario: 52 Wochen = 1 Jahr. Para Berechnungen anuales",
        "Cartas: 52 cartas para juegos y problemas de probabilidad",
      ],
      53: [
        "50+3 Strategie: 53×n = 50n + 3n",
        "Beispiel: 53×6 = 300 + 18 = 318",
        "Zähle in cincuenta y tres en cincuenta y tres: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530",
        "Übe los Vielfache más difíciles: 53×7=371, 53×8=424",
        "Número primo: requiere estrategias de cálculo creativas",
      ],
      54: [
        "Relación 6×9: Du kannst beide multiplication den nutzen",
        "Beispiel: 54×5 = 9×5×6 = 45×6 = 270",
        "Zähle in cincuenta y cuatro en cincuenta y cuatro: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540",
        "Múltiples métodos: 54=6×9=2×27=3×18",
        "Übe los Vielfache más difíciles: 54×7=378, 54×8=432",
      ],
      55: [
        "Beziehung 5×11: Stärkt beide multiplication den",
        "Beispiel: 55×4 = 11×4×5 = 44×5 = 220",
        "Zähle in cincuenta y cinco en cincuenta y cinco: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550",
        "Dreiecksnombre: 55 = 1+2+3+...+10, propiedad matemática especial",
        "Übe los Vielfache más difíciles: 55×7=385, 55×9=495",
      ],
      56: [
        "Relación 7×8: Die SCHcommeRIGSTE multiplication! Stärkt beide",
        "Beispiel: 56×5 = 7×5×8 = 35×8 = 280",
        "Zähle in cincuenta y seis en cincuenta y seis: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560",
        "Alternativa: 56=4×14=2×28. Elige la forma einfacher",
        "Übe los Vielfache más difíciles: 56×7=392, 56×9=504",
      ],
      57: [
        "60-3 Strategie es PERFECTA: 57×n = 60n - 3n",
        "Beispiel: 57×7 = 420 - 21 = 399. Sehr einfach!",
        "Zähle in cincuenta y siete en cincuenta y siete: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570",
        "Relación 3×19: Verdreifache die 19er-multiplication de",
        "Übe los Vielfache más difíciles: 57×7=399, 57×8=456",
      ],
      58: [
        "60-2 Strategie: 58×n = 60n - 2n",
        "Beispiel: 58×6 = 360 - 12 = 348",
        "Zähle in cincuenta y ocho en cincuenta y ocho: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580",
        "El doble de 29: Verdopple die 29er-multiplication de",
        "Übe los Vielfache más difíciles: 58×7=406, 58×9=522",
      ],
      59: [
        "60-1 Strategie SÚPER FÁCIL: 59×n = 60n - n",
        "Beispiel: 59×7 = 420 - 7 = 413. PERFEKT!",
        "Zähle in cincuenta y nueve en cincuenta y nueve: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590",
        "Tiempo: 59 minutos, 59 segundos - 1 minus que 60",
        "Übe los Vielfache más difíciles: 59×7=413, 59×8=472",
      ],
      60: [
        "Estrategia 6×10: mit 6 multiplizieren, fÃ¼ge hinzu un 0",
        "Beispiel: 7×60: 7×6=42, fÃ¼ge hinzu un 0: 420",
        "Zähle in sesenta en sesenta: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600",
        "Tiempo: 60 minutos=1 hora, 60 segundos=1 minuto",
        "Múltiples métodos: 60=6×10=5×12=4×15=3×20=2×30",
      ],
      61: [
        "60+1 Strategie es PERFECTA: 61×n = 60n + n",
        "Beispiel: 61×7 = 420 + 7 = 427. Sehr einfach!",
        "Zähle in sesenta y uno en sesenta y uno: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610",
        "Übe los Vielfache más difíciles: 61×7=427, 61×8=488",
        "Número primo: requiere estrategias de cálculo creativas",
      ],
      62: [
        "60+2 Strategie: 62×n = 60n + 2n",
        "Beispiel: 62×6 = 360 + 12 = 372",
        "Zähle in sesenta y dos en sesenta y dos: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620",
        "El doble de 31: Verdopple die 31er-multiplication de",
        "Übe los Vielfache más difíciles: 62×7=434, 62×9=558",
      ],
      63: [
        "Beziehung 7×9: Stärkt beide multiplication den",
        "Beispiel: 63×5 = 9×5×7 = 45×7 = 315",
        "Zähle in sesenta y tres en sesenta y tres: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630",
        "Alternativa: 63=3×21. Verdreifache die 21er-multiplication de",
        "Übe los Vielfache más difíciles: 63×7=441, 63×8=504",
      ],
      64: [
        "Cuadrado de 8: 64=8×8=8². Auch 2⁶",
        "Beispiel: 64×5 = 8×5×8 = 40×8 = 320",
        "Zähle in sesenta y cuatro en sesenta y cuatro: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640",
        "Ajedrez: 8×8=64 casillas, aplicación geométrica",
        "Computación: 64-Bit-Architektur, contexto tecnológico",
      ],
      65: [
        "Relación 5×13: Du kannst beide multiplication den nutzen",
        "Beispiel: 65×4 = 13×4×5 = 52×5 = 260",
        "Zähle in sesenta y cinco en sesenta y cinco: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650",
        "Du kannst nutzen Die Strategien 60+5 ou 70-5",
        "Übe los Vielfache más difíciles: 65×7=455, 65×9=585",
      ],
      66: [
        "Beziehung 6×11: Stärkt beide multiplication den",
        "Beispiel: 66×5 = 11×5×6 = 55×6 = 330",
        "Zähle in sesenta y seis en sesenta y seis: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660",
        "modÃ¨le de repetición: 66 (6×11), modÃ¨le de Die 11er-multiplication de",
        "Übe los Vielfache más difíciles: 66×7=462, 66×9=594",
      ],
      67: [
        "70-3 Strategie es PERFECTA: 67×n = 70n - 3n",
        "Beispiel: 67×7 = 490 - 21 = 469. Sehr einfach!",
        "Zähle in sesenta y siete en sesenta y siete: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670",
        "Übe los Vielfache más difíciles: 67×7=469, 67×8=536",
        "Número primo: requiere estrategias mentales especiales",
      ],
      68: [
        "70-2 Strategie: 68×n = 70n - 2n",
        "Beispiel: 68×6 = 420 - 12 = 408",
        "Zähle in sesenta y ocho en sesenta y ocho: 68, 136, 204, 272, 340, 408, 476, 544, 612, 680",
        "Relación 4×17: Vervierfache die 17er-multiplication de",
        "Übe los Vielfache más difíciles: 68×7=476, 68×9=612",
      ],
      69: [
        "70-1 Strategie SÚPER FÁCIL: 69×n = 70n - n",
        "Beispiel: 69×7 = 490 - 7 = 483. PERFEKT!",
        "Zähle in sesenta y nueve en sesenta y nueve: 69, 138, 207, 276, 345, 414, 483, 552, 621, 690",
        "Relación 3×23: Verdreifache die 23er-multiplication de",
        "Übe los Vielfache más difíciles: 69×7=483, 69×8=552",
      ],
      70: [
        "Estrategia 7×10: mit 7 multiplizieren, fÃ¼ge hinzu un 0",
        "Beispiel: 8×70: 8×7=56, fÃ¼ge hinzu un 0: 560",
        "Zähle in setenta en setenta: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700",
        "Stärkt Die 7er-multiplication de: cada resultado es 10 veces 7",
        "Múltiples métodos: 70=7×10=5×14=2×35",
      ],
      71: [
        "70+1 Strategie es PERFECTA: 71×n = 70n + n",
        "Beispiel: 71×7 = 490 + 7 = 497. Sehr einfach!",
        "Zähle in setenta y uno en setenta y uno: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710",
        "Übe los Vielfache más difíciles: 71×7=497, 71×8=568",
        "Número primo: requiere estrategias de cálculo creativas",
      ],
      72: [
        "Beziehung 8×9: Stärkt beide multiplication den",
        "Beispiel: 72×5 = 9×5×8 = 45×8 = 360",
        "Zähle in setenta y dos en setenta y dos: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720",
        "Múltiples métodos: 72=8×9=6×12=4×18=3×24",
        "Tiempo: 72 horas = 3 Tage. Aplicación práctica",
      ],
      73: [
        "70+3 Strategie: 73×n = 70n + 3n",
        "Beispiel: 73×5 = 350 + 15 = 365 (Tage del año!)",
        "Zähle in setenta y tres en setenta y tres: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730",
        "Übe los Vielfache más difíciles: 73×7=511, 73×8=584",
        "Número primo: Die 21º número primo, curiosidad matemática",
      ],
      74: [
        "75-1 Strategie: 74×n = 75n - n",
        "Beispiel: 74×5 = 375 - 5 = 370",
        "Zähle in setenta y cuatro en setenta y cuatro: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740",
        "Relación 2×37: Verdopple die 37er-multiplication de",
        "Übe los Vielfache más difíciles: 74×7=518, 74×9=666",
      ],
      75: [
        "Relaciones 3×25 ou 5×15: múltiples métodos",
        "Beispiel: 75×4 = 25×12 = 300",
        "Zähle in setenta y cinco en setenta y cinco: 75, 150, 225, 300, 375, 450, 525, 600, 675, 750",
        "Porcentaje: 75% = 3/4, relación fraccionaria importante",
        "Übe los Vielfache más difíciles: 75×7=525, 75×9=675",
      ],
      76: [
        "80-4 Strategie: 76×n = 80n - 4n",
        "Beispiel: 76×6 = 480 - 24 = 456",
        "Zähle in setenta y seis en setenta y seis: 76, 152, 228, 304, 380, 456, 532, 608, 684, 760",
        "Relación 4×19: Vervierfache die 19er-multiplication de",
        "Übe los Vielfache más difíciles: 76×7=532, 76×9=684",
      ],
      77: [
        "Beziehung 7×11: Stärkt beide multiplication den",
        "Beispiel: 77×5 = 11×5×7 = 55×7 = 385",
        "Zähle in setenta y siete en setenta y siete: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770",
        "modÃ¨le de repetición: 77 (7×11), modÃ¨le especial",
        "Übe los Vielfache más difíciles: 77×7=539, 77×9=693",
      ],
      78: [
        "80-2 Strategie: 78×n = 80n - 2n",
        "Beispiel: 78×7 = 560 - 14 = 546",
        "Zähle in setenta y ocho en setenta y ocho: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780",
        "Relación 6×13: Du kannst beide multiplication den nutzen",
        "Übe los Vielfache más difíciles: 78×7=546, 78×9=702",
      ],
      79: [
        "80-1 Strategie SÚPER FÁCIL: 79×n = 80n - n",
        "Beispiel: 79×7 = 560 - 7 = 553. PERFEKT!",
        "Zähle in setenta y nueve en setenta y nueve: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790",
        "Übe los Vielfache más difíciles: 79×7=553, 79×8=632",
        "Número primo: 1 minus que 80, einfache Berechnung",
      ],
      80: [
        "Estrategia 8×10: mit 8 multiplizieren, fÃ¼ge hinzu un 0",
        "Beispiel: 7×80: 7×8=56, fÃ¼ge hinzu un 0: 560",
        "Zähle in ochenta en ochenta: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800",
        "Stärkt Die 8er-multiplication de: cada resultado es 10 veces 8",
        "Múltiples métodos: 80=8×10=4×20=5×16=2×40",
      ],
      81: [
        "Nutze que es el cuadrado de 9: 81=9×9",
        "Beispiel: 81×5 = (9×5)×9 = 45×9 = 405",
        "80+1 Strategie: 81×n = 80n + n. Beispiel: 81×7 = 560+7 = 567",
        "Zähle in ochenta y uno en ochenta y uno: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810",
        "Übe los Vielfache más difíciles: 81×7=567, 81×8=648, 81×9=729",
      ],
      82: [
        "80+2 Strategie: 82×n = 80n + 2n",
        "Beispiel: 82×6 = 480 + 12 = 492",
        "Zähle in ochenta y dos en ochenta y dos: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820",
        "Relación 2×41: Verdopple die 41er-multiplication de",
        "Übe los Vielfache más difíciles: 82×7=574, 82×9=738",
      ],
      83: [
        "Nutze la 85-2 Strategie ou 80+3",
        "Beispiel: 83×6 = 510-12 = 498 ou 480+18 = 498",
        "Zähle in ochenta y tres en ochenta y tres: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830",
        "Número primo: requiere estrategias de cálculo creativas",
        "Übe los Vielfache más difíciles: 83×7=581, 83×8=664, 83×9=747",
      ],
      84: [
        "Relación 7×12: Du kannst beide multiplication den nutzen",
        "Beispiel: 84×5 = 12×5×7 = 60×7 = 420",
        "Zähle in ochenta y cuatro en ochenta y cuatro: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840",
        "Múltiples métodos: 84=7×12=6×14=4×21=3×28",
        "Übe los Vielfache más difíciles: 84×7=588, 84×9=756",
      ],
      85: [
        "Beziehung 5×17: Du kannst beide multiplication den nutzen, die 5er und die 17er",
        "Beispiel: 85×4 = 17×4×5 = 68×5 = 340",
        "Zähle in ochenta y cinco en ochenta y cinco: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850",
        "Último dígito: Endet auf 5 ou 0",
        "Estrategias 90-5 ou 80+5: 85×6 = 540-30 = 510",
      ],
      86: [
        "90-4 Strategie: 86×n = 90n - 4n",
        "Beispiel: 86×6 = 540 - 24 = 516",
        "Zähle in ochenta y seis en ochenta y seis: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860",
        "Relación 2×43: Verdopple die 43er-multiplication de",
        "Übe los Vielfache más difíciles: 86×7=602, 86×9=774",
      ],
      87: [
        "90-3 Strategie es PERFECTA: 87×n = 90n - 3n",
        "Beispiel: 87×7 = 630 - 21 = 609. Sehr einfach!",
        "Zähle in ochenta y siete en ochenta y siete: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870",
        "Relación 3×29: Verdreifache die 29er-multiplication de",
        "Übe los Vielfache más difíciles: 87×7=609, 87×8=696, 87×9=783",
      ],
      88: [
        "Relación 8×11: Du kannst beide multiplication den nutzen",
        "Beispiel: 88×5 = 11×5×8 = 55×8 = 440",
        "Zähle in ochenta y ocho en ochenta y ocho: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880",
        "propriÃ©tÃ© von repetición: facilidad de reconocimiento visual (88)",
        "Múltiples métodos: 88=8×11=4×22=2×44",
      ],
      89: [
        "90-1 Strategie SÚPER FÁCIL: 89×n = 90n - n",
        "Beispiel: 89×7 = 630 - 7 = 623. PERFEKT!",
        "Zähle in ochenta y nueve en ochenta y nueve: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890",
        "Übe los Vielfache más difíciles: 89×7=623, 89×8=712, 89×9=801",
        "Número primo: la 90-1 Strategie es el método más práctico",
      ],
      90: [
        "Estrategia 9×10: mit 9 multiplizieren, fÃ¼ge hinzu un 0",
        "Beispiel: 7×90: 7×9=63, fÃ¼ge hinzu un 0: 630",
        "Zähle in noventa en noventa: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900",
        "Stärkt Die 9er-multiplication de: cada resultado es 10 veces 9",
        "Múltiples métodos: 90=9×10=3×30=5×18=6×15",
      ],
      91: [
        "Relación 7×13: Du kannst beide multiplication den nutzen",
        "Beispiel: 91×5 = 13×5×7 = 65×7 = 455",
        "90+1 Strategie: 91×n = 90n + n. Beispiel: 91×7 = 630+7 = 637",
        "Zähle in noventa y uno en noventa y uno: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910",
        "Übe los Vielfache más difíciles: 91×7=637, 91×8=728, 91×9=819",
      ],
      92: [
        "Nutze la 90+2 Strategie ou 100-8",
        "Beispiel: 92×6 = 480+12 = 492 ou 600-48 = 552",
        "Zähle in noventa y dos en noventa y dos: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920",
        "Relación 4×23: Vervierfache die 23er-multiplication de",
        "Übe los Vielfache más difíciles: 92×7=644, 92×9=828",
      ],
      93: [
        "90+3 Strategie: 93×n = 90n + 3n",
        "Beispiel: 93×7 = 630 + 21 = 651",
        "Zähle in noventa y tres en noventa y tres: 93, 186, 279, 372, 465, 558, 651, 744, 837, 930",
        "Relación 3×31: Verdreifache die 31er-multiplication de",
        "Übe los Vielfache más difíciles: 93×7=651, 93×8=744, 93×9=837",
      ],
      94: [
        "100-6 Strategie es PERFECTA: 94×n = 100n - 6n",
        "Beispiel: 94×7 = 700 - 42 = 658. Sehr einfach!",
        "Zähle in noventa y cuatro en noventa y cuatro: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940",
        "Relación 2×47: Verdopple die 47er-multiplication de",
        "Übe los Vielfache más difíciles: 94×7=658, 94×8=752, 94×9=846",
      ],
      95: [
        "Beziehung 5×19: Du kannst beide multiplication den nutzen, die 5er und die 19er",
        "Beispiel: 95×4 = 19×4×5 = 76×5 = 380",
        "Zähle in noventa y cinco en noventa y cinco: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950",
        "Último dígito: Endet auf 5 ou 0",
        "100-5 Strategie: 95×6 = 600-30 = 570. Sehr pratique!",
      ],
      96: [
        "Relación 8×12: Du kannst beide multiplication den nutzen",
        "Beispiel: 96×5 = 12×5×8 = 60×8 = 480",
        "Zähle in noventa y seis en noventa y seis: 96, 192, 288, 384, 480, 576, 672, 768, 864, 960",
        "Múltiples métodos: 96=8×12=6×16=4×24=3×32",
        "Übe los Vielfache más difíciles: 96×7=672, 96×9=864",
      ],
      97: [
        "100-3 Strategie SÚPER FÁCIL: 97×n = 100n - 3n",
        "Beispiel: 97×7 = 700 - 21 = 679. PERFEKT!",
        "Zähle in noventa y siete en noventa y siete: 97, 194, 291, 388, 485, 582, 679, 776, 873, 970",
        "Übe los Vielfache más difíciles: 97×7=679, 97×8=776, 97×9=873",
        "Número primo: la 100-3 Strategie es el método más práctico",
      ],
      98: [
        "100-2 Strategie MUY FÁCIL: 98×n = 100n - 2n",
        "Beispiel: 98×7 = 700 - 14 = 686. PERFEKT!",
        "Zähle in noventa y ocho en noventa y ocho: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980",
        "Relación 2×49: Verdopple die 49er-multiplication de",
        "Übe los Vielfache más difíciles: 98×7=686, 98×8=784, 98×9=882",
      ],
      99: [
        "100-1 Strategie LA einfacher: 99×n = 100n - n",
        "Beispiel: 99×7 = 700 - 7 = 693. PERFEKT!",
        "Zähle in noventa y nueve en noventa y nueve: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990",
        "Relación 9×11: Du kannst beide multiplication den nutzen",
        "modÃ¨le de repetición: 99 proporciona facilidad de reconocimiento visual",
      ],
      100: [
        "DIE EINFACHSTE multiplication de! Füge zwei Nullen am Ende hinzu",
        "Beispiel: 7×100 = 700. seulement fÃ¼ge hinzu 00 después dDie 7!",
        "Zähle in cien en cien: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
        "10 Beziehung×10: 10 veces Die 10er-multiplication de",
        "Es la base para Berechnungen porcentuales: 100%=completo, es la base de todo!",
      ],
    }
    return strategies[number] || [
      `Übe das Zählen in ${number}er-Schritten laut`,
      "Schreibe die multiplication de jeden Tag eine Woche lang auf",
      "Verwende Lernkarten, um dich zufällig zu testen",
      "Übe täglich 5-10 Minuten, anstatt auf einfois lange zu lernen",
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
                <span className="text-slate-900">Einfoiseins-multiplication de</span>
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6 sm:mt-8 mb-4 sm:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-blue-100">
                <div className="text-2xl sm:text-3xl mb-1">📊</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-slate-600">Operationen</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-indigo-100">
                <div className="text-2xl sm:text-3xl mb-1">🎮</div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">3</div>
                <div className="text-xs text-slate-600">Jeux</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border-2 border-purple-100">
                <div className="text-2xl sm:text-3xl mb-1">📝</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">∞</div>
                <div className="text-xs text-slate-600">Übung</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center px-4">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Diese Seiteaide dir, <span className="font-semibold text-yellow-200">das {number}er-Einfoiseins</span> zu lernen und zu verstehen. 
              Du wirst entdecken, comme sich die {number} bei der multiplication verhält, 
              <span className="font-semibold text-yellow-200"> ihre modÃ¨le sehen</span> und 
              <span className="font-semibold text-yellow-200">pratiquee Wege</span> lernen, um sie zu beherrschen.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎯</span>
                <span>Üben</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-purple-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">🎮</span>
                <span>Jeux entdecken</span>
              </a>
              <a 
                href="#worksheets"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm text-green-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-white/50 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📝</span>
                <span className="hidden sm:inline">Übungen herunterladen</span>
                <span className="sm:hidden">Herunterladen</span>
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
              ce qui deckt die {number}er-multiplication de ab?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            Die {number}er-Einfoiseinsmultiplication de deckt das Produkt der nombre {number} mit allen nombreen von 1 bis 10 ab. 
            Das lehrt dich <span className="font-bold text-indigo-600">10 grundlegende Operationen</span>, die dir sehr im Alltag und bei fortgeschrittenen mathematischen Themen helfen werden.
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
                Die {number}er-multiplication dea <span className="font-bold text-indigo-600">10 multiplicationsoperationen</span>. 
                Lorsque vous die modÃ¨le dieser multiplication de verstehst, kannst du diese Operationen leicht lernen und schnell berechnen!
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
                  ce quisignifie die nombre {number} in der multiplication?
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
                        Cuando ves {number} × 4, piensa: "Tengo 4 grupos y cada grupoa {number} elementos." 
                        commeo {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Warum es wichtig ist, die {number}er-multiplication de zu lernen
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
                  Table de multiplication de {number}
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
                    title="Herunterladen"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="hidden sm:inline">Herunterladen</span>
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
            ModÃ¨les dans la table de Table de multiplication de {number}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
            modÃ¨le zu verstehenrend das Lernen einfacher undrend mehr Spaß. Die Table de multiplication de {number}a 
            wunderschöne modÃ¨le, die dir helfen können, sie zu merken, ohne auswendig zu lernen.
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
            comme man die Table de multiplication de {number} übt
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Das Lernen der Einfoiseins-multiplication denrequiert konsequentes Üben mit den richtigen Strategien. 
            Hier sind bewährte Methoden, um speziell die Table de multiplication de {number} zu meistern:
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
            Häufige Fehler beim Lernen der Table de multiplication de {number}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Viele Schüler machen ähnliche Fehler beim Lernen dieser multiplication de. Sich dieser häufigen Fehler bewusst zu sein, 
           aide dir, sie zu vermeiden und effektiver zu lernen.
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
                      <span className="font-semibold text-green-600">Lösung:</span> {item.solution}
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
            Verwandte Einfoiseins-multiplication den
          </h2>
          
          <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">
            Die Table de multiplication de {number} ist Teil eines breiteren Lernsystems. 
            Du kannst andere multiplication den im selben Plage erkunden ou zur nächsten logischen nombre übergehen.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {number > 1 && (
              <Link
                href={`/de/einfoiseins/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">← Vorherige nombre</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number - 1}er-Einfoiseins-multiplication de
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
                href={`/de/einfoiseins/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-1">Nächste nombre →</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">
                      {number + 1}er-Einfoiseins-multiplication de
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/de/einfoiseins/${rangeStart}-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 sm:p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-slate-600 mb-1">↑ Übergeordneter Plage</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">
                    Einfoiseins-multiplication den von {rangeStart} bis {rangeEnd}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                    Entdecke alle Einfoiseins-multiplication den in diesem Plage mit Übungstools und Jeuxn
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

