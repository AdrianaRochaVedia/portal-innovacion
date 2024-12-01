import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:4000/api';
const httpClient = fetchUtils.fetchJson;

const handleFileUpload = (data) => {
    const formData = new FormData();
    for (const key in data) {
        if (data[key] instanceof File) {
            formData.append(key, data[key]); // Manejar archivos
        } else if (Array.isArray(data[key])) {
            data[key].forEach((item) => formData.append(key, item)); // Manejar listas
        } else {
            formData.append(key, data[key]); // Agregar otros campos
        }
    }
    return formData;
};

const dataProvider = {
    getList: async (resource, params) => {
        const { page, perPage, sort, filter } = params;
        const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}`;

        const { json, headers } = await httpClient(url);
        const total = headers.get('x-total-count');

        return {
            data: json,
            total: total ? parseInt(total, 10) : json.length,
        };
    },

    getOne: async (resource, params) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;
        const { json } = await httpClient(url);
        return { data: json };
    },

    create: async (resource, params) => {
        const { data } = params;
        const hasFile = Object.values(data).some((value) => value instanceof File);

        const body = hasFile ? handleFileUpload(data) : JSON.stringify(data);
        const headers = hasFile ? {} : { 'Content-Type': 'application/json' };

        const url = `${apiUrl}/${resource}`;
        const { json } = await httpClient(url, {
            method: 'POST',
            body,
            headers: new Headers(headers),
        });

        return { data: json };
    },

    update: async (resource, params) => {
        const { id, data } = params;
        const hasFile = Object.values(data).some((value) => value instanceof File);

        const body = hasFile ? handleFileUpload(data) : JSON.stringify(data);
        const headers = hasFile ? {} : { 'Content-Type': 'application/json' };

        const url = `${apiUrl}/${resource}/${id}`;
        const { json } = await httpClient(url, {
            method: 'PUT',
            body,
            headers: new Headers(headers),
        });

        return { data: json };
    },

    delete: async (resource, params) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;
        await httpClient(url, { method: 'DELETE' });
        return { data: {} };
    },
};

export default dataProvider;