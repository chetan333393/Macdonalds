let down = document.querySelector("#down");

let hamburger = document.querySelector(".logo-bar")

let medianav = document.querySelector(".query-nav");

let close = document.querySelector(".close");

let mainnav = document.querySelector("nav")

let downcon = document.querySelector("#down");

let logic = 0;

let minus = document.querySelector(".minus");

let querymenu = document.querySelector(".querymenu");

let queryplus = document.querySelector(".query-plus");

let downmenu = document.querySelector("#menu");

let plus2 = document.querySelector(".plus-2");

let langBox = document.querySelector(".lang-box");

let minus2 =document.querySelector(".minus-2");

down.addEventListener("click",function(){
    console.log("hello")
})

hamburger.addEventListener("click",function(){
    medianav.style.display = "inline"
    mainnav.style.display = "none"
})

close.addEventListener('click', () => {
    medianav.style.display = "none";
    mainnav.style.display = "flex"
});

downcon.addEventListener('click',() => {
    if(logic === 0){
        downcon.style.transform =  'rotate(180deg)';
        downmenu.style.display = "inline-block"
        logic = 1;
    }else{
        downcon.style.transform =  'rotate(0deg)';
        downmenu.style.display = "none"
        logic = 0;
    }
});

queryplus.addEventListener('click',() => {
   queryplus.style.display = "none"
   minus.style.display = "inline"
   querymenu.style.display = "inline";
});

minus.addEventListener('click',() => {
    queryplus.style.display = "inline"
    minus.style.display = "none"
    querymenu.style.display = "none";
})

plus2.addEventListener('click', () => {
   plus2.style.display = "none"
   minus2.style.display = "inline"
   langBox.style.display = "block"
});

minus2.addEventListener('click', () => {
    plus2.style.display = "block"
   minus2.style.display = "none"
   langBox.style.display = "none"
})