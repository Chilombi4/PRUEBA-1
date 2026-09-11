# Tienda de Legos — Evaluación Formativa N°1 (DSY1104)

Proyecto que une HTML, CSS y JavaScript, con integración futura a una API REST,
desarrollado para la asignatura Desarrollo Fullstack II.

## Descripción del proyecto

Sitio web de una tienda en línea de sets de Lego, con página de inicio,
registro de usuarios, inicio de sesión y fichas de detalle por producto,
siguiendo los indicadores de logro IL1.1, IL1.2 e IL1.3 de la pauta de
evaluación.

## Estructura de archivos

```
/
├── index.html
├── login.html
├── registro.html
├── detalle-pack-combate.html
├── detalle-halcon-milenario.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css         
    ├── js/
    │   ├── registro.js
    │   ├── login.js
    │   └── carrusel.js
    ├── img/
    │   ├── cloneTrooper&BattleDroidBattlePack1.jpg
    │   ├── cloneTrooper&BattleDroidBattlePack2.jpg
    │   ├── cloneTrooper&BattleDroidBattlePack3.jpg
    │   ├── milleniumFalcon1.jpg
    │   ├── milleniumFalcon2.jpg
    │   ├── milleniumFalcon3.jpg
    │   └── milleniumFalcon4.jpg
    └── video/
        └── halconMilenario.mp4
```

## Tecnologías utilizadas

- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- CSS3 mediante una única hoja de estilos externa (`assets/css/styles.css`),
  aplicada de forma consistente en todas las páginas
- JavaScript vanilla (sin frameworks) para validación de formularios y para
  el carrusel de imágenes de producto

## Funcionalidades

### HTML y CSS (IL1.1)

- Estructura semántica en todas las páginas.
- Hipervínculos funcionales entre `index.html`, `registro.html`, `login.html`
  y las fichas de detalle de cada producto.
- Hoja de estilos externa única aplicada de forma consistente en todo el
  sitio.
- Imágenes reales de los productos y video embebido y funcional en la ficha
  del Halcón Milenario.

### Fichas de producto y carrusel

- `index.html` muestra los productos (Pack de Combate: Soldado Clon y Droide
  de Combate, y Halcón Milenario 25 Años) con nombre, precio, imagen y botón
  "Ver Detalle".
- Cada botón "Ver Detalle" enlaza a su ficha (`detalle-pack-combate.html` o
  `detalle-halcon-milenario.html`), donde `assets/js/carrusel.js` muestra una
  imagen a la vez con flechas para pasar a la anterior/siguiente.
- La ficha del Halcón Milenario incluye además un `<video controls>` con el
  minivideo del producto (`assets/video/halconMilenario.mp4`).

### Validación de formularios en JavaScript (IL1.2)

**`assets/js/registro.js`**

| Campo | Validación |
|---|---|
| Nombre | Obligatorio, solo letras y espacios, mínimo 3 caracteres |
| Correo electrónico | Obligatorio, formato de correo válido |
| Contraseña | Obligatoria, mínimo 8 caracteres, al menos una mayúscula y un número |
| Confirmar contraseña | Obligatoria, debe coincidir con la contraseña |

- Los mensajes de error se muestran en los `<span>` ya definidos en el HTML
  (`errorNombre`, `errorEmail`, `errorPassword`, `errorConfirmPassword`).
- Se muestran sugerencias de formato al enfocar cada campo vacío.
- El envío se bloquea (`preventDefault`) mientras existan campos inválidos.
- Al registrarse correctamente, el usuario se guarda en `localStorage` (como
  simulación mientras no esté disponible la API REST) y se redirige a
  `login.html`.

**`assets/js/login.js`**

| Campo | Validación |
|---|---|
| Correo electrónico | Obligatorio, formato de correo válido |
| Contraseña | Obligatoria, mínimo 8 caracteres |

- Verifica las credenciales contra los usuarios guardados por `registro.js`.
- Muestra mensajes de error específicos ("Correo o contraseña incorrectos").
- Guarda la sesión activa en `sessionStorage` y redirige a `index.html`.

> Nota: la persistencia con `localStorage`/`sessionStorage` es temporal, para
> dejar los formularios funcionales mientras se conecta la API REST definitiva
> del proyecto ("unir html, javascript, css con la api REST").


### Control de versiones (IL1.3)

Flujo de trabajo de ejemplo con Git:

1. `git init` en la raíz del proyecto.
2. Commits regulares y descriptivos, por ejemplo:
   - `feat: agrega validación de formulario de registro`
   - `feat: agrega validación de formulario de login`
   - `feat: agrega imágenes de productos, carrusel y video del Halcón Milenario`
   - `docs: agrega README del proyecto`
3. Repositorio remoto público en GitHub:
   - `git remote add origin https://github.com/Chilombi4/PRUEBA-1.git`
   - `git push -u origin main`