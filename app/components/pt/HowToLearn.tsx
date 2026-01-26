export default function HowToLearn() {
  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-slate-900 mb-12 text-center">
          Como Aprender Tabuada de Forma Eficaz?
        </h2>
        
        <div className="space-y-12">
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                1
              </span>
              <span>Aprenda através da compreensão de padrões</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                A tabuada tem muitos padrões e sequências. Encontrar esses padrões 
                proporciona uma compreensão lógica em vez de apenas memorização:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Múltiplos de 2:</strong> Sempre números pares (2, 4, 6, 8...)
                </li>
                <li>
                  <strong>Múltiplos de 5:</strong> Sempre terminam com 0 ou 5 (5, 10, 15, 20...)
                </li>
                <li>
                  <strong>Múltiplos de 9:</strong> A soma dos dígitos é sempre divisível por 9 
                  (18: 1+8=9, 27: 2+7=9)
                </li>
                <li>
                  <strong>Múltiplos de 10:</strong> Sempre terminam com 0 (10, 20, 30...)
                </li>
                <li>
                  <strong>Propriedade comutativa:</strong> 3 × 4 = 4 × 3 (A ordem não afeta o resultado)
                </li>
              </ul>
              <p>
                Entender esses padrões permite aprender a lógica fundamental, 
                em vez de memorizar quase 100 resultados de multiplicação.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-educational-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                2
              </span>
              <span>Aprendizado gradual e repetido</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                A tabuada não pode e não precisa ser aprendida em um dia. 
                O método mais eficaz é a prática gradual e regular:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Comece com pequenos passos:</strong> Comece primeiro com números 
                  simples como 1, 2, 5 e 10
                </li>
                <li>
                  <strong>10-15 minutos diários:</strong> Exercícios curtos e regulares de tabuada são 
                  mais eficazes do que sessões longas e isoladas
                </li>
                <li>
                  <strong>Reforce o aprendizado anterior:</strong> Repita o que foi aprendido antes de avançar para um novo 
                  número
                </li>
                <li>
                  <strong>Pratique com intervalos:</strong> Aumente a capacidade de memória repetindo 
                  com intervalos de uma semana, um mês
                </li>
              </ul>
              <p>
                A repetição regular facilita a transferência de informações da 
                memória de curto prazo para a memória de longo prazo e promove o aprendizado duradouro.
              </p>
            </div>
          </article>
          
          <article>
            <h3 className="text-slate-900 mb-4 flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                3
              </span>
              <span>Aprenda através da prática</span>
            </h3>
            <div className="ml-11 space-y-4 text-slate-700">
              <p>
                Entender a teoria é importante, mas sem prática não há 
                aprendizado duradouro. As vantagens da prática:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Memória ativa:</strong> Trabalho ativo para lembrar, em vez de leitura passiva, 
                  fortalece o cérebro
                </li>
                <li>
                  <strong>Análise de erros:</strong> Identifique suas fraquezas examinando 
                  questões resolvidas incorretamente
                </li>
                <li>
                  <strong>Desenvolvimento de velocidade:</strong> Com prática regular você obtém tanto 
                  precisão quanto velocidade
                </li>
                <li>
                  <strong>Aplicação em diferentes contextos:</strong> Use-as em diferentes 
                  ambientes, como questões, jogos, problemas cotidianos
                </li>
              </ul>
              <p>
                Informações que são apenas aprendidas por leitura ou escuta sem prática 
                são rapidamente esquecidas. A aplicação ativa é a chave principal do aprendizado.
              </p>
            </div>
          </article>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-educational-50 border border-primary-200 rounded-lg p-8">
          <h4 className="text-xl font-semibold text-slate-900 mb-4">
            Lembrete Importante
          </h4>
          <p className="text-slate-700">
            Cada criança tem seu próprio ritmo de aprendizado. Enquanto alguns aprendem isso em uma semana, 
            pode levar vários meses para outros. O importante é continuidade, 
            paciência e progresso com os métodos corretos. Siga uma 
            abordagem de apoio em vez de pressão.
          </p>
        </div>
      </div>
    </section>
  )
}



