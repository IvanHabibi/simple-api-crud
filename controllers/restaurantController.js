var method = {}
var Rest = require("../models/restaurant");

method.getAllRest = (req, res, next) => {
  Rest.find(function(err, rests) {
    if (err) {
      res.send(err)
    } else {
      res.send(rests);
    }
  });
}

method.insertRest = (req, res, next) => {
  var rest = new Rest({

    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address,
    open_satus: req.body.open_satus

  });
  rest.save(function(err, createdRest) {
    if (err) {
      res.send(err);
    }
    res.send(createdRest);
  });
}

method.updateRest = (req, res, next) => {
  Rest.findById(req.params.id, function(err, rest) {
    if (err) {
      res.send(err);
    } else {

      rest.name = req.body.name || rest.name
      rest.owner = req.body.owner || rest.owner
      rest.address = req.body.address || rest.address
      rest.open_status = req.body.open_status || rest.open_status

      rest.save(function(err, rest) {
        if (err) {
          res.send(err)
        }
        res.send(rest);
      });
    }
  });
}

method.deleteRest = (req, res, next) => {
  Rest.findByIdAndRemove(req.params.id, function(err, rest) {
    var response = {
      message: "restaurant successfully deleted",
      id: rest._id
    };
    res.send(response);
  });
}


method.getOneRest = (req, res, next) => {
  Rest.findById(req.params.id, function(err, rest) {
    if (err) {
      res.send(err)
    }
    res.send(rest)
  })
}





module.exports = method;
