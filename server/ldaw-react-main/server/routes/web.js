const router = require('express').Router();
const ordersController = require('../controllers/OrdersController');

router.get('/orders', ordersController.all)
router.get('/orders1', ordersController.allPhase1)
router.get('/orders2', ordersController.allPhase2)
router.get('/orders3', ordersController.allPhase3)
router.get('/orders4', ordersController.allPhase4)
router.get('/orders5', ordersController.allPhase5)
router.post('/changeStatus', ordersController.changeStatus)
router.post('/createOrder', ordersController.create)
module.exports = router;