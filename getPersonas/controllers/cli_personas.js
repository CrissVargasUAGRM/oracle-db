const axios = require('axios');
const {config} = require('dotenv');
const {logger} = require('../utils/logger');

config();

module.exports = {
    getPersonas: async(req, res, next) => {
        try {
            const resp = await axios.get(process.env.URL_API);
            logger.info(JSON.stringify(resp.data));
            logger.info(JSON.stringify(resp.headers));
            console.log(req.headers);
            return res.status(200).json(resp.data);
        } catch (error) {
            logger.error(JSON.stringify(error));
            return res.status(400).json({error: error, tip: 'Error al consultar el facade'});
        }
    }
}