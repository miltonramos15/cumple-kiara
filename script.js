// Animación para la página principal
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de desvanecimiento para las imágenes del collage
    const collageImages = document.querySelectorAll('.collage img');
    collageImages.forEach((img, index) => {
        img.style.opacity = '0';
        setTimeout(() => {
            img.style.transition = 'opacity 1s ease-in-out';
            img.style.opacity = '1';
        }, 500 * index);
    });

    // Efecto para el mensaje
    const mensaje = document.querySelector('.mensaje');
    if (mensaje) {
        mensaje.style.opacity = '0';
        setTimeout(() => {
            mensaje.style.transition = 'opacity 1.5s ease-in-out';
            mensaje.style.opacity = '1';
        }, 2000);
    }

    // Efecto para el botón
    const boton = document.querySelector('.boton');
    if (boton) {
        boton.style.opacity = '0';
        setTimeout(() => {
            boton.style.transition = 'opacity 1.5s ease-in-out';
            boton.style.opacity = '1';
        }, 3000);
    }
});
