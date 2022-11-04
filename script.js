document.getElementById("btn_registrarse").addEventListener("click", register);
document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
document.querySelector(".formulario_login").addEventListener("submit", login);


//Declaraciones
let contenedor_login_register = document.querySelector(".contenedor_login-register");
let formulario_login = document.querySelector(".formulario_login");
let formulario_register = document.querySelector(".formulario_register");
let caja_fondo_login = document.querySelector(".caja_fondo-login");
let caja_fondo_register = document.querySelector(".caja_fondo-register");

function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_fondo_register.style.opacity = "0";
    caja_fondo_login.style.opacity = "1";
}

function iniciarSesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0";
    formulario_login.style.display = "block";
    caja_fondo_register.style.opacity = "1";
    caja_fondo_login.style.opacity = "0";
}

//Validación de Inicio de Sesión
//validar usuario y contraseña   
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Por favor ingresá una dirección de mail correcta");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

// Cuenta regresiva para sección TV

let fechaCuentaRegresiva = new Date("Ene 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let cuentaRegresiva = setInterval(function() {

  // Get todays date and time
  let ahora = new Date().getTime();
  
  // Find the distance between now an the count down date
  let distancia = fechaCuentaRegresiva - ahora;
  
  // Time calculations for days, hours, minutes and seconds
  let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("tiempoRestante").innerHTML = dias + "d " + horas + "h "
  + minutos + "m " + segundos + "s ";
  
  // If the count down is over, write some text 
  if (distancia < 0) {
    clearInterval(countdownfunction);
    document.getElementById("tiempoRestante").innerHTML = "YA ESTÁ LLEGANDO!";
  }
}, 1000);
