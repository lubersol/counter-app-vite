import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


// eslint-disable-next-line no-undef
describe('Pruebas en <FirstApp />', () => {

    const title    = 'Hola, soy Lucía';
    const subTitle = 'Soy un subtítulo';
    // eslint-disable-next-line no-undef
    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } />);
        // eslint-disable-next-line no-undef
        expect( container ).toMatchSnapshot()
    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar el mensaje "Hola, soy Lucía"', () => {

        render( <FirstApp title={ title } />);
        // screen.debug(); Es para ver el objeto
        // eslint-disable-next-line no-undef
        expect( screen.getByText(title) ).toBeTruthy();
    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar el título en un h1', () => {

        render( <FirstApp title={ title } />);
        // eslint-disable-next-line no-undef
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar el subtítulo enviado por props', () => {

        render( 
            <FirstApp 
                title={ title } 
                subTitle={ subTitle }
            />
        );
        // eslint-disable-next-line no-undef
        expect( screen.getAllByText(subTitle).length ).toBe(2);
        
    });
    
});
