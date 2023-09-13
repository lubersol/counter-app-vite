import { getImagen } from "../../src/base-pruebas/11-async-await";


// eslint-disable-next-line no-undef
describe('Pruebas en 11-async-await.js', () => {

    // eslint-disable-next-line no-undef
    test('getImagen debe de retornar un error si no tenemos api key ', async() => {
        const resp = await getImagen();

        // eslint-disable-next-line no-undef
        expect( resp ).toBe('No se encontró la imagen')
        
    });

});
