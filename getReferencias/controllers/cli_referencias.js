const axios = require('axios');
const {config} = require('dotenv');
const {logger} = require('../utils/logger');

config();

module.exports = {
    getRef: async(req, res, next) => {
        try {
            const resp = await axios.get(process.env.URL_API);
            logger.info(`Headers: ${JSON.stringify(req.headers)}`);
            
            logger.info(JSON.stringify(resp.data));
            return res.status(200).json(resp.data);
        } catch (error) {
            logger.info(JSON.stringify(req.headers));
            console.log(req);
            logger.error(JSON.stringify(error));
            return res.status(400).json({error: error, tip: 'Error al obtener el facade', tip2: 'Error en la url'});
        }

    }

}