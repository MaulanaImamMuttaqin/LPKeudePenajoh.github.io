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

let pos = 1

function historyAr(dir){
    console.log(dir)
    pos = pos+dir
    if(pos > 3){
        pos = 1
    }else if(pos < 1){
        pos = 3
    }
    let hist = document.querySelectorAll(".hist");
    hist.forEach(x => {
        if(x.id === `h${pos}`){
           x.style.display ="block"
        }
        else{
            x.style.display ="none"
        }
    })

}


let feature = document.querySelectorAll(".feature");
let footer = document.querySelector(".logo-footer img");
let foot = document.querySelector(".footer");

document.addEventListener('scroll', function(){
    feature.forEach(f => {
        if(checkVis(f)){
            f.style.visibility = "visible"
            f.style.opacity = "1"
            f.style.transform = "scale(1,1)"
        }else{
            f.style.visibility = "hidden"
            f.style.opacity = "0"
            f.style.transform = "scale(.8,.8)"
        }
    })
    if(checkVis(footer)){
        foot.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 50%)"
    }else{
        foot.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    }

})