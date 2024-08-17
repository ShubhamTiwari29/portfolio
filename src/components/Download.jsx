import React from 'react';
import cv from '../assets/Shubham Resume 1.pdf'

const DownloadCV = () => {
    return (
        <>
            <div className=" bg-slate-700 hover:bg-slate-600 text-white p-4 m-7 rounded-3xl ">
                <a href={cv} download className="">
                    Download CV
                </a>

            </div>

        </>
    );
};

export default DownloadCV;