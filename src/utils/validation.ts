const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  // Example: Password must be at least 8 characters long
  return password.length >= 8;
};

const isEmpty = (value: string): boolean => {
  if (value.trim() === '') {
    return true;
  }
  return false;
}

const checkEmailExists = async (email: string) => {
  const existingUsers = await fetch('http://localhost:5000/api/students').then(res => res.json());
  return existingUsers.some((user: { email: string }) => user.email === email);
};

export { isValidEmail, isValidPassword, isEmpty, checkEmailExists };