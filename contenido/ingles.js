// ===== INGLÉS · 5º Primaria =====
// Inglés se estudia en English Fox (https://madrigal-cell.github.io/english-fox/).
// Las unidades de English Fox se ajustan al libro del cole con las fotos que manda papá
// (la unidad de clase está en english-fox/clase.js).
// Aquí solo va lo extra para el examen: preparar su presentación escrita/oral.

AULA.tema('ingles', {
  id: 'ingles-about-me', num: 1, trimestre: 1, origen: 'libro', paginas: 'fichas de Mr. Sergio', voz: 'en-GB',
  titulo: 'All about me: mi presentación',
  resumen: 'Preguntas y respuestas para presentarte y hablar de tus deportes',
  aprende: [
    { t: 'Tu presentación (apréndetela)', h: '<p>Pulsa cada frase para oírla 🔊</p><div class="ej">' +
      '<span class="say" data-lang="en-GB">Hello! My name is Santi.</span><br>' +
      '<span class="say" data-lang="en-GB">I’m ten years old and I live in Mairena.</span><br>' +
      '<span class="say" data-lang="en-GB">Doing exercise is important for our body, so I’m going to tell you about some sports I like.</span><br>' +
      '<span class="say" data-lang="en-GB">My favourite sport is rugby. I play rugby twice a week.</span><br>' +
      '<span class="say" data-lang="en-GB">I also like BMX. I ride my BMX with my friends.</span><br>' +
      '<span class="say" data-lang="en-GB">My favourite subject is PE.</span></div>' +
      '<div class="ojo">Cambia lo que quieras para que sea verdad (días, deportes, amigos). ¡Lo importante es escribirlo bien!</div>' },
    { t: 'Preguntas que te pueden hacer', h: '<table><tr><th>Pregunta</th><th>Respuesta</th></tr>' +
      '<tr><td>What’s your name?</td><td>My name is Santi.</td></tr>' +
      '<tr><td>How old are you?</td><td>I’m ten years old.</td></tr>' +
      '<tr><td>Where do you live?</td><td>I live in Mairena.</td></tr>' +
      '<tr><td>What are your hobbies?</td><td>My hobbies are BMX and rugby.</td></tr>' +
      '<tr><td>What’s your favourite subject?</td><td>My favourite subject is PE.</td></tr>' +
      '<tr><td>What’s your favourite sport?</td><td>My favourite sport is rugby.</td></tr>' +
      '<tr><td>What do you like to eat?</td><td>I like to eat potatoes but I don’t like to eat fish.</td></tr>' +
      '<tr><td>How are you today?</td><td>I’m happy.</td></tr>' +
      '<tr><td>Have you got a pet?</td><td>Yes, I have. / No, I haven’t.</td></tr>' +
      '<tr><td>When do you practise rugby?</td><td>Twice a week. / On Fridays.</td></tr>' +
      '<tr><td>Who do you play with?</td><td>I play with my team / my friends.</td></tr></table>' },
    { t: 'Palabras que se escriben distinto de como suenan', h: '<table><tr><th>Se escribe</th><th>Suena</th></tr><tr><td><b>happy</b></td><td>“japi”</td></tr><tr><td><b>potatoes</b></td><td>“poteitous”</td></tr><tr><td><b>favourite</b></td><td>“féivorit”</td></tr><tr><td><b>twice</b></td><td>“tuáis”</td></tr><tr><td><b>Seville</b></td><td>“seví”</td></tr><tr><td><b>surfing</b></td><td>“sérfin”</td></tr><tr><td><b>caving</b></td><td>“kéivin”</td></tr></table>' },
    { t: 'Deportes de aventura: go + -ing', h: '<p>go caving 🕳️ · go kayaking 🛶 · go rock climbing 🧗 · go scuba diving 🤿 · go snowboarding 🏂 · go surfing 🏄</p><p>Pero con deportes de pelota: <b>play</b> rugby, <b>play</b> tennis, <b>play</b> football.</p>' }
  ],
  chuleta: [
    'My name is… · I’m ten years old · I live in Mairena.',
    'My hobbies are… · My favourite subject is PE · My favourite sport is rugby.',
    'I like to eat… but I don’t like to eat…',
    'Have you got a pet? → Yes, I have. / No, I haven’t.',
    'once a week · twice a week · on Fridays.',
    'go caving / kayaking / rock climbing / scuba diving / snowboarding / surfing · play rugby / tennis.',
    'Bien escrito: <b>happy, potatoes, favourite, twice</b>.'
  ],
  fichas: [
    ['How old are you?', 'I’m ten years old.'],
    ['Where do you live?', 'I live in Mairena.'],
    ['What are your hobbies?', 'My hobbies are BMX and rugby.'],
    ['Have you got a pet?', 'Yes, I have. / No, I haven’t.'],
    ['How are you today?', 'I’m happy. 😀'],
    ['twice a week', 'dos veces a la semana'],
    ['go scuba diving', 'hacer submarinismo 🤿'],
    ['go caving', 'explorar cuevas 🕳️']
  ],
  preguntas: [
    { p: 'How old are you?', o: ['I’m ten years old.', 'I have ten years.', 'I’m ten year.'], c: 0, e: 'En inglés la edad va con to be: I’m ten years old.' },
    { p: 'Where do you live?', o: ['I live in Mairena.', 'I live on Mairena.', 'I living Mairena.'], c: 0, e: 'Ciudades → in.' },
    { p: 'Have you got a pet? (sí)', o: ['Yes, I have.', 'Yes, I’ve got.', 'Yes, I got.'], c: 0, e: 'Respuesta corta: Yes, I have.' },
    { p: 'Escribe en inglés: <b>contento</b>', r: ['happy'], e: 'happy (dos p y acaba en -y).' },
    { p: 'Escribe en inglés: <b>patatas</b>', r: ['potatoes'], e: 'potatoes.' },
    { p: 'Escribe en inglés: <b>favorito</b>', r: ['favourite', 'favorite'], e: 'favourite.' },
    { p: 'Escribe en inglés: <b>dos veces a la semana</b>', r: ['twice a week'], e: 'twice a week.' },
    { p: 'Traduce: <b>Mi deporte favorito es el rugby.</b>', r: ['my favourite sport is rugby', 'my favorite sport is rugby'], e: 'My favourite sport is rugby.' },
    { p: 'Traduce: <b>Tengo diez años.</b>', r: ['i’m ten years old', "i'm ten years old", 'i am ten years old', "i'm ten", 'i am ten'], e: 'I’m ten years old.' },
    { p: 'I ___ rugby twice a week.', o: ['play', 'go', 'goes'], c: 0, e: 'Deportes de pelota → play.' },
    { p: 'I go ___ in the sea 🏄', o: ['surfing', 'surf', 'to surf'], c: 0, e: 'go + -ing: go surfing.' },
    { p: '🧗 = go ___', o: ['rock climbing', 'climbing', 'caving'], c: 0, e: 'go rock climbing.' },
    { p: '“Once a week” significa “dos veces a la semana”.', vf: false, e: 'Once = una vez. Twice = dos veces.' }
  ]
});
