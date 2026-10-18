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
  id: 'frances-libro-memo', num: 2, trimestre: 1, origen: 'libro', paginas: 'pág. 25 · Carte mémo', voz: 'fr-FR',
  titulo: 'Carte mémo : les couleurs et la famille',
  resumen: 'Ma couleur préférée · le père, la mère, le frère, la sœur',
  aprende: [
    { t: 'Les couleurs (los colores)', h: '<p>Pulsa cada palabra para oírla 🔊</p><table><tr><th>Francés</th><th>Español</th></tr>' +
      '<tr><td>🔴 <span class="say">rouge</span></td><td>rojo</td></tr><tr><td>🟢 <span class="say">vert</span></td><td>verde</td></tr><tr><td>🔵 <span class="say">bleu</span></td><td>azul</td></tr><tr><td>🟠 <span class="say">orange</span></td><td>naranja</td></tr>' +
      '<tr><td>🟤 <span class="say">marron</span></td><td>marrón</td></tr><tr><td>🟡 <span class="say">jaune</span></td><td>amarillo</td></tr><tr><td>⚪ <span class="say">blanc</span></td><td>blanco</td></tr><tr><td>🩷 <span class="say">rose</span></td><td>rosa</td></tr>' +
      '<tr><td>🩶 <span class="say">gris</span></td><td>gris</td></tr><tr><td>⚫ <span class="say">noir</span></td><td>negro</td></tr></table>' +
      '<div class="ojo">¡Ojo con las que se parecen al español pero se escriben distinto! <b>vert</b> (verde), <b>bleu</b> (azul), <b>jaune</b> (amarillo), <b>blanc</b> (blanco), <b>noir</b> (negro).</div>' },
    { t: 'Ma couleur préférée (mi color favorito)', h: '<p><span class="say">Quelle est ta couleur préférée ?</span> = ¿Cuál es tu color favorito?</p><p><span class="say">Ma couleur préférée est le bleu.</span> = Mi color favorito es el azul.</p><div class="ej">Ma couleur préférée est le <b>vert</b>. · Ma couleur préférée est le <b>rouge</b>.</div>' },
    { t: 'La famille (la familia)', h: '<table><tr><th>Francés</th><th>Español</th></tr><tr><td><span class="say">le père</span> / <span class="say">le papa</span></td><td>el padre / el papá</td></tr><tr><td><span class="say">la mère</span> / <span class="say">la maman</span></td><td>la madre / la mamá</td></tr><tr><td><span class="say">le frère</span></td><td>el hermano</td></tr><tr><td><span class="say">la sœur</span></td><td>la hermana</td></tr></table>' +
      '<div class="ojo"><b>le</b> va con los chicos (le père, le frère) y <b>la</b> con las chicas (la mère, la sœur).<br>En <b>sœur</b> la “o” y la “e” van pegadas: <b>œ</b>. Si no te sale en el teclado, escribe <b>soeur</b>.</div>' +
      '<div class="ej"><span class="say">Voici mon père.</span> = Este es mi padre. · <span class="say">Voici ma sœur.</span> = Esta es mi hermana.</div>' }
  ],
  chuleta: [
    'rouge rojo · vert verde · bleu azul · orange naranja · marron marrón.',
    'jaune amarillo · blanc blanco · rose rosa · gris gris · noir negro.',
    '<b>Ma couleur préférée est le bleu.</b> = Mi color favorito es el azul.',
    '<b>le père / le papa</b> · <b>la mère / la maman</b> · <b>le frère</b> · <b>la sœur</b>.',
    'le → chico · la → chica.'
  ],
  fichas: [
    ['rouge', 'rojo 🔴'], ['vert', 'verde 🟢'], ['bleu', 'azul 🔵'], ['orange', 'naranja 🟠'], ['marron', 'marrón 🟤'],
    ['jaune', 'amarillo 🟡'], ['blanc', 'blanco ⚪'], ['rose', 'rosa 🩷'], ['gris', 'gris 🩶'], ['noir', 'negro ⚫'],
    ['le père / le papa', 'el padre / el papá'], ['la mère / la maman', 'la madre / la mamá'], ['le frère', 'el hermano'], ['la sœur', 'la hermana'],
    ['Ma couleur préférée est le bleu.', 'Mi color favorito es el azul.']
  ],
  preguntas: [
    { p: '¿Qué color es <b>jaune</b>?', o: ['amarillo', 'naranja', 'blanco'], c: 0, e: 'jaune = amarillo 🟡' },
    { p: '¿Qué color es <b>noir</b>?', o: ['negro', 'marrón', 'gris'], c: 0, e: 'noir = negro ⚫' },
    { p: '¿Qué color es <b>vert</b>?', o: ['verde', 'azul', 'rosa'], c: 0, e: 'vert = verde 🟢' },
    { p: '¿Qué color es <b>marron</b>?', o: ['granate', 'marrón', 'naranja'], c: 1, e: 'marron = marrón 🟤' },
    { p: '¿Qué color es <b>blanc</b>?', o: ['blanco', 'azul', 'negro'], c: 0, e: 'blanc = blanco ⚪' },
    { p: 'Escribe en francés: <b>rojo</b>', r: ['rouge'], e: 'rouge 🔴' },
    { p: 'Escribe en francés: <b>azul</b>', r: ['bleu'], e: 'bleu 🔵 (¡no “blu”!)' },
    { p: 'Escribe en francés: <b>amarillo</b>', r: ['jaune'], e: 'jaune 🟡' },
    { p: 'Escribe en francés: <b>negro</b>', r: ['noir'], e: 'noir ⚫' },
    { p: 'Escribe en francés: <b>verde</b>', r: ['vert'], e: 'vert 🟢 (acaba en -t, que no suena)' },
    { p: 'Escribe en francés: <b>blanco</b>', r: ['blanc'], e: 'blanc ⚪ (acaba en -c, que no suena)' },
    { p: '“Ma couleur préférée est le rouge” significa…', o: ['Mi color favorito es el rojo', 'Mi madre es roja', 'No me gusta el rojo'], c: 0, e: 'Ma couleur préférée = mi color favorito.' },
    { p: '¿Cómo se dice “la hermana”?', o: ['la sœur', 'le frère', 'la mère'], c: 0, e: 'la sœur = la hermana.' },
    { p: '¿Qué significa <b>le frère</b>?', o: ['el padre', 'el hermano', 'el abuelo'], c: 1, e: 'le frère = el hermano.' },
    { p: 'Escribe en francés: <b>la madre</b>', r: ['la mère', 'la mere', 'la maman', 'mère', 'maman'], e: 'la mère (o la maman).' },
    { p: 'Escribe en francés: <b>el padre</b>', r: ['le père', 'le pere', 'le papa', 'père', 'papa'], e: 'le père (o le papa).' },
    { p: 'Escribe en francés: <b>la hermana</b>', r: ['la sœur', 'la soeur', 'sœur', 'soeur'], e: 'la sœur.' },
    { p: '“la père” está bien escrito.', vf: false, e: 'Père es chico → le père.' }
  ]
});

