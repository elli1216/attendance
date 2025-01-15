import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div className='grid grid-rows-body h-[100vh]'>
      <Header />
      <div className='grid grid-cols-mainContent overflow-hidden'>
        <Sidebar />
        <div className='overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout