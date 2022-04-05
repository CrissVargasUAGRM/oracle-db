const { sign, verify } = require('jsonwebtoken');
const {config} = require('dotenv');
const {queryParam} = require('../data/user.data');

config();

module.exports = {
    comparePass: (pass1, pass2) => {
        if(pass1 === pass2){
            return true;
        }
        return false;
    },

    getJwt: (datos) => {
        const token = sign({email: datos},  process.env.SECRET, {
            expiresIn: 3600
        });

        return token;
    },

    verifyToken: async(req, res, next) => {
        try {
            const token = req.headers['access-token'];
            if(!token){
                return res.status(403).json({message: "no se envio el token"});
            }
            const decoded = verify(token, process.env.SECRET);
            const user = await queryParam(decoded.email);
            if(!user){
                return res.status(404).json({message: "usuario no encontrado"});
            }
            next();
        } catch (error) {
            return res.status(401).json({message: "No autorizado"});
        }
    }
}