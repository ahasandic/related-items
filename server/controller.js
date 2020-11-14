const realtedItem = require('../db/index.js');

const controller = {
  get: (req, res) => {
    var sku = req.params.sku;
    realtedItem.find({'SKU': sku})
      .then((results) => {
        console.log('Get request success', results);
        res.json(results);
      })
      .catch((err) => {
        console.error('Error on get', err);
      });
  }
};

module.exports = controller;