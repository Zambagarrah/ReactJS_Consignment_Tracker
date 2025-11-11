// src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// MOCK FALLBACK: If no backend, short-circuit with local mock
const useMock = !API_BASE_URL || API_BASE_URL.includes('localhost');

export const fetchConsignments = async () => {
  if (useMock) {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { id: 1, name: 'Mombasa → Nairobi Freight', status: 'In Transit', reference: 'CN-001' },
            { id: 2, name: 'Machinery Parts', status: 'Delivered', reference: 'CN-002' },
            { id: 3, name: 'Perishables', status: 'Awaiting Pickup', reference: 'CN-003' },
          ]),
        300
      )
    );
  }
  const res = await api.get('/consignments');
  return res.data;
};

export const fetchConsignmentById = async (id) => {
  if (useMock) {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            id: Number(id),
            name: `Consignment ${id}`,
            status: id % 2 ? 'In Transit' : 'Delivered',
            details: 'Handled by Coast Transport Co.',
            reference: `CN-${String(id).padStart(3, '0')}`,
            origin: 'Mombasa',
            destination: 'Nairobi',
            lastUpdate: new Date().toISOString(),
          }),
        300
      )
    );
  }
  const res = await api.get(`/consignments/${id}`);
  return res.data;
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

export const loginUser = async (credentials) => {
  if (useMock) {
    const role = credentials.username === 'admin' ? 'admin' : 'user';
    return new Promise((resolve) =>
      setTimeout(() => resolve({ token: 'mock-token', user: { username: credentials.username, role } }), 250)
    );
  }
  const res = await api.post('/auth/login', credentials);
  return res.data;
};
