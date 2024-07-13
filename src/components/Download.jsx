import React from 'react';


const DownloadCV = () => {
    return (
        <>
            <div className=" bg-slate-600 text-white p-4 m-7 rounded-3xl ">
                <a href="/path/to/your/document.pdf" download className="">
                    Download CV
                </a>

            </div>

        </>
    );
};

export default DownloadCV;