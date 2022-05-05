const axios = require("axios");
const {config} = require('dotenv');
const { request, response } = require("express");
const {
  msPersonas, msRefecncia, msPer, msactividad
} = require("../functions/peticiones.service");

config();

module.exports = {
  getData: async (req, res) => {

   /*  try {
        const resp = await Promise.all([
            //const nropersona  = await msPersonas(),
            //const data = await obtenerDatos(nroPersona)
            
            //const obtenerDatos = (nropersona)=>{
             Promise.all()
              await msRefecncia(),
            await msPer(),
            await msactividad()
            return data
            }
            await msRefecncia(),
            await msPer(),
            await msactividad()
        ]);

        resp.map((value) => {
            if(value.length === undefined){
                throw new Error({error: "Error en un microservicio"});
            }
        });

        return res.status(200).json(resp);
    } catch (error) {
        return res.status(400).json({ message: "Error BFF", error: error });
    } */
  },

  getPrueba: async (req, res) => {
    try {
      const resp1 = await axios.get(process.env.MS_PERSONAS, {
        headers: {
            user: process.env.USERTAPI,
            password: process.env.PASSTAPI
        }
      });
      const resp2 = await axios.get(process.env.MS_REFERENCIAS);
      const resp3 = await axios.get(process.env.MS_PER);
      const resp4 = await axios.get(process.env.MS_ACTIVIDAD);
      const resp = [resp1.data, resp2.data, resp3.data, resp4.data];
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(400).json({error});
    }
  }
};
