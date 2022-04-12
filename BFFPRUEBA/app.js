const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
//const { logger } = require("./utils/logger");

const routerRef = require('./router/bff.routes');
//const routerPrueba = require('./router/peticiones.routes');

class Server{
    constructor(port){
        this.port = port;
        this.app = express();
        this.path = "/bff";

        this.app.use(cors({
            origin: true,
            credentials: true
        }));

        this.app.set('trust proxy', true);

        this.app.use(express.json());
        this.app.use(morgan('dev'));
        
        this.app.get('/', (req, res) => {
            res.send('Hello MS-Personas!')
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
                //logger.info(`MicroServicio corriendo en el puerto ${this.port}`);
                console.log(`MicroServicio corriendo en el puerto ${this.port}`);
            }
        });
    }

    async conectarDB(){
        
    }

    routes(){
        this.app.use(`${this.path}`, routerRef);
        //this.app.use(`${this.path}`, routerPrueba);
    }

}

module.exports = Server;
