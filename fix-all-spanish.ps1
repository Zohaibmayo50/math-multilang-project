# Comprehensive final translation - Fix all remaining Spanish text
$ErrorActionPreference = 'Stop'

Write-Host "=== Fixing ALL remaining Spanish text ===" -ForegroundColor Yellow

# Common Spanish to French translations
$commonReplacements = @{
    # Exclamations and questions
    '¡' = ''
    '¿' = ''
    '!' = ' !'
    '\?' = ' ?'
    
    # Common verbs
    '\bAprende\b' = 'Apprenez'
    '\baprender\b' = 'apprendre'
    '\bCada\b' = 'Chaque'
    '\bestudiante\b' = 'étudiant'
    '\bestudiantes\b' = 'étudiants'
    '\bCada estudiante\b' = 'Chaque étudiant'
    '\btu propio ritmo\b' = 'votre propre rythme'
    '\bpara tus estudiantes o hijos\b' = 'pour vos étudiants ou enfants'
    '\bcon tus estudiantes\b' = 'avec vos étudiants'
    '\bComenzar Ahora\b' = 'Commencer Maintenant'
    '\bPara Estudiantes\b' = 'Pour les Étudiants'
    
    # Math terms
    '\blas Matemáticas\b' = 'les Mathématiques'
    '\bnúmero\b' = 'nombre'
    '\btablas de multiplicar\b' = 'tables de multiplication'
    '\bla tabla del\b' = 'la table de'
    '\bmultiplicación\b' = 'multiplication'
    '\bde multiplicación\b' = 'de multiplication'
    
    # Adjectives and adverbs
    '\bDivertido\b' = 'Amusant'
    '\bdivertida\b' = 'amusante'
    '\bdivertidos\b' = 'amusants'
    '\bpersonalizados\b' = 'personnalisés'
    '\bfácilmente\b' = 'facilement'
    '\bcorrecto\b' = 'correct'
    '\bcorrecta\b' = 'correcte'
    '\bcorrectos\b' = 'corrects'
    '\bincorrecto\b' = 'incorrect'
    '\bincorrectos\b' = 'incorrects'
    
    # Question phrases
    '\bCómo puede apoyar a su hijo\b' = 'Comment pouvez-vous soutenir votre enfant'
    '\bCuántas preguntas puedes resolver\b' = 'Combien de questions pouvez-vous résoudre'
    '\bListo para la Carrera\b' = 'Prêt pour la Course'
    
    # Encouragement
    '\bFelicitaciones\b' = 'Félicitations'
    '\bGanaste\b' = 'Vous avez gagné'
    '\bExcellent\b' = 'Excellent'
    '\bInténtalo de nuevo\b' = 'Réessayez'
    
    # Processes
    '\bRefuerza\b' = 'Renforcez'
    '\bGuarda como PDF\b' = 'Enregistrez au format PDF'
    '\bcompártelo\b' = 'partagez-le'
    '\bAjusta el\b' = 'Ajustez le'
    '\bcomo desees\b' = 'comme vous le souhaitez'
    '\bAvanza a\b' = 'Avancez à'
    
    # Status messages
    '\bJeu Terminé\b' = 'Jeu Terminé'
    '\bHas emparejado todas las cartas\b' = 'Vous avez apparié toutes les cartes'
    '\bDespegar\b' = 'Décoller'
    '\bGana la carrera dando respuestas\b' = 'Gagnez la course en donnant des réponses'
    '\bEncuentra las tarjetas que coinciden\b' = 'Trouvez les cartes qui correspondent'
    '\bEmpareja las multiplicaciones con sus\b' = 'Associez les multiplications avec leurs'
    '\bCompletaste en\b' = 'Vous avez terminé en'
    '\bmovimientos\b' = 'mouvements'
    
    # Descriptions
    '\bcon juegos animados y\b' = 'avec des jeux animés et'
    '\bExplota los globos que contienen la respuesta\b' = 'Éclatez les ballons qui contiennent la réponse'
    '\bNo toques globos\b' = 'Ne touchez pas les ballons'
    '\bni dejes escapar los\b' = 'ni ne laissez échapper les'
    
    # Phrases
    '\bA mitad de camino\b' = 'À mi-chemin'
    '\bDomina hasta el\b' = 'Maîtrisez jusqu''au'
    '\bTe estás acercando al nivel experto\b' = 'Vous vous approchez du niveau expert'
    '\bCasi completo\b' = 'Presque terminé'
    '\bContinúa así\b' = 'Continuez comme ça'
    '\bNiveau final\b' = 'Niveau final'
    '\bCompleta el 100 y conviértete en experto\b' = 'Complétez jusqu''à 100 et devenez expert'
    '\bcómodo en cada nivel\b' = 'à l''aise à chaque niveau'
    '\bCuando llegues a 100, serás un experto en\b' = 'Quand vous atteindrez 100, vous serez un expert en'
    '\bCrea ejercicios de\b' = 'Créez des exercices de'
    
    # Form labels
    '\bNúmero de Questions\b' = 'Nombre de Questions'
    '\bNúmero de\b' = 'Nombre de'
    '\brespuesta\b' = 'réponse'
    '\bpregunt(a|as)\b' = 'question$1'
    '\bpreguntas\b' = 'questions'
    
    # Encoding fixes
    'faÃ§on' = 'façon'
    'Ã©' = 'é'
    'Ã ' = 'à'
    'TerminÃ©' = 'Terminé'
    'FÃ©licitations' = 'Félicitations'
    'rÃ©sultats' = 'résultats'
    'RÃ©ponse' = 'Réponse'
}

# List of files to process
$files = @(
    'app\components\fr\AudienceSection.tsx',
    'app\components\fr\GamesSection.tsx',
    'app\components\fr\Header.tsx',
    'app\components\fr\Footer.tsx',
    'app\components\fr\LearningPaths.tsx',
    'app\components\fr\HowToLearn.tsx',
    'app\components\fr\NumberGames.tsx',
    'app\components\fr\PracticePreview.tsx',
    'app\components\fr\PrintableExercises.tsx'
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "`nProcessing $(Split-Path $file -Leaf)..." -ForegroundColor Cyan
        
        $content = Get-Content $file -Raw -Encoding UTF8
        
        foreach ($key in $commonReplacements.Keys) {
            $content = $content -replace $key, $commonReplacements[$key]
        }
        
        $content | Set-Content $file -Encoding UTF8 -NoNewline
        Write-Host "  $(Split-Path $file -Leaf) translated!" -ForegroundColor Green
    }
}

Write-Host "`n=== Translation complete ===" -ForegroundColor Yellow
