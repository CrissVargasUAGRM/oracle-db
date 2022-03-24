const oracledb = require('oracledb');
const {logger} = require('../utils/logger');
const Conexion = require('../connections/OracleConnection');

const pruebaSelect = async(req, res, next) => {
    try {

        const statement = "SELECT * FROM CLIENTES_PRUEBA";
        const result = await Conexion.querySelect(statement);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);

        return res.status(200).json(result);

    } catch (err) {
        logger.error(err);
        return res.status(400).json(err);
    }
}

const pruebaInsert = async(req, res, next) => {
    try {
        const {id, name, age, address, salario} = req.body;

        const sql = 'INSERT INTO CLIENTES_PRUEBA (ID, NAME, AGE, ADDRESS, SALARIO) VALUES (:1, :2, :3, :4, :5)';
        
        const row = [id, name, age, address, salario];

        const result = await Conexion.queryInsert(sql, row);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);
        
        return res.status(200).send({resp: result, message: "Insertado"});
    } catch (err) {
        logger.error(err);
        return res.status(400).json(err);
    }
    
} 

const pruebaUpdate = async(req, res, next) => {
    try {
        const idCliente = req.params.id;
        const {name, age, salario} = req.body;

        const updateQuery = "UPDATE CLIENTES_PRUEBA SET NAME=:1, AGE=:2, SALARIO=:3 WHERE ID=:4";
        const row = [name,age,salario,idCliente];
        const result = await Conexion.queryUpdate(updateQuery, row);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);

        return res.status(200).json({resp: result, message: "Actualizado"});
    } catch (err) {
        logger.error(`${err.status}`);
        return res.status(400).json(err);
        
    }
    
}

const pruebaDelete = async(req, res, next) => {
    try {
        const idCliente = req.params.id;

        const result = await Conexion.queryDelete("CLIENTES_PRUEBA", idCliente);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);

        return res.status(200).json({resp: result, message: "Eliminado"});
    } catch (err) {
        logger.error(err);
        logger.error(`Parametro de eliminacion incorrecto: ${req.params.id}`);
        return res.status(400).json(err);
    }
}

module.exports = {pruebaSelect, pruebaInsert, pruebaUpdate, pruebaDelete}