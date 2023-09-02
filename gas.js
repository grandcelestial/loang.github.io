var nav = document.querySelector("nav"),
       menu = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");
       
       
       
     
     
          menu.forEach((menu) => {
       menu.addEventListener("click", () => {
         nav.classList.toggle("open");
       });
     });

overlay.addEventListener("click", () => {
       nav.classList.remove("open");
     });
 
 
 
 
nav.style.display ="none";


    
 
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){ loader.style.display = "none";
    nav.style.display ="flex";
    })
