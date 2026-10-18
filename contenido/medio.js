// ===== CONOCIMIENTO DEL MEDIO · 5º Primaria =====
// Unidad 1 del libro (Anaya): "Nuestro cuerpo" — págs. 8, 9, 12 y 13

AULA.tema('medio', {
  id: 'medio-u1-nutricion', num: 1, trimestre: 1, origen: 'libro', paginas: 'U1 · pág. 8',
  titulo: 'El cuerpo y la nutrición: aparato digestivo y respiratorio',
  resumen: 'Células → tejidos → órganos → aparatos · digestión y respiración',
  aprende: [
    { t: '¿Cómo es nuestro cuerpo?', h: '<p>Nuestro cuerpo está formado por <b>células</b>. Las células se agrupan y forman <b>tejidos</b>. Los tejidos se agrupan y forman <b>órganos</b>. Y los órganos se agrupan y forman <b>aparatos</b> y <b>sistemas</b>.</p><div class="ej">células → tejidos → órganos → aparatos y sistemas</div>' },
    { t: '¿Qué es la función de nutrición?', h: '<p>La <b>nutrición</b> consiste en <b>tomar alimentos y agua</b>, <b>respirar oxígeno</b> y usar esas sustancias para obtener <b>energía</b>, vivir, crecer y <b>expulsar los desechos</b>.</p><p>En la nutrición trabajan 4 aparatos: <b>digestivo, respiratorio, circulatorio y excretor</b>.</p>' },
    { t: 'El aparato digestivo', h: '<p>Se encarga de <b>romper los alimentos en nutrientes</b>, que atraviesan sus paredes y <b>pasan a la sangre</b>.</p><table><tr><th>Partes</th><th>Órganos</th></tr><tr><td><b>Tubo digestivo</b></td><td>boca, faringe, esófago, estómago, intestino (delgado y grueso) y ano</td></tr><tr><td><b>Glándulas digestivas</b></td><td>glándulas salivales, hígado y páncreas</td></tr></table>' +
      '<p>La <b>digestión</b> es el proceso en el que se transforman los alimentos y se sacan los nutrientes, que se absorben y pasan a la sangre. Los restos que no sirven se expulsan al exterior.</p><div class="ojo">Truco para el orden del tubo: <b>Bo-Fa-Es-Es-In-A</b> → Boca, Faringe, Esófago, Estómago, Intestino, Ano.</div>' },
    { t: 'El aparato respiratorio', h: '<p>Se encarga de <b>sacar el oxígeno del aire</b> y de <b>eliminar el dióxido de carbono</b>, que es un desecho que producen las células.</p><table><tr><th>Partes</th><th>Órganos</th></tr><tr><td><b>Vías respiratorias</b></td><td>fosas nasales, faringe, laringe, tráquea y bronquios</td></tr><tr><td><b>Pulmones</b></td><td>formados por las ramificaciones de los bronquios y por los alvéolos</td></tr></table>' +
      '<p>Los pulmones están separados del abdomen por un músculo llamado <b>diafragma</b>.</p><p>Los <b>alvéolos</b> son pequeños saquitos rodeados de finísimos vasos sanguíneos.</p>' },
    { t: 'La respiración: 3 etapas', h: '<ol><li><b>Inspiración</b>: entra el aire con oxígeno.</li><li><b>Intercambio de gases</b>: en los alvéolos, el oxígeno pasa a la sangre y el dióxido de carbono sale de ella.</li><li><b>Espiración</b>: sale el aire con dióxido de carbono.</li></ol><div class="ojo">El oxígeno pasa a la sangre en la etapa de <b>intercambio de gases</b>, dentro de los <b>alvéolos</b>.</div>' }
  ],
  chuleta: [
    'Células → <b>tejidos</b> → <b>órganos</b> → <b>aparatos y sistemas</b>.',
    'Nutrición = tomar alimentos y agua + respirar oxígeno → energía, vivir, crecer y expulsar desechos.',
    'Digestivo = <b>tubo digestivo</b> (boca, faringe, esófago, estómago, intestino, ano) + <b>glándulas</b> (salivales, hígado, páncreas).',
    'Respiratorio = <b>vías</b> (fosas nasales, faringe, laringe, tráquea, bronquios) + <b>pulmones</b>.',
    'El <b>diafragma</b> separa los pulmones del abdomen.',
    'Respiración: <b>inspiración → intercambio de gases → espiración</b>.',
    'El oxígeno pasa a la sangre en los <b>alvéolos</b>.'
  ],
  fichas: [
    ['¿Cómo se organiza el cuerpo?', 'células → tejidos → órganos → aparatos y sistemas'],
    ['Función de <b>nutrición</b>', 'Tomar alimentos, agua y oxígeno para obtener energía, vivir, crecer y expulsar desechos'],
    ['Partes del <b>tubo digestivo</b>', 'boca, faringe, esófago, estómago, intestino y ano'],
    ['<b>Glándulas digestivas</b>', 'glándulas salivales, hígado y páncreas'],
    ['¿Qué hace el aparato digestivo?', 'Rompe los alimentos en nutrientes que pasan a la sangre'],
    ['<b>Vías respiratorias</b>', 'fosas nasales, faringe, laringe, tráquea y bronquios'],
    ['<b>Diafragma</b>', 'Músculo que separa los pulmones del abdomen'],
    ['<b>Alvéolos</b>', 'Saquitos de los pulmones rodeados de finísimos vasos sanguíneos'],
    ['Las 3 etapas de la respiración', 'inspiración, intercambio de gases y espiración'],
    ['¿Qué gas expulsamos?', 'El dióxido de carbono (un desecho de las células)']
  ],
  preguntas: [
    { p: 'Ordena: las células se agrupan formando…', o: ['tejidos', 'órganos', 'aparatos'], c: 0, e: 'células → tejidos → órganos → aparatos y sistemas.' },
    { p: 'Los órganos se agrupan formando…', o: ['células', 'tejidos', 'aparatos y sistemas'], c: 2, e: 'células → tejidos → órganos → aparatos y sistemas.' },
    { p: '¿Qué hace el aparato digestivo?', o: ['Rompe los alimentos en nutrientes que pasan a la sangre', 'Saca el oxígeno del aire', 'Limpia la sangre y forma la orina'], c: 0, e: 'El digestivo transforma los alimentos en nutrientes.' },
    { p: '¿Cuál es una <b>glándula digestiva</b>?', o: ['El esófago', 'El hígado', 'La tráquea', 'El estómago'], c: 1, e: 'Glándulas digestivas: glándulas salivales, hígado y páncreas. El esófago y el estómago son del tubo digestivo.' },
    { p: '¿Qué órgano va después del esófago en el tubo digestivo?', r: ['estómago', 'el estómago', 'estomago'], e: 'Boca → faringe → esófago → estómago → intestino → ano.' },
    { p: 'El páncreas forma parte del tubo digestivo.', vf: false, e: 'El páncreas es una glándula digestiva, no forma parte del tubo.' },
    { p: '¿Qué hace el aparato respiratorio?', o: ['Saca el oxígeno del aire y elimina el dióxido de carbono', 'Reparte la sangre', 'Mueve el cuerpo'], c: 0, e: 'Toma oxígeno y expulsa dióxido de carbono, que es un desecho de las células.' },
    { p: '¿Cuál NO es una vía respiratoria?', o: ['Laringe', 'Tráquea', 'Esófago', 'Bronquios'], c: 2, e: 'El esófago es del aparato digestivo.' },
    { p: '¿Cómo se llama el músculo que separa los pulmones del abdomen?', r: ['diafragma', 'el diafragma'], e: 'El diafragma.' },
    { p: '¿Cuáles son las tres etapas de la respiración?', o: ['Inspiración, intercambio de gases y espiración', 'Masticar, tragar y digerir', 'Contracción, dilatación y latido'], c: 0, e: 'Inspiración → intercambio de gases → espiración.' },
    { p: '¿En qué etapa de la respiración pasa el oxígeno a la sangre?', o: ['En la inspiración', 'En el intercambio de gases', 'En la espiración'], c: 1, e: 'En el intercambio de gases, que ocurre en los alvéolos.' },
    { p: 'Los alvéolos son pequeños saquitos rodeados de finísimos vasos sanguíneos.', vf: true, e: 'Por eso el oxígeno puede pasar a la sangre.' },
    { p: 'La faringe forma parte del aparato digestivo y también del respiratorio.', vf: true, e: '¡Muy bien visto! Por la faringe pasan la comida y el aire.' },
    { p: '¿Qué gas producen las células como desecho?', r: ['dióxido de carbono', 'dioxido de carbono', 'el dióxido de carbono', 'co2'], e: 'El dióxido de carbono.' }
  ]
});

