import { faHome, faUser, faCalendar, faNewspaper, faCircleQuestion, faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='bg-sideBarColor pt-10'>
      <SidebarItem icon={faHome} text="Home" route='/user'/>
      <SidebarItem icon={faUser} text="Profile" route='/user/profile'/>
      <SidebarItem icon={faCalendar} text="Grades" route='/user/grades'/>
      <SidebarItem icon={faNewspaper} text="ROTC News" route='/'/>
      <SidebarItem icon={faCircleQuestion} text="FAQ's" route='/'/>
      <SidebarItem icon={faHeart} text="Social Media Pages" route='/'/>
      <SidebarItem icon={faPenToSquare} text="Report an Issue" route='/'/>
    </div>
  );
};

export default Sidebar;