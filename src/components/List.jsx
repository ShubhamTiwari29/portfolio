import React from 'react'
import { Link } from 'react-router-dom';

function List() {
    return (
        <div>


            <div className='md:container xl:text-[15px]'>
                <Link to="/" className="mr-7 text-black hover:text-gray-500 ">Home</Link>
                <Link to="/project  " className="mr-7 text-black hover:text-gray-500 ">Projects</Link>
                <Link to="/skills  " className="mr-7 text-black hover:text-gray-500 ">Skills</Link>
                <Link to="/about" className="mr-7 text-black hover:text-gray-500 ">About</Link>
                <Link to="/contact  " className="mr-7 text-black hover:text-gray-500 ">Contact</Link>
                <Link to="/login  " className="mr-7 text-black hover:text-gray-500 ">Login</Link>
            </div>

        </div>
    )
}

export default List
