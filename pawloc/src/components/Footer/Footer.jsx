import React from 'react';

//subcomponentes
import Logo from '../Header/Logo/Logo';
import Contact from './Contact/Contact';
import HowItWorks from './HowItWorks/HowItWorks';

//el style
import  './footer.css';

const Footer = () => (
    <div className='footer'>
        <Logo />
        <Contact />
        <HowItWorks />
    </div>
);

export default Footer;