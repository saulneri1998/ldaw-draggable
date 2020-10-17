const knex = require('../database/connection');


exports.all = () => {
    return knex
        .select('*')
        .from('orders')
}

exports.create = (order) => {
    return knex('orders')
        .insert({ name: order.name });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('orders')
        .where('id', id)
        .first();
}

exports.delete = (id) => {
    return knex
        .select('*')
        .from('orders')
        .where('id', id)
        .first()
        .del();
}

exports.changeStatus = (status) => {
    return knex('orders')
        .where('id', id)
        .update('status', status);

}