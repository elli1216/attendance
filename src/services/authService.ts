// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoginUser = async (email: string, password: string): Promise<any> => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login successful:', data);
    // Handle successful login (e.g., store token, redirect user)
    return data;
  } catch (err) {
    console.error('Error logging in:', err);
    throw err;
  }
}

export { LoginUser };