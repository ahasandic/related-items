const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/:name')
  .get(controller.get);


module.exports = router;