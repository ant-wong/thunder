
exports.up = function(knex, Promise) {
  // return knex.schema.createTableIfNotExists('collabs', function (table) {
  //   table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  //   table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  //   table.integer('song_id').references('id').inTable('songs')
  //   table.integer('feature_id').references('id').inTable('users')
  // })
};

exports.down = function(knex, Promise) {
  // return knex.schema.dropTable('collabs')
};
