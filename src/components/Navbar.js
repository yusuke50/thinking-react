import React, { useState } from 'react';
import Logo from './Logo';
import Link from './Link';
import Hamburger from './Hamburger';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  function toggleMenu() {
    setShowNavbar(!showNavbar);
  }

  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <Logo />

          <div className='menu-icon' onClick={toggleMenu}>
            <Hamburger />
          </div>

          <div className={`link-container ${showNavbar && 'active'}`}>
            <Link />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
