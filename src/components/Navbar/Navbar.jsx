import React from 'react';
import style from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className="container">
                <div className={style.nav__block}>
                    <div className={style.nav__logo}>Online shop</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
