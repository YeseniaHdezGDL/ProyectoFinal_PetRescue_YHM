import React from 'react';

//subcomponentes
import Logo from './Logo/Logo';
import Tittle from './Tittle/Tittle';
import UserArea from './UserArea/UserArea';

//el style
import './header.css';

const Header = () => (
    <div className='header'>
        <Logo />
        <Tittle />
        <UserArea />
    </div>
);

export default Header;