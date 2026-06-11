/* ==================================
PRELOADER
================================== */

window.addEventListener("load", () => {

document.body.classList.add("loaded");

setTimeout(() => {

const preloader =
document.getElementById("preloader");

if(preloader){
preloader.style.display = "none";
}

},1000);

});

/* ==================================
AOS
================================== */

AOS.init({

duration:1200,

once:true,

offset:100

});

/* ==================================
MENU HAMBURGUESA
================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/* ==================================
CERRAR MENU AL HACER CLICK
================================== */

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/* ==================================
NAVBAR SCROLL
================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.style.padding =
"15px 8%";

navbar.style.background =
"rgba(0,0,0,.6)";

}else{

navbar.style.padding =
"25px 8%";

navbar.style.background =
"rgba(0,0,0,.15)";

}

});

/* ==================================
CONTADORES
================================== */

const counters =
document.querySelectorAll(".counter");

const startCounters = ()=>{

counters.forEach(counter=>{

const target =
+counter.dataset.target;

const updateCounter = ()=>{

const current =
+counter.innerText;

const increment =
target / 120;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(
updateCounter,
20
);

}else{

counter.innerText =
target;

}

};

updateCounter();

});

};

let counterStarted = false;

window.addEventListener("scroll",()=>{

const stats =
document.querySelector(".stats");

if(!stats) return;

const top =
stats.getBoundingClientRect().top;

if(top < window.innerHeight &&
!counterStarted){

counterStarted = true;

startCounters();

}

});

/* ==================================
PORTFOLIO SLIDER
================================== */

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide(){

if(slides.length === 0) return;

slides[currentSlide]
.classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide]
.classList.add("active");

}

setInterval(nextSlide,5000);

/* ==================================
TESTIMONIALS
================================== */

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function nextTestimonial(){

if(testimonials.length === 0) return;

testimonials[testimonialIndex]
.classList.remove("active");

testimonialIndex++;

if(
testimonialIndex >= testimonials.length
){

testimonialIndex = 0;

}

testimonials[testimonialIndex]
.classList.add("active");

}

setInterval(nextTestimonial,4000);

/* ==================================
FAQ
================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question =
item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});

/* ==================================
CURSOR PERSONALIZADO
================================== */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

if(!cursor) return;

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});

document
.querySelectorAll("a, button")
.forEach(el=>{

el.addEventListener("mouseenter",()=>{

if(cursor){

cursor.style.width = "40px";
cursor.style.height = "40px";

}

});

el.addEventListener("mouseleave",()=>{

if(cursor){

cursor.style.width = "20px";
cursor.style.height = "20px";

}

});

});

/* ==================================
PARTICULAS
================================== */

const particlesContainer =
document.getElementById("particles");

if(particlesContainer){

for(let i=0;i<60;i++){

const particle =
document.createElement("div");

particle.classList.add("particle");

const size =
Math.random()*6 + 2;

particle.style.width =
size + "px";

particle.style.height =
size + "px";

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
Math.random()*15 + 8 + "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particlesContainer
.appendChild(particle);

}

}

/* ==================================
DARK MODE AUTOMATICO
================================== */

if(
window.matchMedia(
"(prefers-color-scheme: dark)"
).matches
){

document.body.classList.add("dark");

}

/* ==================================
FORMULARIO WHATSAPP
================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const nombre =
this.querySelector(
'input[type="text"]'
).value;

const correo =
this.querySelector(
'input[type="email"]'
).value;

const mensaje =
this.querySelector(
'textarea'
).value;

const texto =

`Hola, mi nombre es ${nombre}%0A%0A` +

`Correo: ${correo}%0A%0A` +

`Mensaje:%0A${mensaje}`;

window.open(

`https://wa.me/1234567890?text=${texto}`,

"_blank"

);

});

}

/* ==================================
REVEAL ON SCROLL
================================== */

const reveals =
document.querySelectorAll(".fade-up");

function revealElements(){

reveals.forEach(element=>{

const top =
element.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

element.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();

/* ==================================
SCROLL TO TOP
================================== */

const scrollButton =
document.createElement("div");

scrollButton.innerHTML =
'<i class="fas fa-chevron-up"></i>';

scrollButton.classList.add(
"scroll-top"
);

document.body.appendChild(
scrollButton
);

scrollButton.style.position =
"fixed";

scrollButton.style.bottom =
"100px";

scrollButton.style.right =
"25px";

scrollButton.style.width =
"50px";

scrollButton.style.height =
"50px";

scrollButton.style.display =
"flex";

scrollButton.style.alignItems =
"center";

scrollButton.style.justifyContent =
"center";

scrollButton.style.borderRadius =
"50%";

scrollButton.style.background =
"#00e5ff";

scrollButton.style.color =
"#000";

scrollButton.style.cursor =
"pointer";

scrollButton.style.opacity =
"0";

scrollButton.style.transition =
".3s";

scrollButton.style.zIndex =
"999";

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

scrollButton.style.opacity =
"1";

}else{

scrollButton.style.opacity =
"0";

}

});

scrollButton.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}
);

/* ==================================
FIN
================================== */

console.log(
"WEB PRO PREMIUM CARGADO"
);
