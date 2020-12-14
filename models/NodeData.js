const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
  name: String,
  description: String,
  parent: String,
});

const node = mongoose.model('node', NodeSchema);

module.exports = node;
