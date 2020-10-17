const knex = require('../database/connection');


exports.all = () => {
    return knex
        .select('*')
        .from('changes')
}

exports.create = (changeFrom, changeTo) => {
    return knex('changes')
        .insert({ from: changeFrom, to: changeTo });
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