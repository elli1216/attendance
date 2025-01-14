import { faHome, faUser, faCalendar, faNewspaper, faCircleQuestion, faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='bg-sideBarColor pt-10'>
      <SidebarItem icon={faHome} text="Home" />
      <SidebarItem icon={faUser} text="Profile" />
      <SidebarItem icon={faCalendar} text="Grades" />
      <SidebarItem icon={faNewspaper} text="ROTC News" />
      <SidebarItem icon={faCircleQuestion} text="FAQ's" />
      <SidebarItem icon={faHeart} text="Social Media Pages" />
      <SidebarItem icon={faPenToSquare} text="Report an Issue" />
    </div>
  );
};

export default Sidebar;