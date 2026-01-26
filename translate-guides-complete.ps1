# Complete Portuguese Translation Script - Clean Spanish to Portuguese

Write-Host "Starting complete Portuguese translation..." -ForegroundColor Cyan

# Copy clean Spanish pages
Copy-Item ".\app\para-estudiantes\page.tsx" -Destination ".\app\para-estudantes\page.tsx" -Force
Copy-Item ".\app\para-padres\page.tsx" -Destination ".\app\para-pais\page.tsx" -Force
Copy-Item ".\app\para-profesores\page.tsx" -Destination ".\app\para-professores\page.tsx" -Force

Write-Host "Copied Spanish base files" -ForegroundColor Green

# Files to translate
$files = @(
    @{path=".\app\para-estudantes\page.tsx"; canonical="/para-estudantes"; title="Para Estudantes: Guia de Tabuada | Aprendizado Passo a Passo"},
    @{path=".\app\para-pais\page.tsx"; canonical="/para-pais"; title="Para Pais: Guia de Tabuada | Como Ajudar Seu Filho"},
    @{path=".\app\para-professores\page.tsx"; canonical="/para-professores"; title="Para Professores: Guia de Tabuada | Material de Ensino em Sala de Aula"}
)

# Process each file
foreach ($file in $files) {
    Write-Host "`nProcessing $($file.path)..." -ForegroundColor Yellow
    
    $content = Get-Content $file.path -Raw -Encoding UTF8
    
    # Fix imports
    $content = $content -replace "import Footer from '@/app/components/Footer'", "import Header from '@/app/components/pt/Header'`nimport Footer from '@/app/components/pt/Footer'"
    
    # Fix metadata
    $content = $content -replace "title: 'Guía de Tablas de Multiplicar para Estudiantes.*?'", "title: '$($file.title)'"
    $content = $content -replace "description: 'Guía paso a paso para aprender tablas de multiplicar.*?'", "description: 'Guia passo a passo para aprender tabuada facilmente. Aprenda no seu próprio ritmo com materiais visuais, atividades práticas e jogos divertidos!'"
    $content = $content -replace "keywords: 'aprender tablas de multiplicar.*?'", "keywords: 'aprender tabuada, matemática para estudantes, guia de tabuada, multiplicação passo a passo'"
    $content = $content -replace "canonical: '/para-estudiantes'", "canonical: '$($file.canonical)'"
    $content = $content -replace "canonical: '/para-padres'", "canonical: '$($file.canonical)'"
    $content = $content -replace "canonical: '/para-profesores'", "canonical: '$($file.canonical)'"
    
    # Add Header at start of JSX
    $content = $content -replace '(<><main)', "<>`n      <Header />`n      <main"
    
    # Spanish to Portuguese translations
    $translations = @{
        # Spanish punctuation
        '¡' = ''
        '¿' = ''
        
        # Key phrases
        'Aprender las Tablas de Multiplicar es Muy Fácil' = 'Aprender Tabuada é Muito Fácil'
        'las tablas de multiplicar' = 'a tabuada'
        'Las tablas de multiplicar' = 'A tabuada'
        'tablas de multiplicar' = 'tabuada'
        'Tablas de Multiplicar' = 'Tabuada'
        'tabla del' = 'tabuada do'
        'Tabla del' = 'Tabuada do'
        'las tablas' = 'a tabuada'
        
        'Avanza a tu propio ritmo, aprende mientras te diviertes y conviértete en un héroe de las matemáticas' = 'Avance no seu próprio ritmo, aprenda enquanto se diverte e torne-se um herói da matemática'
        'Esta guía te ayudará a aprender las tablas de multiplicar paso a passo' = 'Este guia vai ajudá-lo a aprender tabuada passo a passo'
        'Tú también puedes hacerlo' = 'Você também pode fazer isso'
        
        'Por Qué Debo Aprender' = 'Por Que Devo Aprender'
        'Cómo Aprender' = 'Como Aprender'
        'Qué es' = 'O que é'
        'Por qué' = 'Por que'
        'Cómo' = 'Como'
        'cómo' = 'como'
        
        'Guía' = 'Guia'
        'guía' = 'guia'
        'Estudiantes' = 'Estudantes'
        'estudiantes' = 'estudantes'
        'Profesores' = 'Professores'
        'profesores' = 'professores'
        'Padres' = 'Pais'
        'padres' = 'pais'
        
        'hijo' = 'filho'
        'tu hijo' = 'seu filho'
        'enseñar' = 'ensinar'
        'aprender' = 'aprender'
        'matemáticas' = 'matemática'
        'Matemáticas' = 'Matemática'
        
        'Camino de Aprendizaje' = 'Caminho de Aprendizagem'
        'Estrategias' = 'Estratégias'
        'Consejos' = 'Conselhos'
        'Técnicas' = 'Técnicas'
        'Trucos' = 'Truques'
        
        'Empezar' = 'Começar'
        'Practica' = 'Pratique'
        'Hazlo' = 'Faça'
        'Usa' = 'Use'
        'Enseña' = 'Ensine'
        'Aprende' = 'Aprenda'
        
        'Necesita Más Ayuda' = 'Precisa de Mais Ajuda'
        'Volver a Inicio' = 'Voltar ao Início'
        'Ir a' = 'Ir para'
        'Descubre' = 'Descubra'
        
        'ej:' = 'ex:'
        'cada' = 'cada'
        'todos' = 'todos'
        'mucho' = 'muito'
        'más' = 'mais'
        'para' = 'para'
        'con' = 'com'
        'en' = 'em'
        'del' = 'do'
        'al' = 'ao'
        'el' = 'o'
        'la' = 'a'
        'los' = 'os'
        'una' = 'uma'
        'es' = 'é'
        'son' = 'são'
        'hay' = 'há'
    }
    
    # Apply translations
    foreach ($key in $translations.Keys) {
        $content = $content -replace [regex]::Escape($key), $translations[$key]
    }
    
    # Fix URLs
    $content = $content -replace 'href="/([0-9]+-[0-9]+)"', 'href="/pt/tabuada/$1"'
    $content = $content -replace 'href="/">', 'href="/pt/tabuada">'
    $content = $content -replace 'href="/para-estudiantes"', 'href="/para-estudantes"'
    $content = $content -replace 'href="/para-padres"', 'href="/para-pais"'
    $content = $content -replace 'href="/para-profesores"', 'href="/para-professores"'
    
    # Save
    Set-Content $file.path -Value $content -Encoding UTF8 -NoNewline
    Write-Host "✓ Translated $($file.path)" -ForegroundColor Green
}

Write-Host "`nTranslation complete!" -ForegroundColor Green
Write-Host "All guide pages are now in Portuguese!" -ForegroundColor Cyan
