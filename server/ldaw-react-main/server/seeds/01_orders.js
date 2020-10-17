exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('orders').del()
        .then(function() {
            // Inserts seed entries
            return knex('orders').insert([{
                    id: 1,
                    name: 'order 1',
                    status: '1'
                },
                {
                    id: 2,
                    name: 'order 2',
                    status: '2'
                },
                {
                    id: 3,
                    name: 'order 3',
                    status: '2'
                },
                {
                    id: 4,
                    name: 'order 4',
                    status: '3'
                },
                {
                    id: 5,
                    name: 'order 5',
                    status: '4'
                }, {
                    id: 6,
                    name: 'order 6',
                    status: '5'
                }
            ]);
        });
};