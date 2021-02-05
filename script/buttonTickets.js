function buttonTicket(){
    window.open("https://www.ticketone.it/", "_blank");
}
function buttonDirection(){
    window.open("https://www.google.com/maps/place/Via+del+Circo+Massimo,+Roma+RM/@41.885296,12.4830313,17z/data=!4m5!3m4!1s0x132f61cb23b13dcd:0x66804ce74d939c13!8m2!3d41.885296!4d12.48522", "_blank")
}
function buttonSocialF(){
    window.open("https://www.facebook.com/", "_blank");
}
function buttonSocialT(){
    window.open("https://twitter.com/", "_blank");
}
function buttonSocialI(){
    window.open("https://www.instagram.com/", "_blank");
}
function buttonSocialY(){
    window.open("https://www.youtube.com/", "_blank");
}

function buttonMenu(){
    var menu = document.getElementById("topNav");

    
    
    console.log(menu);
    if(menu.style.display === "none"){
        
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
    
    
}
    
    



