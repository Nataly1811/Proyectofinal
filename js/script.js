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

/*let entrada1 = prompt("Ingresar Nombre")
let entrada2 = prompt ("Ingresar Edad")
alert (" Hola " +   entrada1 )

let entrada = prompt ("Ingresar Nombre")
const clientes = []
while (entrada !="Voldemort")
{
clientes.push (entrada)
entrada = prompt ("Ingresar Nombre")
}*/

/*function CostoProducto (tipo, precios) {
        this.tipo;
        this.precios;
    }*/
class Comidas {
    constructor (tipo, Precio) {
            this.tipo = tipo
            this.precio = precio
}
Descuentos (){
    let PorcentajeDeDescuento = Number (prompt("Ingresa tu porcentaje de descuento"))
    let nuevoValor = this.precio - ((PorcentajeDeDescuento * this.precio)/ 100)
    alert ("Con tu descuento la comida "+ "this.tipo"+ "te sale en" + "nuevoValor" + "dolares")

}
}
    const comida1 = new Comidas("hamburguesaWopperSencilla", "3$")
    const comida2 = new Comidas("hamburguesasPequeñas", "3$")
    const comida3 = new Comidas("hamburguesaSencilla1contorno", "4$")
    const comida4 = new Comidas("hamburguesaEspecial1contorno", "7$")
    const comida5 = new Comidas("hamburguesaSencillaMaracucha", "4$")
    const comida6 = new Comidas("hamburguesaEspecialMaracucha", "3$")
  
comida1.Descuentos ()


/*for (const comida1 in object) {
    if (Object.hasOwnProperty.call(object, comida1)) {
        const element = object[comida1];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
    }
}   
}*/


/*class hamburguesa1 {
    constructor(hamburguesaWopperSencilla, hamburguesasPequeñas, hamburguesaSencilla1contorno, hamburguesaEspecial1contorno, hamburguesaSencillaMaracucha, hamburguesaEspecialMaracucha, precio) {
        this.hamburguesaWopperSencilla = hamburguesaWopperSencilla;
        this.hamburguesasPequeñas = hamburguesasPequeñas;
        this.hamburguesaSencilla1contorno = hamburguesaSencilla1contorno;
        this.hamburguesaEspecial1contorno = hamburguesaEspecial1contorno;
        this.hamburguesaSencillaMaracucha = hamburguesaSencillaMaracucha;
        this.hamburguesaEspecialMaracucha = hamburguesaEspecialMaracucha;
        this.precio
}

/* alert("la" + "this.hamburguesawopperSencilla" + "sale en" + "this.precios")
alert("la" + "this.hamburguesaspequeñas" + "sale en "+ "this.precios")
alert("la" + "this.hamburguesaSencilla1contorno" + "sale en" + "this.precios")
alert("la" + "this.hamburguesaEspecial1contorno" + "sale en" + "this.precios")
alert("la" + "this.hamburguesaSencillaMaracucha" + "sale en" + "this.precios")
alert("la" + "this.hamburguesaEspecialMaracucha" + "sale en" + "this.precios")*/