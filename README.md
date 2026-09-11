# Tienda de Legos — Evaluación Formativa N°1 (DSY1104)

Proyecto que une HTML, CSS y JavaScript, con integración futura a una API REST,
desarrollado para la asignatura Desarrollo Fullstack II.

## Descripción del proyecto

Sitio web de una tienda en línea de sets de Lego, con página de inicio,
registro de usuarios e inicio de sesión, siguiendo los indicadores de logro
IL1.1, IL1.2 e IL1.3 de la pauta de evaluación.

## Estructura de archivos

```
/
├── index.html
├── login.html
├── registro.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── registro.js
│   │   ├── login.js
│   │   └── productos.js
│   ├── video/
│   │    └── 
│   └── img/
│        └── 
```

Los archivos `index.html`, `login.html`, `registro.html` y `styles.css` son la
base entregada del proyecto y no fueron modificados. `SNIPPETS-A-INTEGRAR.md`
indica exactamente qué líneas agregar en esos archivos (etiquetas `<script>`,
imágenes de productos y video embebido) para completar la pauta.

## Tecnologías utilizadas

- HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- CSS3 mediante hoja de estilos externa (`assets/css/styles.css`)
- JavaScript vanilla (sin frameworks) para validación de formularios

## Funcionalidades

### HTML y CSS (IL1.1)

- Estructura semántica en las tres páginas.
- Hipervínculos funcionales entre `index.html`, `registro.html` y `login.html`.
- Hoja de estilos externa aplicada de forma consistente en todo el sitio.
- Imágenes de productos y video embebido.

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

**`assets/js/productos.js`**

- Da funcionalidad al botón "Ver Detalle" de cada producto en `index.html`.

> Nota: la persistencia con `localStorage`/`sessionStorage` es temporal, para
> dejar el formulario funcional mientras se conecta la API REST definitiva del
> proyecto ("unir html, javascript, css con la api REST").

### Control de versiones (IL1.3)

Flujo de trabajo sugerido con Git:

1. `git init` en la raíz del proyecto.
2. Commits regulares y descriptivos, por ejemplo:
   - `feat: agrega validación de formulario de registro`
   - `feat: agrega validación de formulario de login`
   - `feat: agrega imágenes de productos y video promocional`
   - `docs: agrega README del proyecto`
3. Repositorio remoto público en GitHub (`git remote add origin https://github.com/Chilombi4/PRUEBA-1.git`,
   `git push -u origin main`).


