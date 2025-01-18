import axios from 'axios';

interface LoginResponse {
  token: string;
  user: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    password: string;
    gender: string;
  }
}
const URL = 'http://localhost:5000';

const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${URL}/auth/login`, {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    return data;
  } catch (err) {
    console.error('Error logging in:', err);
    throw err;
  }
}

const registerUser = async (firstName: string, middleName: string, lastName: string, email: string, phoneNumber: string, password: string, gender: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${URL}/auth/register`, {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      password: password,
      gender: gender
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    return data;
  } catch (err) {
    console.error('Error registering:', err);
    throw err;
  }
}

export { loginUser, registerUser };