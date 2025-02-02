import React, { useState } from 'react';
import { isValidEmail, isEmpty, isValidPassword } from '../../utils/validation';
import { loginUser } from '../../services/authService';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isEmpty(email) || isEmpty(password)) {
      setError('Please input fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      toast.success('User successfully registered!');
      navigate('/user');
      
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center bg-authBg bg-cover min-h-screen w-[100vw]">
      <div className="flex-row justify-center items-center">
        <div className="flex justify-center">
          <img className="w-48" src="/images/login-logo.png" alt="" />
        </div>
        <div className="opacity-80 bg-divAuthColor px-16 py-10 rounded-lg">
          <form onSubmit={handleLogin} className="grid grid-rows-[repeat(4,_auto)] gap-4">
            <h1 className="text-3xl text-white font-bold">Login to your account</h1>
            <input className="p-2" type="email" placeholder="johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="p-2" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" name="checkbox" />
                <label className="text-white pl-1" htmlFor="checkbox">Remember Me</label>
              </div>
              <div>
                <button className="bg-buttonColor text-white px-2 py-1">Login</button>
              </div>
            </div>
          </form>
          <div className="grid gap-2 mt-2 p-2">
            <h1 className="text-white text-2xl font-bold">Forgot your password?</h1>
            <h1 className="text-white">no worries, <a className="underline text-linkColor" href="">please click here</a><br /> to reset your password.</h1>
            <div className="border-dotted border-b-[1px] border-b-white divide-dotted"></div>
            <h1 className="text-white text-lg">Don't have an account yet?</h1>
            <button className="bg-buttonColor text-white px-2 py-1 w-[10rem]">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
