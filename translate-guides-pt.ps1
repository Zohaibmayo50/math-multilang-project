# Comprehensive Spanish to Portuguese translation for guide pages
$translations = @{
    # Headers and imports
    "import Footer from '@/app/components/Footer'" = "import Header from '@/app/components/pt/Header'`nimport Footer from '@/app/components/pt/Footer'"
    '(?<=return \(\s*<>\s*)' = '<Header />`n      '
    
    # Common phrases
    'tablas de multiplicar' = 'tabuada'
    'Tabla de Multiplicar' = 'Tabuada'
    'las tablas' = 'a tabuada'
    'la tabla' = 'a tabuada'
    'multiplicación' = 'multiplicação'
    'matemáticas' = 'matemática'
    
    # Student guide specific
    'Para Estudiantes' = 'Para Estudantes'
    'Aprende Paso a Paso' = 'Aprendizado Passo a Passo'
    '¡Aprender las Tablas de Multiplicar es Muy Fácil!' = 'Aprender Tabuada é Muito Fácil!'
    '¡Avanza a tu propio ritmo' = 'Avance no seu próprio ritmo'
    'aprende mientras te diviertes' = 'aprenda enquanto se diverte'
    'conviértete en un héroe de las matemáticas' = 'torne-se um herói da matemática'
    'Esta guía te ayudará' = 'Este guia ajudará você'
    '¡Tú también puedes hacerlo!' = 'Você também pode fazer isso!'
    '¿Por Qué Debo Aprender las Tablas de Multiplicar\?' = 'Por Que Devo Aprender Tabuada?'
    'paso a paso' = 'passo a passo'
    
    # Benefits
    'Cálculo Rápido' = 'Cálculo Rápido'
    'Podrás resolver problemas' = 'Você poderá resolver problemas'
    'mucho más rápido' = 'muito mais rápido'
    'Uso en la Vida Diaria' = 'Uso no Dia a Dia'
    'Será útil en todas partes' = 'Será útil em todos os lugares'
    'al hacer compras' = 'ao fazer compras'
    'en juegos' = 'em jogos'
    '¡en todas partes!' = 'em todos os lugares!'
    'Mayor Confianza' = 'Maior Confiança'
    'Tu confianza en las matemáticas aumentará' = 'Sua confiança em matemática aumentará'
    'tendrás más éxito' = 'você terá mais sucesso'
    'Poder Cerebral' = 'Poder Cerebral'
    'Tu memoria se fortalecerá' = 'Sua memória ficará mais forte'
    'aprenderás a pensar más rápido' = 'você aprenderá a pensar mais rápido'
    
    # Learning sections
    'Camino de Aprendizaje Paso a Paso' = 'Caminho de Aprendizado Passo a Passo'
    'Comienza con lo Fácil' = 'Comece com o Fácil'
    'Encuentra los Patrones' = 'Encontre os Padrões'
    'Practica Regularmente' = 'Pratique Regularmente'
    'Usa Juegos' = 'Use Jogos'
    'Repasa' = 'Revise'
    
    # Parents guide
    'Para Padres' = 'Para Pais'
    'Cómo Ayudar a Tu Hijo' = 'Como Ajudar Seu Filho'
    '¿Por Qué es Importante\?' = 'Por Que é Importante?'
    'Estrategias de Aprendizaje Efectivas' = 'Estratégias de Aprendizado Eficazes'
    'Avanza con Pequeños Pasos' = 'Avance com Pequenos Passos'
    'Usa Ayudas Visuales' = 'Use Ajudas Visuais'
    'Conviértelo en un Juego' = 'Transforme em um Jogo'
    'Sé Paciente' = 'Seja Paciente'
    
    # Teachers guide
    'Para Profesores' = 'Para Professores'
    'Estrategias de Enseñanza' = 'Estratégias de Ensino'
    'Material de Enseñanza en el Aula' = 'Material de Ensino em Sala de Aula'
    'Enfoque Pedagógico' = 'Abordagem Pedagógica'
    'Métodos de Enseñanza' = 'Métodos de Ensino'
    'Actividades del Aula' = 'Atividades em Sala de Aula'
    'Evaluación' = 'Avaliação'
    
    # Common UI elements
    'Comenzar Ahora' = 'Comece Agora'
    'Leer Más' = 'Leia Mais'
    'Volver al Inicio' = 'Voltar ao Início'
    'Siguiente' = 'Próximo'
    'Anterior' = 'Anterior'
}

# Process each guide file
$files = @(
    @{src='.\app\para-estudiantes\page.tsx'; dest='.\app\para-estudantes\page.tsx'; 
      metadata=@"
export const metadata = {
  title: 'Para Estudantes: Guia de Tabuada | Aprendizado Passo a Passo',
  description: 'Guia passo a passo para aprender tabuada facilmente. Aprenda no seu próprio ritmo com materiais visuais, atividades práticas e jogos divertidos!',
  keywords: 'aprender tabuada, matemática para estudantes, guia de tabuada, multiplicação passo a passo',
  alternates: {
    canonical: '/para-estudantes',
  },
}
"@},
    @{src='.\app\para-padres\page.tsx'; dest='.\app\para-pais\page.tsx';
      metadata=@"
export const metadata = {
  title: 'Para Pais: Guia de Tabuada | Como Ajudar Seu Filho',
  description: 'Como apoiar o aprendizado de tabuada do seu filho? Estratégias eficazes, técnicas de motivação e atividades em casa.',
  keywords: 'ensinar tabuada, guia para pais, matemática infantil, atividades em casa',
  alternates: {
    canonical: '/para-pais',
  },
}
"@},
    @{src='.\app\para-profesores\page.tsx'; dest='.\app\para-professores\page.tsx';
      metadata=@"
export const metadata = {
  title: 'Para Professores: Guia de Tabuada | Material de Ensino em Sala de Aula',
  description: 'Recursos profissionais para ensinar tabuada em sala de aula, estratégias pedagógicas, sugestões de atividades e ferramentas de avaliação.',
  keywords: 'ensinar tabuada, atividades em sala de aula, métodos pedagógicos, ensino de matemática',
  alternates: {
    canonical: '/para-professores',
  },
}
"@}
)

foreach ($file in $files) {
    Write-Host "Processing $($file.src)..."
    $content = Get-Content $file.src -Raw -Encoding UTF8
    
    # Apply all translations
    foreach ($key in $translations.Keys) {
        $content = $content -replace $key, $translations[$key]
    }
    
    # Replace metadata
    $content = $content -replace 'export const metadata = \{[^}]+(\{[^}]+\})+[^}]*\}', $file.metadata
    
    # Ensure Header is added after opening <>
    if ($content -notmatch '<Header />') {
        $content = $content -replace '(?<=return \(\s*<>\s*)', "<Header />`n      "
    }
    
    $content | Set-Content $file.dest -Encoding UTF8 -NoNewline
    Write-Host "Created $($file.dest)"
}

Write-Host "`nTranslation complete!"
