// ANIMACIÓN SCROLL
const reveals = document.querySelectorAll(
    '.feature-card,.grid-included div,.warning-card,.delivery-card,.cta-card'
);

window.addEventListener('scroll', () => {

    reveals.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.classList.add('active');
        }

    });

});


// WHATSAPP CTA PRINCIPAL
const ctaBtn = document.querySelector('.cta-btn');

if (ctaBtn) {

    ctaBtn.addEventListener('click', (e) => {

        e.preventDefault();

        const mensaje = "Hola, estoy interesado en el Plan Básico de $300.";

        const numero = "16305551234";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });

}


// BOTÓN EXTRA (si lo usas aparte)
const btnWhatsApp = document.getElementById("btnWhatsApp");

if (btnWhatsApp) {

    btnWhatsApp.addEventListener("click", () => {

        const mensaje = "Hola, quiero reservar el Plan Básico de $300. ¿Me das más información?";

        const numero = "16308194415";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });

}

// SCROLL SUAVE GENERAL (tipo Apple)
document.documentElement.style.scrollBehavior = "smooth";


// OBSERVER (MUCHO MÁS PRO QUE scroll event)
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});


// ELEMENTOS A ANIMAR
const elements = document.querySelectorAll(
    '.feature-card, .grid-included div, .warning-card, .delivery-card, .cta-card, .price-card'
);


// ACTIVAR OBSERVER
elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

// capturar mouse
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

// animación suave (tipo Apple / fricción)
function animate() {

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animate);
}

animate();


