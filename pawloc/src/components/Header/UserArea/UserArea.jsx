import React from 'react';
import Link from 'react-router-dom/Link';

import withRouter from 'react-router-dom/withRouter';

const UserArea = ({location}) => (
    <>
    {location.pathname === '/' ? 'No has ingresado' : 'Estás adentro'}
   
    <Link to="/login">
        <button>Entrar</button>
    </Link>
    </>
);

export default withRouter(UserArea);