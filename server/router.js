const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/product')
  .get(controller.getAll);
router
  .route('/product/:sku')
  .get(controller.getById)
  .put(controller.updateViews);



module.exports = router;