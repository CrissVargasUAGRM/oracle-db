const {getPersonas} = require('../controllers/cli_personas');
const {Router} = require('express');

const router = Router();

router.get('/persona', getPersonas);

module.exports = router;