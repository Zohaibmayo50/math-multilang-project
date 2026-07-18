import Link from 'next/link'
import Header from '@/app/components/uk/Header'
import Footer from '@/app/components/uk/Footer'


export default function ForParents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Посібник з Таблиці Множення Для Батьків
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8">
                Як підтримати свою дитину при вивченні таблиці множення? 
                Цей посібник містить ефективні стратегії та практичні поради.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-purple-100">Ваш Посібник до Успіху Вашої Дитини</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why It Matters */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Чому Це Важливо?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Таблиця множення є одним з найважливіших кроків у математичному розвитку вашої дитини. 
                Не лише для математики, але й для розвитку здібностей розв'язувати проблеми, логічного мислення та впевненості це критично важливо.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Основа Для Вищої Математики</h3>
                  <p className="text-slate-700 text-sm">Ділення, дроби, алгебра - все базується на таблиці множення.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Шкільна Впевненість</h3>
                  <p className="text-slate-700 text-sm">Успіх у таблиці множення посилить загальну довіру в школі.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Навички Для Життя</h3>
                  <p className="text-slate-700 text-sm">Швидкий рахунок корисний при покупках, готуванні та в повсякденному житті.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Strategies */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Стратегії Підтримки Вдома
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Зробіть Це Конкретним</h3>
                    <p className="text-slate-700 mb-3">
                      Навчайте таблиці множення за допомогою реальних ситуацій замість абстрактних чисел.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Якщо маєш 3 коробки і в кожній коробці 4 яблука, скільки яблук всього?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>"Коробка для яєць має 6 яєць. Скільки яєць у 4 коробках?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Використовуйте фізичні предмети (ґудзики, цукерки, іграшки) для візуалізації</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Короткі, Але Регулярні Вправи</h3>
                    <p className="text-slate-700 mb-3">
                      Ефективніше вправлятися щодня 10-15 хвилин, ніж раз на тиждень 1 годину.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• При сніданку - 5 швидких питань</li>
                      <li>• По дорозі до школи - рахунок по 2, по 5</li>
                      <li>• Перед сном - 5 хвилин повторення</li>
                      <li>• На вихідних - ігри з таблиці множення</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Ігрове Навчання</h3>
                    <p className="text-slate-700 mb-3">
                      Перетворити навчання в гру підвищує як мотивацію, так і пам'ять.
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>• Використовуйте ігри на цьому веб-сайті</li>
                      <li>• Грайте в карткові ігри з множення</li>
                      <li>• Організовуйте сімейні змагання</li>
                      <li>• Пропонуйте маленькі винагороди за успіхи</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Activities */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Цікаві Активності Вдома
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🃏 Карткові Ігри</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Війна Множення</h4>
                    <p className="text-slate-600">Витягніть дві карти і помножте їх. Правильна відповідь виграє очки!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Меморі Множення</h4>
                    <p className="text-slate-600">Поєднуйте картки з питаннями з картками з відповідями - як меморі!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🍳 Математика на Кухні</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <p>Використовуйте множення при готуванні:</p>
                  <ul className="space-y-2">
                    <li>• "Якщо потрібно 2 яйця на млинець і робимо 4 млинці, скільки яєць потрібно?"</li>
                    <li>• "Якщо рецепт для 3 осіб, а нас 6, скільки потрібно?"</li>
                    <li>• Підрахунок ложок, відмірювання інгредієнтів</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🛒 Вправи Множення в Магазині</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• "3 йогурти коштують кожен 2€, скільки всього?"</li>
                    <li>• "Пакет яблук містить 6 яблук. Якщо купимо 4 пакети, скільки яблук?"</li>
                    <li>• Порівняння цін, розрахунок знижок</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">🎨 Креативні Активності</h3>
                <div className="space-y-3 text-slate-700 text-sm">
                  <ul className="space-y-2">
                    <li>• Створювати плакати з таблиці множення</li>
                    <li>• Писати пісні або вірші про множення</li>
                    <li>• Кидати кубики і множити результати</li>
                    <li>• Вигадувати історії із завданнями множення</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Типові Виклики та Рішення
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-purple-500">❓</span>
                  Моя дитина боїться таблиці множення/уникає її
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Рішення:</strong> Почніть з простих рядів (1, 2, 5, 10), щоб побудувати довіру. Зосередьтеся на прогресі, а не на досконалості. Святкуйте кожен маленький успіх.</p>
                  <p>Уникайте тиску або створення страху. Навчання має бути цікавим, а не стресовим.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-blue-500">❓</span>
                  Вчить напам'ять, але не розуміє концепцію
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Рішення:</strong> Використовуйте конкретні предмети та візуальні моделі. Покажіть, що 3×4 означає "3 групи по 4" або "4+4+4".</p>
                  <p>Використовуйте масиви об'єктів, малюнки, маніпулятиви. Концептуальне розуміння важливіше за механічне вивчення напам'ять.</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-green-500">❓</span>
                  Плутає ряди між собою
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Рішення:</strong> Зосередьтеся на одному ряді за раз. Ретельно попрацюйте над одним рядом, перш ніж переходити до наступного.</p>
                  <p>Використовуйте кольорові коди або візуальні асоціації для різних рядів. Практикуйте розрізнення: "Це 3×4 чи 4×3?"</p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
                <summary className="font-semibold text-slate-900 text-lg flex items-center gap-3">
                  <span className="text-yellow-500">❓</span>
                  Забуває раніше вивчене
                </summary>
                <div className="mt-4 text-slate-700 space-y-2 text-sm">
                  <p><strong>Рішення:</strong> Регулярне повторення є ключовим. Вправляйте раніше вивчені ряди разом з новими.</p>
                  <p>Створіть розклад повторення: Щотижня включайте старі ряди. Використовуйте ігри, щоб повторення було цікавим.</p>
                </div>
              </details>
            </div>
          </section>

          {/* Motivation Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Як Підтримувати Мотивацію
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">✅ Робити</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Хвалити зусилля, а не лише правильну відповідь</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Святкувати прогрес з маленькими винагородами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Перетворити навчання на гру</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Встановити досяжні цілі</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Створити підтримуюче та безстресове середовище</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-4">❌ Уникати</h3>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Порівняння з братами/сестрами або іншими дітьми</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Тиск або страх через помилки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Довгі, нудні вправи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Використання негативної мови ("Це легко, чому ти не можеш?")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Очікування миттєвої досконалості</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Почніть Сьогодні Шлях Таблиці Множення зі Своєю Дитиною
            </h2>
            <p className="text-base sm:text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Пам'ятайте, кожна дитина вчиться у своєму власному темпі. З вашою підтримкою та правильними стратегіями 
              ваша дитина впорається з таблицею множення. Терпіння, вправи та позитив!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/uk/tablycya-mnozhennya/1-10"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Досліджуй Таблицю Множення
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/uk/tablycya-mnozhennya/dlya-uchniv"
                className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center justify-center"
              >
                Переглянути Посібник Для Учнів
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-400">
              <p className="text-purple-100 text-sm">
                💡 <strong>Золота Порада:</strong> Ваше позитивне ставлення до математики впливає на ставлення вашої дитини. 
                Покажіть ентузіазм і ваша дитина теж буде ентузіастом!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
