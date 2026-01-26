# Clean Portuguese Translation - Part 2

$files = @(
    ".\app\para-estudantes\page.tsx",
    ".\app\para-pais\page.tsx",
    ".\app\para-professores\page.tsx"
)

Write-Host "Translating Spanish to Portuguese..." -ForegroundColor Cyan

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Remove Spanish punctuation
        $content = $content.Replace('¡', '')
        $content = $content.Replace('¿', '')
        
        # Main title translations
        $content = $content.Replace('Aprender las Tabuada es Muy Fácil', 'Aprender Tabuada é Muito Fácil')
        $content = $content.Replace('Avanza a tu propio ritmo, aprende mientras te diviertes y conviértete en un héroe de las matemáticas', 'Avance no seu próprio ritmo, aprenda enquanto se diverte e torne-se um herói da matemática')
        $content = $content.Replace('Esta guía te ayudará a aprender a tabuada paso a paso', 'Este guia vai ajudá-lo a aprender tabuada passo a passo')
        $content = $content.Replace('Tú también puedes hacerlo', 'Você também pode fazer isso')
        
        # Section titles
        $content = $content.Replace('Por Qué Debo Aprender las Tabuada', 'Por Que Devo Aprender Tabuada')
        $content = $content.Replace('Camino de Aprendizaje', 'Caminho de Aprendizagem')
        $content = $content.Replace('Aprendizaje Visual', 'Aprendizagem Visual')
        $content = $content.Replace('Consejos para Practicar', 'Conselhos para Praticar')
        $content = $content.Replace('Rastrea tu Progreso', 'Acompanhe seu Progresso')
        $content = $content.Replace('Secretos de Motivación y Éxito', 'Segredos de Motivação e Sucesso')
        $content = $content.Replace('Guía Rápida de Trucos', 'Guia Rápido de Truques')
        
        # Common phrases
        $content = $content.Replace('las Tabuada', 'a Tabuada')
        $content = $content.Replace('las tablas más fáciles', 'as tabuadas mais fáceis')
        $content = $content.Replace('las tablas', 'as tabuadas')
        $content = $content.Replace('las aprenderás', 'você as aprenderá')
        $content = $content.Replace('Comienza con las Tablas Fáciles', 'Comece com as Tabuadas Fáceis')
        $content = $content.Replace('Comenzar con', 'Começar com')
        $content = $content.Replace('tabla del', 'tabuada do')
        $content = $content.Replace('Tabla del', 'Tabuada do')
        
        # Save
        Set-Content $file -Value $content -Encoding UTF8 -NoNewline
        Write-Host "✓ Translated: $file" -ForegroundColor Green
    }
}

Write-Host "Part 2 complete!" -ForegroundColor Cyan
