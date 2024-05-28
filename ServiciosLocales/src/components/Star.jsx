import React from 'react'
import { BsStars } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Star({ text }) {
    return (
        <div>
            <button className='buttonCustom2 mx-auto self-center tracking-wide  whitespace-nowrap dark:text-white 
            bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent  '>
                <span className="absolute left-[8]  top-[1] right-5 inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                <span className="animate-ping absolute left-[7] top-[1] right-5 inline-flex rounded-full h-2 w-2 bg-blue-200"></span>
                <p className='font-normal tracking-wider'>{text}</p>
                <div className="star-1 ">
                    <BsStars size="12" />
                </div>
                <div className="star-2">
                    <BsStars size="22" />
                </div>
                <div className="star-3">
                    <BsStars size="14" />
                </div>
                <div className="star-4">
                    <BsStars size="12" />
                </div>
                <div className="star-5">
                    <BsStars size="17" />
                </div>
                <div className="star-6">
                    <BsStars size="14" />
                </div>
            </button>
        </div>
    )
}

export default Star