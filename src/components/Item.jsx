import React from 'react'
import { Link } from 'react-router-dom';
function Item(props) {

    const click_handle = () => {

        window.location.assign(props.link || "/project");
    }

    return (


        <div >
            <Link to={`item/${props.id}`}>
                <div className=' m-2 my-3 bg-slate-200 rounded-lg max-h-[600px] md:h-[510px]'>
                    <img className='w-full h-auto p-1' src={props.image} alt="" />
                    <div className='text-black p-2 animate-fade-right animate-once animate-duration-[1500ms] animate-delay-900 animate-ease-in-out'>
                        <h1 className='text-xl my-1 uppercase animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out'>{props.name}</h1>
                        <p className='text-wrap '> <strong>Details- </strong>{props.description}</p>
                        <p className=''><strong>tag-</strong> {props.tag}</p>
                        <button onClick={click_handle} className='bg-slate-600 text-white p-4 my-2 w-full rounded-md'>
                            See Project</button>

                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Item
