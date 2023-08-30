//TODO:TERMINAR test, ESTÁ INCOMPLETO

import { usContext } from '../../src/base-pruebas/06-deses-obj'


// eslint-disable-next-line no-undef
describe('Prueba debe retornar un objeto', () => {

    // eslint-disable-next-line no-undef
    test('usContext debe retornar un objeto', () => {
        const data = {
            idUsuario: 12345789,
            anios: 47,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        // eslint-disable-next-line no-unused-vars
        const usuario = usContext(data)

        // eslint-disable-next-line no-undef
        expect(data).toEqual(usuario)

    })
})