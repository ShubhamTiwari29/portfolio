import React, { useState } from 'react';
import Social from '../components/Social';
import DownloadCV from '../components/Download';

function Contact() {


    return (
        <div className=" mx-auto pt-10 h-[60vh] md:h-[70vh] bg-gradient-to-r from-slate-900 to-slate-700">
            <h2 className="text-2xl font-bold  text-center text-white ">Contact Me</h2>
            <hr className='w-[35%] md:w-[140px] mx-auto border-solid pb-2 mb-6 border-white font-extrabold' />
            <div className=' p-5 py-10 my-4 mx-auto rounded-md items-center shadow-2xl max-w-md bg-gradient-to-r from-slate-900 to-slate-700 text-white'>
                <p><strong className='text-gray-300'>NAME: </strong> Shubham Tiwari</p>

                <p><strong className='text-gray-300'>Email id: </strong> shubham29lko@gmail.com</p>
                <div className='py-4'>
                    <p className='text-xl'>Join me on: </p>

                    <div className='py-3'> <Social /></div>
                </div>


            </div>



        </div>
    );
}

export default Contact;
