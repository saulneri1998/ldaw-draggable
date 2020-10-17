exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('changes').del()
        .then(function() {
            // Inserts seed entries
            return knex('changes').insert([{
                id: 1,
                order_id: 1,
                from: "1",
                to: "2"
            }, ]);
        });
};