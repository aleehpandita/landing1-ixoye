import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MachineImage from '../images/wp.png';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <b>SERVICIO TÉCNICO EN CANCÚN</b>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"></Link>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=529981307542&text=Hola!%20estoy%20interesado%20en%20los%20servicios%20de%20Mantenimiento" className="btn-sm mb-4 mt-2 text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                <img className="relative" src={MachineImage} width="48" height="48" alt="Testimonial 01" />
                </a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
