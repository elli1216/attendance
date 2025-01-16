const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  // Example: Password must be at least 8 characters long
  return password.length >= 8;
};

export { isValidEmail, isValidPassword };