import React, { useState } from 'react';

function AcordionDetails({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="accordion-collapse" className='flex flex-col justify-between w-full h-max min-h-[13em] rounded-lg' data-accordion="collapse">
            {items.map((item, index) => (
                <div key={index} >
                    <h2 id={`accordion-collapse-heading-${index + 1}`}>
                        <button type="button"
                            className={`${activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'} flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 hover:bg-blue-100 gap-3`}
                            data-accordion-target={`#accordion-collapse-body-${index + 1}`}
                            aria-expanded={activeIndex === index} aria-controls={`accordion-collapse-body-${index + 1}`}
                            onClick={() => handleAccordionToggle(index)}
                        >
                            <span className={`${activeIndex === index ? 'text-blue-600' : ''} font-bold`}>{item.pregunta}</span>
                            <svg data-accordion-icon className={`w-3 h-3 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id={`accordion-collapse-body-${index + 1}`}
                        className={`${activeIndex === index ? 'mb-2' : 'hidden'} bg-gray-50 shadow-inner rounded-b-md `}
                        aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                    >
                        <div className="p-5 border rounded-md  border-gray-200 ">
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
