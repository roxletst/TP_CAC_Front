console.log ("ahhhhh")

/* cuentas */
// $(document).ready(function(){
//     $('#goRight').on('click', function(){
//       $('#slideBox').animate({
//         'marginLeft' : '0'
//       });
//       $('.topLayer').animate({
//         'marginLeft' : '100%'
//       });
//     });
//     $('#goLeft').on('click', function(){
//       $('#slideBox').animate({
//         'marginLeft' : '50%'
//       });
//       $('.topLayer').animate({
//         'marginLeft': '0'
//       });
//     });
//   });

/* login */

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
function login() {
    //validar usuario y contraseña
}