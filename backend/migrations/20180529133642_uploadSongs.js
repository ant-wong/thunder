
exports.up = function(knex, Promise) {
  // return knex.schema.createTableIfNotExists('songs', function (table) {
  //   table.increments('id').primary()
  //   table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  //   table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  //   table.string('file').unique().notNullable()
  //   table.string('title').notNullable()
  //   table.string('img')
  //   table.integer('user_id').references('id').inTable('users')
  // })
};

exports.down = function(knex, Promise) {
  // return knex.schema.dropTable('songs')
};
