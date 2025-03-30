import React from 'react';
import logo from '../assets/icono-juan.jpg'

const NavBar = () => {
  return (
    <div className="bg-green-100 p-4 flex items-center justify-between w-full">
      
      <span className='flex'><img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />Vigesta</span>
      <nav>
        <a href="/" className="mx-2 text-gray-800">Inicio</a>
        <a href="/acerca" className="mx-2 text-gray-800">Acerca</a>
        <a href="/contacto" className="mx-2 text-gray-800">Contacto</a>
      </nav>
    </div>
  );
};

export default NavBar;