const knex = require("../database/knex");

class AnalysisController {
  async create(request, response) {
    const { name, description, depth, smp, cacl, h2o } = request.body;
    const area_id = request.body.area_id;

    await knex("analysis").insert({
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      area_id
    });

    return response.json();
  }

  async uptade(request, response) {
    const { name, description, depth, smp, cacl, h2o } = request.body;

    const id = request.params.id;

    const analyze = await knex("analysis").where({ id });

    if (!analyze) {
      throw new AppError("Propriedade não encontrada!");
    }

    analyze.name = name;
    analyze.description = description;
    analyze.depth = depth;
    analyze.smp = smp;
    analyze.cacl = cacl;
    analyze.h2o = h2o;

    await knex("analysis")
      .where({ id })
      .update({
        name: name,
        description: description,
        depth: depth,
        smp: smp,
        cacl: cacl,
        h2o: h2o,
      });

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const analyze = await knex("analysis").where({ id }).first();

    return response.json({
      ...analyze,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("analysis").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
      const {area_id} = request.query;

    let analysis;

    analysis = await knex("analysis").where({ area_id }).orderBy("name");

    return response.json(analysis);
  }
}

module.exports = AnalysisController;
