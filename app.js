/* ===== Aula de Santi · motor de la web ===== */
(function () {
  'use strict';
  var A = window.AULA;
  var $app = document.getElementById('app');
  var KEY = 'aulaSanti.v1';

  /* ---------- Utilidades ---------- */
  function hoyISO(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function fechaBonita(iso) {
    if (!iso) return '';
    var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  }
  function diasHasta(iso) {
    var p = iso.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    var h = new Date(); h.setHours(0, 0, 0, 0);
    return Math.round((d - h) / 86400000);
  }
  function mezclar(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function materia(id) { for (var i = 0; i < A.materias.length; i++) if (A.materias[i].id === id) return A.materias[i]; return null; }
  function todosTemas() { var r = []; A.materias.forEach(function (m) { (A.temas[m.id] || []).forEach(function (t) { r.push(t); }); }); return r; }
  function tema(id) { var t = todosTemas(); for (var i = 0; i < t.length; i++) if (t[i].id === id) return t[i]; return null; }
  function colorMateria(m) { document.documentElement.style.setProperty('--c', m ? m.color : '#f08a24'); document.documentElement.style.setProperty('--cl', m ? m.claro : '#fde9d3'); }
  function toast(msg) { var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('show'); }, 2200); }

  function normaliza(s, estricto) {
    s = String(s).replace(/[’‘`´]/g, "'").trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?¡¿]+$/g, '').replace(/^[¡¿]+/, '');
    if (/^[\d.\s,]+$/.test(s)) s = s.replace(/[.\s]/g, '');
    if (!estricto) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s;
  }

  /* ---------- Voz (francés / inglés) ---------- */
  function habla(texto, lang) {
    try {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(texto);
      u.lang = lang || 'fr-FR'; u.rate = 0.85;
      var v = speechSynthesis.getVoices().filter(function (x) { return x.lang && x.lang.indexOf(u.lang.slice(0, 2)) === 0; })[0];
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { }
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('.say');
    if (el) { e.stopPropagation(); habla(el.getAttribute('data-say') || el.textContent, el.getAttribute('data-lang') || 'fr-FR'); }
  }, true);

  /* ---------- Progreso (se guarda en este navegador) ---------- */
  var E = cargar();
  function vacio() { return { estrellas: 0, dias: {}, temas: {}, errores: {}, deberes: {}, notas: [] }; }
  function cargar() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') { var v = vacio(); for (var k in v) if (!(k in s)) s[k] = v[k]; return s; } } catch (e) { }
    return vacio();
  }
  function guardar() { try { localStorage.setItem(KEY, JSON.stringify(E)); } catch (e) { } pintaStats(); }
  function actividad(n) { var h = hoyISO(); E.dias[h] = (E.dias[h] || 0) + (n || 1); }
  function sumaEstrellas(n) { E.estrellas += n; guardar(); }
  function racha() {
    var d = new Date(), n = 0;
    if (!E.dias[hoyISO(d)]) d.setDate(d.getDate() - 1);
    while (E.dias[hoyISO(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function estTema(id) { return E.temas[id] || (E.temas[id] = { mejor: null, intentos: 0, visto: false }); }
  function estrellasDeNota(n) { return n == null ? 0 : n >= 9 ? 3 : n >= 7 ? 2 : n >= 5 ? 1 : 0; }
  function pintaEstrellas(n) { var s = ''; for (var i = 0; i < 3; i++) s += i < n ? '⭐' : '<span style="opacity:.25">⭐</span>'; return s; }
  var NIVELES = [[0, 'Lince cachorro'], [60, 'Lince explorador'], [180, 'Lince aventurero'], [400, 'Lince sabio'], [800, 'Lince maestro'], [1500, 'Lince legendario']];
  function nivel() {
    var i = 0; while (i < NIVELES.length - 1 && E.estrellas >= NIVELES[i + 1][0]) i++;
    var sig = NIVELES[i + 1];
    return { nombre: NIVELES[i][1], n: i + 1, pct: sig ? Math.round(100 * (E.estrellas - NIVELES[i][0]) / (sig[0] - NIVELES[i][0])) : 100, falta: sig ? sig[0] - E.estrellas : 0 };
  }
  function pintaStats() {
    document.getElementById('racha').textContent = racha();
    document.getElementById('estrellas').textContent = E.estrellas;
  }

  /* ---------- Mascota: Lin, el lince ---------- */
  function lince(cara) {
    var boca = cara === 'triste' ? '<path d="M44 74 q6 -6 12 0" stroke="#3a2a1a" stroke-width="3" fill="none" stroke-linecap="round"/>'
      : cara === 'wow' ? '<ellipse cx="50" cy="74" rx="5" ry="6" fill="#3a2a1a"/>'
        : '<path d="M42 70 q8 9 16 0" stroke="#3a2a1a" stroke-width="3" fill="none" stroke-linecap="round"/>';
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path d="M18 40 L22 6 L40 28 Z" fill="#e8a54b"/><path d="M82 40 L78 6 L60 28 Z" fill="#e8a54b"/>' +
      '<line x1="22" y1="6" x2="22" y2="-2" stroke="#3a2a1a" stroke-width="3" stroke-linecap="round"/><line x1="78" y1="6" x2="78" y2="-2" stroke="#3a2a1a" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M24 30 L26 16 L34 26 Z" fill="#fbe3c0"/><path d="M76 30 L74 16 L66 26 Z" fill="#fbe3c0"/>' +
      '<path d="M50 22 C24 22 12 44 14 62 C16 80 30 92 50 92 C70 92 84 80 86 62 C88 44 76 22 50 22 Z" fill="#f2b45c"/>' +
      '<path d="M14 62 L4 70 L16 70 L8 80 L22 76 Z" fill="#f2b45c"/><path d="M86 62 L96 70 L84 70 L92 80 L78 76 Z" fill="#f2b45c"/>' +
      '<path d="M30 66 C30 84 70 84 70 66 C70 58 30 58 30 66 Z" fill="#fff4e2"/>' +
      '<circle cx="62" cy="40" r="2" fill="#a86a22"/><circle cx="38" cy="40" r="2" fill="#a86a22"/><circle cx="50" cy="34" r="2" fill="#a86a22"/>' +
      '<ellipse cx="37" cy="52" rx="6" ry="7" fill="#fff"/><ellipse cx="63" cy="52" rx="6" ry="7" fill="#fff"/>' +
      '<circle cx="38" cy="53" r="4" fill="#2b2340"/><circle cx="64" cy="53" r="4" fill="#2b2340"/><circle cx="39.5" cy="51.5" r="1.3" fill="#fff"/><circle cx="65.5" cy="51.5" r="1.3" fill="#fff"/>' +
      '<path d="M46 62 L54 62 L50 66 Z" fill="#d0607a"/>' + boca + '</svg>';
  }
  document.getElementById('brandLince').innerHTML = lince();

  var ANIMOS_OK = ['¡Genial!', '¡Muy bien!', '¡Eso es!', '¡Crack!', '¡Perfecto!', '¡Bravo!', '¡Así se hace!'];
  var ANIMOS_KO = ['¡Casi! Mira la explicación.', 'No pasa nada, así se aprende.', 'Ups, fíjate bien.', 'La próxima la clavas.'];
  function alAzar(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ---------- Generadores de ejercicios (Matemáticas) ---------- */
  function miles(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  var NOMBRES_POS = ['unidades', 'decenas', 'centenas', 'unidades de millar', 'decenas de millar', 'centenas de millar', 'unidades de millón', 'decenas de millón', 'centenas de millón'];
  var VALOR_POS = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];
  A.gen = {
    valorPosicion: function () {
      var n = rnd(1000000, 99999999), s = String(n), pos = rnd(0, s.length - 1), cifra = +s[s.length - 1 - pos];
      if (cifra === 0) return A.gen.valorPosicion();
      return { p: '¿Qué <b>valor</b> tiene la cifra <b>' + cifra + '</b> que está en las <b>' + NOMBRES_POS[pos] + '</b> del número <b>' + miles(n) + '</b>?', r: [String(cifra * VALOR_POS[pos])], e: cifra + ' ' + NOMBRES_POS[pos] + ' = ' + miles(cifra * VALOR_POS[pos]) + ' unidades.' };
    },
    redondeo: function () {
      var n = rnd(100000, 9999999), tipos = [[1000, 'unidades de millar'], [10000, 'decenas de millar'], [100000, 'centenas de millar']], t = tipos[rnd(0, 2)];
      var r = Math.round(n / t[0]) * t[0];
      return { p: 'Redondea <b>' + miles(n) + '</b> a las <b>' + t[1] + '</b>.', r: [String(r)], e: 'Miramos la cifra de la derecha de las ' + t[1] + ': si es 5 o más, subimos; si es menor que 5, se queda igual. Resultado: ' + miles(r) + '.' };
    },
    comparar: function () {
      var a = rnd(1000000, 9999999), b = a + (Math.random() < .5 ? -1 : 1) * rnd(1, 90000);
      return { p: '¿Qué signo va en medio? <b>' + miles(a) + ' ☐ ' + miles(b) + '</b>', o: ['>', '<', '='], c: a > b ? 0 : 1, e: 'Comparamos cifra a cifra empezando por la izquierda. ' + miles(a) + (a > b ? ' es mayor.' : ' es menor.') };
    },
    multiplicar: function () {
      var a = rnd(120, 989), b = rnd(12, 98);
      return { p: 'Calcula: <b>' + a + ' × ' + b + '</b>', r: [String(a * b)], e: a + ' × ' + b + ' = ' + miles(a * b) + '. Truco: multiplica primero por las unidades (' + (b % 10) + '), luego por las decenas (' + Math.floor(b / 10) + ') dejando un hueco, y suma.' };
    },
    dividir: function () {
      var d = rnd(3, 9), c = rnd(105, 999), r = rnd(0, d - 1), D = d * c + r;
      return { p: 'Divide <b>' + D + ' : ' + d + '</b>. ¿Cuál es el <b>cociente</b>?', r: [String(c)], e: 'Cociente = ' + c + ' y resto = ' + r + '. Prueba: ' + d + ' × ' + c + ' + ' + r + ' = ' + D + '.' };
    },
    restoDivision: function () {
      var d = rnd(12, 45), c = rnd(11, 60), r = rnd(1, d - 1), D = d * c + r;
      return { p: 'Divide <b>' + D + ' : ' + d + '</b>. ¿Cuánto es el <b>resto</b>?', r: [String(r)], e: 'Cociente = ' + c + ', resto = ' + r + '. Recuerda: el resto siempre es menor que el divisor (' + d + ').' };
    },
    pruebaDivision: function () {
      var d = rnd(4, 9), c = rnd(20, 150), r = rnd(0, d - 1);
      return { p: 'En una división el divisor es ' + d + ', el cociente ' + c + ' y el resto ' + r + '. ¿Cuál es el <b>dividendo</b>?', r: [String(d * c + r)], e: 'Dividendo = divisor × cociente + resto = ' + d + ' × ' + c + ' + ' + r + ' = ' + (d * c + r) + '.' };
    },
    multiplo: function () {
      var b = rnd(3, 9), si = Math.random() < .5, n = si ? b * rnd(4, 15) : b * rnd(4, 15) + rnd(1, b - 1);
      return { p: '¿Es <b>' + n + '</b> múltiplo de <b>' + b + '</b>?', vf: si, e: si ? n + ' = ' + b + ' × ' + (n / b) + ', así que SÍ es múltiplo de ' + b + '.' : n + ' : ' + b + ' no es exacta (sobra ' + (n % b) + '), así que NO es múltiplo.' };
    },
    divisores: function () {
      var ns = [12, 18, 20, 24, 30, 16, 28, 36], n = ns[rnd(0, ns.length - 1)], d = [];
      for (var i = 1; i <= n; i++) if (n % i === 0) d.push(i);
      return { p: '¿Cuántos <b>divisores</b> tiene el número <b>' + n + '</b>?', r: [String(d.length)], e: 'Los divisores de ' + n + ' son: ' + d.join(', ') + ' (' + d.length + ' divisores).' };
    },
    tablaMental: function () {
      var a = rnd(2, 9) * 10 + rnd(0, 9), b = [10, 100, 1000][rnd(0, 2)];
      return { p: 'Calcula de cabeza: <b>' + a + ' × ' + miles(b) + '</b>', r: [String(a * b)], e: 'Para multiplicar por ' + miles(b) + ' añadimos ' + (String(b).length - 1) + ' ceros: ' + miles(a * b) + '.' };
    }
  };

  /* ---------- Banco de preguntas ---------- */
  function preguntasTema(t, conGeneradas) {
    var r = (t.preguntas || []).map(function (q, i) { var c = Object.assign({}, q); c.key = t.id + '#' + i; c.tema = t.id; return c; });
    if (conGeneradas && t.generar) {
      t.generar.forEach(function (g) { for (var k = 0; k < (g[1] || 2); k++) { var q = A.gen[g[0]](); q.tema = t.id; q.gen = true; r.push(q); } });
    }
    return r;
  }
  function preguntaPorKey(key) {
    var p = key.split('#'), t = tema(p[0]); if (!t || !t.preguntas || !t.preguntas[+p[1]]) return null;
    var c = Object.assign({}, t.preguntas[+p[1]]); c.key = key; c.tema = t.id; return c;
  }
  function tipo(q) { return q.o ? 'op' : ('vf' in q) ? 'vf' : 'esc'; }
  function correcta(q) { var t = tipo(q); return t === 'op' ? q.o[q.c] : t === 'vf' ? (q.vf ? 'Verdadero' : 'Falso') : q.r[0]; }

  /* ---------- Router ---------- */
  function ruta() {
    var h = location.hash.replace(/^#\/?/, ''), p = h.split('/');
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { }
    document.querySelectorAll('.bottom a').forEach(function (a) { a.classList.remove('on'); });
    var nav = { '': 'inicio', deberes: 'deberes', examenes: 'examenes', ex: 'examenes', errores: 'errores', padres: 'padres' }[p[0]];
    if (nav) { var a = document.querySelector('[data-nav="' + nav + '"]'); if (a) a.classList.add('on'); }
    colorMateria(null);
    if (!p[0]) vInicio();
    else if (p[0] === 'm') vMateria(p[1]);
    else if (p[0] === 't') vTema(p[1], p[2] || 'aprende');
    else if (p[0] === 'q') vPractica(p[1], p[2]);
    else if (p[0] === 'deberes') vDeberes();
    else if (p[0] === 'examenes') vExamenes();
    else if (p[0] === 'ex') vSimulacro(p[1]);
    else if (p[0] === 'errores') vErrores();
    else if (p[0] === 'padres') vPadres();
    else vInicio();
    window.scrollTo(0, 0);
    pintaStats();
  }
  window.addEventListener('hashchange', ruta);

  /* ---------- Vistas ---------- */
  function deberesPendientes() { return A.deberes.filter(function (d) { return !E.deberes[d.id] && (!d.para || diasHasta(d.para) >= -3); }); }
  function examenesProximos() { return A.examenes.filter(function (x) { return x.fecha && diasHasta(x.fecha) >= 0; }).sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; }); }
  function progresoMateria(id) {
    var ts = A.temas[id] || [], tot = ts.length * 3, s = 0;
    ts.forEach(function (t) { s += estrellasDeNota(estTema(t.id).mejor); });
    return { ts: ts.length, s: s, tot: tot };
  }

  function vInicio() {
    var nv = nivel(), r = racha(), pend = deberesPendientes(), exs = examenesProximos();
    var msg = r >= 3 ? '¡Llevas ' + r + ' días seguidos! No rompas la racha 🔥' : E.estrellas === 0 ? '¡Hola, ' + A.alumno + '! Soy Lin, el lince. Vamos a aprender juntos.' : '¡Hola otra vez, ' + A.alumno + '! ¿Qué estudiamos hoy?';
    var h = '<section class="card"><div class="hola"><div class="lince">' + lince() + '</div><div class="bocadillo">' + msg + '</div></div>' +
      '<div class="nivel"><div class="row" style="justify-content:space-between"><b>Nivel ' + nv.n + ' · ' + nv.nombre + '</b><span class="small muted">' + (nv.falta ? 'Faltan ' + nv.falta + ' ⭐' : '¡Nivel máximo!') + '</span></div><div class="barra"><i style="width:' + nv.pct + '%"></i></div></div></section>';

    // Lo de hoy
    var hoy = '';
    pend.slice(0, 4).forEach(function (d) { var m = materia(d.materia); hoy += '<li class="row"><span>' + m.icono + '</span><span class="grow"><b>' + esc(d.titulo) + '</b><br><span class="small muted">' + m.nombre + (d.para ? ' · para el ' + fechaBonita(d.para) : '') + '</span></span><a class="btn" style="--c:' + m.color + '" href="#/deberes">Hacer</a></li>'; });
    exs.slice(0, 3).forEach(function (x) { var m = materia(x.materia), n = diasHasta(x.fecha); hoy += '<li class="row"><span>📝</span><span class="grow"><b>Examen de ' + m.nombre + '</b><br><span class="small muted">' + (n === 0 ? '¡Es HOY!' : n === 1 ? 'Es mañana' : 'Faltan ' + n + ' días') + ' · ' + esc(x.titulo || '') + '</span></span><a class="btn" style="--c:' + m.color + '" href="#/ex/' + x.id + '">Repasar</a></li>'; });
    if (!hoy) {
      var sug = sugerencia();
      if (sug) { var ms = materia(sug.materia); hoy = '<li class="row"><span>' + ms.icono + '</span><span class="grow"><b>Te propongo repasar:</b><br>' + esc(sug.titulo) + ' <span class="small muted">(' + ms.nombre + ')</span></span><a class="btn" style="--c:' + ms.color + '" href="#/t/' + sug.id + '">Vamos</a></li>'; }
    }
    if (hoy) h += '<section class="card"><h2>Para hoy</h2><ul class="lista hoy">' + hoy + '</ul></section>';

    h += '<h2>Asignaturas</h2><div class="grid">';
    A.materias.forEach(function (m) {
      var p = progresoMateria(m.id);
      var pie = m.id === 'ingles' ? 'Con English Fox 🦊' : p.ts ? p.s + ' / ' + p.tot + ' ⭐ · ' + p.ts + ' temas' : 'Sin temas todavía';
      h += '<a class="materia" style="--c:' + m.color + ';--cl:' + m.claro + '" href="#/m/' + m.id + '"><span class="ico">' + m.icono + '</span><b>' + m.nombre + '</b><span class="prog">' + pie + '</span></a>';
    });
    h += '</div><p class="small muted" style="text-align:center;margin-top:20px">Contenidos actualizados el ' + fechaBonita(A.actualizado) + '</p>';
    $app.innerHTML = h;
  }

  function sugerencia() {
    var ts = todosTemas().filter(function (t) { return (t.preguntas || []).length; });
    if (!ts.length) return null;
    var libro = ts.filter(function (t) { return t.origen === 'libro'; });
    var pool = libro.length ? libro : ts;
    pool.sort(function (a, b) { return (estTema(a.id).mejor || 0) - (estTema(b.id).mejor || 0); });
    return pool[0];
  }

  function vMateria(id) {
    var m = materia(id); if (!m) return vInicio();
    colorMateria(m);
    var h = '<a class="back" href="#/">← Inicio</a><div class="cab-materia"><span class="ico">' + m.icono + '</span><div><h1>' + m.nombre + '</h1><span class="muted small">' + A.curso + '</span></div></div>';
    if (id === 'ingles') {
      h += '<section class="card"><div class="hola"><div class="lince" style="width:70px">' + lince('wow') + '</div><div><h2 style="margin:0">Inglés se estudia con English Fox 🦊</h2><p class="muted" style="margin:.3em 0 0">Tiene las mismas unidades que estáis dando en clase. ' + (A.inglesUnidad ? 'Ahora mismo: <b>' + esc(A.inglesUnidad) + '</b>.' : '') + '</p></div></div><p><a class="btn big" href="' + A.englishFox + '" target="_blank" rel="noopener">Abrir English Fox →</a></p></section>';
    }
    var ts = A.temas[id] || [];
    if (!ts.length && id !== 'ingles') h += '<div class="vacio"><div class="lince">' + lince() + '</div>Todavía no hay temas.<br>Cuando papá haga fotos del libro, aparecerán aquí.</div>';
    var trims = {};
    ts.forEach(function (t) { (trims[t.trimestre || 1] = trims[t.trimestre || 1] || []).push(t); });
    Object.keys(trims).sort().forEach(function (k) {
      h += '<div class="trim">' + k + 'º trimestre</div>';
      trims[k].forEach(function (t, i) {
        var e = estTema(t.id);
        h += '<a class="tema" href="#/t/' + t.id + '"><span class="num">' + (t.num || i + 1) + '</span><span class="grow"><b>' + esc(t.titulo) + '</b><br><span class="small muted">' + esc(t.resumen || '') + '</span><br>' +
          (t.origen === 'libro' ? '<span class="tag libro">📸 Del libro</span>' : '<span class="tag base">Tema base</span>') +
          (e.mejor != null ? ' <span class="small muted">· mejor nota ' + e.mejor + '</span>' : '') + '</span><span class="estr">' + pintaEstrellas(estrellasDeNota(e.mejor)) + '</span></a>';
      });
    });
    $app.innerHTML = h;
  }

  function vTema(id, tab) {
    var t = tema(id); if (!t) return vInicio();
    var m = materia(t.materia); colorMateria(m);
    var e = estTema(id);
    var tabs = [['aprende', '📚 Aprende'], ['fichas', '🃏 Fichas'], ['practica', '🎯 Practica'], ['chuleta', '📋 Chuleta']];
    var h = '<a class="back" href="#/m/' + m.id + '">← ' + m.nombre + '</a><h1>' + esc(t.titulo) + '</h1>' +
      '<div class="row small muted">' + (t.origen === 'libro' ? '<span class="tag libro">📸 Del libro' + (t.paginas ? ' · ' + esc(t.paginas) : '') + '</span>' : '<span class="tag base">Tema base</span>') + '<span>' + pintaEstrellas(estrellasDeNota(e.mejor)) + '</span></div>' +
      '<div class="tabs">' + tabs.map(function (x) { return '<button class="' + (x[0] === tab ? 'on' : '') + '" data-tab="' + x[0] + '">' + x[1] + '</button>'; }).join('') + '</div><div id="tabc"></div>';
    $app.innerHTML = h;
    $app.querySelectorAll('[data-tab]').forEach(function (b) { b.onclick = function () { location.replace('#/t/' + id + '/' + b.getAttribute('data-tab')); }; });
    var c = document.getElementById('tabc');

    if (tab === 'aprende') {
      if (!e.visto) { e.visto = true; actividad(); sumaEstrellas(2); toast('+2 ⭐ por leer el tema'); }
      c.innerHTML = '<section class="card aprende">' + (t.aprende || []).map(function (b) { return '<div class="bloque"><h3>' + b.t + '</h3>' + b.h + '</div>'; }).join('') + '</section>' +
        '<a class="btn big" href="#/t/' + id + '/fichas">Ahora, las fichas →</a>';
    } else if (tab === 'fichas') {
      fichas(c, t);
    } else if (tab === 'chuleta') {
      c.innerHTML = '<section class="card"><h2>📋 Lo más importante</h2><ul class="chuleta">' + (t.chuleta || []).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></section>' +
        '<a class="btn big" href="#/q/' + id + '/examen">📝 Hacer simulacro de examen</a>';
    } else {
      var n = preguntasTema(t, true).length;
      c.innerHTML = '<section class="card" style="text-align:center"><div class="lince" style="width:100px;margin:0 auto">' + lince('wow') + '</div><h2>¿Preparado?</h2><p>Te haré <b>' + Math.min(10, n) + ' preguntas</b>. Si fallas una, te la vuelvo a preguntar al final.</p>' +
        '<div class="row" style="justify-content:center"><a class="btn" href="#/q/' + id + '">🎯 Practicar</a><a class="btn sec" href="#/q/' + id + '/examen">📝 Simulacro de examen</a></div>' +
        (e.mejor != null ? '<p class="muted small">Tu mejor nota: <b>' + e.mejor + '</b> · intentos: ' + e.intentos + '</p>' : '') + '</section>';
    }
  }

  function fichas(c, t) {
    var lista = t.fichas || [], i = 0;
    if (!lista.length) { c.innerHTML = '<p class="vacio">Este tema no tiene fichas.</p>'; return; }
    function pinta() {
      var f = lista[i];
      c.innerHTML = '<p class="contador">Ficha ' + (i + 1) + ' de ' + lista.length + '</p><div class="ficha-wrap"><div class="ficha" id="fc"><div class="fr">' + f[0] + (t.voz ? '<button class="btn sec" style="margin-top:12px;font-size:.9rem;padding:8px 14px" id="oir">🔊 Escuchar</button>' : '') + '<span class="hint">Toca para dar la vuelta</span></div><div class="bk">' + f[1] + '</div></div></div>' +
        '<div class="row" style="justify-content:space-between"><button class="btn sec" id="ant">←</button><button class="btn sec" id="mez">🔀 Mezclar</button><button class="btn" id="sig">' + (i === lista.length - 1 ? '¡A practicar!' : 'Siguiente →') + '</button></div>';
      var fc = document.getElementById('fc');
      fc.onclick = function (ev) { if (ev.target.id === 'oir') return; fc.classList.toggle('flip'); };
      if (t.voz) document.getElementById('oir').onclick = function (ev) { ev.stopPropagation(); var tmp = document.createElement('div'); tmp.innerHTML = f[0]; habla(tmp.textContent, t.voz); };
      document.getElementById('ant').onclick = function () { if (i > 0) { i--; pinta(); } };
      document.getElementById('mez').onclick = function () { lista = mezclar(lista); i = 0; pinta(); toast('Fichas mezcladas'); };
      document.getElementById('sig').onclick = function () { if (i < lista.length - 1) { i++; pinta(); } else { actividad(); sumaEstrellas(1); location.hash = '#/t/' + t.id + '/practica'; } };
    }
    pinta();
  }

  /* ---------- Quiz (práctica, simulacro, errores) ---------- */
  function quiz(cfg) {
    // cfg: {items, modo:'practica'|'examen'|'errores', titulo, volver, alTerminar(nota, fallos)}
    var items = cfg.items.slice(), i = 0, aciertos = 0, primeros = items.length, fallos = [], repetidas = {};
    var examen = cfg.modo === 'examen';
    function pinta() {
      if (i >= items.length) return fin();
      var q = items[i], tp = tipo(q), pct = Math.round(100 * Math.min(i, primeros) / primeros);
      var h = '<a class="back" href="' + cfg.volver + '">← Salir</a><div class="qtop"><div class="barra"><i style="width:' + pct + '%"></i></div><b class="small">' + Math.min(i + 1, primeros) + '/' + primeros + '</b></div>' +
        '<section class="card pop">' + (q.repe ? '<span class="tag">🔁 Otra vez</span>' : '') + (cfg.mostrarTema ? ' <span class="small muted">' + esc((tema(q.tema) || {}).titulo || '') + '</span>' : '') +
        '<div class="pregunta">' + q.p + '</div>';
      if (tp === 'op') {
        var orden = mezclar(q.o.map(function (_, k) { return k; }));
        h += '<div class="opciones">' + orden.map(function (k) { return '<button class="op" data-k="' + k + '">' + q.o[k] + '</button>'; }).join('') + '</div>';
      } else if (tp === 'vf') {
        h += '<div class="vf"><button class="op" data-v="1">✅ Verdadero</button><button class="op" data-v="0">❌ Falso</button></div>';
      } else {
        h += '<form id="fr"><input class="resp" id="resp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe tu respuesta"><p><button class="btn big">Comprobar</button></p></form>';
      }
      h += '<div id="fb"></div></section>';
      $app.innerHTML = h;
      $app.querySelectorAll('[data-k]').forEach(function (b) { b.onclick = function () { responde(+b.getAttribute('data-k') === q.c, b); }; });
      $app.querySelectorAll('[data-v]').forEach(function (b) { b.onclick = function () { responde((b.getAttribute('data-v') === '1') === q.vf, b); }; });
      var fr = document.getElementById('fr');
      if (fr) {
        var inp = document.getElementById('resp'); setTimeout(function () { inp.focus(); }, 50);
        fr.onsubmit = function (ev) { ev.preventDefault(); if (!inp.value.trim()) return; var v = normaliza(inp.value, q.estricto); responde(q.r.some(function (x) { return normaliza(x, q.estricto) === v; }), null, inp.value); };
      }
    }
    function responde(ok, boton, texto) {
      var q = items[i];
      $app.querySelectorAll('.op').forEach(function (b) { b.disabled = true; if (q.o && +b.getAttribute('data-k') === q.c) b.classList.add('ok'); if ('vf' in q && !q.o && (b.getAttribute('data-v') === '1') === q.vf) b.classList.add('ok'); });
      if (boton && !ok) boton.classList.add('ko');
      var inp = document.getElementById('resp'); if (inp) inp.disabled = true;
      if (!q.repe) {
        if (ok) aciertos++; else fallos.push({ q: q, dada: texto });
        if (q.key) { if (ok) { if (E.errores[q.key]) { E.errores[q.key].n--; if (E.errores[q.key].n <= 0) delete E.errores[q.key]; } } else { E.errores[q.key] = { n: ((E.errores[q.key] || {}).n || 0) + 1, f: hoyISO() }; } }
      } else if (ok && q.key && E.errores[q.key]) { /* se recupera en la repetición */ }
      actividad();
      if (ok) E.estrellas += 1;
      guardar();
      if (!examen && !ok && !q.repe && !repetidas[i]) { repetidas[i] = 1; var c = Object.assign({}, q); c.repe = true; items.push(c); }
      var fb = document.getElementById('fb');
      if (examen) { siguiente(); return; }
      fb.innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'ko') + ' pop"><b>' + (ok ? alAzar(ANIMOS_OK) + ' +1 ⭐' : alAzar(ANIMOS_KO)) + '</b>' + (!ok ? '<br>Respuesta correcta: <b>' + correcta(q) + '</b>' : '') + (q.e ? '<br><span class="small">' + q.e + '</span>' : '') + '</div><p><button class="btn big ' + (ok ? 'ok' : '') + '" id="sigq">Continuar →</button></p>';
      var b = document.getElementById('sigq'); b.focus(); b.onclick = siguiente;
    }
    function siguiente() { i++; pinta(); }
    function fin() {
      var nota = Math.round(100 * aciertos / primeros) / 10, st = estrellasDeNota(nota), bonus = st * 2;
      E.estrellas += bonus; guardar();
      if (cfg.alTerminar) cfg.alTerminar(nota, fallos);
      var cara = nota >= 7 ? 'wow' : nota >= 5 ? '' : 'triste';
      var frase = nota >= 9 ? '¡Eres un crack! Te lo sabes genial.' : nota >= 7 ? '¡Muy bien! Repasa los fallos y llegas al 10.' : nota >= 5 ? '¡Aprobado! Vuelve a mirar el tema y lo bordas.' : 'Hoy ha costado. Lee otra vez el tema y las fichas, y vuelve a intentarlo.';
      var h = '<section class="card resultado pop"><div class="lince" style="width:110px;margin:0 auto">' + lince(cara) + '</div><div class="small muted">' + esc(cfg.titulo || '') + '</div><div class="nota">' + String(nota).replace('.', ',') + '</div><div class="stars">' + pintaEstrellas(st) + '</div><p><b>' + frase + '</b></p><p class="muted">' + aciertos + ' de ' + primeros + ' bien' + (bonus ? ' · +' + bonus + ' ⭐ de premio' : '') + '</p></section>';
      if (fallos.length) {
        h += '<section class="card"><h2>Repasa lo que fallaste</h2><ul class="repaso">' + fallos.map(function (f) { return '<li>' + f.q.p + '<br><span style="color:var(--ok)">✔ <b>' + correcta(f.q) + '</b></span>' + (f.dada ? ' <span class="small muted">(pusiste: ' + esc(f.dada) + ')</span>' : '') + (f.q.e ? '<br><span class="small muted">' + f.q.e + '</span>' : '') + '</li>'; }).join('') + '</ul></section>';
      }
      h += '<div class="row"><button class="btn" id="otra">🔄 Otra vez</button><a class="btn sec" href="' + cfg.volver + '">Volver</a></div>';
      $app.innerHTML = h; window.scrollTo(0, 0);
      document.getElementById('otra').onclick = function () { ruta(); };
    }
    pinta();
  }

  function vPractica(id, modo) {
    var t = tema(id); if (!t) return vInicio();
    colorMateria(materia(t.materia));
    var examen = modo === 'examen', pool = mezclar(preguntasTema(t, true)), n = examen ? Math.min(15, pool.length) : Math.min(10, pool.length);
    if (!n) { $app.innerHTML = '<p class="vacio">Este tema aún no tiene preguntas.</p>'; return; }
    quiz({
      items: pool.slice(0, n), modo: examen ? 'examen' : 'practica', titulo: (examen ? 'Simulacro · ' : '') + t.titulo, volver: '#/t/' + id + '/practica',
      alTerminar: function (nota) { var e = estTema(id); e.intentos++; if (e.mejor == null || nota > e.mejor) e.mejor = nota; E.notas.push({ f: hoyISO(), tema: id, nota: nota, ex: examen }); if (E.notas.length > 200) E.notas.shift(); guardar(); }
    });
  }

  function vErrores() {
    var keys = Object.keys(E.errores), qs = keys.map(preguntaPorKey).filter(Boolean);
    if (!qs.length) { $app.innerHTML = '<h1>🔁 Repasar errores</h1><div class="vacio card"><div class="lince">' + lince('wow') + '</div><b>¡No tienes errores pendientes!</b><br>Cuando falles una pregunta, aparecerá aquí para repasarla.</div>'; return; }
    quiz({ items: mezclar(qs).slice(0, 12), modo: 'errores', titulo: 'Repaso de errores', volver: '#/', mostrarTema: true });
  }

  function vSimulacro(exid) {
    var x = A.examenes.filter(function (e) { return e.id === exid; })[0]; if (!x) return vExamenes();
    var m = materia(x.materia); colorMateria(m);
    var pool = [];
    (x.temas || []).forEach(function (tid) { var t = tema(tid); if (t) pool = pool.concat(preguntasTema(t, true)); });
    if (!pool.length) { $app.innerHTML = '<a class="back" href="#/examenes">← Exámenes</a><p class="vacio">Este examen todavía no tiene preguntas.</p>'; return; }
    quiz({ items: mezclar(pool).slice(0, 15), modo: 'examen', titulo: 'Simulacro · ' + m.nombre + (x.titulo ? ' · ' + x.titulo : ''), volver: '#/examenes', mostrarTema: true,
      alTerminar: function (nota) { E.notas.push({ f: hoyISO(), ex: exid, nota: nota }); guardar(); } });
  }

  function vExamenes() {
    var h = '<h1>📝 Exámenes</h1>';
    var prox = examenesProximos(), pas = A.examenes.filter(function (x) { return x.fecha && diasHasta(x.fecha) < 0; });
    if (!A.examenes.length) h += '<div class="vacio card"><div class="lince">' + lince() + '</div>No hay exámenes apuntados.<br>Cuando sepas la fecha de uno, díselo a papá y aparecerá aquí con su simulacro.</div>';
    function fila(x) {
      var m = materia(x.materia), n = diasHasta(x.fecha), notas = E.notas.filter(function (z) { return z.ex === x.id; }), mejor = notas.length ? Math.max.apply(null, notas.map(function (z) { return z.nota; })) : null;
      var temas = (x.temas || []).map(function (t) { return (tema(t) || {}).titulo; }).filter(Boolean).join(' · ');
      return '<section class="card deber" style="--c:' + m.color + '"><div class="row" style="justify-content:space-between"><span class="tag" style="--c:' + m.color + ';--cl:' + m.claro + '">' + m.icono + ' ' + m.nombre + '</span><b>' + (n > 1 ? 'Faltan ' + n + ' días' : n === 1 ? 'Mañana' : n === 0 ? '¡HOY!' : 'Ya pasó') + '</b></div><h2 style="margin-top:8px">' + esc(x.titulo || 'Examen') + '</h2><p class="muted small">' + fechaBonita(x.fecha) + (temas ? '<br>Entra: ' + esc(temas) : '') + '</p>' +
        (x.notas ? '<p class="small">' + x.notas + '</p>' : '') +
        '<div class="row"><a class="btn" style="--c:' + m.color + '" href="#/ex/' + x.id + '">📝 Simulacro</a>' + (x.temas || []).map(function (t) { var tt = tema(t); return tt ? '<a class="btn sec" href="#/t/' + t + '/chuleta">📋 ' + esc(tt.titulo) + '</a>' : ''; }).join('') + '</div>' +
        (mejor != null ? '<p class="small muted">Mejor nota en el simulacro: <b>' + mejor + '</b></p>' : '') + (x.nota != null ? '<p><b>Nota del examen real: ' + x.nota + '</b></p>' : '') + '</section>';
    }
    prox.forEach(function (x) { h += fila(x); });
    if (pas.length) { h += '<div class="trim">Exámenes pasados</div>'; pas.reverse().forEach(function (x) { h += fila(x); }); }
    $app.innerHTML = h;
  }

  function vDeberes() {
    var h = '<h1>✏️ Deberes</h1>';
    if (!A.deberes.length) { $app.innerHTML = h + '<div class="vacio card"><div class="lince">' + lince() + '</div>No hay deberes apuntados.<br>Papá hace una foto de la tarea y aquí aparecerá con pistas para ayudarte.</div>'; return; }
    var lista = A.deberes.slice().sort(function (a, b) { return (E.deberes[a.id] ? 1 : 0) - (E.deberes[b.id] ? 1 : 0) || ((a.para || '') < (b.para || '') ? -1 : 1); });
    lista.forEach(function (d) {
      var m = materia(d.materia), hecho = !!E.deberes[d.id];
      h += '<section class="card deber ' + (hecho ? 'hecho' : '') + '" style="--c:' + m.color + ';--cl:' + m.claro + '" id="d-' + d.id + '"><div class="row" style="justify-content:space-between"><span class="tag">' + m.icono + ' ' + m.nombre + '</span>' + (d.para ? '<span class="small muted">Para el ' + fechaBonita(d.para) + '</span>' : '') + '</div>' +
        '<h2 style="margin-top:8px">' + (hecho ? '✅ ' : '') + esc(d.titulo) + '</h2>' + (d.enunciado ? '<div>' + d.enunciado + '</div>' : '') +
        (d.explica ? '<details><summary><b>📚 Antes de empezar, recuerda…</b></summary><div class="aprende">' + d.explica + '</div></details>' : '') +
        '<div class="pistas"></div>' +
        '<div class="row" style="margin-top:10px">' + ((d.pistas || []).length ? '<button class="btn sec" data-pista="' + d.id + '">💡 Dame una pista</button>' : '') +
        (d.solucion ? '<button class="btn sec" data-sol="' + d.id + '">👀 Comprobar mis respuestas</button>' : '') +
        (d.practica ? '<button class="btn sec" data-prac="' + d.id + '">🎯 Practicar parecidos</button>' : '') +
        '<button class="btn ' + (hecho ? 'sec' : 'ok') + '" data-hecho="' + d.id + '">' + (hecho ? 'Marcar como pendiente' : '✅ ¡Lo he hecho!') + '</button></div><div class="sol"></div></section>';
    });
    $app.innerHTML = h;
    var vistas = {};
    $app.querySelectorAll('[data-pista]').forEach(function (b) {
      b.onclick = function () {
        var d = A.deberes.filter(function (x) { return x.id === b.getAttribute('data-pista'); })[0], n = vistas[d.id] = (vistas[d.id] || 0);
        if (n >= d.pistas.length) return;
        var box = document.querySelector('#d-' + d.id + ' .pistas'); box.insertAdjacentHTML('beforeend', '<div class="pista pop">💡 Pista ' + (n + 1) + ': ' + d.pistas[n] + '</div>');
        vistas[d.id]++; if (vistas[d.id] >= d.pistas.length) { b.disabled = true; b.textContent = 'No hay más pistas'; }
      };
    });
    $app.querySelectorAll('[data-sol]').forEach(function (b) {
      b.onclick = function () {
        var d = A.deberes.filter(function (x) { return x.id === b.getAttribute('data-sol'); })[0], box = document.querySelector('#d-' + d.id + ' .sol');
        if (b.getAttribute('data-ok')) { box.innerHTML = '<div class="solucion pop"><b>Soluciones:</b><br>' + d.solucion + '</div>'; b.remove(); return; }
        box.innerHTML = '<div class="pista">✋ Primero hazlo tú en el cuaderno. ¿Ya lo has terminado?</div>'; b.textContent = 'Sí, ya lo he hecho. Ver soluciones'; b.setAttribute('data-ok', 1);
      };
    });
    $app.querySelectorAll('[data-prac]').forEach(function (b) {
      b.onclick = function () {
        var d = A.deberes.filter(function (x) { return x.id === b.getAttribute('data-prac'); })[0]; colorMateria(materia(d.materia));
        var qs = d.practica.map(function (q) { return Object.assign({}, q); });
        if (d.generar) d.generar.forEach(function (g) { for (var k = 0; k < (g[1] || 2); k++) qs.push(A.gen[g[0]]()); });
        quiz({ items: mezclar(qs), modo: 'practica', titulo: d.titulo, volver: '#/deberes' });
      };
    });
    $app.querySelectorAll('[data-hecho]').forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute('data-hecho');
        if (E.deberes[id]) { delete E.deberes[id]; guardar(); } else { E.deberes[id] = hoyISO(); actividad(); E.estrellas += 5; guardar(); toast('¡Bien hecho! +5 ⭐'); }
        vDeberes();
      };
    });
  }

  function vPadres() {
    var h = '<h1>👨‍👦 Zona de papá</h1>';
    // actividad 14 días
    var d = new Date(), dias = [];
    for (var k = 13; k >= 0; k--) { var x = new Date(d); x.setDate(d.getDate() - k); dias.push([hoyISO(x), E.dias[hoyISO(x)] || 0]); }
    var mx = Math.max.apply(null, dias.map(function (z) { return z[1]; }).concat([1]));
    h += '<section class="card"><h2>Últimos 14 días</h2><div style="display:flex;align-items:flex-end;gap:4px;height:90px">' + dias.map(function (z) { return '<div title="' + z[0] + ': ' + z[1] + ' actividades" style="flex:1;background:' + (z[1] ? '#f08a24' : '#efe6da') + ';height:' + Math.max(6, Math.round(84 * z[1] / mx)) + 'px;border-radius:6px 6px 2px 2px"></div>'; }).join('') + '</div><p class="small muted">Racha actual: <b>' + racha() + '</b> días · Estrellas: <b>' + E.estrellas + '</b> · Días con actividad: <b>' + Object.keys(E.dias).length + '</b></p></section>';

    h += '<section class="card"><h2>Notas por tema</h2><table class="prog"><tr><th>Tema</th><th>Mejor</th><th>Intentos</th></tr>';
    A.materias.forEach(function (m) { (A.temas[m.id] || []).forEach(function (t) { var e = estTema(t.id); h += '<tr><td>' + m.icono + ' ' + esc(t.titulo) + '</td><td><b>' + (e.mejor == null ? '—' : e.mejor) + '</b></td><td>' + e.intentos + '</td></tr>'; }); });
    h += '</table></section>';

    var errs = Object.keys(E.errores).map(function (k) { return [preguntaPorKey(k), E.errores[k].n]; }).filter(function (z) { return z[0]; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 8);
    h += '<section class="card"><h2>Lo que más le cuesta</h2>' + (errs.length ? '<ul>' + errs.map(function (z) { return '<li>' + z[0].p + ' <span class="small muted">(' + (tema(z[0].tema) || {}).titulo + ' · ' + z[1] + ' fallo' + (z[1] > 1 ? 's' : '') + ')</span></li>'; }).join('') + '</ul>' : '<p class="muted">Nada pendiente. ¡Bien!</p>') + '</section>';

    var ult = E.notas.slice(-8).reverse();
    if (ult.length) h += '<section class="card"><h2>Últimas notas</h2><ul class="lista">' + ult.map(function (n) { var t = tema(n.tema), x = A.examenes.filter(function (e) { return e.id === n.ex; })[0]; return '<li><span class="grow">' + (t ? esc(t.titulo) : x ? 'Simulacro · ' + esc(x.titulo || materia(x.materia).nombre) : '—') + (n.ex === true ? ' (simulacro)' : '') + '<br><span class="small muted">' + n.f + '</span></span><b>' + n.nota + '</b></li>'; }).join('') + '</ul></section>';

    h += '<section class="card"><h2>Pasar el progreso a otro dispositivo</h2><p class="small muted">El progreso se guarda en este navegador. Para llevarlo a otra tablet u ordenador: copia el código, envíalo por WhatsApp y pégalo allí en “Juntar progreso”.</p>' +
      '<div class="row"><button class="btn sec" id="copiar">📋 Copiar código</button></div><textarea id="cod" placeholder="Pega aquí el código del otro dispositivo"></textarea><div class="row"><button class="btn" id="juntar">🔗 Juntar progreso</button></div></section>';
    h += '<section class="card"><h2>Borrar progreso</h2><p class="small muted">Deja la web como nueva en este dispositivo.</p><button class="btn sec" id="reset">🗑️ Borrar todo</button></section>';
    h += '<p class="small muted" style="text-align:center">Contenidos actualizados el ' + fechaBonita(A.actualizado) + '</p>';
    $app.innerHTML = h;

    document.getElementById('copiar').onclick = function () {
      var code = btoa(unescape(encodeURIComponent(JSON.stringify(E))));
      var ta = document.getElementById('cod'); ta.value = code; ta.select();
      try { navigator.clipboard.writeText(code).then(function () { toast('Código copiado'); }, function () { toast('Selecciona y copia el texto'); }); } catch (e) { toast('Selecciona y copia el texto'); }
    };
    document.getElementById('juntar').onclick = function () {
      try {
        var o = JSON.parse(decodeURIComponent(escape(atob(document.getElementById('cod').value.trim()))));
        E.estrellas = Math.max(E.estrellas, o.estrellas || 0);
        for (var k in o.dias || {}) E.dias[k] = Math.max(E.dias[k] || 0, o.dias[k]);
        for (var t in o.temas || {}) { var a = estTema(t), b = o.temas[t]; a.visto = a.visto || b.visto; a.intentos = Math.max(a.intentos, b.intentos || 0); if (b.mejor != null && (a.mejor == null || b.mejor > a.mejor)) a.mejor = b.mejor; }
        for (var dd in o.deberes || {}) E.deberes[dd] = o.deberes[dd];
        for (var er in o.errores || {}) if (!E.errores[er]) E.errores[er] = o.errores[er];
        E.notas = E.notas.concat(o.notas || []).slice(-200);
        guardar(); toast('¡Progreso juntado!'); vPadres();
      } catch (e) { toast('Ese código no es válido'); }
    };
    var rs = document.getElementById('reset');
    rs.onclick = function () {
      if (!rs.getAttribute('data-c')) { rs.setAttribute('data-c', 1); rs.textContent = '⚠️ Pulsa otra vez para confirmar'; return; }
      E = vacio(); guardar(); toast('Progreso borrado'); vPadres();
    };
  }

  ruta();
})();
