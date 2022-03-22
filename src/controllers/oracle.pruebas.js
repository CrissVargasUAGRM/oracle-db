/* import oracledb from "oracledb";
import { conexion } from "../connections/oracle.connection.js";
import { logger } from "../utils/logger.js"; */

const oracledb = require('oracledb');
const Conexion = require('../connections/oracle.connection');
const {logger} = require('../utils/logger');

const connection = Conexion.getConexion();

const pruebaSelect = async(req, res, next) => {
    try {
        const pool = await connection;
        const result = await pool.execute(`SELECT * FROM CLIENTES_PRUEBA`,[],{resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT});

        const resp = await result.resultSet.getRows();

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);
        logger.warn("hola warn");

        return res.status(200).json(resp);

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

        const result = await (await connection).execute(sql, row);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);
        
        return res.status(200).send({resp: result.rowsAffected, message: "Insertado"});

        (await connection).commit();
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
        const result = await (await connection).execute(updateQuery,row);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);

        return res.status(200).json({resp: result.rowsAffected, message: "Actualizado"});
    } catch (err) {
        return res.status(400).json(err);
        logger.error(`${err.status}`);
    }
    
}

const pruebaDelete = async(req, res, next) => {
    try {
        const idCliente = req.params.id;

        const sql = "DELETE FROM CLIENTES_PRUEBA WHERE CLIENTES_PRUEBA.ID=:1";
        const row = [idCliente];

        const result = await (await connection).execute(sql, row);

        logger.info(req.originalUrl);
        logger.info(req.headers.host);
        logger.info(req.method);

        return res.status(200).json({resp: result.rowsAffected, message: "Eliminado"});
    } catch (err) {
        logger.error(err);
        logger.error(`Parametro de eliminacion incorrecto: ${req.params.id}`);
        return res.status(400).json(err);
    }
}

module.exports = {pruebaSelect, pruebaInsert, pruebaUpdate, pruebaDelete}