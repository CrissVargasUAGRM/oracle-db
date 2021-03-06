const {Router} = require('express');
const {pruebaSelect, pruebaInsert,pruebaDelete,pruebaUpdate,dataPrueba} = require('../controllers/oracle.pruebas');
const {verifyToken} = require('../utils/authentication');

const routePrueba = Router();

routePrueba.get("/prueba", pruebaSelect);
routePrueba.post("/insert", pruebaInsert);
routePrueba.put("/update/:id", pruebaUpdate);
routePrueba.delete("/delete/:id", verifyToken, pruebaDelete);
routePrueba.get('/', dataPrueba);

module.exports = routePrueba;