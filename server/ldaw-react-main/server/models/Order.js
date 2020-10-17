const knex = require('../database/connection');


exports.all = () => {
    return knex
        .select('*')
        .from('orders')
}
exports.all1 = () => {
    return knex
        .select('*')
        .from('orders')
        .where('status', '1')
}

exports.all2 = () => {
    return knex
        .select('*')
        .from('orders')
        .where('status', '2')
}
exports.all3 = () => {
    return knex
        .select('*')
        .from('orders')
        .where('status', '3')
}
exports.all4 = () => {
    return knex
        .select('*')
        .from('orders')
        .where('status', '4')
}
exports.all5 = () => {
    return knex
        .select('*')
        .from('orders')
        .where('status', '5')
}
exports.create = (orderName) => {
    return knex('orders')
        .insert({ name: orderName });
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

exports.changeStatus = (id, to) => {
    return knex('orders')
        .where('id', id)
        .update('status', to);

}