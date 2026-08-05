// AUTO-EXTRACTED verbatim from app/components/fr/NumberPage.tsx
// Per-number curated content for locale: fr
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

// Contamination audit performed 2026-07-30
// Spanish-language fragments found and corrected (legacy of cloning from es.ts)
// A native French speaker should spot-check corrected entries

const meanings: { [key: number]: string } = {
      1: "Multiplier par 1 est un cas spécial en mathématiques. Lorsque vous multipliez n'imparte quel nombre par 1, le résultat est toujours ce même nombre. C'est ce qu'on appelle la propriété d'identité de la multiplication. Pensez-y comme à la question 'combien de groupes de quelque chose ai-je ?' Lorsque vous n'avez qu'un seul groupe, vous avez exactement ce avec quoi vous avez commencé.",
      2: "Multiplier par 2 signifie doubler un nombre. Lorsque vous multipliez quelque chose par 2, vous l'ajoutez à lui-même. C'est l'une des opérations de multiplication les plus pratiques car nous devons souvent doubler des choses dans la vie réelle—compter les paires de chaussures, les roues de vélo, ou diviser quelque chose équitablement entre deux personnes.",
      3: "Multiplier par 3 signifie prendre un nombre trois fois. Vous pouvez y penser comme à additionner le même nombre à lui-même trois fois. Cette table est essentielle pour comprendre les triangles, les trios et tout ce qui vient par groupes de trois.",
      4: "Multiplier par 4, c'est comme doubler deux fois. Comme 4 = 2 × 2, vous pouvez doubler un nombre puis doubler le résultat à nouveau. Cela rend l'apprentissage de la table de 4 plus facile si vous connaissez déjà celle de 2. Le nombre 4 apparaît fréquemment en géométrie (les carrés ont 4 côtés) et dans la mesure du temps (il y a 4 quarts dans une heure).",
      5: "Multiplier par 5 crée l'un des modèles les plus beaux en mathématiques. Tous les multiples de 5 se terminent par 0 ou 5, ce qui rend cette table très prévisible. C'est extrêmement utile pour compter l'argent (pièces de 5 centimes, billets de 5 euros) et dire l'heure (intervalles de 5 minutes).",
      6: "Multiplier par 6 signifie prendre six groupes d'un nombre. Le 6 est la première table de multiplication 'réelle' car ce ne sont pas simplement des multiples de 2 ou 3. Cependant, comme 6 = 2 × 3, vous pouvez multiplier un nombre par 2 puis par 3 (ou l'inverse) pour multiplier par 6. Le nombre 6 apparaît fréquemment dans la nature (cellules de ruche d'abeille) et dans la vie quotidienne (boîtes d'œufs, faces de dés).",
      7: "Multiplier par 7 est généralement l'une des tables avec lesquelles les étudiants ont le plus de difficultés car 7 est un nombre premier et ne peut pas être dérivé d'autres tables simples. Cependant, il existe de beaux modèles dans tous les multiples de 7 et cela peut s'apprendre avec de la pratique. Le 7 est un nombre impartant dans les jours de la semaine, les continents du monde et de nombreuses références culturelles.",
      8: "Multiplier par 8, c'est comme doubler trois fois (8 = 2 × 2 × 2). Doublez un nombre, doublez le résultat à nouveau, et doublez-le une fois de plus—vous aurez multiplié par 8. Cette table est plus facile à apprendre si vous connaissez bien les tables de 2 et 4. Le 8 est un nombre impartant en géométrie (octogones) et en musique (octave).",
      9: "Multiplier par 9 a l'un des modèles les plus fascinants en mathématiques. Lorsque vous additionnez les chiffres de tous les multiples de 9, le résultat est toujours divisible par 9. De plus, le chiffre des dizaines de 9 × n est toujours n-1. Cette table peut également s'apprendre avec l'astuce des doigts. Comme 9 n'est que 1 de moins que 10, on peut aussi la calculer en utilisant la table de 10.",
      10: "Multiplier par 10 est l'une des tables de multiplication les plus faciles. Lorsque vous multipliez n'imparte quel nombre par 10, vous ajoutez simplement un zéro à la fin. Cela forme la base de notre système décimal. Apprendre à multiplier par 10 enseigne aux étudiants le concept de valeur positionnelle et comment travailler avec de grands nombres. La table de 10 est un point de référence pour comprendre toutes les autres tables de multiplication.",
      11: "Multiplier par 11 a l'un des modèles les plus intéressants en mathématiques. Lorsque vous multipliez des nombres d'un chiffre par 11, le résultat est ce nombre répété deux fois (11×3=33, 11×7=77). Lorsque vous multipliez des nombres de deux chiffres par 11, il y a aussi un beau modèle : vous additionnez les chiffres et les placez au milieu. Le 11 est un nombre premier et a des propriétés mathématiques spéciales.",
      12: "Multiplier par 12 est l'une des tables les plus pratiques car 12 est divisible par de nombreux nombres (1, 2, 3, 4, 6, 12). Cette caractéristique rend le 12 très utile dans la vie quotidienne—il y a 12 objets dans une douzaine, 12 heures sur une horloge, 12 mois dans une année. Comme 12 = 3 × 4 = 2 × 6, vous pouvez apprendre cette table de multiples façons.",
      13: "Multiplier par 13 développe les compétences de reconnaissance de modèles des étudiants. Le 13 est un nombre premier, il ne peut donc pas être simplement dérivé d'autres tables. Cependant, penser à 13 comme 10+3 est très utile : multiplier un nombre par 13 signifie le multiplier par 10 et ajouter le résultat de la multiplication par 3. Le 13 est un nombre avec une signification spéciale dans de nombreuses cultures.",
      14: "Multiplier par 14 est le double de la table de 7. Comme 14 = 2 × 7, si vous connaissez la table de 7, vous pouvez doubler chaque résultat pour trouver la table de 14. Le 14 est impartant dans la planification hebdomadaire (2 semaines = 14 jours) et montre des propriétés de nombres pairs.",
      15: "Multiplier par 15 combine les multiples de 3 et de 5. Comme 15 = 3 × 5, cette table parte les propriétés des deux nombres. Tous les multiples de 15 sont divisibles à la fois par 3 et par 5. Comme 15 minutes représentent un quart d'heure, cela est beaucoup utilisé dans les calculs de temps.",
      16: "Multiplier par 16 est la quatrième puissance de 2 (2×2×2×2=16). Cela rend possible d'apprendre la table de 16 par des chaînes de doublement. Vous pouvez doubler 8 pour obtenir 16. En informatique, le 16 est un nombre impartant (système hexadécimal) et apparaît également fréquemment dans la vie quotidienne.",
      17: "Multiplier par 17 peut être difficile en raison de ses propriétés de nombre premier. Le 17 ne peut pas être simplement dérivé d'autres tables. Cependant, penser à 17 comme 20-3 ou 10+7 facilite les calculs. Apprendre la table de 17 développe les compétences en calcul mental et les stratégies de résolution de problèmes.",
      18: "Multiplier par 18 contient de nombreuses relations. Comme 18 = 2 × 9 = 3 × 6, vous pouvez apprendre cette table de multiples façons. Doubler la table de 9 ou tripler la table de 6 donne la table de 18. Le 18 est impartant comme âge de la majorité dans de nombreux pays.",
      19: "Multiplier par 19 ne peut pas être dérivé d'autres tables car le 19 est un nombre premier. Cependant, penser à 19 comme 20-1 est très pratique : multipliez un nombre par 20 et soustrayez le nombre lui-même. Cette stratégie facilite grandement le calcul mental de la table de 19.",
      20: "Multiplier par 20 est l'extension naturelle de la table de 10. Lorsque vous multipliez n'imparte quel nombre par 20, vous pouvez le multiplier par 10 et doubler le résultat. Ou simplement ajouter un zéro à la fin et doubler. La table de 20 est constamment utilisée dans les calculs monétaires (20 euros) et les mesures (20 mètres, 20 kilogrammes).",
      21: "Multiplier par 21 nécessite de comprendre la relation 3×7. Comme 21=3×7, cette table parte les propriétés des tables de 3 et de 7. Le 21 est impartant comme âge légal de la majorité dans de nombreux pays. Penser à 21 comme 20+1 facilite les calculs : multipliez un nombre par 20 et ajoutez-lui le nombre lui-même.",
      22: "Multiplier par 22 est le double de 11 (22=2×11). Si vous connaissez la table de 11, vous pouvez doubler chaque résultat pour trouver la table de 22. Comme 22 est également 2×11, il montre des propriétés de nombres pairs. Le 22 apparaît fréquemment dans les sparts (équipe de football) et le comptage quotidien.",
      23: "Multiplier par 23 ne peut pas être dérivé d'autres tables en raison de ses propriétés de nombre premier. Cependant, penser à 23 comme 20+3 ou 25-2 facilite les calculs. Le 23 est un nombre impartant en biologie (nombre de paires de chromosomes humains). Apprendre la table de 23 renforce les compétences en arithmétique mentale.",
      24: "Multiplier par 24 est l'une des tables les plus polyvalentes. Comme 24=2×12=3×8=4×6, peut être calculé de nombreuses façons différentes. En raison de la relation jour-heure (24 heures), c'est un nombre fondamental dans les calculs de temps. Le 24 représente également 2 douzaines et est fréquemment utilisé dans l'emballage et le groupement.",
      25: "Multiplier par 25 utilise la relation 5×5 (5²). Comme 25 est le carré de 5, il a des propriétés mathématiques très spéciales. C'est impartant dans les calculs monétaires (25 centimes représentent un quart). Tous les multiples de 25 se terminent par 25, 50, 75, 00 - un modèle très régulier.",
      26: "Multiplier par 26 est le double de 13 (26=2×13). Si vous connaissez la table de 13, vous pouvez doubler chaque résultat pour trouver la table de 26. Le 26 est le nombre de lettres dans l'alphabet anglais. Penser à 26 comme 25+1 ou 30-4 facilite les calculs.",
      27: "Multiplier par 27 est la troisième puissance de 3 (27=3³=3×3×3). Cette relation spéciale fait que le 27 est impartant en mathématiques et géométrie. Comme 27=3×9, il peut être calculé en utilisant les tables de 3 ou de 9. Penser à 27 comme 30-3 facilite le calcul mental.",
      28: "Multiplier par 28 utilise la relation 4×7. Comme 28=4×7=2×14, il peut s'apprendre de multiples façons. 28 jours est le nombre de jours en février (quand ce n'est pas une année bissextile). Le 28 est également un nombre parfait (la somme de ses diviseurs est égale à lui-même : 1+2+4+7+14=28).",
      29: "Multiplier par 29 nécessite des stratégies spéciales parce que c'est un nombre premier. La méthode la plus pratique est de penser à 29 comme 30-1 : multipliez un nombre par 30 et soustrayez-lui le nombre lui-même. 29 jours est le nombre de jours en février dans les années bissextiles. Apprendre la table de 29 développe des compétences en résolution de problèmes.",
      30: "Multiplier par 30 utilise la relation 10×3. Pour multiplier un nombre par 30, vous pouvez le multiplier par 10 puis multiplier le résultat par 3. 30 jours est le nombre de jours dans de nombreux mois (avril, juin, septembre, novembre). Le 30 représente également une demi-heure (30 minutes). La table de 30 est fréquemment utilisée dans les calculs de pourcentage (30% de réduction).",
      31: "Multiplier par 31 nécessite des stratégies spéciales en raison de ses propriétés de nombre premier. La méthode la plus pratique est de penser à 31 comme 30+1 : multipliez un nombre par 30 et ajoutez-lui le nombre lui-même. 31 jours est le nombre maximum de jours dans de nombreux mois (janvier, mars, mai, juillet, août, octobre, décembre). Apprendre la table de 31 développe des compétences en calcul mental avec de grands nombres.",
      32: "Multiplier par 32 est la cinquième puissance de 2 (2⁵=2×2×2×2×2=32). Cela rend possible d'apprendre le 32 au moyen de chaînes de doublement. Vous pouvez doubler 16 pour obtenir 32. 32 degrés Fahrenheit est le point de congélation de l'eau. En informatique, les systèmes de 32 bits sont courants. Les relations 32=4×8=2×16 offrent différentes méthodes de calcul.",
      33: "Multiplier par 33 utilise la relation 3×11. Si vous connaissez la table de 11, vous pouvez la tripler, ou si vous connaissez la table de 3, vous pouvez la multiplier par 11 pour trouver la table de 33. Le 33 est le nombre repdigit de deux chiffres le plus grand (répétition des mêmes chiffres). Que tous les chiffres de 33 soient égaux crée certains modèles intéressants.",
      34: "Multiplier par 34 est le double de 17 (34=2×17). Si vous connaissez la table de 17, vous pouvez doubler chaque résultat pour trouver la table de 34. La somme des chiffres de 34 est 7 (3+4=7), ce qui conduit à des modèles liés au 7. Penser à 34 comme 35-1 ou 30+4 facilite les calculs.",
      35: "Multiplier par 35 utilise la relation 5×7. Si les deux tables sont connues, multiplier par 35 est assez facile. Tous les multiples de 35 se terminent par 5 ou 0 (comme les multiples de 5). 35 minutes représentent 5 minutes de plus qu'une demi-heure. La relation 35=5×7 combine les propriétés des deux tables de 5 et de 7.",
      36: "Multiplier par 36 est l'une des tables les plus polyvalentes. Comme 36=6×6=4×9=3×12=2×18, il peut être calculé de nombreuses façons différentes. Le 36 est le carré de 6 (6²). Le 36 représente des multiples d'une douzaine complète (1 douzaine = 12, 3 douzaines = 36). Le 36 a de nombreux diviseurs, ce qui le rend très utile pour les fractions.",
      37: "Multiplier par 37 nécessite des stratégies spéciales parce que c'est un nombre premier. Penser à 37 comme 40-3 ou 35+2 facilite les calculs. Le 37 a des relations intéressantes avec les nombres repdigit : 37×3=111. Cette propriété spéciale du 37 peut être utilisée pour certains calculs astuces.",
      38: "Multiplier par 38 est le double de 19 (38=2×19). Si vous connaissez la table de 19, vous pouvez doubler chaque résultat pour trouver la table de 38. Penser à 38 comme 40-2 facilite le calcul mental. 38 degrés Celsius est une fièvre légère pour la température corparelle humaine.",
      39: "Multiplier par 39 utilise la relation 3×13. Comme 39=3×13, il peut être calculé en triplant la table de 13 ou en multipliant la table de 3 par 13. La méthode la plus pratique est de penser à 39 comme 40-1. Le 39 est un nombre intéressant divisible à la fois par 3 et par 13.",
      40: "Multiplier par 40 utilise la relation 4×10. Pour multiplier un nombre par 40, vous pouvez le multiplier par 10 puis multiplier le résultat par 4. Ou multipliez par 4 et ajoutez un zéro à la fin. Le 40 est fréquemment utilisé dans la vie quotidienne : 40 heures de semaine de travail, 40 ans est considéré comme l'âge moyen. La table de 40 est très régulière car ce sont les 10 multipliés par 4.",
      41: "Multiplier par 41 développe des compétences en calcul mental en raison de ses propriétés de nombre premier. La méthode la plus pratique est de penser à 41 comme 40+1 : multipliez un nombre par 40 et ajoutez-lui le nombre lui-même. Le 41 est un nombre premier et ne peut pas être simplement dérivé d'autres tables. Apprendre la table de 41 augmente la capacité de calculer rapidement avec de grands nombres.",
      42: "Multiplier par 42 est l'une des tables les plus polyvalentes. Comme 42=6×7=2×21=3×14, il peut être calculé de multiples façons. Le 42 est célèbre dans la culture de science-fiction comme 'La Réponse Ultime à l'Univers, la Vie et Tout' (Le Guide du voyageur galactique). Comme il combine les tables de 6 et de 7, il renforce les deux.",
      43: "Multiplier par 43 nécessite des stratégies spéciales parce que c'est un nombre premier. Penser à 43 comme 40+3 ou 45-2 facilite les calculs. Le 43 est un nombre premier et est divisible uniquement par 1 et 43. Apprendre la table de 43 développe la capacité de penser de manière créative avec les nombres.",
      44: "Multiplier par 44 est quatre fois 11 (44=4×11). Si vous connaissez la table de 11, vous pouvez la quadrupler, ou multiplier la table de 4 par 11 pour la calculer. La relation 44=2×22 offre également une méthode différente. Le 44 montre un modèle similaire à repdigit et a des propriétés de nombres pairs.",
      45: "Multiplier par 45 utilise la relation 5×9. Si les deux tables sont connues, multiplier par 45 est facile. 45 degrés est un demi-angle droit, un angle impartant en géométrie. 45 minutes représentent trois quarts d'heure (45 minutes = 0,75 heure). Tous les multiples de 45 se terminent par 5 ou 0.",
      46: "Multiplier par 46 est le double de 23 (46=2×23). Si vous connaissez la table de 23, vous pouvez doubler chaque résultat pour trouver la table de 46. Penser à 46 comme 45+1 ou 50-4 facilite les calculs. Le 46 est le nombre total de chromosomes humains (23 paires).",
      47: "Multiplier par 47 nécessite des stratégies mentales en raison de ses propriétés de nombre premier. Les méthodes les plus efficaces sont de penser à 47 comme 50-3 ou 45+2. Le 47 est un nombre premier et a des propriétés mathématiques spéciales. Apprendre la table de 47 développe la capacité de travailler confortablement avec des nombres complexes.",
      48: "Multiplier par 48 a de nombreuses relations de facteurs. Comme 48=6×8=4×12=3×16=2×24, il peut être calculé de multiples façons. Comme le 48 est 4 fois 12, il est utile dans les calculs de douzaines (4 douzaines). 48 heures = 2 jours, se trouve fréquemment dans les calculs de temps.",
      49: "Multiplier par 49 est le carré de 7 (49=7×7=7²). Cette relation spéciale nécessite de connaître parfaitement la table de 7. Penser à 49 comme 50-1 facilite beaucoup le calcul mental. Comme c'est un nombre carré, le 49 est impartant en géométrie et calculs de surface. Le 49 est également impartant pour les modèles mathématiques, bien que ce ne soit pas un échiquier 7×7.",
      50: "Multiplier par 50 utilise la relation 5×10 et est l'une des tables les plus faciles. Pour multiplier un nombre par 50, vous pouvez le multiplier par 5 et ajouter un zéro à la fin. Ou penser à cela comme la moitié de 100. Le 50 est utilisé fréquemment : demi-siècle, et dans les calculs de pourcentage (50%=1/2).",
      51: "Multiplier par 51 utilise la stratégie 50+1. Pour multiplier un nombre par 51, multipliez-le par 50 et ajoutez-lui le nombre lui-même. La relation 51=3×17 offre une méthode alternative. Apprendre la table de 51 développe la capacité de calculer avec des nombres proches de 50.",
      52: "Multiplier par 52 utilise la relation 4×13. C'est le nombre de semaines dans une année (52 semaines) et le nombre de cartes dans un jeu standard (52 cartes). Comme 52=2×26, doubler la table de 26 fonctionne également. Penser à 52 comme 50+2 facilite le calcul mental. Cette table est très utile dans les calculs de temps et de calendrier.",
      53: "Multiplier par 53 développe des stratégies de calcul mental en raison de ses propriétés de nombre premier. Les méthodes les plus pratiques sont de penser à 53 comme 50+3 ou 55-2. Le 53 est un nombre premier et est divisible uniquement par 1 et 53. Apprendre la table de 53 augmente la capacité de travailler avec de grands nombres premiers et approfondit la pensée mathématique.",
      54: "Multiplier par 54 est l'une des tables les plus polyvalentes. Comme 54=6×9=2×27=3×18, il peut être calculé de nombreuses façons différentes. Le 54 est 3 fois l'addition des nombres de 1 à 10 (1+2+...+10=55 approximativement). Comme il combine les tables de 6 et de 9, il renforce les deux. Avoir de nombreux diviseurs le rend utile dans les calculs de fractions.",
      55: "Multiplier par 55 utilise la relation 5×11. Si les deux tables sont connues, multiplier par 55 est facile. La stratégie 55=50+5 est également très pratique. Le 55 est l'addition des nombres de 1 à 10 (1+2+3+...+10=55), cette relation mathématique spéciale le rend intéressant. Le modèle du 5 (se termine par 5 ou 0) facilite le calcul.",
      56: "Multiplier par 56 utilise la relation 7×8. Comme il combine ces deux tables difficiles, il renforce les deux. Les alternatives 56=4×14=2×28 offrent différentes stratégies. Le 56 est le nombre total d'heures en 7 jours avec des journées de travail de 8 heures (7×8). Penser à 56 comme 60-4 facilite également le calcul mental.",
      57: "Multiplier par 57 utilise la relation 3×19. Tripler la table de 19 ou multiplier la table de 3 par 19 fonctionne. Penser à 57 comme 60-3 ou 55+2 facilite le calcul. Comme 57=3×19, il est divisible à la fois par 3 et par 19. Apprendre la table de 57 développe la capacité de travailler avec de grands nombres de niveau moyen.",
      58: "Multiplier par 58 est le double de 29 (58=2×29). Si vous connaissez la table de 29, vous pouvez doubler chaque résultat pour trouver la table de 58. Penser à 58 comme 60-2 ou 50+8 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Cette table renforce les stratégies de duplication et d'approximation de nombres ronds.",
      59: "Multiplier par 59 nécessite des stratégies spéciales en raison de ses propriétés de nombre premier et de sa proximité avec 60. La méthode la plus efficace est de penser à 59 comme 60-1 : multipliez un nombre par 60 et soustrayez-lui le nombre lui-même. Le 59 est un nombre premier et est divisible uniquement par 1 et 59. La table de 59 fournit un contexte pour les calculs de minutes et de temps (59 minutes) en raison de sa proximité avec 60.",
      60: "Multiplier par 60 utilise la relation 6×10 et est très utile. Pour multiplier un nombre par 60, vous pouvez le multiplier par 6 et ajouter un zéro à la fin. Le 60 est le nombre de minutes dans une heure, le nombre de secondes dans une minute, et un sixième des 360° d'un cercle. Il y a de nombreuses relations de facteurs comme 60=2×30=3×20=4×15=5×12. Cette table est critique pour les calculs de temps.",
      61: "Multiplier par 61 nécessite des stratégies spéciales en raison de ses propriétés de nombre premier et de sa proximité avec 60. La méthode la plus pratique est de penser à 61 comme 60+1 : multipliez un nombre par 60 et ajoutez-lui le nombre lui-même. Le 61 est un nombre premier et est divisible uniquement par 1 et 61. Apprendre la table de 61 développe la capacité de calcul mental avec des nombres au-dessus de 60.",
      62: "Multiplier par 62 est le double de 31 (62=2×31). Si vous connaissez la table de 31, vous pouvez doubler chaque résultat pour trouver la table de 62. Penser à 62 comme 60+2 ou 65-3 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Cette table est utile pour la duplication et les calculs proches de 60.",
      63: "Multiplier par 63 utilise la relation 7×9. Comme il combine ces deux tables impartantes, il renforce les deux. L'alternative 63=3×21 offre une stratégie différente. Penser à 63 comme 60+3 ou 65-2 facilite le calcul mental. Le 63 est très polyvalent car il est divisible à la fois par 7 et par 9.",
      64: "Multiplier par 64 est une puissance de 2 (64=2⁶=8×8). Comme l'architecture 64 bits est courante en informatique, c'est impartant à l'ère technologique. La relation 64=8² (huit au carré) est critique pour comprendre les nombres carrés. Penser à 64 comme 60+4 ou 65-1 facilite le calcul. Il y a 64 cases sur un échiquier (8×8).",
      65: "Multiplier par 65 utilise la relation 5×13. Si les deux tables sont connues, multiplier par 65 est facile. Le 65 est utilisé comme âge de la retraite dans de nombreux pays. Penser à 65 comme 60+5 ou 70-5 facilite le calcul mental. Le modèle du 5 (se termine par 5 ou 0) facilite le calcul.",
      66: "Multiplier par 66 utilise la relation 6×11 ou la relation 2×33. Comme 66=6×11, il a des modèles similaires à repdigit. Penser à 66 comme 60+6 ou 70-4 facilite le calcul. Le 66 est divisible à la fois par 6 et par 11. Comme c'est un nombre pair, tous ses multiples sont également pairs.",
      67: "Multiplier par 67 développe des stratégies de calcul mental en raison de ses propriétés de nombre premier. Les méthodes les plus pratiques sont de penser à 67 comme 70-3 ou 65+2. Le 67 est un nombre premier et est divisible uniquement par 1 et 67. Apprendre la table de 67 augmente la capacité de travailler avec de grands nombres premiers.",
      68: "Multiplier par 68 utilise la relation 4×17 ou la relation 2×34. Quadrupler la table de 17 ou doubler la table de 34 fonctionne. Penser à 68 comme 70-2 ou 60+8 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 68 est divisible à la fois par 4 et par 17.",
      69: "Multiplier par 69 utilise la relation 3×23. Tripler la table de 23 ou multiplier la table de 3 par 23 fonctionne. La stratégie la plus facile est de penser à 69 comme 70-1 : multipliez un nombre par 70 et soustrayez-lui le nombre lui-même. Comme 69=3×23, il est divisible à la fois par 3 et par 23. Cette table est utile pour les calculs proches de 70.",
      70: "Multiplier par 70 utilise la relation 7×10 et est très utile. Pour multiplier un nombre par 70, vous pouvez le multiplier par 7 et ajouter un zéro à la fin. Le 70 est associé à l'espérance de vie moyenne d'une personne (entre 70-80 dans la plupart des pays). Il y a des relations de facteurs alternatives comme 70=2×35=5×14. Cette table renforce la table de 7.",
      71: "Multiplier par 71 développe des stratégies de calcul mental en raison de ses propriétés de nombre premier. La méthode la plus pratique est de penser à 71 comme 70+1 : multipliez un nombre par 70 et ajoutez-lui le nombre lui-même. Le 71 est un nombre premier et est divisible uniquement par 1 et 71. Apprendre la table de 71 développe la capacité de calculer rapidement avec de grands nombres premiers.",
      72: "Multiplier par 72 est l'une des tables les plus polyvalentes. Comme 72=8×9=6×12=4×18=3×24=2×36, il peut être calculé de nombreuses façons différentes. Le 72 est 3 fois le nombre d'heures dans un jour (72 heures = 3 jours). Avoir de nombreux diviseurs le rend extrêmement utile dans les calculs de fractions. Le 72 est 6 fois 12 (6 douzaines).",
      73: "Multiplier par 73 développe des propriétés de nombre premier et des stratégies de calcul mental. Les méthodes les plus pratiques sont de penser à 73 comme 70+3 ou 75-2. Le 73 est un nombre premier et est divisible uniquement par 1 et 73. Le 73 est également le 21e nombre premier et a des propriétés mathématiques intéressantes.",
      74: "Multiplier par 74 utilise la relation 2×37. Si vous connaissez la table de 37, vous pouvez doubler chaque résultat pour trouver la table de 74. Penser à 74 comme 70+4 ou 75-1 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 74 est divisible à la fois par 2 et par 37.",
      75: "Multiplier par 75 utilise les relations 3×25=5×15. Le 75 est trois quarts de 100 (75%=3/4). Il peut aussi s'exprimer comme 75=3×5×5. Penser à 75 comme 70+5 ou 80-5 facilite le calcul mental. Le modèle du 5 (se termine par 5 ou 0) facilite le calcul. Il est utilisé fréquemment dans les calculs de pourcentage (75%=¾).",
      76: "Multiplier par 76 utilise la relation 4×19 ou la relation 2×38. Quadrupler la table de 19 ou doubler la table de 38 fonctionne. Penser à 76 comme 75+1 ou 80-4 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 76 est divisible à la fois par 4 et par 19.",
      77: "Multiplier par 77 utilise la relation 7×11. Si les deux tables sont connues, multiplier par 77 est facile. Le 77 montre un modèle similaire à repdigit (répétition de 7). Penser à 77 comme 80-3 ou 75+2 facilite le calcul. Comme 77=7×11, il est divisible à la fois par 7 et par 11.",
      78: "Multiplier par 78 utilise les relations 2×39=3×26=6×13. Il peut être calculé de multiples façons. Penser à 78 comme 80-2 ou 75+3 facilite le calcul mental. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 78 est divisible par 2, 3, 6, 13, 26, 39.",
      79: "Multiplier par 79 nécessite des stratégies spéciales en raison de ses propriétés de nombre premier. La stratégie la plus facile est de penser à 79 comme 80-1 : multipliez un nombre par 80 et soustrayez-lui le nombre lui-même. Le 79 est un nombre premier et est divisible uniquement par 1 et 79. Apprendre la table de 79 établit une base parfaite pour les calculs proches de 80.",
      80: "Multiplier par 80 utilise la relation 8×10 et est très utile. Pour multiplier un nombre par 80, vous pouvez le multiplier par 8 et ajouter un zéro à la fin. Il y a des relations de facteurs alternatives comme 80=2×40=4×20=5×16. Le 80 est associé à la limite supérieure de l'espérance de vie moyenne (entre 70-80 dans la plupart des pays). Cette table renforce la table de 8.",
      81: "Multiplier par 81 est le carré de 9 (81=9×9=9²). Cette relation spéciale nécessite de connaître parfaitement la table de 9. Il est également intéressant que 81=3⁴ (la quatrième puissance de 3). Penser à 81 comme 80+1 facilite le calcul mental. Comme 81 est un nombre carré, il est impartant en géométrie et calculs de surface.",
      82: "Multiplier par 82 utilise la relation 2×41. Si vous connaissez la table de 41, vous pouvez doubler chaque résultat pour trouver la table de 82. Penser à 82 comme 80+2 ou 85-3 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 82 est divisible à la fois par 2 et par 41.",
      83: "Multiplier par 83 développe des stratégies de calcul mental en raison de ses propriétés de nombre premier. Les méthodes les plus pratiques sont de penser à 83 comme 80+3 ou 85-2. Le 83 est un nombre premier et est divisible uniquement par 1 et 83. Apprendre la table de 83 augmente la capacité de travailler avec de grands nombres premiers.",
      84: "Multiplier par 84 est l'une des tables les plus polyvalentes. Comme 84=7×12=6×14=4×21=3×28=2×42, il peut être calculé de nombreuses façons différentes. Le 84 est 12 fois le nombre d'heures dans une semaine, ou 7 fois une demi-journée de 12 heures. Avoir de nombreux diviseurs le rend utile dans les calculs de fractions.",
      85: "Multiplier par 85 utilise la relation 5×17. Si les deux tables sont connues, multiplier par 85 est facile. La stratégie 85=80+5 ou 90-5 est également très pratique. Le modèle du 5 (se termine par 5 ou 0) facilite le calcul. Le 85 est divisible à la fois par 5 et par 17.",
      86: "Multiplier par 86 utilise la relation 2×43. Si vous connaissez la table de 43, vous pouvez doubler chaque résultat pour trouver la table de 86. Penser à 86 comme 90-4 ou 85+1 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 86 est divisible à la fois par 2 et par 43.",
      87: "Multiplier par 87 utilise la relation 3×29. Tripler la table de 29 ou multiplier la table de 3 par 29 fonctionne. Penser à 87 comme 90-3 ou 85+2 facilite le calcul. Comme 87=3×29, il est divisible à la fois par 3 et par 29.",
      88: "Multiplier par 88 utilise la relation 8×11 ou la relation 4×22. Le 88 est un nombre repdigit (répétition de 8). Il peut aussi s'exprimer comme 88=2×44. Penser à 88 comme 90-2 ou 80+8 facilite le calcul mental. Comme c'est un nombre pair, tous ses multiples sont également pairs.",
      89: "Multiplier par 89 nécessite des stratégies spéciales en raison de ses propriétés de nombre premier. La stratégie la plus facile est de penser à 89 comme 90-1 : multipliez un nombre par 90 et soustrayez-lui le nombre lui-même. Le 89 est un nombre premier et est divisible uniquement par 1 et 89. Apprendre la table de 89 établit une base parfaite pour les calculs proches de 90.",
      90: "Multiplier par 90 utilise la relation 9×10 et est très utile. Pour multiplier un nombre par 90, vous pouvez le multiplier par 9 et ajouter un zéro à la fin. Il y a de nombreuses relations de facteurs comme 90=2×45=3×30=5×18=6×15. Le 90 degrés est un angle droit, très impartant en géométrie. Cette table renforce la table de 9.",
      91: "Multiplier par 91 utilise la relation 7×13. Si les deux tables sont connues, multiplier par 91 est facile. Que 91=7×13 est impartant pour comprendre le produit de nombres premiers. Penser à 91 comme 90+1 facilite le calcul mental. Il est divisible à la fois par 7 et par 13.",
      92: "Multiplier par 92 utilise la relation 4×23 ou la relation 2×46. Quadrupler la table de 23 fonctionne. Penser à 92 comme 90+2 ou 100-8 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 92 est divisible à la fois par 4 et par 23.",
      93: "Multiplier par 93 utilise la relation 3×31. Tripler la table de 31 ou multiplier la table de 3 par 31 fonctionne. Penser à 93 comme 90+3 ou 100-7 facilite le calcul. Comme 93=3×31, il est divisible à la fois par 3 et par 31.",
      94: "Multiplier par 94 utilise la relation 2×47. Si vous connaissez la table de 47, vous pouvez doubler chaque résultat pour trouver la table de 94. Penser à 94 comme 100-6 ou 90+4 facilite le calcul. Comme c'est un nombre pair, tous ses multiples sont également pairs. Le 94 est divisible à la fois par 2 et par 47.",
      95: "Multiplier par 95 utilise la relation 5×19. Si les deux tables sont connues, multiplier par 95 est facile. La stratégie 95=100-5 est très pratique. Le modèle du 5 (se termine par 5 ou 0) facilite le calcul. Le 95 est divisible à la fois par 5 et par 19. Il est utile dans les calculs de pourcentage (95%).",
      96: "Multiplier par 96 est l'une des tables les plus polyvalentes. Comme 96=8×12=6×16=4×24=3×32=2×48, il peut être calculé de nombreuses façons différentes. Que 96=2⁵×3 est impartant en termes de puissances de 2. Avoir de nombreux diviseurs le rend utile dans les calculs de fractions.",
      97: "Multiplier par 97 nécessite des stratégies spéciales en raison de ses propriétés de nombre premier. La stratégie la plus facile est de penser à 97 comme 100-3 : multipliez un nombre par 100 et soustrayez-lui 3 fois le nombre. Le 97 est un nombre premier et est divisible uniquement par 1 et 97. Être le nombre premier le plus proche de 100 facilite beaucoup le calcul mental.",
      98: "Multiplier par 98 utilise la relation 2×49. Si vous connaissez la table de 49, vous pouvez doubler chaque résultat pour trouver la table de 98. La relation 98=2×7² est intéressante. Penser à 98 comme 100-2 est la stratégie la plus facile. Comme c'est un nombre pair, tous ses multiples sont également pairs.",
      99: "Multiplier par 99 utilise la relation 9×11. Le 99 est un nombre repdigit (répétition de 9). Penser à 99 comme 100-1 est la stratégie la plus facile : multipliez un nombre par 100 et soustrayez-lui le nombre lui-même. Comme 99=9×11, il est divisible à la fois par 9 et par 11. C'est l'une des tables les plus faciles pour le calcul mental.",
      100: "Multiplier par 100 est la table la plus facile ! Pour multiplier un nombre par 100, ajoutez simplement deux zéros à la fin. Que 100=10×10=10² est fondamental pour comprendre le système décimal. Le 100 est la base des calculs de pourcentage (100%=complet) et du système décimal. Il a une importance critique pour les devises, les unités de mesure et les mathématiques quotidiennes.",
    }

