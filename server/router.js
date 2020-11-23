const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
  .get(controller.getAll);
router
  .route('/:sku')
  .get(controller.getById)
  .put(controller.updateViews);



module.exports = router;