const knex = require("../database/knex");

class SearchAreasByPropertyController {
  async index(request, response) {
    const { property_id } = request.query;

    let areas;

    areas = await knex("property")
      .join("areas", "property.id", "=", "areas.property_id")
      .join("analysis", "areas.id", "=", "analysis.area_id")
      .where({ property_id });

    return response.json(areas);
  }
}

module.exports = SearchAreasByPropertyController;
