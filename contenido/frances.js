// ===== FRANCÉS · 5º Primaria =====
// voz:'fr-FR' → las fichas tienen botón de escuchar. En el texto, <span class="say">mot</span> se puede pulsar para oírlo.

AULA.tema('frances', {
  id: 'frances-1', num: 1, trimestre: 1, origen: 'base', voz: 'fr-FR',
  titulo: 'Bonjour ! Se présenter',
  resumen: 'Saludar, despedirse y presentarse',
  aprende: [
    { t: 'Saludar y despedirse', h: '<p>Pulsa las palabras para oírlas 🔊</p><table><tr><th>Francés</th><th>Español</th></tr>' +
      '<tr><td><span class="say">Bonjour</span></td><td>Buenos días / Hola</td></tr><tr><td><span class="say">Salut</span></td><td>Hola (entre amigos)</td></tr><tr><td><span class="say">Bonsoir</span></td><td>Buenas tardes / noches</td></tr>' +
      '<tr><td><span class="say">Au revoir</span></td><td>Adiós</td></tr><tr><td><span class="say">À bientôt</span></td><td>Hasta pronto</td></tr><tr><td><span class="say">Merci</span></td><td>Gracias</td></tr><tr><td><span class="say">S’il te plaît</span></td><td>Por favor</td></tr></table>' },
    { t: 'Presentarse', h: '<table><tr><th>Pregunta</th><th>Respuesta</th></tr>' +
      '<tr><td><span class="say">Comment tu t’appelles ?</span><br><small>¿Cómo te llamas?</small></td><td><span class="say">Je m’appelle Santi.</span><br><small>Me llamo Santi.</small></td></tr>' +
      '<tr><td><span class="say">Tu as quel âge ?</span><br><small>¿Cuántos años tienes?</small></td><td><span class="say">J’ai dix ans.</span><br><small>Tengo diez años.</small></td></tr>' +
      '<tr><td><span class="say">Où tu habites ?</span><br><small>¿Dónde vives?</small></td><td><span class="say">J’habite à Mairena.</span><br><small>Vivo en Mairena.</small></td></tr>' +
      '<tr><td><span class="say">Comment ça va ?</span><br><small>¿Qué tal?</small></td><td><span class="say">Ça va bien, merci !</span><br><small>¡Bien, gracias!</small></td></tr></table>' +
      '<div class="ojo">En francés se deja un <b>espacio antes</b> de ? y ! → <i>Ça va ?</i></div>' },
    { t: 'Los números del 0 al 20', h: '<p><span class="say">zéro</span> · <span class="say">un</span> · <span class="say">deux</span> · <span class="say">trois</span> · <span class="say">quatre</span> · <span class="say">cinq</span> · <span class="say">six</span> · <span class="say">sept</span> · <span class="say">huit</span> · <span class="say">neuf</span> · <span class="say">dix</span></p><p><span class="say">onze</span> · <span class="say">douze</span> · <span class="say">treize</span> · <span class="say">quatorze</span> · <span class="say">quinze</span> · <span class="say">seize</span> · <span class="say">dix-sept</span> · <span class="say">dix-huit</span> · <span class="say">dix-neuf</span> · <span class="say">vingt</span></p>' }
  ],
  chuleta: [
    '<b>Bonjour</b> = hola · <b>Salut</b> = hola (amigos) · <b>Au revoir</b> = adiós · <b>Merci</b> = gracias.',
    '<b>Je m’appelle…</b> = me llamo… · <b>J’ai … ans</b> = tengo … años · <b>J’habite à…</b> = vivo en…',
    '<b>Comment ça va ?</b> → <b>Ça va bien !</b>',
    '1 un · 2 deux · 3 trois · 4 quatre · 5 cinq · 6 six · 7 sept · 8 huit · 9 neuf · 10 dix.',
    '11 onze · 12 douze · 13 treize · 14 quatorze · 15 quinze · 16 seize · 20 vingt.'
  ],
  fichas: [
    ['Bonjour', 'Hola / Buenos días'],
    ['Au revoir', 'Adiós'],
    ['Merci', 'Gracias'],
    ['Je m’appelle…', 'Me llamo…'],
    ['J’ai dix ans', 'Tengo diez años'],
    ['J’habite à…', 'Vivo en…'],
    ['Comment ça va ?', '¿Qué tal?'],
    ['douze', '12'],
    ['quinze', '15'],
    ['vingt', '20']
  ],
  preguntas: [
    { p: '¿Qué significa <b>Au revoir</b>?', o: ['Hola', 'Adiós', 'Gracias'], c: 1, e: 'Au revoir = adiós.' },
    { p: '¿Cómo dices “me llamo Santi”?', o: ['J’ai Santi', 'Je m’appelle Santi', 'J’habite Santi'], c: 1, e: 'Je m’appelle = me llamo.' },
    { p: '“J’ai onze ans” significa…', o: ['Tengo once años', 'Vivo en Once', 'Me llamo Once'], c: 0, e: 'J’ai … ans = tengo … años. Onze = 11.' },
    { p: 'Escribe en francés el número <b>3</b>.', r: ['trois'], e: 'trois.' },
    { p: 'Escribe en francés el número <b>10</b>.', r: ['dix'], e: 'dix.' },
    { p: '¿Qué número es <b>quatorze</b>?', r: ['14', 'catorce'], e: 'quatorze = 14.' },
    { p: '¿Qué número es <b>seize</b>?', o: ['6', '16', '7', '17'], c: 1, e: 'seize = 16 (six = 6).' },
    { p: '<b>Merci</b> significa “por favor”.', vf: false, e: 'Merci = gracias. Por favor = s’il te plaît.' },
    { p: 'Te preguntan “Comment ça va ?”. ¿Qué respondes?', o: ['Ça va bien, merci !', 'J’habite à Séville.', 'Au revoir !'], c: 0, e: '¿Qué tal? → Bien, gracias.' },
    { p: '¿Cómo se dice “vivo en Sevilla”?', o: ['Je m’appelle Séville', 'J’habite à Séville', 'J’ai Séville'], c: 1, e: 'J’habite à … = vivo en …' },
    { p: 'Escribe cómo se saluda a un amigo (informal).', r: ['salut', 'salut !'], e: 'Salut !' }
  ]
});

