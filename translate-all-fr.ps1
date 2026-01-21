# Translate all remaining Spanish text in French components
$ErrorActionPreference = "Stop"

Write-Host "Translating all French components..." -ForegroundColor Cyan

# GamesSection.tsx
$file = Get-Content "app\components\fr\GamesSection.tsx" -Raw -Encoding UTF8
$file = $file -replace 'Aprende las tablas de multiplicar de forma divertida con juegos\. Cada juego ofrece un método de aprendizaje diferente\.','Apprenez les tables de multiplication de manière ludique avec des jeux. Chaque jeu offre une méthode d''apprentissage différente.'
$file = $file -replace 'Respuesta Rápida','Réponse Rapide'
$file = $file -replace '¿Cuántas preguntas puedes resolver en 60 segundos\?','Combien de questions pouvez-vous résoudre en 60 secondes ?'
$file = $file -replace 'Héroe de las Tablas','Héros des Tables'
$file = $file -replace 'Avanza por los Niveaues y alcanza el campeonato','Avancez à travers les niveaux et atteignez le championnat'
$file = $file -replace 'Juego de Memoria','Jeu de Mémoire'
$file = $file -replace 'Empareja las cartas y multiplica','Associez les cartes et multipliez'
$file = $file -replace 'Aventura Espacial','Aventure Spatiale'
$file = $file -replace 'Eleva tu cohete con respuestas correctas','Élevez votre fusée avec des réponses correctes'
$file = $file -replace 'Puntos','Points'
$file = $file -replace '¡Juego Terminado!','Jeu Terminé !'
$file = $file -replace 'Puntos Totales:','Points Totaux :'
$file = $file -replace 'Enviar','Envoyer'
$file = $file -replace 'Parejas:','Paires :'
$file = $file -replace '¡Felicidades!','Félicitations !'
$file = $file -replace '¡Has emparejado todas las cartas!','Vous avez associé toutes les cartes !'
$file = $file -replace 'Nuevo Juego','Nouveau Jeu'
$file = $file -replace 'Altura','Altitude'
$file = $file -replace 'Racha','Série'
$file = $file -replace '¡Despegar! 🚀','Décollage ! 🚀'
$file = $file -replace 'Cada juego utiliza una técnica de aprendizaje diferente\. Respuesta Rápida aumenta tu velocidad, Héroe de las Tablas te ayuda a superar Niveaues de dificultad, Juego de Memoria desarrolla el aprendizaje visual y Aventura Espacial aumenta tu motivación\.','Chaque jeu utilise une technique d''apprentissage différente. Réponse Rapide augmente votre vitesse, Héros des Tables vous aide à surmonter les niveaux de difficulté, Jeu de Mémoire développe l''apprentissage visuel et Aventure Spatiale augmente votre motivation.'
$file | Set-Content "app\components\fr\GamesSection.tsx" -Encoding UTF8 -NoNewline
Write-Host "GamesSection.tsx translated!" -ForegroundColor Green

# LearningPaths.tsx  
$file = Get-Content "app\components\fr\LearningPaths.tsx" -Raw -Encoding UTF8
$file = $file -replace 'Nivel avanzado\. Trabajo con números grandes\.','Niveau avancé. Travail avec de grands nombres.'
$file = $file -replace 'Desarrolla estrategias avanzadas de multiplicación\.','Développez des stratégies de multiplication avancées.'
$file = $file -replace '¡Te estás acercando al nivel experto!','Vous approchez du niveau expert !'
$file = $file -replace '¡Casi completo! Continúa así\.','Presque terminé ! Continuez comme ça.'
$file = $file -replace '¡Nivel final! Completa el 100 y conviértete en experto\.','Niveau final ! Complétez jusqu''à 100 et devenez un expert.'
$file | Set-Content "app\components\fr\LearningPaths.tsx" -Encoding UTF8 -NoNewline
Write-Host "LearningPaths.tsx translated!" -ForegroundColor Green

