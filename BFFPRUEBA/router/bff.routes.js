const {Router} = require('express');
const {getData} = require('../data/bff.controller');

const router = Router();

router.get('/data', getData);

module.exports = router;