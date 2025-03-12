import React, { useState } from 'react';
import logo from '../../public/On Social Logo-5.png'; 
import { Link } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:px-10 h-full">
      <nav className='relative  flex justify-between border  rounded-full bold border-gray-300 items-center bg-white   top-8 z-[100] text-black  px-6 md:px-12 '>
      {/* Logo */}
      <div className='flex items-center py-2  w-[230px]'>
        <img src={logo} alt='logo' className='md:w-30  md:h-10' />
      </div>

      {/* Desktop Menu */}
      <div className="">
      <div className='hidden md:flex  items-center space-x-10 w-3/5'>
        <Link to='/' className=' text-lg hover:text-[#D41406]   '>Home</Link>
        <Link to='/about' className=' text-lg hover:text-[#D41406]   '>About</Link>
        <Link to='/services' className=' text-lg hover:text-[#D41406]   '>Gallary</Link>
        <Link to='/contact' className='text-lg hover:text-[#D41406]   '> Contact</Link>
      
        
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
                <Link to='/' className='text-lg hover:text-[#fa9508]  '>Home</Link>
                <Link to='/about' className='text-lg hover:text-[#fa9508]  '>About</Link>
                <Link to='/services' className='text-lg hover:text-[#fa9508]  '>Services</Link>
                <Link to='/contact' className='text-lg hover:text-[#fa9508]  '> Contact</Link>
                </div>
                
            </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