AULA.tema('frances', {
  id: 'frances-2', num: 2, trimestre: 1, origen: 'base', voz: 'fr-FR',
  titulo: 'À l’école : le matériel et les couleurs',
  resumen: 'Material escolar, colores y artículos un/une, le/la/les',
  aprende: [
    { t: 'Le matériel scolaire', h: '<table><tr><th>Francés</th><th>Español</th></tr>' +
      '<tr><td><span class="say">un stylo</span></td><td>un bolígrafo</td></tr><tr><td><span class="say">un crayon</span></td><td>un lápiz</td></tr><tr><td><span class="say">une gomme</span></td><td>una goma</td></tr>' +
      '<tr><td><span class="say">une règle</span></td><td>una regla</td></tr><tr><td><span class="say">un cahier</span></td><td>un cuaderno</td></tr><tr><td><span class="say">un livre</span></td><td>un libro</td></tr>' +
      '<tr><td><span class="say">une trousse</span></td><td>un estuche</td></tr><tr><td><span class="say">un cartable</span></td><td>una mochila (cartera)</td></tr><tr><td><span class="say">des ciseaux</span></td><td>unas tijeras</td></tr><tr><td><span class="say">une colle</span></td><td>un pegamento</td></tr></table>' },
    { t: 'Les couleurs', h: '<p><span class="say">rouge</span> rojo · <span class="say">bleu</span> azul · <span class="say">vert</span> verde · <span class="say">jaune</span> amarillo · <span class="say">noir</span> negro · <span class="say">blanc</span> blanco · <span class="say">rose</span> rosa · <span class="say">orange</span> naranja · <span class="say">violet</span> morado · <span class="say">gris</span> gris · <span class="say">marron</span> marrón</p><div class="ej"><span class="say">Le stylo est bleu.</span> = El boli es azul.</div>' },
    { t: 'Los artículos', h: '<table><tr><th></th><th>Masculino</th><th>Femenino</th><th>Plural</th></tr><tr><td>Indeterminado</td><td><b>un</b> stylo</td><td><b>une</b> gomme</td><td><b>des</b> livres</td></tr><tr><td>Determinado</td><td><b>le</b> cahier</td><td><b>la</b> règle</td><td><b>les</b> crayons</td></tr></table><div class="ojo">Delante de vocal o h: <b>l’</b> → l’école, l’ami.</div>' },
    { t: 'Frases útiles en clase', h: '<p><span class="say">Qu’est-ce que c’est ?</span> = ¿Qué es esto?<br><span class="say">C’est un cahier.</span> = Es un cuaderno.<br><span class="say">J’ai une trousse rouge.</span> = Tengo un estuche rojo.</p>' }
  ],
  chuleta: [
    'un stylo · un crayon · une gomme · une règle · un cahier · un livre · une trousse.',
    'rouge, bleu, vert, jaune, noir, blanc, rose, orange.',
    'un / une / des · le / la / les · l’ delante de vocal.',
    '<b>Qu’est-ce que c’est ?</b> → <b>C’est un/une…</b>'
  ],
  fichas: [
    ['un stylo', 'un bolígrafo'],
    ['une gomme', 'una goma'],
    ['un cahier', 'un cuaderno'],
    ['une trousse', 'un estuche'],
    ['une règle', 'una regla'],
    ['rouge', 'rojo'],
    ['vert', 'verde'],
    ['jaune', 'amarillo'],
    ['Qu’est-ce que c’est ?', '¿Qué es esto?']
  ],
  preguntas: [
    { p: '¿Qué es <b>un cahier</b>?', o: ['un libro', 'un cuaderno', 'un lápiz'], c: 1, e: 'Cahier = cuaderno. Libro = livre.' },
    { p: '¿Cómo se dice “una goma” en francés?', o: ['une gomme', 'un crayon', 'une règle'], c: 0, e: 'une gomme.' },
    { p: '¿De qué color es <b>jaune</b>?', o: ['verde', 'amarillo', 'naranja'], c: 1, e: 'jaune = amarillo.' },
    { p: 'Escribe en francés el color <b>rojo</b>.', r: ['rouge'], e: 'rouge.' },
    { p: 'Escribe en francés el color <b>azul</b> (masculino).', r: ['bleu'], e: 'bleu.' },
    { p: 'Completa: ___ règle (artículo determinado)', o: ['le', 'la', 'les'], c: 1, e: 'Règle es femenino: la règle.' },
    { p: 'Completa: ___ livres (artículo indeterminado plural)', o: ['un', 'une', 'des'], c: 2, e: 'Plural indeterminado: des.' },
    { p: '“C’est un stylo” significa “Es un bolígrafo”.', vf: true, e: 'C’est = es · un stylo = un bolígrafo.' },
    { p: '¿Cómo se dice “el colegio”?', o: ['le école', 'la école', 'l’école'], c: 2, e: 'Delante de vocal: l’école.' },
    { p: '¿Qué significa “J’ai une trousse verte”?', o: ['Tengo un estuche verde', 'Tengo una regla verde', 'Es un estuche verde'], c: 0, e: 'J’ai = tengo · trousse = estuche · verte = verde (femenino).' }
  ]
});

