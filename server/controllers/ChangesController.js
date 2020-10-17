const Change = require('../models/Change');
const knexfile = require('../knexfile');

exports.all = (req, res) => {
    Change.all().then((changes) => {
        res.json(changes)
    }).catch(err => console.log(err));
}