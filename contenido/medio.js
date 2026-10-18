// ===== CONOCIMIENTO DEL MEDIO · 5º Primaria =====

AULA.tema('medio', {
  id: 'medio-1', num: 1, trimestre: 1, origen: 'base',
  titulo: 'Los seres vivos y la célula',
  resumen: 'Funciones vitales, la célula y los cinco reinos',
  aprende: [
    { t: 'Las tres funciones vitales', h: '<p>Todos los seres vivos realizan tres funciones vitales:</p><table><tr><th>Función</th><th>Qué es</th></tr><tr><td><b>Nutrición</b></td><td>obtener alimento y energía para vivir y crecer</td></tr><tr><td><b>Relación</b></td><td>darse cuenta de lo que pasa alrededor y responder</td></tr><tr><td><b>Reproducción</b></td><td>tener descendientes parecidos a ellos</td></tr></table>' },
    { t: 'La célula', h: '<p>Es la parte <b>más pequeña</b> de un ser vivo que tiene vida. Solo se ve con <b>microscopio</b>.</p><p>Sus partes:</p><ul><li><b>Membrana</b>: la envuelve y deja pasar sustancias.</li><li><b>Citoplasma</b>: líquido del interior donde están los orgánulos.</li><li><b>Núcleo</b>: dirige la célula; guarda la información genética.</li></ul><div class="ojo">Las células <b>vegetales</b> tienen además <b>pared celular</b> y <b>cloroplastos</b> (para hacer la fotosíntesis).</div>' },
    { t: 'Unicelulares y pluricelulares', h: '<p><b>Unicelulares</b>: una sola célula (bacterias, amebas). <b>Pluricelulares</b>: muchas células (personas, árboles, perros).</p><p>En los pluricelulares: células → <b>tejidos</b> → <b>órganos</b> → <b>aparatos y sistemas</b> → <b>organismo</b>.</p>' },
    { t: 'Los cinco reinos', h: '<table><tr><th>Reino</th><th>Ejemplos</th></tr><tr><td><b>Animales</b></td><td>león, abeja, persona</td></tr><tr><td><b>Plantas</b></td><td>olivo, helecho, musgo</td></tr><tr><td><b>Hongos</b></td><td>setas, mohos, levaduras</td></tr><tr><td><b>Protoctistas</b></td><td>algas, protozoos</td></tr><tr><td><b>Moneras</b></td><td>bacterias</td></tr></table>' }
  ],
  chuleta: [
    'Funciones vitales: <b>nutrición, relación y reproducción</b>.',
    'Célula: <b>membrana, citoplasma y núcleo</b>.',
    'Vegetal además: <b>pared celular y cloroplastos</b>.',
    'Célula → tejido → órgano → aparato/sistema → organismo.',
    '5 reinos: animales, plantas, hongos, protoctistas, moneras.'
  ],
  fichas: [
    ['Las 3 funciones vitales', 'Nutrición, relación y reproducción'],
    ['Núcleo', 'Dirige la célula y guarda la información genética'],
    ['Cloroplastos', 'Solo en células vegetales: hacen la fotosíntesis'],
    ['Ser <b>unicelular</b>', 'Formado por una sola célula (bacteria)'],
    ['Orden de organización', 'célula → tejido → órgano → aparato → organismo'],
    ['Reino de las <b>bacterias</b>', 'Moneras'],
    ['Reino de las <b>setas</b>', 'Hongos']
  ],
  preguntas: [
    { p: '¿Cuál NO es una función vital?', o: ['Nutrición', 'Relación', 'Respiración', 'Reproducción'], c: 2, e: 'La respiración forma parte de la nutrición. Las funciones vitales son nutrición, relación y reproducción.' },
    { p: '¿Qué parte de la célula la dirige?', o: ['Membrana', 'Núcleo', 'Citoplasma'], c: 1, e: 'El núcleo es el “cerebro” de la célula.' },
    { p: 'Las células animales tienen cloroplastos.', vf: false, e: 'Los cloroplastos solo están en las células vegetales.' },
    { p: 'Una bacteria es un ser…', o: ['unicelular', 'pluricelular'], c: 0, e: 'Tiene una sola célula.' },
    { p: '¿A qué reino pertenecen las setas?', o: ['Plantas', 'Hongos', 'Moneras'], c: 1, e: 'Las setas son hongos: no hacen la fotosíntesis.' },
    { p: 'Ordena: ¿qué va después de <b>tejido</b>?', o: ['célula', 'órgano', 'organismo'], c: 1, e: 'Célula → tejido → órgano → aparato → organismo.' },
    { p: '¿Con qué aparato vemos las células?', r: ['microscopio', 'el microscopio', 'con el microscopio', 'con microscopio'], e: 'Son tan pequeñas que necesitamos un microscopio.' },
    { p: 'Cuando un gato oye un ruido y se gira, está realizando la función de…', o: ['nutrición', 'relación', 'reproducción'], c: 1, e: 'Percibe un estímulo y responde: relación.' },
    { p: 'La membrana envuelve la célula.', vf: true, e: 'Sí, y controla lo que entra y sale.' },
    { p: '¿Cuál es exclusiva de la célula vegetal?', o: ['Núcleo', 'Pared celular', 'Citoplasma'], c: 1, e: 'Pared celular y cloroplastos solo los tiene la vegetal.' }
  ]
});

