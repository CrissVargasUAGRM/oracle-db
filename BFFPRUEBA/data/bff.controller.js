const axios = require("axios");
const {config} = require('dotenv');
const { request, response } = require("express");
const {
  msPersonas, msRefecncia, msPer, msactividad
} = require("../functions/peticiones.services");

config();

module.exports = {
  getData: async (req, res) => {
    try {
        const resp = await Promise.all([
            await msPersonas(),
            await msRefecncia(),
            await msPer(),
            await msactividad()
        ]);

        resp.map((value) => {
            if(value.length === undefined){
                throw new Error('Bad request');
            }
        });

        return res.status(200).json(resp);
    } catch (error) {
        return res.status(400).json({ message: "Error BFF", error: error });
    }
  },
};
