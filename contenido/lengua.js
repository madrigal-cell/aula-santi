// ===== LENGUA · 5º Primaria =====
// origen: 'base' = tema general de 5º · 'libro' = sacado de las fotos del libro

AULA.tema('lengua', {
  id: 'lengua-1', num: 1, trimestre: 1, origen: 'base',
  titulo: 'El sustantivo y las sílabas tónicas',
  resumen: 'Clases de sustantivos, género y número · agudas, llanas y esdrújulas',
  aprende: [
    { t: '¿Qué es un sustantivo?', h: '<p>Es la palabra que sirve para <b>nombrar</b> personas, animales, cosas, lugares, sentimientos o ideas.</p><div class="ej">niño · perro · mesa · Sevilla · alegría · amistad</div>' },
    { t: 'Clases de sustantivos', h: '<table><tr><th>Clase</th><th>Qué nombra</th><th>Ejemplos</th></tr>' +
      '<tr><td><b>Común</b></td><td>cualquier ser u objeto de un grupo</td><td>río, ciudad, perro</td></tr>' +
      '<tr><td><b>Propio</b></td><td>un ser concreto. ¡Con <b>mayúscula</b>!</td><td>Guadalquivir, Mairena, Toby</td></tr>' +
      '<tr><td><b>Concreto</b></td><td>lo que se ve, se toca, se oye…</td><td>balón, música, flor</td></tr>' +
      '<tr><td><b>Abstracto</b></td><td>lo que solo se piensa o se siente</td><td>miedo, paz, belleza</td></tr>' +
      '<tr><td><b>Individual</b></td><td>un solo ser en singular</td><td>oveja, árbol, músico</td></tr>' +
      '<tr><td><b>Colectivo</b></td><td>un grupo, aunque esté en singular</td><td>rebaño, bosque, orquesta</td></tr></table>' },
    { t: 'Género y número', h: '<p><b>Género:</b> masculino (<i>el</i> gato) o femenino (<i>la</i> gata). Algunos cambian la palabra entera: <i>caballo → yegua</i>, <i>padre → madre</i>.</p><p><b>Número:</b> singular (uno) o plural (varios).</p><ul><li>Acaba en vocal → añade <b>-s</b>: casa → casas</li><li>Acaba en consonante → añade <b>-es</b>: árbol → árboles</li><li>Acaba en <b>-z</b> → cambia a <b>-ces</b>: lápiz → lápices</li></ul>' },
    { t: 'Sílaba tónica: agudas, llanas y esdrújulas', h: '<p>La <b>sílaba tónica</b> es la que suena más fuerte. Según dónde esté:</p><table><tr><th>Tipo</th><th>Tónica</th><th>Llevan tilde si…</th><th>Ejemplos</th></tr>' +
      '<tr><td><b>Aguda</b></td><td>última</td><td>acaban en <b>n, s o vocal</b></td><td>ca-<b>fé</b>, can-<b>ción</b>, re-<b>loj</b></td></tr>' +
      '<tr><td><b>Llana</b></td><td>penúltima</td><td><b>NO</b> acaban en n, s o vocal</td><td><b>ár</b>-bol, <b>me</b>-sa, <b>lá</b>-piz</td></tr>' +
      '<tr><td><b>Esdrújula</b></td><td>antepenúltima</td><td><b>siempre</b></td><td><b>pá</b>-ja-ro, <b>mú</b>-si-ca</td></tr></table>' +
      '<div class="ojo">Truco: para encontrar la tónica, di la palabra como si llamaras a alguien desde lejos: “¡ca-FÉÉÉ!”.</div>' }
  ],
  chuleta: [
    '<b>Sustantivo</b> = palabra que nombra.',
    '<b>Propio</b> → siempre con mayúscula (Sevilla, Lucía).',
    '<b>Colectivo</b> = grupo en singular: rebaño, enjambre, bosque, orquesta, alumnado.',
    '<b>Abstracto</b> = no se puede tocar ni ver: miedo, amistad, alegría.',
    'Plural: vocal + <b>s</b> · consonante + <b>es</b> · <b>z</b> → <b>ces</b>.',
    '<b>Agudas</b> (última) llevan tilde si acaban en <b>n, s, vocal</b>.',
    '<b>Llanas</b> (penúltima) llevan tilde si <b>NO</b> acaban en n, s, vocal.',
    '<b>Esdrújulas</b> (antepenúltima) llevan tilde <b>siempre</b>.'
  ],
  fichas: [
    ['Sustantivo <b>colectivo</b>', 'Nombra un grupo estando en singular<br><small>rebaño, enjambre, bosque</small>'],
    ['Sustantivo <b>abstracto</b>', 'Nombra algo que no se ve ni se toca<br><small>miedo, paz, cariño</small>'],
    ['Sustantivo <b>propio</b>', 'Nombra un ser concreto y va con mayúscula<br><small>Santi, Sevilla, Tajo</small>'],
    ['Plural de <b>pez</b>', 'peces<br><small>z → ces</small>'],
    ['Palabra <b>aguda</b>', 'Sílaba tónica en la ÚLTIMA<br><small>tilde si acaba en n, s o vocal</small>'],
    ['Palabra <b>llana</b>', 'Sílaba tónica en la PENÚLTIMA<br><small>tilde si NO acaba en n, s o vocal</small>'],
    ['Palabra <b>esdrújula</b>', 'Sílaba tónica en la ANTEPENÚLTIMA<br><small>¡siempre con tilde!</small>'],
    ['Colectivo de <b>abeja</b>', 'enjambre'],
    ['Colectivo de <b>pez</b>', 'banco'],
    ['Colectivo de <b>soldado</b>', 'ejército']
  ],
  preguntas: [
    { p: '¿Qué tipo de sustantivo es <b>rebaño</b>?', o: ['Colectivo', 'Propio', 'Abstracto'], c: 0, e: 'Rebaño nombra un grupo de ovejas aunque está en singular: es colectivo.' },
    { p: '¿Qué tipo de sustantivo es <b>alegría</b>?', o: ['Concreto', 'Abstracto', 'Colectivo'], c: 1, e: 'La alegría no se puede ver ni tocar, se siente: es abstracto.' },
    { p: '¿Cuál de estos es un sustantivo <b>propio</b>?', o: ['ciudad', 'río', 'Guadalquivir', 'montaña'], c: 2, e: 'Guadalquivir es el nombre de un río concreto: va con mayúscula.' },
    { p: 'Escribe el plural de <b>lápiz</b>.', r: ['lápices'], estricto: true, e: 'Las palabras acabadas en z cambian a -ces: lápices (esdrújula, lleva tilde).' },
    { p: 'Escribe el plural de <b>canción</b>.', r: ['canciones'], estricto: true, e: 'Canciones es llana acabada en -s: no lleva tilde.' },
    { p: '¿Cuál es el colectivo de <b>árbol</b>?', o: ['bosque', 'jardín', 'hoja'], c: 0, e: 'Un conjunto de árboles es un bosque (o arboleda).' },
    { p: '<b>Sofá</b> es una palabra…', o: ['aguda', 'llana', 'esdrújula'], c: 0, e: 'so-FÁ: la tónica es la última sílaba → aguda (y lleva tilde porque acaba en vocal).' },
    { p: '<b>Árbol</b> es una palabra…', o: ['aguda', 'llana', 'esdrújula'], c: 1, e: 'ÁR-bol: tónica en la penúltima → llana. Lleva tilde porque acaba en L (no en n, s o vocal).' },
    { p: '<b>Pájaro</b> es una palabra…', o: ['aguda', 'llana', 'esdrújula'], c: 2, e: 'PÁ-ja-ro: tónica en la antepenúltima → esdrújula. Siempre con tilde.' },
    { p: 'Las palabras esdrújulas llevan tilde siempre.', vf: true, e: '¡Sí! Todas: música, pájaro, teléfono, sábado…' },
    { p: '<b>Reloj</b> lleva tilde porque es aguda.', vf: false, e: 'Es aguda, pero acaba en J (no en n, s o vocal), así que NO lleva tilde.' },
    { p: '¿Qué palabra está bien escrita?', o: ['cancion', 'camión', 'arbol', 'examén'], c: 1, e: 'Camión: aguda acabada en n → con tilde. Canción y árbol necesitan tilde; examen es llana acabada en n → sin tilde.' },
    { p: '¿Cuál es el femenino de <b>caballo</b>?', r: ['yegua', 'la yegua'], e: 'Caballo → yegua. Cambia la palabra entera.' },
    { p: '¿Qué palabra es un sustantivo <b>concreto</b>?', o: ['miedo', 'balón', 'amistad', 'bondad'], c: 1, e: 'El balón se puede ver y tocar. Los demás son abstractos.' },
    { p: '¿Cuál es la sílaba tónica de <b>ventana</b>?', o: ['ven', 'ta', 'na'], c: 1, e: 'ven-TA-na: es llana y acaba en vocal, por eso no lleva tilde.' }
  ]
});

