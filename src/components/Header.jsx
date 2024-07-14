import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import Menu from './Menu';
import useMediaQuery from './useMediaQuery';

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 786px)');

    return (
        <header className="bg-[#fafafb] p-4 shadow-lg rounded-lg">
            <nav className="container md:px-6 mx-auto flex justify-between items-center">

                {isDesktop ? <List /> : <Menu />}
                <div>
                    <Link to="/" className="font-bold text-xl">SHUBHAM Tiwari</Link>

                    <p className=' text-gray-500 text-[10px] text-right'>Frontened Developer</p>
                </div>
            </nav>
        </header>
    );
};

export default Header;
