const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const routePrueba = require('./routes/prueba.routes');
const Conexion = require('./connections/OracleConnection');
const {logger} = require('./utils/logger');
const { logDebug } = require("./middlewares/logger");
const routerUser = require("./routes/user.routes");

class Server{
    constructor(port){
        this.port = port;
        this.app = express();
        this.path = "/api";

        this.app.use(cors({
            origin: true,
            credentials: true
        }));

        this.app.set('trust proxy', true);

        this.app.use(express.json());
        this.app.use(morgan('combined'));
        
        this.app.get('/', (req, res) => {
            res.setHeader('X-Foo', 'bar')
            res.send('Hello World!')
        });

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
        this.app.use(`${this.path}/auth`, routerUser);
    }

}

module.exports = Server;
