const {Router} = require('express');
const {getData, getPrueba} = require('../data/bff.controller');

const router = Router();

router.get('/data', getData);
router.get('/getPrueba', getPrueba);

module.exports = router;