AULA.tema('medio', {
  id: 'medio-u1-circulatorio', num: 2, trimestre: 1, origen: 'libro', paginas: 'U1 · pág. 9',
  titulo: 'Aparato circulatorio y aparato excretor',
  resumen: 'El corazón, la sangre, los riñones y la orina',
  aprende: [
    { t: 'El aparato circulatorio', h: '<p>Se encarga de <b>repartir los nutrientes y el oxígeno</b> hasta las células y de <b>retirar los desechos</b>.</p><p>Está formado por los <b>vasos sanguíneos</b> y el <b>corazón</b>. Por dentro circula la <b>sangre</b>.</p><ul><li><b>Arterias</b>: llevan la sangre del corazón a los órganos.</li><li><b>Venas</b>: traen la sangre de los órganos al corazón.</li></ul><div class="ojo">Truco: <b>A</b>rterias = <b>A</b>fuera del corazón · <b>V</b>enas = <b>V</b>uelven al corazón.</div>' },
    { t: 'El corazón', h: '<p>El corazón está dividido en <b>dos partes que no se comunican</b>: derecha e izquierda. Cada parte tiene una <b>aurícula</b> (arriba) y un <b>ventrículo</b> (abajo). Entre ellos hay <b>válvulas</b>.</p><table><tr><th>Lado derecho</th><th>Lado izquierdo</th></tr><tr><td>aurícula derecha<br>ventrículo derecho</td><td>aurícula izquierda<br>ventrículo izquierdo</td></tr></table>' },
    { t: 'El latido del corazón', h: '<p>El <b>latido</b> es el movimiento continuo de <b>contracción</b> y <b>dilatación</b> del corazón.</p><ul><li>Cuando el corazón <b>se contrae</b>, se aprieta y la sangre <b>sale por las arterias</b> hacia los órganos.</li><li>Cuando el corazón <b>se dilata</b>, se ensancha y la sangre <b>entra por las venas</b> desde los órganos.</li></ul>' },
    { t: 'El aparato excretor', h: '<p>Está formado por los <b>riñones</b> y las <b>vías urinarias</b>: <b>uréteres</b>, <b>vejiga urinaria</b> y <b>uretra</b>.</p><p>Los riñones están formados por finísimos tubos envueltos de capilares llamados <b>nefronas</b>. Las nefronas reciben la sangre del cuerpo, la <b>filtran para limpiarla</b> y producen la <b>orina</b>.</p><div class="ej">riñones → uréteres → vejiga urinaria → uretra</div><div class="ojo">¿Por qué las nefronas están rodeadas de capilares? Porque así les llega la sangre que tienen que filtrar.</div>' }
  ],
  chuleta: [
    'Circulatorio = <b>corazón + vasos sanguíneos</b>; por dentro va la <b>sangre</b>.',
    'Reparte nutrientes y oxígeno a las células y retira los desechos.',
    'Corazón: 2 partes (derecha e izquierda) sin comunicar; cada una con <b>aurícula</b> y <b>ventrículo</b>.',
    'Se <b>contrae</b> → la sangre sale por las <b>arterias</b>. Se <b>dilata</b> → la sangre entra por las <b>venas</b>.',
    'Excretor = <b>riñones</b> + vías urinarias (<b>uréteres, vejiga urinaria, uretra</b>).',
    'Las <b>nefronas</b> filtran la sangre y producen la <b>orina</b>.'
  ],
  fichas: [
    ['¿Qué hace el aparato <b>circulatorio</b>?', 'Reparte nutrientes y oxígeno a las células y retira los desechos'],
    ['Partes del aparato circulatorio', 'corazón, vasos sanguíneos y sangre'],
    ['<b>Arterias</b>', 'Llevan la sangre DEL corazón a los órganos'],
    ['<b>Venas</b>', 'Traen la sangre de los órganos AL corazón'],
    ['Partes de cada lado del corazón', 'una aurícula y un ventrículo'],
    ['<b>Latido</b>', 'Contracción y dilatación continua del corazón'],
    ['Aparato <b>excretor</b>', 'riñones + uréteres, vejiga urinaria y uretra'],
    ['<b>Nefronas</b>', 'Tubitos de los riñones que filtran la sangre y producen la orina']
  ],
  preguntas: [
    { p: '¿Qué aparato reparte los nutrientes y el oxígeno hasta las células?', o: ['Excretor', 'Circulatorio', 'Respiratorio'], c: 1, e: 'El circulatorio, con la sangre.' },
    { p: '¿De qué está formado el aparato circulatorio?', o: ['Corazón y vasos sanguíneos', 'Riñones y vejiga', 'Pulmones y bronquios'], c: 0, e: 'Corazón y vasos sanguíneos; por dentro circula la sangre.' },
    { p: 'Cada parte del corazón se divide en una ___ y un ventrículo.', r: ['aurícula', 'auricula'], e: 'Aurícula arriba y ventrículo abajo.' },
    { p: 'La parte derecha y la izquierda del corazón están comunicadas.', vf: false, e: 'Están incomunicadas: la sangre no pasa de un lado al otro.' },
    { p: 'Cuando el corazón se contrae, la sangre…', o: ['sale por las arterias hacia los órganos', 'entra por las venas', 'se queda quieta'], c: 0, e: 'Contracción → sale por las arterias.' },
    { p: 'Cuando el corazón se dilata, la sangre…', o: ['sale por las arterias', 'entra al corazón por las venas', 'va a los riñones'], c: 1, e: 'Dilatación → entra por las venas.' },
    { p: 'Las venas llevan la sangre desde el corazón a los órganos.', vf: false, e: 'Eso lo hacen las arterias. Las venas la traen de vuelta al corazón.' },
    { p: '¿Cómo se llama el movimiento de contracción y dilatación del corazón?', r: ['latido', 'el latido', 'latido cardiaco', 'latido cardíaco'], e: 'El latido cardiaco.' },
    { p: '¿Qué órganos forman las vías urinarias?', o: ['Uréteres, vejiga urinaria y uretra', 'Tráquea y bronquios', 'Arterias y venas'], c: 0, e: 'Uréteres, vejiga urinaria y uretra.' },
    { p: '¿Cómo se llaman los tubitos de los riñones que filtran la sangre?', r: ['nefronas', 'las nefronas'], e: 'Las nefronas.' },
    { p: '¿Por qué las nefronas están rodeadas de capilares?', o: ['Para recibir la sangre que tienen que filtrar', 'Para moverse', 'Para respirar'], c: 0, e: 'Los capilares les llevan la sangre para que la limpien.' },
    { p: '¿Qué producen los riñones al limpiar la sangre?', r: ['orina', 'la orina'], e: 'La orina, que va a la vejiga y sale por la uretra.' },
    { p: 'Ordena el camino de la orina: riñones → ? → vejiga → uretra', o: ['uréteres', 'arterias', 'bronquios'], c: 0, e: 'riñones → uréteres → vejiga urinaria → uretra.' }
  ]
});

