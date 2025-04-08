// Constructor Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa
    }
}

const persona = new Persona('Toño', 'toño@correo.com')
console.log(persona);

const cliente = new Cliente('Juan', 'correo@correo.com', 'Código Con Juan')
console.log(cliente);
 