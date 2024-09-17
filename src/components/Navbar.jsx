import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import Logo from '../images/logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = ({ label }) => {
    const location = useLocation();
    const currentPage = location.pathname.split('/')[1];
    return (
        <nav className="bg-black text-white fixed z-50 w-full">
            <div className="flex items-center justify-between container mx-auto pt-6 pb-10 px-8">
                <div className="flex items-center">
                    <a href="/">
                        <img src={Logo} className="w-[80px]" alt="Logo" />
                    </a>
                </div>
                <div>
                    <ul className="hidden lg:flex space-x-8 items-center">
                        <li>
                            <a href="/" className="text-gray-400 hover:text-white transition-all" aria-current={currentPage === 'home' ? 'page' : undefined} role="menuitem">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-400 hover:text-white transition-all" aria-current={currentPage === 'about' ? 'page' : undefined} role="menuitem">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio" className="text-gray-400 hover:text-white transition-all" aria-current={currentPage === 'portfolio' ? 'page' : undefined} role="menuitem">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-400 hover:text-white transition-all" aria-current={currentPage === 'contact' ? 'page' : undefined} role="menuitem">
                                Contact
                            </a>
                        </li>
                        <div>
                            <div className="hidden lg:block">
                                <Button type="button" label={label} />
                            </div>
                            <div className="lg:hidden">
                                <button className="text-blue-400" aria-label="Open mobile menu">☰</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div id="progress" className="mt-[128px]"></div>
        </nav>
    );
};

export default Navbar;

Navbar.propTypes = {
    label: PropTypes.string,
}