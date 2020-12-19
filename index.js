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



window.addEventListener("scroll", function(){
    if(window.scrollY !== 0){
        document.getElementById("navbar").style.boxShadow= "-1px 1px 13px -5px rgba(0,0,0,0.75)";
    }else{
        document.getElementById("navbar").style.boxShadow= "none";
    }
});

const checkVis = function(element){
    const el = element.getBoundingClientRect()

    return (
        el.top >= 0 &&
        el.left >= 0 &&
        el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        el.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
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