const router = require('express').Router();
const ordersController = require('../controllers/OrdersController');

router.get('/orders', ordersController.all)
router.post('/changeStatus', ordersController.changeStatus)
router.post('/createOrder', ordersController.create)
module.exports = router;