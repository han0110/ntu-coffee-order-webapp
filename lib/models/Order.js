const mongoose = require('mongoose');
const config = require('../../config');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
}, { versionKey: false });

const Order = mongoose.model(process.env.VENDOR || config.vendor, OrderSchema);

module.exports = Order;
