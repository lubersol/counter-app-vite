import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

// eslint-disable-next-line no-undef
describe('Pruebas en 09-promesas', () => {
    // eslint-disable-next-line no-undef
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                // eslint-disable-next-line no-undef
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
            });    

            done();
    });
    // eslint-disable-next-line no-undef
    test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {

                // eslint-disable-next-line no-undef
                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
        });
              
    });
});