AULA.tema('medio', {
  id: 'medio-u1-locomotor', num: 3, trimestre: 1, origen: 'libro', paginas: 'U1 · pág. 12',
  titulo: 'El aparato locomotor: huesos y músculos',
  resumen: 'Esqueleto, articulaciones, músculos y tendones',
  aprende: [
    { t: '¿Qué es el aparato locomotor?', h: '<p>Es el conjunto de estructuras que nos permiten <b>movernos de forma voluntaria</b> (cuando queremos). Está formado por el <b>esqueleto</b> y los <b>músculos</b>.</p>' },
    { t: 'El esqueleto', h: '<p>Está formado por los <b>huesos</b> y las <b>articulaciones</b>, que son las <b>zonas de unión entre dos huesos</b> (rodilla, codo, hombro…).</p><table><tr><th>Zona</th><th>Huesos</th></tr><tr><td>Cabeza</td><td>mandíbula</td></tr><tr><td>Tronco</td><td>clavícula, omóplato, esternón, costillas, columna vertebral, pubis</td></tr><tr><td>Brazo</td><td>húmero, cúbito, radio, falanges (dedos)</td></tr><tr><td>Pierna</td><td>fémur, rótula, tibia, peroné, tarso, metatarso, falanges</td></tr></table>' +
      '<p>Según su forma, los huesos son <b>largos</b> (fémur, húmero), <b>cortos</b> (vértebras) o <b>planos</b> (omóplato, esternón).</p>' },
    { t: 'Los músculos', h: '<p>Los <b>músculos</b> son órganos capaces de <b>contraerse</b> cuando reciben una señal nerviosa.</p><ul><li>Los músculos del aparato locomotor se contraen de forma <b>voluntaria</b> y están unidos a los huesos mediante los <b>tendones</b>.</li><li><b>Otros músculos</b> se contraen de forma <b>involuntaria</b>, sin que lo pensemos, como el <b>corazón</b>.</li></ul><table><tr><th>Zona</th><th>Músculos</th></tr><tr><td>Cara y cuello</td><td>temporal, masetero, orbicular, esternocleidomastoideo</td></tr><tr><td>Tronco</td><td>pectoral, abdominales, costales, trapecio, dorsal, glúteo</td></tr><tr><td>Brazo</td><td>deltoides, bíceps, tríceps</td></tr><tr><td>Pierna</td><td>cuádriceps, aductor, bíceps femoral, tibial, gemelos</td></tr></table><div class="ojo">El <b>tendón de Aquiles</b> une los gemelos con el hueso del talón.</div>' }
  ],
  chuleta: [
    'Aparato locomotor = <b>esqueleto + músculos</b> → nos movemos de forma voluntaria.',
    'Esqueleto = <b>huesos + articulaciones</b> (zonas de unión entre dos huesos).',
    'Huesos <b>largos</b>: fémur, húmero · <b>cortos</b>: vértebras · <b>planos</b>: omóplato.',
    'Brazo: húmero, cúbito, radio. Pierna: fémur, rótula, tibia, peroné.',
    'Músculos: se <b>contraen</b>. Unidos a los huesos por <b>tendones</b>.',
    'Voluntarios (bíceps, gemelos…) · involuntarios (corazón).',
    'Gemelos = músculos de la pierna (pantorrilla).'
  ],
  fichas: [
    ['Aparato locomotor', 'Esqueleto + músculos: nos permiten movernos de forma voluntaria'],
    ['<b>Articulación</b>', 'Zona de unión entre dos huesos'],
    ['<b>Tendón</b>', 'Une el músculo con el hueso'],
    ['Huesos del <b>brazo</b>', 'húmero, cúbito y radio'],
    ['Huesos de la <b>pierna</b>', 'fémur, rótula, tibia y peroné'],
    ['¿Fémur: largo, corto o plano?', 'Largo'],
    ['¿Vértebra: largo, corto o plano?', 'Corto'],
    ['¿Omóplato: largo, corto o plano?', 'Plano'],
    ['¿Gemelo: hueso o músculo?', 'Músculo, en la parte de atrás de la pierna'],
    ['Músculo <b>involuntario</b>', 'El corazón: se contrae sin que lo pensemos']
  ],
  preguntas: [
    { p: '¿De qué está formado el aparato locomotor?', o: ['Esqueleto y músculos', 'Corazón y venas', 'Riñones y vejiga'], c: 0, e: 'Esqueleto (huesos y articulaciones) y músculos.' },
    { p: '¿Qué es una articulación?', o: ['La zona de unión entre dos huesos', 'Un músculo del brazo', 'Un hueso plano'], c: 0, e: 'Como la rodilla, el codo o el hombro.' },
    { p: '¿Qué une los músculos con los huesos?', r: ['tendones', 'los tendones', 'tendon', 'tendón', 'el tendón'], e: 'Los tendones.' },
    { p: 'El gemelo es un hueso.', vf: false, e: 'Es un músculo de la parte de atrás de la pierna.' },
    { p: '¿Cuál es un hueso de la pierna?', o: ['Húmero', 'Fémur', 'Radio', 'Clavícula'], c: 1, e: 'Pierna: fémur, rótula, tibia y peroné. El húmero y el radio son del brazo.' },
    { p: '¿Cuál es un hueso del brazo?', o: ['Tibia', 'Peroné', 'Cúbito', 'Rótula'], c: 2, e: 'Brazo: húmero, cúbito y radio.' },
    { p: 'El fémur es un hueso…', o: ['largo', 'corto', 'plano'], c: 0, e: 'Es el hueso más largo del cuerpo.' },
    { p: 'Las vértebras son huesos…', o: ['largos', 'cortos', 'planos'], c: 1, e: 'Son huesos cortos.' },
    { p: 'El omóplato es un hueso…', o: ['largo', 'corto', 'plano'], c: 2, e: 'Es plano, en la espalda.' },
    { p: 'El corazón es un músculo que se contrae de forma involuntaria.', vf: true, e: 'Late sin que tengamos que pensarlo.' },
    { p: 'Los músculos del aparato locomotor se contraen de forma…', o: ['voluntaria', 'involuntaria'], c: 0, e: 'Los movemos cuando queremos.' },
    { p: '¿Qué músculo está en la parte delantera del brazo y lo dobla?', o: ['Bíceps', 'Cuádriceps', 'Trapecio'], c: 0, e: 'El bíceps. El tríceps está detrás.' },
    { p: '¿Dónde está el cuádriceps?', o: ['En el muslo', 'En la espalda', 'En la cara'], c: 0, e: 'En la parte delantera del muslo.' },
    { p: '¿Cómo se llama el tendón que une los gemelos con el talón?', r: ['tendón de aquiles', 'tendon de aquiles', 'aquiles', 'el tendón de aquiles'], e: 'El tendón de Aquiles.' }
  ]
});

