// ===== Aula de Santi · configuración general =====
// Este archivo define las asignaturas y la función para añadir temas.
// Los temas viven en /contenido/<asignatura>.js y los deberes y exámenes en deberes.js

window.AULA = {
  alumno: 'Santi',
  curso: '5º de Primaria',
  actualizado: '2026-10-18',
  englishFox: 'https://madrigal-cell.github.io/english-fox/',
  materias: [
    { id: 'lengua',  nombre: 'Lengua',                 icono: '📖', color: '#e4572e', claro: '#fde4dc' },
    { id: 'mates',   nombre: 'Matemáticas',            icono: '🔢', color: '#2f7de1', claro: '#dce9fb' },
    { id: 'medio',   nombre: 'Conocimiento del Medio', icono: '🌍', color: '#2e9e5b', claro: '#d9f2e3' },
    { id: 'ingles',  nombre: 'Inglés',                 icono: '🦊', color: '#f08a24', claro: '#fde9d3' },
    { id: 'frances', nombre: 'Francés',                icono: '🥐', color: '#8b4fd6', claro: '#ebe0fa' }
  ],
  temas: {},
  deberes: [],
  examenes: []
};

// Añade un tema a una asignatura
AULA.tema = function (materia, t) {
  t.materia = materia;
  (AULA.temas[materia] = AULA.temas[materia] || []).push(t);
};
