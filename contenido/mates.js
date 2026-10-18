// ===== MATEMÁTICAS · 5º Primaria =====
// "generar" añade ejercicios nuevos cada vez (con números al azar): [nombreGenerador, cuántos]
// Examen 23/10: propiedades conmutativa, asociativa y distributiva.

AULA.tema('mates', {
  id: 'mates-propiedades', num: 1, trimestre: 1, origen: 'base',
  titulo: 'Propiedades: conmutativa, asociativa y distributiva',
  resumen: 'Las propiedades de la suma y la multiplicación y cómo usarlas para calcular',
  aprende: [
    { t: 'Propiedad conmutativa', h: '<p><b>El orden no cambia el resultado.</b></p><table><tr><th>Suma</th><th>Multiplicación</th></tr><tr><td>a + b = b + a<br><b>7 + 5 = 5 + 7</b> = 12</td><td>a × b = b × a<br><b>6 × 4 = 4 × 6</b> = 24</td></tr></table>' +
      '<div class="ojo">Truco: con<b>MUTA</b>tiva → <b>mu</b>damos de sitio los números (se “mudan”).<br>¡Ojo! La resta y la división <b>NO</b> la cumplen: 8 − 3 ≠ 3 − 8.</div>' },
    { t: 'Propiedad asociativa', h: '<p><b>Podemos agrupar los números como queramos</b> y el resultado es el mismo. Los paréntesis se hacen primero.</p><table><tr><th>Suma</th><th>Multiplicación</th></tr><tr><td>(a + b) + c = a + (b + c)<br>(3 + 7) + 5 = 3 + (7 + 5)<br>10 + 5 = 3 + 12 = <b>15</b></td><td>(a × b) × c = a × (b × c)<br>(2 × 5) × 7 = 2 × (5 × 7)<br>10 × 7 = 2 × 35 = <b>70</b></td></tr></table>' +
      '<div class="ojo">Truco: a<b>SOCIA</b>tiva → los números se hacen “socios” de otro (cambian de pareja), pero no cambian de sitio.</div>' +
      '<div class="ej">Sirve para calcular de cabeza: 25 × 4 × 9 = (25 × 4) × 9 = 100 × 9 = <b>900</b></div>' },
    { t: 'Propiedad distributiva', h: '<p>Multiplicar un número por una <b>suma</b> (o una resta) es lo mismo que multiplicarlo <b>por cada número</b> y después sumar (o restar) los resultados.</p><table><tr><th>Con suma</th><th>Con resta</th></tr><tr><td>a × (b + c) = a × b + a × c<br>4 × (10 + 3) = 4 × 10 + 4 × 3<br>4 × 13 = 40 + 12 = <b>52</b></td><td>a × (b − c) = a × b − a × c<br>5 × (10 − 2) = 5 × 10 − 5 × 2<br>5 × 8 = 50 − 10 = <b>40</b></td></tr></table>' +
      '<div class="ojo">Truco: dis<b>TRIBU</b>tiva → el número de fuera se <b>reparte</b> (se distribuye) y multiplica a cada uno de los de dentro del paréntesis.</div>' +
      '<div class="ej">Para calcular de cabeza 7 × 12: 7 × (10 + 2) = 70 + 14 = <b>84</b></div>' },
    { t: '¿Cómo reconozco cada una?', h: '<ul><li>Los <b>mismos números cambian de orden</b> y no hay paréntesis → <b>conmutativa</b> (8 × 3 = 3 × 8).</li><li>Los números están en el <b>mismo orden</b> pero <b>cambia el paréntesis</b> → <b>asociativa</b> ((2 + 4) + 6 = 2 + (4 + 6)).</li><li>Un número <b>multiplica a un paréntesis con + o −</b> y se reparte → <b>distributiva</b> (3 × (5 + 2) = 3 × 5 + 3 × 2).</li></ul>' }
  ],
  chuleta: [
    '<b>Conmutativa</b>: el orden no cambia el resultado. a + b = b + a · a × b = b × a.',
    '<b>Asociativa</b>: agrupo como quiero. (a + b) + c = a + (b + c) · (a × b) × c = a × (b × c).',
    '<b>Distributiva</b>: a × (b + c) = a × b + a × c · a × (b − c) = a × b − a × c.',
    'Conmutativa y asociativa: en la <b>suma</b> y en la <b>multiplicación</b>. Distributiva: multiplicación respecto de la suma o la resta.',
    'La resta y la división NO cumplen la conmutativa.'
  ],
  fichas: [
    ['Propiedad <b>conmutativa</b>', 'El orden de los números no cambia el resultado<br><small>6 × 4 = 4 × 6</small>'],
    ['Propiedad <b>asociativa</b>', 'Puedo agrupar los números como quiera<br><small>(2 × 5) × 7 = 2 × (5 × 7)</small>'],
    ['Propiedad <b>distributiva</b>', 'a × (b + c) = a × b + a × c<br><small>4 × (10 + 3) = 40 + 12</small>'],
    ['9 + 4 = 4 + 9', 'Conmutativa'],
    ['(3 + 2) + 8 = 3 + (2 + 8)', 'Asociativa'],
    ['5 × (6 + 1) = 5 × 6 + 5 × 1', 'Distributiva'],
    ['¿La resta cumple la conmutativa?', 'No: 8 − 3 ≠ 3 − 8'],
    ['Calcula fácil 25 × 4 × 6', '(25 × 4) × 6 = 100 × 6 = 600 (asociativa)']
  ],
  preguntas: [
    { p: '¿Qué propiedad es? <b>8 × 3 = 3 × 8</b>', o: ['Conmutativa', 'Asociativa', 'Distributiva'], c: 0, e: 'Cambia el orden de los números → conmutativa.' },
    { p: '¿Qué propiedad es? <b>(4 + 6) + 9 = 4 + (6 + 9)</b>', o: ['Conmutativa', 'Asociativa', 'Distributiva'], c: 1, e: 'Mismo orden, cambia el paréntesis → asociativa.' },
    { p: '¿Qué propiedad es? <b>3 × (5 + 2) = 3 × 5 + 3 × 2</b>', o: ['Conmutativa', 'Asociativa', 'Distributiva'], c: 2, e: 'El 3 se reparte entre los de dentro → distributiva.' },
    { p: '¿Qué propiedad es? <b>15 + 27 = 27 + 15</b>', o: ['Conmutativa', 'Asociativa', 'Distributiva'], c: 0, e: 'Conmutativa de la suma.' },
    { p: '¿Qué propiedad es? <b>(2 × 5) × 9 = 2 × (5 × 9)</b>', o: ['Conmutativa', 'Asociativa', 'Distributiva'], c: 1, e: 'Asociativa de la multiplicación.' },
    { p: '¿Qué propiedad es? <b>6 × (10 − 1) = 6 × 10 − 6 × 1</b>', o: ['Conmutativa', 'Asociativa', 'Distributiva'], c: 2, e: 'Distributiva respecto de la resta.' },
    { p: 'Completa (conmutativa): 7 × 9 = 9 × ___', r: ['7'], e: '7 × 9 = 9 × 7 = 63.' },
    { p: 'Completa (asociativa): (3 + 5) + 2 = 3 + (5 + ___)', r: ['2'], e: '(3 + 5) + 2 = 3 + (5 + 2) = 10.' },
    { p: 'Completa (distributiva): 4 × (7 + 3) = 4 × 7 + 4 × ___', r: ['3'], e: '4 × (7 + 3) = 28 + 12 = 40.' },
    { p: 'Calcula usando la distributiva: <b>5 × (10 + 4)</b>', r: ['70'], e: '5 × 10 + 5 × 4 = 50 + 20 = 70.' },
    { p: 'Calcula usando la distributiva: <b>3 × (20 − 1)</b>', r: ['57'], e: '3 × 20 − 3 × 1 = 60 − 3 = 57.' },
    { p: 'Calcula de cabeza con la asociativa: <b>25 × 4 × 7</b>', r: ['700'], e: '(25 × 4) × 7 = 100 × 7 = 700.' },
    { p: 'Calcula de cabeza con la asociativa: <b>2 × 5 × 13</b>', r: ['130'], e: '(2 × 5) × 13 = 10 × 13 = 130.' },
    { p: 'Calcula: <b>(6 + 4) + 8</b> y <b>6 + (4 + 8)</b>. ¿Cuánto da?', r: ['18'], e: 'Las dos dan 18: asociativa.' },
    { p: 'Calcula 8 × 12 descomponiendo: 8 × (10 + 2) = ?', r: ['96'], e: '80 + 16 = 96.' },
    { p: 'La resta cumple la propiedad conmutativa.', vf: false, e: '9 − 4 = 5 pero 4 − 9 no da 5.' },
    { p: 'La propiedad conmutativa se cumple en la suma y en la multiplicación.', vf: true, e: 'a + b = b + a y a × b = b × a.' },
    { p: 'La propiedad asociativa dice que podemos agrupar los números de distintas formas y el resultado no cambia.', vf: true, e: 'Así es.' },
    { p: '¿Cuál de estas igualdades es la propiedad distributiva?', o: ['2 × (3 + 4) = 2 × 3 + 2 × 4', '2 × 3 = 3 × 2', '(2 × 3) × 4 = 2 × (3 × 4)'], c: 0, e: 'El 2 multiplica a cada sumando.' },
    { p: '¿Cuál está MAL?', o: ['4 × (5 + 1) = 4 × 5 + 4 × 1', '4 × (5 + 1) = 4 × 5 + 1', '4 × (5 + 1) = 24'], c: 1, e: 'Hay que multiplicar el 4 también por el 1: 20 + 4 = 24.' },
    { p: 'Escribe el nombre de la propiedad: <b>a × b = b × a</b>', r: ['conmutativa', 'propiedad conmutativa', 'la conmutativa'], e: 'Conmutativa.' },
    { p: 'Escribe el nombre de la propiedad: <b>a × (b + c) = a × b + a × c</b>', r: ['distributiva', 'propiedad distributiva', 'la distributiva'], e: 'Distributiva.' }
  ]
});

AULA.tema('mates', {
  id: 'mates-1', num: 2, trimestre: 1, origen: 'base',
  titulo: 'Números de hasta nueve cifras',
  resumen: 'Leer, escribir, valor de posición, comparar y redondear',
  aprende: [
    { t: 'Las órdenes de unidades', h: '<table><tr><th colspan="3">Millones</th><th colspan="3">Millares</th><th colspan="3">Unidades</th></tr><tr><td>CM</td><td>DM</td><td>UM</td><td>CMi</td><td>DMi</td><td>UMi</td><td>C</td><td>D</td><td>U</td></tr><tr><td>3</td><td>4</td><td>5</td><td>2</td><td>0</td><td>8</td><td>1</td><td>7</td><td>6</td></tr></table>' +
      '<p>Se lee: <b>trescientos cuarenta y cinco millones doscientos ocho mil ciento setenta y seis</b>.</p><div class="ojo">Truco: separa en grupos de tres cifras empezando por la derecha: 345.208.176. Cada punto es una “parada”: millones · mil · unidades.</div>' },
    { t: 'Valor de posición', h: '<p>Una cifra vale más o menos según el <b>lugar</b> que ocupa.</p><div class="ej">En 4<b>7</b>.302.115 el 7 está en las unidades de millón → vale <b>7.000.000</b>.</div><p>1 UMi = 1.000 U · 1 DMi = 10.000 U · 1 CMi = 100.000 U · 1 UM (millón) = 1.000.000 U</p>' },
    { t: 'Comparar números', h: '<ol><li>El que tiene <b>más cifras</b> es mayor.</li><li>Si tienen las mismas, compara cifra a cifra <b>desde la izquierda</b>.</li></ol><div class="ej">4.508.200 <b>&gt;</b> 4.498.900 (porque 5 centenas de millar &gt; 4)</div><p><b>&gt;</b> mayor que · <b>&lt;</b> menor que. ¡El “pico” apunta al pequeño!</p>' },
    { t: 'Redondear', h: '<p>Para redondear a una cifra, mira la de su <b>derecha</b>:</p><ul><li>0, 1, 2, 3, 4 → se queda igual.</li><li>5, 6, 7, 8, 9 → sube una.</li></ul><div class="ej">Redondear 3.<b>4</b>67.000 a las CMi → miro el 6 (DMi) → 3.500.000</div>' }
  ],
  chuleta: [
    'Grupos de 3 cifras desde la derecha: <b>millones . miles . unidades</b>.',
    '1 millón = 1.000.000 = 1.000 millares.',
    'El valor de una cifra depende de su posición.',
    'Comparar: primero el nº de cifras, luego de izquierda a derecha.',
    'Redondear: mira la cifra de la derecha. 5 o más → sube.'
  ],
  fichas: [
    ['¿Cuántas unidades son 1 millón?', '1.000.000'],
    ['¿Cuántos millares son 1 millón?', '1.000'],
    ['UMi', 'Unidad de millar = 1.000'],
    ['CMi', 'Centena de millar = 100.000'],
    ['DM', 'Decena de millón = 10.000.000'],
    ['Redondear: cifra de la derecha 5 o más…', '…se sube una'],
    ['Signo <b>&gt;</b>', 'mayor que'],
    ['Signo <b>&lt;</b>', 'menor que']
  ],
  preguntas: [
    { p: '¿Cómo se escribe con cifras “dos millones trescientos mil cuarenta”?', o: ['2.300.040', '2.300.400', '2.030.040', '230.040'], c: 0, e: '2 millones · 300 mil · 040 unidades = 2.300.040.' },
    { p: 'Escribe con cifras: <b>quince millones ocho mil</b>.', r: ['15008000'], e: '15 millones · 008 mil · 000 = 15.008.000.' },
    { p: '¿Cuántas cifras tiene el número “cien millones”?', r: ['9', 'nueve'], e: '100.000.000 tiene 9 cifras.' },
    { p: '¿Qué cifra ocupa las <b>decenas de millar</b> en 6.<b>5</b>81.903?', o: ['5', '8', '6', '1'], c: 1, e: '6 (UM) · 5 (CMi) · 8 (DMi) · 1 (UMi) · 9 (C) · 0 (D) · 3 (U).' },
    { p: 'Un millón es igual a mil millares.', vf: true, e: '1.000 × 1.000 = 1.000.000.' },
    { p: 'Si redondeas 4.750.000 a las unidades de millón, obtienes 4.000.000.', vf: false, e: 'La cifra de la derecha es 7 (≥5): se sube → 5.000.000.' }
  ],
  generar: [['valorPosicion', 2], ['comparar', 1], ['redondeo', 2]]
});

