import type { Metadata } from 'next';
import Header from '@/app/components/uk/Header';
import Footer from '@/app/components/uk/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Посібник з Таблиці Множення Для Вчителів | Стратегії Навчання',
  description: 'Комплексні ресурси для вчителів для ефективного викладання таблиці множення. Включає педагогічні стратегії, активності в класі, диференційовані методи навчання та методи оцінювання.',
  keywords: 'викладання таблиці множення, педагогічні стратегії, математичні активності, диференційоване навчання, ресурси для вчителів',
  alternates: {
    canonical: '/dlya-vchyteliv',
    languages: {
      'uk': '/dlya-vchyteliv',
    },
  },
  openGraph: {
    title: 'Посібник з Таблиці Множення Для Вчителів',
    description: 'Комплексні ресурси для вчителів для ефективного викладання таблиці множення.',
    url: 'https://mathematives.com/dlya-vchyteliv',
    siteName: 'Таблиця Множення',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function DlyaVchytelivPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Посібник з Таблиці Множення Для Вчителів
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ефективні стратегії, активності в класі та ресурси для викладання 
              таблиці множення, щоб усі учні впоралися.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Strategies Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ефективні Стратегії Викладання
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Візуалізація</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Використовуйте візуальні представлення, щоб допомогти учням 
                зрозуміти множення як повторювані групи.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Прямокутні поля (наприклад: 3×4 як 3 ряди по 4 об'єкти)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Площинні моделі з клітинчастим папером</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Стрибкові діаграми на числовій прямій</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Конкретні маніпулятиви (кубики, жетони, фішки)</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Декомпозиція</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Навчіть учнів розкладати складні множення 
                на простіші операції.
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
                  <span>Використання подвоєння: 6×4 = 2×(3×4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Дистрибутивна властивість в дії</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Візерунки</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Допоможіть учням виявити та використати візерунки для 
                полегшення навчання та запам'ятовування.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Ряд 2: всі парні числа</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Ряд 5: закінчується на 0 або 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Ряд 9: сума цифр = 9, спадний візерунок</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Комутативна властивість: 3×7 = 7×3</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Реальні Застосування</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Пов'яжіть множення з повсякденними ситуаціями, щоб 
                надати навчанню значення та контекст.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Покупки та грошові завдання</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Розташування об'єктів у ряди та стовпці</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Кулінарні рецепти та вимірювання</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Спорт, ігри та групові активності</span>
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
            Активності Для Класу
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Бінго Таблиці Множення
              </h3>
              <p className="text-gray-700 mb-3">
                Учні створюють картки бінго з результатами. 
                Називайте множення і учні відзначають відповіді.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Рівень:</strong> Початківець до Просунутого<br/>
                <strong>Час:</strong> 15-20 хвилин
              </div>
            </div>

            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🏃</span>
                Перегони Множення
              </h3>
              <p className="text-gray-700 mb-3">
                Команди змагаються одна з одною, розв'язуючи завдання множення 
                в естафетному форматі на дошці.
              </p>
              <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Рівень:</strong> Всі рівні<br/>
                <strong>Час:</strong> 10-15 хвилин
              </div>
            </div>

            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎲</span>
                Доміно Множення
              </h3>
              <p className="text-gray-700 mb-3">
                Модифіковані кістки доміно, де учні 
                з'єднують множення з їх результатами.
              </p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Рівень:</strong> Просунутий<br/>
                <strong>Час:</strong> 20-30 хвилин
              </div>
            </div>

            {/* Activity 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Мистецтво з Масивами
              </h3>
              <p className="text-gray-700 mb-3">
                Учні створюють художні дизайни з прямокутними масивами 
                та позначають відповідне множення.
              </p>
              <div className="bg-pink-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Рівень:</strong> Початківець<br/>
                <strong>Час:</strong> 30-40 хвилин
              </div>
            </div>

            {/* Activity 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎪</span>
                Станції Вправ
              </h3>
              <p className="text-gray-700 mb-3">
                Встановіть ротаційні станції з різними активностями: 
                картки, цифрові ігри, письмові завдання, маніпулятиви.
              </p>
              <div className="bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Рівень:</strong> Всі рівні<br/>
                <strong>Час:</strong> 40-50 хвилин
              </div>
            </div>

            {/* Activity 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📖</span>
                Історії Множення
              </h3>
              <p className="text-gray-700 mb-3">
                Учні пишуть та ілюструють завдання множення 
                на основі реальних або уявних ситуацій.
              </p>
              <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                <strong>Рівень:</strong> Просунутий до Експертного<br/>
                <strong>Час:</strong> 30-45 хвилин
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiated Instruction Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Диференційоване Навчання
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginning Learners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🌱</span>
                Початківці
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Почати з рядів 1, 2, 5 та 10</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Використовувати багато конкретних маніпулятивів</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Спершу акцентувати повторне додавання</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Надати довідкові таблиці</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Короткі щоденні вправи (5-10 хвилин)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Святкувати маленькі успіхи</span>
                </li>
              </ul>
            </div>

            {/* Intermediate Learners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">📚</span>
                Просунуті Учні
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Запровадити ряди 3, 4, 6 та 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Навчити стратегій декомпозиції</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Практикувати комутативну властивість</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Швидкісні ігри з помірним темпом</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Контекстні прикладні завдання</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Партнерська та малогрупова робота</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learners */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-2">🚀</span>
                Експертні Учні
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Ряди 8, 9, 11 та 12</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Багатокрокові завдання</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Зв'язок з діленням та дробами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Математичні логічні виклики</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Створювати власні завдання</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Навчати однокласників</span>
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
            Стратегії Оцінювання
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Формативне Оцінювання
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Щоденні Спостереження</h4>
                  <p className="text-gray-700">
                    Спостерігайте за учнями під час вправ, робіть нотатки про 
                    використані стратегії та типові помилки.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Короткі Міні-Тести</h4>
                  <p className="text-gray-700">
                    1-2 хвилини на початку уроку: 10 завдань для оцінки 
                    швидкості та запам'ятовування.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Індивідуальні Дошки</h4>
                  <p className="text-gray-700">
                    Учні показують відповіді одночасно, що дозволяє швидку 
                    перевірку всього класу.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Математичні Бесіди</h4>
                  <p className="text-gray-700">
                    Короткі індивідуальні розмови для розуміння мислення 
                    та стратегій учнів.
                  </p>
                </div>
              </div>
            </div>

            {/* Summative Assessment */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Підсумкове Оцінювання
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Тести Швидкості</h4>
                  <p className="text-gray-700">
                    Обмежені за часом тести для вимірювання швидкості та точності 
                    у конкретних рядах множення.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Прикладні Проєкти</h4>
                  <p className="text-gray-700">
                    Учні розв'язують реальні завдання, які 
                    вимагають множення в різних контекстах.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Портфоліо</h4>
                  <p className="text-gray-700">
                    Збірка робіт протягом часу, яка показує прогрес 
                    та зростаюче опанування.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Самооцінювання</h4>
                  <p className="text-gray-700">
                    Учні відстежують власний прогрес, ідентифікують опановані ряди 
                    та встановлюють цілі.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Відстеження Прогресу
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Графіки Опанування</h4>
                <p className="text-sm">
                  Учні розфарбовують опановані ряди у візуальній 
                  12×12 сітці, щоб бачити свій прогрес.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Відстеження Часу</h4>
                <p className="text-sm">
                  Відстежуйте покращення швидкості за допомогою графіків, які 
                  показують зменшення часу.
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Значки Успіху</h4>
                <p className="text-sm">
                  Система винагород за опанування кожного ряду, яка 
                  мотивує безперервний прогрес.
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
            Типові Помилкові Уявлення
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6 text-lg">
              Розпізнавайте та вирішуйте ці типові непорозуміння, щоб забезпечити 
              міцне розуміння множення:
            </p>

            <div className="space-y-6">
              {/* Misconception 1 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Множення завжди робить числа більшими"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Чому це проблематично:</strong> Учні будуть заплутані, 
                  коли множать дроби або десяткові числа.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Як це виправити:</strong> Покажіть 
                  приклади як 5 × 0,5 = 2,5 або 3 × 0 = 0. Поясніть, що множення 
                  числами меншими за 1 зменшує результат.
                </p>
              </div>

              {/* Misconception 2 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Порядок у словесних задачах не має значення"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Чому це проблематично:</strong> Хоча 3×4 = 4×3, 
                  контекстуальне значення може бути різним (3 групи по 4 vs. 4 групи по 3).
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Як це виправити:</strong> Обговоріть 
                  комутативну властивість, але підкресліть важливість 
                  розуміння контексту задачі.
                </p>
              </div>

              {/* Misconception 3 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Множення - це лише вивчення напам'ять"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Чому це проблематично:</strong> Учні можуть 
                  вчити напам'ять без розуміння, що ускладнює застосування та запам'ятовування.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Як це виправити:</strong> Завжди 
                  навчайте концепціям перед вивченням напам'ять. Використовуйте візуальні моделі 
                  та стратегії розуміння.
                </p>
              </div>

              {/* Misconception 4 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Візерунки завжди працюють без їх розуміння"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Чому це проблематично:</strong> Учні застосовують 
                  візерунки механічно без розуміння математичного "чому".
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Як це виправити:</strong> При навчанні 
                  візерунків (наприклад, ряд 9) завжди пояснюйте, чому вони працюють, 
                  використовуючи математичні властивості.
                </p>
              </div>

              {/* Misconception 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-2">❌</span>
                  "Існує лише один правильний спосіб розв'язання"
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Чому це проблематично:</strong> Обмежує творче мислення 
                  та числову гнучкість.
                </p>
                <p className="text-gray-700">
                  <strong className="text-green-700">Як це виправити:</strong> Святкуйте 
                  різні стратегії. Попросіть учнів ділитися різними 
                  методами та обговоріть, коли яка найкорисніша.
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
            Поради та Найкращі Практики
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span>
                Поради Для Успіху
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Короткі щоденні вправи краще, ніж довгі спорадичні уроки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Святкуйте прогрес, а не лише досконалість</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Змінюйте методи вправ для підтримки інтересу</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Пов'язуйте з іншими областями: мистецтво, музика, спорт</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Залучайте родини до домашніх активностей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✦</span>
                  <span>Використовуйте технології як доповнення, а не заміну</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Рекомендований Порядок
              </h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <span className="text-gray-700">Ряди 1, 2, 10, 5</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <span className="text-gray-700">Комутативна властивість (зменшує навантаження)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <span className="text-gray-700">Ряд 4 (подвоїти 2)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                  <span className="text-gray-700">Ряд 9 (спеціальні візерунки)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
                  <span className="text-gray-700">Ряди 3 та 6 (потрійний зв'язок)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</span>
                  <span className="text-gray-700">Ряди 7 та 8 (складніші)</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-3 shadow">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</span>
                  <span className="text-gray-700">Ряди 11 та 12 (експертні візерунки)</span>
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
            Додаткові Ресурси
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Link 
              href="/uk/tablycya-mnozhennya/1-10" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-bold text-gray-900 mb-2">Ряди 1-10</h3>
              <p className="text-sm text-gray-600">Базові ресурси</p>
            </Link>

            <Link 
              href="/uk/tablycya-mnozhennya/11-20" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">📗</div>
              <h3 className="font-bold text-gray-900 mb-2">Ряди 11-20</h3>
              <p className="text-sm text-gray-600">Середній рівень</p>
            </Link>

            <Link 
              href="/dlya-uchniv" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Для Учнів</h3>
              <p className="text-sm text-gray-600">Посібник з навчання</p>
            </Link>

            <Link 
              href="/dlya-batkiv" 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Для Батьків</h3>
              <p className="text-sm text-gray-600">Підтримка вдома</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Потрібна Додаткова Допомога?
            </h3>
            <p className="text-lg mb-6">
              Досліджуйте наші окремі ряди для специфічних ресурсів, 
              завдань для завантаження та інтерактивних активностей.
            </p>
            <Link 
              href="/uk/tablycya-mnozhennya"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Переглянути Всі Ряди
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
