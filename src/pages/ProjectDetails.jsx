import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Context } from '../Context/Context';


const ProjectDetails = () => {

    const { documents } = useContext(Context)
    const { id } = useParams();
    console.log(documents);

    const item = documents.find(item => item.$id == id);
    console.log(item);
    if (!item) {
        // Handle the case where the project is not found
        return <p className='text-center text-red-500'>Project not found</p>;
    }

    const handle_Click = () => {

        window.location.assign(item.projectLink || "/project");
    }



    return (
        <div >
            <div className='py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white h-auto' >

                <div className=' mx-auto my-3 xl:px-6 p-2 animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-in-out bg-slate-200 rounded-lg h-full md:h-full md:max-w-screen-md xl:max-w-screen-xl'>
                    <h1 className='text-xl lg:text-2xl text-black  text-center my-4 pt-5 font-bold underline uppercase animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out'>{item.projectTitle}</h1>
                    <img className='w-full h-auto p-2 rounded-lg overflow-hidden
                    ' src={item.image} alt="" />
                    <div className='text-black p-2 animate-fade-right animate-once animate-duration-[1500ms] animate-delay-900 animate-ease-in-out'>

                        <p className='lg:text-xl'><strong className='block'>Details- </strong>{item.projectDescription}</p>
                        <p className='lg:text-xl'><strong>Tech Used-</strong> {item.techStack}</p>
                        <button onClick={handle_Click} className='bg-slate-800 hover:bg-slate-700   text-white mb-3 p-4 my-2 w-full rounded-md'>
                            See Project / Code</button>

                    </div>
                </div>

            </div >

        </div>
    )
}

export default ProjectDetails
