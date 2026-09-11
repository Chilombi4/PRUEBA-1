// carrusel.js
// Carrusel de imágenes de producto: muestra una imagen a la vez, con
// flechas para ir a la anterior/siguiente. Se aplica a cualquier bloque
// con clase "carrusel" que contenga imágenes ".carrusel-imagen" y dos
// botones marcados con [data-carrusel-anterior] / [data-carrusel-siguiente].
 
document.querySelectorAll('.carrusel').forEach(function (carrusel) {
  const imagenes = carrusel.querySelectorAll('.carrusel-imagen');
  const botonAnterior = carrusel.querySelector('[data-carrusel-anterior]');
  const botonSiguiente = carrusel.querySelector('[data-carrusel-siguiente]');
  let indiceActual = 0;
 
  function mostrarImagen(indice) {
    imagenes.forEach(function (imagen, i) {
      imagen.hidden = i !== indice;
    });
  }
 
  function irAAnterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
  }
 
  function irASiguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
  }
 
  if (botonAnterior) botonAnterior.addEventListener('click', irAAnterior);
  if (botonSiguiente) botonSiguiente.addEventListener('click', irASiguiente);
 
  mostrarImagen(indiceActual);
});