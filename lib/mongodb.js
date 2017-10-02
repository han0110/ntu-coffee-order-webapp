const mongoose = require('mongoose');
const config = require('../config');

const url = process.env.MONGO_URL || config.mongo.url;

mongoose.Promise = global.Promise;

mongoose.connect(url, { useMongoClient: true })
  .once('open', () => console.log('mongodb connected'))
  .on('error', error => console.error('mongodb error: ', error));
