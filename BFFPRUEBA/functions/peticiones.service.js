const axios = require('axios');
const {config} = require('dotenv');

config();

module.exports = {
    msPersonas: async() => {
        try {
            const token = 'dsahdiquw12321iu134ui';
            const resp = await axios.get(process.env.MS_PERSONAS, {
                headers: {
                    user: process.env.USERTAPI,
                    password: process.env.PASSTAPI,
                    token: `Bearer ${token}`
                }
            });
            const datos = resp.data;
            return datos;
        } catch (error) {
            return error;
        }
    },

    msRefecncia: async() => {
        try {
            const resp = await axios.get(process.env.MS_REFERENCIAS, {
                headers: {
                    user: process.env.USERTAPI,
                    password: process.env.PASSTAPI
                }
            });
            const datos = resp.data;
            return datos;
        } catch (error) {
            return error;
        }
    },

    msPer: async() => {
        try {
            const resp = await axios.get(process.env.MS_PER, {
                headers: {
                    user: process.env.USERTAPI,
                    password: process.env.PASSTAPI
                }
            });
            const datos = resp.data;
            return datos;
        } catch (error) {
            return error;
        }
    },

    msactividad: async() => {
        try {
            const resp = await axios.get(process.env.MS_ACTIVIDAD, {
                headers: {
                    user: process.env.USERTAPI,
                    password: process.env.PASSTAPI
                }
            });
            const datos = resp.data;
            return datos;
        } catch (error) {
            return error;
        }
    }
}

