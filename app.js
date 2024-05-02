const navbar = document.querySelector(".navbar-toggler");
const navBox = document.querySelector(".navbar-collapse");
let linkBox = document.querySelector(".collapse");
let li = document.querySelectorAll(".nav-item");
const xmark = document.querySelector(".fa-xmark");
let menu = document.querySelector(".navbar-toggler-icon");

navbar.addEventListener("click",()=>{
    navBox.style.top = "0px";
    linkBox.style.backgroundColor = "#373737";
    linkBox.style.padding = "2rem 2rem";
    linkBox.style.width = "100%";
    linkBox.style.Zindex = "10";
    for(item of li){
        item.style.color = "black";
    }
    console.log("hello")
    xmark.classList.replace("inactive","active");
    navbar.classList.add("inactive");
})

xmark.addEventListener("click",()=>{
    xmark.classList.replace("active","inactive");
    navbar.classList.remove("inactive");
    navBox.classList.remove("show");
    linkBox.style.width = "40%";
    navBox.style.top = "20px";
    linkBox.style.padding = "0";

    linkBox.style.backgroundColor = "transparent";
})

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const count = document.querySelector(".count");

rightArrow.addEventListener("click",()=>{
    img1.classList.remove("active");
    img1.classList.add("inactive");
    img2.classList.add("active");
    count.innerText = "02";
})

leftArrow.addEventListener("click",()=>{
    img1.classList.replace("inactive","active");
    img2.classList.replace("active","inactive");
    count.innerText = "01";
})

const slides = document.querySelectorAll(".slide-img");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right")
let counter = 0;
const number = document.querySelector(".number");
let slideNum = 1;

slideLeft.addEventListener("click",()=>{
    counter--;
    slideNum--;
    if(slideNum<1){
        slideNum=4;
    }
    number.innerText = slideNum;
    if(counter<0){
        counter = 3;
    }
    slideImg();
})
slideRight.addEventListener("click",()=>{
    counter = counter+1;
    slideNum++;
    if(slideNum>4){
       slideNum = 1;
    }
    number.innerText = slideNum;
    if(counter>3){
        counter=0
    }
    slideImg();
})

const slideImg = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*50}vw)`
    })
}



const firstLeft = document.querySelector(".first-left");
const firstRight = document.querySelector(".first-right");
let contents = document.querySelectorAll(".slider-information");
let secCount = document.querySelector(".sec-count");
let value = 0;
let slideVal = 1;


firstRight.addEventListener("click",()=>{
    slideVal++;
    if(slideVal>3){
        slideVal = 3;
    }
    secCount.innerText = slideVal;
    if(value<2){
        contents[value].classList.remove("active-slider");
        contents[value].classList.add("inactive-slider")
        contents[value+1].classList.add("active-slider");
        value++;
        console.log(value);
    }
});
firstLeft.addEventListener("click",()=>{
    slideVal--;
    if(slideVal<1){
        slideVal = 1;
    }
    secCount.innerText = slideVal;
    if(value>0){
        contents[value].classList.remove("active-slider");
        contents[value].classList.add("inactive-slider");
        contents[value-1].classList.add("active-slider");
        value--;
    }
});













