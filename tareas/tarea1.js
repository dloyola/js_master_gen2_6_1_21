function paridad(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}

function posicionEnString(char) {
    var string = new String("abcdefghijklmnñopqrstuvwxyz");
    var index = string.indexOf(char)
    if (index >= 0) {
        return index;
    } else {
        return "no se encontró el patrón";
    }
}

function agregarIVA(precioBruto) {
    var precioNeto = precioBruto * 1.19;
    return "El precio con impuestos es de $" + precioNeto;
}

function nuevoDado(nombre) {
    return function() {
        var numero = Math.floor(Math.random() * (7 - 1)) + 1;
        return nombre + " tiró un dado y salio " + numero;
    }
}

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function() {
    window.localStorage.setItem(this.nombre, this.edad);
}

Persona.prototype.guardarEnSessionStorage = function() {
    window.sessionStorage.setItem(this.nombre, this.edad);
}

// llamado de funciones

console.log("Ejecicio 1: " + paridad(10));
console.log("Ejecicio 2: " + posicionEnString('e'));
console.log("Ejecicio 3: " + agregarIVA(1000));
var dado = nuevoDado('julio');
console.log("Ejecicio 4: " + dado());

persona = new Persona("David Loyola", 33);
console.log("Ejecicio 5: guardando en local storage ...");
persona.guardarEnLocalStorage();
console.log("Ejecicio 5: guardando en session storage ...");
persona.guardarEnSessionStorage();

