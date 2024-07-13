import React from 'react'
import { Link } from 'react-router-dom';

function List() {
    return (
        <div>


            <div>
                <Link to="/" className="mr-4 text-gray-500 hover:text-white">Home</Link>
                <Link to="/about" className="mr-4 text-gray-500 hover:text-white">About</Link>

                <Link to="/contact  " className="mr-4 text-gray-500 hover:text-white">Contact</Link>
            </div>

        </div>
    )
}

export default List
