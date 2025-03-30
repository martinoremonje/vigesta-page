import React, { useState } from 'react';
import logo from '../assets/icono-juan.jpg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-green-100 p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
        <span className="ml-2 text-lg font-semibold">Vigesta</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'flex flex-col mt-4' : 'hidden md:flex'
        } md:flex md:items-center`}
      >
        <a href="/" className="mx-2 text-gray-800 block md:inline-block py-2">
          Inicio
        </a>
        <a href="/acerca" className="mx-2 text-gray-800 block md:inline-block py-2">
          Acerca
        </a>
        <a href="/contacto" className="mx-2 text-gray-800 block md:inline-block py-2">
          Contacto
        </a>
      </nav>
    </div>
  );
};

export default NavBar;