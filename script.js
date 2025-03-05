const menuIcon = document.querySelector(".hamburger-menu");
const topMenu = document.querySelector(".top-menu");


menuIcon.addEventListener("click", () =>{
    topMenu.classList.toggle("active");
    menuIcon.classList.toggle("close-menu");
    topMenu.style.display = "flex";
 

})

