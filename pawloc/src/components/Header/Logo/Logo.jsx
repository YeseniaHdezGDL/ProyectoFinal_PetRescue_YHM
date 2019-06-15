import React from 'react';

//ubicación imagen
import LogoImg from './Logito.jpg';

//cuando le des click, te mande a página principal
import Link from 'react-router-dom/Link';


const Logo = () => (
    <Link to="/">
         <img src={LogoImg} width="100px" alt="Logo LocPaw"/>
    </Link>
);

export default Logo;