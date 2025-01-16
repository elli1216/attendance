import axios from 'axios';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

interface LoginResponse {
  id: number
  token: string;
  email: string;
}

const loginUser = async (email: string, password: string, signIn: ReturnType<typeof useSignIn>): Promise<void> => {
  try {
    const response = await axios.post<LoginResponse>('/api/auth/login', {
      username: email,
      password,
    });

    const data = response.data;

    if (signIn({
      auth: {
        token: data.token,
        type: 'bearer',
      },
      userState: {email: data.email, id: data.id}
    })) {
      return
    } else {
      throw new Error('Login failed');
    }
  } catch (err) {
    console.error('Error logging in:', err);
    throw err;
  }
}

export { loginUser };