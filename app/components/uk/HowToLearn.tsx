export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Як ефективно вивчити таблицю множення?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Вчіться розумінням зразків</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                У таблиці множення існує багато зразків і порядків. Відкриття 
                цих зразків надає логічне розуміння замість простого заучування:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Кратні 2:</strong> Завжди парні числа (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Кратні 5:</strong> Завжди закінчуються на 0 або 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Кратні 9:</strong> Сума цифр завжди ділиться на 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Кратні 10:</strong> Завжди закінчуються на 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Комутативний закон:</strong> 3 × 4 = 4 × 3 (Порядок не впливає на результат)
                </li>
              </ul>
              <p>
                Розуміння цих зразків дозволяє зрозуміти основну логіку, 
                замість запам'ятовування майже 100 значень множення.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Поступове та повторне навчання</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Неможливо і не потрібно вивчити таблицю множення за один день. 
                Найефективніший підхід — це поступова та регулярна практика:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Почніть з малих кроків:</strong> Спочатку почніть з простих 
                  чисел, таких як 1, 2, 5 і 10
                </li>
                <li>
                  <strong>Щодня 10-15 хвилин:</strong> Короткі та регулярні вправи таблиці множення є 
                  ефективнішими, ніж довгі одноразові заняття
                </li>
                <li>
                  <strong>Закріплюйте попередні знання:</strong> Повторюйте вивчене перед переходом на 
                  нове число
                </li>
                <li>
                  <strong>Практикуйте з інтервалами:</strong> Збільшуйте запам'ятовування повторюючи 
                  через тиждень, місяць
                </li>
              </ul>
              <p>
                Регулярне повторення полегшує перехід інформації з 
                короткострокової пам'яті в довгострокову і сприяє стійкому навчанню.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Вчіться практикою</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Розуміння теорії важливе, але без практики не відбувається 
                стійкого навчання. Переваги практики:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Активне пригадування:</strong> Активні зусилля згадати, замість 
                  пасивного читання, зміцнюють мозок
                </li>
                <li>
                  <strong>Аналіз помилок:</strong> Ідентифікуйте свої слабкі сторони, вивчаючи 
                  неправильно вирішені завдання
                </li>
                <li>
                  <strong>Розвиток швидкості:</strong> З регулярною практикою ви отримаєте як 
                  точність, так і швидкість
                </li>
                <li>
                  <strong>Застосування в різних контекстах:</strong> Використовуйте їх у різних 
                  середовищах, таких як питання, ігри, щоденні проблеми
                </li>
              </ul>
              <p>
                Лише читанням або прослуховуванням навчена інформація без практики 
                швидко забувається. Активне застосування є основним ключем до навчання.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Важливе попередження
          </h4>
          <p className="text-slate-700">
            Кожна дитина має свій власний темп навчання. Тоді як деякі навчаться цьому за тиждень, 
            іншим може знадобитися кілька місяців. Важлива безперервність, 
            терпіння та прогрес із правильними методами. Слідуйте підтримуючому 
            підходу замість чинення тиску.
          </p>
        </div>
      </div>
    </section>
  )
}
