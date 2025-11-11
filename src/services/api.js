import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Consignments
export const fetchConsignments = async () => {
  const response = await api.get('/consignments');
  return response.data;
};

export const fetchConsignmentById = async (id) => {
  const response = await api.get(`/consignments/${id}`);
  return response.data;
};

export const createConsignment = async (data) => {
  const response = await api.post('/consignments', data);
  return response.data;
};

// Authentication
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Consignments
export const fetchConsignments = async () => {
  const response = await api.get('/consignments');
  return response.data;
};

export const fetchConsignmentById = async (id) => {
  const response = await api.get(`/consignments/${id}`);
  return response.data;
};

export const createConsignment = async (data) => {
  const response = await api.post('/consignments', data);
  return response.data;
};

// Authentication
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};