const importance: { [key: number]: string } = {
      1: "La table de 1 est la base de toutes les opérations de multiplication. Elle enseigne aux étudiants que les nombres ont une identité : lorsqu'ils sont multipliés par 1, ils restent eux-mêmes. Ce concept est crucial pour comprendre les propriétés algébriques ultérieures. Bien que cela semble simple, apprendre cette table génère de la confiance et établit le modèle selon lequel la multiplication est ordonnée et prévisible.",
      2: "La table de 2 est généralement la première vraie table de multiplication que les étudiants apprennent, et pour une bonne raison. Doubler est un concept naturel que les enfants rencontrent quotidiennement. Apprendre cette table rend le calcul mental beaucoup plus rapide et prépare les étudiants aux nombres pairs, aux fractions (moitiés) et à la division de base. De nombreux étudiants la trouvent la table la plus facile, ce qui génère de la confiance pour les tables plus difficiles.",
      3: "La table de 3 comble l'écart entre les tables faciles et difficiles. Elle exige que les étudiants aillent au-delà du simple doublement et commencent à reconnaître de nouveaux modèles. Cette table se retrouve constamment dans des contextes du monde réel comme compter par trois, comprendre les formes triangulaires et travailler avec le temps (trois périodes par jour). Les étudiants qui apprennent la table de 3 démontrent qu'ils peuvent faire du comptage abstrait.",
      4: "Apprendre la table de 4 renforce la compréhension des nombres pairs et de la pensée géométrique des étudiants. Comme 4 est le double de 2, les étudiants peuvent utiliser la table de 2 comme tremplin, ce qui enseigne l'efficacité mathématique. Cette table est nécessaire pour comprendre les carrés, les calculs d'aire et les divisions par quarts. Elle est également utilisée fréquemment dans des situations quotidiennes comme compter les pieds de chaises ou les roues de voitures.",
      5: "La table de 5 est l'une des plus pratiques et riches en modèles. Les étudiants l'adorent car chaque réponse se termine par 0 ou 5, la rendant extrêmement prévisible. Cette table se connecte directement avec l'argent (compter par cinq), dire l'heure (intervalles de 5 minutes) et les systèmes de mesure. Apprendre la table de 5 donne confiance aux étudiants et montre que les mathématiques ont des modèles beaux et cohérents.",
      6: "Apprendre la table de 6 permet aux étudiants de passer à des multiplications plus complexes. Que 6 soit un multiple à la fois de 2 et de 3 montre aux étudiants la propriété distributive de la multiplication. Cette table se retrouve constamment dans la vie quotidienne : compter les boîtes d'œufs, les jeux de dés, les packs de six. Apprendre la table de 6 donne aux étudiants la confiance pour travailler avec de plus grands nombres.",
      7: "La table de 7 met vraiment à l'épreuve les compétences de mémorisation et de reconnaissance de modèles des étudiants. Comme 7 est un nombre premier, il ne peut pas être facilement dérivé d'autres tables, ce qui en fait une expérience d'apprentissage difficile mais gratifiante. Apprendre la table de 7 donne aux étudiants l'oppartunité de surmonter des défis et de développer de nouvelles stratégies. Elle est utilisée dans de nombreux endroits, depuis compter les jours de la semaine jusqu'aux calculs de calendrier.",
      8: "Apprendre la table de 8 aide les étudiants à renforcer les stratégies de doublement. Comme 8 = 2 × 2 × 2, les étudiants peuvent apprendre la table de 8 en utilisant les tables de 2 et 4. Cette table est importante dans les calculs d'aire (figures à 8 côtés), la théorie musicale (octaves) et l'informatique (8 bits = 1 octet). Apprendre la table de 8 développe des compétences de pensée mathématique.",
      9: "La table de 9 a l'un des modèles mathématiques les plus fascinants. La règle d'addition des chiffres et l'astuce des doigts montrent aux étudiants le côté magique des mathématiques. Apprendre la table de 9 n'est pas seulement de la mémorisation, elle enseigne la reconnaissance de modèles et la compréhension des relations mathématiques. Cette table est parfaite pour développer des compétences de calcul mental et construire la confiance mathématique.",
      10: "La table de 10 est fondamentale pour enseigner le concept de valeur positionnelle. Lorsque les étudiants apprennent à multiplier par 10, ils commencent à comprendre comment fonctionne notre système décimal. Cette table est vitale pour les calculs d'argent, les conversions entre unités de mesure et le travail avec de grands nombres. Apprendre la table de 10 crée une base solide pour comprendre toutes les autres tables de multiplication et améliore énormément les compétences de calcul mental.",
      11: "La table de 11 est parfaite pour développer des compétences de reconnaissance de modèles. Le modèle de répétition qui apparaît lors de la multiplication avec des nombres à un chiffre (11×4=44) montre aux étudiants la beauté des mathématiques. Apprendre la table de 11 développe des stratégies de calcul mental et augmente la capacité de reconnaître des modèles numériques. Cette table génère de la confiance pour travailler avec de grands nombres.",
      12: "La table de 12 est l'une des plus utilisées dans la vie quotidienne. Le 12 est utilisé dans de nombreux domaines comme compter les douzaines, lire l'horloge et la planification annuelle. Que le 12 ait de nombreux diviseurs (1,2,3,4,6,12) le rend idéal pour comprendre les fractions et les proportions. Apprendre cette table améliore considérablement les compétences mathématiques pratiques.",
      13: "La table de 13 développe la résilience mathématique des étudiants. Étant un nombre premier, il n'y a pas de raccourcis faciles, ce qui nécessite une véritable compréhension. Apprendre la table de 13 renforce les compétences arithmétiques mentales et enseigne à penser aux nombres de différentes manières (stratégie de décomposition 10+3).",
      14: "La table de 14 aide à renforcer la table de 7. La relation 14=2×7 montre aux étudiants la propriété distributive de la multiplication. Elle est nécessaire pour calculer les périodes hebdomadaires et bihebdomadaires. Cette table approfondit la compréhension des propriétés des nombres pairs et des stratégies de doublement.",
      15: "La table de 15 combine à la fois la table de 3 et celle de 5, ce qui est excellent pour comprendre les connexions mathématiques. Elle est vitale pour les calculs de quart d'heure (15 minutes). Apprendre la table de 15 enseigne à comprendre les règles de divisibilité et à voir les relations entre les nombres. Elle est utilisée fréquemment dans les calculs de pourcentage (comme un pourboire de 15%).",
      16: "La table de 16 est parfaite pour comprendre les systèmes binaires et les nombres exponentiels. La relation 2⁴=16 montre la puissance des exposants. Elle a une importance critique en informatique (16 bits, système hexadécimal). Cette table développe la compréhension des stratégies de doublement multiple et des séquences géométriques.",
      17: "La table de 17 est un excellent outil pour développer des stratégies de calcul mental. Être un nombre premier oblige les étudiants à trouver des méthodes de calcul créatives (stratégies 20-3 ou 10+7). Cette table développe des compétences de résolution de problèmes et de flexibilité avec les nombres.",
      18: "La table de 18 montre la richesse des relations mathématiques. Que 18=2×9=3×6 enseigne à comprendre différentes combinaisons de facteurs. Elle a une importance culturelle comme âge de la majorité. Cette table enseigne à aborder un problème avec plusieurs stratégies et à choisir la méthode la plus efficace.",
      19: "La table de 19 maximise les compétences de calcul mental. La stratégie '20-1' enseigne aux étudiants à utiliser des nombres complémentaires. Être un nombre premier met l'accent sur la compréhension réelle plutôt que sur la reconnaissance de modèles. Cette table développe la capacité de diviser des calculs complexes en étapes simples.",
      20: "La table de 20 est critique pour renforcer le système de valeur positionnelle et travailler confortablement avec de grands nombres. La relation 20=2×10 approfondit la compréhension du système décimal. Elle est utilisée constamment dans les calculs d'argent (billets de 20) et les mesures. Cette table forme la base pour les calculs de pourcentage (remise de 20%).",
      21: "La table de 21 est parfaite pour comprendre la relation de factorisation 3×7. Cette table montre aux étudiants qu'un nombre peut avoir plus d'un facteur. Le 21 a une importance sociale comme âge pour les transactions légales et la majorité. Apprendre cette table approfondit la compréhension des relations entre facteurs et multiples.",
      22: "La table de 22 aide à renforcer la table de 11. La relation 22=2×11 renforce les stratégies de doublement. Elle est utilisée dans les sparts (équipe de football) et le comptage quotidien. Cette table développe la compréhension des propriétés des nombres pairs et des relations mathématiques.",
      23: "La table de 23 développe des compétences pour travailler avec des nombres premiers. Comme elle ne peut pas être dérivée d'autres tables, les étudiants doivent développer de nouvelles stratégies. Le 23 est un nombre impartant en biologie (paires de chromosomes). Apprendre cette table augmente la flexibilité mentale et les capacités de résolution de problèmes.",
      24: "La table de 24 est l'une des plus utiles dans la vie quotidienne. Elle se trouve constamment en raison de la relation jour-heure (24 heures). Que le 24 ait de nombreux diviseurs (1,2,3,4,6,8,12,24) le rend idéal pour les fractions et les proportions. Cette table développe des compétences de gestion du temps et de planification.",
      25: "La table de 25 est fondamentale pour comprendre les nombres carrés (5²). Elle a un rôle central dans les systèmes monétaires (25 centimes). Le modèle régulier du 25 (25,50,75,00) facilite beaucoup les calculs. Cette table est utilisée fréquemment dans les calculs de pourcentage (25%=1/4) et les fractions.",
      26: "La table de 26 aide à renforcer la table de 13. Elle est importante dans les systèmes alphabétiques (26 lettres). La relation 26=2×13 montre la connexion entre nombres premiers et pairs. Apprendre cette table développe la capacité de voir les relations mathématiques.",
      27: "La table de 27 est critique pour comprendre les nombres exponentiels (3³). Elle est importante en géométrie (cube 3×3×3 dans l'espace 3D) et les calculs de volume. La relation 27=3×9 renforce la connexion entre les tables de 3 et 9. Cette table forme une base dans la pensée mathématique et les nombres exponentiels.",
      28: "La table de 28 est importante pour la connaissance du calendrier (mois de février). Que le 28 soit un nombre parfait (somme de diviseurs égale à lui-même) montre des propriétés mathématiques spéciales. La relation 28=4×7 approfondit la compréhension de la factorisation. Cette table est utilisée dans les calculs de temps et la planification hebdomadaire.",
      29: "La table de 29 est parfaite pour perfectionner les stratégies de nombres premiers. La relation 30-1 enseigne à utiliser des nombres complémentaires. Elle est nécessaire pour la connaissance du calendrier (février en année bissextile). Apprendre cette table maximise les compétences de calcul mental.",
      30: "La table de 30 est le pont entre le système décimal et la multiplication. La relation 30=3×10 renforce la compréhension de la valeur positionnelle. Elle est utilisée constamment dans le temps (demi-heure), le calendrier (jours du mois) et les mesures d'angle (30°). Cette table forme la base des calculs de pourcentage (remise de 30%) et des mathématiques pratiques.",
      31: "Multiplier par 31 est critique pour la connaissance du calendrier. Comme la majorité des mois ont 31 jours, il est utilisé constamment dans les calculs de date et de temps. Comme 31 est un nombre premier, il est parfait pour développer des stratégies de calcul mental. La stratégie 30+1 enseigne à utiliser des nombres complémentaires et fournit des compétences dans les calculs de grands nombres.",
      32: "Multiplier par 32 est impartant pour comprendre les nombres exponentiels (2⁵) et les systèmes binaires. Comme l'architecture 32 bits est courante en informatique, elle a une importance pratique à l'ère technologique. Elle est parfaite pour perfectionner les chaînes de doublement. Elle est utilisée dans les conversions de température (Fahrenheit).",
      33: "Multiplier par 33 renforce les relations mathématiques en combinant les tables de 3 et 11. La propriété repdigit (33, 66, 99...) facilite la reconnaissance de modèles. La relation 33=3×11 approfondit la compréhension des connexions entre facteurs et multiples. Cette table enseigne des stratégies de multiplication multiple.",
      34: "Multiplier par 34 aide à renforcer la table de 17. La relation 34=2×17 montre la connexion entre nombres premiers et pairs. Cette table développe la flexibilité mentalee et des méthodes de calcul alternatives (35-1, 30+4). Elle renforce les propriétés des nombres pairs et les compétences de doublement.",
      35: "Multiplier par 35 développe des compétences de factorisation comme combinaison des tables de 5 et 7. La relation 5×7 renforce les deux tables. Elle est utilisée dans les calculs de temps (35 minutes) et les mathématiques quotidiennes. Cette table crée des modèles reconnaissables avec le modèle du 5 (dernier chiffre 5 ou 0).",
      36: "Multiplier par 36 est l'une des tables les plus utiles. Que 36=6² est critique pour comprendre les nombres carrés. Avoir de nombreux diviseurs (1,2,3,4,6,9,12,18,36) le rend idéal pour les fractions et les proportions. Il est utilisé fréquemment dans le système de douzaines (3 douzaines) et les mesures d'angles (un dixième de 360°).",
      37: "Multiplier par 37 perfectionne les propriétés des nombres premiers et les stratégies de calcul mental. Des relations spéciales comme 37×3=111 fournissent une compréhension profonde des modèles numériques. Des stratégies comme 40-3 ou 35+2 développent des compétences créatives de résolution de problèmes. Cette table encourage la curiosité mathématique et l'esprit de découverte.",
      38: "Multiplier par 38 aide à renforcer la table de 19. La relation 38=2×19 combine des stratégies de doublement et de nombres premiers. L'approche 40-2 enseigne à utiliser des nombres complémentaires. Elle a une importance pratique dans le contexte de la santé (température corparelle).",
      39: "Multiplier par 39 renforce les connexions mathématiques en combinant les tables de 3 et 13. La stratégie 40-1 enseigne à calculer rapidement en utilisant des nombres ronds. Cette table développe des compétences de factorisation multiple (3×13) et fournit de la flexibilité mentale.",
      40: "La table de 40 est parfaite pour comprendre profondément le système décimal. La relation 40=4×10 montre la connexion entre valeur positionnelle et multiplication. Elle est beaucoup utilisée dans la vie quotidienne en raison des heures de travail (semaine de 40 heures) et des normes sociales (40 ans). Cette table forme une base pour les grands nombres et les calculs de pourcentage.",
      41: "La table de 41 amène les stratégies de nombres premiers à un niveau avancé. L'approche 40+1 fournit une maîtrise dans l'utilisation de nombres complémentaires. Étant un nombre premier, elle nécessite de la flexibilité mentale et une résolution créative de problèmes. Cette table développe la capacité de calculer rapidement avec de grands nombres.",
      42: "La table de 42 perfectionne les compétences de factorisation. Les relations 42=6×7=2×21=3×14 enseignent à voir les connexions mathématiques. Comme elle combine les tables de 6 et 7, elle renforce les deux. Elle est mémorable en raison de références de la culture populaire (Le Guide du voyageur galactique).",
      43: "La table de 43 développe les propriétés des nombres premiers et les stratégies de calcul mental. Des approches alternatives comme 40+3 ou 45-2 fournissent de la flexibilité dans la pensée mathématique. Cette table augmente la capacité de travailler de manière créative avec les nombres et enrichit les stratégies de résolution de problèmes.",
      44: "La table de 44 est parfaite pour renforcer la table de 11. La relation 44=4×11 développe des compétences de multiplication multiple. Le modèle similaire à repdigit (44, 88) facilite la reconnaissance visuelle. Elle approfondit la compréhension des propriétés des nombres pairs et d'être multiple de quatre.",
      45: "La table de 45 renforce les relations mathématiques en combinant les tables de 5 et 9. Elle est utilisée fréquemment en géométrie (angle de 45°) et dans les calculs de temps (trois quarts d'heure). La relation 5×9 renforce à la fois la table de 5 et celle de 9. Cette table est très utile pour les mathématiques pratiques et les calculs quotidiens.",
      46: "La table de 46 aide à renforcer la table de 23. La relation 46=2×23 combine des stratégies de doublement et de nombres premiers. C'est un nombre impartant en biologie (46 chromosomes). Cette table développe les propriétés des nombres pairs et les calculs avec de grands nombres.",
      47: "La table de 47 maximise les stratégies de nombres premiers. L'approche 50-3 perfectionne la stratégie de soustraire de nombres ronds. En raison de propriétés premières, elle nécessite de la flexibilité mentale et des méthodes de solution alternatives. Cette table fournit des compétences avancées de calcul mental.",
      48: "La table de 48 est l'une des plus polyvalentes. Avoir de nombreux diviseurs (1,2,3,4,6,8,12,16,24,48) le rend idéal pour les fractions et les proportions. Il est utilisé dans le système de douzaines (4 douzaines) et les calculs de temps (48 heures=2 jours). Les relations de facteurs multiples approfondissent la compréhension des connexions mathématiques.",
      49: "La table de 49 est critique pour comprendre les nombres carrés (7²). Elle nécessite de connaître parfaitement la table de 7 et la renforce. La stratégie 50-1 enseigne le calcul rapide en utilisant des nombres ronds. Elle est importante en géométrie et dans les calculs de surface en raison de propriétés carrées.",
      50: "La table de 50 forme la base des calculs de pourcentage (50%=1/2). La relation 5×10 combine le système décimal et la multiplication. Elle est directement connectée avec le concept de moitié (½). Elle est utilisée constamment dans les systèmes monétaires (50 centimes, 50 euros), les mesures de temps et les mathématiques quotidiennes. Cette table améliore considérablement les compétences de calcul pratique.",
      51: "la table de 51 développe la capacité de travailler avec des nombres proches a 50. La stratégie 50+1 renforce l'utilisation de nombres complémentaires. la relation 3×17 renforce les comp\u00e9tences de factorisation. A une importance pratique dans le contexte de jeux de cartes (52 cartes). cette table enseigne à calculer avec de petites déviations de nombres ronds.",
      52: "la table de 52 est critique pour les calculs de temps et de calendrier. En raison du nombre de semaines dans une année (52 semaines), est utilis\u00e9 constamment en planification et calculs annuels. la relation 4×13 renforce \u00e0 la fois la table de 4 et celle de 13. La jeu de cartes (52 cartes) fournit un contexte à la pensée mathématique. cette table est très importante pour les mathématiques de la vie pratique.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      53: "La table de 53 amène les stratégies de nombres premiers à un niveau avancé. L'approche 50+3 permet de développer la flexibilité mentale grâce à d'autres méthodes de calcul. En raison de ses propriétés de nombre premier, elle nécessite une résolution créative des problèmes. Cette table augmente la capacité à travailler avec de grands nombres premiers et approfondit la pensée mathématique.",
      54: "la table de 54 perfectionne les comp\u00e9tences de factorisation multiple. Les relations 54=6×9=2×27=3×18 enseignent à voir des connexions mathématiques. Comme elle combine les tables de 6 et 9, renforce les deux. Avoir de nombreux diviseurs (1,2,3,6,9,18,27,54) le rend id\u00e9al pour les fractions et proportions. cette table encourage la pensée mathématique flexible.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      55: "La table de 55 renforce les relations mathématiques en combinant les tables de 5 et de 11. La propriété de nombre triangulaire (1+2+...+10=55) approfondit la compréhension des modèles mathématiques. La relation 5×11 renforce les deux tables à la fois. Cette table relie ainsi deux grandes familles de modèles numériques et de formules d'addition.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      56: "La table de 56 renforce à la fois la table de 7 et celle de 8. 7×8=56 est l'un des faits de multiplication les plus souvent confondus, et apprendre cette table permet de le consolider. Les alternatives comme 4×14=2×28 enseignent à utiliser plusieurs stratégies. Cette table est utile dans les calculs de la vie quotidienne et offre une bonne maîtrise des multiplications difficiles.",
      57: "la table de 57 renforce les connexions mathématiques en combinant les tables de 3 et 19. La stratégie 60-3 perfectionne la capacit\u00e9 de soustraire à partir de nombres ronds. la relation 3×19 combine des stratégies de nombres premiers et non premiers. cette table d\u00e9veloppe le calcul mental avec de grands nombres de niveau moyen.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      58: "La table de 58 aide à renforcer la table de 29. La relation 58=2×29 combine les stratégies de doublement et de nombres premiers. L'approche 60-2 enseigne la stratégie consistant à se rapprocher d'un nombre rond. Cette table constitue une bonne base pour comprendre les propriétés des nombres pairs et les calculs proches de 60.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      59: "La table de 59 pousse les stratégies de nombres premiers à leur maximum. L'approche 60-1 permet un calcul rapide en utilisant des nombres ronds. En raison de ses propriétés de nombre premier, elle nécessite de la flexibilité mentale et des méthodes de résolution créatives. Elle a une utilité pratique dans le contexte du temps (59 minutes, 59 secondes). Cette table développe des compétences avancées de calcul mental.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      60: "La table de 60 forme la base des calculs de temps (60 minutes = 1 heure, 60 secondes = 1 minute). La relation 6×10 combine le système décimal et la multiplication. Ayant de nombreux diviseurs (1,2,3,4,5,6,10,12,15,20,30,60), elle est idéale pour les fractions et les proportions. Elle a aussi une importance géométrique dans les mesures d'angles (360°÷6=60°). Cette table est l'une des plus utilisées dans la vie quotidienne.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      61: "La table de 61 amène les stratégies de nombres premiers à un niveau avancé. L'approche 60+1 permet de l'associer aux unités de temps (61e minute, 61e seconde). En raison de ses propriétés de nombre premier, elle nécessite de la flexibilité mentale et une résolution créative des problèmes. Cette table développe la capacité à calculer rapidement avec des nombres supérieurs à 60.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      62: "La table de 62 aide à renforcer la table de 31. La relation 62=2×31 combine les stratégies de doublement et de nombres premiers. L'approche 60+2 enseigne la stratégie consistant à calculer près d'un nombre rond. Cette table constitue une bonne base pour comprendre les propriétés des nombres pairs et les calculs après 60.",
      63: "la table de 63 renforce \u00e0 la fois la table de 7 et celle de 9 en les combinant. 7×9=63 est une paire de multiplication importante. L'alternative 3×21 enseigne à utiliser de multiples stratégies. Être divisible à la fois par 7 que par 9 la rend utile pour les fractions et proportions. cette table approfondit la compréhension des relations de facteurs multiples.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      64: "La table de 64 est essentielle pour comprendre les puissances de 2 (nombres exponentiels). Les relations 64=2⁶=8² renforcent à la fois les exposants et les nombres carrés. Elle a une importance technologique en informatique en raison de l'architecture 64 bits. L'échiquier (8×8=64 cases) offre une application géométrique concrète. Cette table est fondamentale pour comprendre les nombres exponentiels et le système binaire.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      65: "La table de 65 renforce les relations mathématiques en combinant les tables de 5 et de 13. La relation 5×13 renforce les deux tables. Elle a une importance pratique dans le contexte social, 65 ans étant traditionnellement l'âge de la retraite dans de nombreux pays. Le motif du 5 (se termine en 5 ou 0) facilite le calcul. Cette table est utile pour les mathématiques de la vie pratique.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      66: "La table de 66 renforce à la fois la table de 6 et celle de 11 en les combinant. La relation 6×11=66 crée un modèle proche d'un repdigit. L'alternative 2×33 offre une stratégie différente. Le fait d'être divisible à la fois par 6 et par 11 lui donne de multiples usages. Cette table développe la compréhension des relations entre facteurs multiples.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      67: "La table de 67 pousse les stratégies de nombres premiers à leur maximum. L'approche 70-3 perfectionne la stratégie consistant à soustraire à partir d'un nombre rond. En raison de ses propriétés de nombre premier, elle nécessite de la flexibilité mentale et d'autres méthodes de résolution. Cette table apporte des compétences avancées de calcul mental et une aisance avec les grands nombres premiers.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      68: "La table de 68 renforce les connexions mathématiques en combinant les tables de 4 et de 17. Les relations 4×17=2×34 enseignent à utiliser plusieurs stratégies. L'approche 70-2 développe la capacité à se rapprocher d'un nombre rond. Cette table constitue une bonne base pour comprendre les propriétés des nombres pairs et les calculs proches de 70.",
      69: "la table de 69 renforce \u00e0 la fois la table de 3 et celle de 23 en les combinant. La stratégie 70-1 enseigne à calculer rapidement en utilisant des nombres ronds. la relation 3×23 combine des stratégies de petits et grands facteurs. cette table fournit une compétence en calculs proches de 70.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      70: "La table de 70 est parfaite pour renforcer la table de 7. La relation 7×10 combine le système décimal et la table de 7. Elle a une importance sociale dans le contexte de l'espérance de vie (moyenne de 70 à 80 ans). Les alternatives 2×35=5×14 enseignent à utiliser plusieurs stratégies. Cette table est très utile pour le calcul pratique et la gestion du temps.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      71: "La table de 71 amène les stratégies de nombres premiers à un niveau avancé. L'approche 70+1 permet de maîtriser l'utilisation de nombres complémentaires. En raison de ses propriétés de nombre premier, elle nécessite de la flexibilité mentale et une résolution créative des problèmes. Cette table développe la capacité à calculer rapidement avec de grands nombres premiers et approfondit la pensée mathématique.",
      72: "la table de 72 est l'une des les plus polyvalentes. Avoir de nombreux diviseurs (1,2,3,4,6,8,9,12,18,24,36,72) le rend id\u00e9al pour les fractions et proportions. Les relations 8×9=6×12 enseignent des stratégies de facteurs multiples. A une importance pratique en calculs de temps (72 heures=3 jours). cette table perfectionne la flexibilité mathématique et l'utilisation de multiples stratégies.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      73: "La table de 73 amène les stratégies de nombres premiers à un niveau avancé. L'approche 70+3 développe des compétences de calcul mental. Le fait d'être le 21e nombre premier éveille la curiosité mathématique. En raison de ses propriétés de nombre premier, elle nécessite d'autres méthodes de résolution et une pensée créative. Cette table apporte des compétences avancées de calcul mental.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      74: "La table de 74 aide à renforcer la table de 37. La relation 74=2×37 combine les stratégies de doublement et de nombres premiers. L'approche 75-1 enseigne la stratégie consistant à se rapprocher d'un nombre rond. Cette table constitue une bonne base pour comprendre les propriétés des nombres pairs et les calculs proches de 75.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      75: "La table de 75 forme la base des calculs de pourcentage (75%=3/4). Les relations 3×25=5×15 enseignent à utiliser plusieurs stratégies. Elle est directement liée à la notion de trois quarts (¾). Le motif du 5 (se termine en 5 ou 0) facilite le calcul. Cette table est extrêmement importante pour les mathématiques pratiques et les calculs de pourcentage.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      76: "La table de 76 renforce les connexions mathématiques en combinant les tables de 4 et de 19. Les relations 4×19=2×38 enseignent des stratégies de multiplication multiple. Les approches 75+1 ou 80-4 offrent de la flexibilité. Cette table prépare aux calculs proches de 80 en s'appuyant sur les propriétés des nombres pairs.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      77: "La table de 77 renforce à la fois la table de 7 et celle de 11 en les combinant. La relation 7×11=77 crée un modèle proche d'un repdigit. Comme les deux tables sont d'une difficulté moyenne, la table de 77 est idéale pour les renforcer toutes les deux. Le fait d'être divisible à la fois par 7 et par 11 la rend utile pour les fractions.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      78: "La table de 78 développe des compétences de factorisation multiple. Les relations 78=2×39=3×26=6×13 offrent une grande flexibilité mathématique. L'approche 80-2 enseigne la stratégie consistant à soustraire à partir d'un nombre rond. Le fait d'avoir de nombreux diviseurs offre plusieurs méthodes de calcul. Cette table perfectionne l'utilisation de plusieurs stratégies à la fois.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      79: "La table de 79 pousse les stratégies de nombres premiers à leur maximum. L'approche 80-1 permet un calcul rapide en utilisant des nombres ronds. En raison de ses propriétés de nombre premier, elle nécessite de la flexibilité mentale et des méthodes de résolution créatives. Cette table apporte une compétence dans les calculs proches de 80 et développe des compétences mathématiques avancées.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      80: "La table de 80 est parfaite pour renforcer la table de 8. La relation 8×10 combine le système décimal et la table de 8. Les alternatives 2×40=4×20=5×16 enseignent à utiliser plusieurs stratégies. Elle a une importance sociale dans le contexte de l'espérance de vie (limite supérieure de 80 ans). Cette table améliore considérablement le calcul pratique et la capacité à travailler avec de grands nombres.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      81: "La table de 81 repose sur la relation 81=9² (neuf au carré), ou encore 81=3⁴ (trois à la puissance quatre). Comme 81 est un carré parfait, tous ses multiples partagent cette propriété avec d'autres nombres carrés. Penser à 81 comme 80+1 ou 9×9 facilite le calcul. Le 81 est divisible à la fois par 9 et par 27 (27=3³), et tous ses multiples se divisent uniformément par 9. Le 81 est aussi la somme des nombres impairs de 1 à 9 (1+3+5+7+9+11+13+15+17=81). Cette table développe la compréhension des modèles mathématiques.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      82: "La table de 82 utilise la relation 2×41. Si vous connaissez la table de 41, vous pouvez doubler chaque résultat pour trouver la table de 82. Penser à 82 comme 80+2 ou 85-3 facilite le calcul. Comme 82 est un nombre pair, tous ses multiples sont également pairs. Le 82 est divisible à la fois par 2 et par 41. Cette table établit une base pour les calculs après 80.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      83: "La table de 83 développe des stratégies de calcul mental en raison de ses propriétés de nombre premier. Les méthodes les plus pratiques consistent à penser 83 comme 80+3 ou 85-2. Le 83 est un nombre premier, divisible uniquement par 1 et par lui-même. Apprendre la table de 83 développe la capacité à calculer rapidement avec de grands nombres premiers.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      84: "La table de 84 est l'une des plus polyvalentes. Comme 84=12×7=6×14=4×21=3×28=2×42, elle peut se calculer de nombreuses façons différentes. Le 84 correspond aussi à 7 douzaines. Ayant de nombreux diviseurs (1,2,3,4,6,7,12,14,21,28,42,84), elle est extrêmement utile dans les calculs de fractions. Le 84 est également utile dans les calculs de temps (84 heures = 1 semaine et demie). Cette table perfectionne l'utilisation de plusieurs stratégies à la fois.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      85: "La table de 85 utilise la relation 5×17. Si les deux tables sont connues, multiplier par 85 devient facile. Penser à 85 comme 80+5 ou 90-5 facilite le calcul mental. Le motif du 5 (se termine en 5 ou 0) facilite également le calcul. Elle est fréquemment utilisée dans les calculs de pourcentage (85%=17/20). Cette table prépare aux calculs proches de 90.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      86: "La table de 86 utilise la relation 2×43. Si vous connaissez la table de 43, vous pouvez doubler chaque résultat pour trouver la table de 86. Penser à 86 comme 80+6 ou 90-4 facilite le calcul. Comme 86 est un nombre pair, tous ses multiples sont également pairs. Le 86 est divisible à la fois par 2 et par 43. Cette table établit une base pour les calculs proches de 90.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      87: "La table de 87 utilise la relation 3×29. Tripler la table de 29 ou multiplier la table de 3 par 29 fonctionne aussi bien. Penser à 87 comme 90-3 ou 85+2 facilite le calcul mental. Comme 87=3×29, elle est divisible à la fois par 3 et par 29. Cette table est utile pour les calculs proches de 90 et perfectionne la capacité à soustraire à partir d'un nombre rond.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      88: "La table de 88 utilise les relations 8×11=4×22=2×44 et peut se calculer de plusieurs façons. Le 88 présente un motif proche d'un repdigit (répétition du chiffre 8). Penser à 88 comme 90-2 ou 80+8 facilite le calcul. Comme 88 est un nombre pair, tous ses multiples sont également pairs. Le 88 a de nombreux diviseurs, et cette propriété de repdigit facilite la reconnaissance visuelle et la mémorisation.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      89: "La table de 89 nécessite des stratégies particulières en raison de ses propriétés de nombre premier. La méthode la plus simple consiste à penser 89 comme 90-1 : multipliez un nombre par 90, puis soustrayez ce nombre lui-même. Le 89 est un nombre premier, divisible uniquement par 1 et par lui-même. Étant très proche de 90, il se prête bien aux approximations. Cette table apporte une compétence dans les calculs proches de 90 et développe des compétences mathématiques avancées.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      90: "La table de 90 utilise la relation 9×10 et est très utile. Pour multiplier un nombre par 90, on peut le multiplier par 9 puis ajouter un zéro à la fin. Il existe aussi d'autres relations de facteurs comme 90=2×45=3×30=5×18=6×15. Un angle droit mesure 90°, ce qui donne à cette table une importance géométrique majeure. Elle est fréquemment utilisée dans les mesures d'angles et les pourcentages. Cette table renforce la table de 9 et est extrêmement importante pour les calculs pratiques et les mesures d'angles.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      91: "La table de 91 utilise la relation 7×13. Si les deux tables sont connues, multiplier par 91 devient facile. Penser à 91 comme 90+1 ou 100-9 facilite le calcul. Comme 91=7×13, elle est divisible à la fois par 7 et par 13. Cette table renforce la compréhension des relations entre facteurs. Comme les deux tables sont d'une difficulté moyenne, la table de 91 est idéale pour les consolider. C'est un concept fondamental pour les mathématiques avancées et la cryptographie.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      92: "La table de 92 utilise les relations 4×23=2×46 et peut se calculer de plusieurs façons. Penser à 92 comme 90+2 ou 100-8 facilite le calcul mental. Comme 92 est un nombre pair, tous ses multiples sont également pairs. Le 92 est divisible à la fois par 4 et par 23. Cette table prépare aux calculs proches de 100 et développe des compétences de calcul dans les années 90.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      93: "La table de 93 utilise la relation 3×31. Tripler la table de 31 ou multiplier la table de 3 par 31 fonctionne aussi bien. Penser à 93 comme 90+3 ou 100-7 facilite le calcul. Comme 93=3×31, elle est divisible à la fois par 3 et par 31. Cette table est utile pour les calculs proches de 100, offre de l'entraînement à la multiplication de grands nombres et développe la flexibilité mentale.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      94: "La table de 94 utilise la relation 2×47. Si vous connaissez la table de 47, vous pouvez doubler chaque résultat pour trouver la table de 94. Penser à 94 comme 100-6 ou 90+4 facilite le calcul. Comme 94 est un nombre pair, tous ses multiples sont également pairs. Le 94 est divisible à la fois par 2 et par 47. La stratégie 100-6 perfectionne la méthode consistant à soustraire à partir d'un nombre rond, et apporte des compétences essentielles pour le calcul mental avancé.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      95: "La table de 95 utilise la relation 5×19. Si les deux tables sont connues, multiplier par 95 devient facile. Penser à 95 comme 100-5 ou 90+5 facilite le calcul mental. Le motif du 5 (se termine en 5 ou 0) facilite le calcul. Elle est fréquemment utilisée dans les calculs de pourcentage (95%=19/20). La stratégie 100-5 est très pratique.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      96: "La table de 96 utilise les relations 32×3=16×6=12×8=4×24=2×48 et peut se calculer de nombreuses façons différentes. Penser à 96 comme 100-4 ou 90+6 facilite le calcul. Comme 96 est un nombre pair, tous ses multiples sont également pairs. Le 96 a de nombreux diviseurs (1,2,3,4,6,8,12,16,24,32,48,96), ce qui le rend utile dans les calculs de fractions. Il illustre la relation entre les puissances de 2 et de 3 (2⁵×3). Cette table est idéale pour la flexibilité mathématique et la théorie des nombres.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      97: "La table de 97 développe des stratégies de calcul mental en raison de ses propriétés de nombre premier. La stratégie la plus simple consiste à penser 97 comme 100-3 : multipliez un nombre par 100, puis soustrayez-lui trois fois ce nombre. Le 97 est un nombre premier, divisible uniquement par 1 et par lui-même. Apprendre la table de 97 facilite les calculs proches de 100. Être le nombre premier le plus proche de 100 rend le calcul mental particulièrement facile. Être premier est important pour la théorie des nombres et la cryptographie.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      98: "La table de 98 utilise les relations 2×49=7×14 et peut se calculer de plusieurs façons. La stratégie la plus simple consiste à penser 98 comme 100-2 : multipliez un nombre par 100, puis soustrayez-lui deux fois ce nombre. Comme 98 est un nombre pair, tous ses multiples sont également pairs. Le 98 est divisible à la fois par 2, par 7 et par 49. La relation 98=2×49=2×7² combine nombres carrés et stratégies de doublement. Cette table apporte une bonne maîtrise des calculs proches de 100.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      99: "La table de 99 utilise la relation 9×11. La stratégie la plus simple consiste à penser 99 comme 100-1 : multipliez un nombre par 100, puis soustrayez-lui ce nombre lui-même. Le 99 présente un motif proche d'un repdigit (répétition du chiffre 9). Comme 99=9×11, elle est divisible à la fois par 9 et par 11. Cette table est extrêmement utile pour les calculs proches de 100. La stratégie 100-1 est parfaite pour le calcul mental. La propriété de repdigit (99) approfondit la compréhension des modèles. Cette table est très importante pour les compétences de calcul pratique.",
      // Rewritten 2026-07-30 — replaced Spanish contamination
      100: "La table de 100 est la base du système décimal. Elle permet une compréhension parfaite de la notion de valeur positionnelle et fonde les calculs de pourcentage (100%=complet) ainsi que le système décimal. Elle a une importance majeure pour les unités monétaires, les unités de mesure et les mathématiques du quotidien. C'est l'une des tables les plus utiles et les plus importantes qui soient !",
    }

