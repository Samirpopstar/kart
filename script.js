let search = document.querySelector('.search');
let main = document.querySelector('.main');
let burger = document.querySelector(".burger");
let logo = document.querySelector(".logo");
let nav_list = document.querySelector(".nav-list");
let login = document.querySelector(".login");
let navbar = document.querySelector(".navbar");

console.log("hello world");

search.addEventListener("click",function(){
    search.style.outlineColor= "aqua";
    search.style.outlineWidth= "2px";
    search.style.outlineStyle= "solid";
})

main.addEventListener("click",function(){
    search.style.outlineColor= "none";
    search.style.outlineWidth= "0px";
})

burger.addEventListener("click",function() {
    navbar.classList.toggle("h_nav");
    logo.classList.toggle("v_con");
    nav_list.classList.toggle("v_con");
    login.classList.toggle("v_con");   
    search.classList.toggle("v_con");   
})