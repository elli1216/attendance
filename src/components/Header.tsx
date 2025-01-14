import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='bg-headerColor flex justify-between items-center p-4'>
      <div className='flex items-center gap-2'>
        <img className='w-10' src="/icons/BSULOGO.png" alt="BSULogo" />
        <h1 className='text-white text-2xl'>Bulacan State University ROTC Portal</h1>
      </div>
      <div className='flex items-center gap-4 relative cursor-pointer' onClick={toggleDropdown}>
        <h1 className='text-white text-2xl'>Dela Cruz, Juan</h1>
        <FontAwesomeIcon
          icon={faAngleDown}
          className='text-white text-2xl'
        />
        {isDropdownOpen && (
          <div className='absolute right-0 top-8 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
            <a href='/profile' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Profile</a>
            <a href='/logout' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Logout</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header