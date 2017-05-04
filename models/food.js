var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    name: String,
    price: String,
    expired_date: {
      type : Date,
      default :new Date().toISOString()
    }
});

var Food = mongoose.model('foods', foodSchema);

module.exports = Food;
