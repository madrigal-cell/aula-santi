// ===== Deberes y exámenes =====
// Se rellenan a partir de las fotos que manda papá.
//
// Deber:
// { id:'2026-10-20-mates', materia:'mates', para:'2026-10-21', titulo:'Ficha de divisiones',
//   enunciado:'<p>…</p>', explica:'<p>recordatorio de teoría</p>',
//   pistas:['…','…'], solucion:'<ol><li>…</li></ol>',
//   practica:[ {p:'…', r:['…'], e:'…'} ], generar:[['dividir',3]] }
//
// Examen:
// { id:'mates-t1', materia:'mates', fecha:'2026-10-30', titulo:'Tema 1 y 2',
//   temas:['mates-1','mates-2'], notas:'Entra la página 24', nota:null }

AULA.deberes = [
  { id: 'medio-poblacion-examen-1', materia: 'medio', para: '2026-11-25', titulo: '📝 Examen tipo cole 1 · La población',
    enunciado: '<div class="aprende">' +
      '<div class="ojo">✏️ Hazlo en una hoja, <b>con lápiz y sin mirar el libro</b>. Escribe el número de cada pregunta y tu nombre arriba. Tiempo: unos 45 minutos. Cuando acabes, dale la hoja a papá para que la corrija.</div>' +
      '<ol>' +
      '<li><b>(1 punto)</b> ¿Qué es la <b>población</b>? ¿Y la <b>demografía</b>?</li>' +
      '<li><b>(1,5 puntos)</b> Copia y completa la tabla:<table><tr><th></th><th>¿Qué es?</th><th>¿Cada cuánto se hace?</th></tr><tr><td>Padrón municipal</td><td>__________</td><td>__________</td></tr><tr><td>Registro Civil</td><td>__________</td><td>__________</td></tr><tr><td>Censo</td><td>__________</td><td>__________</td></tr></table></li>' +
      '<li><b>(1 punto)</b> Une cada variable con su definición:<table><tr><td>Natalidad</td><td>Salida de personas para ir a residir a otro país</td></tr><tr><td>Mortalidad</td><td>Número de personas que nacen en un año</td></tr><tr><td>Emigración</td><td>Llegada de personas de otro país para vivir aquí</td></tr><tr><td>Inmigración</td><td>Número de personas que fallecen en un año</td></tr></table></li>' +
      '<li><b>(1,5 puntos)</b> En un pueblo, en un año, nacen 120 personas, fallecen 150, llegan 80 inmigrantes y se van 20 emigrantes.<br>a) Calcula el crecimiento natural.<br>b) Calcula el crecimiento real.<br>c) ¿Cada uno es positivo o negativo?</li>' +
      '<li><b>(1 punto)</b> ¿Qué es la <b>densidad de población</b> y cómo se calcula?</li>' +
      '<li><b>(1 punto)</b> ¿Qué zonas de España están más pobladas? ¿Y cuáles menos?</li>' +
      '<li><b>(1,5 puntos)</b> <i>In English</i>: write the definition of <b>birth rate</b> and <b>mortality</b>.</li>' +
      '<li><b>(1,5 puntos)</b> Explica la diferencia entre la población <b>ocupada</b> y la <b>no ocupada</b>. Pon un ejemplo de cada una.</li>' +
      '</ol></div>',
    solucion: '<ol><li>Población: conjunto de personas que viven en un determinado lugar. Demografía: estudio de la población y su evolución.</li><li>Padrón: registro de los habitantes de un municipio, cada año. Registro Civil: anota nacimientos, fallecimientos y matrimonios, continuamente. Censo: registro de los habitantes de un país, cada diez años.</li><li>Natalidad → nacen en un año · Mortalidad → fallecen en un año · Emigración → salida a otro país · Inmigración → llegada desde otro país.</li><li>a) CN = 120 − 150 = −30. b) CR = −30 + 80 − 20 = 30. c) CN negativo, CR positivo.</li><li>Sirve para saber si un territorio está muy poblado. Habitantes ÷ superficie en km².</li><li>Más pobladas: Madrid, zonas costeras y archipiélagos. Menos: Meseta Norte y Meseta Sur.</li><li>Birth rate: the number of people who are born in a specific place and time. Mortality: the number of people who die in a specific place and time.</li><li>Ocupada: trabajan y reciben dinero (una médica). No ocupada: en paro o buscando su primer empleo (un vecino en paro).</li></ol>'
  },
  { id: 'medio-poblacion-examen-2', materia: 'medio', para: '2026-11-25', titulo: '📝 Examen tipo cole 2 · La población',
    enunciado: '<div class="aprende">' +
      '<div class="ojo">✏️ Hazlo en una hoja, <b>con lápiz y sin mirar el libro</b>. Escribe el número de cada pregunta y tu nombre arriba. Tiempo: unos 45 minutos. Cuando acabes, dale la hoja a papá para que la corrija.</div>' +
      '<ol>' +
      '<li><b>(1 punto)</b> Explica la diferencia entre el <b>padrón municipal</b> y el <b>censo</b>.</li>' +
      '<li><b>(1,5 puntos)</b> Clasifica en población <b>ocupada</b>, <b>no ocupada</b> o <b>no activa</b>:<br>una médica que trabaja en un hospital · un abuelo jubilado · una joven que busca su primer empleo · un alumno de 5º · un camarero que cobra su sueldo · una persona en paro</li>' +
      '<li><b>(1 punto)</b> ¿Qué datos recoge el <b>Registro Civil</b>? ¿Cuándo los recoge?</li>' +
      '<li><b>(1,5 puntos)</b> Calcula la densidad de población:<br>a) Un pueblo con 5 000 habitantes y 50 km².<br>b) Una ciudad con 60 000 habitantes y 20 km².<br>c) ¿Cuál está más poblado?</li>' +
      '<li><b>(1 punto)</b> Escribe <b>V</b> o <b>F</b>. Corrige las falsas:<br>a) España tiene crecimiento natural positivo.<br>b) El censo se hace cada diez años.<br>c) La inmigración es la salida de personas hacia otro país.<br>d) Antes de 1975 muchos españoles emigraron a Alemania.</li>' +
      '<li><b>(1 punto)</b> ¿Qué es el <b>éxodo rural</b>? ¿En qué época ocurrió?</li>' +
      '<li><b>(1,5 puntos)</b> <i>In English</i>: what is <b>immigration</b>? What is <b>emigration</b>?</li>' +
      '<li><b>(1,5 puntos)</b> Escribe las fórmulas del <b>crecimiento natural</b> y del <b>crecimiento real</b> y explica qué significa cada letra.</li>' +
      '</ol></div>',
    solucion: '<ol><li>El padrón registra los habitantes de un municipio y se hace cada año; el censo registra los habitantes de un país y se hace cada diez años.</li><li>Ocupada: médica, camarero. No ocupada: joven que busca su primer empleo, persona en paro. No activa: abuelo jubilado, alumno de 5º.</li><li>Nacimientos, fallecimientos y matrimonios. Continuamente.</li><li>a) 5 000 ÷ 50 = 100 hab/km². b) 60 000 ÷ 20 = 3 000 hab/km². c) La ciudad.</li><li>a) F: es negativo (el real es positivo). b) V. c) F: la inmigración es la llegada; la salida es la emigración. d) V.</li><li>La salida de la gente del campo a las ciudades. Antes de 1975.</li><li>Immigration: arrival of people from different places. Emigration: departure of people from their places.</li><li>CN = N − M (nacimientos menos muertes/fallecimientos). CR = CN + I − E (crecimiento natural más inmigrantes menos emigrantes).</li></ol>'
  },
  { id: 'medio-poblacion-examen-3', materia: 'medio', para: '2026-11-26', titulo: '📝 Examen tipo cole 3 · La población',
    enunciado: '<div class="aprende">' +
      '<div class="ojo">✏️ Hazlo en una hoja, <b>con lápiz y sin mirar el libro</b>. Escribe el número de cada pregunta y tu nombre arriba. Tiempo: unos 45 minutos. Cuando acabes, dale la hoja a papá para que la corrija.</div>' +
      '<ol>' +
      '<li><b>(1 punto)</b> Define la <b>densidad de población</b>.</li>' +
      '<li><b>(1 punto)</b> ¿Qué zonas suelen ser las más pobladas?</li>' +
      '<li><b>(1 punto)</b> ¿Adónde emigraba la población antes del año 1975?</li>' +
      '<li><b>(1,5 puntos)</b> Después de 1995, ¿de dónde venían los inmigrantes que llegaron a España? ¿En qué comunidades se instalaron sobre todo?</li>' +
      '<li><b>(1,5 puntos)</b> Densidades de 2020: Madrid 841 · Andalucía 97 · Extremadura 25 · Melilla 7 001 (hab/km²).<br>a) Ordénalas de más a menos densidad.<br>b) La media de España es 93,6. ¿Andalucía está por encima o por debajo?</li>' +
      '<li><b>(1,5 puntos)</b> En una ciudad nacen 300 personas, fallecen 250, llegan 40 inmigrantes y se van 90 emigrantes. Calcula el crecimiento natural y el crecimiento real.</li>' +
      '<li><b>(1 punto)</b> ¿Qué es la población <b>no activa</b>? Pon dos ejemplos.</li>' +
      '<li><b>(1,5 puntos)</b> <i>In English</i>: match each word with its definition.<table><tr><td>Birth rate</td><td>Departure of people from their places</td></tr><tr><td>Mortality</td><td>The number of people who are born in a specific place and time</td></tr><tr><td>Immigration</td><td>The number of people who die in a specific place and time</td></tr><tr><td>Emigration</td><td>Arrival of people from different places</td></tr></table></li>' +
      '</ol></div>',
    solucion: '<ol><li>Es la relación entre los habitantes y la superficie: habitantes ÷ km². Sirve para saber si un territorio está muy poblado.</li><li>Madrid, las zonas costeras y los archipiélagos.</li><li>A las ciudades (éxodo rural) y fuera del país, a destinos como Alemania.</li><li>De América Latina, África y Asia. Cataluña, Madrid, Andalucía y el País Vasco.</li><li>a) Melilla, Madrid, Andalucía, Extremadura. b) Por encima (97 &gt; 93,6).</li><li>CN = 300 − 250 = 50. CR = 50 + 40 − 90 = 0 (la población no cambia).</li><li>Personas que trabajan sin recibir dinero a cambio: jubilados, estudiantes.</li><li>Birth rate → born · Mortality → die · Immigration → arrival · Emigration → departure.</li></ol>'
  },
  { id: 'medio-u2-examen-1', materia: 'medio', para: '2026-11-10', titulo: '📝 Examen tipo cole 1 · La salud',
    enunciado: '<div class="aprende">' +
      '<div class="ojo">✏️ Hazlo en una hoja, <b>con lápiz y sin mirar el libro</b>. Escribe el número de cada pregunta y tu nombre arriba. Tiempo: unos 45 minutos. Cuando acabes, dale la hoja a papá para que la corrija.</div>' +
      '<ol>' +
      '<li><b>(1 punto)</b> Completa: La salud es un estado de completo bienestar ________, ________ y ________.</li>' +
      '<li><b>(1 punto)</b> ¿Qué es una enfermedad?</li>' +
      '<li><b>(1,5 puntos)</b> Clasifica estas enfermedades en <b>infecciosa contagiosa</b>, <b>infecciosa no contagiosa</b> o <b>no infecciosa</b>:<br>gripe · tétanos · fractura de un brazo · sarampión · alergia al polen · COVID-19</li>' +
      '<li><b>(1,5 puntos)</b> Une cada agente infeccioso con la enfermedad que provoca:<table><tr><td>Bacterias</td><td>Malaria</td></tr><tr><td>Hongos</td><td>Gripe</td></tr><tr><td>Protozoos</td><td>Tuberculosis</td></tr><tr><td>Virus</td><td>Pie de atleta</td></tr></table></li>' +
      '<li><b>(1 punto)</b> ¿Por dónde pueden entrar los agentes infecciosos en nuestro cuerpo?</li>' +
      '<li><b>(1,5 puntos)</b> Clasifica en <b>signos</b> o <b>síntomas</b>:<br>dolor · temperatura de 38 º · mareo · picor · anginas inflamadas · elevado número de glóbulos blancos en la sangre</li>' +
      '<li><b>(1 punto)</b> ¿A qué tipo de medicamento o preparado corresponde cada definición?<br>a) Alivia el dolor y baja la fiebre.<br>b) Elimina las bacterias que causan infección.<br>c) Previene que se desarrolle una enfermedad.</li>' +
      '<li><b>(1,5 puntos)</b> Escribe <b>tres consejos</b> para cuidar tu salud.</li>' +
      '</ol></div>'
  },
  { id: 'medio-u2-examen-2', materia: 'medio', para: '2026-11-11', titulo: '📝 Examen tipo cole 2 · La salud',
    enunciado: '<div class="aprende">' +
      '<div class="ojo">✏️ Hazlo en una hoja, <b>con lápiz y sin mirar el libro</b>. Escribe el número de cada pregunta y tu nombre arriba. Tiempo: unos 45 minutos. Cuando acabes, dale la hoja a papá para que la corrija.</div>' +
      '<ol>' +
      '<li><b>(1 punto)</b> ¿Qué es hacer un <b>diagnóstico</b>?</li>' +
      '<li><b>(1 punto)</b> ¿Cuáles son los factores que más influyen en nuestra salud?</li>' +
      '<li><b>(1,5 puntos)</b> Escribe <b>V</b> (verdadero) o <b>F</b> (falso). Corrige las falsas:<br>a) Las enfermedades no infecciosas se transmiten de unas personas a otras.<br>b) La gripe la provoca un virus.<br>c) Los antibióticos curan el resfriado.<br>d) Las vacunas impiden que desarrollemos una enfermedad.<br>e) El tétanos es una enfermedad contagiosa.<br>f) Los hospitales son atención especializada.</li>' +
      '<li><b>(1,5 puntos)</b> Explica qué son:<br>a) Un traumatismo.<br>b) Una intoxicación.<br>c) Una enfermedad congénita.</li>' +
      '<li><b>(1 punto)</b> ¿Qué diferencia hay entre un <b>síntoma</b> y un <b>signo</b>? Pon un ejemplo de cada uno.</li>' +
      '<li><b>(1 punto)</b> ¿Qué es la <b>cirugía</b>?</li>' +
      '<li><b>(1,5 puntos)</b> ¿Qué es el <b>sistema sanitario</b>? ¿En qué dos tipos de atención se divide? Pon un ejemplo de cada una.</li>' +
      '<li><b>(1,5 puntos)</b> ¿Por qué es importante que la población se vacune de algunas enfermedades?</li>' +
      '</ol></div>'
  },
  { id: 'medio-u2-examen-3', materia: 'medio', para: '2026-11-11', titulo: '📝 Examen tipo cole 3 · La salud',
    enunciado: '<div class="aprende">' +
      '<div class="ojo">✏️ Hazlo en una hoja, <b>con lápiz y sin mirar el libro</b>. Escribe el número de cada pregunta y tu nombre arriba. Tiempo: unos 45 minutos. Cuando acabes, dale la hoja a papá para que la corrija.</div>' +
      '<ol>' +
      '<li><b>(1,5 puntos)</b> Copia y completa la tabla de los principales agentes infecciosos (una enfermedad de cada uno):<table><tr><th>Agente infeccioso</th><th>Enfermedad que provoca</th></tr><tr><td>__________</td><td>Salmonelosis</td></tr><tr><td>Hongos</td><td>__________</td></tr><tr><td>__________</td><td>Malaria</td></tr><tr><td>Virus</td><td>__________</td></tr></table></li>' +
      '<li><b>(1 punto)</b> ¿Qué diferencia hay entre una enfermedad infecciosa <b>contagiosa</b> y una <b>no contagiosa</b>? Pon un ejemplo de cada una.</li>' +
      '<li><b>(1,5 puntos)</b> ¿Qué tipo de enfermedad no infecciosa es?<br>a) Crecimiento descontrolado de nuestras propias células.<br>b) Afecta al aparato circulatorio.<br>c) Reacción exagerada del cuerpo al pelo de gato.<br>d) Está relacionada con la mala alimentación.<br>e) Una quemadura o un esguince.<br>f) Afecta a nuestro estado de ánimo, como la depresión.</li>' +
      '<li><b>(1 punto)</b> Completa:<br>Los antibióticos sirven para enfermedades causadas solo por ________. Los ________ reducen el dolor y bajan la fiebre. Los ________ reducen la inflamación. Prevenir una enfermedad es ________ el riesgo de padecerla.</li>' +
      '<li><b>(1,5 puntos)</b> Lee y contesta:<br><i>Lucía le dice al médico que le duele la garganta y que está mareada. El médico le mira la boca y ve que tiene las anginas inflamadas. Le pone el termómetro: 38,5 º.</i><br>a) ¿Cuáles son los <b>síntomas</b> de Lucía?<br>b) ¿Cuáles son los <b>signos</b>?<br>c) ¿Cómo se llama lo que hace el médico al descubrir qué enfermedad tiene?</li>' +
      '<li><b>(1 punto)</b> El centro de salud y el hospital, ¿a qué tipo de atención sanitaria pertenece cada uno?</li>' +
      '<li><b>(1 punto)</b> La sanidad pública también cuida nuestra salud. Pon <b>dos ejemplos</b> de lo que hace.</li>' +
      '<li><b>(1,5 puntos)</b> Elige <b>dos consejos</b> para cuidar tu salud y explica por qué te parecen importantes.</li>' +
      '</ol></div>'
  }
];

