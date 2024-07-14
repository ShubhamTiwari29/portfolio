import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Social = () => {
    return (
        <div>
            <div className='flex items-center '>
                <a href="https://www.linkedin.com/in/shubham-tiwari-4395b215a/" target="_blank" rel="noopener noreferrer" className='p-2 text-3xl'><FaLinkedin /></a>
                <a href="https://github.com/ShubhamTiwari29" target="_blank" rel="noopener noreferrer" className='p-2 text-3xl'><FaGithub /></a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className='p-2 text-3xl'><BsTwitterX /></a>

            </div>
        </div>
    )
}

export default Social
