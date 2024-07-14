import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaList } from "react-icons/fa6";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="p-2  border rounded bg-gray-200 hover:bg-gray-300"
            >
                <FaList />
            </button>
            {isOpen && (
                <ul
                    className="absolute top-full left-0 bg-white shadow-lg list-none m-0 z-50 animate-fade-right animate-duration-[500ms] animate-ease-in-out"
                    style={{ display: 'block' }}
                >
                    <li className="px-4 py-2 hover:bg-gray-100" ><Link to="/" className="mr-4 text-gray-500 hover:text-white" > <button onClick={toggleMenu}>Home</button></Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/project  " className="mr-4 text-gray-500 hover:text-white"><button onClick={toggleMenu}>Project</button></Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/skills  " className="mr-4 text-gray-500 hover:text-white"><button onClick={toggleMenu}>Skills</button></Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/about" className="mr-4 text-gray-500 hover:text-white"><button onClick={toggleMenu}>About</button></Link></li>


                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/contact  " className="mr-4 text-gray-500 hover:text-white"><button onClick={toggleMenu}>Contact</button></Link></li>

                </ul>
            )}
        </div>
    );
};

export default Menu;
