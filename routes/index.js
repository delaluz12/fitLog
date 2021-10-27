const router = require('express').Router();
const api = require('./api');
const views = require('./views');


router.use('/', views);
router.use('/api', api);

module.exports = router;