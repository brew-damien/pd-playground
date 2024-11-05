import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const buttonStyle = {
    base: 'group h-fit inline-block text-white p-[2px] relative rounded-lg overflow-hidden',
    layer: 'absolute inset-0 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full group-focus:translate-x-full bg-white',
    content: 'relative h-full w-full inline-block py-2 px-6 font-semibold text-white bg-black rounded-lg flex justify-center items-center',
    arrow: 'ml-2 transition-transform duration-200 group-hover:translate-x-2 group-focus:translate-x-2',
};

const Button = ({ type = 'button', label, icon, variant = '', full = false, href }) => {
    const buttonClasses = `${buttonStyle.base} ${variant} ${full ? 'w-full' : ''} flexCenter gap-3 rounded-full border-0`;

    const content = (
        <>
            <div className={buttonStyle.layer}></div>
            <span className={buttonStyle.content}>
                {icon && <img src={icon} alt={`${label} icon`} />}
                <span className="bold-16 whitespace-nowrap cursor-pointer">{label}</span>
                <span className={buttonStyle.arrow} aria-hidden="true">&rarr;</span>
                <span className="sr-only">Arrow indicating external link</span>
            </span>
        </>
    );

    if (href != null || href !== '') {
        return (
            <Link
                to={href}
                className={`${buttonClasses} relative block`}
                style={{ textDecoration: 'none', background: 'linear-gradient(90deg, #F63 19.96%, #7500C1 54.16%, #170AF0 84.22%, #FFF 100%)' }}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            type={type}
            style={{ background: 'linear-gradient(90deg, #F63 19.96%, #7500C1 54.16%, #170AF0 84.22%, #FFF 100%)' }}
        >
            {content}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    variant: PropTypes.string,
    full: PropTypes.bool,
    href: PropTypes.string,
};

export default Button;
