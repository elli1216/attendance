import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div className='grid grid-rows-body h-screen'>
      <Header />
      <div className='grid grid-cols-mainContent'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout