// variable para acumular errores
var acumErrores = 0;

//declaro las variables que obtienen la data del form
var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];
var provincia = document.forms["vform"]["provincia"];

//declaro las variables de errores
var username_error = document.getElementById("username_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
var password_confirmation_error = document.getElementById("password_confirmation_error");
var provincia_error = document.getElementById("provincia_error");

//event listeners
username.addEventListener("blur", nameVerify, true); //blur es para quitar el foco del input
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);
password_confirmation.addEventListener("blur", passwordConfVerify, true);
provincia.addEventListener("blur", provinciaVerify, true);

//funcion de validacion a la que llama el onsubmit del form
//check que los campos no estén vacíos
function Validate() {
    //username
    if(username.value == "") {
        username.style.border = "1px solid red";
        username_error.textContent = "Completar nombre de usuario";
        username_error.classList.add("form-error-style");
        username.focus();
        acumErrores ++;
    }
    //email
    if(email.value == "") {
        email.style.border = "1px solid red";
        email_error.textContent = "Completar el email";
        email_error.classList.add("form-error-style");
        email.focus();
        acumErrores ++;
    } else {
        // \w+   indica que al menos tiene una letra o número (esto es obligatorio)
        // ([\.-]?\w+)*   como puede tener punto o guion ademas de letras y numeros, lo aclaramos pero no es obligatorio. El asterisco indica que puede aparecer cero o varias veces
        //@   porque es obligatorio
        // \w+([\.-]?\w+)*   después del @siempre va algun num o letra y es opcional que haya algun guion o punto
        // (\.\w+   esto indica que el dominio tiene un punto y XX cantidad de letras. 
                    //El + indica que puede haber mas de un .algo (por ej, .com.ar). Si quisiera especificar el máx de letras para el dominio, pondría (\.\w{2,3,4})+, siendo el 2,3,4 la cantidad de caracteres permitidos

        // Creo el patron para comprobar el correo
        var patronEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
            if(email.value.search(patronEmail)!=0) {
                email_error.innerHTML = "Por favor ingrese un email correcto.";
                email_error.classList.add("form-error-style");
            }
    }

    
    //pass
    if(password.value == "") {
        password.style.border = "1px solid red";
        password_error.textContent = "Ingresar contraseña";
        password_error.classList.add("form-error-style");
        password.focus();
        acumErrores ++;
    }
    //pass confirmation
    if(password_confirmation.value =="" || password_confirmation.value != password.value) {
        password_confirmation.style.border = "1px solid red";
        password_confirmation_error.textContent = "Las contraseñas no coinciden";
        password_confirmation_error.classList.add("form-error-style");
        password_confirmation.focus();
        acumErrores ++;
    }
    //provincia
    if(provincia.value == "") {
        provincia.style.border = "1px solid red";
        provincia_error.textContent = "Seleccionar una provincia";
        provincia_error.classList.add("form-error-style");
        provincia.focus();
        acumErrores ++;
    }

    if (acumErrores > 0){
        return false;
    }
}

//funcion de validacion resetea el error
//ver si puedo hacer una única funcionq ue aplique a todos
function nameVerify() {
    if(username.value != "") {
        username.style.border = "1px solid #4c5b0d";
        username_error.innerHTML = "";
        acumErrores = 0;
        return true;
    }
}
function emailVerify() {
    if(email.value != "") {
        email.style.border = "1px solid #4c5b0d";
        email_error.innerHTML = "";
        acumErrores = 0;
        return true;
    }
}
function passwordVerify() {
    if(password.value != "") {
        password.style.border = "1px solid #4c5b0d";
        password_error.innerHTML = "";
        acumErrores = 0;
        return true;
    }
}
function passwordConfVerify() {
    if(password_confirmation.value != "" && password_confirmation.value == password.value) {
        password_confirmation.style.border = "1px solid #4c5b0d";
        password_confirmation_error.innerHTML = "";
        acumErrores = 0;
        return true;
    }
}
function provinciaVerify() {
    if(provincia.value != "") {
        provincia.style.border = "1px solid #4c5b0d";
        provincia_error.innerHTML = "";
        acumErrores = 0;
        return true;
    }
}