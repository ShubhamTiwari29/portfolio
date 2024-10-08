import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import Menu from './Menu';
import useMediaQuery from './useMediaQuery';

const Header = () => {
    const isDesktop = useMediaQuery('(min-width: 786px)');

    return (
        <header className="bg-[#fafafb] p-2 md:p-4 shadow-lg rounded-lg">
            <nav className="container md:px-6 mx-auto flex justify-between items-center">

                {isDesktop ? <List /> : <Menu />}
                <div className='pr-4'>
                    <Link to="/" className="font-bold xl:text-2xl ">SHUBHAM Tiwari</Link>

                    <p className=' text-gray-500 text-[10px] xl:text-[12px]  text-right'>Frontened Developer</p>
                </div>
            </nav>
        </header>
    );
};

export default Header;
