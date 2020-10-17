exports.up = function(knex) {
    return knex.schema
        .createTable('orders', (table) => {
            table.increments('id');
            table.string('name', 512).notNullable().defaultTo("Order x");
            table.string('status', 512).notNullable().defaultTo("1");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('orders');
};