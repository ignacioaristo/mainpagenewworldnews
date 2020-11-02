window.onload = function(){
    var validations = [];
    // Name validation

    var name = document.getElementById('name');
    function validateName(){  
        var space = name.value.indexOf (" ");  
        if (name.value.length <= 6 || space <=0){
            return true;
        } else {
            return false;         
        }
    }
    name.onblur = function(){
        if (validateName(name.value)){
            document.getElementById('p-name').style.display = "block";
            document.getElementById('name').style.border = "3px solid red";   
        } else {
            document.getElementById('name').style.border = "3px solid green";
        }
    }

    name.onfocus = function(){
        document.getElementById('p-name').style.display = "none";
        document.getElementById('p-name-length').style.display = "none";
        document.getElementById('name').style.border = "";
    }

    // Email validation
    var email = document.getElementById('email');
    function emailValidation(){
        emailExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(!emailExp.test(email.value)){
            return true;
        }   else{
            return false;
        }
    }

    email.onblur = function(){
        if (emailValidation(email.value)){
            document.getElementById('p-email').style.display="block";
            document.getElementById('email').style.border = "3px solid red";
        }else {
            document.getElementById('email').style.border = "3px solid green";
        }
    }

    email.onfocus = function(){
        document.getElementById('p-email').style.display="none";
        document.getElementById('email').style.border = "";
    }

    // Password validation

    var password = document.getElementById('password');
    function passwordValidation(){
        var letterSum = 0;
        var numberSum = 0;
    
        if (password.value.length < 8 ){
            return true;
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
            return true;
        }   else {
            return false;
        }
    }

    password.onblur = function(){ 
        if (passwordValidation(password.value)){
            document.getElementById('p-password').style.display='block';
            document.getElementById('password').style.border = "3px solid red";
        }   else {
            document.getElementById('password').style.border = "3px solid green";   
        }
    }

    password.onfocus = function(){
        document.getElementById('p-password').style.display = "none";
        document.getElementById('age').style.border = "";
    }

    // Age validation

    var age = document.getElementById('age');
    function ageValidation(){
        if (age.value < 18){
            return true;
        }   else if (age.value % 1 != 0){
            return true;
        }   else{
            return false;
        }   
    }
    
    age.onblur = function(){
        if (ageValidation(age.value)){
            document.getElementById('p-age-older').style.display = "block";
            document.getElementById('age').style.border = "3px solid red";
        }   else {
            document.getElementById('age').style.border = "3px solid green";
        }
    }

    age.onfocus = function(){
        document.getElementById('p-age-older').style.display ="none";
        document.getElementById('p-age').style.display ="none";
        document.getElementById('age').style.border = "";
    }

    // Telephone Number validation 

    var telNumber = document.getElementById('tel-number');
    function telValidation(){
        telNumberExp = /^\d{7,14}$/
        if(!telNumberExp.test(telNumber.value)){
            return true;
        }   else{
            return false;
        }
    }
    
    telNumber.onblur = function(){
        if (telValidation(telNumber.value)){
            document.getElementById('p-tel-number').style.display = "block";
            document.getElementById('tel-number').style.border = "3px solid red";   
        }   else{
            document.getElementById('tel-number').style.border = "3px solid green";
        }
    }

    telNumber.onfocus = function(){
        document.getElementById('p-tel-number').style.display = "none";
        document.getElementById('tel-number').style.border = "";
    }

    // Adress validation

    var adress = document.getElementById('adress');
    
    function adressValidation(){
        var space = adress.value.indexOf (" ");
        var letterSumAdress = 0;
        var numberSumAdress = 0;
        if (adress.value.length<5){
            return true;
        }   else if(space <= 0){
            return true;
        }   else {
            for ( j=0; j< adress.value.length; j++ ){
                if (isNaN(adress.value[j])){
                    letterSumAdress += 1;                
                }   else {
                    numberSumAdress += 1;            
                }
            }
        }
        if (letterSumAdress == 0 || numberSumAdress == 0){
            return true;
        }   else {
            return false;            
        } 
    }
    
    adress.onblur = function (){
        if (adressValidation(adress.value)){
            document.getElementById('p-adress').style.display= "block";
            document.getElementById('adress').style.border = "3px solid red";
        }   else {
            document.getElementById('adress').style.border = "3px solid green";
        }
    }

    adress.onfocus = function(){
        document.getElementById('p-adress').style.display= "none";
        document.getElementById('adress').style.border = "";
    }

    // City validation

    var city = document.getElementById('city');
    function cityValidation(){
        if (city.value.length <3 ){
            return true;
        }   else {
            return false;
        }
    }
    
    city.onblur = function (){
        if (cityValidation(city.value)){
            document.getElementById('p-city').style.display= "block";
            document.getElementById('city').style.border = "3px solid red";
        }   else {
            document.getElementById('city').style.border = "3px solid green";
        }
    }

    city.onfocus = function (){
        document.getElementById('p-city').style.display= "none";
        document.getElementById('city').style.border = "";
    }

    // Postal code validation

    var postalCode = document.getElementById('postal-code');
    function postalCodeValidation(){
        if (postalCode.value.length <3){
            return true;
        }   else {
            return false;
        }
    }
    postalCode.onblur = function(){
        if (postalCodeValidation(postalCode.value)){
            document.getElementById('p-postal-code').style.display= "block";
            document.getElementById('postal-code').style.border = "3px solid red";
        }   else {
            document.getElementById('postal-code').style.border = "3px solid green";
        }
    }

    postalCode.onfocus = function(){
        document.getElementById('p-postal-code').style.display="none";
        document.getElementById('postal-code').style.border = "";
    }
    
    // DNI validation

    var dni = document.getElementById('dni');
    function dniValidation(){
        if (dni.value.length > 8){
            return true;
        }   else if (dni.value.length <6){
            return true;
        }   else{
            return false;
        }
    }
    dni.onblur = function(){
        if(dniValidation(dni.value)){
            document.getElementById('p-dni').style.display= "block";
            document.getElementById('dni').style.border = "3px solid red";
        }   else{   
            document.getElementById('dni').style.border = "3px solid green";
        }
    }

    dni.onfocus = function(){
        document.getElementById('p-dni').style.display="none";
        document.getElementById('dni').style.border = "";
    }

    // Button validation

    var button = document.getElementById('button');

    button.onclick = function(){
        var errors ="";
        if(!validateName){
            errors += "Full name, "
        }
        if(!emailValidation){
            errors += "Email, "
        }
        if(!passwordValidation){
            errors += "Password, "
        }
        if(!ageValidation){
            errors += "Age, "
        }
        if(!telValidation){
            errors += "Telephone Number, "
        }
        if(!adressValidation){
            errors += "Adress, "
        }
        if(!cityValidation){
            errors += "City, "
        }
        if(!postalCodeValidation){
            errors += "Postal Code, "
        }
        if(!dniValidation){
            errors += "DNI, "
        }
        
        if (validateName && emailValidation && passwordValidation && ageValidation && telValidation && adressValidation && cityValidation && postalCodeValidation && dniValidation){
            alert(
            "Full name: " + name.value + "\n" +
            "Email: " + email.value + "\n" +
            "Password: " + password.value + "\n" +
            "Age: " + age.value + "\n" +
            "Telephone Number " + telNumber.value + "\n" +
            "Adress: " + adress.value + "\n" +
            "City " + city.value + "\n" +
            "Postal Code " + postalCode.value + "\n" +
            "DNI: " + dni.value);
        }
        else {
            console.log("Please check the following fields" + errors);
        }     
    }   


    
}