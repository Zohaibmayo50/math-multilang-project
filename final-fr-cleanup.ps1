# Final cleanup - Fix all remaining Spanish text in French components
$ErrorActionPreference = 'Stop'

Write-Host "Starting final French translation cleanup..." -ForegroundColor Yellow

# AudienceSection.tsx
Write-Host "`nProcessing AudienceSection.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\AudienceSection.tsx'
$content = Get-Content $file -Raw -Encoding UTF8

$content = $content -replace '¿Para Quién es Esta Plataforma\?', 'Pour Qui est Cette Plateforme ?'
$content = $content -replace 'Nuestra plataforma de apprentissage de tablas de multiplicar está diseñada', 'Notre plateforme d''apprentissage des tables de multiplication est conçue'
$content = $content -replace 'para todos con diferentes necesidades', 'pour tous avec différents besoins'
$content = $content -replace 'Ofrecemos recursos y guías especiales para cada audiencia', 'Nous offrons des ressources et des guides spéciaux pour chaque public'
$content = $content -replace '¿Cómo puede apoyar a su hijo en el apprentissage de las tablas de multiplicar\?', 'Comment pouvez-vous soutenir votre enfant dans l''apprentissage des tables de multiplication ?'
$content = $content -replace 'Aprendemos Juntos', 'Apprenons Ensemble'

$content | Set-Content $file -Encoding UTF8 -NoNewline
Write-Host "  AudienceSection.tsx fixed!" -ForegroundColor Green

# HowToLearn.tsx - Fix encoding issues and remaining text
Write-Host "`nProcessing HowToLearn.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\HowToLearn.tsx'
$content = Get-Content $file -Raw -Encoding UTF8

$content = $content -replace 'faÃ§on', 'façon'
$content = $content -replace '¿Cómo Aprender las Tablas de Multiplicar de façon Efectiva\?', 'Comment Apprendre les Tables de Multiplication de Façon Efficace ?'
$content = $content -replace 'Múltiplos de 2:', 'Multiples de 2 :'
$content = $content -replace 'Siempre son números pares', 'Sont toujours des nombres pairs'
$content = $content -replace 'Múltiplos de 5:', 'Multiples de 5 :'
$content = $content -replace 'Múltiplos de 9:', 'Multiples de 9 :'
$content = $content -replace 'Múltiplos de 10:', 'Multiples de 10 :'
$content = $content -replace 'de multiplicación', 'de multiplication'
$content = $content -replace 'No es posible ni necesario aprender las tablas de multiplicar en un día', 'Il n''est ni possible ni nécessaire d''apprendre les tables de multiplication en un jour'
$content = $content -replace 'Comienza con pasos pequeños:', 'Commencez par de petites étapes :'
$content = $content -replace 'Primero inicia con números', 'Commencez d''abord par des nombres'
$content = $content -replace 'Aprender Practicando', 'Apprendre en Pratiquant'

$content | Set-Content $file -Encoding UTF8 -NoNewline
Write-Host "  HowToLearn.tsx fixed!" -ForegroundColor Green

# WhyItMatters.tsx
Write-Host "`nProcessing WhyItMatters.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\WhyItMatters.tsx'
$content = Get-Content $file -Raw -Encoding UTF8

$content = $content -replace '¿Por Qué es Importante Aprender las Tablas de Multiplicar\?', 'Pourquoi est-il Important d''Apprendre les Tables de Multiplication ?'
$content = $content -replace 'el éxito general en las clases de matemáticas y el deseo de aprender', 'le succès général dans les cours de mathématiques et le désir d''apprendre'

$content | Set-Content $file -Encoding UTF8 -NoNewline
Write-Host "  WhyItMatters.tsx fixed!" -ForegroundColor Green

# RangePage.tsx
Write-Host "`nProcessing RangePage.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\RangePage.tsx'
$content = Get-Content $file -Raw -Encoding UTF8

$content = $content -replace 'Este rango es ideal para estudiantes que están comenzando a aprender la multiplicación', 'Cette plage est idéale pour les étudiants qui commencent à apprendre la multiplication'
$content = $content -replace 'Este rango es para estudiantes avanzados que quieren practicar la multiplicación con números más grandes', 'Cette plage est pour les étudiants avancés qui veulent pratiquer la multiplication avec de plus grands nombres'
$content = $content -replace 'Números', 'Nombres'
$content = $content -replace '¡Aprende la', 'Apprenez la'
$content = $content -replace 'Aprender Jugando', 'Apprendre en Jouant'

$content | Set-Content $file -Encoding UTF8 -NoNewline
Write-Host "  RangePage.tsx fixed!" -ForegroundColor Green

Write-Host "`nAll French components cleaned up successfully!" -ForegroundColor Yellow
Write-Host "Running final verification..." -ForegroundColor Cyan

# Check for remaining Spanish
$spanishMatches = Get-ChildItem app\components\fr\*.tsx -Exclude *-backup.tsx | Select-String -Pattern '¿|Aprende|números|multiplicación' -SimpleMatch

if ($spanishMatches.Count -eq 0) {
    Write-Host "  No Spanish text found in French components!" -ForegroundColor Green
} else {
    Write-Host "  Warning: Some Spanish text may remain:" -ForegroundColor Yellow
    $spanishMatches | Select-Object -First 10
}
