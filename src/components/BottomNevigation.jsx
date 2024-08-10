import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const BottomNevigation = (props) => {
    return (
        <div className='flex px-2  text-white container  justify-between mx-auto'>
            <div
                onClick={props.onLeftClick}
                className='bg-slate-600 p-2 rounded-full cursor-pointer hover:bg-slate-300 animate-bounce animate-twice animate-duration-[2000ms]'
            >
                <FaArrowLeft className="text-white" />
            </div>


            <div
                onClick={props.onRightClick}
                className='bg-slate-600 p-2 rounded-full cursor-pointer hover:bg-slate-300 animate-bounce animate-twice animate-duration-[2000ms]'
            >
                <FaArrowRight className="text-white " />
            </div>
        </div>
    )
}

export default BottomNevigation
