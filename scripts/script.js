// Obtener el elemento del menú
const mainMenu = document.getElementById('mainMenu');

// Variable para almacenar la posición de scroll anterior
let lastScrollY = window.scrollY;

// Altura del menú (debe coincidir con el CSS)
const menuHeight = mainMenu.offsetHeight; // O puedes usar un valor fijo como 60

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