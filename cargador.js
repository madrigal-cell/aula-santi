// ===== Cargador común =====
// Lo usan las aulas de otros alumnos (p. ej. aula-mario): cargan todo desde aquí,
// así cuando se actualiza el aula de Santi se actualizan todas a la vez.
// Uso: <script>window.AULA_ALUMNO = 'Mario';</script>
//      <script src="https://madrigal-cell.github.io/aula-santi/cargador.js"></script>
(function () {
  var V = '4';
  var base = document.currentScript.src.replace(/cargador\.js.*$/, '');
  document.write('<link rel="stylesheet" href="' + base + 'styles.css?v=' + V + '">');
  ['config.js', 'contenido/lengua.js', 'contenido/mates.js', 'contenido/medio.js', 'contenido/ingles.js',
   'contenido/frances.js', 'deberes.js', 'app.js'].forEach(function (f) {
    document.write('<script src="' + base + f + '?v=' + V + '"><\/script>');
  });
})();
