import React from 'react';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import Logo from '../images/logo.png';

const Navbar = ({ label }) => {
    return (
        <nav className="pb-36">
            <div className="bg-black text-white fixed z-50 w-full shadow-gray-600 shadow-sm">
                <div className="flex items-center justify-between container mx-auto pt-6 pb-10 px-8">
                    <div className="flex items-center">
                        <a href="/">
                            <img src={Logo} className="w-20" alt="logo" />
                        </a>
                    </div>
                    <div>
                        <ul className="hidden lg:flex space-x-8 items-center">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white transition-all">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white transition-all">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" className="text-gray-400 hover:text-white transition-all">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white transition-all">
                                    Contact
                                </a>
                            </li>
                            <div>
                                <div className="hidden lg:block">
                                    <Button type="button" label={label} />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div id="progress" className="mt-32"></div>
            </div>
        </nav>
    );
};

export default Navbar;

Navbar.propTypes = {
    label: PropTypes.string,
}