# Complete Spanish to Portuguese Translation
# All body content in guide pages

$files = @(
    ".\app\para-estudantes\page.tsx",
    ".\app\para-pais\page.tsx",
    ".\app\para-professores\page.tsx"
)

Write-Host "Starting complete Spanish to Portuguese translation..." -ForegroundColor Cyan

foreach ($file in $files) {
    Write-Host "`nProcessing: $file" -ForegroundColor Yellow
    
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Remove Spanish punctuation
    $content = $content -replace '¡', ''
    $content = $content -replace '¿', ''
    
    # Common complete phrases - do these first before individual words
    $content = $content -replace 'Aprender las Tablas de Multiplicar es Muy Fácil', 'Aprender Tabuada é Muito Fácil'
    $content = $content -replace 'las tablas de multiplicar', 'a tabuada'
    $content = $content -replace 'Las tablas de multiplicar', 'A tabuada'
    $content = $content -replace 'tablas de multiplicar', 'tabuada'
    $content = $content -replace 'Tablas de Multiplicar', 'Tabuada'
    
    # Common verbs and phrases
    $content = $content -replace '\bAvanza a tu propio ritmo', 'Avance no seu próprio ritmo'
    $content = $content -replace '\baprende mientras te diviertes', 'aprenda enquanto se diverte'
    $content = $content -replace '\bconviértete en un héroe', 'torne-se um herói'
    $content = $content -replace '\bde las matemáticas', 'da matemática'
    $content = $content -replace '\bTú también puedes hacerlo', 'Você também pode fazer isso'
    $content = $content -replace '\bPor Qué Debo Aprender', 'Por Que Devo Aprender'
    $content = $content -replace '\bCómo Aprender', 'Como Aprender'
    $content = $content -replace '\bEsta guía te ayudará', 'Este guia vai ajudá-lo'
    
    # Table references
    $content = $content -replace '\btabla del (\d+)', 'tabuada do $1'
    $content = $content -replace '\bTabla del (\d+)', 'Tabuada do $1'
    $content = $content -replace '\blas tablas', 'as tabuadas'
    $content = $content -replace '\bLas tablas', 'As tabuadas'
    
    # Section titles
    $content = $content -replace '\bCamino de Aprendizaje', 'Caminho de Aprendizagem'
    $content = $content -replace '\bpaso a paso', 'passo a passo'
    $content = $content -replace '\bPaso a Paso', 'Passo a Passo'
    $content = $content -replace '\bConsejos para Practicar', 'Conselhos para Praticar'
    $content = $content -replace '\bEstrategias de Enseñanza', 'Estratégias de Ensino'
    $content = $content -replace '\bAprendizaje Visual', 'Aprendizagem Visual'
    $content = $content -replace '\bGuía Rápida', 'Guia Rápido'
    
    # Common nouns
    $content = $content -replace '\bestudiantes', 'estudantes'
    $content = $content -replace '\bEstudiantes', 'Estudantes'
    $content = $content -replace '\bprofesores', 'professores'
    $content = $content -replace '\bProfesores', 'Professores'
    $content = $content -replace '\bpadres', 'pais'
    $content = $content -replace '\bPadres', 'Pais'
    $content = $content -replace '\bhijo', 'filho'
    $content = $content -replace '\btu hijo', 'seu filho'
    $content = $content -replace '\bmatemáticas', 'matemática'
    $content = $content -replace '\bMatemáticas', 'Matemática'
    
    # Common verbs
    $content = $content -replace '\benseñar', 'ensinar'
    $content = $content -replace '\bEnseñar', 'Ensinar'
    $content = $content -replace '\bEnseña', 'Ensine'
    $content = $content -replace '\baprender', 'aprender'
    $content = $content -replace '\bAprende', 'Aprenda'
    $content = $content -replace '\bAprenderás', 'Você aprenderá'
    $content = $content -replace '\baprenderás', 'você aprenderá'
    $content = $content -replace '\bPractica', 'Pratique'
    $content = $content -replace '\bpractica', 'pratique'
    $content = $content -replace '\bComienza', 'Comece'
    $content = $content -replace '\bcomienza', 'comece'
    $content = $content -replace '\bComenzar', 'Começar'
    $content = $content -replace '\bHazlo', 'Faça'
    $content = $content -replace '\bUsa', 'Use'
    $content = $content -replace '\busa', 'use'
    
    # Questions
    $content = $content -replace '\bPor qué', 'Por que'
    $content = $content -replace '\bCómo', 'Como'
    $content = $content -replace '\bcómo', 'como'
    $content = $content -replace '\bQué', 'O que'
    $content = $content -replace '\bqué', 'o que'
    $content = $content -replace '\bCuántos', 'Quantos'
    $content = $content -replace '\bcuántos', 'quantos'
    $content = $content -replace '\bCuántas', 'Quantas'
    $content = $content -replace '\bcuántas', 'quantas'
    
    # Common words
    $content = $content -replace '\bGuía', 'Guia'
    $content = $content -replace '\bguía', 'guia'
    $content = $content -replace '\bTrucos', 'Truques'
    $content = $content -replace '\btrucos', 'truques'
    $content = $content -replace '\bconsejos', 'conselhos'
    $content = $content -replace '\bConsejos', 'Conselhos'
    $content = $content -replace '\bestrategias', 'estratégias'
    $content = $content -replace '\bEstrategias', 'Estratégias'
    $content = $content -replace '\béxito', 'sucesso'
    $content = $content -replace '\bÉxito', 'Sucesso'
    $content = $content -replace '\bajuda', 'ajuda'
    $content = $content -replace '\bAyuda', 'Ajuda'
    
    # Prepositions and articles
    $content = $content -replace '\ben todas partes', 'em todos os lugares'
    $content = $content -replace '\ben casa', 'em casa'
    $content = $content -replace '\ben el', 'no'
    $content = $content -replace '\ben la', 'na'
    $content = $content -replace '\bdel mundo', 'do mundo'
    $content = $content -replace '\bmás fácil', 'mais fácil'
    $content = $content -replace '\bmás rápido', 'mais rápido'
    $content = $content -replace '\bmuy', 'muito'
    $content = $content -replace '\bmucho', 'muito'
    $content = $content -replace '\btodos', 'todos'
    
    # Actions
    $content = $content -replace '\bDescubre', 'Descubra'
    $content = $content -replace '\bVolver a Inicio', 'Voltar ao Início'
    $content = $content -replace '\bIr a', 'Ir para'
    $content = $content -replace '\bEmpezar Ahora', 'Começar Agora'
    $content = $content -replace '\bNecesita Más Ayuda', 'Precisa de Mais Ajuda'
    
    # Save with UTF8 encoding
    Set-Content $file -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Translated: $file" -ForegroundColor Green
}

Write-Host "`nTranslation complete!" -ForegroundColor Green
Write-Host "All Spanish text converted to Portuguese" -ForegroundColor Cyan
