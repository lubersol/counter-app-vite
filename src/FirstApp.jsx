import PropTypes from 'prop-types';
// import { Fragment } from 'react';

//Es lo mismo <> que <Fragment>, con <> nos ahorramos importar Fragment.

//no se puede pintar newMessage así { newMessage }, hay q poner JSON.stringify

// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Lucia'
// };

// const getSaludo = () => {
//     return 'Hola Lucia'
// }

// eslint-disable-next-line react/prop-types
export const FirstApp = ({ title, subTitle, name }) => {

    return(
        <>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            {/* <h1>{ getSaludo() }</h1> */}
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Lucia Bermejo'
}