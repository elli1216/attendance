import React from 'react'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
  route: string;
}

const MainItem: React.FC<SidebarItemProps> = ({ icon, text, route }) => {
  return (
    <Link to={route} className='flex items-center border-b gap-3 p-6 bg-white hover:cursor-pointer w-96 h-48'>
      <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={icon} className='text-mainItemColor text-[5rem]' />
        <h2 className='text-black text-[2rem]'>{text}</h2>
      </div>
    </Link>
  )
}

export default MainItem