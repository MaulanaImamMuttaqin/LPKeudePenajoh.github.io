function showImage(gambar){
    document.getElementById("main-title").style.display="none";
    document.getElementById(gambar).style.display = "block";
    document.getElementById(gambar).style.animation = "showAnim .3s ease";
   
}
function removeImage(gambar){
    document.getElementById("main-title").style.display="block";
    document.getElementById(gambar).style.display = "none";
    document.getElementById(gambar).style.animation = "none";
}

function arrowClick(){
    let el = document.getElementById("arrow");
    let Ael = document.querySelectorAll(".control a");
    let mobile = window.matchMedia("(max-width : 480px)");
    let tablet = window.matchMedia("(max-width : 1040px)");

    
    let styleArrow = {
        "transform": "rotate(180deg)",
        "left": "0.5vw",
        "boxShadow": "-1px 1px 12px -8px rgba(0,0,0,0.75)",
        "backgroundColor": "rgb(177, 208, 255)"
    }
    let styleArrowRe={
        "transform": "",
        "left": "",
        "boxShadow": "",
        "backgroundColor": ""
    }
    
    let AelStyle0={
        "visibility":"visible",
        "opacity" : "1",
        "backgroundColor": "rgb(177, 208, 255)",
        "top":"35%",
        "left":"5vw"
    }
    let AelStyleRe0={
        "visibility":"hidden",
        "opacity" : "0",
        "backgroundColor": "rgb(177, 208, 255)",
        "top":"40%",
        "left":"3vw"
    }

    let AelStyle1={
        "visibility":"visible",
        "opacity" : "1",
        "backgroundColor": "rgb(177, 208, 255)",
        "top":"50%",
        "left":"9vw"
    }
    let AelStyleRe1={
        "visibility":"hidden",
        "opacity" : "0",
        "backgroundColor": "rgb(177, 208, 255)",
        "top":"50%",
        "left":"7vw"
    }

    let AelStyle2={
        ...AelStyle0,
        "top":"65%"
    }
    let AelStyleRe2={
        ...AelStyleRe0,
        "top":"60%"
    }

    if(mobile.matches || tablet.matches){
        AelStyle1["left"] = "20vw"
        AelStyleRe1["left"] = "19vw"
    }
    if(el.style.left === ""){
        Object.assign(el.style, styleArrow);
        Object.assign(Ael[0].style, AelStyle0);
        Object.assign(Ael[1].style, AelStyle1);
        Object.assign(Ael[2].style, AelStyle2);
    }else{
        Object.assign(el.style, styleArrowRe);
        Object.assign(Ael[0].style, AelStyleRe0);
        Object.assign(Ael[1].style, AelStyleRe1);
        Object.assign(Ael[2].style, AelStyleRe2);
    }
   
}
const checkVis = function(element){
    const el = element.getBoundingClientRect()

    return (
        el.top >= 0 &&
        el.left >= 0 &&
        el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        el.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



let f1 = document.querySelector("#f1");
let f2 = document.querySelector("#f2");
let f3 = document.querySelector("#f3");
let foo_cont = document.querySelector(".third-container");
let footer = document.querySelector(".logo-footer img");
let foot = document.querySelector(".footer")

document.addEventListener('scroll', function(){
    console.log(foo_cont.getBoundingClientRect().top);
    if(checkVis(f3)){
        f3.style.visibility = "visible"
        f3.style.opacity = "1"
        f3.style.transform = "scale(1,1)"
    }else if(checkVis(f2)){
        f2.style.visibility = "visible"
        f2.style.opacity = "1"
        f2.style.transform = "scale(1,1)"
    }else if(checkVis(f1)){
        f1.style.visibility = "visible"
        f1.style.opacity = "1"
        f1.style.transform = "scale(1,1)"
    }else if(checkVis(footer)){
        foot.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 50%)"
    }else{
        f3.style.visibility = "hidden"
        f3.style.opacity = "0"
        f3.style.transform = "scale(.8,.8)"
        f2.style.visibility = "hidden"
        f2.style.opacity = "0"
        f2.style.transform = "scale(.8,.8)"
        f1.style.visibility = "hidden"
        f1.style.opacity = "0"
        f1.style.transform = "scale(.8,.8)"
        foot.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    }
})
