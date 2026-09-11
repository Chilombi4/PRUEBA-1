// registro.js
// Validaciones del formulario de registro (Tienda de Legos).
// Requiere que registro.html incluya: <script src="assets/js/registro.js"></script>

(function () {
  const form = document.getElementById('formRegistro');
  if (!form) return;

  const campos = {
    nombre: {
      input: document.getElementById('nombre'),
      error: document.getElementById('errorNombre'),
      mensajeAyuda: 'Ingresa nombre y apellido (mínimo 3 letras, solo texto).',
      validar(valor) {
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,60}$/;
        if (!valor.trim()) return 'El nombre es obligatorio.';
        if (!regex.test(valor.trim())) return 'Ingresa un nombre válido (solo letras, mínimo 3 caracteres).';
        return '';
      },
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('errorEmail'),
      mensajeAyuda: 'Ejemplo: nombre@correo.com',
      validar(valor) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!valor.trim()) return 'El correo electrónico es obligatorio.';
        if (!regex.test(valor.trim())) return 'Ingresa un correo electrónico con formato válido.';
        return '';
      },
    },
    password: {
      input: document.getElementById('password'),
      error: document.getElementById('errorPassword'),
      mensajeAyuda: 'Mínimo 8 caracteres, con al menos una mayúscula y un número.',
      validar(valor) {
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!valor) return 'La contraseña es obligatoria.';
        if (!regex.test(valor)) return 'Debe tener 8+ caracteres, una mayúscula y un número.';
        return '';
      },
    },
    confirmPassword: {
      input: document.getElementById('confirmPassword'),
      error: document.getElementById('errorConfirmPassword'),
      mensajeAyuda: 'Debe coincidir exactamente con la contraseña ingresada.',
      validar(valor) {
        const passwordActual = campos.password.input.value;
        if (!valor) return 'Debes confirmar la contraseña.';
        if (valor !== passwordActual) return 'Las contraseñas no coinciden.';
        return '';
      },
    },
  };

  function mostrarError(campo, mensaje) {
    campo.error.textContent = mensaje;
    campo.input.setAttribute('aria-invalid', mensaje ? 'true' : 'false');
  }

  function mostrarAyuda(campo) {
    if (!campo.input.value && !campo.error.textContent) {
      campo.error.style.color = '#64748b';
      campo.error.textContent = campo.mensajeAyuda;
    }
  }

  function validarCampo(clave) {
    const campo = campos[clave];
    const mensaje = campo.validar(campo.input.value);
    campo.error.style.color = '#ef4444';
    mostrarError(campo, mensaje);
    return mensaje === '';
  }

  // Sugerencias en tiempo real (foco) y validación al perder el foco.
  Object.keys(campos).forEach((clave) => {
    const campo = campos[clave];
    campo.input.addEventListener('focus', () => mostrarAyuda(campo));
    campo.input.addEventListener('input', () => validarCampo(clave));
    campo.input.addEventListener('blur', () => validarCampo(clave));
  });

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const resultados = Object.keys(campos).map(validarCampo);
    const formularioValido = resultados.every(Boolean);

    if (!formularioValido) {
      const primerCampoInvalido = Object.keys(campos).find((clave) => campos[clave].error.textContent);
      if (primerCampoInvalido) campos[primerCampoInvalido].input.focus();
      return;
    }

    // Simulación de registro mientras no exista la API REST definitiva.
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const nuevoUsuario = {
      nombre: campos.nombre.input.value.trim(),
      email: campos.email.input.value.trim(),
      password: campos.password.input.value,
    };

    const yaExiste = usuarios.some((usuario) => usuario.email === nuevoUsuario.email);
    if (yaExiste) {
      mostrarError(campos.email, 'Ya existe una cuenta registrada con este correo.');
      campos.email.input.focus();
      return;
    }

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    form.reset();
    window.location.href = 'login.html';
  });
})();