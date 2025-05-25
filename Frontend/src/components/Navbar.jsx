import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className='container w-full px-36 py-10 flex justify-between '>
                    <div className='logo-brand'>
                        <Link to="/">
                        <img src={Logo} alt=""  width={150} height={150}/>
                        </Link>
                    </div>
                    <nav>
                        <ul className='flex gap-10 text-xl font-bold'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/service">Services   </Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/register">register</Link></li>
                            <li><Link to="/login">login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;