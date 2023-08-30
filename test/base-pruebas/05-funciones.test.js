import { getUser } from '../../src/base-pruebas/05-funciones'
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones'



// eslint-disable-next-line no-undef
describe('Pruebas en 05-funciones', () => {
    
    // eslint-disable-next-line no-undef
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser()
        console.log(user);

        // eslint-disable-next-line no-undef
        expect(testUser).toEqual(user)
    
    })

    // eslint-disable-next-line no-undef
    test('getUsuarioActivo debe retornar un usuario', () => {

        const name = 'Lucia'

        const user = getUsuarioActivo(name);
        
        // eslint-disable-next-line no-undef
        expect(user).toEqual({
            uid: 'ABC567',
            username: name,
        })
    
    })
})




