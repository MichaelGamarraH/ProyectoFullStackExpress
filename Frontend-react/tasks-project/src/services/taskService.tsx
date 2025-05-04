import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';

export const getAllTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getTaskById = async (id: string | number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createTask = async (task: { title: string; completed: boolean }) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const updateTask = async (id: string | number, task: { title: string; completed: boolean }) => {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
};

export const deleteTask = async (id: string | number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