AULA.tema('frances', {
  id: 'frances-3', num: 3, trimestre: 1, origen: 'base', voz: 'fr-FR',
  titulo: 'Ma famille · être et avoir',
  resumen: 'La familia y los verbos ser/estar y tener',
  aprende: [
    { t: 'La famille', h: '<table><tr><th>Francés</th><th>Español</th></tr><tr><td><span class="say">le père</span> / <span class="say">papa</span></td><td>el padre / papá</td></tr><tr><td><span class="say">la mère</span> / <span class="say">maman</span></td><td>la madre / mamá</td></tr><tr><td><span class="say">le frère</span></td><td>el hermano</td></tr><tr><td><span class="say">la sœur</span></td><td>la hermana</td></tr><tr><td><span class="say">le grand-père</span> / <span class="say">papi</span></td><td>el abuelo</td></tr><tr><td><span class="say">la grand-mère</span> / <span class="say">mamie</span></td><td>la abuela</td></tr><tr><td><span class="say">l’oncle</span> · <span class="say">la tante</span></td><td>el tío · la tía</td></tr><tr><td><span class="say">le cousin</span> · <span class="say">la cousine</span></td><td>el primo · la prima</td></tr></table>' },
    { t: 'Verbo ÊTRE (ser / estar)', h: '<table><tr><td><span class="say">je suis</span></td><td>yo soy</td></tr><tr><td><span class="say">tu es</span></td><td>tú eres</td></tr><tr><td><span class="say">il / elle est</span></td><td>él / ella es</td></tr><tr><td><span class="say">nous sommes</span></td><td>nosotros somos</td></tr><tr><td><span class="say">vous êtes</span></td><td>vosotros sois</td></tr><tr><td><span class="say">ils / elles sont</span></td><td>ellos / ellas son</td></tr></table>' },
    { t: 'Verbo AVOIR (tener)', h: '<table><tr><td><span class="say">j’ai</span></td><td>yo tengo</td></tr><tr><td><span class="say">tu as</span></td><td>tú tienes</td></tr><tr><td><span class="say">il / elle a</span></td><td>él / ella tiene</td></tr><tr><td><span class="say">nous avons</span></td><td>nosotros tenemos</td></tr><tr><td><span class="say">vous avez</span></td><td>vosotros tenéis</td></tr><tr><td><span class="say">ils / elles ont</span></td><td>ellos / ellas tienen</td></tr></table><div class="ej"><span class="say">J’ai une sœur et deux frères.</span> = Tengo una hermana y dos hermanos.</div>' }
  ],
  chuleta: [
    'père, mère, frère, sœur, grand-père, grand-mère, oncle, tante, cousin(e).',
    'ÊTRE: je suis, tu es, il est, nous sommes, vous êtes, ils sont.',
    'AVOIR: j’ai, tu as, il a, nous avons, vous avez, ils ont.',
    '¡Ojo! La edad va con AVOIR: <b>J’ai 10 ans</b>.'
  ],
  fichas: [
    ['la sœur', 'la hermana'],
    ['le frère', 'el hermano'],
    ['la grand-mère', 'la abuela'],
    ['la tante', 'la tía'],
    ['je suis', 'yo soy / estoy'],
    ['nous sommes', 'nosotros somos'],
    ['tu as', 'tú tienes'],
    ['ils ont', 'ellos tienen']
  ],
  preguntas: [
    { p: '¿Qué significa <b>la sœur</b>?', o: ['la madre', 'la hermana', 'la tía'], c: 1, e: 'sœur = hermana.' },
    { p: '¿Cómo se dice “el abuelo”?', o: ['le grand-père', 'le père', 'l’oncle'], c: 0, e: 'le grand-père (o papi).' },
    { p: 'Completa: Je ___ Santi. (être)', r: ['suis'], e: 'je suis.' },
    { p: 'Completa: Nous ___ amis. (être)', r: ['sommes'], e: 'nous sommes.' },
    { p: 'Completa: Tu ___ un chat. (avoir)', r: ['as'], e: 'tu as.' },
    { p: 'Completa: Ils ___ deux chiens. (avoir)', r: ['ont'], e: 'ils ont.' },
    { p: '“Elle a dix ans” significa…', o: ['Ella es diez', 'Ella tiene diez años', 'Ellas tienen diez años'], c: 1, e: 'elle a = ella tiene. La edad va con avoir.' },
    { p: '“Vous êtes” es del verbo avoir.', vf: false, e: 'Es del verbo être: vous êtes = vosotros sois.' },
    { p: '¿Cómo se dice “el primo”?', r: ['le cousin', 'cousin'], e: 'le cousin (la cousine = la prima).' },
    { p: '¿Qué forma de AVOIR va con “nous”?', o: ['avons', 'avez', 'ont'], c: 0, e: 'nous avons.' }
  ]
});
