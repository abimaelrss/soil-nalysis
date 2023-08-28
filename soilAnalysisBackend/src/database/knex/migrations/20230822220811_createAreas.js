
exports.up = knex => knex.schema.createTable("areas", table => {
  table.increments("id");
  table.text("name");
  table.text("description");
  table.double("size");
  table.integer("property_id").references("id").inTable("properties").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("areas");
