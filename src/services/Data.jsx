// src/services/Data.jsx
// Acts as our dummy "database" for the app

const Data = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin123", // for demo only
      role: "admin",
    },
    {
      id: 2,
      username: "user1",
      password: "user123",
      role: "user",
    },
    {
      id: 3,
      username: "user2",
      password: "user123",
      role: "user",
    },
  ],

  consignments: [
    {
      id: 1,
      name: "Mombasa → Nairobi Freight",
      reference: "CN-001",
      status: "In Transit",
      origin: "Mombasa",
      destination: "Nairobi",
      details: "Handled by Coast Transport Co.",
      lastUpdate: "2025-11-10T08:30:00Z",
    },
    {
      id: 2,
      name: "Machinery Parts",
      reference: "CN-002",
      status: "Delivered",
      origin: "Kisumu",
      destination: "Nairobi",
      details: "Delivered safely to Nairobi Industrial Area.",
      lastUpdate: "2025-11-09T14:00:00Z",
    },
    {
      id: 3,
      name: "Perishables",
      reference: "CN-003",
      status: "Awaiting Pickup",
      origin: "Malindi",
      destination: "Mombasa",
      details: "Awaiting pickup at Malindi depot.",
      lastUpdate: "2025-11-11T07:45:00Z",
    },    
        {
      id: 4,
      name: "Mombasa → Nairobi Freight",
      reference: "CN-004",
      status: "In Transit",
      origin: "Mombasa",
      destination: "Nairobi",
      details: "Handled by Coast Transport Co.",
      lastUpdate: "2025-11-10T08:30:00Z",
    },
    {
      id: 5,
      name: "Machinery Parts",
      reference: "CN-005",
      status: "Delivered",
      origin: "Kisumu",
      destination: "Nairobi",
      details: "Delivered safely to Nairobi Industrial Area.",
      lastUpdate: "2025-11-09T14:00:00Z",
    },
    {
      id: 6,
      name: "Perishables",
      reference: "CN-006",
      status: "Awaiting Pickup",
      origin: "Malindi",
      destination: "Mombasa",
      details: "Awaiting pickup at Malindi depot.",
      lastUpdate: "2025-11-11T07:45:00Z",
    },
    {
      id: 7,
      name: "Mombasa → Nairobi Freight",
      reference: "CN-007",
      status: "In Transit",
      origin: "Mombasa",
      destination: "Nairobi",
      details: "Handled by Coast Transport Co.",
      lastUpdate: "2025-11-10T08:30:00Z",
    },
    {
      id: 8,
      name: "Machinery Parts",
      reference: "CN-008",
      status: "Delivered",
      origin: "Kisumu",
      destination: "Nairobi",
      details: "Delivered safely to Nairobi Industrial Area.",
      lastUpdate: "2025-11-09T14:00:00Z",
    },
    {
      id: 9,
      name: "Perishables",
      reference: "CN-003",
      status: "Awaiting Pickup",
      origin: "Malindi",
      destination: "Mombasa",
      details: "Awaiting pickup at Malindi depot.",
      lastUpdate: "2025-11-11T07:45:00Z",
    },               
  ],

  systemLogs: [
    {
      id: 1,
      action: "User login",
      user: "admin",
      timestamp: "2025-11-11T09:00:00Z",
    },
    {
      id: 2,
      action: "Created consignment CN-003",
      user: "user1",
      timestamp: "2025-11-11T07:50:00Z",
    },
  ],

  settings: {
    theme: "pink",
    notificationsEnabled: true,
  },
};

export default Data;
