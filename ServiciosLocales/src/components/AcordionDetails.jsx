import React, { useState } from 'react';

function AcordionDetails({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="accordion-collapse" className='flex flex-col justify-between w-full h-max min-h-[13em] rounded-lg bg-gray-100 focus:bg-white' data-accordion="collapse">
            {items.map((item, index) => (
                <div key={index} >
                    <h2 id={`accordion-collapse-heading-${index + 1}`}>
                        <button type="button"
                            className=" focus:ring-gray-300 flex rounded-lg items-center justify-between focus-visible:bg-white w-full p-5 font-medium rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-4  hover:bg-white"
                            data-accordion-target={`#accordion-collapse-body-${index + 1}`}
                            aria-expanded={activeIndex === index} aria-controls={`accordion-collapse-body-${index + 1}`}
                            onClick={() => handleAccordionToggle(index)}
                        >
                            <span>{item.pregunta}</span>
                            <svg data-accordion-icon className={`w-3 h-3 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id={`accordion-collapse-body-${index + 1}`}
                        className={`${activeIndex === index ? '' : 'hidden'} bg-gray-200 shadow-inner  rounded-md `}
                        aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                    >
                        <div className="p-5 border border-b-0  rounded-md  border-gray-200 ">
                            {item.parrafos.map((parrafo, idx) => (
                                <p key={idx} className="mb-2 text-gray-800 ">
                                    {parrafo}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AcordionDetails;
