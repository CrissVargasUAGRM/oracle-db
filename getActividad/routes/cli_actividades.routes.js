const {Router} = require('express');
const {getActividades} = require('../controllers/cli_actividades');

const router = Router();

router.get('/actividades', getActividades);

module.exports = router;