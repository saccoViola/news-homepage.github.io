//x.addEventListener("click", (e) =>{
// topMenu.style.display = "none"
//})

//immagineHamburger.addEventListener("click" (e) =>{
// topMenu.style.display = "flex";
// //})


//quando topmenu è attivo, cambio immagine e metto la X e aggiungo classe z-index

const menuIcon = document.querySelector(".hamburger-menu");
const topMenu = document.querySelector(".top-menu");


menuIcon.addEventListener("click", () =>{
    topMenu.classList.toggle("active");
    menuIcon.classList.toggle("close-menu");
    topMenu.style.display = "flex";
 

})

