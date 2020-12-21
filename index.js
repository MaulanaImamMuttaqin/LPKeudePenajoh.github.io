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
    let navButton = document.querySelector(".control");
    let arrow = document.getElementById("arrow");
    if(navButton.style.transform === "rotate(0deg)"){
        navButton.style.transform = "rotate(-180deg)"
        arrow.style.transform = "rotate(0deg)"
    }else{
        navButton.style.transform = "rotate(0deg)"
        arrow.style.transform = "rotate(180deg)"
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
let footer = document.querySelector(".logo-footer img");
let foot = document.querySelector(".footer")

document.addEventListener('scroll', function(){
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