AULA.tema('mates', {
  id: 'mates-2', num: 3, trimestre: 1, origen: 'base',
  titulo: 'Multiplicación y división',
  resumen: 'Multiplicar por varias cifras, dividir y hacer la prueba',
  aprende: [
    { t: 'Partes de la multiplicación', h: '<p><b>factores</b> × <b>factores</b> = <b>producto</b>. 125 × 34 = 4.250</p><p><b>Propiedades:</b></p><ul><li><b>Conmutativa</b>: el orden no cambia el resultado. 3 × 5 = 5 × 3</li><li><b>Asociativa</b>: puedo agrupar como quiera. (2 × 5) × 7 = 2 × (5 × 7)</li><li><b>Distributiva</b>: 4 × (10 + 3) = 4 × 10 + 4 × 3</li></ul>' },
    { t: 'Multiplicar por 10, 100, 1.000', h: '<p>Se añaden 1, 2 o 3 ceros: 47 × 100 = <b>4.700</b>.</p>' },
    { t: 'Partes de la división', h: '<table><tr><td><b>Dividendo</b> (lo que reparto)</td><td>85</td></tr><tr><td><b>Divisor</b> (entre cuántos)</td><td>4</td></tr><tr><td><b>Cociente</b> (cuánto toca)</td><td>21</td></tr><tr><td><b>Resto</b> (lo que sobra)</td><td>1</td></tr></table>' +
      '<p><b>Exacta</b>: resto 0. <b>Entera</b>: resto distinto de 0.</p><div class="ojo">El resto <b>siempre</b> es menor que el divisor. Si no, ¡aún cabe otra vez!</div>' },
    { t: 'La prueba de la división', h: '<p><b>divisor × cociente + resto = dividendo</b></p><div class="ej">4 × 21 + 1 = 85 ✔</div>' }
  ],
  chuleta: [
    'Factor × factor = producto.',
    'Conmutativa: a × b = b × a. Asociativa: (a × b) × c = a × (b × c).',
    'Dividendo : divisor = cociente, y sobra el resto.',
    'Prueba: <b>divisor × cociente + resto = dividendo</b>.',
    'Resto &lt; divisor. Exacta si resto = 0.'
  ],
  fichas: [
    ['Prueba de la división', 'divisor × cociente + resto = dividendo'],
    ['División <b>exacta</b>', 'resto = 0'],
    ['Propiedad <b>conmutativa</b>', 'El orden de los factores no cambia el producto'],
    ['36 × 100', '3.600'],
    ['El resto siempre es…', 'menor que el divisor']
  ],
  preguntas: [
    { p: 'En 72 : 8 = 9, ¿cómo se llama el 9?', o: ['Dividendo', 'Divisor', 'Cociente', 'Resto'], c: 2, e: 'El resultado de la división es el cociente.' },
    { p: 'Una división con resto 0 se llama…', o: ['exacta', 'entera', 'impar'], c: 0, e: 'Exacta: no sobra nada.' },
    { p: 'En una división el resto puede ser mayor que el divisor.', vf: false, e: 'Nunca: si es mayor, aún cabe otra vez.' },
    { p: '5 × 8 = 8 × 5 es un ejemplo de la propiedad…', o: ['asociativa', 'conmutativa', 'distributiva'], c: 1, e: 'Conmutativa: cambiar el orden no cambia el resultado.' },
    { p: 'Problema: 6 amigos se reparten 150 cromos a partes iguales. ¿Cuántos le tocan a cada uno?', r: ['25'], e: '150 : 6 = 25.' },
    { p: 'Problema: un autobús lleva 54 pasajeros. ¿Cuántos pasajeros llevan 12 autobuses iguales?', r: ['648'], e: '54 × 12 = 648.' }
  ],
  generar: [['multiplicar', 2], ['tablaMental', 1], ['dividir', 2], ['restoDivision', 1], ['pruebaDivision', 1]]
});

