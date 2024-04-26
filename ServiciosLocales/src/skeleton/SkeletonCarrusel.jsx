import React from 'react'

function SkeletonCarrusel() {
    return (
        <div className=" overflow-hidden flex  ">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="animate-pulse">
                    <div className="m-2 bg-purple-100 p-5 my-5 shadow-lg rounded-3xl aspect-square h-72 w-72 flex justify-center align-middle">
                        <div className="loader w-max h-40 pt-32 ">
                            <div className="loader__circle"></div>
                            <div className="loader__circle"></div>
                            <div className="loader__circle"></div>
                            <div className="loader__circle"></div>
                            <div className="loader__circle"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonCarrusel