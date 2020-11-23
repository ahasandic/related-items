const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost/related';
mongoose.Promise = global.Promise;

const db = mongoose.connect(mongooseURI)
  .then((results) => {
    console.log('Connected to mongoose');
  })
  .catch((err) => {
    console.error('Error: ', err);
  });

const relatedItemsSchema = mongoose.Schema({
  shoeName: String,
  gender: String,
  price: String,
  SKU: String,
  currentShoePictures: [String],
  views: Number
});

const RelatedItem = mongoose.model('RelatedItem', relatedItemsSchema);

module.exports = RelatedItem;