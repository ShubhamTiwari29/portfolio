import React from 'react'
import data from '../assets/Project'
import Item from '../components/Item'

const Project = () => {
    return (
        <div className='py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white '>
            <h1 className='text-center text-3xl font-bold pt-2' >Projects</h1>
            <hr className='w-[28%] mx-auto border-solid pb-2 border-white font-extrabold' />
            <div className='animate-fade-up animate-once animate-duration-[1000ms] animate-delay-100 animate-ease-in-out' >
                {data.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} description={item.description} tag={item.tag} link={item.link} />
                })}




            </div>
        </div>
    )
}

export default Project
