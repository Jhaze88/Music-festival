document.addEventListener("DOMContentLoaded",function(){
   
    
function controlNewsEmail(email)  {
    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    if(
        email == '' || email == undefined || !regEmail.test(email) 
    ){return false}
        else{ return true}
}// function controlEmail

function controlNewsLogin(login){
    var regNumber = /^\d+$/;
    var login = document.getElementById("login").value;
    if(
        login.length < 3 || login == '' || login == undefined || regNumber.test(login)
    ){return false}
        else{return true}
}// function controlLogin

function controlCheckbox(){
    var checkbox = document.getElementById("rd1");
    
    if(checkbox == ''){
        return false
    }else{
        return true}   
}// function controlCheckbox
console.log(controlCheckbox());


    var bottone = document.getElementById("btnNews");

bottone.onclick=function(){
    
    
    var resultLogin = document.getElementById("resultL");
    var resultEmail = document.getElementById("resultE");
    var homepage = document.getElementById('popup');
    ;
    
    if(controlNewsLogin(login)){
        resultLogin.innerHTML = "Nome valido"; 
        resultLogin.style.color="green"
        
    }
    else{
         resultLogin.innerHTML = "Nome non valido";
         resultLogin.style.color="red"
         
         
    }
    if (controlNewsEmail(email)){
        resultEmail.innerHTML = "Email valido"; 
        resultEmail.style.color="green"
    }
    else{
        alert(" compilare i seguenti campi ")
        resultEmail.innerHTML = "Email non valido";
        resultEmail.style.color="red"
    }
    if(controlCheckbox(email,login)){
        alert("grazie per la registrazione");
        homepage.style="display:none";
          
    }
    else{
        alert(" “è necessario dare il consenso al trattamento dei dati”")
          
    }
    
    
}//.onclick


$('.popupApri,.popupF').click(function(e) {
    $('#popup').fadeIn(500);
    $('#email,#login').val("")
       e.preventDefault();
  });

  $('.popupChiuso').click(function(e) {
    $('#popup').fadeOut(500);
         e.preventDefault();
  })//.click


})//.addEventListener
