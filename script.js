/* ==================================
   PRELOADER
================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    const preloader = document.getElementById("preloader");

    if(preloader){

        setTimeout(()=>{

            preloader.style.display="none";

        },1000);

    }

});





/* ==================================
   AOS
================================== */

if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1200,

        once:true,

        offset:100

    });

}





/* ==================================
   MENU HAMBURGUESA
================================== */


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){


    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });


}




/* ==================================
   CERRAR MENU
================================== */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});






/* ==================================
   NAVBAR SCROLL
================================== */


const navbar = document.querySelector(".navbar");


if(navbar){


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        navbar.classList.add("scrolled");


    }else{


        navbar.classList.remove("scrolled");


    }


});


}





/* ==================================
   PORTFOLIO SLIDER
================================== */


const slides = document.querySelectorAll(".slide");


let currentSlide = 0;



function nextSlide(){


    if(slides.length <= 1) return;



    slides[currentSlide].classList.remove("active");


    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide=0;

    }



    slides[currentSlide].classList.add("active");


}



if(slides.length){

    setInterval(nextSlide,5000);

}

/* ==================================
   FAQ
================================== */


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


    const question = item.querySelector(".faq-question");


    if(question){


        question.addEventListener("click",()=>{


            item.classList.toggle("active");


        });


    }


});






/* ==================================
   CURSOR PERSONALIZADO
================================== */


const cursor = document.querySelector(".cursor");



if(cursor){


    document.addEventListener("mousemove",(e)=>{


        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";


    });





    document.querySelectorAll("a, button")
    .forEach(element=>{


        element.addEventListener("mouseenter",()=>{


            cursor.style.width="40px";

            cursor.style.height="40px";


        });




        element.addEventListener("mouseleave",()=>{


            cursor.style.width="20px";

            cursor.style.height="20px";


        });


    });


}






/* ==================================
   FORMULARIO WHATSAPP
================================== */


const contactForm = document.getElementById("contactForm");



if(contactForm){


    contactForm.addEventListener("submit",(e)=>{


        e.preventDefault();



        const nombre =
        contactForm.querySelector('[name="nombre"]').value;



        const correo =
        contactForm.querySelector('[name="correo"]').value;



        const mensaje =
        contactForm.querySelector('[name="mensaje"]').value;




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
   REVEAL SCROLL
================================== */


const reveals = document.querySelectorAll(".fade-up");



function revealElements(){


    reveals.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;



        if(position < window.innerHeight - 100){


            element.classList.add("show");


        }


    });


}



if(reveals.length){


    window.addEventListener(

        "scroll",

        revealElements

    );


    revealElements();


}






/* ==================================
   SCROLL TOP BUTTON
================================== */


const scrollButton = document.createElement("div");


scrollButton.innerHTML =
'<i class="fas fa-chevron-up"></i>';



scrollButton.classList.add("scroll-top");



document.body.appendChild(scrollButton);



Object.assign(scrollButton.style,{


    position:"fixed",

    bottom:"100px",

    right:"25px",

    width:"50px",

    height:"50px",

    display:"flex",

    alignItems:"center",

    justifyContent:"center",

    borderRadius:"50%",

    background:"#640000",

    color:"#fff",

    cursor:"pointer",

    opacity:"0",

    transition:".3s",

    zIndex:"999"



});






window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        scrollButton.style.opacity="1";


    }else{


        scrollButton.style.opacity="0";


    }


});






scrollButton.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});






/* ==================================
   FINAL
================================== */


console.log(
"FR Creative Studio cargado correctamente"
);