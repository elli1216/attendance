import React, { useState } from 'react'
import { isValidEmail, isEmpty, isValidPassword, checkEmailExists } from '../../utils/validation';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(phoneNumber) || isEmpty(password) || isEmpty(confirmPassword) || isEmpty(gender)) {
      setError('Please input all fields.');
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

    if (await checkEmailExists(email)) {
      setError('Email already exists.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await registerUser(firstName, middleName, lastName, email, phoneNumber, password, gender);
      toast.success('User successfully registered!');
      navigate('/auth/login');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  }

  return (
    <div className="flex justify-center bg-authBg bg-cover min-h-screen w-[100vw]">
      <div className="opacity-80 bg-divAuthColor my-10 px-16 py-10 rounded-lg">
        <form onSubmit={handleRegister} className="grid gap-4 justify-center items-center">
          <h1 className="text-3xl text-white font-bold">Registration</h1>
          <div className="flex gap-2">
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="first_name">First Name*</label>
              <input className="p-2" type="text" id="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="middle_name">Middle Name</label>
              <input className="p-2" type="text" id="middle_name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="last_name">Last Name*</label>
              <input className="p-2" type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-2">
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="email">Email Address*</label>
              <input className="p-2" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="phone_number">Phone Number*</label>
              <input className="p-2" type="number" id="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-2">
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="password">Password*</label>
              <input className="p-2" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="grid grid-rows-[auto_auto] gap-2">
              <label className="text-white pl-1" htmlFor="confirmPassword">Confirm Password*</label>
              <input className="p-2" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-rows-[auto_auto] gap-2">
            <label className="text-white pl-1">Gender*</label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input type="radio" id="male" name="gender" value="male" className="mr-2" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="male" className="text-white">Male</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="female" name="gender" value="female" className="mr-2" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="female" className="text-white">Female</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="other" name="gender" value="other" className="mr-2" onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="other" className="text-white">Other</label>
              </div>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid gap-2">
            <button className="bg-buttonColor text-white px-2 py-1 w-[20rem] h-[3rem]">Register</button>
            <h1 className="text-white text-xl font-semibold">Already have an account? <a className="underline text-linkColor" href="">Login</a></h1>
            <h1 className="text-white text-lg">By clicking register, you agree to the <a className="underline text-linkColor" href="">Terms and Conditions</a></h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register