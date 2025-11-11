// src/services/api.js
import axios from 'axios';
import Data from './Data.jsx';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// MOCK FALLBACK: If no backend, short-circuit with local mock
const useMock = !API_BASE_URL || API_BASE_URL.includes('localhost');

export const fetchConsignments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Data.consignments), 300);
  });
};

export const fetchConsignmentById = async (id) => {
  return new Promise((resolve, reject) => {
    const consignment = Data.consignments.find((c) => c.id === Number(id));
    consignment ? resolve(consignment) : reject("Not found");
  });
};

export const createConsignment = async (data) => {
  if (useMock) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ id: Date.now(), ...data }), 300)
    );
  }
  const res = await api.post('/consignments', data);
  return res.data;
};

export const loginUser = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    const user = Data.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      resolve({ token: "mock-token", user });
    } else {
      reject("Invalid credentials");
    }
  });
};