AULA.tema('medio', {
  id: 'medio-u1-reproduccion', num: 4, trimestre: 1, origen: 'libro', paginas: 'U1 · pág. 13',
  titulo: 'La función de reproducción',
  resumen: 'Aparatos reproductores, gametos, fecundación, embarazo y parto',
  aprende: [
    { t: '¿Qué es la función de reproducción?', h: '<p>La <b>reproducción</b> es la función que nos permite tener <b>descendientes</b>: hijos e hijas que heredan parte de nuestras características.</p>' },
    { t: 'Los aparatos reproductores', h: '<p>Gracias a los <b>aparatos reproductores</b> se generan unas células llamadas <b>gametos</b>. Hay dos tipos:</p><table><tr><th></th><th>Genera…</th><th>Se forman en…</th><th>Órganos</th></tr><tr><td>Aparato que genera <b>óvulos</b></td><td>óvulos</td><td><b>ovarios</b></td><td>ovarios, trompas de Falopio, útero, cuello uterino, vagina y vulva</td></tr><tr><td>Aparato que genera <b>espermatozoides</b></td><td>espermatozoides</td><td><b>testículos</b></td><td>testículos, escroto, próstata, uretra y pene</td></tr></table>' },
    { t: 'Fecundación, embarazo y parto', h: '<ul><li><b>Fecundación</b>: es la unión de un <b>óvulo</b> y un <b>espermatozoide</b>. Así se forma el <b>cigoto</b>, la primera célula del nuevo ser.</li><li><b>Embarazo</b> o desarrollo embrionario: desde que se forma el cigoto hasta que nace el bebé. Dura unos <b>nueve meses</b>.</li><li><b>Parto</b>: es el <b>nacimiento</b> del bebé.</li></ul><div class="ej">óvulo + espermatozoide → cigoto → embarazo (9 meses) → parto</div>' },
    { t: 'La pubertad', h: '<p>Es la etapa en la que el cuerpo de niños y niñas empieza a cambiar y los aparatos reproductores maduran. Suele empezar entre los <b>10 y los 14 años</b>, y cada persona tiene su propio ritmo.</p>' }
  ],
  chuleta: [
    'Reproducción = tener <b>descendientes</b> que heredan parte de nuestras características.',
    'Los gametos son <b>óvulos</b> (se forman en los <b>ovarios</b>) y <b>espermatozoides</b> (se forman en los <b>testículos</b>).',
    '<b>Fecundación</b> = óvulo + espermatozoide → <b>cigoto</b>.',
    '<b>Embarazo</b>: del cigoto al nacimiento, unos <b>9 meses</b>.',
    '<b>Parto</b> = nacimiento del bebé.'
  ],
  fichas: [
    ['Función de <b>reproducción</b>', 'Nos permite tener descendientes que heredan parte de nuestras características'],
    ['<b>Gametos</b>', 'Células reproductoras: óvulos y espermatozoides'],
    ['¿Dónde se forman los <b>óvulos</b>?', 'En los ovarios'],
    ['¿Dónde se forman los <b>espermatozoides</b>?', 'En los testículos'],
    ['<b>Fecundación</b>', 'Unión de un óvulo y un espermatozoide'],
    ['<b>Cigoto</b>', 'Célula que se forma en la fecundación y se convierte en un nuevo ser'],
    ['¿Cuánto dura el <b>embarazo</b>?', 'Unos nueve meses'],
    ['<b>Parto</b>', 'El nacimiento del bebé']
  ],
  preguntas: [
    { p: '¿Qué nos permite la función de reproducción?', o: ['Tener descendientes', 'Movernos', 'Respirar'], c: 0, e: 'Tener hijos e hijas que heredan parte de nuestras características.' },
    { p: '¿Cómo se llaman las células que generan los aparatos reproductores?', r: ['gametos', 'los gametos'], e: 'Gametos: óvulos y espermatozoides.' },
    { p: '¿Dónde se forman los óvulos?', o: ['En los ovarios', 'En los testículos', 'En el útero'], c: 0, e: 'En los ovarios.' },
    { p: '¿Dónde se forman los espermatozoides?', o: ['En la próstata', 'En los testículos', 'En los ovarios'], c: 1, e: 'En los testículos.' },
    { p: '¿Qué es la fecundación?', o: ['La unión de un óvulo y un espermatozoide', 'El nacimiento del bebé', 'El crecimiento de los huesos'], c: 0, e: 'Y se forma el cigoto.' },
    { p: '¿Cómo se llama la célula que se forma en la fecundación?', r: ['cigoto', 'el cigoto', 'zigoto'], e: 'El cigoto.' },
    { p: 'El embarazo dura unos nueve meses.', vf: true, e: 'Desde que se forma el cigoto hasta el nacimiento.' },
    { p: '¿Qué es el parto?', o: ['El nacimiento del bebé', 'La unión de los gametos', 'La formación del cigoto'], c: 0, e: 'El parto es el nacimiento.' },
    { p: 'Ordena: ¿qué va primero?', o: ['Fecundación', 'Embarazo', 'Parto'], c: 0, e: 'Fecundación → embarazo → parto.' },
    { p: 'El útero forma parte del aparato que genera óvulos.', vf: true, e: 'Ovarios, trompas de Falopio, útero, cuello uterino, vagina y vulva.' },
    { p: 'Los óvulos y los espermatozoides son gametos.', vf: true, e: 'Son los dos tipos de gametos.' }
  ]
});

