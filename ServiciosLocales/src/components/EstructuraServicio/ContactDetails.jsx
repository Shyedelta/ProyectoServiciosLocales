import React, { useState } from 'react';

function ContactDetails({ empresa }) {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        const contactDetails = document.getElementById('contact-details').textContent;
        navigator.clipboard.writeText(contactDetails).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <>
            {empresa && (
                <div className="w-full max-h-[14em] bg-gray-100 border border-gray-200 mr-10 mb-10 shadow rounded-lg p-5">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Detalles de contacto</h2>
                    <address className="relative  bg-gray-50 max-h-[10em] overflow-hidden p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-3">
                        <div className="space-y-2 text-gray-500 leading-loose hidden sm:block">
                            Nombre <br />
                            Servicio <br />
                            Teléfono <br />
                        </div>
                        <div id="contact-details" className=" *:line-clamp-1 text-ellipsis text-nowrap mr-10 space-y-2 text-gray-900 leading-loose">
                            {empresa.propietario} <br />
                            {empresa.servicio} <br />
                            {empresa.telefono} <br />
                        </div>
                        <button 
                            onClick={handleCopyClick}
                            data-tooltip-target="tooltip-contact-details"
                            className="absolute end-2 top-2 text-gray-500 hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center"
                        >
                            <span id="default-icon-contact-details" className={copied ? 'hidden' : 'inline'}>
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <span id="success-icon-contact-details" className={copied ? 'inline' : 'hidden'}>
                                <svg className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </button>
                        <div id="tooltip-contact-details" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </address>
                </div>
            )}
        </>
    );
}

export default ContactDetails;
