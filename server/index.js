const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/product', router);

app.listen(3004, () => {
  console.log('Connected to server');
});

module.exports = app;