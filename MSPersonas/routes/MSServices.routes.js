const { Router } = require("express");
const {
  getPErsonaId,
  sendNroPersona,
  sendPersonasFisicas,
  sendActEconomica,
  sendReferencias,
  pruebaPost
} = require("../controllers/getPersonasID");

const routesMS = Router();

routesMS.get("/getId", getPErsonaId);
routesMS.get("/getPer", sendNroPersona);
routesMS.get("/getDataPer/:nroPer", sendPersonasFisicas);
routesMS.get("/getActEco/:nroPer", sendActEconomica);
routesMS.get("/getRef/:nroPer", sendReferencias);
routesMS.post('/pruebaPost', pruebaPost);

module.exports = routesMS;
