import React from 'react'
import { Link } from 'react-router-dom';

import Social from './Social';

const Footer = () => {
    return (
        <>
            <footer className='bg-[#f2f2f5]  '>
                <div className='container mx-auto flex flex-col items-center py-2 ' >
                    <div className='text-black font-medium '>PORTFOLIO</div>
                    <div>

                        <ul className='flex flex-col items-center py-2'>
                            <h1 className='underline py-1'>Quick Link</h1>
                            <hr />
                            <Link to="/" className=" text-gray-500 hover:text-white">Home</Link>
                            <Link to="/about" className=" text-gray-500 hover:text-white">About</Link>

                            <Link to="/contact  " className=" text-gray-500 hover:text-white">Contact</Link>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Follow me on : </div>
                        <Social />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
