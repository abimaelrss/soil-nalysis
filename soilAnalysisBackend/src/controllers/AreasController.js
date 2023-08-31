const knex = require("../database/knex");

class AreasController {
  async create(request, response) {
    const { name, description, size, property_id } = request.body;
    const user_id = request.user.id;

    const [area_id] = await knex("areas").insert({
      name,
      description,
      size,
      property_id,
      user_id
    });

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const area = await knex("areas").where({ id }).first();

    return response.json({
      ...area
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("areas").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const property_id = request.body;

    let areas;

    areas = await knex("areas")
      .where(property_id);

    return response.json(areas);
  }
}

module.exports = AreasController;