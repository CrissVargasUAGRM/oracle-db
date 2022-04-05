const {logger} = require('../utils/logger');
const Conexion = require('../connections/OracleConnection');
const {queryParam} = require('../data/user.data');
const {comparePass, getJwt} = require('../utils/authentication');
const {dataCredentialsValidator} = require('../utils/user.validator');


module.exports = {
    getuser: async (req, res, next) => {
        try {
            const {email, password} = req.body;

            dataCredentialsValidator(req, res);

            const result = await queryParam(email);
            if(!result){
                return res.status(403).send({message: "email no encontrado"});
            }
            const compare = comparePass(password, result.PASSWORD);

            if(!compare){
                return res.status(403).send({message: "contraseña incorrecta"});
            }

            const token = getJwt(email);
            
            return res.status(200).json({token: token, email: email});     
        } catch (error) {
            logger.error(`Error en el controller ${error.message}`);
            return res.status(404).json({message: error.message});
        }

    }
}