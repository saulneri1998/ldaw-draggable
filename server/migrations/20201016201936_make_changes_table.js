exports.up = function(knex) {
    return knex.schema
        .createTable('changes', (table) => {
            table.increments('id');
            table.integer('order_id').unsigned()
            table.foreign('order_id').references('orders.id')
            table.string('from', 512).notNullable();
            table.string('to', 512).notNullable();

        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('changes');
};