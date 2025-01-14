import MainItem from "./MainItem"
import { faUser, faCalendar, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Main = () => {
  const date = new Date();

  return (
    <div className="flex-row bg-mainColor">
      <div className="flex-row justify-between p-2 ">
        <div className="bg-white p-2 mb-3 text-xl">Home</div>
        <div className="bg-green p-4 text-3xl"><span className="text-red">Welcome,</span> Juan Dela Cruz</div>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
          <MainItem icon={faUser} text="Profile" />
          <MainItem icon={faBell} text="Grades" />
          <MainItem icon={faEnvelope} text="Notification" />
          <MainItem icon={faCalendar} text="Attendance" />
        </div>
        <div className="p-4">
          <Calendar value={date} />
        </div>
      </div>
    </div>
  )
}

export default Main