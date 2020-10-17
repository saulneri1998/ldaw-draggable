const knex = require('../database/connection');


exports.all = () => {
    return knex
        .select('*')
        .from('changes')
}

exports.create = (orderId, changeFrom, changeTo) => {
    return knex('changes')
        .insert({ order_id: orderId, from: changeFrom, to: changeTo });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('changes')
        .where('id', id)
        .first();
}

exports.delete = (id) => {
    return knex
        .select('*')
        .from('changes')
        .where('id', id)
        .first()
        .del();
}