import React, { useContext } from 'react'

import Item from '../components/Item'
import { Context } from '../Context/Context'

const Project = () => {
    const { documents } = useContext(Context)
    console.log(documents);
    if (!documents || documents.length === 0) {

        return <p className='text-center text-red-500'>Loading...</p>;
    }


    return (
        <div className='py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white '>
            <h1 className='text-center text-3xl font-bold pt-2 mb-10' >Projects</h1>

            <div className='animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-in-out  md:grid md:grid-cols-2 md:gap-4 md:container mx-auto xl:container xl:grid-cols-3 mb-10 '  >
                {documents.map((item) => {
                    return <Item key={item.$id} id={item.$id} image={item.image} name={item.projectTitle} description={item.projectDescription} tag={item.techStack} link={item.projectLink} />
                })}




            </div>
        </div>
    )
}

export default Project
