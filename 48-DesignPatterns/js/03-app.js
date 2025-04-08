//Singleton

let instancia = null

class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre
            this.email = email
            instancia = this
        } else {
            instancia
        }
    }
}


const persona = new Persona('Juan', 'correo@correo.com')
console.log(persona);

const persona2 = new Persona('Karen', 'Karen@correo.com')
console.log(persona2);
