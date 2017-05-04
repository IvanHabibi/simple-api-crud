var method = {}
var Food = require("../models/food");

method.getAllFood = (req, res, next) => {
  Food.find(function(err, foods) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(foods);
    }
  });
}

method.insertFood = (req, res, next) => {
  var food = new Food({

    name: req.body.name,
    price:req.body.price,
    expired_date:req.body.expired_date
  });
  food.save(function(err, createdFood) {
    if (err) {
      res.send(err);
    }
    res.send(createdFood);
  });
}

method.updateFood = (req, res, next) => {
  Food.findById(req.params.id, function(err, food) {
    if (err) {
      res.status(500).send(err);
    } else {

      food.name=req.body.name || food.name
      food.price=req.body.price || food.price
      food.expired_date= req.body.expired_date || food.expired_date

      food.save(function(err, food) {
        if (err) {
          res.status(500).send(err)
        }
        res.send(food);
      });
    }
  });
}

method.deleteFood = (req, res, next) => {
  Food.findByIdAndRemove(req.params.id, function(err, food) {
    var response = {
      message: "food successfully deleted",
      id: food._id
    };
    res.send(response);
  });
}


method.getOneFood = (req, res, next) => {
  Food.findById(req.params.id, function(err, food) {
    if (err) {
      res.send(err)
    }
    res.send(food)
  })
}





module.exports = method;
