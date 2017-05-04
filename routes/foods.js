var express = require('express');
var router = express.Router();
const foodController = require('../controllers/foodController');

/* GET users listing. */

router.get('/', foodController.getAllFood)
router.get('/:id', foodController.getOneFood)
router.post('/', foodController.insertFood)
router.put('/:id', foodController.updateFood)
router.delete('/:id', foodController.deleteFood)



module.exports = router;
