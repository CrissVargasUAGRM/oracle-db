const {check} = require('express-validator');

module.exports = {
    dataCredentialsValidator: (req, res) => {
        const {email, password} = req.body;
        if(!email){
            return res.status(400).send({message: "Email vacio"});
        }
        if(!password){
            return res.status(400).send({message: "Password no valido o vacio"});
        }
        return;
    }
}