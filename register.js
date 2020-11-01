window.onload = function(){
    var validations = [];
    // Name validation

    var name = document.getElementById('name');
    name.onblur = function(){
        var space = name.value.indexOf (" ");
        if (name.value.length <= 6){
            document.getElementById('p-name-length').style.display = "block";
            document.getElementById('name').style.border = "3px solid red";
        }else if(space <= 0){
            document.getElementById('p-name').style.display = "block";
            document.getElementById('name').style.border = "3px solid red";
        } else {
            document.getElementById('name').style.border = "3px solid green";
            nameValidation = true;
            validations[0]=(name.value);
        }
    }

    name.onfocus = function(){
        document.getElementById('p-name').style.display = "none";
        document.getElementById('p-name-length').style.display = "none";
        document.getElementById('name').style.border = "";
    }

    // Email validation
    var email = document.getElementById('email');
    emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function(){
        if(!emailValidation.test(email.value)){
            document.getElementById('p-email').style.display="block";
            document.getElementById('email').style.border = "3px solid red";
        }   else{
            document.getElementById('email').style.border = "3px solid green";
            emailValidation = true;
            validations[1]=email.value;
        }
    }

    email.onfocus = function(){
        document.getElementById('p-email').style.display="none";
        document.getElementById('email').style.border = "";

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
        }   else {
            document.getElementById('password').style.border = "3px solid green";
            passwordValidation = true;
            validations[2]=password.value;
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
            document.getElementById('age').style.border = "3px solid red";
        }   else{
            document.getElementById('age').style.border = "3px solid green";
            ageValidation = true;
            validations[3]= age.value;
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
        }   else{
            document.getElementById('tel-number').style.border = "3px solid green";
            telValidation = true;
            validations[4]= telNumber.value;
        }
    }

    telNumber.onfocus = function(){
        document.getElementById('p-tel-number').style.display = "none";
        document.getElementById('tel-number').style.border = "";
    }

    // Adress validation

    var adress = document.getElementById('adress');

    adress.onblur = function (){
        var space = adress.value.indexOf (" ");
        var letterSum = 0;
        var numberSum = 0;
        if (adress.value.length<5){
            document.getElementById('p-adress').style.display= "block";
            document.getElementById('adress').style.border = "3px solid red";
        }   else if(space <= 0){
            document.getElementById('p-adress').style.display = "block";
            document.getElementById('adress').style.border = "3px solid red";
        }   else {
            for ( j=0; j< adress.value.length; j++ ){
                if (isNaN(adress.value[j])){
                    letterSum += 1;                
                }   else {
                    numberSum += 1;            
                }
            }
        }
        if (letterSum == 0 || numberSum == 0){
            document.getElementById('p-adress').style.display= "block";
            document.getElementById('adress').style.border = "3px solid red";
        }   else {
            document.getElementById('adress').style.border = "3px solid green";
            adressValidation = true;
            validations[5]= adress.value;
        }

    }

    adress.onfocus = function(){
        document.getElementById('p-adress').style.display= "none";
        document.getElementById('adress').style.border = "";
    }

    // City validation

    var city = document.getElementById('city');
    city.onblur = function (){
        if (city.value.length <3 ){
            document.getElementById('p-city').style.display= "block";
            document.getElementById('city').style.border = "3px solid red";
        }   else {
            document.getElementById('city').style.border = "3px solid green";
            cityValidation = true;
            validations[6]= city.value;
        }
    }

    city.onfocus = function (){
        document.getElementById('p-city').style.display= "none";
        document.getElementById('city').style.border = "";
    }

    // Postal code validation

    var postalCode = document.getElementById('postal-code');
    postalCode.onblur = function(){
        if (postalCode.value.length <3){
            document.getElementById('p-postal-code').style.display= "block";
            document.getElementById('postal-code').style.border = "3px solid red";
        }   else {
            document.getElementById('postal-code').style.border = "3px solid green";
            codeValidation = true;
            validations[7]=postalCode.value;
        }
    }

    postalCode.onfocus = function(){
        document.getElementById('p-postal-code').style.display="none";
        document.getElementById('postal-code').style.border = "";
    }
    
    // DNI validation

    var dni = document.getElementById('dni');
    dni.onblur = function(){
        if (dni.value.length == 7 || dni.value.length ==8){
            document.getElementById('dni').style.border = "3px solid green";
            dnieValidation = true;
            validations[8]= dni.value;
        }   else {
            document.getElementById('p-dni').style.display= "block";
            document.getElementById('dni').style.border = "3px solid red";
        }
    }

    dni.onfocus = function(){
        document.getElementById('p-dni').style.display="none";
        document.getElementById('dni').style.border = "";
    }


    // Button validation

   
    var button = document.getElementById('button');

    button.onclick = function(){
        if (nameValidation && emailValidation && passwordValidation && ageValidation && telValidation && adressValidation && cityValidation && codeValidation && dnieValidation){
            alert(validations.join("\n"));
        }
    }

    

    
}