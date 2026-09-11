// login.js
// Validaciones del formulario de inicio de sesión (Tienda de Legos).
// Requiere que login.html incluya: <script src="assets/js/login.js"></script>

(function () {
  const form = document.getElementById('formLogin');
  if (!form) return;

  const campos = {
    loginEmail: {
      input: document.getElementById('loginEmail'),
      error: document.getElementById('errorLoginEmail'),
      validar(valor) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!valor.trim()) return 'El correo electrónico es obligatorio.';
        if (!regex.test(valor.trim())) return 'Ingresa un correo electrónico con formato válido.';
        return '';
      },
    },
    loginPassword: {
      input: document.getElementById('loginPassword'),
      error: document.getElementById('errorLoginPassword'),
      validar(valor) {
        if (!valor) return 'La contraseña es obligatoria.';
        if (valor.length < 8) return 'La contraseña debe tener al menos 8 caracteres.';
        return '';
      },
    },
  };

  function validarCampo(clave) {
    const campo = campos[clave];
    const mensaje = campo.validar(campo.input.value);
    campo.error.textContent = mensaje;
    campo.input.setAttribute('aria-invalid', mensaje ? 'true' : 'false');
    return mensaje === '';
  }

  Object.keys(campos).forEach((clave) => {
    campos[clave].input.addEventListener('input', () => validarCampo(clave));
    campos[clave].input.addEventListener('blur', () => validarCampo(clave));
  });

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const resultados = Object.keys(campos).map(validarCampo);
    const formularioValido = resultados.every(Boolean);
    if (!formularioValido) return;

    // Autenticación simulada contra los usuarios guardados por registro.js,
    // mientras no exista la API REST definitiva.
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const email = campos.loginEmail.input.value.trim();
    const password = campos.loginPassword.input.value;

    const usuario = usuarios.find((u) => u.email === email && u.password === password);

    if (!usuario) {
      campos.loginPassword.error.textContent = 'Correo o contraseña incorrectos.';
      campos.loginPassword.input.focus();
      return;
    }

    sessionStorage.setItem('usuarioActivo', JSON.stringify({ nombre: usuario.nombre, email: usuario.email }));
    alert('Bienvenido/a, ' + usuario.nombre + '.');
    window.location.href = 'index.html';
  });
})();