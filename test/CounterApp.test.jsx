import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


// eslint-disable-next-line no-undef
describe('Pruebas en <CounterApp />', () => {
    
    const initialValue = 10;
    // eslint-disable-next-line no-undef
    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={ initialValue } />);
        // eslint-disable-next-line no-undef
        expect( container ).toMatchSnapshot()

    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {

        render( <CounterApp value={ 100 } /> );
        // eslint-disable-next-line no-undef
        expect( screen.getByText(100) ).toBeTruthy();    

    });

    // eslint-disable-next-line no-undef
    test('debe de incrementar con el botón +1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        // eslint-disable-next-line no-undef
        expect( screen.getByText(11) ).toBeTruthy();    
        
    });

    // eslint-disable-next-line no-undef
    test('debe de decrementar con el botón -1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') )
        // eslint-disable-next-line no-undef
        expect( screen.getByText(9) ).toBeTruthy();    
        
    });

    // eslint-disable-next-line no-undef
    test('debe de funcionar el botón reset', () => {

        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        // fireEvent.click( screen.getByText('Reset') )

        // eslint-disable-next-line no-undef
        expect( screen.getByText(355) ).toBeTruthy();    
        
    });

});