# PrintableExercises.tsx
$file = Get-Content "app\components\fr\PrintableExercises.tsx" -Raw -Encoding UTF8
$file = $file -replace 'Exercice de la Tabla del','Exercice de la Table de'
$file = $file -replace 'Exercice de Tablas de Multiplicar Mixtas','Exercice de Tables de Multiplication Mixtes'
$file = $file -replace 'Exercice de Tablas de Multiplicar','Exercice de Tables de Multiplication'
$file = $file -replace 'Fecha:','Date :'
$file = $file -replace 'Total de Preguntas:','Total de Questions :'
$file = $file -replace 'Pregunta','Question'
$file = $file -replace 'Clave de Respuestas','Corrigé'
$file = $file -replace 'Imprime o guarda como PDF\.','Imprimez ou enregistrez au format PDF.'
$file = $file -replace 'Tipo de Exercice','Type d''Exercice'
$file = $file -replace 'Tabla Única','Table Unique'
$file = $file -replace 'Una tabla de multiplicar específica','Une table de multiplication spécifique'
$file = $file -replace 'Rango','Plage'
$file = $file -replace 'Tablas en un rango específico','Tables dans une plage spécifique'
$file = $file -replace 'Mixto','Mixte'
$file = $file -replace 'Aleatorio de todas las tablas','Aléatoire de toutes les tables'
$file = $file -replace 'Tabla de Multiplicar','Table de Multiplication'
$file = $file -replace 'Tabla del','Table de'
$file = $file -replace 'Inicio','Début'
$file = $file -replace 'Fin','Fin'
$file = $file -replace 'Número de Preguntas:','Nombre de Questions :'
$file = $file -replace 'Incluir Clave de Respuestas','Inclure le Corrigé'
$file = $file -replace 'Añade las respuestas al final de la página','Ajoute les réponses à la fin de la page'
$file = $file -replace 'Tablas','Tables'
$file = $file -replace 'Clave de Respuestas:','Corrigé :'
$file = $file -replace 'Sí ✓','Oui ✓'
$file = $file -replace 'No ✗','Non ✗'
$file = $file -replace 'Preguntas de Ejemplo:','Questions d''Exemple :'
$file = $file -replace 'Consejo:','Conseil :'
$file = $file -replace 'Puedes guardar como PDF usando la función de impresión de tu navegador\.','Vous pouvez enregistrer au format PDF en utilisant la fonction d''impression de votre navigateur.'
$file = $file -replace 'Imprimir','Imprimer'
$file = $file -replace 'Téléchargerr PDF','Télécharger PDF'
$file = $file -replace 'Ajusta el número de preguntas, tablas y Niveau de dificultad como desees\.','Ajustez le nombre de questions, les tables et le niveau de difficulté comme vous le souhaitez.'
$file = $file -replace 'Compatible con Móviles','Compatible Mobile'
$file = $file -replace 'Puedes imprimir Facilemente desde teléfono, tableta o computadora\.','Vous pouvez facilement imprimer depuis un téléphone, une tablette ou un ordinateur.'
$file = $file -replace 'Guardar y Compartir','Enregistrer et Partager'
$file = $file -replace 'Guarda como PDF y compártelo Facilemente con tus estudiantes\.','Enregistrez au format PDF et partagez facilement avec vos élèves.'
$file | Set-Content "app\components\fr\PrintableExercises.tsx" -Encoding UTF8 -NoNewline
Write-Host "PrintableExercises.tsx translated!" -ForegroundColor Green

# PracticePreview.tsx
$file = Get-Content "app\components\fr\PracticePreview.tsx" -Raw -Encoding UTF8
$file = $file -replace 'Tabla del','Table de'
$file = $file -replace 'Tablas','Tables'
$file = $file -replace 'Preguntas','Questions'
$file = $file -replace 'Practica las Tablas de Multiplicar','Pratiquez les Tables de Multiplication'
$file = $file -replace 'Practicar es muy importante para reforzar las tablas de multiplicar que has aprendido\. Puedes practicar de manera divertida con las Suivants herramientas\.','La pratique est très importante pour renforcer les tables de multiplication que vous avez apprises. Vous pouvez pratiquer de manière ludique avec les outils suivants.'
$file = $file -replace 'Correctas','Correctes'
$file = $file -replace 'Éxito','Succès'
$file = $file -replace '¡Excelente! ¡Respuesta correcta!','Excellent ! Réponse correcte !'
$file = $file -replace '¡Inténtalo de nuevo!','Essayez encore !'
$file = $file -replace 'Respuesta correcta:','Réponse correcte :'
$file = $file -replace 'Nueva Pregunta','Nouvelle Question'
$file = $file -replace 'Comenzar','Commencer'
$file = $file -replace 'Soru','Question'
$file = $file -replace 'Correctas:','Correctes :'
$file = $file -replace '¡Exercice Terminé!','Exercice Terminé !'
$file = $file -replace 'Doğru','Correct'
$file = $file -replace 'Yanlış','Incorrect'
$file = $file -replace 'Geri Dön','Retour'
$file = $file -replace 'Resolver de Nuevo','Résoudre à Nouveau'
$file = $file -replace 'Respuestas Incorrectas:','Réponses Incorrectes :'
$file = $file -replace 'Senin cevabın:','Votre réponse :'
$file = $file -replace 'Practicar no es solo para ganar velocidad\. Piensa cuidadosamente en cada pregunta, analiza tus respuestas incorrectas e identifica qué tablas de multiplicar te resultan Difficilees\. La práctica regular de 10-15 minutos al día es el método más efectivo para el aprendizaje a largo plazo\.','La pratique ne sert pas seulement à gagner en vitesse. Réfléchissez attentivement à chaque question, analysez vos réponses incorrectes et identifiez quelles tables de multiplication vous posent des difficultés. Une pratique régulière de 10-15 minutes par jour est la méthode la plus efficace pour l''apprentissage à long terme.'
$file | Set-Content "app\components\fr\PracticePreview.tsx" -Encoding UTF8 -NoNewline
Write-Host "PracticePreview.tsx translated!" -ForegroundColor Green

Write-Host "`nAll components translated successfully!" -ForegroundColor Green