AULA.tema('mates', {
  id: 'mates-3', num: 4, trimestre: 1, origen: 'base',
  titulo: 'Múltiplos y divisores',
  resumen: 'Múltiplos, divisores, criterios de divisibilidad y números primos',
  aprende: [
    { t: 'Múltiplos', h: '<p>Los <b>múltiplos</b> de un número se obtienen <b>multiplicándolo</b> por 0, 1, 2, 3…</p><div class="ej">Múltiplos de 4: 0, 4, 8, 12, 16, 20…</div><p>Un número tiene <b>infinitos</b> múltiplos.</p>' },
    { t: 'Divisores', h: '<p>Un número es <b>divisor</b> de otro si lo divide de forma <b>exacta</b> (resto 0).</p><div class="ej">Divisores de 12: 1, 2, 3, 4, 6, 12</div><p>El 1 y el propio número siempre son divisores.</p>' },
    { t: 'Criterios de divisibilidad', h: '<table><tr><th>Divisible por…</th><th>si…</th></tr><tr><td><b>2</b></td><td>acaba en 0, 2, 4, 6 u 8 (es par)</td></tr><tr><td><b>3</b></td><td>la suma de sus cifras es múltiplo de 3 (123 → 1+2+3 = 6 ✔)</td></tr><tr><td><b>5</b></td><td>acaba en 0 o 5</td></tr><tr><td><b>10</b></td><td>acaba en 0</td></tr></table>' },
    { t: 'Primos y compuestos', h: '<p><b>Primo</b>: solo tiene 2 divisores, el 1 y él mismo (2, 3, 5, 7, 11, 13…).</p><p><b>Compuesto</b>: tiene más de 2 divisores (4, 6, 8, 9…).</p><div class="ojo">El 1 no es ni primo ni compuesto. El 2 es el único primo par.</div>' }
  ],
  chuleta: [
    'Múltiplos: multiplico (infinitos). Divisores: divido exacto (pocos).',
    'Por 2: acaba en par · por 3: suma de cifras múltiplo de 3 · por 5: acaba en 0 o 5 · por 10: acaba en 0.',
    'Primo = solo divisible por 1 y por sí mismo.',
    'Primos menores de 20: 2, 3, 5, 7, 11, 13, 17, 19.'
  ],
  fichas: [
    ['Número <b>primo</b>', 'Solo tiene 2 divisores: 1 y él mismo'],
    ['Divisible por 3 si…', 'la suma de sus cifras es múltiplo de 3'],
    ['Divisible por 5 si…', 'acaba en 0 o en 5'],
    ['Divisores de 18', '1, 2, 3, 6, 9, 18'],
    ['Primos menores de 20', '2, 3, 5, 7, 11, 13, 17, 19']
  ],
  preguntas: [
    { p: '¿Cuál de estos números es <b>primo</b>?', o: ['9', '15', '13', '21'], c: 2, e: '13 solo se divide entre 1 y 13.' },
    { p: '¿Es 471 divisible por 3?', vf: true, e: '4 + 7 + 1 = 12, y 12 es múltiplo de 3.' },
    { p: '¿Cuál es divisible por 5?', o: ['352', '1.205', '444'], c: 1, e: 'Acaba en 5.' },
    { p: 'El número 1 es primo.', vf: false, e: 'El 1 solo tiene un divisor: no es primo ni compuesto.' },
    { p: 'Escribe el primer múltiplo de 7 mayor que 50.', r: ['56'], e: '7 × 8 = 56.' },
    { p: '¿Cuál NO es divisor de 24?', o: ['6', '8', '5', '12'], c: 2, e: '24 : 5 no es exacta.' }
  ],
  generar: [['multiplo', 3], ['divisores', 2]]
});
