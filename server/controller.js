const realtedItem = require('../db/index.js');

const controller = {
  get: (req, res) => {
    realtedItem.find({})
      .then((results) => {
        console.log('Get request success');
        res.json(results);
      })
      .catch((err) => {
        console.error('Error on get', err);
      });
  }
};
module.exports = controller;