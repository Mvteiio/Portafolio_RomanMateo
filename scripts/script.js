// Obtener el elemento del menú
const mainMenu = document.getElementById('mainMenu');

// Variable para almacenar la posición de scroll anterior
let lastScrollY = window.scrollY;


const menuHeight = mainMenu.offsetHeight; 

// Listener para el evento de scroll
window.addEventListener('scroll', () => {
    // Posición de scroll actual
    const currentScrollY = window.scrollY;

    // Condición para mostrar/ocultar
    // Si el usuario scrollea hacia abajo Y ha bajado más allá de la altura del menú (para evitar que se esconda al inicio)
    if (currentScrollY > lastScrollY && currentScrollY > menuHeight) {
        mainMenu.classList.add('hidden'); // Añade la clase para ocultar
    }
    // Si el usuario scrollea hacia arriba
    else if (currentScrollY < lastScrollY) {
        mainMenu.classList.remove('hidden'); // Remueve la clase para mostrar
    }

    // Actualizar la posición de scroll anterior para la próxima comparación
    lastScrollY = currentScrollY;
});

// Para proyectos

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  const elementosAnimados = document.querySelectorAll('.card2');
  elementosAnimados.forEach(el => observer.observe(el));

// Para servicios


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  const elementosAnimados2 = document.querySelectorAll('.card-container');
  elementosAnimados2.forEach(el => observer.observe(el));


// Seleccionamos todos los elementos necesarios
const botonesAbrir = document.querySelectorAll(".buttonsVisionMission");
const botonesCerrar = document.querySelectorAll(".cerrar");

// Recorremos cada botón de ABRIR
botonesAbrir.forEach(boton => {
  boton.onclick = function() {
    const targetModalId = boton.dataset.target;
    const modal = document.querySelector(targetModalId);
    if (modal) {
      // En lugar de cambiar el display, AÑADIMOS la clase
      modal.classList.add("modal-visible");
    }
  }
});

// Recorremos cada botón de CERRAR
botonesCerrar.forEach(boton => {
  boton.onclick = function() {
    const modal = boton.closest(".modal-contenedor");
    if (modal) {
      // En lugar de cambiar el display, QUITAMOS la clase
      modal.classList.remove("modal-visible");
    }
  }
});

// Función para cerrar si se hace clic FUERA
window.onclick = function(event) {
  if (event.target.classList.contains("modal-contenedor")) {
    // Si se hace clic en el fondo, QUITAMOS la clase
    event.target.classList.remove("modal-visible");
  }
}