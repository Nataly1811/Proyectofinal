/*let nombreUsuario = prompt ("ingresarnombre de usuario")
let contrasenia = prompt ("ingresa tu contrasena")

if ((nombreUsuario == "Nataly") && (contrasenia == 12345)) {
    alert ("Bienvenido Nataly")
} else { 
    alert ("Nombre de Usuario y/o Contrasena incorrectos")
}*/

/*let entrada = prompt("Ingresar Nombre")
let numeroDedocumento = prompt ("Ingresar Numero de Documento")
alert (" Bienvenido " +   entrada)*/

let entrada1 = prompt("Ingresar Nombre")
let entrada2 = prompt ("Ingresar Edad")
alert (" Hola " +   entrada1 )

let entrada = prompt ("Ingresar Nombre")
const clientes = []
while (entrada !="Voldemort")
{
clientes.push (entrada)
entrada = prompt ("Ingresar Nombre")
}
