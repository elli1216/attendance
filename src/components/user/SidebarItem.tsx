import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
  route: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, route }) => {
  return (
    <Link to={route} className='flex items-center border-b gap-3 p-4 hover:bg-sideBarHoverColor hover:cursor-pointer'>
      <FontAwesomeIcon icon={icon} className='text-sideBarIconColor text-xl' />
      <h2 className='text-sideBarTextColor'>{text}</h2>
    </Link>
  );
};

export default SidebarItem;