import React from 'react';
import DownloadCV from '../components/Download';
import Social from '../components/Social';
const Home = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-slate-900 to-slate-700 h-[100vh]'>
                <div className="   flex  items-center">
                    <div className='mx-auto  text-center items-center  pt-52  '>
                        <h1 className=" text-3xl font-bold my-4 animate-fade-up animate-delay-300 animate-ease-in text-gray-400">Hello! I'am </h1>
                        <h1 className="text-4xl font-bold my-4 animate-fade-up animate-delay-300 animate-ease-in text-white"> Shubham Tiwari</h1>
                        <p className="mt-4 text-gray-400">Frontend Developer From India</p>
                        <DownloadCV />
                        <div className='mx-auto px-14 text-white'> <Social /></div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Home;


