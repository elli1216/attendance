import { faHome, faUser, faCalendar, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='bg-sideBarColor pt-10'>
      <SidebarItem icon={faHome} text="Home" route='/user'/>
      <SidebarItem icon={faUser} text="Profile" route='/user/profile'/>
      <SidebarItem icon={faCalendar} text="Grades" route='/user/grades'/>
      <SidebarItem icon={faPenToSquare} text="Report an Issue" route='/user/report'/>
    </div>
  );
};

export default Sidebar;