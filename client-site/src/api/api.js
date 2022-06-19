import axios from 'axios';
const baseUrl = `http://localhost:3000`;

const app = {
    get: async (url, token, params, filter) => {
        const response = await axios.request({
            headers: {
                token: token,
            },
            method: "GET",
            url: `${baseUrl}/${url}?${params}=${filter}`
        });
        return response;
    },

    getOne: async (url) => {
        const response = await axios.request({
            method: "GET",
            url: `${baseUrl}/${url}`
        })

        return response;
    },

    post: async (url, data) => {
        const response = await axios({
            method: "POST",
            url: `${baseUrl}/${url}`,
            data: data
        });

        return response;
    },

    put: async (url, data) => {
        const response = await axios.request({
            method:"PUT",
            url: `${baseUrl}/${url}`,
            data: data
        });

        return response;
    },

    delete: async (url) => {
        const response = await axios.request({
            method: 'DELETE',
            url: `${baseUrl}/${url}`
        });

        return response;
    }
};

export default app;