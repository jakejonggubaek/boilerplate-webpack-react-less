import React from 'react';
import Logo from './images/sachal.png';
import Menu from './Menu';
import Reservation from './Reservation';

function Main() {
    
    return (
        <section className="main-section">

            <Menu />
            <Reservation />
            <img className="logo" src={Logo} />

        </section>
    )
}

export default Main;