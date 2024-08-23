import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TicketsPlane, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='p-4 nav-bar'>
      <div className='mx-auto flex justify-between items-center'>
        <Link to='/' className='text-write text-2xl font-bold'>
          <TicketsPlane size={48} color='#fff' />
        </Link>

        <button className='md:hidden focus:outline-none button button-menu' onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* desktop */}
        <div className='hidden md:flex space-x-4'>
          <NavLink to='/' onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to='/flights' onClick={toggleMenu}>
            Flights
          </NavLink>
          <NavLink to='/story' onClick={toggleMenu}>
            Travel Group
          </NavLink>
        </div>

        {/* mobile */}
        {isOpen && (
          <div className='absolute left-0 right-0  md:hidden menu-div'>
            <div className='flex flex-col items-center py-2'>
              <NavLink to='/' onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to='/flights' onClick={toggleMenu}>
                Flights
              </NavLink>
              <NavLink to='/story' onClick={toggleMenu}>
                Travel Group
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className='text-white hover:text-blue-200 py-2 px-3 rounded transition duration-300'
  >
    {children}
  </Link>
);

export default Navigation;
