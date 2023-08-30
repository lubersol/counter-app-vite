
// eslint-disable-next-line no-undef
describe('Pruebas en <DemoComponent />', () => {
    // eslint-disable-next-line no-undef
    test('Esta prueba no debe fallar', ()=> {
        const message1 = 'Hola Mundo'

        const message2 = message1.trim()

        // eslint-disable-next-line no-undef
        expect( message1 ).toBe( message2 )
        
    })
});
