const knex = require("../database/knex");

class PropertiesController {
  async create(request, response) {
    const { name, size, areas } = request.body;
    const user_id = request.user.id;

    console.log(user_id);

    const [property_id] = await knex("properties").insert({
      name,
      size,
      user_id
    });

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const property = await knex("properties").where({ id }).first();

    return response.json({
      ...property
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("properties").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const user_id = request.user.id;

    let properties;

    properties = await knex("properties")
      .where({ user_id })
      .orderBy("name");

    return response.json(properties);
  }
}

module.exports = PropertiesController;