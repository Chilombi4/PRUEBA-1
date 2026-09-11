// productos.js
// Interactividad de la página de inicio (Tienda de Legos).
// Requiere que index.html incluya: <script src="assets/js/productos.js"></script>
// No modifica index.html: los botones "Ver Detalle" se detectan por texto/posición
// dentro de cada <article>.

(function () {
  const articulos = document.querySelectorAll('main article');
  if (!articulos.length) return;

  articulos.forEach((articulo) => {
    const boton = articulo.querySelector('button');
    const titulo = articulo.querySelector('h3');
    if (!boton || !titulo) return;

    boton.addEventListener('click', () => {
      alert('Set: ' + titulo.textContent + '\nPronto podrás ver el detalle completo de este producto.');
    });
  });
})();