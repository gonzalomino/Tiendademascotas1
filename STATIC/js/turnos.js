//validar datos de formulario Turnos//
function validardatos()
 {
let nombre = document.getElementsByName ("nombre").value.trim()
let apellido = document.getElementsByName ("apellido").value.trim()
let edad = Number.getElementsByName ("edad").value.trim()
let email = email.getElementsByName("email").value.trim
let nombredemascota = document.getElementsByName ("nombredemascota").value.trim
let error= document.getElementById ("campos");
if (nombre=== "" || nombredemascota === ""){
    error.texcontent = "Por favor completar datos para pode r enviar el formulario")
    error.style.color ="red"
    return false
}