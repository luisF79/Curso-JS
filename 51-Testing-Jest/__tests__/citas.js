import Citas from "../js/classes/Citas.js";


describe('Probar la clase de citas', () => {

    const citas = new Citas()

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '45345346534534',
            fecha: '10-12-2025',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }
    })

    citaObj.id = Date.now()

    citas.agregarCita(citaObj)

    // Prueba 
    expect(citas).toMatchSnapshpt()
})