import React from 'react'
import { Link } from 'react-router-dom';

import Social from './Social';

const Footer = () => {
    return (
        <>
            <footer className='bg-[#f2f2f5]  '>
                <div className='container mx-auto flex flex-col items-center py-2 ' >
                    {/* <div className='text-black text-lg font-semibold '>SHUBHAM Tiwari</div>
                    <div className='text-black text-[10px] '>Frontend Developer</div> */}
                    <div>
                        <ul className='flex flex-col items-center py-1'>
                            <h1 className='underline py-1 font-medium'>Quick Links</h1>
                            <hr />
                            <Link to="/" className=" text-black hover:text-gray-700">Home</Link>
                            <Link to="/project" className=" text-black hover:text-gray-700">Project</Link>
                            <Link to="/skills" className=" text-black hover:text-gray-700">Skills</Link>
                            <Link to="/about" className=" text-black hover:text-gray-700">About</Link>
                            <Link to="/contact  " className=" text-black hover:text-gray-700">Contact</Link>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center font-medium '>
                        <div>Follow me on : </div>
                        <Social />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
