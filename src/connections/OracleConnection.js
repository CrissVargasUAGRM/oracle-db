const oracledb = require('oracledb');
const {logger} = require('../utils/logger');
const dotenv = require('dotenv').config();

class OracleConnection {
    constructor(){
        oracledb.initOracleClient()
		this.config = {
			tag: "default",
			poolAlias: "default",
			user: process.env.USER,
			password: process.env.PASSWORD,
			connectionString: process.env.CONNECTIONSTRING,
		}
    }

    async open(){

        let connection;

        try {
            logger.info(`conectando a un pool ya creado`);
            connection = oracledb.getPool(this.config.poolAlias);
            logger.info(`Conexion a pool exitosa`);
            
        } catch (_) {
            logger.warn(`No existe un pool de conexiones crearemos uno.`);
            connection = await oracledb.createPool(this.config);
            logger.info(`Creacion del pool connections`);
        }

        return connection.getConnection({tag: process.env.TAG});
    }

    async closePool(){
        try {
            logger.info(`Se cerrara el pool de conexiones`);
            await oracledb.getPool(this.config.poolAlias).close(20);
            logger.info(`Pool cerrado`);
            process.exit(0);
        } catch (error) {
            logger.error(`Error al cerrar el Pool de conexiones ${error.message}`);
            process.exit(1);
        }
    }

    async querySelect(sql){
        try {
            const conn = await this.open();

            const result = await conn.execute(sql, [], {
                resultSet: true,
                outFormat: oracledb.OUT_FORMAT_OBJECT
            });

            const rows = result.resultSet.getRows();

            logger.info(`Sentencia ejecuta select: ${sql}`);

            conn.close();

            return rows;
        } catch (error) {
            logger.error(`Error al ejecuta la sentencia ${error.message}`);
            return error;
        }
    }

    async queryInsert(sql, row){
        try {
            const conn = await this.open();

            const result = await conn.execute(sql, row);

            logger.info(`Sentencia ejecutada ${sql}`);

            const rowAfected = result.rowsAffected;

            conn.commit();

            conn.close();
            
            return rowAfected;   

        } catch (error) {
            logger.error(`Error al ejecutar la sentencia: ${sql} ${error.message}`);
        }

    }

    async queryUpdate(sql, row){
        try {
            const conn = await this.open();
            const  result = await conn.execute(sql, row);
            logger.info(`Sentencia ejecutada ${sql}`);
            conn.commit();
            conn.close();
            return result.rowsAffected;
        } catch (error) {
            logger.error(`Error al ejecutar la sentencia ${sql}`);
        }
    }

    async queryDelete(table, id){
        try {
            const conn = await this.open();
            const sql = `DELETE FROM ${table} where id = ${id}`;
            logger.info(`Sentencia ejecutada ${sql}`);
            const result = await conn.execute(sql);
            conn.commit();
            conn.close();
            logger.info(`Eliminacion correcta`);
            return result.rowsAffected;
        } catch (error) {
            logger.error(`Error al ejecutar la sentencia ${sql} ${error.message}`);
        }
    }
}

module.exports = new OracleConnection();