AULA.examenes = [
  { id: 'medio-poblacion', materia: 'medio', fecha: null, titulo: '⚡ Examen SORPRESA esta semana · La población',
    temas: ['medio-poblacion-estudio', 'medio-poblacion-trabajo', 'medio-poblacion-ingles'],
    notas: '¡Puede caer cualquier día hasta el viernes 27! Entran las págs. 52, 53 y 54 del libro: población y demografía, padrón, Registro Civil y censo, variables demográficas, crecimiento natural y real, densidad, población y trabajo y migraciones. Lo del cuaderno (birth rate, mortality, immigration, emigration) hay que sabérselo <b>en inglés</b>. En Deberes tienes 3 exámenes tipo cole para hacer en papel.' },
  { id: 'medio-u2', materia: 'medio', fecha: '2026-11-12', titulo: 'Unidad 2 · La salud',
    temas: ['medio-u2-salud', 'medio-u2-enfrentamos'],
    notas: 'Págs. 16-19 del libro: salud y enfermedad, enfermedades infecciosas y no infecciosas, agentes infecciosos, diagnóstico (signos y síntomas), tratamiento, prevención y sistema sanitario. En Deberes tienes 3 exámenes tipo cole para hacer en papel.' },
  { id: 'medio-u1', materia: 'medio', fecha: '2026-10-22', titulo: 'Unidad 1 · Nuestro cuerpo',
    temas: ['medio-u1-nutricion', 'medio-u1-circulatorio', 'medio-u1-locomotor', 'medio-u1-reproduccion'],
    notas: 'Págs. 8, 9, 12 y 13 del libro. Faltan las págs. 10-11 (sentidos y sistema nervioso) si entran.' },
  { id: 'frances-t1', materia: 'frances', fecha: '2026-10-20', titulo: 'Couleurs, famille et nombres',
    temas: ['frances-libro-memo', 'frances-libro-nombres'],
    notas: 'Carte mémo de la pág. 25 y los números del 1 al 20 bien escritos.' },
  { id: 'ingles-t1', materia: 'ingles', fecha: null, titulo: 'All about me & sports',
    temas: ['ingles-about-me'],
    notas: 'Presentarse, hobbies, deportes (go + -ing) y once / twice a week. Practica también en English Fox: unidad “All about me & sports”.' },
  { id: 'mates-propiedades', materia: 'mates', fecha: '2026-10-23', titulo: 'Propiedades de las operaciones',
    temas: ['mates-propiedades'],
    notas: 'Entran las propiedades conmutativa, asociativa y distributiva.' },
  { id: 'lengua-t1', materia: 'lengua', fecha: '2026-10-27', titulo: 'La comunicación y la tilde',
    temas: ['lengua-comunicacion', 'lengua-acentuacion'],
    notas: 'Entran las normas de la comunicación y agudas, llanas, esdrújulas y sobresdrújulas con las reglas de la tilde.' }
];

// Unidad de inglés que están dando en clase (se muestra en la pestaña de Inglés)
AULA.inglesUnidad = 'All about me & sports';
