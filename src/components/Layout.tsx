import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

const Layout = () => {
  return (
    <div className='grid grid-rows-body h-screen'>
      <Header />
      <div className='grid grid-cols-mainContent'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default Layout