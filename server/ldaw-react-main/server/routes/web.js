const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const ordersController = require('../controllers/OrdersController');

router.get('/orders', ordersController.all)
module.exports = router;