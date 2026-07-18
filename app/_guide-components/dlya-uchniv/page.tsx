import Link from 'next/link'
import Header from '@/app/components/uk/Header'
import Footer from '@/app/components/uk/Footer'


export default function ForStudents() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Вивчати Таблицю Множення Легко! 🎯
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 md:mb-8">
                Вчіться у власному темпі, розважайтеся та станьте математичним героєм! 
                Цей посібник допоможе вам вивчити таблицю множення крок за кроком.
              </p>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100">Ти теж це зможеш!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Why Learn */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Навіщо мені вивчати таблицю множення? 🤔
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Таблиця множення - це суперздатність математичного світу! Вона дасть тобі:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Швидкий Рахунок</h3>
                    <p className="text-slate-700">Ти зможеш розв'язувати математичні завдання набагато швидше!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Використання в Повсякденному Житті</h3>
                    <p className="text-slate-700">При покупках, в іграх - скрізь це буде потрібно!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Більше Впевненості</h3>
                    <p className="text-slate-700">Твоя впевненість у математиці зросте і ти будеш успішнішим!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Сила Мозку</h3>
                    <p className="text-slate-700">Твоя пам'ять стане сильнішою і ти навчишся швидше думати!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Крок за Кроком Шлях Навчання 🚀
            </h2>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Почни з Простих Рядів (1, 2, 5, 10)</h3>
                    <p className="text-slate-700 mb-3">
                      Починати з найпростіших рядів дасть тобі впевненості! Вони дуже легкі і ти вивчиш їх швидко.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-900 mb-2">Чому ці ряди легкі?</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Ряд 1:</strong> Кожне число залишається таким самим! (1×5=5)</li>
                        <li>• <strong>Ряд 2:</strong> Додай число двічі! (2×4 = 4+4 = 8)</li>
                        <li>• <strong>Ряд 5:</strong> Завжди закінчується на 5 або 0!</li>
                        <li>• <strong>Ряд 10:</strong> Додай 0 в кінці! (10×3 = 30)</li>
                      </ul>
                    </div>
                    <div className="mt-3">
                      <Link href="/uk/tablycya-mnozhennya/1-10" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                        До рядів 1-10 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Перейди до Середньо Складних Рядів (3, 4, 6)</h3>
                    <p className="text-slate-700 mb-3">
                      Тепер ти готовий до трохи складніших рядів! Не бійся, на це теж є хитрощі.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900 mb-2">Поради:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Ряд 3:</strong> Додай число 3 рази (3×4 = 4+4+4 = 12)</li>
                        <li>• <strong>Ряд 4:</strong> Помнож на 2, потім подвої (4×5 = 2×5×2 = 20)</li>
                        <li>• <strong>Ряд 6:</strong> Використай ряд 5 і додай ще 1 раз (6×4 = 5×4 + 4 = 24)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Виклик із Складними Рядами (7, 8, 9)</h3>
                    <p className="text-slate-700 mb-3">
                      Ці ряди трохи складніші, але ти вже багато навчився! За допомогою спеціальних технік ти впораєшся і з цими.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-900 mb-2">Спеціальні Техніки:</p>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li>• <strong>Ряд 9 - Трюк з Пальцями:</strong> Розкрий руки, зігни палець числа, яке множиш. Розігнуті пальці зліва = десятки, пальці справа = одиниці!</li>
                        <li>• <strong>Ряд 8:</strong> Помнож на 10, потім відніми 2× (8×7 = 10×7 - 2×7 = 70-14 = 56)</li>
                        <li>• <strong>Ряд 7:</strong> Для складних використай ряд 5 (7×6 = 5×6 + 2×6 = 30+12 = 42)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Вправляйся Регулярно 💪</h3>
                    <p className="text-slate-700 mb-3">
                      Щоб не забути те, що вивчив, вправляйся кожен день трохи. Найкраще: мало, але регулярно!
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-900 mb-2">Поради для Щоденних Вправ:</p>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• Вчися кожен день 10-15 хвилин (не багато, але регулярно!)</li>
                        <li>• Вправляйся граючи - це цікаво!</li>
                        <li>• Влаштовуй змагання з родиною</li>
                        <li>• Коли в повсякденному житті бачиш множення, обчислюй його (наприклад: "3 пакунки, 5 печив у кожному, скільки всього?")</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Learning */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Візуальне Навчання - Розумій за Допомогою Зображень 🎨
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Візуалізувати множення у своїй голові полегшує навчання! Ось деякі візуальні техніки:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Arrays */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Масиви</h3>
                  <p className="text-slate-700 mb-4 text-sm">Приклад для 4 × 3 = 12:</p>
                  <div className="bg-white p-4 rounded inline-block">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-blue-400 rounded"></div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-sm text-slate-600">4 стовпці × 3 ряди = 12</p>
                  </div>
                </div>

                {/* Number Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Стрибки на Числовій Прямій</h3>
                  <p className="text-slate-700 mb-4 text-sm">3 × 4: Стрибки по 4 (0→4→8→12)</p>
                  <div className="bg-white p-4 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-700">0</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">4</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">8</span>
                      <span className="text-green-500">→</span>
                      <span className="text-sm font-bold text-green-700">12</span>
                    </div>
                    <p className="text-center mt-2 text-xs text-slate-600">3 кроки, кожен крок 4 одиниці</p>
                  </div>
                </div>

                {/* Skip Counting */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Рахунок Кроками</h3>
                  <p className="text-slate-700 mb-3 text-sm">Рахуй по 5: 5, 10, 15, 20, 25...</p>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="text-purple-700 font-bold text-lg">5 - 10 - 15 - 20 - 25</p>
                    <p className="text-xs text-slate-600 mt-2">Коли знаєш ці числа напам'ять, ряд 5 супер легкий!</p>
                  </div>
                </div>

                {/* Patterns */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Розпізнай Візерунки</h3>
                  <p className="text-slate-700 mb-3 text-sm">Секрет ряду 9:</p>
                  <div className="bg-white p-3 rounded">
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>9×1=<strong className="text-pink-600">09</strong> (0+9=9)</li>
                      <li>9×2=<strong className="text-pink-600">18</strong> (1+8=9)</li>
                      <li>9×3=<strong className="text-pink-600">27</strong> (2+7=9)</li>
                      <li>9×4=<strong className="text-pink-600">36</strong> (3+6=9)</li>
                      <li className="text-xs italic">Цифри завжди дають 9!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Поради для Вправ 🎯
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎮
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Ігри</h3>
                <p className="text-slate-700 mb-3">
                  Вправляйся з цікавими іграми на цьому сайті. Навчання під час гри набагато цікавіше!
                </p>
                <Link href="/uk/tablycya-mnozhennya" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm">
                  Досліджуй ігри →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Тестуй Себе</h3>
                <p className="text-slate-700 mb-3">
                  Використовуй картки або попроси когось ставити тобі питання. Тестування себе прискорює навчання!
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🎵
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Пісні та Ритми</h3>
                <p className="text-slate-700 mb-3">
                  Створи з таблиці множення пісні! З музикою набагато легше їх запам'ятати.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Винагороджуй Себе</h3>
                <p className="text-slate-700 mb-3">
                  Коли вивчиш ряд, винагороди себе! Збирай наліпки або зроби щось приємне.
                </p>
              </div>
            </div>
          </section>

          {/* Progress Tracking */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Відстежуй Свій Прогрес 📊
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg text-slate-700 mb-4 md:mb-6">
                Бачити, скільки прогресу ти зробив, мотивує! Ось методи відстеження:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Контрольний Список Рядів</h3>
                  <p className="text-slate-700 text-sm">
                    Напиши ряди від 1 до 10 на папері. Кожного разу, коли вивчиш один, постав велику галочку! 
                    Коли всі позначені, ти герой таблиці множення! 🌟
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">📈 Графік Прогресу</h3>
                  <p className="text-slate-700 text-sm">
                    Записуй щотижня, скільки питань ти відповів правильно. Намалюй графік і побачиш свій прогрес. 
                    Кожного тижня ти будеш кращим!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">⭐ Зоряна Система</h3>
                  <p className="text-slate-700 text-sm">
                    За кожну правильну відповідь намалюй собі зірку. Коли досягнеш 100 зірок, дозволь собі спеціальну винагороду!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Motivation */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Мотиваційні та Успішні Секрети 💫
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Будь Терплячим</h3>
                      <p className="text-slate-700 text-sm">Все потребує часу. Ти впораєшся, просто продовжуй вправлятися!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Помилки Нормальні</h3>
                      <p className="text-slate-700 text-sm">Не засмучуйся, коли робиш помилки, це частина навчання!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Встанови Маленькі Цілі</h3>
                      <p className="text-slate-700 text-sm">Один ряд на день достатньо, не поспішай!</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Попроси Допомоги</h3>
                      <p className="text-slate-700 text-sm">Коли чогось не розумієш, запитай у родини чи вчителя!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Святкуй Свої Успіхи</h3>
                      <p className="text-slate-700 text-sm">Кожен маленький успіх важливий, пишайся собою!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Розважайся!</h3>
                      <p className="text-slate-700 text-sm">Навчання має бути цікавим, спробуй ігри!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
              Швидкий Огляд Порад 🔑
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Множення на 0</h4>
                  <p className="text-sm text-slate-700">Все дорівнює нулю! 0×1000=0</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Множення на 1</h4>
                  <p className="text-sm text-slate-700">Число залишається таким самим! 1×7=7</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">Множення на 2</h4>
                  <p className="text-sm text-slate-700">Подвій число! 2×6=12</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-900 mb-2">Множення на 5</h4>
                  <p className="text-sm text-slate-700">Результат закінчується на 0 або 5!</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Множення на 9</h4>
                  <p className="text-sm text-slate-700">Цифри дають 9! Трюк з пальцями!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 mb-2">Множення на 10</h4>
                  <p className="text-sm text-slate-700">Додай 0 в кінці! 10×8=80</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 sm:p-8 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Час Почати! 🚀
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Тепер ти готовий! Пам'ятай, кожен великий математичний герой починав з малих кроків. 
              І ти це зможеш! 💪✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/uk/tablycya-mnozhennya/1-10"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Почати Зараз
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/uk/tablycya-mnozhennya"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Назад на Головну Сторінку
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-blue-100 text-sm">
                💡 <strong>Порада:</strong> Вчитися 10-15 хвилин щодня набагато ефективніше, ніж 1 нудна година!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
