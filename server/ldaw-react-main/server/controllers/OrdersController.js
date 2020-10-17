const Order = require('../models/Order');
const knexfile = require('../knexfile');

exports.all = (req, res) => {
    Order.all().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}