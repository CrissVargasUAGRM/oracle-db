const Conexion = require('../connections/OracleConnection');
const oracledb = require('oracledb');
const {logger} = require('../utils/logger');

module.exports = {
    queryParam: async(email) => {
        try {
            const conn = await Conexion.open();

            const sql = `SELECT up.email, up.password FROM user_prueba up WHERE up.email = '${email}'`;

            const result = await conn.execute(sql, [], {
                resultSet: true,
                outFormat: oracledb.OUT_FORMAT_OBJECT
            });

            const row = result.resultSet.getRow();

            logger.info(`Sentencia ejecutada ${sql}`);

            conn.close();

            return row;
        } catch (error) {
            logger.error(`Èrror al ejecutar la sentencia ${error.message}`);
        }
    }
}