# Round 2 - Fix remaining Spanish text

$file = ".\app\para-professores\page.tsx"
$content = Get-Content $file -Raw -Encoding UTF8

# Fix specific remaining phrases
$content = $content.Replace('Por qué es problemático', 'Por que é problemático')
$content = $content.Replace('Cómo corregirlo', 'Como corrigir')
$content = $content.Replace('Los estudantes', 'Os alunos')
$content = $content.Replace('los estudantes', 'os alunos')
$content = $content.Replace('se confunden', 'ficam confusos')
$content = $content.Replace('pueden', 'podem')
$content = $content.Replace('aplican', 'aplicam')
$content = $content.Replace('siempre explicar', 'sempre explicar')
$content = $content.Replace('funcionan', 'funcionam')
$content = $content.Replace('Limita el pensamiento', 'Limita o pensamento')
$content = $content.Replace('el significado', 'o significado')
$content = $content.Replace('Aunque', 'Embora')
$content = $content.Replace('patrones mecánicamente sin comprender el "por qué" matemático', 'padrões mecanicamente sem compreender o "porquê" matemático')
$content = $content.Replace('Al enseñar', 'Ao ensinar')

Set-Content $file -Value $content -Encoding UTF8 -NoNewline
Write-Host "Fixed para-professores" -ForegroundColor Green
