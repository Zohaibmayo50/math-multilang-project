'use client'

import Link from 'next/link'
import Header from './Header'
import PracticePreview from './PracticePreview'
import GamesSection from './GamesSection'
import PrintableExercises from './PrintableExercises'
import Footer from './Footer'

interface RangePageProps {
  rangeStart: number
  rangeEnd: number
  nextRangeUrl?: string
  prevRangeUrl?: string
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced'
  difficultyColor: string
}

export default function RangePageEn({ 
  rangeStart, 
  rangeEnd, 
  nextRangeUrl, 
  prevRangeUrl,
  difficultyLevel,
  difficultyColor
}: RangePageProps) {
  const rangeNumbers = Array.from(
    { length: rangeEnd - rangeStart + 1 }, 
    (_, i) => rangeStart + i
  )
  
  const difficultyLabels = {
    beginner: 'Beginner Level',
    intermediate: 'Intermediate Level',
    advanced: 'Advanced Level'
  }
  
  const difficultyDescriptions = {
    beginner: 'This range is ideal for students who are just starting with multiplication.',
    intermediate: 'This range is for students who know basic times tables and want to develop their skills.',
    advanced: 'This range is for advanced students who want to practice multiplication with larger numbers.'
  }
  
  const colors = [
    'from-blue-500 to-blue-600',
    'from-indigo-500 to-indigo-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-rose-500 to-rose-600',
    'from-orange-500 to-orange-600',
    'from-amber-500 to-amber-600',
    'from-yellow-500 to-yellow-600',
    'from-lime-500 to-lime-600',
    'from-emerald-500 to-emerald-600'
  ]
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero / Range Introduction */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${difficultyColor} pt-20 pb-16 md:pt-24 md:pb-20`}>
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Numbers */}
          {rangeNumbers.slice(0, 5).map((num, index) => (
            <div
              key={num}
              className={`absolute text-7xl md:text-8xl font-bold opacity-10 animate-float${index % 2 === 0 ? '' : '-delayed'}`}
              style={{
                top: `${10 + index * 15}%`,
                left: index % 2 === 0 ? `${10 + index * 10}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + index * 8}%` : 'auto'
              }}
            >
              {num}
            </div>
          ))}
          
          {/* Colorful Circles */}
          <div className="absolute top-20 right-[30%] w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[20%] w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-[45%] w-28 h-28 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-[15%] w-36 h-36 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Difficulty Badge with Icon */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-white/50">
              <span className="text-3xl">
                {difficultyLevel === 'beginner' ? '🌟' : difficultyLevel === 'intermediate' ? '🚀' : '⭐'}
              </span>
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {difficultyLabels[difficultyLevel]}
              </span>
              {difficultyLevel === 'beginner' && <span className="text-2xl">✨</span>}
              {difficultyLevel === 'intermediate' && <span className="text-2xl">💪</span>}
              {difficultyLevel === 'advanced' && <span className="text-2xl">🏆</span>}
            </div>
          </div>
          
          {/* Main Heading with Fun Elements */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl md:text-6xl animate-bounce">🎯</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {rangeStart} - {rangeEnd}
                </span>
                <br />
                <span className="text-slate-900">Times Tables</span>
              </h1>
              <span className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎨</span>
            </div>
            
            {/* Fun Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-8 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-blue-100">
                <div className="text-3xl mb-1">📚</div>
                <div className="text-2xl font-bold text-blue-600">{rangeNumbers.length}</div>
                <div className="text-xs text-slate-600">Numbers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-indigo-100">
                <div className="text-3xl mb-1">✖️</div>
                <div className="text-2xl font-bold text-indigo-600">{rangeNumbers.length * 10}</div>
                <div className="text-xs text-slate-600">Operations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-purple-100 col-span-2 md:col-span-1">
                <div className="text-3xl mb-1">🎮</div>
                <div className="text-2xl font-bold text-purple-600">Unlimited</div>
                <div className="text-xs text-slate-600">Practice</div>
              </div>
            </div>
          </div>
          
          {/* Description with Better Typography */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-600">Learn the Times Tables from {rangeStart} to {rangeEnd}</span> with 
              <span className="font-semibold text-indigo-600"> fun games</span>, 
              <span className="font-semibold text-purple-600"> interactive exercises</span> and 
              <span className="font-semibold text-pink-600"> printable worksheets</span>!
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a 
                href="#practice"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span className="text-xl">🎯</span>
                <span>Practice Now</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#games"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-indigo-600 font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border-2 border-indigo-100"
              >
                <span className="text-xl">🎮</span>
                <span>Learn with Games</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Context */}
      <section className="section-container bg-white py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <span className="text-3xl">📖</span>
              What Do the {rangeStart} to {rangeEnd} Times Tables Cover?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-base text-slate-700 mb-6 leading-relaxed text-center max-w-2xl mx-auto">
            This range contains the times table for each number between {rangeStart} and {rangeEnd}. 
            Each of these numbers is multiplied by numbers from 1 to 10.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {rangeNumbers.map((num, index) => (
                <div key={num} className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow group">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
                    {num}
                  </span>
                  <span className="text-lg mt-1">{index % 4 === 0 ? '⭐' : index % 4 === 1 ? '🌟' : index % 4 === 2 ? '✨' : '💫'}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/60 rounded-xl p-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <p className="text-sm text-slate-700 leading-relaxed">
                Students learn a total of <span className="font-bold text-indigo-600">{rangeNumbers.length * 10} multiplications</span> in this range. 
                Thanks to the <span className="font-bold text-purple-600">commutative property</span>, the number of operations that actually need to be memorized is smaller 
                (for example, <span className="font-mono bg-blue-50 px-2 py-0.5 rounded text-xs">{rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}</span>).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Area */}
      <PracticePreview rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Games Section */}
      <GamesSection rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Printable Worksheets */}
      <PrintableExercises rangeStart={rangeStart} rangeEnd={rangeEnd} />

      {/* Range Table */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900">
              {rangeStart} to {rangeEnd} Times Tables - Complete List
            </h2>
            <button
              onClick={() => {
                const printWindow = window.open('', '_blank')
                if (printWindow) {
                  printWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>${rangeStart} to ${rangeEnd} Times Tables</title>
                      <style>
                        @media print {
                          @page { margin: 1cm; }
                        }
                        body {
                          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                          padding: 20px;
                          max-width: 1200px;
                          margin: 0 auto;
                        }
                        h1 {
                          text-align: center;
                          color: #1e293b;
                          margin-bottom: 30px;
                          font-size: 28px;
                        }
                        .grid {
                          display: grid;
                          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                          gap: 20px;
                          margin-top: 20px;
                        }
                        .table-box {
                          border: 2px solid #3b82f6;
                          border-radius: 12px;
                          padding: 15px;
                          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                        }
                        .table-title {
                          font-size: 18px;
                          font-weight: bold;
                          text-align: center;
                          margin-bottom: 12px;
                          color: #1e40af;
                        }
                        .equation {
                          display: flex;
                          justify-content: space-between;
                          padding: 6px 10px;
                          margin: 4px 0;
                          background: white;
                          border-radius: 6px;
                          font-size: 14px;
                        }
                        .equation-left {
                          color: #475569;
                        }
                        .equation-right {
                          font-weight: 600;
                          color: #1e293b;
                        }
                      </style>
                    </head>
                    <body>
                      <h1>${rangeStart} to ${rangeEnd} Times Tables - Complete List</h1>
                      <div class="grid">
                        ${rangeNumbers.map(num => `
                          <div class="table-box">
                            <div class="table-title">${num} Times Table</div>
                            ${[...Array(10)].map((_, i) => `
                              <div class="equation">
                                <span class="equation-left">${num} × ${i + 1}</span>
                                <span class="equation-right">= ${num * (i + 1)}</span>
                              </div>
                            `).join('')}
                          </div>
                        `).join('')}
                      </div>
                    </body>
                    </html>
                  `)
                  printWindow.document.close()
                  setTimeout(() => {
                    printWindow.print()
                  }, 250)
                }
              }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download / Print Table
            </button>
          </div>
          
          <p className="text-center text-slate-700 mb-8 max-w-3xl mx-auto">
            Below you can see all the times tables from {rangeStart} to {rangeEnd} together. 
            Each number has its own colorful box.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rangeNumbers.map((num, index) => {
              const colorIndex = index % colors.length
              
              return (
                <div key={num} className={`bg-gradient-to-br ${colors[colorIndex]} rounded-xl p-4 text-white`}>
                  <div className="font-bold text-lg mb-3 text-center">{num} Times Table</div>
                  <div className="space-y-1 text-sm">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/20 rounded px-2 py-1">
                        <span>{num} × {i + 1}</span>
                        <span className="font-semibold">= {num * (i + 1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Links to Number Pages */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Individual Times Tables in this Range
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            If you want to learn the times table for each number in detail, you can go to the relevant page 
            through the links below. Each page contains patterns, tips, and practice tools specific to that number.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {rangeNumbers.map((num) => (
              <Link
                key={num}
                href={`/en/multiplication-tables/${num}`}
                className="block bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {num} Times Table
                    </div>
                    <p className="text-slate-600">
                      Detailed explanation and examples for number {num}
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty & Progression */}
      <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Is This Range Important?
          </h2>
          
          <div className="space-y-6">
            <div className={`bg-white rounded-xl p-6 border-l-4 ${
              difficultyLevel === 'beginner' ? 'border-green-500' : 
              difficultyLevel === 'intermediate' ? 'border-yellow-500' : 
              'border-red-500'
            }`}>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🎯 {difficultyLabels[difficultyLevel]}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {difficultyDescriptions[difficultyLevel]} {rangeStart === 1 ? 
                  'Since the numbers are small, students can understand and verify the results more easily.' :
                  'This range builds upon knowledge from previous ranges.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🧠 Cognitive Development
              </h3>
              <p className="text-slate-700 leading-relaxed">
                This range helps students develop their mental calculation skills. 
                With regular practice, they begin to automatically remember the products of these numbers.
              </p>
            </div>
            
            {nextRangeUrl && (
              <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  📈 Preparation for the Next Step
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Students who learn this range well are ready to advance to the next range. 
                  Each range further strengthens multiplication understanding and develops mathematical thinking.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Patterns & Observations */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Patterns in the {rangeStart} to {rangeEnd} Times Tables
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Understanding patterns in the times tables rather than trying to memorize them 
            makes the learning process faster and more lasting.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                Symmetry (Commutative Property)
              </h3>
              <p className="text-slate-700 mb-3">
                The order in multiplication can be changed: {rangeStart} × {rangeEnd} = {rangeEnd} × {rangeStart}. 
                This property makes learning easier.
              </p>
              <p className="text-sm text-slate-600 italic">
                Example: If you know one fact, you also know its reverse.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">➕</span>
                Repeated Addition
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeStart} × 3 = {rangeStart} + {rangeStart} + {rangeStart} = {rangeStart * 3}. 
                Multiplication is repeated addition of the same number.
              </p>
              <p className="text-sm text-slate-600 italic">
                This logic is important for understanding the basic meaning of multiplication.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">✖️</span>
                Even Number Pattern
              </h3>
              <p className="text-slate-700 mb-3">
                {rangeNumbers.filter(n => n % 2 === 0).length > 0 ? 
                  `Even numbers in this range (${rangeNumbers.filter(n => n % 2 === 0).join(', ')}) always give even results.` :
                  'The times tables for numbers in this range show specific patterns.'
                }
              </p>
              <p className="text-sm text-slate-600 italic">
                Understanding even and odd number logic reduces errors.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔢</span>
                Last Digit Pattern
              </h3>
              <p className="text-slate-700 mb-3">
                In each number's times table, the last digits repeat in a specific pattern. 
                Noticing this pattern is useful for verification.
              </p>
              <p className="text-sm text-slate-600 italic">
                For example: Numbers ending in 5 always end in 0 or 5.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Study This Range */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How to Learn the {rangeStart} to {rangeEnd} Times Tables?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Systematic Method
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Instead of trying to learn all numbers in this range at once, focus on 1-2 numbers per day. 
                Move on to the next after you've learned a number well.
              </p>
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-slate-700">
                  <strong>Recommendation:</strong> After repeating each number for 3-4 consecutive days, 
                  start solving mixed problems.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Visualization Techniques
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Visualizing numbers makes them easier to remember:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Think in groups:</strong> Imagine {rangeStart} × 4 as {rangeStart} items 
                    forming 4 groups.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Create stories:</strong> Creating a short story for each number 
                    makes it fun to remember.
                  </div>
                </li>
                <li className="flex items-start text-slate-700">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <div>
                    <strong>Use colored cards:</strong> Assigning different colors to each number 
                    strengthens visual memory.
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Practice Exercises
              </h3>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Regular practice ensures that learned knowledge becomes permanent:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Quick Questions and Answers</p>
                  <p className="text-slate-700 text-sm">
                    Solve at least 10 random problems daily and time yourself.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Written Tests</p>
                  <p className="text-slate-700 text-sm">
                    Take a written test once a week and analyze your mistakes.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Games</p>
                  <p className="text-slate-700 text-sm">
                    Playing multiplication games makes learning fun.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <p className="font-semibold text-slate-900 mb-2">Compete with Friends</p>
                  <p className="text-slate-700 text-sm">
                    You can increase your motivation by competing with your friends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation: Previous & Next Range */}
      <section className="section-container bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {nextRangeUrl ? 'Continue Your Learning Journey' : 'Congratulations!'}
          </h2>
          
          {nextRangeUrl ? (
            <>
              <p className="text-xl mb-8 leading-relaxed opacity-95 text-center">
                If you can use the {rangeStart} to {rangeEnd} times tables comfortably, 
                you're ready to advance to the next step!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                {prevRangeUrl && (
                  <Link
                    href={prevRangeUrl}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Previous Range
                  </Link>
                )}
                
                <Link
                  href={nextRangeUrl}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Go to Next Range
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          ) : (
            <p className="text-xl leading-relaxed opacity-95 text-center">
              You've completed all the times tables! Now you know all multiplications from 1 to 100.
            </p>
          )}
          
          <p className="mt-6 text-sm opacity-80 text-center">
            Be patient and consistent to learn all the times tables. Each range builds upon the previous one.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
    </>
  )
}
