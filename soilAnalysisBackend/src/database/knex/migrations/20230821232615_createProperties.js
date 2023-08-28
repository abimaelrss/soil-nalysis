
exports.up = knex => knex.schema.createTable("properties", table => {
  table.increments("id");
  table.text("name");
  table.integer("size");
  table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("properties");
