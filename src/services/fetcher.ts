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
const URL = 'http://localhost:3001';

const fetchAdminData = async (): Promise<AdminData[]> => {
  try {
    const response = await axios.get<AdminData[]>(`${URL}/api/admin`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchAdminDataById = async (id: number): Promise<AdminData> => {
  try {
    const response = await axios.get<AdminData>(`${URL}/api/admin/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
}

const fetchStudentsData = async (): Promise<StudentData[]> => {
  try {
    const response = await axios.get<StudentData[]>(`${URL}/api/students`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

const fetchStudentsDataById = async (id: number): Promise<StudentData> => {
  try {
    const response = await axios.get<StudentData>(`${URL}/api/student/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students data:', error);
    throw error;
  }
}

export { fetchAdminData, fetchStudentsData, fetchAdminDataById, fetchStudentsDataById };