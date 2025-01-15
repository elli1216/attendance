const fetchAdminData = async () => {
  try {
    const response = await fetch('/api/admin');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
};

const fetchAdminDataById = async (id) => {
  try {
    const response = await fetch(`/api/admin/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchStudentsData = async () => {
  try {
    const response = await fetch('/api/students');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
};

const fetchStudentsDataById = async (id) => {
  try {
    const response = await fetch(`/api/students/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

export { fetchAdminData, fetchStudentsData, fetchAdminDataById, fetchStudentsDataById };