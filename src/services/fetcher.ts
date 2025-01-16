interface AdminData {
  id: number;
  name: string;
}

interface StudentData {
  id: number;
  name: string;
  grade: number;
}

const fetchAdminData = async (): Promise<AdminData[]> => {
  try {
    const response = await fetch('/api/admin');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: AdminData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchAdminDataById = async (id: number): Promise<AdminData> => {
  try {
    const response = await fetch(`/api/admin/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: AdminData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchStudentsData = async (): Promise<StudentData[]> => {
  try {
    const response = await fetch('/api/students');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: StudentData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

const fetchStudentsDataById = async (id: number): Promise<StudentData> => {
  try {
    const response = await fetch(`/api/students/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: StudentData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

export { fetchAdminData, fetchStudentsData, fetchAdminDataById, fetchStudentsDataById };