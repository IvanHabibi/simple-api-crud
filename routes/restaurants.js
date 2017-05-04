var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restaurantController');

/* GET users listing. */

router.get('/', restaurantController.getAllRest)
router.get('/:id', restaurantController.getOneRest)
router.post('/', restaurantController.insertRest)
router.put('/:id', restaurantController.updateRest)
router.delete('/:id', restaurantController.deleteRest)



module.exports = router;
