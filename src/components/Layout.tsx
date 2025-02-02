import Grades from './user/Grades';
import UserMain from './user/UserMain';
import Profile from './user/Profile';
import UserLayout from './user/UserLayout';
import Report from './user/Report';
import Register from './auth/Register';
import Login from './auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router';

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='*' element={<div>Not Found</div>} />
        <Route path='/user' element={<UserLayout />}>
          <Route index element={<UserMain />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/grades' element={<Grades />} />
          <Route path='/user/report' element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout