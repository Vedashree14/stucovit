let balloon = document.getElementById("balloon");
let balloon1 = document.getElementById("balloon1");
let balloon2 = document.getElementById("balloon2");
let text = document.getElementById("text");
let train = document.getElementById("train");
let header = document.getElementById("header");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    text.style.top = 80 + value * -0.1 + '%';
    balloon.style.top = 35 + value * -0.2  + '%';
    balloon1.style.top = 20 + value * -0.5 + '%';
    balloon2.style.top =  40 + value * -0.4 + '%';
    train.style.left = value * 1.5 + "px";
    header.style.top = value * 0.5 + 'px';
})

