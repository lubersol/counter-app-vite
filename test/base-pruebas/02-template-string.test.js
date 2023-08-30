import { getSaludo } from '../../src/base-pruebas/02-template-string'


// eslint-disable-next-line no-undef
describe('Pruebas en 02-template-string', () => {
    // eslint-disable-next-line no-undef
    test('getSaludo debe retornar "Hola Lucia', ()=> {
        const name = 'Lucia';
        const saludo = getSaludo(name);
        
        // eslint-disable-next-line no-undef
        expect( saludo ).toBe( `Hola ${name}` )
        
    })
});