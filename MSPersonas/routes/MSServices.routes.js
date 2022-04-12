const {Router} = require('express');
const {getPErsonaId} = require('../controllers/getPersonasID');

const routesMS = Router();

routesMS.get('/getId', getPErsonaId);

module.exports = routesMS;