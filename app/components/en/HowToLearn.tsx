export default function HowToLearnEn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          How to Learn Multiplication Tables Effectively?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Learn through understanding patterns</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Multiplication tables have many patterns and sequences. Finding these patterns 
                provides logical understanding instead of just memorization:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Multiples of 2:</strong> Always even numbers (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Multiples of 5:</strong> Always end with 0 or 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Multiples of 9:</strong> The sum of digits is always divisible by 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Multiples of 10:</strong> Always end with 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Commutative property:</strong> 3 × 4 = 4 × 3 (Order doesn't affect the result)
                </li>
              </ul>
              <p>
                Understanding these patterns allows you to learn the fundamental logic, 
                rather than memorizing nearly 100 multiplication results.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Gradual and repeated learning</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Multiplication tables cannot and don't need to be learned in one day. 
                The most effective method is gradual and regular practice:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Start with small steps:</strong> Begin first with simple numbers 
                  like 1, 2, 5, and 10
                </li>
                <li>
                  <strong>10-15 minutes daily:</strong> Short and regular table exercises are 
                  more effective than long, isolated sessions
                </li>
                <li>
                  <strong>Reinforce previous learning:</strong> Repeat what was learned before advancing to a new 
                  number
                </li>
                <li>
                  <strong>Practice with intervals:</strong> Increase memory capacity by repeating 
                  at intervals of a week, a month
                </li>
              </ul>
              <p>
                Regular repetition facilitates the transfer of information from 
                short-term memory to long-term memory and promotes lasting learning.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Learn through practice</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Understanding theory is important, but without practice there is no 
                lasting learning. The advantages of practice:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Active memory:</strong> Active work to remember, instead of passive reading, 
                  strengthens the brain
                </li>
                <li>
                  <strong>Error analysis:</strong> Identify your weaknesses by examining 
                  incorrectly solved questions
                </li>
                <li>
                  <strong>Speed development:</strong> With regular practice you gain both 
                  accuracy and speed
                </li>
                <li>
                  <strong>Application in different contexts:</strong> Use them in different 
                  environments, such as questions, games, everyday problems
                </li>
              </ul>
              <p>
                Information that is only learned through reading or listening without practice 
                is quickly forgotten. Active application is the main key to learning.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Important Reminder
          </h4>
          <p className="text-slate-700">
            Every child has their own learning pace. While some learn this in a week, 
            it may take several months for others. What matters is continuity, 
            patience, and progress with the right methods. Follow a 
            supportive approach rather than pressure.
          </p>
        </div>
      </div>
    </section>
  )
}
