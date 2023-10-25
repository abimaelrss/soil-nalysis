const knex = require("../database/knex");

class AnalysisInterpretationController {
  
  calcCalcario(request, response) {
    return 0;
  }

  async create(request, response) {
    const { name, size } = request.body;
    const user_id = request.user.id;

    const [property_id] = await knex("properties").insert({
      name,
      size,
      user_id,
    });

    return response.json();
  }

  async uptade(request, response) {
    const { name, size } = request.body;

    const id = request.params.id;

    const property = await knex("properties").where({ id });

    console.log(property);

    if (!property) {
      throw new AppError("Propriedade não encontrada!");
    }

    property.name = name;
    property.size = size;

    console.log(name);

    await knex("properties").where({ id }).update({ name: name, size: size });

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const property = await knex("properties").where({ id }).first();

    return response.json({
      ...property,
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

    properties = await knex("properties").where({ user_id }).orderBy("name");

    return response.json(properties);
  }
}

module.exports = AnalysisInterpretationController;
