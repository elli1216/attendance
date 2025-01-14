import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
}

const MainItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className='flex items-center border-b gap-3 p-6 bg-white hover:cursor-pointer w-96 h-48'>
      <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={icon} className='text-mainItemColor text-[5rem]' />
        <h2 className='text-black text-[2rem]'>{text}</h2>
      </div>
    </div>
  )
}

export default MainItem