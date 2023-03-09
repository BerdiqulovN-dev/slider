"use strict";

let elRight = document.querySelector(".right-to") ;
let elLeft = document.querySelector(".left-to") ;
let image1 = document.querySelector(".image1");
let image3 = document.querySelector(".image3")
let wrapper =document.querySelector(".wrapper")


let width = image1.clientWidth;
let n=0;
let m=0;

elLeft.addEventListener("click", (evt)=>{
    ++n;
     wrapper.classList.add(`right-[${n*600}px]`)
     if(n==3) n=0;
})


elRight.addEventListener("click", (evt)=>{
    ++m;
     wrapper.classList.add(`right-[${n*600}-${m*600}px]`)
     if(m==3) m=0;
})


// console.log(salom);
