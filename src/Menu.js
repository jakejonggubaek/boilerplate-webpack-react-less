import React from 'react';
import Logo from './images/sachal-sub.png';

function Menu() {

    const handleClick = () => {
        const menu = document.querySelector('.menu-container');
        menu.style.right = '-3000px';
    }

    return (
        <div className='menu-container'>
            <div className='menu'>
                <div className='close' onClick={handleClick}>&#215;</div>
                <img className="logo" src={Logo} />
                <div className='menu1'>
                    <h2>Lunch Course</h2>
                    <p>45CAD pp</p>
                    <h3>Suljuksim(Amuse-bouche)</h3>
                    <p>Cherry tomato marinated in <br /> fermented korean wild raspberry sauce</p>
                    <h3>Juksang(Porridge)</h3>
                    <p>Porridge with spring greens <br /> &amp; <br /> Seasonal watery kimchi</p>
                    <h3>Sangmi(Salad or Cold Preparation)</h3>
                    <p>Tofu Ball with spring greens <br /> &amp; <br /> Seasonal greens with mungbean jelly salad</p>
                    <h3>Ipgasim(Dessert)</h3>
                    <p>Spring mugwort tea <br />&amp; <br />Korean traditional fruits jelly</p>
                </div>
                <div className='menu2'>
                    <h2>Dinner Course</h2>
                    <p>55CAD pp</p>
                    <h3>Suljuksim(Amuse-bouche)</h3>
                    <p>Temple recipe vege-chips <br />&amp;<br /> Fermented Pickly Ash pepper Tea</p>
                    <h3>Juksang(Porridge)</h3>
                    <p>Porridge with spring greens <br />&amp; <br />Seasonal watery kimchi</p>
                    <h3>Sangmi(Salad or Cold Preparation)</h3>
                    <p>Tofu Ball with spring greens <br />&amp;<br /> Seasonal greens with mungbean jelly salad</p>
                    <h3>Ipgasim(Dessert)</h3>
                    <p>Spring mugwort tea <br />&amp; <br />Korean traditional fruits jelly</p>
                </div>
            </div>
            <p className='menu-footer'>*VAT included</p>
        </div>
    )
}

export default Menu;