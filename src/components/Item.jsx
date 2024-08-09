import React from 'react'
import { Link } from 'react-router-dom';
function Item(props) {



    return (


        <div >
            <Link to={`item/${props.id}`}>
                <div className=' m-2 my-3 bg-slate-200 rounded-lg max-h-[600px] md:h-[530px]'>
                    <img className='aspect-[16/9] p-1' src={props.image} alt="" />
                    <div className='text-black p-2 my-2 animate-fade-right animate-once animate-duration-[1500ms] animate-delay-900 animate-ease-in-out'>
                        <h1 className='text-xl my-1 font-bold uppercase animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out'>{props.name}</h1>
                        <p className='text-wrap '> <strong>Details- </strong>{props.description.slice(0, 240)} .....</p>
                        <p className=''><strong>Tech Used-</strong> {props.tag}</p>
                        <button className='bg-slate-800 hover:bg-slate-700 text-white p-4 mt-4 w-full rounded-md  '>
                            More</button>

                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Item
