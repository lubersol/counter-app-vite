import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


// eslint-disable-next-line no-undef
describe('Pruebas en <FirstApp />', () => {

    // eslint-disable-next-line no-undef
    // test('Debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Lucía'
    //     const {container} = render( <FirstApp title={ title }/> )

    //     // eslint-disable-next-line no-undef
    //     expect( container ).toMatchSnapshot();

    // });
    // eslint-disable-next-line no-undef
    test('debe de mostrar el título en un h1', () => {
        const title = 'Hola, soy Lucía'
        // eslint-disable-next-line no-unused-vars
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> )
        
        // eslint-disable-next-line no-undef
        expect( getByText(title) ).toBeTruthy();
        // eslint-disable-next-line no-undef
        expect( getByTestId('test-title').innerHTML ).toContain(title);

        // const h1 = container.querySelector('h1');
        // eslint-disable-next-line no-undef
        // expect(h1.innerHTML).toContain( title );

    });

    // eslint-disable-next-line no-undef
    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Lucía'
        const subTitle = 'Soy un subtítulo'
        const { getAllByText } = render( 
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        // eslint-disable-next-line no-undef
        expect( getAllByText(subTitle).length ).toBe(2);
    });
})
