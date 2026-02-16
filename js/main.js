// main.js - JavaScript principal

// Menu toggle móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animaciones de scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Formulario de contacto con WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const vehiculoSelect = document.getElementById('vehiculo');
        const vehiculo = vehiculoSelect ? vehiculoSelect.value : '';
        const mensaje = document.getElementById('mensaje').value;

        // Número de WhatsApp (cambiar por el real)
        const whatsappNumber = '595981234567';
        
        let whatsappMessage = `*Consulta desde Web - Ruggieri Cars*%0A%0A`;
        whatsappMessage += `*Nombre:* ${nombre}%0A`;
        whatsappMessage += `*Teléfono:* ${telefono}%0A`;
        if (email) whatsappMessage += `*Email:* ${email}%0A`;
        if (vehiculo) whatsappMessage += `*Vehículo de Interés:* ${vehiculo}%0A`;
        whatsappMessage += `%0A*Mensaje:*%0A${mensaje}`;
        
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        
        contactForm.reset();
        alert('¡Gracias por tu consulta! Te estamos redirigiendo a WhatsApp.');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});
