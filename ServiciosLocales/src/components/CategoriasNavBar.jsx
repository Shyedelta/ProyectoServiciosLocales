import categorias from '../funciones/otros';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'

function CategoriasNavBar({ setOpenMenu }) {
  return (
    <div className=" shadow-2xl absolute top-16 right-0  w-screen overflow-auto min-h-[max-content] scroll-smooth ">
      <div onClick={() => { setOpenMenu(false) }} className="sticky z-50 w-full p-1 bg-gray-100 border-t border-b border-gray-200 ">
        <div className="max-w-[70%] h-full py-2 mx-auto font-medium flex justify-center align-middle">
          {categorias.map((categoria, index) => (
            <div key={index} className='mx-auto '>
              {categoria.icon && <Link to={"/servicios/" + categoria.nombre}>
                <button type="button" className="inline-flex flex-col items-center justify-center px-4 hover:bg-gray-50 p-1 group">
                  <div className='text-gray-500 group-hover:text-blue-600' dangerouslySetInnerHTML={{ __html: categoria.icon }} />
                  <span className="text-[12px] text-gray-500 group-hover:text-blue-600">{categoria.nombre}</span>
                </button>
              </Link>}
            </div>
          ))}
          <div className='mx-auto '>
            <Link to={"/servicios"}> 
              <div className='text-gray-600'>
                <button type="button" className=" inline-flex flex-col items-center justify-between px-4 hover:bg-gray-50 p-1 group">
                  <svg className='text-blue-500 group-hover:text-gray-800' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span className="text-[12px]  text-blue-500 group-hover:text-gray-800">Ver más</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriasNavBar;

