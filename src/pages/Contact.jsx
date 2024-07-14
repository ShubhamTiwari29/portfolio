import React, { useState } from 'react';
import Social from '../components/Social';
import DownloadCV from '../components/Download';

function Contact() {


    return (
        <div className="max-w-md mx-auto mt-10 h-[50vh]">
            <h2 className="text-2xl font-bold mb-6 text-center ">Contact Me</h2>
            <div className=' p-5 py-10 my-4 rounded-md items-center shadow-xl  bg-gradient-to-r from-slate-900 to-slate-700 text-white'>
                <p><strong>NAME: </strong> Shubham Tiwari</p>

                <p><strong>Email id: </strong> shubham29lko@gmail.com</p>
                <div className='py-4'>
                    <p className='text-xl'>Join me on: </p>

                    <div className='py-3'> <Social /></div>
                </div>


            </div>



        </div>
    );
}

export default Contact;