// ----- Tema base (aún no visto en el libro) -----
AULA.tema('medio', {
  id: 'medio-3', num: 5, trimestre: 1, origen: 'base',
  titulo: 'El universo y el sistema solar',
  resumen: 'Galaxias, el Sol, los planetas y los movimientos de la Tierra',
  aprende: [
    { t: 'El universo', h: '<p>Es todo lo que existe: galaxias, estrellas, planetas… Nosotros vivimos en la galaxia <b>Vía Láctea</b>.</p><p><b>Estrella</b>: tiene luz propia (el Sol). <b>Planeta</b>: gira alrededor de una estrella y no tiene luz propia. <b>Satélite</b>: gira alrededor de un planeta (la Luna).</p>' },
    { t: 'Los planetas del sistema solar', h: '<p>Del más cercano al más lejano del Sol:</p><p><b>Mercurio · Venus · Tierra · Marte</b> (rocosos o interiores)<br><b>Júpiter · Saturno · Urano · Neptuno</b> (gaseosos o exteriores)</p><div class="ojo">Truco: “<b>M</b>i <b>V</b>ecina <b>T</b>iene <b>M</b>uchas <b>J</b>aulas <b>S</b>in <b>U</b>n <b>N</b>ido”.</div><p>El más grande es <b>Júpiter</b>; el más pequeño, <b>Mercurio</b>.</p>' },
    { t: 'Los movimientos de la Tierra', h: '<table><tr><th>Movimiento</th><th>Qué es</th><th>Dura</th><th>Produce</th></tr><tr><td><b>Rotación</b></td><td>gira sobre sí misma</td><td>24 horas (1 día)</td><td>el día y la noche</td></tr><tr><td><b>Traslación</b></td><td>gira alrededor del Sol</td><td>365 días y 6 h (1 año)</td><td>las estaciones (con la inclinación del eje)</td></tr></table>' },
    { t: 'La Luna', h: '<p>Es el satélite de la Tierra. Tarda unos 28 días en dar la vuelta. Sus <b>fases</b>: luna nueva, cuarto creciente, luna llena y cuarto menguante.</p>' }
  ],
  chuleta: [
    'Vivimos en la galaxia <b>Vía Láctea</b>.',
    'Estrella = luz propia · Planeta = gira alrededor de una estrella · Satélite = gira alrededor de un planeta.',
    'Planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno.',
    '<b>Rotación</b> (24 h) → día y noche · <b>Traslación</b> (365 días) → estaciones.',
    'Fases lunares: nueva, creciente, llena, menguante.'
  ],
  fichas: [
    ['Nuestra galaxia', 'La Vía Láctea'],
    ['Movimiento de <b>rotación</b>', 'La Tierra gira sobre sí misma: 24 h → día y noche'],
    ['Movimiento de <b>traslación</b>', 'Vuelta alrededor del Sol: 365 días → estaciones'],
    ['Planeta más grande', 'Júpiter'],
    ['Planeta más cercano al Sol', 'Mercurio'],
    ['Satélite', 'Astro que gira alrededor de un planeta (la Luna)'],
    ['Truco de los planetas', 'Mi Vecina Tiene Muchas Jaulas Sin Un Nido']
  ],
  preguntas: [
    { p: '¿Cuál es el planeta más grande del sistema solar?', o: ['Saturno', 'Júpiter', 'Tierra', 'Neptuno'], c: 1, e: 'Júpiter es el gigante del sistema solar.' },
    { p: '¿Qué movimiento produce el día y la noche?', o: ['Rotación', 'Traslación'], c: 0, e: 'Al girar sobre sí misma, una mitad mira al Sol (día) y otra no (noche).' },
    { p: '¿Cuánto dura el movimiento de traslación?', o: ['24 horas', '28 días', '365 días y unas 6 horas'], c: 2, e: 'Un año. Cada 4 años sumamos esas 6 horas: año bisiesto.' },
    { p: 'La Luna es un planeta.', vf: false, e: 'Es un satélite: gira alrededor de la Tierra.' },
    { p: '¿Qué planeta va después de la Tierra?', r: ['marte'], e: 'Mercurio, Venus, Tierra, Marte…' },
    { p: '¿Cómo se llama nuestra galaxia?', r: ['vía láctea', 'via lactea', 'la vía láctea', 'la via lactea'], e: 'La Vía Láctea.' },
    { p: 'El Sol es una estrella.', vf: true, e: 'Tiene luz propia: es una estrella.' },
    { p: '¿Cuál es un planeta gaseoso?', o: ['Marte', 'Venus', 'Saturno', 'Mercurio'], c: 2, e: 'Júpiter, Saturno, Urano y Neptuno son gaseosos.' },
    { p: '¿Qué produce las estaciones del año?', o: ['La rotación', 'La traslación y la inclinación del eje', 'La Luna'], c: 1, e: 'Al dar la vuelta al Sol con el eje inclinado, los rayos llegan con distinta inclinación.' },
    { p: '¿Cuántos planetas tiene el sistema solar?', r: ['8', 'ocho'], e: 'Ocho planetas.' }
  ]
});
