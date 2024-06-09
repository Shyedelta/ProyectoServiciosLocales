import categorias from "../../funciones/categorias"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
function SectionExplore() {
    return (
        <div className="relative overflow-hidden bg-gray-100 mb-20">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Descubre tus servicios favoritos
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Descubre un mundo de posibilidades en línea. Desde compras y entretenimiento hasta herramientas útiles para el trabajo y la creatividad.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img src={categorias[0].img} alt="" className=" h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={categorias[1].img} alt="" className="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={categorias[2].img} alt="" className="  h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={categorias[3].img} alt="" className="  h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={categorias[4].img} alt="" className="  h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={categorias[5].img} alt="" className="  h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={categorias[6].img} alt="" className="  h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="w-fit border-red-500">
                                <Link to={"/servicios"}
                                    className="inline-block rounded-md border  border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Explorar
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionExplore