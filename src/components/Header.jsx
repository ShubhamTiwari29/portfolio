import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import Menu from './Menu';
import useMediaQuery from './useMediaQuery';

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 786px)');

    return (
        <header className="bg-[#fafafb] p-4 shadow-lg rounded-lg">
            <nav className="container mx-auto flex justify-between items-center">

                {isDesktop ? <List /> : <Menu />}
                <div className="font-bold text-xl">SHUBHAM TIWARI</div>
            </nav>
        </header>
    );
};

export default Header;
