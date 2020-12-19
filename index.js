function showImage(gambar){
    document.getElementById("main-title").style.display="none";
    document.getElementById(gambar).style.display = "block";
    document.getElementById(gambar).style.animation = "imageShow .3s ease";
   
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


function ClickTo(param){
    let main = document.getElementById("main").getBoundingClientRect().height;
    let second = document.getElementById("second").getBoundingClientRect().height;
    let third = document.getElementById("third").getBoundingClientRect().height;
    let topVal = 0
    if(param == "second"){
        topVal = main;
    }else if(param == "third"){
        topVal = main + second + 1/6* third;
    }
    window.scrollTo({
        top: topVal,
        behavior: 'smooth'
    })
}

// const f1 = document.querySelector("#f1");
// const f2 = document.querySelector("#f2");
// const f3 = document.querySelector("#f3");
// console.log(document.getElementById("second").getBoundingClientRect())
// console.log(document.getElementById("third").getBoundingClientRect())

// document.addEventListener('scroll', function(){
//     if(checkVis(f3)){
//         console.log("feature 3 muncul")
        
//     }else if(checkVis(f2)){
//         console.log("feature 2 muncul")
//         console.log(f2.getBoundingClientRect())
//     }else if(checkVis(f1)){
//         console.log("feature 1 muncul")
//     }
// })
// const checkVis = function(element){
//     const el = element.getBoundingClientRect()

//     return (
//         el.top >= 0 &&
//         el.left >= 0 &&
//         el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         el.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }