# Aula de Santi · guía de mantenimiento

Web de estudio para Santi (5º de Primaria, Andalucía). Publicada en GitHub Pages:
**https://madrigal-cell.github.io/aula-santi/** · repo `madrigal-cell/aula-santi` (rama `main`).
Copia de todo en Google Drive: `Mi unidad/CLAUDE/AULA SANTI`.

## Estructura

| Archivo | Qué contiene |
|---|---|
| `index.html`, `styles.css`, `app.js` | La web (no hace falta tocarlos para añadir contenido) |
| `config.js` | Asignaturas, alumno y **fecha de actualización** (`actualizado`) |
| `contenido/lengua.js`, `mates.js`, `medio.js`, `frances.js` | Temas de cada asignatura |
| `contenido/ingles.js` | Vacío: Inglés se estudia en **English Fox** (repo `madrigal-cell/english-fox`, archivo `content.js`) |
| `deberes.js` | Deberes, exámenes y unidad de inglés que están dando |

## Rutina cuando papá manda fotos

1. **Identificar** asignatura, tema/unidad y páginas del libro.
2. **Contenido del libro** → crear o sustituir el tema en `contenido/<asignatura>.js` con `origen: 'libro'` y `paginas: 'págs. 12-15'`.
   Si sustituye a un tema base equivalente, se reemplaza (mismo `id`) para no duplicar; si no, se añade con id nuevo.
   Cada tema: `aprende` (explicación en bloques), `chuleta`, `fichas` (8-10), `preguntas` (10-15 mezclando opción múltiple, V/F y escribir) y, en Mates, `generar`.
3. **Deberes** (foto de una tarea) → añadir a `AULA.deberes` en `deberes.js`: enunciado, `explica` (teoría breve), `pistas` progresivas que NO den la respuesta, `solucion` (se ve solo después de intentarlo) y `practica` con ejercicios parecidos.
4. **Examen** → añadir a `AULA.examenes` con fecha y los `temas` que entran; el simulacro se genera solo.
5. **Inglés** → actualizar `content.js` de English Fox con el vocabulario/gramática de la unidad del libro, y poner `AULA.inglesUnidad` en `deberes.js`.
6. Actualizar `AULA.actualizado` en `config.js` y subir `?v=N` en `index.html` si se cambia el motor.
7. Guardar la copia en Drive (`AULA SANTI`).

## Tipos de pregunta

```js
{ p:'Pregunta', o:['A','B','C'], c:0, e:'explicación' }   // opción múltiple (c = índice correcto)
{ p:'Afirmación', vf:true, e:'…' }                         // verdadero / falso
{ p:'Escribe…', r:['respuesta','variante'], e:'…' }        // escribir (ignora mayúsculas y tildes)
{ p:'…', r:['lápices'], estricto:true }                    // escribir respetando tildes (ortografía)
```

Generadores de Mates (`generar: [['nombre', cuántos]]`): valorPosicion, redondeo, comparar, multiplicar, tablaMental, dividir, restoDivision, pruebaDivision, multiplo, divisores.

## Criterios didácticos

- Lenguaje para un niño de 10 años, frases cortas, ejemplos cercanos (Sevilla, Mairena, fútbol, rugby, animales).
- En deberes, ayudar a pensar: pistas de menos a más; nunca la solución directamente.
- Progreso y estrellas se guardan en el navegador (localStorage). Zona de papá: notas, errores frecuentes y pasar progreso a otro dispositivo.
