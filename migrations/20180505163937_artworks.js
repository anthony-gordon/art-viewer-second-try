
exports.up = function(knex, Promise) {
    return knex.schema.createTable('artworks', (table) => {
        table.increments('id').primary()
        table.string('title')
        table.string('url')
        table.string('contributor')
      })
    }

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artworks')
};
