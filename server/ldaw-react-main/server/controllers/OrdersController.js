const Order = require('../models/Order');
const knexfile = require('../knexfile');
const Change = require('../models/Change')

exports.all = (req, res) => {
    Order.all().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}

exports.create = (req, res) => {

    Order.create(req.body.name).then((orderId) => {
        console.log(orderId)
        Order.find(orderId).then((order) => {
            res.json(order)
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}
exports.allPhase1 = (req, res) => {
    Order.all1().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}
exports.allPhase2 = (req, res) => {
    Order.all2().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}

exports.allPhase3 = (req, res) => {
    Order.all3().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}

exports.allPhase4 = (req, res) => {
    Order.all4().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}

exports.allPhase5 = (req, res) => {
    Order.all5().then((orders) => {
        res.json(orders)
    }).catch(err => console.log(err));
}

exports.changeStatus = (req, res) => {
    let from = req.body.from
    let to = req.body.to
    let id = req.body.id
    if (parseInt(from) == 2 && parseInt(to) == 1) {
        res.status(403);
        res.send("Invalid operation")
    } else if (parseInt(from) == 4) {
        res.status(403)
        res.send("Invalid operation")
    } else {
        Change.create(id, from, to).then((e) => {
            Order.changeStatus(id, to).then((orders) => {
                res.json(orders)
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));


    }


}