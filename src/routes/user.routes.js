const {Router} = require('express');
const {getuser} = require('../controllers/user.controller');
const {verifyToken} = require('../utils/authentication');

const routerUser = Router();

routerUser.post('/user', getuser);

module.exports = routerUser;