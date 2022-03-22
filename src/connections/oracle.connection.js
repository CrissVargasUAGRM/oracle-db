/* import OracleDB from "oracledb";
import { logger } from "../utils/logger.js"; */

const OracleDB = require('oracledb');
const {logger} = require('../utils/logger');
const dotenv = require('dotenv');

class Conexion {
    
    constructor(){
        dotenv.config();
        this.config = {
            user: process.env.USER,
            password: process.env.PASSWORD,
            connectionString: process.env.CONNECTIONSTRING
        }
        this.conexion = null;
    }

    createConexion = async() => {
        try {
            const pool = await OracleDB.createPool({
                poolAlias: "BGPOOL",
                user: process.env.USER,
                password: process.env.PASSWORD,
                connectionString: process.env.CONNECTIONSTRING
            });
            return pool;
        } catch (error) {
            logger.error(error);
        }
    }

    getConexion = async() => {
        try {
            this.conexion = (await this.createConexion()).getConnection({tag: "BG"});
            logger.info(`Conexion exitosa a oracle ${this.config.connectionString}`);
            return this.conexion;
        } catch (error) {
            logger.error(`Error en al conexion a la base de datos ${this.config.user} ${this.config.password} ${this.config.connectionString} ${error}`);
        }
    }

    cerrarConexion = async() => {
        const conect = await this.conexion;
        logger.info("Conexion cerrada");
        conect.close();
    }
}

module.exports = new Conexion();