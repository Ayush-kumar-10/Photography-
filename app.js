const navbar = document.querySelector(".navbar-toggler");
const navBox = document.querySelector(".navbar-collapse");
console.log(navBox);
navbar.addEventListener("click",()=>{
    navBox.style.top = "30px";
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
    count.innerText = 2;
})

leftArrow.addEventListener("click",()=>{
    img1.classList.replace("inactive","active");
    img2.classList.replace("active","inactive");
    count.innerText = 1;
})

const slides = document.querySelectorAll(".slide-img");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right")
let counter = 0;
const number = document.querySelector(".number");

slideLeft.addEventListener("click",()=>{
    counter--;
    if(counter<0){
        counter = 3;
    }
    slideImg();
})
slideRight.addEventListener("click",()=>{
    counter ++;
    number.innerText = counter;

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
let value = 0;


firstRight.addEventListener("click",()=>{
    if(value<2){
        contents[value].classList.remove("active-slider");
        contents[value].classList.add("inactive-slider")
        contents[value+1].classList.add("active-slider");
        value++;
        console.log(value);
    }
    
});
firstLeft.addEventListener("click",()=>{
    if(value>0){
        contents[value].classList.remove("active-slider");
        contents[value].classList.add("inactive-slider");
        contents[value-1].classList.add("active-slider");
        value--;
    }
  

});













