# Spanish to French translation for all French components  
$ErrorActionPreference = "Stop"

Write-Host "Translating all French components from Spanish to French..." -ForegroundColor Cyan

$files = @(
    "app\components\fr\GamesSection.tsx",
    "app\components\fr\LearningPaths.tsx",
    "app\components\fr\NumberGames.tsx",
    "app\components\fr\NumberPage.tsx",
    "app\components\fr\PracticePreview.tsx",
    "app\components\fr\PrintableExercises.tsx",
    "app\components\fr\RangePage.tsx"
)

foreach ($file in $files) {
    Write-Host "Processing $file..." -ForegroundColor Yellow
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Fix imports
    $content = $content -creplace "from '\.\./NumberGames'", "from './NumberGames'"
    
    # Basic UI translations
    $content = $content -creplace '\bTabla de Multiplicar\b', 'Table de Multiplication'
    $content = $content -creplace '\btabla-de-multiplicar\b', 'table-de-multiplication'
    $content = $content -creplace '\bTabla del\b', 'Table de'
    $content = $content -creplace '\bTablas\b', 'Tables'
    $content = $content -creplace '\bImprimir\b', 'Imprimer'
    $content = $content -creplace '\bDescargar\b', 'Télécharger'
    $content = $content -creplace '\bEjercicios\b', 'Exercices'
    $content = $content -creplace '\bEjercicio\b', 'Exercice'
    $content = $content -creplace '\bJuegos\b', 'Jeux'
    $content = $content -creplace '\bJuego\b', 'Jeu'
    $content = $content -creplace '\bVolver a\b', 'Retour à'
    $content = $content -creplace '\bRango\b', 'Plage'
    $content = $content -creplace '\bPracticar\b', 'Pratiquer'
    $content = $content -creplace '\bPráctica\b', 'Pratique'
    $content = $content -creplace '\bNivel\b', 'Niveau'
    $content = $content -creplace '\bFácil\b', 'Facile'
    $content = $content -creplace '\bMedio\b', 'Moyen'
    $content = $content -creplace '\bDifícil\b', 'Difficile'
    $content = $content -creplace '\bExperto\b', 'Expert'
    
    # Core math terms
    $content = $content -creplace '\bnúmero\b', 'nombre'
    $content = $content -creplace '\bnúmeros\b', 'nombres'
    $content = $content -creplace '\bresultado\b', 'résultat'
    $content = $content -creplace '\bresultados\b', 'résultats'
    $content = $content -creplace '\bpatrón\b', 'modèle'
    $content = $content -creplace '\bpatrones\b', 'modèles'
    $content = $content -creplace '\bgrupos\b', 'groupes'
    $content = $content -creplace '\bgrupo\b', 'groupe'
    $content = $content -creplace '\bveces\b', 'fois'
    $content = $content -creplace '\bmultiplicación\b', 'multiplication'
    $content = $content -creplace '\bdivisión\b', 'division'
    $content = $content -creplace '\bsuma\b', 'addition'
    $content = $content -creplace '\bresta\b', 'soustraction'
    $content = $content -creplace '\bpropiedad\b', 'propriété'
    $content = $content -creplace '\bpropiedades\b', 'propriétés'
    
    # Question words
    $content = $content -creplace '\bPreguntas\b', 'Questions'
    $content = $content -creplace '\bPregunta\b', 'Question'
    $content = $content -creplace '\bRespuestas\b', 'Réponses'
    $content = $content -creplace '\bRespuesta\b', 'Réponse'
    $content = $content -creplace '\bCorrectas\b', 'Correctes'
    $content = $content -creplace '\bCorrect([ao])\b', 'Correct$1'
    $content = $content -creplace '\bÉxito\b', 'Succès'
    
    # Action words
    $content = $content -creplace '\bComenzar\b', 'Commencer'
    $content = $content -creplace '\bEmpezar\b', 'Commencer'
    $content = $content -creplace '\bResolver\b', 'Résoudre'
    $content = $content -creplace '\bIntentarlo\b', 'Essayer'
    $content = $content -creplace '\bEnviar\b', 'Envoyer'
    
    # Common phrases
    $content = $content -creplace '\bpara reforzar\b', 'pour renforcer'
    $content = $content -creplace '\bde manera divertida\b', 'de manière ludique'
    $content = $content -creplace '\ben este rango\b', 'dans cette plage'
    $content = $content -creplace '\bcon respuestas correctas\b', 'avec des réponses correctes'
    $content = $content -creplace '\bClave de Respuestas\b', 'Corrigé'
    $content = $content -creplace '\bFecha:\b', 'Date :'
    $content = $content -creplace '\bTotal de\b', 'Total de'
    $content = $content -creplace '\bPuntos\b', 'Points'
    $content = $content -creplace '\bTiempo\b', 'Temps'
    
    # Specific translations
    $content = $content -creplace "toLocaleDateString\('es-ES'\)", "toLocaleDateString('fr-FR')"
    $content = $content -creplace '¡([^!]+)!', '$1 !'
    $content = $content -creplace '¿Cuántas', 'Combien de'
    $content = $content -creplace '¿Qué', 'Que'
    $content = $content -creplace '¿Cómo', 'Comment'
    $content = $content -creplace '¿Por qué', 'Pourquoi'
    $content = $content -creplace '¿Cuándo', 'Quand'
    
    # Status messages  
    $content = $content -creplace 'Terminado', 'Terminé'
    $content = $content -creplace 'Excelente', 'Excellent'
    $content = $content -creplace 'Felicidades', 'Félicitations'
    $content = $content -creplace 'Nuevo Juego', 'Nouveau Jeu'
    $content = $content -creplace 'Nueva Pregunta', 'Nouvelle Question'
    
    # Save with UTF-8 encoding
    $content | Set-Content $file -Encoding UTF8 -NoNewline
}

Write-Host "Translation complete!" -ForegroundColor Green
