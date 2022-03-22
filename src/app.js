/* import express from "express";
import morgan from "morgan";
import { conexion } from "./connections/oracle.connection.js";
import pruebaRoutes from "./routes/prueba.routes.js";
import { logger } from "./utils/logger.js"; */

const express = require("express");
const morgan = require('morgan');
const Conexion = require("./connections/oracle.connection");
const routePrueba = require('./routes/prueba.routes');
const {logger} = require('./utils/logger');

class Server{
    constructor(port){
        this.port = port;
        this.app = express();
        this.path = "/api";

        this.app.set('trust proxy', true);

        this.app.use(express.json());
        this.app.use(morgan('combined'));

        /* conexion a oracle */
        /* this.conectarDB(); */

        /* Rutas */
        this.routes();

    }

    listen(){
        this.app.listen(this.port, (err) => {
            if(err){
                console.error(err);
            }else{
                logger.info(`Servidor corriendo en el puerto ${this.port}`);
            }
        });
    }

    async conectarDB(){
        await Conexion.getConexion();
    }

    routes(){
        this.app.use(`${this.path}/pruebaOracle`, routePrueba);
    }

}

module.exports = Server;
