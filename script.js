
const burger = document.querySelector("nav .burger")
const menu = document.querySelector("nav .menu")
const menu1 = document.querySelector("nav .menu1")
const menu2 = document.querySelector("nav .menu2")
const menu3 = document.querySelector("nav .menu3")
const menu4 = document.querySelector("nav .menu4")
const header = document.querySelector("header .background")
const name1 = document.querySelector("header .text")
const backgrounds = ["url('static/h1.jpg')", "url('static/h2.jpg')", "url('static/h3.jpg')"]
let i = 0;


function changeBackground(){
    i++;
    header.style.backgroundImage = backgrounds[i]
    if (i == 2){
        i= -1;
    }
}

menu1.addEventListener("click", function(){
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})
menu2.addEventListener("click", function(){
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})
menu3.addEventListener("click", function(){
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})

menu4.addEventListener("click", function(){
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})
burger.addEventListener("click", function(){
    menu.classList.toggle("active")
    burger.classList.toggle("active")
})
name1.addEventListener("click", function() {
    changeBackground();
})


