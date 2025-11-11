// // src/services/api.js
// import axios from 'axios';
// import Data from './Data.jsx';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: { 'Content-Type': 'application/json' },
// });

// // MOCK FALLBACK: If no backend, short-circuit with local mock
// const useMock = !API_BASE_URL || API_BASE_URL.includes('localhost');
import Data from './Data';

// Utility: simulate async delay
const delay = (ms = 300) => new Promise(res => setTimeout(res, ms));

// Consignments
export const fetchConsignments = async () => {
  await delay();
  return [...Data.consignments];
};

export const fetchConsignmentById = async (id) => {
  await delay();
  const consignment = Data.consignments.find(c => c.id === Number(id));
  if (!consignment) throw new Error("Consignment not found");
  return consignment;
};

export const createConsignment = async (data) => {
  await delay();
  const newConsignment = {
    id: Date.now(),
    ...data,
    lastUpdate: new Date().toISOString(),
  };
  Data.consignments.push(newConsignment);
  Data.systemLogs.push({
    id: Date.now(),
    action: `Created consignment ${newConsignment.reference || newConsignment.id}`,
    user: "system",
    timestamp: new Date().toISOString(),
  });
  return newConsignment;
};

export const updateConsignment = async (id, updates) => {
  await delay();
  const index = Data.consignments.findIndex(c => c.id === Number(id));
  if (index === -1) throw new Error("Consignment not found");
  Data.consignments[index] = {
    ...Data.consignments[index],
    ...updates,
    lastUpdate: new Date().toISOString(),
  };
  Data.systemLogs.push({
    id: Date.now(),
    action: `Updated consignment ${id}`,
    user: "system",
    timestamp: new Date().toISOString(),
  });
  return Data.consignments[index];
};

export const deleteConsignment = async (id) => {
  await delay();
  const index = Data.consignments.findIndex(c => c.id === Number(id));
  if (index === -1) throw new Error("Consignment not found");
  const [removed] = Data.consignments.splice(index, 1);
  Data.systemLogs.push({
    id: Date.now(),
    action: `Deleted consignment ${id}`,
    user: "system",
    timestamp: new Date().toISOString(),
  });
  return removed;
};

// Users
export const fetchUsers = async () => {
  await delay();
  return [...Data.users];
};

export const createUser = async (user) => {
  await delay();
  const newUser = { id: Date.now(), ...user };
  Data.users.push(newUser);
  Data.systemLogs.push({
    id: Date.now(),
    action: `Created user ${newUser.username}`,
    user: "system",
    timestamp: new Date().toISOString(),
  });
  return newUser;
};

export const updateUser = async (id, updates) => {
  await delay();
  const index = Data.users.findIndex(u => u.id === Number(id));
  if (index === -1) throw new Error("User not found");
  Data.users[index] = { ...Data.users[index], ...updates };
  Data.systemLogs.push({
    id: Date.now(),
    action: `Updated user ${id}`,
    user: "system",
    timestamp: new Date().toISOString(),
  });
  return Data.users[index];
};

export const deleteUser = async (id) => {
  await delay();
  const index = Data.users.findIndex(u => u.id === Number(id));
  if (index === -1) throw new Error("User not found");
  const [removed] = Data.users.splice(index, 1);
  Data.systemLogs.push({
    id: Date.now(),
    action: `Deleted user ${id}`,
    user: "system",
    timestamp: new Date().toISOString(),
  });
  return removed;
};

// Authentication
export const loginUser = async ({ username, password }) => {
  await delay();
  const user = Data.users.find(
    u => u.username === username && u.password === password
  );
  if (!user) throw new Error("Invalid credentials");
  return { token: "mock-token", user };
};
