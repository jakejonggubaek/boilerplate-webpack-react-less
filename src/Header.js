import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to={`/admin`} >ADMIN</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;