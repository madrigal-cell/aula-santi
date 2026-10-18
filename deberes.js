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

AULA.deberes = [];

AULA.examenes = [
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
