var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restSchema = new Schema({
  name: String,
  owner: String,
  address: String,
  open_satus: Boolean
});

var Rest = mongoose.model('restaurants', restSchema);

module.exports = Rest;
