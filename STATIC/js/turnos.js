//validar datos de formulario Turnos//
function validardatos()
 {
let nombre = document.getElementsByName ("nombre")
let apellido = document.getElementsByName ("apellido")
let edad = Number.getElementsByName ("edad")
let email = email.getElementsByName("email")
let nombredemascota = document.getElementsByName ("nombredemascota")
if (nombre=== "" || nombredemascota === ""){
    error.texcontent = "Por favor completar datos para poder enviar el formulario"}
 }