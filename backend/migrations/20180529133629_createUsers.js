
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    table.string('email').unique().notNullable()
    table.string('hashed_password').notNullable()
    table.string('username').unique().notNullable()
    table.string('title').notNullable()
    table.string('genre').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
