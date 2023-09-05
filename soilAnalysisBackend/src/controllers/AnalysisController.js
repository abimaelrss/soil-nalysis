const knex = require("../database/knex");

class AnalysisController {
  async create(request, response) {
    const {
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      caPlusMg,
      ca,
      mg,
      al,
      hAl,
      k,
      pMel,
      pRes,
      pRem,
      s,
      b,
      cu,
      fe,
      mn,
      zn,
      na,
      argila,
      silte,
      areia,
      mo,
      co,
      tezao,
      tezin,
      v,
      satAl,
      caCtc,
      mgCtc,
      kCtc,
      hAlCtc,
      caMg,
      caK,
      mgK,
    } = request.body;
    const area_id = request.body.area_id;
    const property_id = request.body.property_id;

    await knex("analysis").insert({
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      caPlusMg,
      ca,
      mg,
      al,
      hAl,
      k,
      pMel,
      pRes,
      pRem,
      s,
      b,
      cu,
      fe,
      mn,
      zn,
      na,
      argila,
      silte,
      areia,
      mo,
      co,
      tezao,
      tezin,
      v,
      satAl,
      caCtc,
      mgCtc,
      kCtc,
      hAlCtc,
      caMg,
      caK,
      mgK,
      area_id,
      property_id,
    });

    return response.json();
  }

  async uptade(request, response) {
    const {
      name,
      description,
      depth,
      smp,
      cacl,
      h2o,
      caPlusMg,
      ca,
      mg,
      al,
      hAl,
      k,
      pMel,
      pRes,
      pRem,
      s,
      b,
      cu,
      fe,
      mn,
      zn,
      na,
      argila,
      silte,
      areia,
      mo,
      co,
      tezao,
      tezin,
      v,
      satAl,
      caCtc,
      mgCtc,
      kCtc,
      hAlCtc,
      caMg,
      caK,
      mgK,
    } = request.body;

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
    analyze.caPlusMg = caPlusMg;
    analyze.ca = ca;
    analyze.mg = mg;
    analyze.al = al;
    analyze.hAl = hAl;
    analyze.k = k;
    analyze.pMel = pMel;
    analyze.pRes = pRes;
    analyze.pRem = pRem;
    analyze.s = s;
    analyze.b = b;
    analyze.cu = cu;
    analyze.fe = fe;
    analyze.mn = mn;
    analyze.zn = zn;
    analyze.na = na;
    analyze.argila = argila;
    analyze.silte = silte;
    analyze.areia = areia;
    analyze.mo = mo;
    analyze.co = co;
    analyze.tezao = tezao;
    analyze.tezin = tezin;
    analyze.v = v;
    analyze.satAl = satAl;
    analyze.caCtc = caCtc;
    analyze.mgCtc = mgCtc;
    analyze.kCtc = kCtc;
    analyze.hAlCtc = hAlCtc;
    analyze.caMg = caMg;
    analyze.caK = caK;
    analyze.mgK = caK;
    await knex("analysis").where({ id }).update({
      name: name,
      description: description,
      depth: depth,
      smp: smp,
      cacl: cacl,
      h2o: h2o,
      caPlusMg: caPlusMg,
      ca: ca,
      mg: mg,
      al: al,
      hAl: hAl,
      k: k,
      pMel: pMel,
      pRes: pRes,
      pRem: pRem,
      s: s,
      b: b,
      cu: cu,
      fe: fe,
      mn: mn,
      zn: zn,
      na: na,
      argila: argila,
      silte: silte,
      areia: areia,
      mo: mo,
      co: co,
      tezao: tezao,
      tezin: tezin,
      v: v,
      satAl: satAl,
      caCtc: caCtc,
      mgCtc: mgCtc,
      kCtc: kCtc,
      hAlCtc: hAlCtc,
      caMg: caMg,
      caK: caK,
      mgK: mgK,
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
    const { property_id } = request.query;

    let analysis;

    analysis = await knex("properties")
      .join("areas", "properties.id", "=", "areas.property_id")
      .join("analysis", "areas.id", "=", "analysis.area_id")
      .select(
        "analysis.id",
        "analysis.name",
        "analysis.description",
        "analysis.depth",
        "areas.name As areaName"
      )
      .where("properties.id", "=", property_id);

    return response.json(analysis);
  }
}

module.exports = AnalysisController;
