# Translate remaining French static components
$ErrorActionPreference = 'Stop'

# Define all Spanish to French translations
$translations = @{
    # Questions
    '¿Cómo Aprender las Tablas de Multiplicar de Forma Efectiva?' = 'Comment Apprendre les Tables de Multiplication de Façon Efficace ?'
    '¿Por Qué Son Importantes las Tablas de Multiplicar?' = 'Pourquoi les Tables de Multiplication Sont-elles Importantes ?'
    
    # Headers
    'Aprender Comprendiendo los Patrones' = 'Apprendre en Comprenant les Modèles'
    'Aprendizaje Repetitivo y Gradual' = 'Apprentissage Répétitif et Graduel'
    'Aprender Jugando con Diversión' = 'Apprendre en Jouant avec Plaisir'
    
    # Patterns
    'Múltiplos de 2:' = 'Multiples de 2 :'
    'Múltiplos de 5:' = 'Multiples de 5 :'
    'Múltiplos de 9:' = 'Multiples de 9 :'
    'Múltiplos de 10:' = 'Multiples de 10 :'
    'Siempre son números pares' = 'Sont toujours des nombres pairs'
    'Siempre terminan en 0 o 5' = 'Se terminent toujours par 0 ou 5'
    'Siempre terminan en 0' = 'Se terminent toujours par 0'
    'La suma de sus dígitos siempre es múltiplo de 9' = 'La somme de leurs chiffres est toujours un multiple de 9'
    'Propiedad conmutativa:' = 'Propriété commutative :'
    'El orden no afecta el resultado' = 'L''ordre n''affecte pas le résultat'
    
    # Learning process
    'En las tablas de multiplicar existen muchos patrones y órdenes' = 'Dans les tables de multiplication, il existe de nombreux modèles et ordres'
    'Descubrir estos patrones proporciona comprensión lógica en lugar de simple memorización' = 'Découvrir ces modèles fournit une compréhension logique au lieu d''une simple mémorisation'
    'Comprender estos patrones te permite captar la lógica fundamental en lugar de memorizar casi 100 valores de multiplicación' = 'Comprendre ces modèles vous permet de saisir la logique fondamentale au lieu de mémoriser près de 100 valeurs de multiplication'
    'No es posible ni necesario aprender las tablas de multiplicar en un día' = 'Il n''est ni possible ni nécessaire d''apprendre les tables de multiplication en un jour'
    'El enfoque más efectivo es la repetición gradual y regular' = 'L''approche la plus efficace est la répétition graduelle et régulière'
    
    # Instructions
    'Comienza con pasos pequeños:' = 'Commencez par de petites étapes :'
    'Primero inicia con números fáciles como 1, 2, 5 y 10' = 'Commencez d''abord par des nombres faciles comme 1, 2, 5 et 10'
    '10-15 minutos diarios:' = '10-15 minutes par jour :'
    'El estudio corto y regular es más efectivo que sesiones largas únicas' = 'L''étude courte et régulière est plus efficace que de longues sessions uniques'
    'Refuerza conocimientos previos:' = 'Renforcez les connaissances antérieures :'
    'Repasa lo aprendido antes de pasar a un nuevo número' = 'Révisez ce qui a été appris avant de passer à un nouveau nombre'
    
    # Games and practice
    'Los juegos hacen que el proceso de aprendizaje sea más divertido' = 'Les jeux rendent le processus d''apprentissage plus amusant'
    'hacen que los estudiantes aprendan sin aburrirse' = 'permettent aux étudiants d''apprendre sans s''ennuyer'
    'Cada niño tiene una velocidad de aprendizaje diferente' = 'Chaque enfant a une vitesse d''apprentissage différente'
    'Mientras algunos aprenden' = 'Tandis que certains apprennent'
    
    # Importance sections
    'Las tablas de multiplicar no son solo un tema escolar' = 'Les tables de multiplication ne sont pas seulement un sujet scolaire'
    'sino una habilidad esencial para la vida diaria' = 'mais une compétence essentielle pour la vie quotidienne'
    'son la base de todas las operaciones matemáticas' = 'sont la base de toutes les opérations mathématiques'
    
    # Common words and phrases
    'números' = 'nombres'
    'multiplicación' = 'multiplication'
    'estudiantes' = 'étudiants'
    'aprendizaje' = 'apprentissage'
    'matemáticas' = 'mathématiques'
    'de forma' = 'de façon'
    'de manera' = 'de manière'
}

# Process HowToLearn.tsx
Write-Host "Processing HowToLearn.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\HowToLearn.tsx'
$content = Get-Content $file -Raw -Encoding UTF8

foreach ($key in $translations.Keys) {
    $content = $content -replace [regex]::Escape($key), $translations[$key]
}

$content | Set-Content $file -Encoding UTF8 -NoNewline
Write-Host "  HowToLearn.tsx translated!" -ForegroundColor Green

# Process WhyItMatters.tsx
Write-Host "Processing WhyItMatters.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\WhyItMatters.tsx'
if (Test-Path $file) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    foreach ($key in $translations.Keys) {
        $content = $content -replace [regex]::Escape($key), $translations[$key]
    }
    
    $content | Set-Content $file -Encoding UTF8 -NoNewline
    Write-Host "  WhyItMatters.tsx translated!" -ForegroundColor Green
}

# Process AudienceSection.tsx
Write-Host "Processing AudienceSection.tsx..." -ForegroundColor Cyan
$file = 'app\components\fr\AudienceSection.tsx'
if (Test-Path $file) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    foreach ($key in $translations.Keys) {
        $content = $content -replace [regex]::Escape($key), $translations[$key]
    }
    
    $content | Set-Content $file -Encoding UTF8 -NoNewline
    Write-Host "  AudienceSection.tsx translated!" -ForegroundColor Green
}

Write-Host "`nAll remaining components translated successfully!" -ForegroundColor Yellow
