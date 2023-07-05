// Paso 1: Obtener referencias a los elementos del DOM
const formulario = document.getElementById('usuario-form');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const tablaUsuarios = document.getElementById('usuarios-body');

// Paso 2: Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  const nombre = nombreInput.value;
  const correo = correoInput.value;

  agregarUsuario(nombre, correo);
  mostrarUsuarios();

  formulario.reset();
});

// Paso 3: Función para agregar un nuevo usuario
function agregarUsuario(nombre, correo) {
  const usuario = { nombre, correo };
  usuarios.push(usuario);
}

// Paso 4: Función para mostrar todos los usuarios en la tabla
function mostrarUsuarios() {
  tablaUsuarios.innerHTML = ''; // Limpiar la tabla antes de mostrar los usuarios

  usuarios.forEach((usuario, index) => {
    const row = document.createElement('tr');

    const nombreCell = document.createElement('td');
    nombreCell.textContent = usuario.nombre;
    row.appendChild(nombreCell);

    const correoCell = document.createElement('td');
    correoCell.textContent = usuario.correo;
    row.appendChild(correoCell);

    const accionesCell = document.createElement('td');
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.addEventListener('click', function() {
      const nuevoCorreo = prompt('Ingrese el nuevo correo:');
      if (nuevoCorreo !== null) {
        actualizarUsuario(index, nuevoCorreo);
        mostrarUsuarios();
      }
    });
    accionesCell.appendChild(editarButton);

    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.addEventListener('click', function() {
      eliminarUsuario(index);
      mostrarUsuarios();
    });
    accionesCell.appendChild(eliminarButton);

    row.appendChild(accionesCell);

    tablaUsuarios.appendChild(row);
  });
}

// Paso 5: Función para actualizar un usuario
function actualizarUsuario(index, nuevoCorreo) {
  usuarios[index].correo = nuevoCorreo;
}

// Paso 6: Función para eliminar un usuario
function eliminarUsuario(index) {
  usuarios.splice(index, 1);
}

// Paso 7: Ejemplos de uso
const usuarios = [];
agregarUsuario('Juan', 'juan@example.com');
agregarUsuario('María', 'maria@example.com');
agregarUsuario('Pedro', 'pedro@example.com');

mostrarUsuarios();
