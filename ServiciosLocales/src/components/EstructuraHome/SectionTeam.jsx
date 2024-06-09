import React from 'react';
import teamImg1 from "../../imgs/sectionteam1.png";
import teamImg2 from "../../imgs/sectionteam2.png";
import teamImg3 from "../../imgs/sectionteam3.png";
import teamImg4 from "../../imgs/sectionteam4.png";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function SectionTeam() {
    const teamImages = [teamImg1, teamImg2, teamImg3, teamImg4];

    return (
        <div className='bg-gray-100 w-full min-h-96 overflow-hidden p-10 py-24'>
            <div className='pb-10 flex flex-row gap-24 justify-between max-[1470px]:flex-col max-[1470px]:gap-10'>
                <div className='flex flex-col justify-between gap-5'>
                    <h2 className='text-4xl font-bold'>Nuestro equipo</h2>
                    <div className='flex flex-col gap-5'>
                        <p className='text-gray-700 tracking-wide'>
                            En nuestra comunidad, trabajamos juntos para crear un impacto positivo. Estamos comprometidos con el crecimiento y el apoyo mutuo, conectando a emprendedores y negocios locales para fortalecer la economía y mejorar la vida en nuestras comunidades.
                        </p>
                        <p className='text-gray-600 tracking-wide'>
                            Únete a nosotros y sé parte de un equipo dinámico que valora la colaboración, la innovación y el desarrollo local.
                        </p>
                    </div>
                    <div className="flex space-y-4 flex-row ">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link to={"/login"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                Únete a nosotros
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <img className='h-96 object-cover rounded-xl' src={teamImg1} alt="Team image 1" />
            </div>
            <div className='block max-[1070px]:hidden'>
                <div
                    className='flex justify-end max-[1470px]:justify-center'>
                    <img className='h-72 object-cover rounded-xl self-end' src={teamImg3} alt="Team image 3" />
                    <img className='h-96 object-cover rounded-xl mx-10' src={teamImg2} alt="Team image 2" />
                    <img className='h-72 object-cover rounded-xl' src={teamImg4} alt="Team image 4" />
                </div>
            </div>
        </div>
    );
}

export default SectionTeam;
