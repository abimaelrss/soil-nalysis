
exports.up = knex => knex.schema.createTable("analysis", table => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.double("depth");
    table.double("smp");
    table.double("cacl");
    table.double("h2o");
    table.integer("area_id").references("id").inTable("areas").onDelete("CASCADE");
  });
  
  exports.down = knex => knex.schema.dropTable("analysis");
  