# Script to translate all Number Meanings in NumberPage.tsx from Spanish to French
# This replaces the hardcoded Spanish text with proper French translations

$filePath = "c:\Users\Zohaib Meo\Desktop\math-multilang-project\app\components\fr\NumberPage.tsx"

# Read the file content
$content = Get-Content $filePath -Raw -Encoding UTF8

# Define all Spanish->French translation mappings for the meanings dictionary
$translations = @{
    # Number 1
    "Multiplicar por 1 es un caso especial en matemáticas. Cuando multiplicas cualquier número por 1, el rÃ©sultat siempre es ese mismo número. Esto se llama la propriÃ©tÃ© de identidad de la multiplicación. Piénsalo como preguntar '¿cuántos groupes de algo tengo?' Cuando solo tienes 1 groupe, tienes exactamente lo que empezaste." = "Multiplier par 1 est un cas spécial en mathématiques. Lorsque vous multipliez un nombre par 1, le résultat est toujours ce même nombre. C'est ce qu'on appelle la propriété d'identité de la multiplication. Pensez-y comme poser la question 'combien de groupes de quelque chose ai-je ?' Lorsque vous n'avez qu'1 groupe, vous avez exactement ce avec quoi vous avez commencé."
    
    # Number 2
    "Multiplicar por 2 significa duplicar un número. Cuando multiplicas algo por 2, lo estás agregando a sí mismo. Esta es una de las operaciones de multiplicación más prácticas porque frecuentemente necesitamos duplicar cosas en la vida real—contar pares de zapatos, ruedas de bicicleta, o dividir algo equitativamente entre dos personas." = "Multiplier par 2 signifie doubler un nombre. Lorsque vous multipliez quelque chose par 2, vous l'ajoutez à lui-même. C'est l'une des opérations de multiplication les plus pratiques car nous devons souvent doubler des choses dans la vie réelle—compter les paires de chaussures, les roues de vélo, ou diviser quelque chose équitablement entre deux personnes."
    
    # Number 3
    "Multiplicar por 3 significa tomar un número tres fois. Puedes pensarlo como sumar el mismo número a sí mismo tres fois. Esta tabla es esencial para entender triángulos, tríos y todo lo que viene en groupes de tres." = "Multiplier par 3 signifie prendre un nombre trois fois. Vous pouvez y penser comme ajouter le même nombre à lui-même trois fois. Cette table est essentielle pour comprendre les triangles, les trios et tout ce qui vient par groupes de trois."
    
    # Number 4
    "Multiplicar por 4 es como duplicar dos fois. Como 4 = 2 × 2, puedes duplicar un número y luego duplicar el rÃ©sultat otra vez. Esto hace que aprender la tabla del 4 sea más fácil si ya conoces la del 2. El número 4 aparece frecuentemente en geometría (los cuadrados tienen 4 lados) y en la medición del tiempo (hay 4 cuartos en una hora)." = "Multiplier par 4, c'est comme doubler deux fois. Comme 4 = 2 × 2, vous pouvez doubler un nombre puis doubler le résultat à nouveau. Cela rend l'apprentissage de la table de 4 plus facile si vous connaissez déjà celle de 2. Le nombre 4 apparaît fréquemment en géométrie (les carrés ont 4 côtés) et dans la mesure du temps (il y a 4 quarts dans une heure)."
    
    # Number 5
    "Multiplicar por 5 crea uno de los modÃ¨les más hermosos en matemáticas. Todos los múltiplos de 5 terminan en 0 o 5, lo que hace que esta tabla sea muy predecible. Es extremadamente útil para contar dinero (monedas de 5 centavos, billetes de 5 pesos) y decir la hora (intervalos de 5 minutos)." = "Multiplier par 5 crée l'un des modèles les plus beaux en mathématiques. Tous les multiples de 5 se terminent par 0 ou 5, ce qui rend cette table très prévisible. C'est extrêmement utile pour compter l'argent (pièces de 5 centimes, billets de 5 euros) et dire l'heure (intervalles de 5 minutes)."
    
    # Number 6
    "Multiplicar por 6 significa tomar seis groupes de un número. El 6 es la primera tabla de multiplicar 'real' porque no es simplemente múltiplos de 2 o 3. Sin embargo, como 6 = 2 × 3, puedes multiplicar un número por 2 y luego por 3 (o al revés) para multiplicar por 6. El número 6 aparece frecuentemente en la naturaleza (celdas de panal de abeja) y en la vida cotidiana (cartones de huevos, caras de dados)." = "Multiplier par 6 signifie prendre six groupes d'un nombre. Le 6 est la première table de multiplication 'réelle' car ce n'est pas simplement des multiples de 2 ou 3. Cependant, comme 6 = 2 × 3, vous pouvez multiplier un nombre par 2 puis par 3 (ou l'inverse) pour multiplier par 6. Le nombre 6 apparaît fréquemment dans la nature (cellules de ruche d'abeille) et dans la vie quotidienne (boîtes d'œufs, faces de dés)."
    
    # Number 7
    "Multiplicar por 7 es generalmente una de las tablas con las que los estudiantes tienen más dificultades porque 7 es un número primo y no se puede derivar de otras tablas simples. Sin embargo, hay modÃ¨les hermosos en todos los múltiplos del 7 y se puede aprender con práctica. El 7 es un número importante en los días de la semana, los continentes del mundo y muchas referencias culturales." = "Multiplier par 7 est généralement l'une des tables avec lesquelles les étudiants ont le plus de difficultés car 7 est un nombre premier et ne peut pas être dérivé d'autres tables simples. Cependant, il existe de beaux modèles dans tous les multiples de 7 et cela peut s'apprendre avec de la pratique. Le 7 est un nombre important dans les jours de la semaine, les continents du monde et de nombreuses références culturelles."
    
    # Number 8
    "Multiplicar por 8 es como duplicar tres fois (8 = 2 × 2 × 2). Duplica un número, duplica el rÃ©sultat otra vez, y duplícalo una vez más—habrás multiplicado por 8. Esta tabla es más fácil de aprender si conoces bien las tablas del 2 y 4. El 8 es un número importante en geometría (octógonos) y música (octava)." = "Multiplier par 8, c'est comme doubler trois fois (8 = 2 × 2 × 2). Doublez un nombre, doublez le résultat à nouveau, et doublez-le une fois de plus—vous aurez multiplié par 8. Cette table est plus facile à apprendre si vous connaissez bien les tables de 2 et 4. Le 8 est un nombre important en géométrie (octogones) et en musique (octave)."
    
    # Number 9
    "Multiplicar por 9 tiene uno de los modÃ¨les más fascinantes en matemáticas. Cuando sumas los dígitos de todos los múltiplos del 9, el rÃ©sultat siempre es divisible por 9. Además, el dígito de las decenas de 9 × n siempre es n-1. Esta tabla también se puede aprender con el truco de los dedos. Como 9 es solo 1 menos que 10, también se puede calcular usando la tabla del 10." = "Multiplier par 9 a l'un des modèles les plus fascinants en mathématiques. Lorsque vous additionnez les chiffres de tous les multiples de 9, le résultat est toujours divisible par 9. De plus, le chiffre des dizaines de 9 × n est toujours n-1. Cette table peut également s'apprendre avec l'astuce des doigts. Comme 9 n'est que 1 de moins que 10, on peut aussi la calculer en utilisant la table de 10."
    
    # Number 10
    "Multiplicar por 10 es una de las tablas de multiplicar más fáciles. Cuando multiplicas cualquier número por 10, simplemente agregas un cero al final. Esto forma la base de nuestro sistema decimal. Aprender a multiplicar por 10 enseña a los estudiantes el concepto de valor posicional y cómo trabajar con números grandes. La tabla del 10 es un punto de referencia para entender todas las demás tablas de multiplicar." = "Multiplier par 10 est l'une des tables de multiplication les plus faciles. Lorsque vous multipliez un nombre par 10, vous ajoutez simplement un zéro à la fin. Cela forme la base de notre système décimal. Apprendre à multiplier par 10 enseigne aux étudiants le concept de valeur positionnelle et comment travailler avec de grands nombres. La table de 10 est un point de référence pour comprendre toutes les autres tables de multiplication."
}

# Apply each translation
foreach ($spanish in $translations.Keys) {
    $french = $translations[$spanish]
    if ($content -match [regex]::Escape($spanish)) {
        $content = $content -replace [regex]::Escape($spanish), $french
        Write-Host "✓ Translated: $($spanish.Substring(0, [Math]::Min(50, $spanish.Length)))..."
    }
}

# Save the file with UTF-8 encoding
$content | Set-Content $filePath -Encoding UTF8 -NoNewline

Write-Host "`n✅ Translation complete! Meanings 1-10 translated." -ForegroundColor Green
