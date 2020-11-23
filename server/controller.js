const relatedItem = require('../db/index.js');

const controller = {
  getAll: (req, res) => {
    relatedItem.find({})
      .then((results) => {
        console.log('Got all:', results);
        res.status(200).json(results);
      })
      .catch((err) => {
        console.error('Error', err);
        res.status(400).send(err);
      });
  },
  getById: (req, res) => {
    var sku = req.params.sku;
    relatedItem.find({'SKU': sku})
      .then((results) => {
        console.log('Get request success', results);
        res.status(200).json(results);
      })
      .catch((err) => {
        console.error('Error on get', err);
        res.status(400).send(err);
      });
  },
  updateViews: (req, res) => {
    var sku = req.params.sku;
    relatedItem.findOneAndUpdate({'SKU': sku}, {$inc: {views: 1} })
      .then((result) => {
        console.log('Updated', result);
        res.json(result);
      })
      .catch((err) => {
        console.error('Error adding to views', err);
      });
  }
};

module.exports = controller;