const patterns: { [key: number]: PatternItem[] } = {
      // Rewritten 2026-07-30 — replaced Spanish contamination
      1: [
        { title: "Modèle d'identité", description: "Tout nombre multiplié par 1 donne lui-même. Cela ne change jamais : 1×1=1, 1×2=2, 1×3=3, et ainsi de suite." },
        { title: "Suite prévisible", description: "Les résultats comptent simplement vers le haut : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. On écrit juste les nombres dans l'ordre." },
        { title: "Base de toutes les tables", description: "Chaque table de multiplication commence par la multiplication par 1, donc ce modèle apparaît dans toutes les tables." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      2: [
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 2 sont des nombres pairs. Les résultats se terminent toujours par 0, 2, 4, 6 ou 8." },
        { title: "Compter de deux en deux", description: "Chaque réponse est 2 de plus que la précédente : 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Modèle de doublement", description: "Chaque résultat est exactement le double du facteur : 2×5=10 est le double de 5." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      3: [
        { title: "Modèle de la somme des chiffres", description: "Additionnez les chiffres de chaque résultat : 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). Le motif 3-6-9 se répète !" },
        { title: "Compter de trois en trois", description: "Chaque réponse augmente de 3 : 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Alternance impair-pair", description: "Les résultats alternent : impair (3), pair (6), impair (9), pair (12), créant un rythme prévisible." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      4: [
        { title: "Toujours des nombres pairs", description: "Comme la table de 2, tous les multiples de 4 sont pairs et se terminent par 0, 2, 4, 6 ou 8." },
        { title: "Le double de la table de 2", description: "Chaque réponse est exactement le double de la réponse correspondante dans la table de 2 : 4×3=12 est le double de 2×3=6." },
        { title: "Compter de quatre en quatre", description: "Chaque réponse augmente de 4 : 4, 8, 12, 16, 20, 24, 28, 32, 36, 40." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      5: [
        { title: "Se termine par 0 ou 5", description: "Chaque multiple de 5 se termine par 0 ou 5. Cela rend le modèle immédiatement reconnaissable." },
        { title: "Modèle alternant", description: "Les résultats alternent entre se terminer par 5 (impair) et 0 (pair) : 5, 10, 15, 20, 25, 30..." },
        { title: "Moitié de la table de 10", description: "Chaque résultat est exactement la moitié de la table de 10 : 5×4=20 est la moitié de 10×4=40." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      6: [
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 6 sont pairs. Les résultats progressent ainsi : 6, 12, 18, 24, 30... et tous sont divisibles par 2." },
        { title: "Le double de la table de 3", description: "Chaque réponse est exactement le double de la table de 3 : 6×4=24 est le double de 3×4=12." },
        { title: "Motif du chiffre des unités", description: "Le chiffre des unités suit ce motif : 6, 2, 8, 4, 0 puis se répète. Ce motif aide à identifier la table de 6." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      7: [
        { title: "Modèle de la somme des chiffres", description: "Quand on additionne les chiffres des multiples de 7, un motif intéressant apparaît : 7, 14(1+4=5), 21(2+1=3), 28(2+8=10)..." },
        { title: "Répétition du chiffre des unités", description: "Le chiffre des unités suit cette séquence : 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 puis se répète." },
        { title: "Propriété de nombre premier", description: "7 est un nombre premier, donc il n'a pas de relation simple avec les autres tables. Cependant, mémoriser des paires spéciales comme 7×8=56 aide beaucoup." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      8: [
        { title: "Toujours pair et divisible par 4", description: "Tous les multiples de 8 sont à la fois pairs et divisibles par 4 : 8, 16, 24, 32, 40, 48..." },
        { title: "Le double de la table de 4", description: "Chaque réponse est exactement le double de la table de 4 : 8×5=40 est le double de 4×5=20." },
        { title: "Motif du chiffre des unités", description: "Le chiffre des unités suit ce motif : 8, 6, 4, 2, 0 puis se répète. Toujours un motif décroissant avec des nombres pairs." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      9: [
        { title: "La somme des chiffres donne toujours 9", description: "Additionnez les chiffres des multiples de 9 : 18(1+8=9), 27(2+7=9), 36(3+6=9), 45(4+5=9). Ce motif magique fonctionne toujours !" },
        { title: "Motif du chiffre des dizaines", description: "Pour 9×n, le chiffre des dizaines est toujours n-1 : 9×3=27 (dizaine : 2), 9×6=54 (dizaine : 5), 9×9=81 (dizaine : 8)." },
        { title: "Un de moins que 10", description: "La formule 9×n = (10×n) - n est très utile : 9×6 = 60-6 = 54, 9×8 = 80-8 = 72." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      10: [
        { title: "Ajoutez un zéro à la fin", description: "Quand on multiplie n'importe quel nombre par 10, on ajoute simplement un zéro à la fin : 7×10=70, 23×10=230." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 10 se terminent par 0 : 10, 20, 30, 40, 50... Ce motif ne change jamais." },
        { title: "Système de valeur positionnelle", description: "Multiplier par 10 décale chaque chiffre d'une position vers la gauche. C'est la base de notre système décimal : 25×10=250." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      11: [
        { title: "Modèle des chiffres doublés", description: "En multipliant par un nombre à un chiffre, le résultat est ce chiffre répété deux fois : 11×2=22, 11×3=33, 11×7=77, 11×9=99." },
        { title: "Astuce de la somme des chiffres", description: "Pour multiplier un nombre à deux chiffres par 11 : additionnez les chiffres et placez-les au milieu. 23×11 : 2_(2+3)_3 = 253." },
        { title: "Progression par onze", description: "Multiples de 11 : 11, 22, 33, 44, 55, 66, 77, 88, 99, 110. Les 9 premiers montrent le motif des chiffres doublés." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      12: [
        { title: "Modèle de la douzaine", description: "Multiples de 12 : 12, 24, 36, 48, 60, 72, 84, 96, 108, 120. Chacun montre une augmentation d'une douzaine." },
        { title: "Multiple à la fois de 3 et de 4", description: "Comme 12=3×4, tous les résultats sont divisibles à la fois par 3 et par 4. 12×5=60 : 60÷3=20, 60÷4=15." },
        { title: "Modèle de nombres pairs", description: "Tous les multiples de 12 sont pairs et divisibles par 4 : 12, 24, 36, 48..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      13: [
        { title: "Aucun raccourci — décomposer en 10+3", description: "13×n = (10×n) + (3×n). Exemple : 13×4 = 40 + 12 = 52. Cette stratégie facilite le calcul." },
        { title: "Cycle du chiffre des unités", description: "Chiffre des unités : 3, 6, 9, 2, 5, 8, 1, 4, 7, 0 puis se répète. Le cycle se termine en exactement 10 étapes." },
        { title: "Comportement de nombre premier", description: "Comme 13 est premier, il est divisible uniquement par 1 et par 13. Cela demande des stratégies de mémorisation particulières." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      14: [
        { title: "Le double de la table de 7", description: "Comme 14=2×7, si vous connaissez la table de 7, doublez chaque résultat : 7×6=42, donc 14×6=84." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 14 sont pairs : 14, 28, 42, 56, 70, 84, 98, 112, 126, 140." },
        { title: "Modèle de deux semaines", description: "14 jours = 2 semaines. Les multiples de 14 sont utiles dans la planification hebdomadaire : 28 jours = 4 semaines." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      15: [
        { title: "Se termine par 0 ou 5", description: "Tous les multiples de 15 se terminent par 0 ou 5 : 15, 30, 45, 60, 75, 90, 105, 120, 135, 150." },
        { title: "Relation 3×5", description: "Comme 15=3×5, cette table est liée aux tables de 3 et de 5. 15×4=60 : on peut passer par 3×20=60 ou 5×12=60." },
        { title: "Multiples du quart d'heure", description: "15 minutes = un quart d'heure. 30 minutes = une demi-heure, 45 minutes = trois quarts, 60 minutes = 1 heure." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      16: [
        { title: "Puissance de 2", description: "16=2⁴ (2×2×2×2). Chaîne de doublement : 2→4→8→16. Chaque multiple conserve ce motif." },
        { title: "Le double de la table de 8", description: "Comme 16=2×8, si vous connaissez la table de 8, doublez chaque résultat : 8×3=24, donc 16×3=48." },
        { title: "Toujours pair et divisible par 8", description: "Tous les multiples de 16 sont pairs et divisibles par 4 et par 8 : 16, 32, 48, 64, 80..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      17: [
        { title: "Stratégie 20-3", description: "Pensez à 17 comme 20-3. 17×6 = (20×6) - (3×6) = 120 - 18 = 102." },
        { title: "Décomposition 10+7", description: "17×n = (10×n) + (7×n). Exemple : 17×4 = 40 + 28 = 68." },
        { title: "Singularité du nombre premier", description: "17 est premier, donc il n'a que des motifs qui lui sont propres. Chiffre des unités : 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      18: [
        { title: "Le double de la table de 9", description: "Comme 18=2×9, doublez la table de 9 : 9×5=45, donc 18×5=90." },
        { title: "Le triple de la table de 6", description: "Comme 18=3×6, triplez la table de 6 : 6×4=24, donc 18×4=72." },
        { title: "Toujours pair et divisible par 9", description: "Les multiples de 18 sont pairs et divisibles par 9. La somme des chiffres est un multiple de 9 : 18(1+8=9), 36(3+6=9), 54(5+4=9)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      19: [
        { title: "Stratégie 20-1", description: "Pensez à 19 comme 20-1. 19×6 = (20×6) - 6 = 120 - 6 = 114. Une méthode très pratique !" },
        { title: "Décomposition 10+9", description: "19×n = (10×n) + (9×n). Exemple : 19×3 = 30 + 27 = 57." },
        { title: "Motif de nombre premier", description: "Comme 19 est premier, il a des motifs particuliers. Chiffre des unités : 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (ordre décroissant)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      20: [
        { title: "Ajouter un zéro et doubler", description: "20=10×2. Pour multiplier par 20 : 7×10=70, puis 70×2=140." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 20 se terminent par 0 : 20, 40, 60, 80, 100, 120, 140, 160, 180, 200." },
        { title: "Dizaines paires", description: "20, 40, 60, 80, 100... Chacun augmente de 20. Ce sont les multiples pairs de 10." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      21: [
        { title: "Relation 3×7", description: "21=3×7. On peut utiliser les deux tables, du 3 et du 7 : 21×4 = 3×4×7 = 12×7 = 84." },
        { title: "Stratégie 20+1", description: "21×n = (20×n) + n. Exemple : 21×6 = 120 + 6 = 126. Très pratique !" },
        { title: "Cycle du chiffre des unités", description: "Chiffre des unités : 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 puis se répète. Un motif d'augmentation simple." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      22: [
        { title: "Le double de la table de 11", description: "22=2×11. Si vous connaissez la table de 11, doublez : 11×3=33, donc 22×3=66." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 22 sont pairs : 22, 44, 66, 88, 110, 132, 154, 176, 198, 220." },
        { title: "Modèle des chiffres doublés", description: "22×1=22, 22×2=44, 22×3=66, 22×4=88. Les 4 premiers montrent un motif de chiffres doublés." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      23: [
        { title: "Décomposition 20+3", description: "23×n = (20×n) + (3×n). Exemple : 23×5 = 100 + 15 = 115." },
        { title: "Stratégie 25-2", description: "23=25-2. Exemple : 23×4 = 100 - 8 = 92. Utile quand multiplier par 25 est plus facile." },
        { title: "Motif de nombre premier", description: "Comme 23 est premier, il a un motif particulier. Chiffre des unités : 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      24: [
        { title: "Relations de facteurs multiples", description: "24=2×12=3×8=4×6. Peut se calculer de plusieurs façons. 24×5 = 12×10 = 120." },
        { title: "Toujours pair et divisible par 4", description: "Tous les multiples de 24 sont pairs et divisibles par 3, 4, 6 et 8." },
        { title: "Relation avec les heures", description: "24 heures = 1 jour. 48 heures = 2 jours, 72 heures = 3 jours. Utile dans les calculs de temps." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      25: [
        { title: "Motif 25, 50, 75, 00", description: "Tous les multiples de 25 se terminent par 25, 50, 75 ou 00 — un motif très régulier et prévisible." },
        { title: "Relation au quart", description: "25 = 100÷4. Donc 25×4=100. Cette relation est très utile dans les calculs de pourcentages et de fractions." },
        { title: "Carré de 5", description: "25=5². Relation spéciale : 25×n = 5×5×n. Exemple : 25×8 = 5×40 = 200." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      26: [
        { title: "Le double de la table de 13", description: "26=2×13. Si vous connaissez la table de 13, doublez : 13×7=91, donc 26×7=182." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 26 sont pairs : 26, 52, 78, 104, 130, 156, 182, 208, 234, 260." },
        { title: "25+1 ou 30-4", description: "26×n = (25×n) + n ou (30×n) - (4×n). Exemple : 26×4 = 100+4 = 104." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      27: [
        { title: "Puissance de 3", description: "27=3³ (3×3×3). Relation de nombre cubique : 27, 54, 81, 108... (multiples de 3)." },
        { title: "Le triple de la table de 9", description: "27=3×9. Triplez la table de 9 : 9×4=36, donc 27×4=108." },
        { title: "Stratégie 30-3", description: "27=30-3. Exemple : 27×6 = 180-18 = 162. Une méthode de calcul facile." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      28: [
        { title: "4×7 ou 2×14", description: "28=4×7=2×14. Peut se calculer de plusieurs façons : 28×3 = 4×3×7 = 12×7 = 84." },
        { title: "Toujours pair et divisible par 4", description: "Tous les multiples de 28 sont pairs et divisibles par 4 et par 7 : 28, 56, 84, 112, 140..." },
        { title: "Relation avec la semaine", description: "28 jours = 4 semaines. Cette relation est utile dans les calculs de calendrier." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      29: [
        { title: "Stratégie 30-1", description: "29=30-1. 29×n = (30×n) - n. Exemple : 29×7 = 210-7 = 203. La méthode la plus efficace !" },
        { title: "Motif du chiffre des unités", description: "Chiffre des unités : 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 (ordre décroissant). Prévisible." },
        { title: "Propriété de nombre premier", description: "Comme 29 est premier, il n'a pas de relation simple avec d'autres facteurs. Il nécessite des stratégies mentales spécifiques." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      30: [
        { title: "Relation 3×10", description: "30=3×10. Pour multiplier par 30 : multipliez par 10, puis par 3. 7×30 = 70×3 = 210." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 30 se terminent par 0 : 30, 60, 90, 120, 150, 180, 210, 240, 270, 300." },
        { title: "Multiples triples des dizaines", description: "30, 60, 90, 120, 150... Chacun augmente de 30. Ce sont trois fois les dizaines." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      31: [
        { title: "Stratégie 30+1", description: "31=30+1. 31×n = (30×n) + n. Exemple : 31×7 = 210 + 7 = 217." },
        { title: "Motif de nombre premier", description: "Comme 31 est premier, il a un motif particulier. Chiffre des unités : 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Relation avec les jours du mois", description: "31 jours est la durée maximale d'un mois. 31, 62 (2 mois), 93 (3 mois), 124 (4 mois) — utile en calculs de calendrier." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      32: [
        { title: "Puissance de 2", description: "32=2⁵. Chaîne de doublement : 2→4→8→16→32. Tous les multiples conservent ce motif." },
        { title: "Le double de la table de 16", description: "32=2×16. Si vous connaissez la table de 16, doublez : 16×5=80, donc 32×5=160." },
        { title: "Toujours pair et divisible par 8", description: "Tous les multiples de 32 sont pairs et divisibles par 4, 8 et 16 : 32, 64, 96, 128..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      33: [
        { title: "Relation 3×11", description: "33=3×11. Triplez la table de 11 : 11×4=44, donc 33×4=132. Ou multipliez la table de 3 par 11." },
        { title: "Motif repdigit", description: "33×1=33, 33×2=66, 33×3=99. Les 3 premiers montrent des chiffres doublés. Puis 132, 165..." },
        { title: "Toujours divisible par 3", description: "Tous les multiples de 33 sont divisibles par 3 et par 11. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      34: [
        { title: "Le double de la table de 17", description: "34=2×17. Doublez la table de 17 : 17×6=102, donc 34×6=204." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 34 sont pairs : 34, 68, 102, 136, 170, 204, 238, 272, 306, 340." },
        { title: "35-1 ou 30+4", description: "34×n = (35×n) - n ou (30×n) + (4×n). Exemple : 34×5 = 175-5 = 170." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      35: [
        { title: "Relation 5×7", description: "35=5×7. On peut utiliser les deux tables, du 5 et du 7 : 35×4 = 5×4×7 = 20×7 = 140." },
        { title: "Se termine par 5 ou 0", description: "Tous les multiples de 35 se terminent par 5 ou 0 : 35, 70, 105, 140, 175, 210, 245, 280..." },
        { title: "Multiples de 7 par 5", description: "35, 70, 105, 140, 175... En multipliant les multiples de 7 par 5, ou les multiples de 5 par 7." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      36: [
        { title: "Carré de 6", description: "36=6². De plus, 36=4×9=3×12=2×18 — plusieurs relations de facteurs possibles." },
        { title: "De nombreux diviseurs", description: "36 a 9 diviseurs : 1, 2, 3, 4, 6, 9, 12, 18, 36. Cela le rend très utile pour les fractions." },
        { title: "Divisible par 9 et par 4", description: "Tous les multiples de 36 sont divisibles par 4 et par 9. La somme des chiffres est un multiple de 9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      37: [
        { title: "Stratégie 40-3", description: "37=40-3. 37×n = (40×n) - (3×n). Exemple : 37×6 = 240 - 18 = 222." },
        { title: "Relation magique avec 111", description: "37×3=111. Relation spéciale : 37×6=222, 37×9=333. Chaque multiple de 3 donne un résultat repdigit !" },
        { title: "Singularité du nombre premier", description: "Comme 37 est premier, il a des motifs particuliers. Les stratégies 35+2 ou 40-3 sont utiles." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      38: [
        { title: "Le double de la table de 19", description: "38=2×19. Doublez la table de 19 : 19×7=133, donc 38×7=266." },
        { title: "Stratégie 40-2", description: "38=40-2. 38×n = (40×n) - (2×n). Exemple : 38×5 = 200 - 10 = 190." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 38 sont pairs : 38, 76, 114, 152, 190, 228, 266, 304, 342, 380." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      39: [
        { title: "Relation 3×13", description: "39=3×13. Triplez la table de 13 : 13×4=52, donc 39×4=156." },
        { title: "Stratégie 40-1", description: "39=40-1. 39×n = (40×n) - n. Exemple : 39×7 = 280 - 7 = 273. Très pratique !" },
        { title: "Divisible par 3", description: "Tous les multiples de 39 sont divisibles par 3 et par 13. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      40: [
        { title: "Relation 4×10", description: "40=4×10. Pour multiplier par 40 : multipliez par 4, puis ajoutez un 0 à la fin. 7×40 : 7×4=28, puis 280." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 40 se terminent par 0 : 40, 80, 120, 160, 200, 240, 280, 320, 360, 400." },
        { title: "Quatre fois les dizaines", description: "40, 80, 120, 160, 200... Chacun augmente de 40. Ce sont quatre fois les dizaines." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      41: [
        { title: "Stratégie 40+1", description: "41=40+1. 41×n = (40×n) + n. Exemple : 41×6 = 240 + 6 = 246. La méthode la plus pratique !" },
        { title: "Propriétés du nombre premier", description: "Comme 41 est premier, il est divisible uniquement par 1 et par 41. Chiffre des unités : 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "45-4 ou 50-9", description: "Stratégies alternatives : 41×4 = 180-16 = 164. Ou 41×5 = 250-45 = 205." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      42: [
        { title: "Relation 6×7", description: "42=6×7. On peut utiliser les deux tables, du 6 et du 7 : 42×3 = 6×3×7 = 18×7 = 126." },
        { title: "2×21 ou 3×14", description: "42=2×21=3×14. Peut se calculer de plusieurs façons : 42×5 = 21×10 = 210." },
        { title: "Toujours divisible par 6", description: "Tous les multiples de 42 sont divisibles par 2, 3, 6 et 7 : 42, 84, 126, 168, 210..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      43: [
        { title: "40+3 ou 45-2", description: "43=40+3 ou 45-2. Exemple : 43×7 = 280+21 = 301 ou 315-14 = 301." },
        { title: "Motif de nombre premier", description: "Comme 43 est premier, il demande des stratégies particulières. Chiffre des unités : 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Stratégie 50-7", description: "Avec de grands nombres : 43×8 = 400-56 = 344. Soustraire à partir de 50 est une méthode alternative." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      44: [
        { title: "Quatre fois la table de 11", description: "44=4×11. Quadruplez la table de 11 : 11×6=66, donc 44×6=264." },
        { title: "Proche d'un repdigit", description: "44×1=44, 44×2=88. Les 2 premiers montrent des chiffres doublés. Puis 132, 176, 220..." },
        { title: "Toujours pair et divisible par 4", description: "Tous les multiples de 44 sont pairs et divisibles par 4 et par 11 : 44, 88, 132, 176, 220..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      45: [
        { title: "Relation 5×9", description: "45=5×9. On peut utiliser les deux tables, du 5 et du 9 : 45×4 = 5×4×9 = 20×9 = 180." },
        { title: "Se termine par 5 ou 0", description: "Tous les multiples de 45 se terminent par 5 ou 0 : 45, 90, 135, 180, 225, 270, 315, 360..." },
        { title: "Divisible par 9", description: "Tous les multiples de 45 sont divisibles par 9. La somme des chiffres est un multiple de 9 : 135 (1+3+5=9)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      46: [
        { title: "Le double de la table de 23", description: "46=2×23. Doublez la table de 23 : 23×7=161, donc 46×7=322." },
        { title: "45+1 ou 50-4", description: "46×n = (45×n) + n ou (50×n) - (4×n). Exemple : 46×5 = 225+5 = 230." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 46 sont pairs : 46, 92, 138, 184, 230, 276, 322, 368, 414, 460." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      47: [
        { title: "Stratégie 50-3", description: "47=50-3. 47×n = (50×n) - (3×n). Exemple : 47×6 = 300 - 18 = 282. La plus efficace !" },
        { title: "Alternative 45+2", description: "47=45+2. Exemple : 47×8 = 360 + 16 = 376. Utile si vous connaissez la table de 45." },
        { title: "Singularité du nombre premier", description: "Comme 47 est premier, il a des motifs particuliers. Chiffre des unités : 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      48: [
        { title: "Relations de facteurs multiples", description: "48=6×8=4×12=3×16=2×24. Peut se calculer de plusieurs façons : 48×5 = 12×20 = 240." },
        { title: "Pair et nombreux diviseurs", description: "Tous les multiples de 48 sont divisibles par 2, 3, 4, 6, 8 et 12." },
        { title: "Stratégie 50-2", description: "48=50-2. Exemple : 48×7 = 350 - 14 = 336 — soustraire à partir d'un nombre rond." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      49: [
        { title: "Carré de 7", description: "49=7². Utilisez la table de 7 : 49×3 = 7×7×3 = 7×21 = 147." },
        { title: "Stratégie 50-1", description: "49=50-1. 49×n = (50×n) - n. Exemple : 49×6 = 300 - 6 = 294. Très facile !" },
        { title: "Motif de nombre carré", description: "49, 98, 147, 196, 245... les multiples de 7 par 7, soit 7²×1, 7²×2, 7²×3..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      50: [
        { title: "Relation 5×10", description: "50=5×10. Pour multiplier par 50 : multipliez par 5, puis ajoutez un 0 à la fin. 8×50 : 8×5=40, puis 400." },
        { title: "Se termine par 0 ou 50", description: "Tous les multiples de 50 se terminent par 0 ou 50 : 50, 100, 150, 200, 250, 300, 350, 400..." },
        { title: "Moitié de 100", description: "50×n = (100×n)÷2. Exemple : 50×7 = 700÷2 = 350. Utile dans les calculs de pourcentages." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      51: [
        { title: "Stratégie 50+1", description: "51=50+1. 51×n = (50×n) + n. Exemple : 51×7 = 350 + 7 = 357. Très pratique !" },
        { title: "Relation 3×17", description: "51=3×17. Triplez la table de 17 : 17×6=102, donc 51×6=306." },
        { title: "Alternative 55-4", description: "51=55-4. Exemple : 51×5 = 275-20 = 255. Utile quand multiplier par 55 est plus facile." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      52: [
        { title: "Relation 4×13", description: "52=4×13. Quadruplez la table de 13 : 13×7=91, donc 52×7=364." },
        { title: "50+2 ou 2×26", description: "52×n = (50×n) + (2×n) ou doublez la table de 26. Exemple : 52×5 = 250+10 = 260." },
        { title: "Motif du nombre de semaines", description: "52 semaines = 1 an. 52, 104 (2 ans), 156 (3 ans)... utile en calculs de calendrier." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      53: [
        { title: "50+3 ou 55-2", description: "53=50+3 ou 55-2. Exemple : 53×6 = 300+18 = 318 ou 330-12 = 318." },
        { title: "Motif de nombre premier", description: "Comme 53 est premier, il demande des stratégies particulières. Chiffre des unités : 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Stratégie 60-7", description: "Avec de grands nombres : 53×8 = 480-56 = 424. Soustraire à partir de 60 est une méthode alternative." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      54: [
        { title: "Relation 6×9", description: "54=6×9. On peut utiliser les deux tables, du 6 et du 9 : 54×5 = 9×5×6 = 45×6 = 270." },
        { title: "2×27 ou 3×18", description: "54=2×27=3×18. Peut se calculer de plusieurs façons : 54×4 = 27×8 = 216." },
        { title: "Divisible par 9", description: "Tous les multiples de 54 sont divisibles par 9. La somme des chiffres est un multiple de 9 : 108 (1+0+8=9)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      55: [
        { title: "Relation 5×11", description: "55=5×11. On peut utiliser les deux tables, du 5 et du 11 : 55×4 = 11×4×5 = 44×5 = 220." },
        { title: "Se termine par 5 ou 0", description: "Tous les multiples de 55 se terminent par 5 ou 0 : 55, 110, 165, 220, 275, 330, 385, 440..." },
        { title: "Nombre triangulaire", description: "55 = 1+2+3+4+5+6+7+8+9+10. Cette propriété d'addition spéciale rend 55 mathématiquement intéressant." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      56: [
        { title: "Relation 7×8", description: "56=7×8. L'une des paires de multiplication les plus difficiles ! Apprendre cette table renforce à la fois celle de 7 et celle de 8." },
        { title: "4×14 ou 2×28", description: "56=4×14=2×28. Peut se calculer de plusieurs façons : 56×5 = 14×20 = 280." },
        { title: "Toujours pair et divisible par 7", description: "Tous les multiples de 56 sont pairs et divisibles par 4, 7 et 8 : 56, 112, 168, 224..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      57: [
        { title: "Relation 3×19", description: "57=3×19. Triplez la table de 19 : 19×7=133, donc 57×7=399." },
        { title: "Stratégie 60-3", description: "57=60-3. 57×n = (60×n) - (3×n). Exemple : 57×6 = 360 - 18 = 342. Très facile !" },
        { title: "Divisible par 3", description: "Tous les multiples de 57 sont divisibles par 3 et par 19. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      58: [
        { title: "Le double de la table de 29", description: "58=2×29. Doublez la table de 29 : 29×7=203, donc 58×7=406." },
        { title: "Stratégie 60-2", description: "58=60-2. 58×n = (60×n) - (2×n). Exemple : 58×6 = 360 - 12 = 348." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 58 sont pairs : 58, 116, 174, 232, 290, 348, 406, 464, 522, 580." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      59: [
        { title: "Stratégie 60-1", description: "59=60-1. 59×n = (60×n) - n. Exemple : 59×7 = 420 - 7 = 413. Parfait !" },
        { title: "Singularité du nombre premier", description: "Comme 59 est premier, il a des motifs particuliers. Chiffre des unités : 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternative 55+4", description: "59=55+4. Exemple : 59×8 = 440 + 32 = 472. Utile si vous connaissez la table de 55." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      60: [
        { title: "Relation 6×10", description: "60=6×10. Pour multiplier par 60 : multipliez par 6, puis ajoutez un 0 à la fin. 7×60 : 7×6=42, puis 420." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 60 se terminent par 0 : 60, 120, 180, 240, 300, 360, 420, 480, 540, 600." },
        { title: "Relations de facteurs multiples", description: "60=2×30=3×20=4×15=5×12=6×10 — de nombreuses façons de le calculer !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      61: [
        { title: "Stratégie 60+1", description: "61=60+1. 61×n = (60×n) + n. Exemple : 61×7 = 420 + 7 = 427. Très pratique !" },
        { title: "Propriétés du nombre premier", description: "Comme 61 est premier, il est divisible uniquement par 1 et par 61. Chiffre des unités : 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternative 65-4", description: "61=65-4. Exemple : 61×5 = 325-20 = 305. Utile quand multiplier par 65 est plus facile." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      62: [
        { title: "Le double de la table de 31", description: "62=2×31. Doublez la table de 31 : 31×7=217, donc 62×7=434." },
        { title: "Stratégie 60+2", description: "62=60+2. 62×n = (60×n) + (2×n). Exemple : 62×6 = 360 + 12 = 372." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 62 sont pairs : 62, 124, 186, 248, 310, 372, 434, 496, 558, 620." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      63: [
        { title: "Relation 7×9", description: "63=7×9. On peut utiliser les deux tables, du 7 et du 9 : 63×5 = 9×5×7 = 45×7 = 315." },
        { title: "Alternative 3×21", description: "63=3×21. Triplez la table de 21 : 21×4=84, donc 63×4=252." },
        { title: "Divisible par 7 et par 9", description: "Tous les multiples de 63 sont divisibles par 7 et par 9. La somme des chiffres est un multiple de 9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      64: [
        { title: "Carré de 8", description: "64=8×8=8². De plus, 64=2⁶. Chaîne de doublement : 2→4→8→16→32→64." },
        { title: "Sixième puissance de 2", description: "64=2⁶ — important pour l'architecture 64 bits en informatique, la base du système binaire." },
        { title: "Toujours pair et divisible par 8", description: "Tous les multiples de 64 sont pairs et divisibles par 4, 8, 16 et 32 : 64, 128, 192, 256..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      65: [
        { title: "Relation 5×13", description: "65=5×13. On peut utiliser les deux tables, du 5 et du 13 : 65×4 = 13×4×5 = 52×5 = 260." },
        { title: "Se termine par 5 ou 0", description: "Tous les multiples de 65 se terminent par 5 ou 0 : 65, 130, 195, 260, 325, 390, 455, 520..." },
        { title: "60+5 ou 70-5", description: "65×n = (60×n) + (5×n) ou (70×n) - (5×n). Exemple : 65×6 = 360+30 = 390." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      66: [
        { title: "Relation 6×11", description: "66=6×11. On peut utiliser les deux tables, du 6 et du 11 : 66×5 = 11×5×6 = 55×6 = 330." },
        { title: "Proche d'un repdigit", description: "66×1=66, 66×2=132. En tant que 6 fois 11, il suit le motif de la table de 11." },
        { title: "Alternative 2×33", description: "66=2×33. Doublez la table de 33 : 33×7=231, donc 66×7=462." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      67: [
        { title: "Stratégie 70-3", description: "67=70-3. 67×n = (70×n) - (3×n). Exemple : 67×7 = 490 - 21 = 469. Très facile !" },
        { title: "Motif de nombre premier", description: "Comme 67 est premier, il demande des stratégies particulières. Chiffre des unités : 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Alternative 65+2", description: "67=65+2. Exemple : 67×8 = 520 + 16 = 536. Utile si vous connaissez la table de 65." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      68: [
        { title: "Relation 4×17", description: "68=4×17. Quadruplez la table de 17 : 17×7=119, donc 68×7=476." },
        { title: "2×34 ou 70-2", description: "68=2×34 ou 70-2. Exemple : 68×6 = 420 - 12 = 408." },
        { title: "Toujours pair et divisible par 4", description: "Tous les multiples de 68 sont pairs et divisibles par 4 et par 17 : 68, 136, 204, 272, 340..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      69: [
        { title: "Relation 3×23", description: "69=3×23. Triplez la table de 23 : 23×7=161, donc 69×7=483." },
        { title: "Stratégie 70-1", description: "69=70-1. 69×n = (70×n) - n. Exemple : 69×6 = 420 - 6 = 414. Parfait !" },
        { title: "Divisible par 3", description: "Tous les multiples de 69 sont divisibles par 3 et par 23. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      70: [
        { title: "Relation 7×10", description: "70=7×10. Pour multiplier par 70 : multipliez par 7, puis ajoutez un 0 à la fin. 8×70 : 8×7=56, puis 560." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 70 se terminent par 0 : 70, 140, 210, 280, 350, 420, 490, 560, 630, 700." },
        { title: "Relations de facteurs multiples", description: "70=2×35=5×14=7×10 — de nombreuses façons de le calculer !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      71: [
        { title: "Stratégie 70+1", description: "71=70+1. 71×n = (70×n) + n. Exemple : 71×7 = 490 + 7 = 497. Très pratique !" },
        { title: "Propriétés du nombre premier", description: "Comme 71 est premier, il est divisible uniquement par 1 et par 71. Chiffre des unités : 1, 2, 3, 4, 5, 6, 7, 8, 9, 0." },
        { title: "Alternative 75-4", description: "71=75-4. Exemple : 71×5 = 375-20 = 355. Utile quand multiplier par 75 est plus facile." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      72: [
        { title: "Relation 8×9", description: "72=8×9. On peut utiliser les deux tables, du 8 et du 9 : 72×5 = 9×5×8 = 45×8 = 360." },
        { title: "6×12 ou 3×24", description: "72=6×12=3×24=4×18. Peut se calculer de plusieurs façons : 72×4 = 12×24 = 288." },
        { title: "De nombreux diviseurs", description: "72 a 12 diviseurs : 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72 — très utile pour les fractions !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      73: [
        { title: "70+3 ou 75-2", description: "73=70+3 ou 75-2. Exemple : 73×6 = 420+18 = 438 ou 450-12 = 438." },
        { title: "Motif de nombre premier", description: "Comme 73 est premier, il demande des stratégies particulières. C'est le 21e nombre premier. Chiffre des unités : 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Stratégie 80-7", description: "Avec de grands nombres : 73×8 = 640-56 = 584. Soustraire à partir de 80 est une méthode alternative." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      74: [
        { title: "Relation 2×37", description: "74=2×37. Doublez la table de 37 : 37×7=259, donc 74×7=518." },
        { title: "75-1 ou 70+4", description: "74×n = (75×n) - n ou (70×n) + (4×n). Exemple : 74×5 = 375-5 = 370." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 74 sont pairs : 74, 148, 222, 296, 370, 444, 518, 592, 666, 740." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      75: [
        { title: "3×25 ou 5×15", description: "75=3×25=5×15. Exemple : 75×4 = 25×12 = 300 ou 15×20 = 300." },
        { title: "Motif 25, 50, 75, 00", description: "Tous les multiples de 75 se terminent par 25, 50, 75 ou 00 — très régulier et prévisible." },
        { title: "Relation aux pourcentages", description: "75 = 100×¾. Donc 75% = 3/4. Cette relation est très utile dans les calculs de pourcentages." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      76: [
        { title: "Relation 4×19", description: "76=4×19. Quadruplez la table de 19 : 19×7=133, donc 76×7=532." },
        { title: "2×38 ou 80-4", description: "76=2×38 ou 80-4. Exemple : 76×6 = 480 - 24 = 456." },
        { title: "Toujours pair et divisible par 4", description: "Tous les multiples de 76 sont pairs et divisibles par 4 et par 19 : 76, 152, 228, 304, 380..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      77: [
        { title: "Relation 7×11", description: "77=7×11. On peut utiliser les deux tables, du 7 et du 11 : 77×5 = 11×5×7 = 55×7 = 385." },
        { title: "Modèle proche d'un repdigit", description: "77×1=77, 77×2=154. En tant que produit de 7 et de 11, il montre un motif particulier." },
        { title: "Stratégie 80-3", description: "77=80-3. Exemple : 77×6 = 480 - 18 = 462 — soustraire à partir d'un nombre rond." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      78: [
        { title: "Relation 6×13", description: "78=6×13=2×39=3×26. Peut se calculer de plusieurs façons : 78×5 = 13×30 = 390." },
        { title: "Stratégie 80-2", description: "78=80-2. 78×n = (80×n) - (2×n). Exemple : 78×7 = 560 - 14 = 546." },
        { title: "Divisible par 2 et par 3", description: "Tous les multiples de 78 sont divisibles par 2 et par 3. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      79: [
        { title: "Stratégie 80-1", description: "79=80-1. 79×n = (80×n) - n. Exemple : 79×7 = 560 - 7 = 553. Parfait !" },
        { title: "Singularité du nombre premier", description: "Comme 79 est premier, il a des motifs particuliers. Chiffre des unités : 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternative 75+4", description: "79=75+4. Exemple : 79×8 = 600 + 32 = 632. Utile si vous connaissez la table de 75." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      80: [
        { title: "Relation 8×10", description: "80=8×10. Pour multiplier par 80 : multipliez par 8, puis ajoutez un 0 à la fin. 7×80 : 7×8=56, puis 560." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 80 se terminent par 0 : 80, 160, 240, 320, 400, 480, 560, 640, 720, 800." },
        { title: "Relations de facteurs multiples", description: "80=2×40=4×20=5×16=8×10 — de nombreuses façons de le calculer !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      81: [
        { title: "Carré de 9", description: "81=9×9=9². De plus, 81=3⁴ — un exemple parfait de la relation entre carrés et puissances." },
        { title: "Stratégie 80+1", description: "81=80+1. 81×n = (80×n) + n. Exemple : 81×7 = 560 + 7 = 567. Très pratique !" },
        { title: "Quatrième puissance de 3", description: "81=3⁴=3×3×3×3 — important pour comprendre les nombres avec exposants. Divisible par 9 et par 27." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      82: [
        { title: "Relation 2×41", description: "82=2×41. Doublez la table de 41 : 41×7=287, donc 82×7=574." },
        { title: "Stratégie 80+2", description: "82=80+2. 82×n = (80×n) + (2×n). Exemple : 82×6 = 480 + 12 = 492." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 82 sont pairs : 82, 164, 246, 328, 410, 492, 574, 656, 738, 820." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      83: [
        { title: "80+3 ou 85-2", description: "83=80+3 ou 85-2. Exemple : 83×6 = 480+18 = 498 ou 510-12 = 498." },
        { title: "Motif de nombre premier", description: "Comme 83 est premier, il demande des stratégies particulières. Chiffre des unités : 3, 6, 9, 2, 5, 8, 1, 4, 7, 0." },
        { title: "Stratégie 90-7", description: "Avec de grands nombres : 83×8 = 720-56 = 664. Soustraire à partir de 90 est une méthode alternative." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      84: [
        { title: "Relation 7×12", description: "84=7×12. On peut utiliser les deux tables, du 7 et du 12 : 84×5 = 12×5×7 = 60×7 = 420." },
        { title: "6×14 ou 4×21", description: "84=6×14=4×21=3×28. Peut se calculer de plusieurs façons : 84×4 = 21×16 = 336." },
        { title: "De nombreux diviseurs", description: "84 a 12 diviseurs : 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84 — très utile pour les fractions !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      85: [
        { title: "Relation 5×17", description: "85=5×17. On peut utiliser les deux tables, du 5 et du 17 : 85×4 = 17×4×5 = 68×5 = 340." },
        { title: "Se termine par 5 ou 0", description: "Tous les multiples de 85 se terminent par 5 ou 0 : 85, 170, 255, 340, 425, 510, 595, 680..." },
        { title: "90-5 ou 80+5", description: "85×n = (90×n) - (5×n) ou (80×n) + (5×n). Exemple : 85×6 = 540-30 = 510." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      86: [
        { title: "Relation 2×43", description: "86=2×43. Doublez la table de 43 : 43×7=301, donc 86×7=602." },
        { title: "Stratégie 90-4", description: "86=90-4. 86×n = (90×n) - (4×n). Exemple : 86×6 = 540 - 24 = 516." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 86 sont pairs : 86, 172, 258, 344, 430, 516, 602, 688, 774, 860." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      87: [
        { title: "Relation 3×29", description: "87=3×29. Triplez la table de 29 : 29×7=203, donc 87×7=609." },
        { title: "Stratégie 90-3", description: "87=90-3. 87×n = (90×n) - (3×n). Exemple : 87×7 = 630 - 21 = 609. Très facile !" },
        { title: "Divisible par 3", description: "Tous les multiples de 87 sont divisibles par 3 et par 29. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      88: [
        { title: "Relation 8×11", description: "88=8×11. On peut utiliser les deux tables, du 8 et du 11 : 88×5 = 11×5×8 = 55×8 = 440." },
        { title: "Nombre repdigit", description: "88×1=88, 88×2=176. La propriété repdigit (répétition du chiffre 8) facilite la reconnaissance visuelle." },
        { title: "4×22 ou 2×44", description: "88=4×22=2×44. Peut se calculer de plusieurs façons : 88×5 = 22×20 = 440." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      89: [
        { title: "Stratégie 90-1", description: "89=90-1. 89×n = (90×n) - n. Exemple : 89×7 = 630 - 7 = 623. Parfait !" },
        { title: "Singularité du nombre premier", description: "Comme 89 est premier, il a des motifs particuliers. Chiffre des unités : 9, 8, 7, 6, 5, 4, 3, 2, 1, 0." },
        { title: "Alternative 85+4", description: "89=85+4. Exemple : 89×8 = 680 + 32 = 712. Utile si vous connaissez la table de 85." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      90: [
        { title: "Relation 9×10", description: "90=9×10. Pour multiplier par 90 : multipliez par 9, puis ajoutez un 0 à la fin. 7×90 : 7×9=63, puis 630." },
        { title: "Se termine toujours par 0", description: "Tous les multiples de 90 se terminent par 0 : 90, 180, 270, 360, 450, 540, 630, 720, 810, 900." },
        { title: "Relations de facteurs multiples", description: "90=2×45=3×30=5×18=6×15=9×10 — de nombreuses façons de le calculer !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      91: [
        { title: "Relation 7×13", description: "91=7×13. On peut utiliser les deux tables, du 7 et du 13 : 91×5 = 7×5×13 = 35×13 = 455." },
        { title: "Stratégie 90+1", description: "91=90+1. 91×n = (90×n) + n. Exemple : 91×6 = 540 + 6 = 546. Pratique !" },
        { title: "Produit de deux nombres premiers", description: "91=7×13 (produit de deux nombres premiers). Divisible par 7 et par 13." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      92: [
        { title: "Relation 4×23", description: "92=4×23. Quadruplez la table de 23 : 23×7=161, donc 92×7=644." },
        { title: "90+2 ou 100-8", description: "92×n = (90×n)+(2×n) ou (100×n)-(8×n). Exemple : 92×5 = 450+10 = 460." },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 92 sont pairs : 92, 184, 276, 368, 460, 552, 644, 736, 828, 920." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      93: [
        { title: "Relation 3×31", description: "93=3×31. Triplez la table de 31 : 31×6=186, donc 93×6=558." },
        { title: "Stratégie 90+3", description: "93=90+3. 93×n = (90×n) + (3×n). Exemple : 93×7 = 630 + 21 = 651." },
        { title: "Divisible par 3", description: "Tous les multiples de 93 sont divisibles par 3. La somme des chiffres est un multiple de 3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      94: [
        { title: "Relation 2×47", description: "94=2×47. Doublez la table de 47 : 47×7=329, donc 94×7=658." },
        { title: "Stratégie 100-6", description: "94=100-6. 94×n = (100×n) - (6×n). Exemple : 94×5 = 500 - 30 = 470. Parfait !" },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 94 sont pairs : 94, 188, 282, 376, 470, 564, 658, 752, 846, 940." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      95: [
        { title: "Relation 5×19", description: "95=5×19. On peut utiliser les deux tables, du 5 et du 19 : 95×4 = 19×4×5 = 76×5 = 380." },
        { title: "Se termine par 5 ou 0", description: "Tous les multiples de 95 se terminent par 5 ou 0 : 95, 190, 285, 380, 475, 570, 665, 760, 855, 950." },
        { title: "Stratégie 100-5", description: "95=100-5. 95×n = (100×n) - (5×n). Exemple : 95×6 = 600 - 30 = 570. Très facile !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      96: [
        { title: "Relation 8×12", description: "96=8×12. On peut utiliser les deux tables : 96×5 = 12×5×8 = 60×8 = 480." },
        { title: "Relations de facteurs multiples", description: "96=8×12=6×16=4×24=3×32=2×48 — de nombreuses façons de le calculer !" },
        { title: "Puissance de 2 fois 3", description: "96=2⁵×3, soit 32×3. Il a de nombreux diviseurs (12 diviseurs)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      97: [
        { title: "Stratégie 100-3", description: "97=100-3. 97×n = (100×n) - (3×n). Exemple : 97×7 = 700 - 21 = 679. Parfait !" },
        { title: "Motifs de nombre premier", description: "Comme 97 est premier, il a des motifs particuliers. Chiffre des unités : 7, 4, 1, 8, 5, 2, 9, 6, 3, 0." },
        { title: "Le nombre premier le plus proche de 100", description: "C'est le plus grand nombre premier inférieur à 100. Cette propriété facilite beaucoup le calcul." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      98: [
        { title: "Relation 2×49", description: "98=2×49=2×7². Doublez la table de 49 : 49×7=343, donc 98×7=686." },
        { title: "Stratégie 100-2", description: "98=100-2. 98×n = (100×n) - (2×n). Exemple : 98×6 = 600 - 12 = 588. Super facile !" },
        { title: "Toujours des nombres pairs", description: "Tous les multiples de 98 sont pairs : 98, 196, 294, 392, 490, 588, 686, 784, 882, 980." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      99: [
        { title: "Relation 9×11", description: "99=9×11. On peut utiliser les deux tables : 99×5 = 11×5×9 = 55×9 = 495." },
        { title: "Stratégie 100-1", description: "99=100-1. 99×n = (100×n) - n. Exemple : 99×7 = 700 - 7 = 693. Parfait !" },
        { title: "Motif repdigit", description: "99 (répétition du chiffre 9), 198, 297, 396, 495... la reconnaissance visuelle est facile !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      100: [
        { title: "Relation 10×10", description: "100=10×10=10². Pour multiplier par 100 : ajoutez deux zéros à la fin. 7×100 : 700 !" },
        { title: "Se termine toujours par 00", description: "Tous les multiples de 100 se terminent par 00 : 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000." },
        { title: "Base du système décimal", description: "100=10² — système des centaines, calculs de pourcentages, base pour comprendre les nombres décimaux !" },
      ],
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      // Rewritten 2026-07-30 — replaced Spanish contamination
      1: [
        { mistake: "Penser que 1×1=2", solution: "Rappel : tout ce qui est multiplié par 1 reste égal à lui-même. 1 groupe de 1, c'est juste 1." },
        { mistake: "Confondre avec l'addition", solution: "Multiplier par 1 est différent d'additionner. 5+1=6, mais 5×1=5." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      2: [
        { mistake: "Confondre 2×6=12 avec 2×7=14", solution: "Utilisez le comptage de deux en deux : 2, 4, 6, 8, 10, 12, 14. Comptez soigneusement sans sauter." },
        { mistake: "Se tromper avec les grands nombres", solution: "Décomposez : 2×8, c'est juste 8+8. Doubler, c'est une simple addition." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      3: [
        { mistake: "Confondre 3×6=18 avec 3×7=21", solution: "Souvenez-vous du motif +3 : après 18 vient 21. Comptez de trois en trois pour vérifier." },
        { mistake: "Confondre 3×8=24 avec 3×9=27", solution: "Utilisez l'astuce de la somme des chiffres : 24 (2+4=6) et 27 (2+7=9), suivez le motif 3-6-9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      4: [
        { mistake: "Penser que 4×7=24 (au lieu de 28)", solution: "Rappel : 4×6=24, donc 4×7 doit être 4 de plus, c'est-à-dire 28." },
        { mistake: "Confondre avec la table de 2", solution: "La table de 4 est toujours le double de la table de 2. Vérifiez en doublant." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      5: [
        { mistake: "Confondre l'ordre (25 avant 20)", solution: "Le motif est régulier : 5, 10, 15, 20, 25. Chaque terme augmente de 5." },
        { mistake: "Penser que 5×impair se termine toujours par 5", solution: "En réalité, 5×pair se termine par 0, et 5×impair se termine par 5." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      6: [
        { mistake: "Confondre 6×7=42 avec 6×8=48", solution: "Cette paire est difficile ! Rappel : 6×7=42, puis ajoutez 6 : 48." },
        { mistake: "Confondre 6×9=54 avec 6×8=48", solution: "Utilisez la table de 6 : 6×8=48, puis +6=54. Ou calculez 6×9 comme 60-6=54." },
        { mistake: "Confondre avec la table de 3", solution: "La table de 6 est toujours le double de la table de 3. 3×4=12, donc 6×4=24." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      7: [
        { mistake: "Confondre 7×8=56 avec 7×6=42", solution: "Ce sont les plus difficiles ! Astuce mémo : « 5-6-7-8 » (56=7×8). Ou depuis 7×7=49, puis +7=56." },
        { mistake: "Confondre 7×9=63 avec 7×8=56", solution: "Motif : 7×8=56, puis +7=63. Ou somme des chiffres : 63 (6+3=9), 56 (5+6=11)." },
        { mistake: "Éviter complètement la table de 7", solution: "Bien que le 7 semble difficile, il s'apprend avec de la pratique. Commencez petit : mémorisez d'abord 7×1, 7×2, 7×5, 7×10." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      8: [
        { mistake: "Confondre 8×7=56 avec 8×8=64", solution: "Astuce facile pour 8×8=64 : « huit huit soixante-quatre » ou « 8²=64 »." },
        { mistake: "Confondre 8×9=72 avec 8×8=64", solution: "Partez de 8×8=64, puis +8=72. Ou 80-8=72 (10×8 moins 8)." },
        { mistake: "Confondre avec la table de 4", solution: "8 est toujours le double de 4. 4×6=24, donc 8×6=48. Vérifiez en doublant." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      9: [
        { mistake: "Confondre 9×8=72 avec 9×7=63", solution: "Utilisez l'astuce des doigts ou la somme des chiffres : 72 (7+2=9), 63 (6+3=9). Souvenez-vous que 72>63." },
        { mistake: "Mal appliquer l'astuce des doigts", solution: "Ordre correct : doigts de gauche 1-5, doigts de droite 6-10. Les doigts à gauche du doigt plié sont les dizaines, ceux à droite sont les unités." },
        { mistake: "Confondre 9×9=81 avec 9×8=72", solution: "9×9=81 est spécial : « neuf neuf quatre-vingt-un » ou « 9²=81 ». Somme des chiffres : 81 (8+1=9), 72 (7+2=9)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      10: [
        { mistake: "Oublier le zéro", solution: "Le rappel le plus simple : quand on multiplie par 10, on ajoute SEULEMENT un zéro à la fin. 6×10=60, 25×10=250." },
        { mistake: "Ajouter trop de zéros", solution: "Multiplier par 10 ajoute UN SEUL zéro. Pas 100 (deux zéros), 1000 (trois zéros), juste 10 (un zéro)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      11: [
        { mistake: "Penser que 11×12=121 (au lieu de 132)", solution: "Le motif des chiffres doublés ne fonctionne que de 11×1 à 11×9. 11×10=110, 11×12=132." },
        { mistake: "Mal appliquer l'astuce de la somme des chiffres", solution: "23×11 : additionnez les chiffres (2+3=5), placez-les au milieu : 253. Si la somme dépasse 9, il y a une retenue : 67×11 : 6_(6+7=13)_7 = 737." },
        { mistake: "Penser que 11×11=111", solution: "11×11=121, pas 111. Chaque multiple de 11 ajoute 11 au précédent : 99+11=110, 110+11=121." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      12: [
        { mistake: "Confondre 12×8=84 avec 12×9=108", solution: "12×8=96 (8 douzaines), 12×9=108 (9 douzaines). 84 est en fait 12×7. Vérifiez en comptant les douzaines." },
        { mistake: "Confondre 12 avec 10", solution: "12×5=60, 10×5=50. 12 vaut toujours 20% de plus que 10 (10 plus 2)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      13: [
        { mistake: "Confondre 13×7=91 avec 13×8=104", solution: "13×7=91, 13×8=104. La différence est 13. Utilisez la stratégie 10+3 : 70+21=91, 80+24=104." },
        { mistake: "Confondre 13 avec 3 ou 30", solution: "13×4=52, pas 3×4=12. Ni 30×4=120. 13, c'est exactement 10+3." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      14: [
        { mistake: "Penser que 14×7=98 (c'est en fait correct !)", solution: "14×7=98 est correct ! Mais n'oubliez pas 14×8=112 (98+14=112). Rappelez-vous que c'est le double de la table de 7." },
        { mistake: "Confondre 14×6=84 avec un autre résultat", solution: "14×6=84 est correct (7×6=42, ×2=84). 72 est en fait 12×6 ou 8×9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      15: [
        { mistake: "Penser que 15×6=80 (au lieu de 90)", solution: "15×6=90 (1,5 douzaine). 80 est en fait 16×5. Calculez 15×6 comme 3×6=18, puis ×5=90, ou 5×6=30, puis ×3=90." },
        { mistake: "Confondre 15×4", solution: "15×4=60, pas 50. Rappelez-vous que 15 minutes×4 = 1 heure (60 minutes)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      16: [
        { mistake: "Confondre 16×6=96 avec un autre résultat", solution: "16×6=96 est correct (8×6=48, ×2=96). 84 est en fait 14×6 ou 12×7." },
        { mistake: "Confondre 16 avec 6", solution: "16×4=64, pas 6×4=24. 16 est très différent de 6. Rappelez-vous que 16=2⁴." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      17: [
        { mistake: "Confondre 17×6=102 avec 17×7=119", solution: "Stratégie 20-3 : 17×6=120-18=102, 17×7=140-21=119. Ou 10+7 : 60+42=102, 70+49=119." },
        { mistake: "Confondre 17×8=136 avec un autre résultat", solution: "17×8=136 (170-34), 17×9=153 (180-27). 126 est en fait 18×7." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      18: [
        { mistake: "Confondre 18×7=126 avec 18×8=144", solution: "18×7=126 (9×7=63, ×2), 18×8=144 (9×8=72, ×2). La différence est 18." },
        { mistake: "Confondre 18×6=108 avec un autre résultat", solution: "18×6=108 est correct (6×6=36, ×3 ou 9×6=54, ×2). 104 est en fait 13×8." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      19: [
        { mistake: "Penser que 19×5=100 (au lieu de 95)", solution: "19×5=95, pas 100 (20×5=100). 19 est 1 de moins que 20, donc 100-5=95." },
        { mistake: "Confondre 19×6=114 avec 19×7=133", solution: "Stratégie 20-1 : 19×6=120-6=114, 19×7=140-7=133. On soustrait toujours le multiplicateur de 20." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      20: [
        { mistake: "Penser que 20×7=120 (au lieu de 140)", solution: "20×7=140, pas 120 (20×6=120). 10×7=70, doublez : 140. Ou 7×20=7×10×2." },
        { mistake: "Oublier le zéro", solution: "Tous les multiples de 20 se terminent par 0 : 20, 40, 60, 80, 100... 20×8=160, pas 16 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      21: [
        { mistake: "Penser que 21×5=100 (au lieu de 105)", solution: "21×5=105, pas 100. 20×5=100, plus 5 : 105. Ou 3×7×5 = 21×5 = 105." },
        { mistake: "Confondre 21×7=147 avec un autre résultat", solution: "21×7=147 est correct (3×7×7 ou 140+7). 140 est en fait 20×7." },
        { mistake: "Confondre 21 avec 12", solution: "21×4=84, pas 12×4=48. Faites attention à l'ordre des chiffres : 21 est très différent de 12." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      22: [
        { mistake: "Penser que 22×5=100 (au lieu de 110)", solution: "22×5=110, pas 100. 11×5=55, doublez : 110. Ou 20×5=100, plus 2×5=10 : 110." },
        { mistake: "Confondre 22×9=198 avec un autre résultat", solution: "22×9=198 est correct (11×9=99, ×2). 188 est un autre calcul." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      23: [
        { mistake: "Penser que 23×4=82 (au lieu de 92)", solution: "23×4=92, pas 82. 20×4=80, plus 3×4=12 : 92. 82 est un autre résultat." },
        { mistake: "Confondre 23×5=115 avec un autre résultat", solution: "23×5=115 est correct (20×5=100, 3×5=15, total 115). 105 est en fait 21×5." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      24: [
        { mistake: "Penser que 24×5=100 (au lieu de 120)", solution: "24×5=120, pas 100. Un jour compte 24 heures, 5 jours = 120 heures. Ou 12×10=120." },
        { mistake: "Confondre 24×7=168 avec un autre résultat", solution: "24×7=168 est correct (4×6×7 ou 3×8×7). 158 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      25: [
        { mistake: "Penser que 25×8=180 (au lieu de 200)", solution: "25×8=200, pas 180. 25×4=100, donc 25×8=200. Ou 5×5×8 = 25×8 = 200." },
        { mistake: "Deviner incorrectement les deux derniers chiffres", solution: "Les multiples de 25 se terminent toujours par 25, 50, 75 ou 00. Ça ne peut pas être autre chose !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      26: [
        { mistake: "Confondre 26×5=130 avec un autre résultat", solution: "26×5=130 est correct (13×5=65, ×2). 120 est en fait 24×5." },
        { mistake: "Confondre 26 avec 16 ou 36", solution: "26×4=104, pas 16×4=64 ou 36×4=144. Lisez les chiffres attentivement." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      27: [
        { mistake: "Penser que 27×4=98 (au lieu de 108)", solution: "27×4=108, pas 98. 30×4=120, moins 3×4=12 : 108. Ou 9×4=36, ×3=108." },
        { mistake: "Confondre 27×7=189 avec un autre résultat", solution: "27×7=189 est correct (30×7=210, moins 3×7=21 : 189). 179 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      28: [
        { mistake: "Penser que 28×5=130 (au lieu de 140)", solution: "28×5=140, pas 130. 4×7×5 = 20×7 = 140. Ou 14×10=140." },
        { mistake: "Confondre 28×9=252 avec un autre résultat", solution: "28×9=252 est correct (4×7×9 ou 30×9 moins 2×9). 242 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      29: [
        { mistake: "Penser que 29×5=140 (au lieu de 145)", solution: "29×5=145, pas 140. 30×5=150, moins 5 : 145. 140 est en fait 28×5." },
        { mistake: "Confondre 29×7=203 avec un autre résultat", solution: "29×7=203 est correct (30×7=210, moins 7). 193 est un autre calcul." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      30: [
        { mistake: "Penser que 30×7=200 (au lieu de 210)", solution: "30×7=210, pas 200 (30×6=180, 30×7=210). 10×7=70, ×3=210." },
        { mistake: "Oublier le zéro", solution: "Tous les multiples de 30 se terminent par 0 : 30, 60, 90, 120, 150... 30×8=240, pas 24 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      31: [
        { mistake: "Penser que 31×5=145 (au lieu de 155)", solution: "31×5=155, pas 145. 30×5=150, plus 5 : 155. 145 est en fait 29×5." },
        { mistake: "Confondre 31×7=217 avec un autre résultat", solution: "31×7=217 est correct (30×7=210, plus 7). 207 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      32: [
        { mistake: "Penser que 32×5=150 (au lieu de 160)", solution: "32×5=160, pas 150. 16×5=80, doublez : 160. Ou 32×10=320, la moitié est 160." },
        { mistake: "Confondre 32×7=224 avec un autre résultat", solution: "32×7=224 est correct (16×7=112, ×2). 214 est un autre calcul." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      33: [
        { mistake: "Penser que 33×4=122 (au lieu de 132)", solution: "33×4=132, pas 122. 11×4=44, ×3=132. Ou 30×4=120, plus 3×4=12 : 132." },
        { mistake: "Confondre 33×9=297 avec un autre résultat", solution: "33×9=297 est correct (11×9=99, ×3). 287 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      34: [
        { mistake: "Penser que 34×5=160 (au lieu de 170)", solution: "34×5=170, pas 160. 17×5=85, doublez : 170. 160 est en fait 32×5." },
        { mistake: "Confondre 34×8=272 avec un autre résultat", solution: "34×8=272 est correct (17×8=136, ×2). 262 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      35: [
        { mistake: "Penser que 35×6=200 (au lieu de 210)", solution: "35×6=210, pas 200. 5×6=30, 7×6=42, 30×7=210 ou 5×42=210." },
        { mistake: "Confondre 35×8=280 avec un autre résultat", solution: "35×8=280 est correct (5×8=40, 7×8=56, 40×7=280). 270 est en fait 27×10." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      36: [
        { mistake: "Penser que 36×5=170 (au lieu de 180)", solution: "36×5=180, pas 170. 6×5=30, ×6=180. Ou 18×10=180. 170 est en fait 34×5." },
        { mistake: "Confondre 36×7=252 avec un autre résultat", solution: "36×7=252 est correct (6×7=42, ×6 ou 9×7=63, ×4). 242 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      37: [
        { mistake: "Penser que 37×5=175 (au lieu de 185)", solution: "37×5=185, pas 175. 40×5=200, moins 3×5=15 : 185. 175 est en fait 35×5." },
        { mistake: "Se tromper après 37×3=111", solution: "37×3=111, 37×6=222, 37×9=333. Chaque multiple de 3 donne un nombre repdigit ! 37×7=259, 37×8=296." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      38: [
        { mistake: "Penser que 38×5=180 (au lieu de 190)", solution: "38×5=190, pas 180. 19×5=95, doublez : 190. 180 est en fait 36×5." },
        { mistake: "Confondre 38×9=342 avec un autre résultat", solution: "38×9=342 est correct (19×9=171, ×2 ou 40×9=360, moins 2×9=18). 332 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      39: [
        { mistake: "Penser que 39×5=185 (au lieu de 195)", solution: "39×5=195, pas 185. 40×5=200, moins 5 : 195. 185 est en fait 37×5." },
        { mistake: "Confondre 39×8=312 avec un autre résultat", solution: "39×8=312 est correct (40×8=320, moins 8). 302 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      40: [
        { mistake: "Penser que 40×7=270 (au lieu de 280)", solution: "40×7=280, pas 270. 4×7=28, ajoutez un 0 : 280. Ou 10×7=70, ×4=280." },
        { mistake: "Oublier le zéro", solution: "Tous les multiples de 40 se terminent par 0 : 40, 80, 120, 160, 200... 40×9=360, pas 36 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      41: [
        { mistake: "Penser que 41×5=200 (au lieu de 205)", solution: "41×5=205, pas 200. 40×5=200, plus 5 : 205. Pensez toujours à ajouter ce 1 supplémentaire." },
        { mistake: "Confondre 41×9=369 avec un autre résultat", solution: "41×9=369 est correct (40×9=360, plus 9). 360 est en fait 40×9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      42: [
        { mistake: "Penser que 42×5=200 (au lieu de 210)", solution: "42×5=210, pas 200. 6×5=30, 7×5=35... Ou 40×5=200, plus 2×5=10 : 210." },
        { mistake: "Confondre 42×8=336 avec un autre résultat", solution: "42×8=336 est correct (6×8=48, 7×8=56 ou 40×8=320, plus 16). 326 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      43: [
        { mistake: "Penser que 43×5=205 (au lieu de 215)", solution: "43×5=215, pas 205. 40×5=200, plus 3×5=15 : 215. 205 est en fait 41×5." },
        { mistake: "Confondre 43×9=387 avec un autre résultat", solution: "43×9=387 est correct (40×9=360, plus 3×9=27). 377 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      44: [
        { mistake: "Penser que 44×5=210 (au lieu de 220)", solution: "44×5=220, pas 210. 11×5=55, ×4=220. Ou 40×5=200, plus 4×5=20 : 220." },
        { mistake: "Confondre 44×9=396 avec un autre résultat", solution: "44×9=396 est correct (11×9=99, ×4 ou 40×9=360, plus 4×9=36). 386 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      45: [
        { mistake: "Penser que 45×5=220 (au lieu de 225)", solution: "45×5=225, pas 220. 9×5=45, ×5=225. Ou 40×5=200, plus 5×5=25 : 225." },
        { mistake: "Confondre 45×8=360 avec un autre résultat", solution: "45×8=360 est correct (9×8=72, ×5 ou 5×8=40, ×9). 350 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      46: [
        { mistake: "Penser que 46×5=225 (au lieu de 230)", solution: "46×5=230, pas 225. 23×5=115, ×2=230. Ou 50×5=250, moins 4×5=20 : 230." },
        { mistake: "Confondre 46×9=414 avec un autre résultat", solution: "46×9=414 est correct (23×9=207, ×2 ou 50×9=450, moins 4×9=36). 404 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      47: [
        { mistake: "Penser que 47×5=230 (au lieu de 235)", solution: "47×5=235, pas 230. 50×5=250, moins 3×5=15 : 235. 230 est en fait 46×5." },
        { mistake: "Confondre 47×9=423 avec un autre résultat", solution: "47×9=423 est correct (50×9=450, moins 3×9=27). 413 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      48: [
        { mistake: "Penser que 48×5=230 (au lieu de 240)", solution: "48×5=240, pas 230. 6×5=30, 8×5=40, 30×8=240. Ou 50×5=250, moins 2×5=10 : 240." },
        { mistake: "Confondre 48×9=432 avec un autre résultat", solution: "48×9=432 est correct (6×9=54, ×8 ou 50×9=450, moins 2×9=18). 422 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      49: [
        { mistake: "Penser que 49×5=240 (au lieu de 245)", solution: "49×5=245, pas 240. 50×5=250, moins 5 : 245. Ou 7×5=35, ×7=245." },
        { mistake: "Confondre 49×9=441 avec un autre résultat", solution: "49×9=441 est correct (50×9=450, moins 9). De plus 441=21² (nombre carré). 431 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      50: [
        { mistake: "Penser que 50×7=340 (au lieu de 350)", solution: "50×7=350, pas 340. 5×7=35, ajoutez un 0 : 350. Ou 100×7=700, ÷2=350." },
        { mistake: "Oublier le zéro", solution: "Les multiples impairs de 50 se terminent par 50, les pairs par 0 : 50, 100, 150, 200, 250... 50×8=400, pas 40 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      51: [
        { mistake: "Penser que 51×5=250 (au lieu de 255)", solution: "51×5=255, pas 250. 50×5=250, plus 5 : 255. Pensez toujours à ajouter ce 1 supplémentaire." },
        { mistake: "Confondre 51×9=459 avec un autre résultat", solution: "51×9=459 est correct (50×9=450, plus 9). 450 est en fait 50×9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      52: [
        { mistake: "Penser que 52×5=250 (au lieu de 260)", solution: "52×5=260, pas 250. 13×5=65, ×4=260. Ou 50×5=250, plus 2×5=10 : 260." },
        { mistake: "Confondre 52×9=468 avec un autre résultat", solution: "52×9=468 est correct (13×9=117, ×4 ou 50×9=450, plus 18). 458 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      53: [
        { mistake: "Penser que 53×5=255 (au lieu de 265)", solution: "53×5=265, pas 255. 50×5=250, plus 3×5=15 : 265. 255 est en fait 51×5." },
        { mistake: "Confondre 53×9=477 avec un autre résultat", solution: "53×9=477 est correct (50×9=450, plus 3×9=27). 467 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      54: [
        { mistake: "Penser que 54×5=260 (au lieu de 270)", solution: "54×5=270, pas 260. 6×5=30, 9×5=45, 30×9=270. Ou 50×5=250, plus 4×5=20 : 270." },
        { mistake: "Confondre 54×9=486 avec un autre résultat", solution: "54×9=486 est correct (6×9=54, ×9 ou 60×9=540, moins 6×9=54). 476 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      55: [
        { mistake: "Penser que 55×5=270 (au lieu de 275)", solution: "55×5=275, pas 270. 11×5=55, ×5=275. Ou 50×5=250, plus 5×5=25 : 275." },
        { mistake: "Confondre 55×9=495 avec un autre résultat", solution: "55×9=495 est correct (11×9=99, ×5 ou 60×9=540, moins 5×9=45). 485 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      56: [
        { mistake: "Penser que 56×5=270 (au lieu de 280)", solution: "56×5=280, pas 270. 7×5=35, 8×5=40, 35×8=280. Ou 60×5=300, moins 4×5=20 : 280." },
        { mistake: "Confondre 56×9=504 avec un autre résultat", solution: "56×9=504 est correct (7×9=63, ×8 ou 60×9=540, moins 4×9=36). 494 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      57: [
        { mistake: "Penser que 57×5=280 (au lieu de 285)", solution: "57×5=285, pas 280. 60×5=300, moins 3×5=15 : 285. 280 est en fait 56×5." },
        { mistake: "Confondre 57×9=513 avec un autre résultat", solution: "57×9=513 est correct (60×9=540, moins 3×9=27). 503 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      58: [
        { mistake: "Penser que 58×5=280 (au lieu de 290)", solution: "58×5=290, pas 280. 29×5=145, ×2=290. Ou 60×5=300, moins 2×5=10 : 290." },
        { mistake: "Confondre 58×9=522 avec un autre résultat", solution: "58×9=522 est correct (29×9=261, ×2 ou 60×9=540, moins 2×9=18). 512 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      59: [
        { mistake: "Penser que 59×5=290 (au lieu de 295)", solution: "59×5=295, pas 290. 60×5=300, moins 5 : 295. Très simple !" },
        { mistake: "Confondre 59×9=531 avec un autre résultat", solution: "59×9=531 est correct (60×9=540, moins 9). 531 est aussi 9×59. 521 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      60: [
        { mistake: "Penser que 60×7=410 (au lieu de 420)", solution: "60×7=420, pas 410. 6×7=42, ajoutez un 0 : 420. Ou 10×7=70, ×6=420." },
        { mistake: "Oublier le zéro", solution: "Tous les multiples de 60 se terminent par 0 : 60, 120, 180, 240, 300, 360, 420... 60×9=540, pas 54 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      61: [
        { mistake: "Penser que 61×5=300 (au lieu de 305)", solution: "61×5=305, pas 300. 60×5=300, plus 5 : 305. Pensez toujours à ajouter ce 1 supplémentaire." },
        { mistake: "Confondre 61×9=549 avec un autre résultat", solution: "61×9=549 est correct (60×9=540, plus 9). 540 est en fait 60×9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      62: [
        { mistake: "Penser que 62×5=300 (au lieu de 310)", solution: "62×5=310, pas 300. 31×5=155, ×2=310. Ou 60×5=300, plus 2×5=10 : 310." },
        { mistake: "Confondre 62×9=558 avec un autre résultat", solution: "62×9=558 est correct (31×9=279, ×2 ou 60×9=540, plus 18). 548 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      63: [
        { mistake: "Penser que 63×5=305 (au lieu de 315)", solution: "63×5=315, pas 305. 7×5=35, 9×5=45, 35×9=315. Ou 60×5=300, plus 3×5=15 : 315." },
        { mistake: "Confondre 63×9=567 avec un autre résultat", solution: "63×9=567 est correct (7×9=63, ×9 ou 60×9=540, plus 27). 557 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      64: [
        { mistake: "Penser que 64×5=310 (au lieu de 320)", solution: "64×5=320, pas 310. 8×5=40, ×8=320. Ou 60×5=300, plus 4×5=20 : 320." },
        { mistake: "Confondre 64×9=576 avec un autre résultat", solution: "64×9=576 est correct (8×9=72, ×8 ou 60×9=540, plus 36). De plus 576=24². 566 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      65: [
        { mistake: "Penser que 65×5=320 (au lieu de 325)", solution: "65×5=325, pas 320. 13×5=65, ×5=325. Ou 60×5=300, plus 5×5=25 : 325." },
        { mistake: "Confondre 65×9=585 avec un autre résultat", solution: "65×9=585 est correct (13×9=117, ×5 ou 70×9=630, moins 5×9=45). 575 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      66: [
        { mistake: "Penser que 66×5=325 (au lieu de 330)", solution: "66×5=330, pas 325. 11×5=55, ×6=330. Ou 60×5=300, plus 6×5=30 : 330." },
        { mistake: "Confondre 66×9=594 avec un autre résultat", solution: "66×9=594 est correct (11×9=99, ×6 ou 70×9=630, moins 4×9=36). 584 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      67: [
        { mistake: "Penser que 67×5=330 (au lieu de 335)", solution: "67×5=335, pas 330. 70×5=350, moins 3×5=15 : 335. 330 est en fait 66×5." },
        { mistake: "Confondre 67×9=603 avec un autre résultat", solution: "67×9=603 est correct (70×9=630, moins 3×9=27). 593 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      68: [
        { mistake: "Penser que 68×5=330 (au lieu de 340)", solution: "68×5=340, pas 330. 17×5=85, ×4=340. Ou 70×5=350, moins 2×5=10 : 340." },
        { mistake: "Confondre 68×9=612 avec un autre résultat", solution: "68×9=612 est correct (17×9=153, ×4 ou 70×9=630, moins 2×9=18). 602 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      69: [
        { mistake: "Penser que 69×5=340 (au lieu de 345)", solution: "69×5=345, pas 340. 70×5=350, moins 5 : 345. Très simple !" },
        { mistake: "Confondre 69×9=621 avec un autre résultat", solution: "69×9=621 est correct (70×9=630, moins 9). 621=3×207. 611 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      70: [
        { mistake: "Penser que 70×7=480 (au lieu de 490)", solution: "70×7=490, pas 480. 7×7=49, ajoutez un 0 : 490. Ou 10×7=70, ×7=490." },
        { mistake: "Oublier le zéro", solution: "Tous les multiples de 70 se terminent par 0 : 70, 140, 210, 280, 350, 420, 490... 70×9=630, pas 63 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      71: [
        { mistake: "Penser que 71×5=350 (au lieu de 355)", solution: "71×5=355, pas 350. 70×5=350, plus 5 : 355. Pensez toujours à ajouter ce 1 supplémentaire." },
        { mistake: "Confondre 71×9=639 avec un autre résultat", solution: "71×9=639 est correct (70×9=630, plus 9). 630 est en fait 70×9." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      72: [
        { mistake: "Penser que 72×5=350 (au lieu de 360)", solution: "72×5=360, pas 350. 8×5=40, 9×5=45, 40×9=360. Ou 70×5=350, plus 2×5=10 : 360." },
        { mistake: "Confondre 72×9=648 avec un autre résultat", solution: "72×9=648 est correct (8×9=72, ×9 ou 80×9=720, moins 72). 638 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      73: [
        { mistake: "Penser que 73×5=355 (au lieu de 365)", solution: "73×5=365, pas 355. 70×5=350, plus 3×5=15 : 365. 365 est aussi le nombre de jours dans une année !" },
        { mistake: "Confondre 73×9=657 avec un autre résultat", solution: "73×9=657 est correct (70×9=630, plus 3×9=27). 647 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      74: [
        { mistake: "Penser que 74×5=360 (au lieu de 370)", solution: "74×5=370, pas 360. 37×5=185, ×2=370. Ou 75×5=375, moins 5 : 370." },
        { mistake: "Confondre 74×9=666 avec un autre résultat", solution: "74×9=666 est correct (37×9=333, ×2 ou 75×9=675, moins 9). 666 est un nombre repdigit. 656 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      75: [
        { mistake: "Penser que 75×5=370 (au lieu de 375)", solution: "75×5=375, pas 370. 15×5=75, ×5=375. Ou 25×5=125, ×3=375." },
        { mistake: "Confondre 75×9=675 avec un autre résultat", solution: "75×9=675 est correct (25×9=225, ×3 ou 80×9=720, moins 5×9=45). 675=3³×5². 665 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      76: [
        { mistake: "Penser que 76×5=370 (au lieu de 380)", solution: "76×5=380, pas 370. 19×5=95, ×4=380. Ou 80×5=400, moins 4×5=20 : 380." },
        { mistake: "Confondre 76×9=684 avec un autre résultat", solution: "76×9=684 est correct (19×9=171, ×4 ou 80×9=720, moins 4×9=36). 674 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      77: [
        { mistake: "Penser que 77×5=380 (au lieu de 385)", solution: "77×5=385, pas 380. 7×5=35, 11×5=55, 35×11=385. Ou 80×5=400, moins 3×5=15 : 385." },
        { mistake: "Confondre 77×9=693 avec un autre résultat", solution: "77×9=693 est correct (7×9=63, ×11 ou 80×9=720, moins 3×9=27). 693=7×9×11. 683 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      78: [
        { mistake: "Penser que 78×5=380 (au lieu de 390)", solution: "78×5=390, pas 380. 13×5=65, 6×5=30, 65×6=390. Ou 80×5=400, moins 2×5=10 : 390." },
        { mistake: "Confondre 78×9=702 avec un autre résultat", solution: "78×9=702 est correct (13×9=117, ×6 ou 80×9=720, moins 2×9=18). 692 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      79: [
        { mistake: "Penser que 79×5=390 (au lieu de 395)", solution: "79×5=395, pas 390. 80×5=400, moins 5 : 395. Très simple !" },
        { mistake: "Confondre 79×9=711 avec un autre résultat", solution: "79×9=711 est correct (80×9=720, moins 9). 701 est un autre résultat." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      80: [
        { mistake: "Penser que 80×7=550 (au lieu de 560)", solution: "80×7=560, pas 550. 8×7=56, ajoutez un 0 : 560. Ou 10×7=70, ×8=560." },
        { mistake: "Oublier le zéro", solution: "Tous les multiples de 80 se terminent par 0 : 80, 160, 240, 320, 400, 480, 560... 80×9=720, pas 72 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      81: [
        { mistake: "Calculer 81 comme 8×10+1 au lieu de 9×9", solution: "81=9×9. Exemple : 81×7 = (9×7)×9 = 63×9 = 567. Utilisez la relation avec le carré !" },
        { mistake: "Erreur d'addition dans la stratégie 80+1", solution: "81×7 = (80×7)+(1×7) = 560+7 = 567. Calculez soigneusement les deux parties !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      82: [
        { mistake: "Compliquer 82×4", solution: "82×4 = (80×4)+(2×4) = 320+8 = 328. Décomposez et additionnez !" },
        { mistake: "Penser que 82 est impair", solution: "82=2×41, toujours pair. Tous ses multiples sont des nombres pairs : 82, 164, 246..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      83: [
        { mistake: "Mal calculer 83×5", solution: "83×5 = (80×5)+(3×5) = 400+15 = 415. Décomposez et additionnez !" },
        { mistake: "Penser que 83 est pair", solution: "83 est premier, uniquement divisible par 1 et 83. Il est impair et non divisible par 2." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      84: [
        { mistake: "Compliquer 84×5", solution: "84×5 = 420 (7×12×5=7×60). Ou (80×5)+(4×5)=400+20=420." },
        { mistake: "Oublier les facteurs de 84", solution: "84=7×12=6×14=4×21=3×28. Peut être calculé de plusieurs façons !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      85: [
        { mistake: "Mal calculer 85×4", solution: "85×4 = (80×4)+(5×4) = 320+20 = 340. Ou 85×4=17×20=340." },
        { mistake: "Oublier le dernier chiffre", solution: "Les multiples de 85 se terminent toujours par 5 ou 0 : 85, 170, 255, 340, 425, 510..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      86: [
        { mistake: "Compliquer 86×5", solution: "86×5 = (80×5)+(6×5) = 400+30 = 430. Décomposez et additionnez !" },
        { mistake: "Penser que 86 est impair", solution: "86=2×43, toujours pair. Tous ses multiples sont des nombres pairs : 86, 172, 258..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      87: [
        { mistake: "Mal calculer 87×5", solution: "87×5 = (90×5)-(3×5) = 450-15 = 435. Soustraire depuis 90 est plus facile !" },
        { mistake: "Penser que 87 est premier", solution: "87=3×29, ce n'est pas un nombre premier ! Il est divisible par 3 (8+7=15, divisible exactement par 3)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      88: [
        { mistake: "Compliquer 88×5", solution: "88×5 = (80×5)+(8×5) = 400+40 = 440. Ou 88×5=11×40=440." },
        { mistake: "Mal calculer 88×11", solution: "88×11 = 88×10 + 88 = 880+88 = 968. Utilisez la règle de multiplication par 11 !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      89: [
        { mistake: "Calculer 89 sans arrondir", solution: "89=90-1. Exemple : 89×7 = (90×7)-7 = 630-7 = 623. TRÈS FACILE !" },
        { mistake: "Calculer 89 comme 88+1", solution: "La stratégie 90-1 est bien plus facile ! 89×7 : 90×7=630, puis soustrayez 7 : 623." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      90: [
        { mistake: "Compliquer 90×5", solution: "90×5 = 450 (9×50). Juste 9×5=45, ajoutez un 0 !" },
        { mistake: "Oublier le zéro", solution: "90=9×10. Ajoutez toujours 0 à la fin : 90, 180, 270, 360, 450..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      91: [
        { mistake: "Mal calculer 91×5", solution: "91×5 = (90×5)+(1×5) = 450+5 = 455. Décomposez et additionnez !" },
        { mistake: "Penser que 91 est premier", solution: "91=7×13, ce n'est pas un nombre premier ! Il est divisible par 7 et par 13." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      92: [
        { mistake: "Compliquer 92×5", solution: "92×5 = (90×5)+(2×5) = 450+10 = 460. Décomposez et additionnez !" },
        { mistake: "Penser que 92 est impair", solution: "92=2×46, toujours pair. Tous ses multiples sont des nombres pairs : 92, 184, 276..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      93: [
        { mistake: "Mal calculer 93×5", solution: "93×5 = (90×5)+(3×5) = 450+15 = 465. Décomposez et additionnez !" },
        { mistake: "Penser que 93 est premier", solution: "93=3×31, ce n'est pas un nombre premier ! Il est divisible par 3 (9+3=12, divisible exactement par 3)." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      94: [
        { mistake: "Compliquer 94×5", solution: "94×5 = (100×5)-(6×5) = 500-30 = 470. Soustraire depuis 100 est plus facile !" },
        { mistake: "Penser que 94 est impair", solution: "94=2×47, toujours pair. Tous ses multiples sont des nombres pairs : 94, 188, 282..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      95: [
        { mistake: "Mal calculer 95×4", solution: "95×4 = (100×4)-(5×4) = 400-20 = 380. Ou 95×4=19×20=380." },
        { mistake: "Oublier le dernier chiffre", solution: "Les multiples de 95 se terminent toujours par 5 ou 0 : 95, 190, 285, 380, 475, 570..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      96: [
        { mistake: "Compliquer 96×5", solution: "96×5 = (100×5)-(4×5) = 500-20 = 480. Ou 96×5=12×40=480." },
        { mistake: "Oublier les facteurs de 96", solution: "96=8×12=6×16=4×24=3×32. Peut être calculé de plusieurs façons !" },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      97: [
        { mistake: "Calculer 97 sans arrondir", solution: "97=100-3. Exemple : 97×7 = (100×7)-21 = 700-21 = 679. TRÈS FACILE !" },
        { mistake: "Calculer 97 comme 96+1", solution: "La stratégie 100-3 est bien plus facile ! 97×7 : 100×7=700, puis soustrayez 21 : 679." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      98: [
        { mistake: "Compliquer 98×5", solution: "98×5 = (100×5)-(2×5) = 500-10 = 490. Soustraire depuis 100 est SUPER FACILE !" },
        { mistake: "Penser que 98 est impair", solution: "98=2×49, toujours pair. Tous ses multiples sont des nombres pairs : 98, 196, 294..." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      99: [
        { mistake: "Calculer 99 sans arrondir", solution: "99=100-1. Exemple : 99×7 = (100×7)-7 = 700-7 = 693. PARFAIT !" },
        { mistake: "Calculer 99 comme 98+1", solution: "La stratégie 100-1 est bien plus facile ! 99×8 : 100×8=800, puis soustrayez 8 : 792." },
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      100: [
        { mistake: "Compliquer 100×5", solution: "100×5 = 500 ! Ajoutez simplement deux zéros à la fin : 5 → 500, 7 → 700 !" },
        { mistake: "Oublier les zéros", solution: "Multiplier par 100 : ajoutez DEUX zéros à la fin. 100×9=900, pas 90 !" },
      ],
    }

const strategies: { [key: number]: string[] } = {
      // Rewritten 2026-07-30 — replaced Spanish contamination
      1: [
        "Dites chaque multiplication à voix haute : « 1 fois 1 égale 1, 1 fois 2 égale 2... »",
        "Entraînez-vous à écrire la table une fois par jour pendant une semaine",
        "Cherchez le motif : la réponse est toujours le même nombre que le second facteur",
        "Utilisez des cartes mémoire, même si cette table s'apprend généralement très vite",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      2: [
        "Comptez de deux en deux en marchant ou en montant les escaliers : 2, 4, 6, 8...",
        "Utilisez vos doigts : levez-les par paires et comptez de deux en deux",
        "Entraînez-vous à doubler des nombres de tête pendant la journée",
        "Dites-le à voix haute : « 2 fois 5, c'est 5 plus 5, ce qui fait 10 »",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      3: [
        "Comptez rythmiquement de trois en trois : 3, 6, 9, 12, 15...",
        "Utilisez l'astuce des doigts : levez-les par groupes de 3",
        "Cherchez le motif de la somme des chiffres pour vérifier vos réponses (répète 3-6-9)",
        "Entraînez-vous 5-10 minutes par jour plutôt qu'une longue séance",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      4: [
        "Apprenez d'abord la table de 2, puis doublez chaque réponse pour obtenir celle de 4",
        "Comptez de quatre en quatre : 4, 8, 12, 16, 20...",
        "Utilisez des objets par groupes de 4 pour visualiser (pieds de chaise, roues de voiture)",
        "Entraînez-vous séparément sur les plus difficiles (4×6, 4×7, 4×8, 4×9)",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      5: [
        "Utilisez vos doigts pour compter de cinq en cinq — chaque doigt représente 5",
        "Regardez une horloge et comptez par intervalles de 5 minutes",
        "Entraînez-vous avec de l'argent : comptez des pièces de 5 centimes",
        "Rappel : les multiplicateurs pairs se terminent par 0, les impairs par 5",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      6: [
        "Mémorisez la table de 3, puis doublez chaque réponse pour trouver celle de 6",
        "Stratégie de la boîte d'œufs : comptez de six en six (6, 12, 18, 24...)",
        "Concentrez-vous sur les paires difficiles : étudiez 6×7=42, 6×8=48, 6×9=54 séparément",
        "Mémorisez le motif du chiffre des unités : 6, 2, 8, 4, 0 puis répétez",
        "Vérifiez avec les tables de 2 et 3, puisque 6 est un multiple des deux",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      7: [
        "Mémorisez la paire la plus difficile : 7×8=56 (rime « cinq-six, sept-huit »)",
        "Reliez-le aux jours de la semaine : 7 jours, 14 jours (2 semaines), 21 jours (3 semaines)",
        "Mémorisez surtout 7×7=49 (7²=49), calculez les autres à partir de là",
        "Astuce des doigts : comptez 7 doigts depuis la gauche, les restants sont les unités, les comptés sont les dizaines",
        "Entraînez-vous sur seulement 3-4 faits réels par jour. La table de 7 demande de la patience !",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      8: [
        "Mémorisez la table de 4, puis doublez chaque réponse pour trouver celle de 8",
        "Mémorisez surtout 8×8=64 (« huit huit soixante-quatre »)",
        "Comptez de huit en huit : 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
        "Chaîne de doublement : doublez le nombre (×2), encore (×4), encore (×8)",
        "Les unités sont toujours paires et décroissantes : 8, 6, 4, 2, 0 puis répétez",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      9: [
        "Apprenez l'astuce des doigts : utilisez vos 10 doigts pour afficher la table de 9",
        "Utilisez la règle de la somme des chiffres : additionnez les chiffres de la réponse, ça donne toujours 9",
        "Soustrayez depuis 10 fois le nombre : 9×6 = 60-6 = 54, 9×8 = 80-8 = 72",
        "Mémorisez surtout 9×9=81 (9²=81)",
        "Motif des dizaines : dans 9×n, le chiffre des dizaines est toujours n-1",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      10: [
        "La règle la plus facile : ajoutez simplement un zéro à la fin !",
        "Comptez de dix en dix : 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
        "Comprenez la relation de valeur positionnelle : multiplier par 10 décale chaque chiffre vers la gauche",
        "Entraînez-vous avec de grands nombres : 23×10=230, 47×10=470",
        "Utilisez cette table pour vérifier les autres (ex : 9×6 = 60-6)",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      11: [
        "Mémorisez le motif des chiffres doublés : 11, 22, 33, 44, 55, 66, 77, 88, 99",
        "Entraînez-vous à l'astuce de la somme des chiffres : 23×11 = 253 (2_[2+3]_3)",
        "Mémorisez surtout 11×11=121 et 11×12=132",
        "Créez une chanson ou une rime : « Onze fois cinq, cinquante-cinq » (11×5=55)",
        "Trouvez un multiple de 11 dans la vie réelle chaque jour (11 ans, 11 heures, etc.)",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      12: [
        "Entraînez-vous à compter des douzaines : comptez des boîtes d'œufs (12, 24, 36...)",
        "Calculez avec la table de 3 ou 4 : 12=3×4, donc 12×5 = 3×5×4 = 15×4 = 60",
        "Utilisez l'horloge : 12×5=60 minutes (1 heure)",
        "Concentrez-vous sur les multiples les plus difficiles de 12 : 12×7=84, 12×8=96, 12×9=108",
        "Utilisez 12 dans la vie quotidienne : mois, heures, douzaines",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      13: [
        "Utilisez toujours la stratégie 10+3 : 13×6 = 60+18 = 78",
        "Transformez la table de 13 en chanson ou trouvez un rythme",
        "Concentrez-vous sur les paires les plus difficiles : 13×7=91, 13×8=104, 13×9=117",
        "Entraînez-vous sur 2-3 multiples différents de 13 chaque jour, pas tous à la fois",
        "Travaillez à rebours : 130, 117, 104, 91, 78... (soustrayez 13 depuis 130)",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      14: [
        "Mémorisez la table de 7, puis doublez chaque réponse",
        "Utilisez un calendrier bimensuel : périodes de 14 jours",
        "Mémorisez surtout 14×7=98 et 14×8=112",
        "Utilisez 14 pour vérifier la table de 7 : 14×6=84, donc 7×6=42",
        "Comptez de quatorze en quatorze : 14, 28, 42, 56, 70, 84, 98, 112, 126, 140",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      15: [
        "Stratégie de l'horloge : 15 minutes = un quart d'heure. 15×4=60 minutes = 1 heure",
        "Utilisez la table de 3 ou 5 : 15=3×5, donc 15×4 = 3×4×5 = 12×5 = 60",
        "Suivez le motif se terminant par 0 ou 5 : 15, 30, 45, 60, 75, 90...",
        "Entraînez-vous au calcul de pourboires : comment calculer 15% (10%+5%)",
        "Mémorisez les multiples les plus utiles de 15 : 15×4=60, 15×6=90, 15×8=120",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      16: [
        "Chaîne de doublement : doublez le nombre (×2), encore (×4), encore (×8), encore (×16)",
        "Si vous connaissez la table de 8, doublez chaque résultat : 8×7=56, donc 16×7=112",
        "Mémorisez surtout 16×16=256 (2⁸=256)",
        "Reliez-le aux termes informatiques : 16 bits, système hexadécimal",
        "Comptez de seize en seize : 16, 32, 48, 64, 80, 96, 112, 128, 144, 160",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      17: [
        "Perfectionnez la stratégie 20-3 : 17×n = 20n - 3n",
        "Décomposition 10+7 : 17×6 = 60+42 = 102",
        "Entraînez-vous chaque jour sur les paires les plus difficiles : 17×7=119, 17×8=136, 17×9=153",
        "Reliez-le à l'âge de 17 ans : que se passe-t-il à 17, puis à 34 ans (17×2) ?",
        "Soyez patient ! 17 est premier, ça demande de la pratique",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      18: [
        "Utilisez la table de 9 ou de 6 : 18=2×9 ou 18=3×6",
        "Doublez la table de 9 : 9×4=36, donc 18×4=72",
        "Triplez la table de 6 : 6×5=30, donc 18×5=90",
        "Reliez-le à la majorité légale : 18, 36 (18×2), 54 (18×3)",
        "Comptez de dix-huit en dix-huit : 18, 36, 54, 72, 90, 108, 126, 144, 162, 180",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      19: [
        "Utilisez toujours la stratégie 20-1 : 19×n = 20n - n",
        "Exemple : 19×7 = 140-7 = 133. Très simple et efficace !",
        "Décomposition 10+9 : 19×4 = 40+36 = 76",
        "Entraînez-vous sur les multiples les plus difficiles : 19×7=133, 19×8=152, 19×9=171",
        "Apprenez la table de 19 à rebours : 190, 171, 152, 133... pour la flexibilité mentale",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      20: [
        "Le plus simple : multipliez par 10, puis doublez",
        "Ou : ajoutez un zéro à la fin, puis doublez (7×20 : 70 puis ×2=140)",
        "Méthode correcte : 7×10=70, 70×2=140 ou 7×2=14, ajoutez un 0 : 140",
        "Comptez rapidement de vingt en vingt : 20, 40, 60, 80, 100, 120, 140, 160, 180, 200",
        "Entraînez-vous avec de l'argent : comptez des billets de 20",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      21: [
        "Utilisez la stratégie 20+1 : 21×n = 20n + n",
        "Utilisez la relation 3×7 : connaissez-vous la table de 3 ? 3×6=18, 7×6=42, donc 21×6=126",
        "Entraînez-vous sur les multiples les plus difficiles : 21×7=147, 21×8=168, 21×9=189",
        "Reliez-le à la majorité légale : qu'est-ce qui change à 21 ans ?",
        "Comptez de vingt-et-un en vingt-et-un : 21, 42, 63, 84, 105, 126, 147, 168, 189, 210",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      22: [
        "Mémorisez la table de 11, puis doublez chaque résultat",
        "Reliez-le aux équipes de football : 2 équipes = 22 joueurs",
        "Les multiples les plus faciles d'abord : 22×5=110, 22×10=220",
        "Comptez de vingt-deux en vingt-deux : 22, 44, 66, 88, 110, 132, 154, 176, 198, 220",
        "Observez le motif des chiffres doublés dans les 4 premiers résultats : 22, 44, 66, 88",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      23: [
        "Utilisez toujours la stratégie 20+3 : 23×6 = 120+18 = 138",
        "Ou la stratégie 25-2 : 23×4 = 100-8 = 92",
        "Reliez-le aux chromosomes : les humains ont 23 paires de chromosomes",
        "Entraînez-vous chaque jour sur les multiples les plus difficiles : 23×7=161, 23×8=184, 23×9=207",
        "23 est premier, alors soyez patient et pratiquez beaucoup",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      24: [
        "Utilisez la relation des heures : 24 heures × 3 jours = 72 heures",
        "Essayez plusieurs méthodes : 24=2×12, 3×8, 4×6. Laquelle est la plus facile ?",
        "Si vous connaissez la table de 12, doublez : 12×7=84, donc 24×7=168",
        "Comptez par douzaines : 24 = 2 douzaines. 24×5 = 10 douzaines = 120",
        "Comptez de vingt-quatre en vingt-quatre : 24, 48, 72, 96, 120, 144, 168, 192, 216, 240",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      25: [
        "Système des quarts : 25 = 100÷4. Donc 25×4=100, 25×8=200",
        "Mémorisez le motif des deux derniers chiffres : 25, 50, 75, 00 se répète",
        "Entraînez-vous avec de l'argent : comptez des pièces de 25 centimes",
        "Rappelez-vous que c'est le carré de 5 : 25=5×5",
        "Calcul de pourcentages : 25% = 1/4. Utilisez cette relation",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      26: [
        "Si vous connaissez la table de 13, doublez : 13×8=104, donc 26×8=208",
        "Stratégie 25+1 : 26×4 = 100+4 = 104",
        "Reliez-le à l'alphabet : il y a 26 lettres",
        "Comptez de vingt-six en vingt-six : 26, 52, 78, 104, 130, 156, 182, 208, 234, 260",
        "Entraînez-vous sur les multiples les plus difficiles : 26×7=182, 26×9=234",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      27: [
        "Utilisez la stratégie 30-3 : 27×n = 30n - 3n",
        "Si vous connaissez la table de 9, triplez-la : 9×6=54, donc 27×6=162",
        "Rappelez-vous que c'est le cube de 3 : 27=3×3×3",
        "Comptez de vingt-sept en vingt-sept : 27, 54, 81, 108, 135, 162, 189, 216, 243, 270",
        "Entraînez-vous sur les multiples les plus difficiles : 27×7=189, 27×8=216, 27×9=243",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      28: [
        "Utilisez la relation 4×7 : multipliez la table de 4 par 7",
        "Ou doublez la table de 14 : 14×5=70, donc 28×5=140",
        "Reliez-le à février : 28 jours (année normale)",
        "Comptez de vingt-huit en vingt-huit : 28, 56, 84, 112, 140, 168, 196, 224, 252, 280",
        "Mémorisez les multiples les plus utiles : 28×5=140, 28×7=196, 28×10=280",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      29: [
        "Utilisez la stratégie 30-1 : 29×n = 30n - n",
        "Exemple : 29×8 = 240-8 = 232. Très facile !",
        "Reliez-le aux années bissextiles : 29 jours en février",
        "Comptez de vingt-neuf en vingt-neuf : 29, 58, 87, 116, 145, 174, 203, 232, 261, 290",
        "Entraînez-vous sur les multiples les plus difficiles : 29×7=203, 29×9=261",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      30: [
        "Stratégie 3×10 : multipliez par 10, puis par 3",
        "Exemple : 7×30 = 70×3 = 210 ou 7×3=21, ajoutez un 0 : 210",
        "Reliez-le à la demi-heure : 30 minutes",
        "Jours du mois : de nombreux mois ont 30 jours (avril, juin, septembre, novembre)",
        "Comptez de trente en trente : 30, 60, 90, 120, 150, 180, 210, 240, 270, 300",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      31: [
        "Utilisez la stratégie 30+1 : 31×n = 30n + n",
        "Exemple : 31×8 = 240 + 8 = 248. Très simple et efficace !",
        "Reliez-le au calendrier : 31 jours est la durée maximale d'un mois",
        "Comptez de trente-et-un en trente-et-un : 31, 62, 93, 124, 155, 186, 217, 248, 279, 310",
        "Entraînez-vous sur les multiples les plus difficiles : 31×7=217, 31×9=279",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      32: [
        "Utilisez la chaîne de doublement : doublez 16",
        "Exemple : 16×5=80, donc 32×5=160",
        "Rappelez-vous que c'est une puissance de 2 : 32=2×2×2×2×2",
        "Comptez de trente-deux en trente-deux : 32, 64, 96, 128, 160, 192, 224, 256, 288, 320",
        "Reliez-le aux termes informatiques : système 32 bits",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      33: [
        "Utilisez la stratégie 3×11 : triplez la table de 11",
        "Ou multipliez la table de 3 par 11 : 3×7=21, 21×11=231, donc 33×7=231",
        "Observez le motif de répétition : 33, 66, 99 (trois premiers résultats)",
        "Comptez de trente-trois en trente-trois : 33, 66, 99, 132, 165, 198, 231, 264, 297, 330",
        "Entraînez-vous sur les multiples les plus difficiles : 33×7=231, 33×8=264, 33×9=297",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      34: [
        "Si vous connaissez la table de 17, doublez-la : 17×6=102, donc 34×6=204",
        "Stratégie 35-1 : 34×4 = 140-4 = 136",
        "Ou utilisez 30+4 : 34×5 = 150+20 = 170",
        "Comptez de trente-quatre en trente-quatre : 34, 68, 102, 136, 170, 204, 238, 272, 306, 340",
        "Mémorisez les multiples les plus utiles : 34×5=170, 34×10=340",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      35: [
        "Stratégie 5×7 : multipliez la table de 5 par 7 ou l'inverse",
        "Exemple : 35×4 = 5×4×7 = 20×7 = 140",
        "Utilisez le motif du dernier chiffre : toujours 5 ou 0",
        "Comptez de trente-cinq en trente-cinq : 35, 70, 105, 140, 175, 210, 245, 280, 315, 350",
        "Calcul de temps : 35 minutes = demi-heure + 5 minutes",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      36: [
        "Rappelez-vous que c'est le carré de 6 : 36=6×6",
        "Plusieurs méthodes : 36=4×9, 3×12, 2×18. Laquelle est la plus facile ?",
        "Si vous connaissez la table de 9, multipliez par 4 : 9×7=63, 63×4=252, donc 36×7=252",
        "Comptez de trente-six en trente-six : 36, 72, 108, 144, 180, 216, 252, 288, 324, 360",
        "Mesure d'angles : 360° est un tour complet, 36° en est le dixième",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      37: [
        "Utilisez la stratégie 40-3 : 37×n = 40n - 3n",
        "Mémorisez la relation magique avec 111 : 37×3=111, 37×6=222, 37×9=333 !",
        "Exemple : 37×8 = 320 - 24 = 296",
        "Comptez de trente-sept en trente-sept : 37, 74, 111, 148, 185, 222, 259, 296, 333, 370",
        "Découvrez le motif de répétition : résultats intéressants à chaque multiple de 3",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      38: [
        "Si vous connaissez la table de 19, doublez-la : 19×7=133, donc 38×7=266",
        "Stratégie 40-2 : 38×6 = 240 - 12 = 228",
        "Comptez de trente-huit en trente-huit : 38, 76, 114, 152, 190, 228, 266, 304, 342, 380",
        "Entraînez-vous sur les multiples les plus difficiles : 38×7=266, 38×9=342",
        "Reliez-le à la température corporelle : 38°C, c'est une légère fièvre",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      39: [
        "La stratégie 40-1 est parfaite : 39×n = 40n - n",
        "Exemple : 39×7 = 280 - 7 = 273. Très facile !",
        "Ou utilisez 3×13 : triplez la table de 13",
        "Comptez de trente-neuf en trente-neuf : 39, 78, 117, 156, 195, 234, 273, 312, 351, 390",
        "Entraînez-vous sur les multiples les plus difficiles : 39×7=273, 39×8=312",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      40: [
        "Stratégie 4×10 : multipliez par 10, puis par 4",
        "Exemple : 7×40 = 70×4 = 280 ou 7×4=28, ajoutez un 0 : 280",
        "Semaine de travail : 40 heures, la durée standard",
        "Comptez de quarante en quarante : 40, 80, 120, 160, 200, 240, 280, 320, 360, 400",
        "Calcul de pourcentages : 40% = 2/5",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      41: [
        "La stratégie 40+1 est parfaite : 41×n = 40n + n",
        "Exemple : 41×7 = 280 + 7 = 287. Très facile !",
        "Comptez de quarante-et-un en quarante-et-un : 41, 82, 123, 164, 205, 246, 287, 328, 369, 410",
        "Entraînez-vous sur les multiples les plus difficiles : 41×7=287, 41×8=328",
        "Nombre premier : uniquement divisible par 1 et 41",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      42: [
        "Utilisez la relation 6×7 : renforce les deux tables",
        "Comptez de quarante-deux en quarante-deux : 42, 84, 126, 168, 210, 252, 294, 336, 378, 420",
        "Plusieurs méthodes : 42=6×7=2×21=3×14. Laquelle est la plus facile ?",
        "Référence au Guide du voyageur galactique : 42 est célèbre dans la culture populaire !",
        "Entraînez-vous sur les multiples les plus difficiles : 42×7=294, 42×8=336",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      43: [
        "Essayez les stratégies 40+3 ou 45-2",
        "Exemple : 43×6 = 240+18 = 258 ou 270-12 = 258",
        "Comptez de quarante-trois en quarante-trois : 43, 86, 129, 172, 215, 258, 301, 344, 387, 430",
        "Entraînez-vous sur les multiples les plus difficiles : 43×7=301, 43×8=344",
        "Nombre premier : un nombre spécial qui demande des stratégies créatives",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      44: [
        "Quatre fois 11 : quadruplez la table de 11",
        "Exemple : 11×7=77, ×4=308, donc 44×7=308",
        "Comptez de quarante-quatre en quarante-quatre : 44, 88, 132, 176, 220, 264, 308, 352, 396, 440",
        "Motif de répétition : 44, 88 montrent le motif des chiffres doublés",
        "Entraînez-vous sur les multiples les plus difficiles : 44×7=308, 44×9=396",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      45: [
        "Relation 5×9 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 45×7 = 9×7×5 = 63×5 = 315",
        "Comptez de quarante-cinq en quarante-cinq : 45, 90, 135, 180, 225, 270, 315, 360, 405, 450",
        "Angle : 45° est un demi-angle droit, important en géométrie",
        "Temps : 45 minutes = trois quarts d'heure (3/4 d'heure)",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      46: [
        "Le double de 23 : doublez la table de 23",
        "Exemple : 23×7=161, ×2=322, donc 46×7=322",
        "Stratégies 45+1 ou 50-4 : 46×5 = 225+5 = 230",
        "Comptez de quarante-six en quarante-six : 46, 92, 138, 184, 230, 276, 322, 368, 414, 460",
        "Biologie : 46 chromosomes (23 paires) dans l'ADN humain",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      47: [
        "La stratégie 50-3 est parfaite : 47×n = 50n - 3n",
        "Exemple : 47×7 = 350 - 21 = 329. Très facile !",
        "Comptez de quarante-sept en quarante-sept : 47, 94, 141, 188, 235, 282, 329, 376, 423, 470",
        "Entraînez-vous sur les multiples les plus difficiles : 47×7=329, 47×8=376",
        "Nombre premier : nécessite des stratégies mentales particulières",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      48: [
        "Plusieurs méthodes : 48=6×8=4×12=3×16=2×24",
        "Exemple : 48×5 = 12×20 = 240",
        "Comptez de quarante-huit en quarante-huit : 48, 96, 144, 192, 240, 288, 336, 384, 432, 480",
        "Temps : 48 heures = 2 jours. 72 heures = 3 jours",
        "Entraînez-vous sur les multiples les plus difficiles : 48×7=336, 48×9=432",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      49: [
        "Carré de 7 : 49=7×7. Renforce la table de 7",
        "Stratégie 50-1 très facile : 49×n = 50n - n",
        "Exemple : 49×7 = 350 - 7 = 343. Simple !",
        "Comptez de quarante-neuf en quarante-neuf : 49, 98, 147, 196, 245, 294, 343, 392, 441, 490",
        "Nombre carré : 49=7² pour les calculs d'aire en géométrie",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      50: [
        "Stratégie 5×10 : multipliez par 5, ajoutez un 0",
        "Exemple : 8×50 : 8×5=40, ajoutez un 0 : 400",
        "La moitié de 100 : 50×7 = 350 (700÷2)",
        "Comptez de cinquante en cinquante : 50, 100, 150, 200, 250, 300, 350, 400, 450, 500",
        "Pourcentage : 50% = 1/2, la relation la plus importante",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      51: [
        "La stratégie 50+1 est parfaite : 51×n = 50n + n",
        "Exemple : 51×7 = 350 + 7 = 357. Très facile !",
        "Comptez de cinquante-et-un en cinquante-et-un : 51, 102, 153, 204, 255, 306, 357, 408, 459, 510",
        "Relation 3×17 : triplez la table de 17",
        "Entraînez-vous sur les multiples les plus difficiles : 51×7=357, 51×8=408",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      52: [
        "Relation 4×13 : quadruplez la table de 13",
        "Exemple : 13×7=91, ×4=364, donc 52×7=364",
        "Comptez de cinquante-deux en cinquante-deux : 52, 104, 156, 208, 260, 312, 364, 416, 468, 520",
        "Calendrier : 52 semaines = 1 an. Pour les calculs annuels",
        "Cartes à jouer : 52 cartes pour les jeux et les problèmes de probabilité",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      53: [
        "Stratégie 50+3 : 53×n = 50n + 3n",
        "Exemple : 53×6 = 300 + 18 = 318",
        "Comptez de cinquante-trois en cinquante-trois : 53, 106, 159, 212, 265, 318, 371, 424, 477, 530",
        "Entraînez-vous sur les multiples les plus difficiles : 53×7=371, 53×8=424",
        "Nombre premier : demande des stratégies de calcul créatives",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      54: [
        "Relation 6×9 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 54×5 = 9×5×6 = 45×6 = 270",
        "Comptez de cinquante-quatre en cinquante-quatre : 54, 108, 162, 216, 270, 324, 378, 432, 486, 540",
        "Plusieurs méthodes : 54=6×9=2×27=3×18",
        "Entraînez-vous sur les multiples les plus difficiles : 54×7=378, 54×8=432",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      55: [
        "Relation 5×11 : renforce les deux tables",
        "Exemple : 55×4 = 11×4×5 = 44×5 = 220",
        "Comptez de cinquante-cinq en cinquante-cinq : 55, 110, 165, 220, 275, 330, 385, 440, 495, 550",
        "Nombre triangulaire : 55 = 1+2+3+...+10, une propriété mathématique particulière",
        "Entraînez-vous sur les multiples les plus difficiles : 55×7=385, 55×9=495",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      56: [
        "Relation 7×8 : la multiplication la plus difficile ! Renforce les deux tables",
        "Exemple : 56×5 = 7×5×8 = 35×8 = 280",
        "Comptez de cinquante-six en cinquante-six : 56, 112, 168, 224, 280, 336, 392, 448, 504, 560",
        "Alternative : 56=4×14=2×28. Choisissez la méthode la plus simple",
        "Entraînez-vous sur les multiples les plus difficiles : 56×7=392, 56×9=504",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      57: [
        "La stratégie 60-3 est parfaite : 57×n = 60n - 3n",
        "Exemple : 57×7 = 420 - 21 = 399. Très facile !",
        "Comptez de cinquante-sept en cinquante-sept : 57, 114, 171, 228, 285, 342, 399, 456, 513, 570",
        "Relation 3×19 : triplez la table de 19",
        "Entraînez-vous sur les multiples les plus difficiles : 57×7=399, 57×8=456",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      58: [
        "Stratégie 60-2 : 58×n = 60n - 2n",
        "Exemple : 58×6 = 360 - 12 = 348",
        "Comptez de cinquante-huit en cinquante-huit : 58, 116, 174, 232, 290, 348, 406, 464, 522, 580",
        "Le double de 29 : doublez la table de 29",
        "Entraînez-vous sur les multiples les plus difficiles : 58×7=406, 58×9=522",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      59: [
        "Stratégie 60-1 très facile : 59×n = 60n - n",
        "Exemple : 59×7 = 420 - 7 = 413. Parfait !",
        "Comptez de cinquante-neuf en cinquante-neuf : 59, 118, 177, 236, 295, 354, 413, 472, 531, 590",
        "Temps : 59 minutes, 59 secondes — 1 de moins que 60",
        "Entraînez-vous sur les multiples les plus difficiles : 59×7=413, 59×8=472",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      60: [
        "Stratégie 6×10 : multipliez par 6, ajoutez un 0",
        "Exemple : 7×60 : 7×6=42, ajoutez un 0 : 420",
        "Comptez de soixante en soixante : 60, 120, 180, 240, 300, 360, 420, 480, 540, 600",
        "Temps : 60 minutes = 1 heure, 60 secondes = 1 minute",
        "Plusieurs méthodes : 60=6×10=5×12=4×15=3×20=2×30",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      61: [
        "La stratégie 60+1 est parfaite : 61×n = 60n + n",
        "Exemple : 61×7 = 420 + 7 = 427. Très facile !",
        "Comptez de soixante-et-un en soixante-et-un : 61, 122, 183, 244, 305, 366, 427, 488, 549, 610",
        "Entraînez-vous sur les multiples les plus difficiles : 61×7=427, 61×8=488",
        "Nombre premier : demande des stratégies de calcul créatives",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      62: [
        "Stratégie 60+2 : 62×n = 60n + 2n",
        "Exemple : 62×6 = 360 + 12 = 372",
        "Comptez de soixante-deux en soixante-deux : 62, 124, 186, 248, 310, 372, 434, 496, 558, 620",
        "Le double de 31 : doublez la table de 31",
        "Entraînez-vous sur les multiples les plus difficiles : 62×7=434, 62×9=558",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      63: [
        "Relation 7×9 : renforce les deux tables",
        "Exemple : 63×5 = 9×5×7 = 45×7 = 315",
        "Comptez de soixante-trois en soixante-trois : 63, 126, 189, 252, 315, 378, 441, 504, 567, 630",
        "Alternative : 63=3×21. Triplez la table de 21",
        "Entraînez-vous sur les multiples les plus difficiles : 63×7=441, 63×8=504",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      64: [
        "Carré de 8 : 64=8×8=8². Aussi 2⁶",
        "Exemple : 64×5 = 8×5×8 = 40×8 = 320",
        "Comptez de soixante-quatre en soixante-quatre : 64, 128, 192, 256, 320, 384, 448, 512, 576, 640",
        "Échecs : 8×8=64 cases, une application géométrique",
        "Informatique : architecture 64 bits, contexte technologique",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      65: [
        "Relation 5×13 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 65×4 = 13×4×5 = 52×5 = 260",
        "Comptez de soixante-cinq en soixante-cinq : 65, 130, 195, 260, 325, 390, 455, 520, 585, 650",
        "Vous pouvez utiliser les stratégies 60+5 ou 70-5",
        "Entraînez-vous sur les multiples les plus difficiles : 65×7=455, 65×9=585",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      66: [
        "Relation 6×11 : renforce les deux tables",
        "Exemple : 66×5 = 11×5×6 = 55×6 = 330",
        "Comptez de soixante-six en soixante-six : 66, 132, 198, 264, 330, 396, 462, 528, 594, 660",
        "Motif de répétition : 66 (6×11), motif de la table de 11",
        "Entraînez-vous sur les multiples les plus difficiles : 66×7=462, 66×9=594",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      67: [
        "La stratégie 70-3 est parfaite : 67×n = 70n - 3n",
        "Exemple : 67×7 = 490 - 21 = 469. Très facile !",
        "Comptez de soixante-sept en soixante-sept : 67, 134, 201, 268, 335, 402, 469, 536, 603, 670",
        "Entraînez-vous sur les multiples les plus difficiles : 67×7=469, 67×8=536",
        "Nombre premier : nécessite des stratégies mentales particulières",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      68: [
        "Stratégie 70-2 : 68×n = 70n - 2n",
        "Exemple : 68×6 = 420 - 12 = 408",
        "Comptez de soixante-huit en soixante-huit : 68, 136, 204, 272, 340, 408, 476, 544, 612, 680",
        "Relation 4×17 : quadruplez la table de 17",
        "Entraînez-vous sur les multiples les plus difficiles : 68×7=476, 68×9=612",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      69: [
        "Stratégie 70-1 très facile : 69×n = 70n - n",
        "Exemple : 69×7 = 490 - 7 = 483. Parfait !",
        "Comptez de soixante-neuf en soixante-neuf : 69, 138, 207, 276, 345, 414, 483, 552, 621, 690",
        "Relation 3×23 : triplez la table de 23",
        "Entraînez-vous sur les multiples les plus difficiles : 69×7=483, 69×8=552",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      70: [
        "Stratégie 7×10 : multipliez par 7, ajoutez un 0",
        "Exemple : 8×70 : 8×7=56, ajoutez un 0 : 560",
        "Comptez de soixante-dix en soixante-dix : 70, 140, 210, 280, 350, 420, 490, 560, 630, 700",
        "Renforce la table de 7 : chaque résultat est 10 fois 7",
        "Plusieurs méthodes : 70=7×10=5×14=2×35",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      71: [
        "La stratégie 70+1 est parfaite : 71×n = 70n + n",
        "Exemple : 71×7 = 490 + 7 = 497. Très facile !",
        "Comptez de soixante-et-onze en soixante-et-onze : 71, 142, 213, 284, 355, 426, 497, 568, 639, 710",
        "Entraînez-vous sur les multiples les plus difficiles : 71×7=497, 71×8=568",
        "Nombre premier : demande des stratégies de calcul créatives",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      72: [
        "Relation 8×9 : renforce les deux tables",
        "Exemple : 72×5 = 9×5×8 = 45×8 = 360",
        "Comptez de soixante-douze en soixante-douze : 72, 144, 216, 288, 360, 432, 504, 576, 648, 720",
        "Plusieurs méthodes : 72=8×9=6×12=4×18=3×24",
        "Temps : 72 heures = 3 jours. Application pratique",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      73: [
        "Stratégie 70+3 : 73×n = 70n + 3n",
        "Exemple : 73×5 = 350 + 15 = 365 (le nombre de jours dans une année !)",
        "Comptez de soixante-treize en soixante-treize : 73, 146, 219, 292, 365, 438, 511, 584, 657, 730",
        "Entraînez-vous sur les multiples les plus difficiles : 73×7=511, 73×8=584",
        "Nombre premier : le 21e nombre premier, une curiosité mathématique",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      74: [
        "Stratégie 75-1 : 74×n = 75n - n",
        "Exemple : 74×5 = 375 - 5 = 370",
        "Comptez de soixante-quatorze en soixante-quatorze : 74, 148, 222, 296, 370, 444, 518, 592, 666, 740",
        "Relation 2×37 : doublez la table de 37",
        "Entraînez-vous sur les multiples les plus difficiles : 74×7=518, 74×9=666",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      75: [
        "Relations 3×25 ou 5×15 : plusieurs méthodes",
        "Exemple : 75×4 = 25×12 = 300",
        "Comptez de soixante-quinze en soixante-quinze : 75, 150, 225, 300, 375, 450, 525, 600, 675, 750",
        "Pourcentage : 75% = 3/4, une relation fractionnaire importante",
        "Entraînez-vous sur les multiples les plus difficiles : 75×7=525, 75×9=675",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      76: [
        "Stratégie 80-4 : 76×n = 80n - 4n",
        "Exemple : 76×6 = 480 - 24 = 456",
        "Comptez de soixante-seize en soixante-seize : 76, 152, 228, 304, 380, 456, 532, 608, 684, 760",
        "Relation 4×19 : quadruplez la table de 19",
        "Entraînez-vous sur les multiples les plus difficiles : 76×7=532, 76×9=684",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      77: [
        "Relation 7×11 : renforce les deux tables",
        "Exemple : 77×5 = 11×5×7 = 55×7 = 385",
        "Comptez de soixante-dix-sept en soixante-dix-sept : 77, 154, 231, 308, 385, 462, 539, 616, 693, 770",
        "Motif de répétition : 77 (7×11), un motif particulier",
        "Entraînez-vous sur les multiples les plus difficiles : 77×7=539, 77×9=693",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      78: [
        "Stratégie 80-2 : 78×n = 80n - 2n",
        "Exemple : 78×7 = 560 - 14 = 546",
        "Comptez de soixante-dix-huit en soixante-dix-huit : 78, 156, 234, 312, 390, 468, 546, 624, 702, 780",
        "Relation 6×13 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Entraînez-vous sur les multiples les plus difficiles : 78×7=546, 78×9=702",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      79: [
        "Stratégie 80-1 très facile : 79×n = 80n - n",
        "Exemple : 79×7 = 560 - 7 = 553. Parfait !",
        "Comptez de soixante-dix-neuf en soixante-dix-neuf : 79, 158, 237, 316, 395, 474, 553, 632, 711, 790",
        "Entraînez-vous sur les multiples les plus difficiles : 79×7=553, 79×8=632",
        "Nombre premier : 1 de moins que 80, calcul facile",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      80: [
        "Stratégie 8×10 : multipliez par 8, ajoutez un 0",
        "Exemple : 7×80 : 7×8=56, ajoutez un 0 : 560",
        "Comptez de quatre-vingts en quatre-vingts : 80, 160, 240, 320, 400, 480, 560, 640, 720, 800",
        "Renforce la table de 8 : chaque résultat est 10 fois 8",
        "Plusieurs méthodes : 80=8×10=4×20=5×16=2×40",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      81: [
        "Utilisez le fait que c'est le carré de 9 : 81=9×9",
        "Exemple : 81×5 = (9×5)×9 = 45×9 = 405",
        "Stratégie 80+1 : 81×n = 80n + n. Exemple : 81×7 = 560+7 = 567",
        "Comptez de quatre-vingt-un en quatre-vingt-un : 81, 162, 243, 324, 405, 486, 567, 648, 729, 810",
        "Entraînez-vous sur les multiples les plus difficiles : 81×7=567, 81×8=648, 81×9=729",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      82: [
        "Stratégie 80+2 : 82×n = 80n + 2n",
        "Exemple : 82×6 = 480 + 12 = 492",
        "Comptez de quatre-vingt-deux en quatre-vingt-deux : 82, 164, 246, 328, 410, 492, 574, 656, 738, 820",
        "Relation 2×41 : doublez la table de 41",
        "Entraînez-vous sur les multiples les plus difficiles : 82×7=574, 82×9=738",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      83: [
        "Utilisez la stratégie 85-2 ou 80+3",
        "Exemple : 83×6 = 510-12 = 498 ou 480+18 = 498",
        "Comptez de quatre-vingt-trois en quatre-vingt-trois : 83, 166, 249, 332, 415, 498, 581, 664, 747, 830",
        "Nombre premier : demande des stratégies de calcul créatives",
        "Entraînez-vous sur les multiples les plus difficiles : 83×7=581, 83×8=664, 83×9=747",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      84: [
        "Relation 7×12 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 84×5 = 12×5×7 = 60×7 = 420",
        "Comptez de quatre-vingt-quatre en quatre-vingt-quatre : 84, 168, 252, 336, 420, 504, 588, 672, 756, 840",
        "Plusieurs méthodes : 84=7×12=6×14=4×21=3×28",
        "Entraînez-vous sur les multiples les plus difficiles : 84×7=588, 84×9=756",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      85: [
        "Relation 5×17 : vous pouvez utiliser les deux tables, celle de 5 et celle de 17",
        "Exemple : 85×4 = 17×4×5 = 68×5 = 340",
        "Comptez de quatre-vingt-cinq en quatre-vingt-cinq : 85, 170, 255, 340, 425, 510, 595, 680, 765, 850",
        "Dernier chiffre : toujours 5 ou 0",
        "Stratégies 90-5 ou 80+5 : 85×6 = 540-30 = 510",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      86: [
        "Stratégie 90-4 : 86×n = 90n - 4n",
        "Exemple : 86×6 = 540 - 24 = 516",
        "Comptez de quatre-vingt-six en quatre-vingt-six : 86, 172, 258, 344, 430, 516, 602, 688, 774, 860",
        "Relation 2×43 : doublez la table de 43",
        "Entraînez-vous sur les multiples les plus difficiles : 86×7=602, 86×9=774",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      87: [
        "La stratégie 90-3 est parfaite : 87×n = 90n - 3n",
        "Exemple : 87×7 = 630 - 21 = 609. Très facile !",
        "Comptez de quatre-vingt-sept en quatre-vingt-sept : 87, 174, 261, 348, 435, 522, 609, 696, 783, 870",
        "Relation 3×29 : triplez la table de 29",
        "Entraînez-vous sur les multiples les plus difficiles : 87×7=609, 87×8=696, 87×9=783",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      88: [
        "Relation 8×11 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 88×5 = 11×5×8 = 55×8 = 440",
        "Comptez de quatre-vingt-huit en quatre-vingt-huit : 88, 176, 264, 352, 440, 528, 616, 704, 792, 880",
        "Propriété de répétition : facilité de reconnaissance visuelle (88)",
        "Plusieurs méthodes : 88=8×11=4×22=2×44",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      89: [
        "Stratégie 90-1 très facile : 89×n = 90n - n",
        "Exemple : 89×7 = 630 - 7 = 623. Parfait !",
        "Comptez de quatre-vingt-neuf en quatre-vingt-neuf : 89, 178, 267, 356, 445, 534, 623, 712, 801, 890",
        "Entraînez-vous sur les multiples les plus difficiles : 89×7=623, 89×8=712, 89×9=801",
        "Nombre premier : la stratégie 90-1 est la méthode la plus pratique",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      90: [
        "Stratégie 9×10 : multipliez par 9, ajoutez un 0",
        "Exemple : 7×90 : 7×9=63, ajoutez un 0 : 630",
        "Comptez de quatre-vingt-dix en quatre-vingt-dix : 90, 180, 270, 360, 450, 540, 630, 720, 810, 900",
        "Renforce la table de 9 : chaque résultat est 10 fois 9",
        "Plusieurs méthodes : 90=9×10=3×30=5×18=6×15",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      91: [
        "Relation 7×13 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 91×5 = 13×5×7 = 65×7 = 455",
        "Stratégie 90+1 : 91×n = 90n + n. Exemple : 91×7 = 630+7 = 637",
        "Comptez de quatre-vingt-onze en quatre-vingt-onze : 91, 182, 273, 364, 455, 546, 637, 728, 819, 910",
        "Entraînez-vous sur les multiples les plus difficiles : 91×7=637, 91×8=728, 91×9=819",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      92: [
        "Utilisez la stratégie 90+2 ou 100-8",
        "Exemple : 92×6 = 480+12 = 552 ou 600-48 = 552",
        "Comptez de quatre-vingt-douze en quatre-vingt-douze : 92, 184, 276, 368, 460, 552, 644, 736, 828, 920",
        "Relation 4×23 : quadruplez la table de 23",
        "Entraînez-vous sur les multiples les plus difficiles : 92×7=644, 92×9=828",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      93: [
        "Stratégie 90+3 : 93×n = 90n + 3n",
        "Exemple : 93×7 = 630 + 21 = 651",
        "Comptez de quatre-vingt-treize en quatre-vingt-treize : 93, 186, 279, 372, 465, 558, 651, 744, 837, 930",
        "Relation 3×31 : triplez la table de 31",
        "Entraînez-vous sur les multiples les plus difficiles : 93×7=651, 93×8=744, 93×9=837",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      94: [
        "La stratégie 100-6 est parfaite : 94×n = 100n - 6n",
        "Exemple : 94×7 = 700 - 42 = 658. Très facile !",
        "Comptez de quatre-vingt-quatorze en quatre-vingt-quatorze : 94, 188, 282, 376, 470, 564, 658, 752, 846, 940",
        "Relation 2×47 : doublez la table de 47",
        "Entraînez-vous sur les multiples les plus difficiles : 94×7=658, 94×8=752, 94×9=846",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      95: [
        "Relation 5×19 : vous pouvez utiliser les deux tables, celle de 5 et celle de 19",
        "Exemple : 95×4 = 19×4×5 = 76×5 = 380",
        "Comptez de quatre-vingt-quinze en quatre-vingt-quinze : 95, 190, 285, 380, 475, 570, 665, 760, 855, 950",
        "Dernier chiffre : toujours 5 ou 0",
        "Stratégie 100-5 : 95×6 = 600-30 = 570. Très pratique !",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      96: [
        "Relation 8×12 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Exemple : 96×5 = 12×5×8 = 60×8 = 480",
        "Comptez de quatre-vingt-seize en quatre-vingt-seize : 96, 192, 288, 384, 480, 576, 672, 768, 864, 960",
        "Plusieurs méthodes : 96=8×12=6×16=4×24=3×32",
        "Entraînez-vous sur les multiples les plus difficiles : 96×7=672, 96×9=864",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      97: [
        "La stratégie 100-3 est très facile : 97×n = 100n - 3n",
        "Exemple : 97×7 = 700 - 21 = 679. Parfait !",
        "Comptez de quatre-vingt-dix-sept en quatre-vingt-dix-sept : 97, 194, 291, 388, 485, 582, 679, 776, 873, 970",
        "Entraînez-vous sur les multiples les plus difficiles : 97×7=679, 97×8=776, 97×9=873",
        "Nombre premier : la stratégie 100-3 est la méthode la plus pratique",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      98: [
        "La stratégie 100-2 est très facile : 98×n = 100n - 2n",
        "Exemple : 98×7 = 700 - 14 = 686. Parfait !",
        "Comptez de quatre-vingt-dix-huit en quatre-vingt-dix-huit : 98, 196, 294, 392, 490, 588, 686, 784, 882, 980",
        "Relation 2×49 : doublez la table de 49",
        "Entraînez-vous sur les multiples les plus difficiles : 98×7=686, 98×8=784, 98×9=882",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      99: [
        "La stratégie 100-1 est la plus simple : 99×n = 100n - n",
        "Exemple : 99×7 = 700 - 7 = 693. Parfait !",
        "Comptez de quatre-vingt-dix-neuf en quatre-vingt-dix-neuf : 99, 198, 297, 396, 495, 594, 693, 792, 891, 990",
        "Relation 9×11 : vous pouvez utiliser l'une ou l'autre des deux tables",
        "Motif de répétition : 99 facilite la reconnaissance visuelle",
      ],
      // Rewritten 2026-07-30 — replaced Spanish contamination
      100: [
        "La table la plus simple ! Ajoutez deux zéros à la fin",
        "Exemple : 7×100 = 700. Ajoutez simplement 00 après le 7 !",
        "Comptez de cent en cent : 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000",
        "Relation 10×10 : 10 fois la table de 10",
        "C'est la base des calculs de pourcentages : 100%=complet, la base de tout !",
      ],
    }

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      1: [
        { context: "Être le numéro un", detail: "Dans de nombreuses langues et cultures, être le numéro un signifie occuper la première place ou le rang le plus élevé — des podiums sportifs aux classements scolaires." },
        { context: "Un seul objet", detail: "Chaque fois que vous comptez un seul objet — une pomme, une chaise — vous appliquez l'idée qu'un groupe de 1 est simplement cette chose-là." },
        { context: "La première position dans une série", detail: "Page 1, Jour 1, Manche 1 — le 1 marque le point de départ d'innombrables systèmes de numérotation." },
      ],
      2: [
        { context: "Paires de chaussures, de chaussettes et de gants", detail: "La plupart des paires du quotidien viennent par 2 — un modèle concret et direct du doublement." },
        { context: "Les yeux et les oreilles", detail: "Le corps humain a 2 yeux et 2 oreilles, parmi bien d'autres organes en paire." },
        { context: "Les roues d'un vélo", detail: "Un vélo standard a 2 roues, contrairement à un tricycle (3) ou un monocycle (1)." },
        { context: "Le code binaire en informatique", detail: "Les ordinateurs stockent et traitent l'information en binaire (base 2), construit entièrement à partir de deux chiffres : 0 et 1." },
      ],
      3: [
        { context: "Les feux tricolores", detail: "Les feux de circulation standards utilisent 3 couleurs : rouge, orange et vert." },
        { context: "Les triangles", detail: "Tout triangle a exactement 3 côtés et 3 angles, le polygone le plus simple qui soit." },
        { context: "Les podiums de médailles", detail: "Les Jeux olympiques et de nombreuses autres compétitions décernent 3 médailles : or, argent, bronze." },
        { context: "Les couleurs primaires", detail: "Dans la théorie des couleurs enseignée traditionnellement à l'école, le rouge, le jaune et le bleu sont considérés comme les 3 couleurs primaires." },
      ],
      4: [
        { context: "Les quatre saisons", detail: "Dans de nombreuses régions du monde, l'année est découpée en 4 saisons : printemps, été, automne et hiver." },
        { context: "Les points cardinaux", detail: "Une boussole a 4 directions principales : nord, sud, est et ouest." },
        { context: "Les pieds d'une table", detail: "La plupart des tables et des chaises reposent sur 4 pieds pour plus de stabilité." },
        { context: "Les couleurs d'un jeu de cartes", detail: "Un jeu de 52 cartes standard se divise en 4 couleurs : cœur, carreau, trèfle et pique." },
      ],
      5: [
        { context: "Les doigts d'une main", detail: "La plupart des gens ont 5 doigts par main, ce qui fait du 5 l'un des nombres les plus naturels pour apprendre à compter très tôt." },
        { context: "Les cinq sens", detail: "La vue, l'ouïe, l'odorat, le goût et le toucher sont communément décrits comme les 5 sens traditionnels de l'être humain." },
        { context: "Un pentagone", detail: "Un pentagone est une figure à cinq côtés, et le Pentagone, siège du ministère de la Défense des États-Unis, doit justement son nom à cette forme." },
        { context: "L'argent en pièces ou billets de 5", detail: "De nombreuses monnaies incluent une unité de 5, comme la pièce de 5 centimes d'euro ou le billet de 5 euros." },
      ],
      6: [
        { context: "Les faces d'un dé", detail: "Un dé à six faces standard (un cube) a exactement 6 faces." },
        { context: "Les pattes des insectes", detail: "Tous les insectes, par définition, ont 6 pattes — l'un des traits qui les distinguent des araignées, qui en ont 8." },
        { context: "Les cordes d'une guitare", detail: "Une guitare acoustique ou électrique standard a 6 cordes." },
        { context: "Une demi-douzaine", detail: "Les œufs et les pâtisseries se vendent souvent par demi-douzaine — un lot de 6." },
      ],
      7: [
        { context: "Les 7 jours de la semaine", detail: "Utilisés aujourd'hui dans presque tous les systèmes de calendrier au monde." },
        { context: "Les 7 continents", detail: "Afrique, Antarctique, Asie, Océanie, Europe, Amérique du Nord et Amérique du Sud — selon le modèle le plus enseigné à l'école." },
        { context: "Les 7 notes d'une gamme musicale", detail: "Do, Ré, Mi, Fa, Sol, La, Si — avant que le motif ne se répète une octave plus haut." },
        { context: "Les 7 couleurs de l'arc-en-ciel", detail: "Rouge, orange, jaune, vert, bleu, indigo et violet — une répartition popularisée pour la première fois par Isaac Newton." },
        { context: "Les Sept Merveilles du monde antique", detail: "Dont la grande pyramide de Gizeh, la seule encore debout aujourd'hui." },
      ],
      8: [
        { context: "Les pattes des araignées", detail: "Les araignées et autres arachnides ont 8 pattes, contrairement aux insectes qui en ont 6." },
        { context: "Les bras d'une pieuvre", detail: "Une pieuvre a 8 bras — d'où vient son nom en grec, 'okto', qui signifie huit." },
        { context: "Un octet en informatique", detail: "En informatique, 8 bits forment 1 octet, l'unité de base pour mesurer le stockage et la mémoire numériques." },
        { context: "Une octave en musique", detail: "En musique occidentale, une octave couvre 8 notes (par exemple de Do au Do suivant : Do, Ré, Mi, Fa, Sol, La, Si, Do)." },
      ],
      9: [
        { context: "Les manches au baseball", detail: "Un match de baseball standard se compose de 9 manches." },
        { context: "Un carré de 3×3", detail: "Le 9 est un carré parfait : une grille de 3 lignes et 3 colonnes contient exactement 9 cases, comme un plateau de morpion." },
        { context: "Le système solaire, autrefois", detail: "Pendant une grande partie du XXe siècle, on enseignait qu'il existait 9 planètes ; Pluton a été reclassée planète naine en 2006, laissant 8 planètes reconnues aujourd'hui." },
      ],
      10: [
        { context: "Le système décimal", detail: "Presque tous les systèmes de comptage modernes sont en base 10, construits entièrement à partir de groupes de dix." },
        { context: "Les doigts des mains et des pieds", detail: "La plupart des gens ont 10 doigts et 10 orteils, ce qui expliquerait en partie pourquoi le comptage en base 10 s'est autant répandu au fil de l'histoire." },
        { context: "Le décathlon", detail: "Le décathlon est une épreuve d'athlétisme composée exactement de 10 disciplines." },
        { context: "L'argent en unités de 10", detail: "De nombreuses monnaies s'organisent autour d'unités de 10, comme les billets de 10 euros." },
      ],
      11: [
        { context: "Les joueurs d'une équipe de football", detail: "Chaque équipe aligne 11 joueurs sur le terrain lors d'un match de football standard." },
        { context: "Les nombres à deux chiffres identiques", detail: "Le 11 est le plus petit nombre à deux chiffres formé d'un seul chiffre répété, un motif qui se retrouve directement dans sa table de multiplication." },
      ],
      12: [
        { context: "Les mois de l'année", detail: "L'année civile est divisée en 12 mois." },
        { context: "Les pouces dans un pied", detail: "Dans le système de mesure impérial, 1 pied équivaut à 12 pouces." },
        { context: "Les chiffres sur un cadran de montre", detail: "Un cadran de montre analogique standard est divisé en 12 chiffres." },
        { context: "Une douzaine", detail: "Les œufs et les pâtisseries se vendent souvent à la douzaine — un lot de 12." },
        { context: "Les signes du zodiaque", detail: "Le zodiaque occidental se divise traditionnellement en 12 signes." },
      ],
      13: [
        { context: "Les 13 colonies américaines d'origine", detail: "Les États-Unis ont débuté comme 13 colonies britanniques le long de la côte atlantique, avant de déclarer leur indépendance." },
        { context: "Cartes par couleur", detail: "Un jeu de 52 cartes standard compte 13 cartes dans chacune de ses quatre couleurs." },
        { context: "La douzaine du boulanger", detail: "Traditionnellement, une 'douzaine du boulanger' désigne 13 articles au lieu de 12." },
        { context: "La triskaïdékaphobie", detail: "Le 13 est le nombre le plus associé à la malchance dans la culture occidentale — cette peur a même son propre nom." },
      ],
      14: [
        { context: "Quatorze jours, deux semaines", detail: "En anglais, le mot 'fortnight' désigne une période de 14 jours." },
        { context: "La Saint-Valentin", detail: "La Saint-Valentin tombe chaque année le 14 février." },
        { context: "Les vers d'un sonnet", detail: "Un sonnet classique, comme ceux écrits par Shakespeare, compte exactement 14 vers." },
      ],
      15: [
        { context: "Un quart d'heure", detail: "15 minutes forment un quart d'heure, l'un des usages les plus courants de ce nombre au quotidien." },
        { context: "L'effectif d'une équipe de rugby à XV", detail: "Une équipe de rugby à XV aligne 15 joueurs sur le terrain, contrairement aux 13 du rugby à XIII." },
      ],
      16: [
        { context: "Onces dans une livre", detail: "Dans le système de mesure américain, 1 livre équivaut à 16 onces." },
        { context: "Le système hexadécimal en informatique", detail: "Les informaticiens utilisent la base 16 (hexadécimale) comme façon compacte de représenter des données binaires." },
        { context: "Les pions sur un échiquier", detail: "Un jeu d'échecs comprend 16 pions au total — 8 pour chaque joueur." },
        { context: "Les 'sweet sixteen'", detail: "Le 16e anniversaire est considéré comme une étape marquante dans plusieurs cultures." },
      ],
      17: [
        { context: "Le nombre qui 'semble' le plus aléatoire", detail: "Dans des sondages informels où l'on demande de choisir un nombre 'au hasard' dans un intervalle restreint, le 17 est choisi plus souvent que ne le prédirait le hasard réel — une curiosité de la psychologie humaine plutôt que du véritable aléatoire." },
      ],
      18: [
        { context: "La majorité légale en France", detail: "En France comme dans de nombreux pays, la majorité légale est fixée à 18 ans." },
        { context: "Les trous d'un parcours de golf", detail: "Un parcours de golf standard compte 18 trous." },
      ],
      19: [
        { context: "La fin de l'adolescence", detail: "En anglais, les nombres se terminant par '-teen' vont de 13 à 19 — le 19 est le dernier avant d'atteindre 20 ans." },
      ],
      20: [
        { context: "La vision 20/20", detail: "'20/20 vision' est le terme standard anglais pour une acuité visuelle normale, mesurée à une distance de 20 pieds." },
        { context: "Doigts des mains et des pieds réunis", detail: "La plupart des gens ont 10 doigts et 10 orteils, soit 20 au total." },
      ],
      21: [
        { context: "Le blackjack", detail: "Au jeu de cartes blackjack, 21 est le score cible que les joueurs cherchent à atteindre sans le dépasser." },
        { context: "L'âge légal pour boire de l'alcool aux États-Unis", detail: "Aux États-Unis, l'âge minimum légal pour consommer de l'alcool est de 21 ans, uniformisé dans tout le pays depuis une loi fédérale de 1984." },
      ],
      22: [
        { context: "Les joueurs sur un terrain de football", detail: "Un match de football complet réunit 22 joueurs sur le terrain — 11 par équipe." },
        { context: "Catch-22", detail: "Le titre du roman de Joseph Heller, 'Catch-22', est devenu en anglais une expression courante pour désigner une situation sans issue." },
      ],
      23: [
        { context: "Les paires de chromosomes humains", detail: "Une cellule humaine typique contient 23 paires de chromosomes — 46 au total." },
      ],
      24: [
        { context: "24 heures dans une journée", detail: "Une journée complète compte 24 heures." },
        { context: "24 carats, l'or pur", detail: "L'or 24 carats est considéré comme de l'or pur, la pureté la plus élevée utilisée en joaillerie." },
        { context: "La cadence des films", detail: "24 images par seconde est la cadence standard du cinéma depuis l'arrivée du son." },
      ],
      25: [
        { context: "Un quart de 100", detail: "25 est exactement le quart de 100, d'où le lien étroit entre ce nombre et les pourcentages." },
        { context: "Les noces d'argent", detail: "Le 25e anniversaire de mariage est traditionnellement appelé 'noces d'argent'." },
      ],
      26: [
        { context: "Les lettres de l'alphabet français", detail: "L'alphabet français compte 26 lettres, de A à Z." },
        { context: "La longueur d'un marathon", detail: "Un marathon mesure exactement 42,195 km, soit environ 26,2 miles." },
        { context: "Les os du pied humain", detail: "Selon les références anatomiques standards, chaque pied humain compte 26 os." },
      ],
      27: [
        { context: "Le 'Club des 27'", detail: "Plusieurs musiciens influents — dont Jimi Hendrix, Janis Joplin et Kurt Cobain — sont morts à 27 ans, un schéma que la culture populaire a baptisé le 'Club des 27'." },
      ],
      28: [
        { context: "Les jours de février", detail: "Février compte 28 jours chaque année non bissextile." },
        { context: "Le cycle lunaire", detail: "Le cycle des phases de la Lune est souvent décrit, de façon approximative, comme durant environ 28 jours, bien que le mois synodique exact avoisine plutôt 29,5 jours." },
      ],
      29: [
        { context: "Février en année bissextile", detail: "Lors d'une année bissextile, février compte 29 jours au lieu des 28 habituels." },
      ],
      30: [
        { context: "Les mois de 30 jours", detail: "Avril, juin, septembre et novembre comptent chacun 30 jours, comme le rappelle la comptine traditionnelle sur les mois." },
      ],
      31: [
        { context: "Les mois de 31 jours", detail: "Janvier, mars, mai, juillet, août, octobre et décembre comptent chacun 31 jours — sept mois au total." },
      ],
      32: [
        { context: "Le point de congélation de l'eau", detail: "L'eau gèle à 32°F sur l'échelle Fahrenheit." },
        { context: "Une dentition adulte complète", detail: "Une dentition humaine adulte complète, dents de sagesse comprises, compte 32 dents au total." },
        { context: "Le nombre d'équipes de la NFL", detail: "La National Football League (NFL) est composée de 32 équipes." },
      ],
      33: [
        { context: "Les vertèbres de la colonne vertébrale humaine", detail: "On dit souvent que la colonne vertébrale humaine compte 33 vertèbres, bien que plusieurs d'entre elles fusionnent à l'âge adulte au niveau du sacrum et du coccyx." },
        { context: "L'âge du Christ à la crucifixion", detail: "Selon la tradition chrétienne la plus répandue, Jésus avait 33 ans lors de la crucifixion." },
      ],
      35: [
        { context: "Le format de pellicule 35mm", detail: "Le 35mm est depuis longtemps le format standard, aussi bien en photographie qu'au cinéma." },
      ],
      36: [
        { context: "Les pouces dans un yard", detail: "Dans le système de mesure américain, 1 yard équivaut à 36 pouces." },
      ],
      38: [
        { context: "Le 38e parallèle", detail: "Cette ligne de latitude est historiquement associée à la frontière entre la Corée du Nord et la Corée du Sud." },
      ],
      39: [
        { context: "Les 39 marches", detail: "'The 39 Steps' est un thriller classique de 1935 réalisé par Alfred Hitchcock, adapté d'un roman homonyme de 1915." },
      ],
      40: [
        { context: "'Quarante jours et quarante nuits'", detail: "Le nombre 40 revient sans cesse dans la Bible, notamment dans le récit du déluge de la Genèse." },
        { context: "La semaine de travail classique", detail: "Une semaine de travail de 40 heures est une norme courante dans de nombreux pays." },
        { context: "L'origine du mot 'quarantaine'", detail: "'Quarantaine' vient de l'italien 'quaranta giorni' ('quarante jours'), la période d'isolement historiquement imposée aux navires lors des épidémies de peste." },
      ],
      42: [
        { context: "'La réponse à la grande question sur la vie, l'univers et le reste'", detail: "Dans le roman Le Guide du voyageur galactique de Douglas Adams — un auteur anglais, mais l'œuvre est un classique lu dans le monde entier —, un supercalculateur détermine que la réponse à la question ultime est 42." },
        { context: "Le nombre de points sur une paire de dés", detail: "Un dé standard compte 21 points au total (1+2+3+4+5+6), donc une paire de dés totalise 42 points." },
      ],
      44: [
        { context: "Le 44e président des États-Unis", detail: "Barack Obama a été le 44e président des États-Unis." },
      ],
      45: [
        { context: "Les disques 45 tours", detail: "Les 'singles' en vinyle étaient traditionnellement pressés pour tourner à 45 tours par minute." },
      ],
      46: [
        { context: "Les chromosomes d'une cellule humaine", detail: "Une cellule humaine typique contient 46 chromosomes, organisés en 23 paires." },
      ],
      48: [
        { context: "48 heures", detail: "48 heures équivalent exactement à deux journées complètes." },
        { context: "Les États contigus des États-Unis", detail: "Les 48 États contigus des États-Unis excluent seulement l'Alaska et Hawaï, géographiquement séparés." },
      ],
      50: [
        { context: "Les 50 États américains", detail: "Les États-Unis sont composés de 50 États." },
        { context: "Les noces d'or", detail: "Le 50e anniversaire de mariage est traditionnellement appelé 'noces d'or'." },
      ],
      51: [
        { context: "La Zone 51", detail: "La Zone 51 est une célèbre base de l'armée de l'air américaine dans le Nevada, longtemps classifiée et très référencée dans la culture populaire." },
      ],
      52: [
        { context: "Le nombre de semaines dans une année", detail: "Une année standard compte 52 semaines." },
        { context: "Les cartes d'un jeu de cartes", detail: "Un jeu de cartes standard compte 52 cartes, sans les jokers." },
      ],
      54: [
        { context: "Les carrés d'un Rubik's Cube", detail: "Le Rubik's Cube classique 3×3 compte 9 carrés de couleur par face, soit 54 carrés au total sur ses 6 faces." },
      ],
      55: [
        { context: "L'ancienne limite de vitesse américaine", detail: "De 1974 à 1995, 55 miles à l'heure était la limite de vitesse maximale sur les autoroutes américaines, imposée par une loi fédérale." },
      ],
      57: [
        { context: "Le slogan '57 Varieties' de Heinz", detail: "L'entreprise H.J. Heinz utilise le slogan '57 Varieties' depuis 1896, bien après avoir dépassé les 57 produits." },
      ],
      59: [
        { context: "Une seconde avant la minute suivante", detail: "Une minute compte 60 secondes, donc 59 est la dernière seconde avant le début d'une nouvelle minute." },
      ],
      60: [
        { context: "Le nombre de secondes dans une minute", detail: "Une minute compte 60 secondes." },
        { context: "Le nombre de minutes dans une heure", detail: "Une heure compte 60 minutes." },
      ],
      64: [
        { context: "Les cases d'un échiquier", detail: "Un échiquier standard est une grille de 8×8 et compte exactement 64 cases." },
        { context: "Une boîte classique de crayons Crayola", detail: "L'emblématique 'Big Box' Crayola compte depuis longtemps 64 couleurs de crayons." },
        { context: "La Nintendo 64", detail: "La Nintendo 64 était une console de jeu culte des années 90, nommée d'après son processeur 64 bits." },
      ],
      65: [
        { context: "L'âge traditionnel de la retraite", detail: "65 ans est depuis longtemps utilisé comme âge standard de départ à la retraite dans de nombreux pays." },
        { context: "Une limite de vitesse courante sur autoroute", detail: "65 miles à l'heure est une limite de vitesse fréquente sur les autoroutes de nombreux États américains." },
      ],
      66: [
        { context: "La Route 66", detail: "La Route 66 fut l'une des premières autoroutes américaines, reliant Chicago à Santa Monica, et devint un symbole culturel du road trip américain." },
      ],
      70: [
        { context: "'Soixante-dix ans' — une durée de vie biblique", detail: "Cette expression traditionnelle désignant une vie de 70 ans provient de la Bible (Psaume 90:10)." },
      ],
      72: [
        { context: "La 'règle des 72'", detail: "En finance, diviser 72 par un taux d'intérêt donne une estimation rapide du nombre d'années nécessaires pour doubler un investissement." },
        { context: "72 heures", detail: "72 heures équivalent exactement à trois journées complètes." },
      ],
      75: [
        { context: "Les noces de diamant", detail: "Dans certaines traditions commémoratives, le 75e anniversaire est appelé 'noces de diamant', bien que ce terme soit plus souvent associé aux 60 ans, comme lors du jubilé de diamant de la reine Élisabeth II en 2012." },
      ],
      76: [
        { context: "'76 trombones'", detail: "'Seventy-Six Trombones' est la célèbre chanson de fanfare de la comédie musicale The Music Man, créée en 1957." },
      ],
      78: [
        { context: "Les disques 78 tours", detail: "Le 78 tours fut la toute première vitesse standard de lecture des disques de gramophone, avant que les formats 33⅓ et 45 tours ne se généralisent." },
      ],
      80: [
        { context: "Le Tour du monde en quatre-vingts jours", detail: "Le roman classique de Jules Verne, publié en 1873, raconte une course pour faire le tour du monde en 80 jours — un des grands classiques de la littérature française." },
      ],
      86: [
        { context: "L'argot de restaurant '86'", detail: "Dans le jargon des bars et restaurants anglophones, '86' un plat signifie le retirer de la carte — l'expression peut aussi désigner le fait d'exclure un client indésirable." },
      ],
      88: [
        { context: "Les touches d'un piano", detail: "Un piano moderne standard compte 88 touches." },
        { context: "Les constellations officiellement reconnues", detail: "L'Union astronomique internationale reconnaît officiellement 88 constellations." },
      ],
      90: [
        { context: "La durée d'un match de football", detail: "Un match de football réglementaire dure 90 minutes, réparties en deux mi-temps de 45 minutes." },
        { context: "Un angle droit", detail: "Un angle droit mesure exactement 90 degrés." },
      ],
      92: [
        { context: "Le numéro atomique de l'uranium", detail: "L'uranium, de numéro atomique 92, est traditionnellement cité comme l'élément naturel le plus lourd du tableau périodique." },
      ],
      95: [
        { context: "Windows 95", detail: "Windows 95 fut un système d'exploitation Microsoft marquant, lancé en 1995, qui a contribué à populariser l'informatique personnelle." },
      ],
      99: [
        { context: "La psychologie des prix en '.99'", detail: "Les commerçants fixent souvent des prix se terminant par .99 (comme 19,99 €) car ils sont perçus comme nettement inférieurs au chiffre rond suivant." },
      ],
      100: [
        { context: "Un siècle", detail: "Une période de 100 ans s'appelle un siècle." },
        { context: "Les 100% comme 'le tout'", detail: "Les pourcentages se construisent autour de 100 comme point de référence d'un ensemble complet." },
        { context: "Le Sénat américain", detail: "Le Sénat des États-Unis compte 100 membres — deux pour chacun des 50 États." },
        { context: "Le point d'ébullition de l'eau", detail: "À pression atmosphérique standard, l'eau bout à 100°C." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "Le 1 n'est ni premier ni composé — par définition, un nombre premier doit avoir exactement deux diviseurs positifs distincts, et 1 n'en a qu'un seul (lui-même)." },
        { fact: "Multiplier n'importe quel nombre par 1 s'appelle la propriété d'identité de la multiplication, l'une des premières règles formelles apprises en arithmétique." },
        { fact: "En chiffres romains, 1 s'écrit avec un seul trait : I — le symbole le plus simple de tout le système de numération." },
      ],
      2: [
        { fact: "Le 2 est le seul nombre premier pair — tous les autres nombres pairs sont divisibles par 2, ce qui en fait des nombres composés." },
        { fact: "Comme 2 est le plus petit nombre premier, il est le point de départ de toute la notion de décomposition en facteurs premiers." },
        { fact: "Doubler est l'une des astuces de calcul mental les plus rapides qui existent — le doublement répété apparaît aussi en informatique sous forme de puissances de 2 : 2, 4, 8, 16, 32..." },
      ],
      3: [
        { fact: "L'astuce de la somme des chiffres pour le 3 fonctionne parce que 10 laisse un reste de 1 dans la division par 3 — la même raison pour laquelle elle fonctionne aussi avec le 9." },
        { fact: "Le 3 est le plus petit nombre premier impair." },
        { fact: "Le triangle est le seul polygone naturellement rigide, c'est pourquoi les formes à trois côtés sont tant utilisées dans les ponts et les charpentes." },
      ],
      4: [
        { fact: "Le 4 est le plus petit nombre composé — le premier nombre supérieur à 1 qui n'est pas premier, puisqu'il se divise exactement par 2." },
        { fact: "Le 4 est un carré parfait : 4 = 2 × 2, soit 2²." },
        { fact: "Comme 4 = 2 × 2, la table du 4 peut toujours être obtenue en doublant la table du 2 — rien de nouveau à mémoriser si on connaît déjà celle du 2." },
      ],
      5: [
        { fact: "Le 5 se situe exactement à mi-chemin entre 0 et 10, c'est pourquoi la table du 5 correspond toujours à la moitié de la table du 10." },
        { fact: "Le 5 est un nombre premier, et c'est le seul nombre premier qui se termine par le chiffre 5." },
        { fact: "Les horloges sont graduées par intervalles de 5 minutes, si bien que multiplier par 5 est ancré dans la façon dont la plupart des gens lisent l'heure sans même y penser." },
      ],
      6: [
        { fact: "Le 6 est le plus petit nombre parfait — la somme de ses diviseurs propres (1, 2 et 3) est exactement égale à lui-même : 1+2+3=6." },
        { fact: "6 = 2 × 3, ce qui en fait le plus petit nombre produit de deux nombres premiers distincts." },
        { fact: "Comme 6 est pair et divisible par 3, tout multiple de 6 est automatiquement divisible à la fois par 2 et par 3." },
      ],
      7: [
        { fact: "Le sept est un nombre premier de Mersenne — il est égal à 2³ − 1 (2 × 2 × 2, moins 1), ce qui en fait partie d'une famille rare de nombres premiers liés aux puissances de 2." },
        { fact: "La semaine de 7 jours remonte à l'astronomie babylonienne antique, qui suivait exactement 7 objets célestes visibles à l'œil nu : le Soleil, la Lune et cinq planètes — Mercure, Vénus, Mars, Jupiter et Saturne." },
        { fact: "Le sept est considéré comme porte-bonheur dans de nombreuses cultures, ce qui explique sa présence fréquente dans les jeux et les traditions liées aux paris à travers le monde." },
        { fact: "Le célèbre numéro de code de James Bond est 007, et Blanche-Neige vit avec exactement sept nains." },
      ],
      8: [
        { fact: "8 = 2³, ce qui en fait le premier nombre cube supérieur à 1 (2 × 2 × 2 = 8)." },
        { fact: "Le mot 'pieuvre' (octopus) et le terme musical 'octave' viennent tous deux de la même racine grecque signifiant huit." },
        { fact: "Le 8 est le seul nombre entre 1 et 12 qui nécessite trois doublements successifs à partir de 2 (2 → 4 → 8)." },
      ],
      9: [
        { fact: "Le 9 est un carré parfait : 9 = 3 × 3, soit 3²." },
        { fact: "Quel que soit le multiple de 9 considéré, additionner ses chiffres de façon répétée finit toujours par redonner 9 — une propriété que les mathématiciens appellent la 'racine numérique'." },
        { fact: "Le 9 est le plus grand nombre à un seul chiffre, juste avant que la notion de position ne commence avec le 10." },
      ],
      10: [
        { fact: "Le mot 'décathlon' vient de racines grecques signifiant 'dix épreuves'." },
        { fact: "Multiplier par 10 est la seule table à un chiffre où chaque résultat suit une règle unique et sans exception : ajouter un zéro." },
        { fact: "Comme la plupart des gens ont 10 doigts, le comptage en base 10 (décimal) est considéré comme l'un des systèmes numériques les plus répandus de l'histoire humaine." },
      ],
      11: [
        { fact: "Le 11 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "Le 11 est le plus petit nombre premier à deux chiffres." },
        { fact: "Le motif des chiffres en miroir (11×4=44, 11×7=77) ne fonctionne que pour des facteurs à un seul chiffre — l'un des exemples les plus clairs, dans les tables de multiplication, d'un motif avec une limite intégrée." },
      ],
      12: [
        { fact: "Le 12 est un nombre hautement composé — il a plus de diviseurs (1, 2, 3, 4, 6, 12) que n'importe quel nombre positif plus petit." },
        { fact: "Le mot 'douzaine' vient de l'ancien français 'douzaine', qui désigne un groupe de douze." },
        { fact: "Un groupe de 144 objets — 12 douzaines — est traditionnellement appelé une 'grosse'." },
      ],
      13: [
        { fact: "13 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "La peur du nombre 13 a un nom officiel : la triskaïdékaphobie." },
        { fact: "Beaucoup d'immeubles omettent le 13e étage dans leur numérotation à cause de la superstition entourant ce nombre." },
      ],
      14: [
        { fact: "14 = 2 × 7, donc chaque résultat de la table du 14 est exactement le double du résultat correspondant dans la table du 7." },
        { fact: "Le mot anglais 'fortnight' est une contraction de 'fourteen nights' (quatorze nuits), l'ancien terme pour deux semaines." },
      ],
      15: [
        { fact: "15 est un nombre triangulaire — il est la somme des cinq premiers nombres entiers : 1+2+3+4+5=15." },
        { fact: "15 = 3 × 5, ce qui en fait le produit des deux plus petits nombres premiers impairs." },
      ],
      16: [
        { fact: "16 = 2⁴, ce qui en fait la première puissance quatrième supérieure à 1." },
        { fact: "16 est aussi un carré parfait : 16 = 4 × 4." },
        { fact: "Les ordinateurs utilisent beaucoup la base 16 (hexadécimale) car chaque chiffre hexadécimal correspond exactement à 4 bits binaires." },
      ],
      17: [
        { fact: "17 est un nombre premier, sans aucune table plus petite qu'on pourrait doubler ou tripler pour l'atteindre." },
        { fact: "Dans des sondages psychologiques informels, quand on demande de citer un nombre 'au hasard' entre 1 et 20, les gens choisissent 17 de façon disproportionnée — une curiosité des préférences numériques humaines plutôt qu'un signe de vrai hasard." },
      ],
      18: [
        { fact: "18 = 2 × 9 = 3 × 6, il existe donc plus d'une façon valide de doubler ou tripler une table plus petite pour y arriver." },
        { fact: "Comme 18 est un multiple de 9, tous ses multiples suivent aussi la règle de la somme des chiffres du 9." },
      ],
      19: [
        { fact: "19 est un nombre premier et c'est le dernier des nombres anglais en '-teen' (de 13 à 19)." },
        { fact: "19 = 20 − 1, donc multiplier par 19 est souvent plus facile en multipliant d'abord par 20, puis en soustrayant le nombre de départ." },
      ],
      20: [
        { fact: "L'ancien mot anglais 'score' signifie 20, comme dans la célèbre formule de Lincoln 'four score and seven years ago' (4×20+7=87)." },
        { fact: "20 = 4 × 5 = 2 × 10, il existe donc plusieurs paires de facteurs pour construire cette table." },
      ],
      21: [
        { fact: "21 = 3 × 7, le produit de deux tables plus petites que les élèves connaissent probablement déjà." },
        { fact: "Au blackjack, 21 est exactement le score cible — le dépasser signifie perdre automatiquement." },
      ],
      22: [
        { fact: "22 = 2 × 11, donc sa table est simplement le double de la table du 11." },
        { fact: "Le titre du roman 'Catch-22' de Joseph Heller est devenu en anglais une expression à part entière pour désigner un dilemme sans issue." },
      ],
      23: [
        { fact: "23 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "Les cellules humaines contiennent 23 paires de chromosomes, l'un des faits les plus cités sur le nombre 23 en dehors des mathématiques." },
      ],
      24: [
        { fact: "24 est un nombre hautement composé — ses diviseurs (1, 2, 3, 4, 6, 8, 12, 24) sont plus nombreux que ceux de tout nombre positif plus petit." },
        { fact: "24 = 2³ × 3, combinant une puissance de 2 avec un facteur 3." },
      ],
      25: [
        { fact: "25 est un carré parfait : 25 = 5 × 5." },
        { fact: "Comme 25 est exactement un quart de 100, multiplier par 25 est souvent plus rapide en faisant ×100 puis ÷4." },
      ],
      26: [
        { fact: "26 = 2 × 13, donc sa table est simplement le double de la table du 13." },
        { fact: "Les 26 lettres de l'alphabet font du 26 l'un des nombres les plus fréquemment rencontrés dans le langage écrit quotidien." },
      ],
      27: [
        { fact: "27 est un cube parfait : 27 = 3 × 3 × 3, soit 3³." },
        { fact: "Le 'Club des 27' est une expression de la culture populaire désignant des musiciens célèbres morts à cet âge — les chercheurs n'ont toutefois trouvé aucune preuve statistique d'un risque de mortalité anormal spécifiquement à 27 ans." },
      ],
      28: [
        { fact: "28 est un nombre parfait — ses diviseurs propres (1, 2, 4, 7, 14) totalisent exactement 28 ; c'est le deuxième nombre parfait après 6." },
        { fact: "28 = 4 × 7, ce qui le relie directement à deux tables plus petites." },
      ],
      29: [
        { fact: "29 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "Le 29 n'apparaît au calendrier que les années bissextiles, quand février gagne un jour supplémentaire." },
      ],
      30: [
        { fact: "30 = 2 × 3 × 5, le produit des trois plus petits nombres premiers." },
        { fact: "30 possède un nombre inhabituellement élevé de petits diviseurs pour sa taille, l'une des raisons pour lesquelles il divise si souvent exactement les mesures du quotidien." },
      ],
      31: [
        { fact: "31 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "31 = 2⁵ − 1, ce qui en fait un nombre premier de Mersenne, la même famille qui inclut 3, 7 et 127." },
      ],
      32: [
        { fact: "32 = 2⁵, la cinquième puissance de 2." },
        { fact: "32 est exactement le double de 16, lui-même le double de 8 — partie d'une chaîne ininterrompue de doublements remontant jusqu'à 1." },
      ],
      33: [
        { fact: "33 = 3 × 11, donc sa table est directement le triple du motif en miroir des chiffres de la table du 11." },
      ],
      34: [
        { fact: "34 est un nombre de Fibonacci — il est la somme des deux nombres de Fibonacci précédents, 13 et 21." },
        { fact: "Dans un carré magique de 4×4, chaque ligne, colonne et diagonale totalise 34 — la plus petite constante magique possible pour une grille 4×4." },
      ],
      35: [
        { fact: "35 = 5 × 7, le produit de deux tables plus petites que les élèves connaissent déjà." },
      ],
      36: [
        { fact: "36 est à la fois un carré parfait (6×6) et un nombre triangulaire (1+2+...+8) — une combinaison que très peu de nombres partagent." },
      ],
      37: [
        { fact: "37 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "37 × 3 = 111, ce qui fait que 37 divise exactement tout nombre à trois chiffres identiques (111, 222, 333... jusqu'à 999)." },
      ],
      38: [
        { fact: "38 = 2 × 19, donc sa table est simplement le double de la table du 19." },
      ],
      39: [
        { fact: "39 = 3 × 13, le produit de deux tables plus petites que les élèves connaissent probablement déjà." },
      ],
      40: [
        { fact: "40 = 2³ × 5, combinant une puissance de 2 avec un facteur 5." },
      ],
      41: [
        { fact: "41 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "41 et 43 sont des nombres premiers jumeaux — ils diffèrent exactement de 2." },
      ],
      42: [
        { fact: "42 = 2 × 3 × 7, combinant trois des plus petits nombres premiers utilisés dans les tables de multiplication standards." },
      ],
      43: [
        { fact: "43 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "43, tout comme 41, forme la plus grande valeur d'une paire de nombres premiers jumeaux séparés par exactement un nombre pair, le 42." },
      ],
      44: [
        { fact: "44 = 4 × 11, donc sa table est directement le quadruple de la table du 11." },
      ],
      45: [
        { fact: "45° est exactement la moitié d'un angle droit (90°), c'est pourquoi les angles de 45 degrés apparaissent constamment en géométrie et en design." },
        { fact: "45 est à la fois un nombre triangulaire (1+2+...+9) et le produit de deux tables plus petites, 9 et 5." },
      ],
      46: [
        { fact: "46 = 2 × 23, donc sa table est simplement le double de la table du 23." },
      ],
      47: [
        { fact: "47 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "47 est une célèbre private joke chez les fans et scénaristes de Star Trek, qui l'auraient glissé volontairement en arrière-plan de nombreux épisodes." },
      ],
      48: [
        { fact: "48 est un nombre hautement composé pour sa taille — ses diviseurs (1, 2, 3, 4, 6, 8, 12, 16, 24, 48) sont plus nombreux que ceux de tout nombre positif plus petit." },
      ],
      49: [
        { fact: "49 est un carré parfait : 49 = 7 × 7." },
        { fact: "7×7=49 est l'un des faits les plus mémorisés de toute la table de multiplication standard." },
      ],
      50: [
        { fact: "50 = 2 × 5², combinant un seul facteur 2 avec le carré de 5." },
      ],
      51: [
        { fact: "51 = 3 × 17, le produit de deux petits nombres premiers." },
      ],
      52: [
        { fact: "52 = 4 × 13, donc sa table est directement le quadruple de la table du 13." },
      ],
      53: [
        { fact: "53 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      54: [
        { fact: "54 = 2 × 3³, combinant un seul facteur 2 avec le cube de 3." },
      ],
      55: [
        { fact: "55 est à la fois un nombre triangulaire (1+2+...+10) et un nombre de Fibonacci — une combinaison que très peu de nombres partagent." },
      ],
      56: [
        { fact: "56 = 2³ × 7, combinant une puissance de 2 avec un facteur 7." },
        { fact: "7×8=56 est l'un des faits individuels les plus souvent confondus dans toute la table de multiplication standard." },
      ],
      57: [
        { fact: "57 = 3 × 19, le produit de deux petits nombres premiers." },
      ],
      58: [
        { fact: "58 = 2 × 29, donc sa table est simplement le double de la table du 29." },
      ],
      59: [
        { fact: "59 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      60: [
        { fact: "60 est un nombre hautement composé — ses diviseurs (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60) sont plus nombreux que ceux de tout nombre positif plus petit." },
        { fact: "Les anciens Babyloniens utilisaient un système numérique en base 60 (sexagésimal), c'est pourquoi le temps et les angles se divisent encore aujourd'hui en unités de 60." },
      ],
      61: [
        { fact: "61 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      62: [
        { fact: "62 = 2 × 31, donc sa table est simplement le double de la table du 31." },
      ],
      63: [
        { fact: "63 = 3² × 7, combinant le carré de 3 avec un facteur 7." },
        { fact: "63 = 2⁶ − 1 (64 moins 1), soit juste un cran en dessous de la puissance de 2 suivante." },
      ],
      64: [
        { fact: "64 est à la fois un carré parfait (8²) et un cube parfait (4³) — l'un des rares nombres à réunir ces deux propriétés." },
      ],
      65: [
        { fact: "65 = 5 × 13, le produit de deux tables plus petites." },
      ],
      66: [
        { fact: "66 = 2 × 3 × 11, combinant trois des tables plus petites." },
      ],
      67: [
        { fact: "67 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      68: [
        { fact: "68 = 4 × 17, donc sa table est directement le quadruple de la table du 17." },
      ],
      69: [
        { fact: "69 = 3 × 23, le produit de deux tables plus petites." },
      ],
      70: [
        { fact: "70 = 2 × 5 × 7, combinant trois des plus petits nombres premiers utilisés dans les tables de multiplication standards." },
      ],
      71: [
        { fact: "71 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      72: [
        { fact: "72 = 2³ × 3², combinant une puissance de 2 avec le carré de 3." },
      ],
      73: [
        { fact: "73 est un nombre premier — ses seuls diviseurs sont 1 et lui-même. C'est aussi le 21e nombre premier en partant de 2." },
        { fact: "En binaire, 73 s'écrit 1001001 — un palindrome qui se lit de la même façon dans les deux sens." },
      ],
      74: [
        { fact: "74 = 2 × 37, donc sa table est simplement le double de la table du 37." },
      ],
      75: [
        { fact: "75 = 3 × 5², combinant un facteur 3 avec le carré de 5." },
      ],
      76: [
        { fact: "76 = 4 × 19, donc sa table est directement le quadruple de la table du 19." },
      ],
      77: [
        { fact: "77 = 7 × 11, le produit de deux tables plus petites." },
        { fact: "77 est un palindrome numérique — il se lit de la même façon de gauche à droite et de droite à gauche." },
      ],
      78: [
        { fact: "78 = 2 × 3 × 13, combinant trois des tables plus petites." },
      ],
      79: [
        { fact: "79 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      80: [
        { fact: "80 = 2⁴ × 5, combinant une puissance de 2 avec un facteur 5." },
        { fact: "80 % équivaut aux quatre cinquièmes (4/5) d'un tout." },
      ],
      81: [
        { fact: "81 est un carré parfait (9×9) et équivaut aussi à 3⁴ (3 puissance 4)." },
      ],
      82: [
        { fact: "82 = 2 × 41, donc sa table est simplement le double de la table du 41." },
      ],
      83: [
        { fact: "83 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
      ],
      84: [
        { fact: "84 = 2² × 3 × 7, combinant une puissance de 2 avec les facteurs 3 et 7." },
      ],
      85: [
        { fact: "85 = 5 × 17, le produit de deux tables plus petites." },
      ],
      86: [
        { fact: "86 = 2 × 43, donc sa table est simplement le double de la table du 43." },
      ],
      87: [
        { fact: "87 = 3 × 29, le produit de deux tables plus petites." },
      ],
      88: [
        { fact: "88 = 8 × 11, le produit de deux tables plus petites." },
      ],
      89: [
        { fact: "89 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "89 est aussi un nombre de Fibonacci — il est la somme des deux nombres de Fibonacci précédents, 34 et 55." },
      ],
      90: [
        { fact: "90 = 2 × 3² × 5, combinant une puissance de 2, le carré de 3 et un facteur 5." },
      ],
      91: [
        { fact: "91 = 7 × 13, ce qui en fait un exemple classique en enseignement des mathématiques d'un nombre qui a l'air premier sans l'être." },
      ],
      92: [
        { fact: "92 = 4 × 23, donc sa table est directement le quadruple de la table du 23." },
      ],
      93: [
        { fact: "93 = 3 × 31, le produit de deux tables plus petites." },
      ],
      94: [
        { fact: "94 = 2 × 47, donc sa table est simplement le double de la table du 47." },
      ],
      95: [
        { fact: "95 = 5 × 19, le produit de deux tables plus petites." },
      ],
      96: [
        { fact: "96 = 2⁵ × 3, combinant une puissance de 2 avec un seul facteur 3." },
      ],
      97: [
        { fact: "97 est un nombre premier — ses seuls diviseurs sont 1 et lui-même." },
        { fact: "97 est le plus grand nombre premier inférieur à 100." },
      ],
      98: [
        { fact: "98 = 2 × 7², combinant un seul facteur 2 avec le carré de 7." },
      ],
      99: [
        { fact: "99 = 9 × 11, le produit de deux tables plus petites." },
        { fact: "Comme 99 est un multiple de 9, les chiffres de tout multiple de 99 totalisent toujours un multiple de 9." },
      ],
      100: [
        { fact: "100 = 10², le carré de 10, et équivaut aussi à 4 × 25." },
      ],
    }

export function getNumberMeaning(n: number): string | null {
  return meanings[n] ?? null
}

export function getWhyImportant(n: number): string | null {
  return importance[n] ?? null
}

export function getPatterns(n: number): PatternItem[] {
  return patterns[n] ?? []
}

export function getCommonMistakes(n: number): MistakeItem[] {
  return mistakes[n] ?? []
}

export function getPracticeStrategies(n: number): string[] {
  return strategies[n] ?? []
}

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}
