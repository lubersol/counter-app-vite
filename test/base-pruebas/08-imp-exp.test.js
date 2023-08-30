import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
// eslint-disable-next-line no-unused-vars
import heroes from '../../src/data/heroes';
// eslint-disable-next-line no-undef
describe('Pruebas en 08-imp-exp', () => {
    // eslint-disable-next-line no-undef
    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id)
        // eslint-disable-next-line no-undef
        expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC' });
        
    })

    // eslint-disable-next-line no-undef
    test('getHeroeById debe de retornar undefined si no existe el ID', () => {

        const id = 100;
        const hero = getHeroeById(id)
        // eslint-disable-next-line no-undef
        expect( hero ).toBeFalsy();
        
    })

    // eslint-disable-next-line no-undef
    test('getHeroesByOwner debe retornar los héroes de DC', () => {

        const owner = 'DC' 
        const heroes = getHeroesByOwner( owner );
        // eslint-disable-next-line no-undef
        expect( heroes.length ).toBe(3);
        // eslint-disable-next-line no-undef
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC'},
            { id: 3, name: 'Superman', owner: 'DC'},
            { id: 4, name: 'Flash', owner: 'DC'},
        ]);
        // eslint-disable-next-line no-undef
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner ) )
        
    })
    // eslint-disable-next-line no-undef
    test('getHeroesByOwner debe retornar los héroes de Marvel', () => {

        const owner = 'Marvel' 
        const heroes = getHeroesByOwner( owner );
        // eslint-disable-next-line no-undef
        expect( heroes.length ).toBe(2);
        // eslint-disable-next-line no-undef
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner ) )
        
    })
})