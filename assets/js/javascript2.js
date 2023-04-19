// Seleccionar el botón "Confirmar"
var confirmarBtn = document.getElementById('confirmarBtn');

// Agregar el evento "click" al botón "Confirmar"
confirmarBtn.addEventListener('click', function() {
  // Seleccionar el modal por su ID y mostrarlo
  var modal = document.getElementById('exampleModal');
  modal.classList.add('show');
  modal.style.display = 'block';

  // Configurar el temporizador para cerrar el modal después de 5 segundos
  setTimeout(function() {
    modal.classList.remove('show');
    modal.style.display = 'none';
    window.location.href = 'index.html'; // redirigir a la página index.html
  }, 5000);
});
