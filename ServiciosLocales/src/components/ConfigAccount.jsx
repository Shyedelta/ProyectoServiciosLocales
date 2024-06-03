import React from 'react'

function ConfigAccount() {
  return (
    <div className='bg-white w-full h-screen '>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-2">Información Personal</h2>
        <p className="text-gray-600 mb-6">Usa una dirección permanente donde puedas recibir correo.</p>
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 border grid place-content-center bg-gray-400 rounded-full aspect-square h-10 overflow-hidden">
            <img src="/placeholder.svg" alt="" />
          </div>
          <div className="ml-4 flex-1">
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none "> 
              Cambiar avatar
            </button>
            <p className="text-xs text-gray-500">JPG o PNG. Máximo 1MB.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="first-name">Nombre</label>
            <input id="first-name" placeholder="Nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name">Apellido</label>
            <input id="last-name" placeholder="Apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Dirección de correo electrónico" required />
        </div>
        {/* <div className="flex flex-col mb-6">
          <label htmlFor="name">Nombre de usuario</label>
          <input id="name" placeholder="John" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div> */}
        

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
          Guardar
          </button>
      </div>
    </div>
  )
}

export default ConfigAccount