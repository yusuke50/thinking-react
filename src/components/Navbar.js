import Logo from './Logo';
import Link from './Link';

function Navbar() {
  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between'>
          <Logo />

          <Link />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
