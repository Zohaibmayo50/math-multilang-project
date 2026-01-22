# Complete Spanish to French translation for static components
$staticFiles = @("Header", "Hero", "Footer", "DefinitionSection", "HowToLearn", "WhyItMatters", "AudienceSection", "NumberGames")

foreach ($f in $staticFiles) {
    $file = "app\components\fr\$f.tsx"
    if (Test-Path $file) {
        Write-Host "Processing $f.tsx..." -ForegroundColor Cyan
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Basic verbs
        $content = $content -creplace '\bAprende\b', 'Apprenez'
        $content = $content -creplace '\bAprender\b', 'Apprendre'
        $content = $content -creplace '\baprender\b', 'apprendre'
        $content = $content -creplace '\baprenden\b', 'apprennent'
        $content = $content -creplace '\baprenderás\b', 'apprendras'
        $content = $content -creplace '\bAprendizaje\b', 'Apprentissage'
        $content = $content -creplace '\bComprende\b', 'Comprenez'
        $content = $content -creplace '\bComprender\b', 'Comprendre'
        $content = $content -creplace '\bPractica\b', 'Pratiquez'
        $content = $content -creplace '\bPracticar\b', 'Pratiquer'
        $content = $content -creplace '\bpráctica\b', 'pratique'
        $content = $content -creplace '\bComienza\b', 'Commence'
        $content = $content -creplace '\bComenzar\b', 'Commencer'
        $content = $content -creplace '\binicia\b', 'commence'
        
        # Adjectives
        $content = $content -creplace '\bDivertido\b', 'Amusant'
        $content = $content -creplace '\bdivertidos\b', 'amusants'
        $content = $content -creplace '\banimados\b', 'animés'
        $content = $content -creplace '\bespecial\b', 'spécial'
        $content = $content -creplace '\bespeciales\b', 'spéciaux'
        $content = $content -creplace '\bdiferente\b', 'différent'
        $content = $content -creplace '\bnecesario\b', 'nécessaire'
        $content = $content -creplace '\bposible\b', 'possible'
        $content = $content -creplace '\bregular\b', 'régulière'
        $content = $content -creplace '\bpermanente\b', 'permanente'
        
        # Nouns
        $content = $content -creplace '\bel número\b', 'le nombre'
        $content = $content -creplace '\blos números\b', 'les nombres'
        $content = $content -creplace '\bnúmeros\b', 'nombres'
        $content = $content -creplace '\bnúmero\b', 'nombre'
        $content = $content -creplace '\bmultiplicación\b', 'multiplication'
        $content = $content -creplace '\bmultiplicaciones\b', 'multiplications'
        $content = $content -creplace '\btablas de multiplicar\b', 'tables de multiplication'
        $content = $content -creplace '\btabla de multiplicar\b', 'table de multiplication'
        $content = $content -creplace '\btable de multiplication\b', 'table de multiplication'
        $content = $content -creplace '\bla tabla\b', 'la table'
        $content = $content -creplace '\bjuegos\b', 'jeux'
        $content = $content -creplace '\bpasos\b', 'étapes'
        $content = $content -creplace '\bpequeños\b', 'petites'
        $content = $content -creplace '\bvalores\b', 'valeurs'
        $content = $content -creplace '\bresultados\b', 'résultats'
        $content = $content -creplace '\bpatrones\b', 'modèles'
        $content = $content -creplace '\bestrategias\b', 'stratégies'
        $content = $content -creplace '\bniño\b', 'enfant'
        $content = $content -creplace '\bniños\b', 'enfants'
        $content = $content -creplace '\bvelocidad\b', 'vitesse'
        
        # Phrases
        $content = $content -creplace '\bde forma\b', 'de façon'
        $content = $content -creplace '\bde manera\b', 'de manière'
        $content = $content -creplace '\bDel 1 al 100\b', 'De 1 à 100'
        $content = $content -creplace '\bMúltiplos de\b', 'Multiples de'
        $content = $content -creplace '\bSiempre son\b', 'Sont toujours'
        $content = $content -creplace '\bnúmeros pares\b', 'nombres pairs'
        $content = $content -creplace '\bde Forma Efectiva', 'de Façon Efficace'
        $content = $content -creplace '\bCada niño tiene\b', 'Chaque enfant a'
        $content = $content -creplace '\bMientras algunos\b', 'Tandis que certains'
        $content = $content -creplace '\bNo es posible\b', 'Ce n''est pas possible'
        $content = $content -creplace '\bni necesario\b', 'ni nécessaire'
        $content = $content -creplace '\ben un día\b', 'en un jour'
        $content = $content -creplace '\bPrimero inicia con\b', 'Commence d''abord par'
        $content = $content -creplace '\bcasi 100\b', 'presque 100'
        $content = $content -creplace '\bde pasar a un nuevo\b', 'de passer à un nouveau'
        $content = $content -creplace '\bRefuerza la tabla del\b', 'Renforce la table de'
        $content = $content -creplace '\bcon juegos\b', 'avec des jeux'
        $content = $content -creplace '\by divertidos\b', 'et amusants'
        
        # Question words
        $content = $content -creplace '¿Cómo\b', 'Comment'
        $content = $content -creplace '\?', ' ?'
        $content = $content -creplace '¡', ''
        $content = $content -creplace '!', ' !'
        
        # Common expressions
        $content = $content -creplace '\bmultiplicar dos\b', 'multiplier deux'
        $content = $content -creplace '\bentre sí\b', 'entre eux'
        $content = $content -creplace '\bGeneralmente incluyen\b', 'Généralement elles incluent'
        $content = $content -creplace '\bordenada les résultats de multiplicar\b', 'organisée des résultats de multiplication de'
        $content = $content -creplace '\bsistemáticamente les résultats de las operaciones de\b', 'systématiquement les résultats des opérations de'
        $content = $content -creplace '\bdesarrolla\b', 'développe'
        $content = $content -creplace '\bde memorizar\b', 'de mémoriser'
        $content = $content -creplace '\bantes de pasar\b', 'avant de passer'
        $content = $content -creplace '\bde aprendizaje\b', 'd''apprentissage'
        $content = $content -creplace '\bNúmero primo\b', 'Nombre premier'
        $content = $content -creplace '\brequiere\b', 'nécessite'
        $content = $content -creplace '\bmentales\b', 'mentales'
        $content = $content -creplace '\bcreativas\b', 'créatives'
        $content = $content -creplace '\bcálculo\b', 'calcul'
        
        $content | Set-Content $file -Encoding UTF8 -NoNewline
        Write-Host "  Translated: $f.tsx" -ForegroundColor Green
    }
}

Write-Host "Static components translation complete!" -ForegroundColor Yellow
