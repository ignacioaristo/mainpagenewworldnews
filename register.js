window.onload = function(){
    
    // Name validation

    var name = document.getElementById('name');
    name.onblur = function(){
        var space = name.value.indexOf (" ");
        if (space <= 0 ){
            document.getElementById('p-name').style.display = "block";
        }
    }

    name.onfocus = function(){
        document.getElementById('p-name').style.display = "none";

    }

    // Email validation undone

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
        }    
    }

    password.onfocus = function(){
        document.getElementById('p-password').style.display = "none";

    }

    // Age validation

    var age = document.getElementById('age');
    age.onblur = function(){
        if (age.value < 18){
            document.getElementById('p-age-older').style.display = "block";
        }   else if (age.value % 1 != 0){
            document.getElementById('p-age').style.display = "block";
        }
        
    }

    age.onfocus = function(){
        document.getElementById('p-age-older').style.display ="none";
        document.getElementById('p-age').style.display ="none";
    }

    // Telephone Number validation

    var telNumber = document.getElementById('tel-number');
    






    
}