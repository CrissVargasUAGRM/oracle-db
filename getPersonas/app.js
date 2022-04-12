const express = require("express");
const morgan = require('morgan');
const cors = require('cors');

const routePer = require('./routes/personas.routes');

const { logger } = require("./utils/logger");

class Server{
    constructor(port){
        this.port = port;
        this.app = express();
        this.path = "/ms";

        this.app.use(cors({
            origin: true,
            credentials: true
        }));

        this.app.set('trust proxy', true);

        this.app.use(express.json());
        this.app.use(morgan('dev'));
        
        this.app.get('/', (req, res) => {
            res.setHeader('X-Foo', 'bar')
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
                logger.info(`MicroServicio corriendo en el puerto ${this.port}`);
                
            }
        });
    }

    async conectarDB(){
        
    }

    routes(){
        this.app.use(`${this.path}/per`, routePer);
        // this.app.use(`${this.path}/ref`, routePreuba);
    }

}

module.exports = Server;