AULA.tema('lengua', {
  id: 'lengua-2', num: 2, trimestre: 1, origen: 'base',
  titulo: 'Los determinantes',
  resumen: 'Artículos, demostrativos, posesivos y numerales',
  aprende: [
    { t: '¿Qué es un determinante?', h: '<p>Es la palabra que va <b>delante del sustantivo</b> y lo presenta o concreta. Concuerda con él en género y número.</p><div class="ej"><b>las</b> flores · <b>este</b> libro · <b>mi</b> casa · <b>tres</b> gatos</div>' },
    { t: 'Artículos', h: '<table><tr><th></th><th>Masculino</th><th>Femenino</th></tr><tr><td><b>Determinados</b> (algo conocido)</td><td>el, los</td><td>la, las</td></tr><tr><td><b>Indeterminados</b> (algo no conocido)</td><td>un, unos</td><td>una, unas</td></tr></table><div class="ojo"><b>a + el = al</b> · <b>de + el = del</b>. Voy <b>al</b> cole. Vengo <b>del</b> parque.</div>' },
    { t: 'Demostrativos: indican distancia', h: '<table><tr><th>Distancia</th><th>Masc.</th><th>Fem.</th></tr><tr><td>Cerca</td><td>este, estos</td><td>esta, estas</td></tr><tr><td>Media</td><td>ese, esos</td><td>esa, esas</td></tr><tr><td>Lejos</td><td>aquel, aquellos</td><td>aquella, aquellas</td></tr></table>' },
    { t: 'Posesivos: indican a quién pertenece', h: '<p>Un poseedor: <b>mi, tu, su</b> (mis, tus, sus) · <b>mío, tuyo, suyo</b>…</p><p>Varios poseedores: <b>nuestro, vuestro, su</b> (nuestra, vuestras…)</p><div class="ej"><b>Mi</b> mochila · <b>nuestro</b> equipo · <b>vuestras</b> bicis</div>' },
    { t: 'Numerales: indican cantidad u orden', h: '<p><b>Cardinales</b> (cantidad): uno, dos, diez, cien…</p><p><b>Ordinales</b> (orden): primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo.</p><div class="ej">Santi está en <b>quinto</b> y tiene <b>dos</b> hermanos.</div>' }
  ],
  chuleta: [
    'El <b>determinante</b> va delante del sustantivo y concuerda con él.',
    'Artículos determinados: <b>el, la, los, las</b>. Indeterminados: <b>un, una, unos, unas</b>.',
    '<b>al</b> = a + el · <b>del</b> = de + el (contracciones).',
    'Demostrativos: <b>este</b> (cerca), <b>ese</b> (medio), <b>aquel</b> (lejos).',
    'Posesivos: <b>mi, tu, su, nuestro, vuestro</b>…',
    'Numerales cardinales = cantidad (tres). Ordinales = orden (tercero).'
  ],
  fichas: [
    ['Artículos <b>determinados</b>', 'el, la, los, las'],
    ['Artículos <b>indeterminados</b>', 'un, una, unos, unas'],
    ['a + el =', 'al'],
    ['de + el =', 'del'],
    ['Demostrativo de <b>lejanía</b>', 'aquel, aquella, aquellos, aquellas'],
    ['Posesivos de <b>varios poseedores</b>', 'nuestro/a/os/as, vuestro/a/os/as, su/sus'],
    ['Numeral <b>ordinal</b> de 7', 'séptimo'],
    ['Numeral <b>ordinal</b> de 9', 'noveno']
  ],
  preguntas: [
    { p: 'En “<b>aquellas</b> montañas”, ¿qué tipo de determinante es <i>aquellas</i>?', o: ['Demostrativo', 'Posesivo', 'Artículo'], c: 0, e: 'Aquel/aquella indican que algo está lejos: demostrativo.' },
    { p: 'En “<b>nuestro</b> perro”, ¿qué tipo de determinante es <i>nuestro</i>?', o: ['Numeral', 'Posesivo', 'Demostrativo'], c: 1, e: 'Indica a quién pertenece el perro: posesivo.' },
    { p: '¿Cuál es un artículo <b>indeterminado</b>?', o: ['la', 'los', 'unas', 'el'], c: 2, e: 'un, una, unos, unas son indeterminados.' },
    { p: 'Completa: Vamos ___ parque. (a + el)', r: ['al'], e: 'a + el = al.' },
    { p: 'Completa: Vengo ___ colegio. (de + el)', r: ['del'], e: 'de + el = del.' },
    { p: 'En “el <b>tercer</b> piso”, <i>tercer</i> es un numeral…', o: ['cardinal', 'ordinal'], c: 1, e: 'Indica orden: ordinal.' },
    { p: 'Escribe el ordinal de 10.', r: ['décimo', 'decimo'], e: 'Décimo.' },
    { p: '<b>Este</b> indica que algo está lejos.', vf: false, e: 'Este = cerca. Lejos sería aquel.' },
    { p: '¿Qué grupo está bien concordado?', o: ['los casa', 'esta libros', 'mis zapatillas', 'un ventanas'], c: 2, e: 'Mis zapatillas: plural con plural, femenino con femenino.' },
    { p: 'En “<b>cinco</b> cromos”, <i>cinco</i> es un determinante…', o: ['numeral', 'posesivo', 'artículo'], c: 0, e: 'Indica cantidad: numeral cardinal.' },
    { p: 'El determinante va siempre detrás del sustantivo.', vf: false, e: 'Va DELANTE del sustantivo: “el gato”, “mi casa”.' },
    { p: '¿Cuál es el demostrativo de distancia media (masculino singular)?', r: ['ese'], e: 'este (cerca) · ese (medio) · aquel (lejos).' }
  ]
});

