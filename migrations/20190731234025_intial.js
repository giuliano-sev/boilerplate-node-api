
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id').primary();
        t.string('username').notNull();
        t.string('password').notNull();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
