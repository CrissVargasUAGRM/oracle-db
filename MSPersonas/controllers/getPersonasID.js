const axios = require('axios');
const {config} = require('dotenv');
const {logger} = require('../utils/loggerMS');

config();

module.exports = {
    getPErsonaId: async(req, res, next) => {
        try {
            const resp = await axios.get(process.env.URL_API);
            logger.info(JSON.stringify(req.params));
            logger.info(JSON.stringify(req.headers));
            console.log(req.headers);
            //console.log(resp.data);
            return res.status(200).json(resp.data);   
        } catch (error) {
            logger.error(JSON.stringify(error));
            return res.status(400).json({error: error, tip: "Error al obtener datos del facade"});
        }
    }
}