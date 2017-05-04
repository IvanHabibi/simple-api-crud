var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/livecode1');

var index = require('./routes/index');
var users = require('./routes/users');
var restaurants = require('./routes/restaurants');
var foods = require('./routes/foods');

var app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/restaurants', restaurants);
app.use('/foods', foods);




module.exports = app;
