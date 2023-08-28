const knex = require("../database/knex");

class AreasController {
  async create(request, response) {
    const { name, description, size } = request.body;
    const user_id = request.user.id;
    
    const  property_id = await knex("properties").select("properties.id")
    .where("properties.user_id", user_id);

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
    const { name } = request.query;

    const property_id = request.user.id;
    const user_id = request.user.id;

    let areas;

    areas = await knex("areas")
      .where({ property_id })
      .where({ user_id })
      .whereLike("name", `%${name}%`)
      .orderBy("name");

    return response.json(areas);
  }
}

module.exports = AreasController;