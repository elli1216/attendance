import axios from 'axios';

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
    const response = await axios.get<AdminData[]>('/api/admin');
    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchAdminDataById = async (id: number): Promise<AdminData> => {
  try {
    const response = await axios.get<AdminData>(`/api/admin/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchStudentsData = async (): Promise<StudentData[]> => {
  try {
    const response = await axios.get<StudentData[]>('/api/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

const fetchStudentsDataById = async (id: number): Promise<StudentData> => {
  try {
    const response = await axios.get<StudentData>(`/api/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

export { fetchAdminData, fetchStudentsData, fetchAdminDataById, fetchStudentsDataById };