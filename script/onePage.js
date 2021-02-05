$(document).ready(function(){

    $("nav a").click(function(e){
        e.preventDefault()
        var link = $(this)
        var div = $(this.hash)
        $("html,body").animate({scrollTop:div.offset().top
        },500);

    })//.click

    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })//.click .top

    $(document).scroll(function(){
        if($(document).scrollTop()>400) {
            $(".top").css("bottom","35px");
        }
        else{
            $(".top").css("bottom","-100px")
        }
        
    });//.scroll

  

})//.ready


