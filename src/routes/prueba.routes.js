/* import { Router } from "express";
import * as pruebaController from "../controllers/oracle.pruebas.js"; */

const {Router} = require('express');
const {pruebaSelect, pruebaInsert,pruebaDelete,pruebaUpdate} = require('../controllers/oracle.pruebas');

const routePrueba = Router();

routePrueba.get("/prueba", pruebaSelect);
routePrueba.post("/insert", pruebaInsert);
routePrueba.put("/update/:id", pruebaUpdate);
routePrueba.delete("/delete/:id", pruebaDelete);

module.exports = routePrueba;