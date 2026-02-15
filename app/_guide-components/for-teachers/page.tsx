import Link from 'next/link'
import Header from '@/app/components/en/Header'
import Footer from '@/app/components/en/Footer'

export const metadata = {
  title: 'For Teachers: Times Tables Guide | Classroom Teaching Materials',
  description: 'Professional resources for teaching times tables in the classroom, pedagogical strategies, activity suggestions, and assessment tools.',
  keywords: 'teach times tables, classroom activities, pedagogical methods, math teaching',
  alternates: {
    canonical: '/for-teachers',
  },
}

export default function ForTeachers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Times Tables Guide for Teachers
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Effective strategies, classroom activities, and resources for teaching 
              times tables in a way that all students can master them.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Effective Teaching Strategies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visualization</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Use visual representations to help students understand 
                multiplication as repeated groups.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Rectangular arrays (e.g., 3×4 as 3 rows of 4 objects)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Area models using grid paper</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Jump diagrams on the number line</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Concrete manipulatives (blocks, counters, cubes)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Decomposition</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Teach students to break down difficult multiplications 
                into simpler operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>7×6 = (5×6) + (2×6) = 30 + 12 = 42</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>9×8 = (10×8) - (1×8) = 80 - 8 = 72</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Use doubling: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Distributive property in action</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Patterns</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Help students discover and use patterns to facilitate 
                learning and memorization.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>2 times table: all even numbers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>5 times table: ends in 0 or 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>9 times table: digit sum = 9, descending pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Commutative property: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Real-World Applications</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Connect multiplication with everyday situations to give 
                meaning and context to learning.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Shopping and money problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Organizing objects in rows and columns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Cooking recipes and measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Sports, games, and group activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Activities Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Classroom Activities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Multiplication Bingo
              </h3>
              <p className="text-gray-700 mb-3">
                Students create bingo cards with products. 
                Call out multiplications and students mark the answers.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Level:</strong> Beginner to Intermediate<br/>
                <strong>Time:</strong> 15-20 minutes
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Multiplication Races
              </h3>
              <p className="text-gray-700 mb-3">
                Teams compete by answering multiplication problems 
                in a relay format at the board.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Level:</strong> All levels<br/>
                <strong>Time:</strong> 10-15 minutes
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Multiplication Dominoes
              </h3>
              <p className="text-gray-700 mb-3">
                Modified domino tiles where students match 
                multiplications with their products.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Level:</strong> Intermediate<br/>
                <strong>Time:</strong> 20-30 minutes
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Array Art
              </h3>
              <p className="text-gray-700 mb-3">
                Students create artistic designs using 
                rectangular arrays and label the corresponding multiplications.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Level:</strong> Beginner<br/>
                <strong>Time:</strong> 30-40 minutes
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Practice Stations
              </h3>
              <p className="text-gray-700 mb-3">
                Set up rotating stations with different activities: 
                flashcards, digital games, written problems, manipulatives.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Level:</strong> All levels<br/>
                <strong>Time:</strong> 40-50 minutes
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Multiplication Stories
              </h3>
              <p className="text-gray-700 mb-3">
                Students write and illustrate multiplication problems 
                based on real or imaginary situations.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Level:</strong> Intermediate to Advanced<br/>
                <strong>Time:</strong> 30-45 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Differentiated Instruction
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Beginning Learners
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Start with 1, 2, 5, and 10 times tables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Use lots of concrete manipulatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Emphasize repeated addition initially</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Provide reference charts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Brief daily practice (5-10 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Celebrate small achievements</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Intermediate Learners
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Introduce 3, 4, 6, and 7 times tables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Teach decomposition strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Practice commutative property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Moderate speed games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Problems with contextual application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Partner and small group work</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Advanced Learners
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>8, 9, 11, and 12 times tables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Multi-step problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Connection to division and fractions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Math logic challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Create their own problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Peer tutoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Strategies Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Assessment Strategies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Formative Assessment
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Daily Observation</h4>
                  <p className="text-gray-700">
                    Observe students during practice, make notes about 
                    strategies used and common errors.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Quick Mini-Tests</h4>
                  <p className="text-gray-700">
                    1-2 minutes at the start of class: 10 problems to assess 
                    fluency and retention.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Individual Whiteboards</h4>
                  <p className="text-gray-700">
                    Students show answers simultaneously, allowing 
                    quick check of the entire class.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Math Interviews</h4>
                  <p className="text-gray-700">
                    Brief one-on-one conversations to understand the student's 
                    reasoning and strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Summative Assessment
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Fluency Tests</h4>
                  <p className="text-gray-700">
                    Timed assessments to measure speed and accuracy 
                    in specific table ranges.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Applied Projects</h4>
                  <p className="text-gray-700">
                    Students solve real-world problems that require 
                    multiplication in various contexts.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Portfolios</h4>
                  <p className="text-gray-700">
                    Collection of work over time showing progress 
                    and growing mastery.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Self-Assessment</h4>
                  <p className="text-gray-700">
                    Students track their own progress, identify mastered tables, 
                    and set goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Progress Tracking
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Mastery Charts</h4>
                <p className="text-sm">
                  Students color in mastered tables on a 12×12 visual grid 
                  to see their progress.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Time Tracking</h4>
                <p className="text-sm">
                  Track speed improvements with charts showing 
                  decreasing completion times.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Achievement Badges</h4>
                <p className="text-sm">
                  Reward system for mastering each table, motivating 
                  continued progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Misconceptions Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Misconceptions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Recognize and address these frequent misunderstandings to ensure 
              a solid understanding of multiplication:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Multiplication always makes numbers bigger"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it's problematic:</strong> Students get confused 
                  when multiplying by fractions or decimals.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">How to fix it:</strong> Show 
                  examples like 5 × 0.5 = 2.5 or 3 × 0 = 0. Explain that multiplying 
                  by numbers less than 1 reduces the result.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Order doesn't matter in word problems"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it's problematic:</strong> Although 3×4 = 4×3, the contextual 
                  meaning can be different (3 groups of 4 vs. 4 groups of 3).
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">How to fix it:</strong> Discuss 
                  the commutative property but emphasize the importance of understanding 
                  the problem's context.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Multiplying is just memorization"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it's problematic:</strong> Students may 
                  memorize without understanding, making application and retention harder.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">How to fix it:</strong> Always 
                  teach concepts before memorization. Use visual models 
                  and understanding strategies.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Patterns always work without understanding them"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it's problematic:</strong> Students apply 
                  patterns mechanically without understanding the mathematical "why."
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">How to fix it:</strong> When teaching 
                  patterns (e.g., 9 times table), always explain why they work 
                  using mathematical properties.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "There's only one right way to solve"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it's problematic:</strong> Limits creative 
                  thinking and numerical flexibility.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">How to fix it:</strong> Celebrate 
                  multiple strategies. Ask students to share different 
                  methods and discuss when each is most useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Best Practices Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips and Best Practices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Success Tips
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Short, daily practice is better than long sporadic sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Celebrate progress, not just perfection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Vary practice methods to maintain interest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Connect with other subjects: art, music, physical education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Involve families with home activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Use technology as a supplement, not replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Suggested Sequence
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">1, 2, 10, 5 times tables</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Commutative property (reduces load)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">4 times table (double the 2s)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">9 times table (special patterns)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">3 and 6 times tables (triple relationship)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">7, 8 times tables (more challenging)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">11, 12 times tables (advanced patterns)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/en/multiplication-tables/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Times Tables 1-10</h3>
              <p className="text-sm text-gray-600">Basic resources</p>
            </Link>

            <Link 
              href="/en/multiplication-tables/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Times Tables 11-20</h3>
              <p className="text-sm text-gray-600">Intermediate level</p>
            </Link>

            <Link 
              href="/en/multiplication-tables/for-students" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">For Students</h3>
              <p className="text-sm text-gray-600">Learning guide</p>
            </Link>

            <Link 
              href="/en/multiplication-tables/for-parents" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">For Parents</h3>
              <p className="text-sm text-gray-600">Home support</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need More Help?
            </h3>
            <p className="text-lg mb-6">
              Explore our individual times tables for specific resources, 
              downloadable exercises, and interactive activities.
            </p>
            <Link 
              href="/en/multiplication-tables"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Times Tables
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
