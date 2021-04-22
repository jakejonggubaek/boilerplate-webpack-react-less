import React from 'react';

function Nav() {

    const handleClickMenu = () => {
        const menu = document.querySelector('.menu-container');
        menu.style.right = '0';
    }

    const handleClickReservation = () => {
        const reservation = document.querySelector('.reservation');
        reservation.style.right = '0';
    }

    return (
        <ul className="side-nav">
            <li onClick={handleClickMenu}>MENU</li>
            <li onClick={handleClickReservation}>RESERVATION</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
        </ul>
    )
}

export default Nav;