AULA.tema('medio', {
  id: 'medio-2', num: 2, trimestre: 1, origen: 'base',
  titulo: 'La función de nutrición',
  resumen: 'Aparatos digestivo, respiratorio, circulatorio y excretor',
  aprende: [
    { t: 'Cuatro aparatos trabajando en equipo', h: '<table><tr><th>Aparato</th><th>Qué hace</th><th>Órganos</th></tr>' +
      '<tr><td><b>Digestivo</b></td><td>transforma los alimentos en nutrientes</td><td>boca, esófago, estómago, intestino delgado y grueso, hígado, páncreas</td></tr>' +
      '<tr><td><b>Respiratorio</b></td><td>toma oxígeno y expulsa dióxido de carbono</td><td>fosas nasales, faringe, laringe, tráquea, bronquios, pulmones</td></tr>' +
      '<tr><td><b>Circulatorio</b></td><td>reparte nutrientes y oxígeno por todo el cuerpo con la sangre</td><td>corazón, arterias, venas, capilares</td></tr>' +
      '<tr><td><b>Excretor</b></td><td>elimina los desechos de la sangre</td><td>riñones, uréteres, vejiga, uretra (y glándulas sudoríparas)</td></tr></table>' },
    { t: 'El viaje de la comida', h: '<p>Boca (masticamos, saliva) → esófago → estómago (jugos gástricos) → <b>intestino delgado</b> (aquí los nutrientes pasan a la sangre) → intestino grueso → ano.</p>' },
    { t: 'La respiración', h: '<p><b>Inspiración</b>: entra aire con oxígeno; el diafragma baja y los pulmones se hinchan. <b>Espiración</b>: sale el aire con dióxido de carbono.</p><p>El intercambio ocurre en los <b>alvéolos</b> pulmonares.</p>' },
    { t: 'El corazón y la sangre', h: '<p>El corazón es un músculo con 4 cavidades: 2 <b>aurículas</b> y 2 <b>ventrículos</b>.</p><ul><li><b>Arterias</b>: llevan la sangre desde el corazón al cuerpo.</li><li><b>Venas</b>: traen la sangre de vuelta al corazón.</li><li><b>Capilares</b>: vasos finísimos que unen arterias y venas.</li></ul><div class="ojo">Truco: <b>A</b>rterias = <b>A</b>fuera del corazón.</div>' }
  ],
  chuleta: [
    'Nutrición = digestivo + respiratorio + circulatorio + excretor.',
    'Los nutrientes pasan a la sangre en el <b>intestino delgado</b>.',
    'El oxígeno pasa a la sangre en los <b>alvéolos</b> de los pulmones.',
    'Corazón: 2 aurículas + 2 ventrículos.',
    'Arterias salen del corazón · venas vuelven al corazón.',
    'Riñones filtran la sangre → orina → vejiga.'
  ],
  fichas: [
    ['¿Dónde pasan los nutrientes a la sangre?', 'En el intestino delgado'],
    ['Alvéolos', 'Saquitos de los pulmones donde el oxígeno pasa a la sangre'],
    ['Arterias', 'Llevan la sangre DESDE el corazón'],
    ['Venas', 'Llevan la sangre HACIA el corazón'],
    ['Riñones', 'Filtran la sangre y fabrican la orina'],
    ['Cavidades del corazón', '2 aurículas y 2 ventrículos'],
    ['Inspiración', 'Entrada de aire con oxígeno']
  ],
  preguntas: [
    { p: '¿Qué aparato reparte el oxígeno y los nutrientes por el cuerpo?', o: ['Digestivo', 'Circulatorio', 'Excretor'], c: 1, e: 'La sangre, movida por el corazón, lo reparte todo.' },
    { p: '¿En qué órgano pasan los nutrientes a la sangre?', o: ['Estómago', 'Intestino delgado', 'Esófago'], c: 1, e: 'En el intestino delgado se absorben los nutrientes.' },
    { p: 'Las venas llevan la sangre desde el corazón al resto del cuerpo.', vf: false, e: 'Eso lo hacen las arterias. Las venas la devuelven al corazón.' },
    { p: '¿Qué órganos filtran la sangre y forman la orina?', r: ['riñones', 'los riñones', 'rinones'], e: 'Los riñones.' },
    { p: '¿Cuántas cavidades tiene el corazón?', r: ['4', 'cuatro'], e: 'Dos aurículas y dos ventrículos.' },
    { p: '¿Qué gas expulsamos al espirar?', o: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno'], c: 1, e: 'Expulsamos dióxido de carbono, que es un desecho.' },
    { p: '¿Qué órgano NO pertenece al aparato respiratorio?', o: ['Tráquea', 'Bronquios', 'Esófago', 'Pulmones'], c: 2, e: 'El esófago es del aparato digestivo.' },
    { p: 'El sudor también es una forma de eliminar desechos.', vf: true, e: 'Las glándulas sudoríparas también excretan.' },
    { p: '¿Dónde se realiza el intercambio de gases?', o: ['En la tráquea', 'En los alvéolos', 'En el corazón'], c: 1, e: 'En los alvéolos pulmonares.' },
    { p: '¿Qué vasos finísimos unen arterias y venas?', r: ['capilares', 'los capilares'], e: 'Los capilares.' }
  ]
});

AULA.tema('medio', {
  id: 'medio-3', num: 3, trimestre: 1, origen: 'base',
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
