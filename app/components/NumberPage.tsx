'use client'

import Link from 'next/link'
import Footer from './Footer'

interface NumberPageProps {
  number: number
  rangeStart: number
  rangeEnd: number
}

export default function NumberPage({ number, rangeStart, rangeEnd }: NumberPageProps) {
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
  ]
  
  const colorIndex = (number - 1) % colors.length

  // Number-specific content
  const getNumberMeaning = () => {
    const meanings: { [key: number]: string } = {
      1: "Multiplying by 1 is a special case in mathematics. When you multiply any number by 1, the result is always that same number. This is called the identity property of multiplication. Think of it as asking 'how many groups of something do I have?' When you have just 1 group, you have exactly what you started with.",
      2: "Multiplying by 2 means doubling a number. When you multiply something by 2, you're adding it to itself. This is one of the most practical multiplication facts because we often need to double things in real life—like calculating pairs of shoes, bicycle wheels, or splitting something equally between two people.",
      3: "Multiplying by 3 means taking a number three times. You can think of it as adding the same number to itself three times. This table is essential for understanding triangles, triplets, and anything that comes in groups of three.",
      4: "Multiplying by 4 is like doubling twice. Since 4 = 2 × 2, you can double a number and then double the result. This makes the 4 times table easier to learn if you already know your 2s. The number 4 appears frequently in geometry (squares have 4 sides) and in measuring time (4 quarters in an hour).",
      5: "Multiplying by 5 creates one of the most beautiful patterns in mathematics. All multiples of 5 end in either 0 or 5, making this table very predictable. This is incredibly useful for counting money (5 cents, 5 dollars) and telling time (5-minute intervals on a clock).",
    }
    return meanings[number] || `Multiplying by ${number} means adding ${number} to itself repeatedly. Each time you multiply, you're counting groups of ${number}.`
  }

  const getWhyImportant = () => {
    const importance: { [key: number]: string } = {
      1: "The multiplication table of 1 is the foundation of all multiplication. It teaches students that numbers have an identity—they remain themselves when multiplied by 1. This concept is crucial for understanding algebraic properties later. While it may seem simple, mastering this table builds confidence and establishes the pattern that multiplication is organized and predictable.",
      2: "The table of 2 is often the first real multiplication table students learn, and for good reason. Doubling is a natural concept that children encounter daily. Mastering this table makes mental math much faster and prepares students for even numbers, fractions (halves), and basic division. Many students find this the easiest table, which builds their confidence for harder tables.",
      3: "The multiplication table of 3 bridges the gap between easy and challenging tables. It requires students to move beyond simple doubling and start recognizing new patterns. This table appears constantly in real-world contexts like counting by threes, understanding triangular shapes, and working with time (three periods in a day). Students who master the 3 times table show they can handle abstract counting.",
      4: "Learning the 4 times table strengthens students' understanding of even numbers and geometric thinking. Since 4 is 2 doubled, students can use the 2 times table as a stepping stone, which teaches mathematical efficiency. This table is essential for understanding squares, area calculations, and quarter divisions. It's also frequently used in everyday situations like counting chair legs or car wheels.",
      5: "The multiplication table of 5 is one of the most practical and pattern-rich tables. Students love it because every answer ends in 0 or 5, making it highly predictable. This table directly connects to money (counting by fives), telling time (5-minute intervals), and measurement systems. Mastering the 5 times table gives students confidence and shows them that math has beautiful, consistent patterns.",
    }
    return importance[number] || `Learning the multiplication table of ${number} helps students develop fluency with this important number. It appears frequently in mathematics and daily life, making it essential for building strong calculation skills.`
  }

  const getPatterns = () => {
    const patterns: { [key: number]: { title: string; description: string }[] } = {
      1: [
        { title: "Identity Pattern", description: "Every number multiplied by 1 equals itself. This never changes: 1×1=1, 1×2=2, 1×3=3, and so on." },
        { title: "Predictable Sequence", description: "The results simply count up: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. You're just listing numbers in order." },
        { title: "Foundation for All Tables", description: "Every multiplication table starts with multiplying by 1, so this pattern appears in every table." },
      ],
      2: [
        { title: "Even Numbers Only", description: "All multiples of 2 are even numbers. The results always end in 0, 2, 4, 6, or 8." },
        { title: "Skip Counting by 2", description: "Each answer is 2 more than the previous: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Doubling Pattern", description: "Each result is exactly double the multiplier: 2×5=10 is double of 5." },
      ],
      3: [
        { title: "Digit Sum Pattern", description: "Add the digits of each result: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). The pattern 3-6-9 repeats!" },
        { title: "Skip Counting by 3", description: "Each answer increases by 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Odd-Even Alternation", description: "The results alternate: odd (3), even (6), odd (9), even (12), creating a predictable rhythm." },
      ],
      4: [
        { title: "All Even Numbers", description: "Like the 2 times table, all multiples of 4 are even, ending in 0, 2, 4, 6, or 8." },
        { title: "Double the 2s Table", description: "Each answer is exactly double the corresponding answer in the 2 times table: 4×3=12 is double of 2×3=6." },
        { title: "Skip Counting by 4", description: "Each answer increases by 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      5: [
        { title: "Ends in 0 or 5", description: "Every multiple of 5 ends in either 0 or 5. This makes the pattern instantly recognizable." },
        { title: "Alternating Pattern", description: "The results alternate between ending in 5 (odd) and 0 (even): 5, 10, 15, 20, 25, 30..." },
        { title: "Half of 10s Table", description: "Each result is exactly half of the 10 times table: 5×4=20 is half of 10×4=40." },
      ],
    }
    return patterns[number] || []
  }

  const getCommonMistakes = () => {
    const mistakes: { [key: number]: { mistake: string; solution: string }[] } = {
      1: [
        { mistake: "Thinking 1×1=2", solution: "Remember: anything times 1 equals itself. 1 group of 1 is just 1." },
        { mistake: "Confusing with addition", solution: "Multiplication by 1 is different from addition. 5+1=6, but 5×1=5." },
      ],
      2: [
        { mistake: "Mixing up 2×6=12 with 2×7=14", solution: "Use skip counting: 2, 4, 6, 8, 10, 12, 14. Count carefully to avoid skipping." },
        { mistake: "Getting confused with larger numbers", solution: "Break it down: 2×8 is just 8+8. Doubling is simple addition." },
      ],
      3: [
        { mistake: "Confusing 3×6=18 with 3×7=21", solution: "Remember the +3 pattern: after 18 comes 21. Count by threes to verify." },
        { mistake: "Mixing up 3×8=24 with 3×9=27", solution: "Use the digit sum trick: 24 (2+4=6) and 27 (2+7=9) follow the 3-6-9 pattern." },
      ],
      4: [
        { mistake: "Thinking 4×7=24 instead of 28", solution: "Remember: 4×6=24, so 4×7 must be 4 more, which is 28." },
        { mistake: "Confusing with the 2 times table", solution: "The 4 times table is always double the 2 times table. Check by doubling." },
      ],
      5: [
        { mistake: "Mixing up the order (25 before 20)", solution: "The pattern is consistent: 5, 10, 15, 20, 25. Each increases by 5." },
        { mistake: "Thinking 5×odd always ends in 5", solution: "Actually, 5×even ends in 0, and 5×odd ends in 5." },
      ],
    }
    return mistakes[number] || []
  }

  const getPracticeStrategies = () => {
    const strategies: { [key: number]: string[] } = {
      1: [
        "Say each multiplication out loud: '1 times 1 equals 1, 1 times 2 equals 2...'",
        "Practice writing the table once each day for a week",
        "Look for the pattern: the answer is always the same as the second number",
        "Use flashcards, but this table is often mastered very quickly",
      ],
      2: [
        "Count by 2s while walking or climbing stairs: 2, 4, 6, 8...",
        "Use your fingers: hold up fingers in pairs and count by 2s",
        "Practice doubling numbers in your head throughout the day",
        "Say it out loud: '2 times 5 is 5 plus 5, which equals 10'",
      ],
      3: [
        "Count by 3s rhythmically: 3, 6, 9, 12, 15...",
        "Use the finger trick: hold up fingers in groups of 3",
        "Look for the digit sum pattern (3-6-9 repeating) to check your answers",
        "Practice for 5-10 minutes daily rather than one long session",
      ],
      4: [
        "Learn the 2 times table first, then double each answer to get the 4s",
        "Count by 4s: 4, 8, 12, 16, 20...",
        "Use objects in groups of 4 (chair legs, car wheels) to visualize",
        "Practice the harder ones (4×6, 4×7, 4×8, 4×9) separately",
      ],
      5: [
        "Count by 5s using your fingers—each finger represents 5",
        "Look at a clock and count by 5-minute intervals",
        "Practice with money: count nickels (5 cents each)",
        "Remember: even multipliers end in 0, odd multipliers end in 5",
      ],
    }
    return strategies[number] || [
      `Practice counting by ${number}s out loud`,
      "Write the table daily for one week",
      "Use flashcards to test yourself randomly",
      "Practice 5-10 minutes each day rather than cramming",
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl font-bold text-indigo-600">{number}</div>
          <div className="absolute bottom-10 right-10 text-9xl font-bold text-blue-600">×</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6 shadow-lg">
            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {number}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Multiplication Table of {number}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            This page will help you learn and understand the multiplication table of {number}. 
            You'll discover how {number} behaves in multiplication, see its patterns, and learn 
            practical ways to master it. The {number} times table is an important part of the 
            complete multiplication system that every student needs to know.
          </p>
        </div>
      </section>

      {/* Number Context & Meaning */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Does the Number {number} Mean in Multiplication?
          </h2>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {getNumberMeaning()}
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Simple Explanation</h3>
                <p className="text-slate-700 leading-relaxed">
                  When you see {number} × 4, think: "I have 4 groups, and each group has {number} items in it." 
                  So {number} × 4 = {number} + {number} + {number} + {number} = {number * 4}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Number is Important */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Learning the Multiplication Table of {number} Is Important
          </h2>
          
          <p className="text-lg text-slate-700 leading-relaxed">
            {getWhyImportant()}
          </p>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Patterns in the Multiplication Table of {number}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Understanding patterns makes learning easier and more enjoyable. The {number} times table 
            has beautiful patterns that can help you remember it without pure memorization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {getPatterns().map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{index === 0 ? '🔄' : index === 1 ? '📊' : '✨'}</span>
                  {pattern.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Multiplication Table */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Multiplication Table of {number}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 text-center leading-relaxed">
            Here is the complete multiplication table for {number}, from {number} × 1 to {number} × 10.
          </p>
          
          <div className={`bg-gradient-to-br ${colors[colorIndex]} rounded-2xl p-8 text-white shadow-xl max-w-md mx-auto`}>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold">{number} Çarpım Tablosu</div>
            </div>
            
            <div className="space-y-3">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-lg hover:bg-white/30 transition-colors">
                  <span className="font-medium">{number} × {i + 1}</span>
                  <span className="font-bold text-xl">= {number * (i + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Practice */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How to Practice the Multiplication Table of {number}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Learning multiplication tables requires consistent practice with the right strategies. 
            Here are proven methods specifically for mastering the {number} times table:
          </p>
          
          <div className="grid gap-4">
            {getPracticeStrategies().map((strategy, index) => (
              <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border-2 border-green-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-700 leading-relaxed pt-1">
                  {strategy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Common Mistakes When Learning the Table of {number}
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Many students make similar mistakes when learning this table. Being aware of these 
            common errors will help you avoid them and learn more efficiently.
          </p>
          
          <div className="space-y-6">
            {getCommonMistakes().map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⚠️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.mistake}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Solution:</span> {item.solution}
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Related Multiplication Tables
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            The multiplication table of {number} is part of a larger learning system. 
            You can explore other tables in the same range or move to the next logical number.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {number > 1 && (
              <Link
                href={`/number/${number - 1}`}
                className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">← Previous Number</div>
                    <div className="text-2xl font-bold text-slate-900">
                      Multiplication Table of {number - 1}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-blue-600 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
            )}
            
            {number < 100 && (
              <Link
                href={`/number/${number + 1}`}
                className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Next Number →</div>
                    <div className="text-2xl font-bold text-slate-900">
                      Multiplication Table of {number + 1}
                    </div>
                  </div>
                  <svg className="w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )}
            
            <Link
              href={`/${rangeStart}-to-${rangeEnd}`}
              className="block bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all group md:col-span-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-600 mb-1">↑ Parent Range</div>
                  <div className="text-2xl font-bold text-slate-900">
                    Multiplication Tables {rangeStart} to {rangeEnd}
                  </div>
                  <p className="text-slate-600 mt-2">
                    Explore all multiplication tables in this range with practice tools and games
                  </p>
                </div>
                <svg className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
