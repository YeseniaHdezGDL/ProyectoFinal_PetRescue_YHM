import React from 'react';

//subcomponents
import LoginEnter from './LoginEnter';
import HowItWorks from './HowItWorks/HowItWorks';
import Conctact from './Contact/Conctact';

const Buttons = () => (
    <div className='firstButtons'>
        <LoginEnter />
        <HowItWorks />
        <Conctact />
    </div>
);

export default Buttons;