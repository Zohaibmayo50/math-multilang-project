# Comprehensive Portuguese translation script - Fix ALL Spanish text

$files = @(
    ".\app\para-estudantes\page.tsx",
    ".\app\para-pais\page.tsx",
    ".\app\para-professores\page.tsx"
)

# Spanish to Portuguese translations (order matters - do specific phrases before general words)
$translations = @(
    # Spanish punctuation
    @{old='¡'; new=''},
    @{old='¿'; new=''},
    
    # Long specific phrases first
    @{old='Aprender a tabuada de Multiplicar es Muy Fácil'; new='Aprender Tabuada é Muito Fácil'},
    @{old='Avanza a tu propio ritmo, aprenda enquanto se diverte y conviértete en un héroe de las matemáticas'; new='Avance no seu próprio ritmo, aprenda enquanto se diverte e torne-se um herói da matemática'},
    @{old='Esta guía te ayudará a aprender a tabuada de multiplicar passo a passo'; new='Este guia vai ajudá-lo a aprender tabuada passo a passo'},
    @{old='Tú también puedes hacerlo'; new='Você também pode fazer isso'},
    @{old='Por Qué Debo Aprender a tabuada de Multiplicar'; new='Por Que Devo Aprender Tabuada'},
    @{old='a tabuada de multiplicar son el súper poder del mundo matemático'; new='A tabuada é o super poder do mundo matemático'},
    @{old='Esto es lo que te darán'; new='Isto é o que ela lhe dará'},
    @{old='Podrás resolver problemas matemáticos mucho más rápido'; new='Você poderá resolver problemas matemáticos muito mais rápido'},
    @{old='Te será útil ao fazer compras, em jogos, en todas partes'; new='Será útil ao fazer compras, em jogos, em todos os lugares'},
    @{old='Tu confianza en matemáticas aumentará y tendrás más éxito'; new='Sua confiança em matemática aumentará e você terá mais sucesso'},
    @{old='Tu memoria se fortalecerá y aprenderás a pensar más rápido'; new='Sua memória ficará mais forte e você aprenderá a pensar mais rápido'},
    @{old='Camino de Aprendizaje passo a passo'; new='Caminho de Aprendizagem Passo a Passo'},
    
    # Parents page
    @{old='Guía de tabuada Para Pais'; new='Guia de Tabuada Para Pais'},
    @{old='Cómo apoyar a tu hijo en el aprendizaje de a tabuada de multiplicar'; new='Como apoiar seu filho no aprendizado de tabuada'},
    @{old='Cómo apoyar a tu hijo en el aprendizaje de las tablas de multiplicar'; new='Como apoiar seu filho no aprendizado de tabuada'},
    @{old='Esta guía contiene estrategias efectivas y consejos prácticos'; new='Este guia contém estratégias eficazes e conselhos práticos'},
    @{old='Tu guía para el éxito de tu hijo'; new='Seu guia para o sucesso do seu filho'},
    @{old='Por Qué es Importante'; new='Por Que é Importante'},
    @{old='a tabuada de multiplicar son uno de los pasos más importantes en el viaje matemático de tu hijo'; new='A tabuada é um dos passos mais importantes na jornada matemática do seu filho'},
    @{old='No solo para matemáticas, sino que también tienen una importancia crítica para el desarrollo de la resolución de problemas, el pensamiento lógico y la confianza en sí mismo'; new='Não apenas para matemática, mas também tem importância crítica para o desenvolvimento da resolução de problemas, pensamento lógico e autoconfiança'},
    @{old='División, fracciones, álgebra - todos dependen de a tabuada de multiplicar'; new='Divisão, frações, álgebra - todos dependem da tabuada'},
    @{old='El éxito en a tabuada de multiplicar aumenta la confianza general en la escuela'; new='O sucesso na tabuada aumenta a confiança geral na escola'},
    @{old='Cálculos rápidos son útiles ao fazer compras, cocinar y en la vida diaria'; new='Cálculos rápidos são úteis ao fazer compras, cozinhar e no dia a dia'},
    @{old='Estrategias de Apoyo en Casa'; new='Estratégias de Apoio em Casa'},
    @{old='Hazlo Concreto'; new='Torne Concreto'},
    @{old='Enseña a tabuada de multiplicar con situaciones de la vida real en lugar de números abstractos'; new='Ensine tabuada com situações da vida real em vez de números abstratos'},
    @{old='Si tienes 3 cajas y 4 manzanas en cada caja'; new='Se você tem 3 caixas e 4 maçãs em cada caixa'},
    @{old='cuántas manzanas en total'; new='quantas maçãs no total'},
    @{old='Una caja de huevos tiene 6 huevos'; new='Uma caixa de ovos tem 6 ovos'},
    @{old='Cuántos huevos en 4 cajas'; new='Quantos ovos em 4 caixas'},
    @{old='Usa objetos físicos (botones, dulces, juguetes) para visualizar'; new='Use objetos físicos (botões, doces, brinquedos) para visualizar'},
    
    # Teachers page
    @{old='Estrategias de Enseñanza Efectivas'; new='Estratégias de Ensino Eficazes'},
    @{old='Visualización'; new='Visualização'},
    @{old='Use representaciones visuales para ayudar a los estudiantes a comprender la multiplicación como grupos repetidos'; new='Use representações visuais para ajudar os alunos a compreender a multiplicação como grupos repetidos'},
    @{old='Arreglos rectangulares'; new='Arranjos retangulares'},
    @{old='filas de'; new='linhas de'},
    @{old='Modelos de área usando papel cuadriculado'; new='Modelos de área usando papel quadriculado'},
    @{old='Diagramas de saltos en la recta numérica'; new='Diagramas de saltos na reta numérica'},
    @{old='Manipulativos concretos (bloques, fichas, cubos)'; new='Manipulativos concretos (blocos, fichas, cubos)'},
    @{old='Descomposición'; new='Decomposição'},
    @{old='Enseñe a los estudiantes a descomponer multiplicaciones difíciles en operaciones más simples'; new='Ensine os alunos a decompor multiplicações difíceis em operações mais simples'},
    @{old='Usar duplicación'; new='Usar duplicação'},
    @{old='Por qué es problemático'; new='Por que é problemático'},
    @{old='Los estudiantes se confunden'; new='Os alunos ficam confusos'},
    @{old='Los estudiantes pueden'; new='Os alunos podem'},
    @{old='Los estudiantes aplican'; new='Os alunos aplicam'},
    @{old='Cómo corregirlo'; new='Como corrigir'},
    @{old='patrones mecánicamente sin comprender el "por qué" matemático'; new='padrões mecanicamente sem compreender o "porquê" matemático'},
    @{old='siempre explicar por qué funcionan'; new='sempre explicar por que funcionam'},
    @{old='Limita el pensamiento'; new='Limita o pensamento'},
    @{old='Necesita Más Ayuda'; new='Precisa de Mais Ajuda'},
    
    # General translations
    @{old='Guía de Tablas de Multiplicar para Profesores'; new='Guia de Tabuada para Professores'},
    @{old='Estrategias de Enseñanza'; new='Estratégias de Ensino'},
    @{old='Recursos completos para profesores sobre cómo enseñar tablas de multiplicar de manera efectiva'; new='Recursos completos para professores sobre como ensinar tabuada de forma eficaz'},
    @{old='Incluye estrategias pedagógicas, actividades de aula, instrucción diferenciada y métodos de evaluación'; new='Inclui estratégias pedagógicas, atividades de sala de aula, instrução diferenciada e métodos de avaliação'},
    @{old='las tablas de multiplicar'; new='a tabuada'},
    @{old='Tablas de Multiplicar'; new='Tabuada'},
    @{old='tablas de multiplicar'; new='tabuada'},
    @{old='tabla del'; new='tabuada do'},
    @{old='Guía'; new='Guia'},
    @{old='guía'; new='guia'},
    @{old='Cómo'; new='Como'},
    @{old='cómo'; new='como'},
    @{old='Profesores'; new='Professores'},
    @{old='profesores'; new='professores'},
    @{old='enseñar'; new='ensinar'},
    @{old='hijo'; new='filho'},
    @{old='estudiantes'; new='alunos'},
    @{old='ej:'; new='ex:'},
    @{old='Mostrar'; new='Mostrar'},
    @{old='Discutir'; new='Discutir'},
    @{old='Siempre'; new='Sempre'},
    @{old='Al enseñar'; new='Ao ensinar'},
    @{old='Celebrar'; new='Celebrar'}
)

foreach ($file in $files) {
    Write-Host "Processing $file..." -ForegroundColor Cyan
    
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Fix corrupted Header imports
        $content = $content -replace '<Header />`n\s*', ''
        
        # Apply all translations in order
        foreach ($trans in $translations) {
            $content = $content -replace [regex]::Escape($trans.old), $trans.new
        }
        
        # Save with UTF8 encoding
        $content | Set-Content $file -Encoding UTF8 -NoNewline
        Write-Host "✓ Fixed $file" -ForegroundColor Green
    } else {
        Write-Host "✗ File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nTranslation complete! Running manual checks..." -ForegroundColor Green
