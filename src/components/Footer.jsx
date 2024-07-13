import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className='bg-[#f2f2f5] p-4 '>
                <div className='container mx-auto flex flex-col items-center ' >
                    <div className='text-black font-medium '>SHUBHAM TIWARI</div>
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
                        <div className='flex items-center p-2'>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='p-2 text-3xl'><FaLinkedin /></a>
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className='p-2 text-3xl'><FaGithub /></a>
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className='p-2 text-3xl'><BsTwitterX /></a>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
