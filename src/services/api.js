export const fetchConsignments = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Package A', status: 'In Transit' },
        { id: 2, name: 'Package B', status: 'Delivered' },
      ]);
    }, 500);
  });
};

export const fetchConsignmentById = async (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: `Package ${id}`, status: 'In Transit', details: 'Mock details here' });
    }, 500);
  });
};