AULA.tema('lengua', {
  id: 'lengua-3', num: 3, trimestre: 1, origen: 'base',
  titulo: 'El adjetivo · sinónimos y antónimos',
  resumen: 'El adjetivo calificativo, sus grados y el vocabulario',
  aprende: [
    { t: '¿Qué es el adjetivo?', h: '<p>Es la palabra que dice <b>cómo es</b> el sustantivo (una cualidad). Concuerda con él en género y número.</p><div class="ej">un perro <b>simpático</b> · unas casas <b>blancas</b></div>' },
    { t: 'Grados del adjetivo', h: '<table><tr><th>Grado</th><th>Ejemplo</th></tr><tr><td><b>Positivo</b>: la cualidad sin más</td><td>Pedro es <b>alto</b>.</td></tr>' +
      '<tr><td><b>Comparativo</b> de superioridad</td><td>Pedro es <b>más</b> alto <b>que</b> Juan.</td></tr><tr><td><b>Comparativo</b> de igualdad</td><td>Pedro es <b>tan</b> alto <b>como</b> Juan.</td></tr><tr><td><b>Comparativo</b> de inferioridad</td><td>Pedro es <b>menos</b> alto <b>que</b> Juan.</td></tr>' +
      '<tr><td><b>Superlativo</b>: la cualidad en grado máximo</td><td>Pedro es <b>altísimo</b> / <b>muy</b> alto.</td></tr></table>' },
    { t: 'Sinónimos y antónimos', h: '<p><b>Sinónimos</b>: palabras que significan lo mismo o casi lo mismo → <i>bonito / precioso</i>.</p><p><b>Antónimos</b>: palabras que significan lo contrario → <i>alto / bajo</i>. Muchos se forman con <b>in-, im-, des-</b>: posible → <b>im</b>posible, hacer → <b>des</b>hacer.</p><div class="ojo">Delante de <b>p</b> y <b>b</b> se escribe <b>m</b>: <b>im</b>posible, <b>im</b>batible.</div>' }
  ],
  chuleta: [
    '<b>Adjetivo</b> = dice cómo es el sustantivo y concuerda con él.',
    'Positivo: alto · Comparativo: <b>más/tan/menos</b> alto <b>que/como</b> · Superlativo: <b>altísimo</b> o <b>muy</b> alto.',
    'Sinónimos = significan lo mismo. Antónimos = lo contrario.',
    'Prefijos de contrario: <b>in-, im-, des-</b>.',
    'Antes de <b>p</b> y <b>b</b>, <b>m</b>: imposible, ambos.'
  ],
  fichas: [
    ['Grado <b>superlativo</b> de “fácil”', 'facilísimo / muy fácil'],
    ['Comparativo de <b>igualdad</b>', 'tan … como'],
    ['Sinónimo de <b>contento</b>', 'alegre, feliz'],
    ['Antónimo de <b>posible</b>', 'imposible'],
    ['Antónimo de <b>hacer</b>', 'deshacer'],
    ['Sinónimo de <b>rápido</b>', 'veloz']
  ],
  preguntas: [
    { p: 'En “un examen <b>facilísimo</b>”, el adjetivo está en grado…', o: ['positivo', 'comparativo', 'superlativo'], c: 2, e: 'El sufijo -ísimo indica el grado máximo: superlativo.' },
    { p: '“Mi bici es <b>tan rápida como</b> la tuya.” ¿Qué grado es?', o: ['Comparativo de igualdad', 'Comparativo de superioridad', 'Superlativo'], c: 0, e: 'tan … como = igualdad.' },
    { p: '“El Everest es <b>más alto que</b> el Mulhacén.” ¿Qué grado es?', o: ['Comparativo de inferioridad', 'Comparativo de superioridad', 'Positivo'], c: 1, e: 'más … que = superioridad.' },
    { p: 'Escribe un antónimo de <b>feliz</b> formado con un prefijo.', r: ['infeliz'], e: 'in + feliz = infeliz.' },
    { p: 'Escribe el antónimo de <b>paciente</b> con prefijo.', r: ['impaciente'], estricto: true, e: 'Delante de p va m: impaciente.' },
    { p: '¿Cuál es sinónimo de <b>enorme</b>?', o: ['diminuto', 'gigantesco', 'estrecho'], c: 1, e: 'Enorme y gigantesco significan casi lo mismo.' },
    { p: '¿Cuál es antónimo de <b>valiente</b>?', o: ['cobarde', 'fuerte', 'atrevido'], c: 0, e: 'Lo contrario de valiente es cobarde.' },
    { p: '¿Cuál es el adjetivo en “La gata negra duerme”?', r: ['negra'], e: 'Negra dice cómo es la gata.' },
    { p: 'El adjetivo concuerda con el sustantivo en género y número.', vf: true, e: 'Sí: “casas blancas”, no “casas blanco”.' },
    { p: 'Escribe el superlativo con -ísimo de <b>grande</b>.', r: ['grandísimo'], estricto: true, e: 'Grandísimo (esdrújula, con tilde).' },
    { p: '¿Qué palabra está bien escrita?', o: ['inposible', 'imposible', 'imposivle'], c: 1, e: 'Antes de p se escribe m: imposible.' }
  ]
});
