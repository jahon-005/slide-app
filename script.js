let slode = document.querySelector(".slode");
let slode1 = document.querySelector(".slode1");
let slode2 = document.querySelector(".slode2");
let slode3 = document.querySelector(".slode3");
let slode4 = document.querySelector(".slode4");

slode.addEventListener("click",function(){
    slode.style.width = '800px'
    slode1.style.width = '70px'
    slode2.style.width = '70px'
    slode3.style.width = '70px'
    slode4.style.width = '70px'
})
slode1.addEventListener("click",function(){
    slode1.style.width = '800px'
    slode.style.width = '70px'
    slode2.style.width = '70px'
    slode3.style.width = '70px'
    slode4.style.width = '70px'
})
slode2.addEventListener("click",function(){
    slode2.style.width = '800px'
    slode1.style.width = '70px'
    slode.style.width = '70px'
    slode3.style.width = '70px'
    slode4.style.width = '70px'
})
slode3.addEventListener("click",function(){
    slode3.style.width = '800px'
    slode1.style.width = '70px'
    slode2.style.width = '70px'
    slode.style.width = '70px'
    slode4.style.width = '70px'
})
slode4.addEventListener("click",function(){
    slode4.style.width = '800px'
    slode1.style.width = '70px'
    slode2.style.width = '70px'
    slode.style.width = '70px'
    slode3.style.width = '70px'
})