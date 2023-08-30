import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

// eslint-disable-next-line no-undef
describe('Pruebas en 07-deses-arr', () => {
    // eslint-disable-next-line no-undef
    test('Debe de retornar un string y un número', () => {
        const [ letters, numbers ] = retornaArreglo();

        // eslint-disable-next-line no-undef
        expect( letters ).toBe('ABC');
        // eslint-disable-next-line no-undef
        expect( numbers ).toBe(123);
        // eslint-disable-next-line no-undef
        expect( typeof letters ).toBe('string');
        // eslint-disable-next-line no-undef
        expect( typeof numbers ).toBe('number');
         // eslint-disable-next-line no-undef
         expect( letters ).toEqual( expect.any(String) );
    })
})