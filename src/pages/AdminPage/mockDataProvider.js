const mockData = {
  usuarios: [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', rol: 'Admin', isDeleted: false, isCentro: true, isSociedad: false, isDocente: false, isGraduado: false },
    { id: 2, name: 'María López', email: 'maria.lopez@example.com', rol: 'User', isDeleted: false, isCentro: false, isSociedad: true, isDocente: true, isGraduado: false },
    { id: 3, name: 'Carlos García', email: 'carlos.garcia@example.com', rol: 'Editor', isDeleted: false, isCentro: false, isSociedad: false, isDocente: true, isGraduado: true },
  ],
};

let nextId = mockData.usuarios.length + 1;

const mockDataProvider = {
  getList: (resource, params) => {
    if (!mockData[resource]) {
        return Promise.reject(new Error(`Recurso no encontrado: ${resource}`));
    }

    const { page = 1, perPage = 10 } = params.pagination || {};
    const { field, order } = params.sort || {};
    const { name } = params.filter || {};

    let data = [...mockData[resource]];

    // Filtrar por nombre
    if (name) {
        const regex = new RegExp(name, "i");
        data = data.filter((item) => regex.test(item.name));
    }

    // Ordenar
    if (field) {
        data.sort((a, b) => (order === "ASC" ? a[field] > b[field] : a[field] < b[field]) ? 1 : -1);
    }

    const start = (page - 1) * perPage;
    const end = start + perPage;

    return Promise.resolve({
        data: data.slice(start, end),
        total: data.length,
    });
  },

  getOne: (resource, params) => {
    if (!mockData[resource]) {
      return Promise.reject(new Error(`Recurso no encontrado: ${resource}`));
    }

    const record = mockData[resource].find((item) => item.id === params.id);
    if (!record) {
      return Promise.reject(new Error(`Registro no encontrado para ID: ${params.id}`));
    }

    return Promise.resolve({ data: record });
  },

  create: (resource, params) => {
    if (!mockData[resource]) {
        return Promise.reject(new Error(`Recurso no encontrado: ${resource}`));
    }

    const { name, email, rol } = params.data || {};
    if (!name || !email || !rol) {
        return Promise.reject(new Error("Nombre, email y rol son obligatorios"));
    }

    const newRecord = { id: nextId++, ...params.data };
    mockData[resource].push(newRecord);

    return Promise.resolve({ data: newRecord });
  },

  update: (resource, params) => {
    if (!mockData[resource]) {
      return Promise.reject(new Error(`Recurso no encontrado: ${resource}`));
    }

    const index = mockData[resource].findIndex((item) => item.id === params.id);
    if (index === -1) {
      return Promise.reject(new Error(`Registro no encontrado para actualizar con ID: ${params.id}`));
    }

    mockData[resource][index] = { ...mockData[resource][index], ...params.data };
    return Promise.resolve({ data: mockData[resource][index] });
  },

  delete: (resource, params) => {
    if (!mockData[resource]) {
      return Promise.reject(new Error(`Recurso no encontrado: ${resource}`));
    }

    const index = mockData[resource].findIndex((item) => item.id === params.id);
    if (index === -1) {
      return Promise.reject(new Error(`Registro no encontrado para eliminar con ID: ${params.id}`));
    }

    const deletedItem = mockData[resource].splice(index, 1)[0];
    return Promise.resolve({ data: deletedItem });
  },
};

export default mockDataProvider;