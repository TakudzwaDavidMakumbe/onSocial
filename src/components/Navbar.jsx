import React, { useState } from 'react';
import logo from '../../public/Traced Image.png';
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative flex justify-between border bold border-gray-300 items-center bg-white m-5 text-black rounded-lg font-mono px-6 md:px-12 '>
      {/* Logo */}
      <div className='flex items-center  w-[230px]'>
        <img src={logo} alt='logo' className='md:w-30  md:h-16' />
      </div>

      {/* Desktop Menu */}
      <div className="">
      <div className='hidden md:flex items-center space-x-10 w-3/5'>
        <Link to='/' className='text-lg font-semibold'>Home</Link>
        <Link to='/about' className='text-lg font-semibold'>About</Link>
        <Link to='/services' className='text-lg font-semibold'>Services</Link>
        <Link to='/contact' className='text-lg font-semibold'> Contact</Link>
      
        
      </div>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-3xl'>
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
            <div className='absolute top-16 left-0 mt-8  px-5  w-full  flex flex-col items-center py-4 md:hidden '>
                <div className='  w-full bg-white  flex flex-col z-[] items-center py-4 md:hidden '>
                <Link to='/' className='text-lg font-semibold'>Home</Link>
                <Link to='/about' className='text-lg font-semibold'>About</Link>
                <Link to='/services' className='text-lg font-semibold'>Services</Link>
                <Link to='/contact' className='text-lg font-semibold'> Contact</Link>
                </div>
                
            </div>
      )}
    </nav>
  );
};

export default Navbar;
