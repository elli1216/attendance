import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className='flex items-center border-b gap-3 p-4 hover:bg-sideBarHoverColor hover:cursor-pointer'>
      <FontAwesomeIcon icon={icon} className='text-sideBarIconColor text-xl' />
      <h2 className='text-sideBarTextColor'>{text}</h2>
    </div>
  );
};

export default SidebarItem;