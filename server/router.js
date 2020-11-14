const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/:sku')
  .get(controller.get);
//.get(controller.getRecommended)
//.get(controller.getTopViwed);



module.exports = router;