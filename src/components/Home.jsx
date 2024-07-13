import React from 'react';
import img from '../assets/home3.jpg'

import DownloadCV from './Download';
const Home = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-slate-900 to-slate-700 h-[100vh]'>
                <div className="   flex justify-center">
                    <div className='mx-auto  text-center pt-40 text-white '>
                        <h1 className=" text-3xl font-bold my-4 animate-fade-up animate-delay-300 animate-ease-in ">Hello! I'am </h1>
                        <h1 className="text-4xl font-bold my-4 animate-fade-up animate-delay-300 animate-ease-in "> Shubham Tiwari</h1>
                        <p className="mt-4">Frontend Developer From India</p>
                        <DownloadCV />
                    </div>


                </div>

            </div>
        </>
    );
};

export default Home;


