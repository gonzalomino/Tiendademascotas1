//validar datos de formulario Turnos//
function validarDatos()
 {
let nombre = document.getElementsByName ("nombre").value.trim()
let apellido = document.getElementsByName ("apellido").value.trim()
let edad = document.getElementsByName ("edad").value.trim()
let email = document.getElementsByName("email").value.trim
let nombredemascota = document.getElementsByName ("nombredemascota").value.trim
let error= document.getElementById ("campos");
if (nombre=== "" || nombredemascota === ""){
    error.texcontent = "Por favor completar datos para pode r enviar el formulario")
    error.style.color ="red"
    return false
}