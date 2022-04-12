const {Router} = require('express');
const {getRef} = require('../controllers/cli_referencias');

const router = Router();

router.get('/referencia', getRef);

module.exports = router;