document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar funcionalidades interactivas aquí
});

function sendWhatsApp(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Formatea el mensaje para WhatsApp
    const whatsappMessage = `HOLA BUEN DÍA FLIXHUB\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;
    const phoneNumber = '+573212860892'; // Número de WhatsApp al que se enviará el mensaje
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');

    // Limpia los campos del formulario
    document.getElementById('contactForm').reset(); // Resetea el formulario
}
// Agrega este código en tu archivo JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
