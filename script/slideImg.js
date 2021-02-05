/*$(document).ready(function(){ 
       
    $("#slide > div:gt(0)").hide(); 
    setInterval(function() { 
      $('#slide > div:first')
        .fadeOut(200)
        .next()
        .fadeIn(2500)
        .end()
        .appendTo('#slide');
    },  5000); 
})*/


let index = 0;
let interval = null
document.addEventListener("DOMContentLoaded",function(){
    selectImg(index);
    interval = setInterval(() =>{
        avanti();
    }, 3000)
})//addEventListener

let artisti = [
    {
        src:"img/bruno-mars.jpg",
        h2:"BRUNO MARS",
        h3:"ROMA-Circo Massimo 19/05/20"
    },
    {
        src:"img/katy-perry.jpg",
        h2:"KATY PERRY",
        h3:"ROMA-Circo Massimo 19/05/20"
    },
    {
        src:"img/justin-biber.jpg",
        h2:"JUSTIN BIBER",
        h3:"ROMA-Circo Massimo 19/05/20"
    },
    {
        src:"img/mr-rain.jpg",
        h2:"MR. RAIN",
        h3:"ROMA-Circo Massimo 20/05/20"
    },
    {
        src:"img/fedez.jpg",
        h2:"FEDEZ",
        h3:"ROMA-Circo Massimo 20/05/20"
    },
    {
      src:"img/sfera-ebbasta.jpg",
      h2:"SFERA EBBASTA",
      h3:"ROMA-Circo Massimo 20/06/20"
    },
    {
      src:"img/imagine-dragons.jpg",
      h2:"IMAGINE DRAGONS",
      h3:"ROMA-Circo Massimo 21/06/20"
    },
    {
      src:"img/maroon-5.jpg",
      h2:"MAROON 5",
      h3:"ROMA-Circo Massimo 21/06/20"
    },
    {
      src:"img/black-pink.jpg",
      h2:"BLACK PINK",
      h3:"ROMA-Circo Massimo 21/06/20"
  },
  
]

function selectImg(index) {
    document.getElementById('foto').src =artisti[index].src;
    document.getElementById('textSlide').innerText = artisti[index].h2;
    document.getElementById('textSlideA').innerText = artisti[index].h3;
}

function avanti(clicked) {
    fixInterval(clicked)
    if(index === artisti.length -1) {
        index = 0;
        selectImg(index);
    }else{
        index++;
        selectImg(index)
    }  
    
}
function indietro(clicked){
    fixInterval(clicked)
    if(index === 0){
        index = artisti.length-1;
        selectImg(index)
    }else{
        index--;
        selectImg(index)
    }
}
function fixInterval(clicked){
    if(clicked) {
        clearInterval(interval);
        interval = setInterval(() => {
            avanti();
        }, 3000)
    }
}


