window.onload = function(){
    
    // Name validation

    var name = document.getElementById('name');
    name.onblur = function(){
        var space = name.value.indexOf (" ");
        if (space <= 0 ){
            document.getElementById('p-name').style.display = "block";
            document.getElementById('name').style.border = "3px solid red";
        }
    }

    name.onfocus = function(){
        document.getElementById('p-name').style.display = "none";
        document.getElementById('name').style.border = "";

    }

    // Email validation UNDONE

    var email = document.getElementById('email');
    email.onblur = function(){
        
    }
    

    // Password validation

    var password = document.getElementById('password');
    password.onblur = function(){ 
        var letterSum = 0;
        var numberSum = 0;
        
        if (password.value.length < 8 ){
            document.getElementById('p-password').style.display='block';
            document.getElementById('password').style.border = "3px solid red";
        }   else {
                for (var i=0; i< password.value.length; i++ ){
                    if (isNaN(password.value[i])){
                        letterSum += 1;                
                    }   else {
                        numberSum += 1;            
                    }
                }
            }
        if (letterSum == 0 || numberSum == 0){
            document.getElementById('p-password').style.display='block';
            document.getElementById('password').style.border = "3px solid red";
        }    
    }

    password.onfocus = function(){
        document.getElementById('p-password').style.display = "none";
        document.getElementById('age').style.border = "";

    }

    // Age validation

    var age = document.getElementById('age');
    age.onblur = function(){
        if (age.value < 18){
            document.getElementById('p-age-older').style.display = "block";
            document.getElementById('age').style.border = "3px solid red";
        }   else if (age.value % 1 != 0){
            document.getElementById('p-age').style.display = "block";
        }
        
    }

    age.onfocus = function(){
        document.getElementById('p-age-older').style.display ="none";
        document.getElementById('p-age').style.display ="none";
        document.getElementById('age').style.border = "";
    }

    // Telephone Number validation 

    var telNumber = document.getElementById('tel-number');
    telNumberValidation = /^\d{7,14}$/
    telNumber.onblur = function(){
        if(!telNumberValidation.test(telNumber.value)){
            document.getElementById('p-tel-number').style.display = "block";
            document.getElementById('tel-number').style.border = "3px solid red";
            
            
        }   
    }

    telNumber.onfocus = function(){
        document.getElementById('p-tel-number').style.display = "none";
        document.getElementById('tel-number').style.border = "";
    }

    // Adress validation 


    // City validation

    var city = document.getElementById('city');
    city.onblur = function (){
        if (city.value.length <3 ){
            document.getElementById('p-city').style.display= "block";
        }
    }

    city.onfocus = function (){
        document.getElementById('p-city').style.display= "none";
    }

    // Postal code validation

    var postalCode = document.getElementById('postal-code');
    postalCode.onblur = function(){
        if (postalCode.value.length <3){
            document.getElementById('p-postal-code').style.display= "block";
        }
    }

    postalCode.onfocus = function(){
        document.getElementById('p-postal-code').style.display="none";
    }
    





    
}