AULA.tema('frances', {
  id: 'frances-libro-nombres', num: 3, trimestre: 1, origen: 'libro', paginas: 'cuaderno · números 1-20', voz: 'fr-FR',
  titulo: 'Les nombres de 1 à 20 (bien escritos)',
  resumen: 'Cómo suenan y cómo se escriben los números del 1 al 20',
  aprende: [
    { t: '¡Se escriben distinto de como suenan!', h: '<p>En francés muchas letras <b>no se pronuncian</b>, pero sí se escriben. En el examen hay que escribirlos <b>bien</b>. Pulsa cada número para oírlo 🔊</p>' +
      '<table><tr><th>Nº</th><th>Se escribe</th><th>Suena parecido a…</th></tr>' +
      '<tr><td>1</td><td><span class="say">un</span></td><td>“an”</td></tr><tr><td>2</td><td><span class="say">deux</span></td><td>“dö”</td></tr><tr><td>3</td><td><span class="say">trois</span></td><td>“truá”</td></tr><tr><td>4</td><td><span class="say">quatre</span></td><td>“catr”</td></tr><tr><td>5</td><td><span class="say">cinq</span></td><td>“sanc”</td></tr>' +
      '<tr><td>6</td><td><span class="say">six</span></td><td>“sis”</td></tr><tr><td>7</td><td><span class="say">sept</span></td><td>“set”</td></tr><tr><td>8</td><td><span class="say">huit</span></td><td>“uit”</td></tr><tr><td>9</td><td><span class="say">neuf</span></td><td>“nöf”</td></tr><tr><td>10</td><td><span class="say">dix</span></td><td>“dis”</td></tr>' +
      '<tr><td>11</td><td><span class="say">onze</span></td><td>“onz”</td></tr><tr><td>12</td><td><span class="say">douze</span></td><td>“duz”</td></tr><tr><td>13</td><td><span class="say">treize</span></td><td>“trez”</td></tr><tr><td>14</td><td><span class="say">quatorze</span></td><td>“catorz”</td></tr><tr><td>15</td><td><span class="say">quinze</span></td><td>“canz”</td></tr>' +
      '<tr><td>16</td><td><span class="say">seize</span></td><td>“sez”</td></tr><tr><td>17</td><td><span class="say">dix-sept</span></td><td>“disét”</td></tr><tr><td>18</td><td><span class="say">dix-huit</span></td><td>“disuít”</td></tr><tr><td>19</td><td><span class="say">dix-neuf</span></td><td>“disnöf”</td></tr><tr><td>20</td><td><span class="say">vingt</span></td><td>“van”</td></tr></table>' },
    { t: 'Trucos para no equivocarte', h: '<ul><li>Del <b>11 al 16</b> acaban en <b>-ze</b>: onze, douze, treize, quatorze, quinze, seize.</li><li>El <b>17, 18 y 19</b> son “diez y siete”, “diez y ocho”, “diez y nueve”, con guion: <b>dix-sept, dix-huit, dix-neuf</b>.</li><li>Fíjate en las letras mudas: deu<b>x</b>, troi<b>s</b>, cin<b>q</b>, sep<b>t</b>, hui<b>t</b>, vin<b>gt</b>.</li><li><b>qu</b> suena “c”: <b>qu</b>atre, <b>qu</b>atorze, <b>qu</b>inze.</li></ul><div class="ojo">Fallos típicos: “an” → <b>un</b> · “tua” → <b>trois</b> · “cat” → <b>quatre</b> · “sanq” → <b>cinq</b> · “nef” → <b>neuf</b> · “quing” → <b>quinze</b> · “veint” → <b>vingt</b>.</div>' }
  ],
  chuleta: [
    '1 un · 2 deux · 3 trois · 4 quatre · 5 cinq',
    '6 six · 7 sept · 8 huit · 9 neuf · 10 dix',
    '11 onze · 12 douze · 13 treize · 14 quatorze · 15 quinze',
    '16 seize · 17 dix-sept · 18 dix-huit · 19 dix-neuf · 20 vingt',
    'Del 11 al 16 acaban en <b>-ze</b>. 17, 18 y 19 llevan <b>guion</b>.'
  ],
  fichas: [
    ['1', 'un'], ['2', 'deux'], ['3', 'trois'], ['4', 'quatre'], ['5', 'cinq'], ['6', 'six'], ['7', 'sept'], ['8', 'huit'], ['9', 'neuf'], ['10', 'dix'],
    ['11', 'onze'], ['12', 'douze'], ['13', 'treize'], ['14', 'quatorze'], ['15', 'quinze'], ['16', 'seize'], ['17', 'dix-sept'], ['18', 'dix-huit'], ['19', 'dix-neuf'], ['20', 'vingt']
  ],
  preguntas: [
    { p: 'Escribe en francés el número <b>1</b>.', r: ['un'], e: 'un (suena “an”, pero se escribe UN).' },
    { p: 'Escribe en francés el número <b>2</b>.', r: ['deux'], e: 'deux (con -x al final que no suena).' },
    { p: 'Escribe en francés el número <b>3</b>.', r: ['trois'], e: 'trois.' },
    { p: 'Escribe en francés el número <b>4</b>.', r: ['quatre'], e: 'quatre (qu suena c).' },
    { p: 'Escribe en francés el número <b>5</b>.', r: ['cinq'], e: 'cinq.' },
    { p: 'Escribe en francés el número <b>7</b>.', r: ['sept'], e: 'sept (la p no suena).' },
    { p: 'Escribe en francés el número <b>9</b>.', r: ['neuf'], e: 'neuf.' },
    { p: 'Escribe en francés el número <b>11</b>.', r: ['onze'], e: 'onze.' },
    { p: 'Escribe en francés el número <b>12</b>.', r: ['douze'], e: 'douze.' },
    { p: 'Escribe en francés el número <b>13</b>.', r: ['treize'], e: 'treize.' },
    { p: 'Escribe en francés el número <b>14</b>.', r: ['quatorze'], e: 'quatorze.' },
    { p: 'Escribe en francés el número <b>15</b>.', r: ['quinze'], e: 'quinze.' },
    { p: 'Escribe en francés el número <b>16</b>.', r: ['seize'], e: 'seize.' },
    { p: 'Escribe en francés el número <b>17</b>.', r: ['dix-sept', 'dix sept'], e: 'dix-sept (con guion).' },
    { p: 'Escribe en francés el número <b>18</b>.', r: ['dix-huit', 'dix huit'], e: 'dix-huit (con guion).' },
    { p: 'Escribe en francés el número <b>19</b>.', r: ['dix-neuf', 'dix neuf'], e: 'dix-neuf (con guion).' },
    { p: 'Escribe en francés el número <b>20</b>.', r: ['vingt'], e: 'vingt (suena “van”).' },
    { p: '¿Qué número es <b>huit</b>?', r: ['8', 'ocho'], e: 'huit = 8.' },
    { p: '¿Qué número es <b>seize</b>?', o: ['6', '16', '17'], c: 1, e: 'seize = 16 (six = 6).' },
    { p: '¿Cuál está bien escrito?', o: ['quinze', 'quing', 'kinze'], c: 0, e: '15 = quinze.' },
    { p: '¿Cuál está bien escrito?', o: ['veint', 'vingt', 'vin'], c: 1, e: '20 = vingt.' },
    { p: '¿Cuál está bien escrito?', o: ['tua', 'trois', 'troi'], c: 1, e: '3 = trois.' },
    { p: '¿Qué número es <b>douze</b>?', o: ['2', '12', '20'], c: 1, e: 'douze = 12.' }
  ]
});
