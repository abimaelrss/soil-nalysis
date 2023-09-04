const { Router } = require("express");

const AnalysisController = require("../controllers/AnalysisController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const analysisRouter = Router();

const analysisController = new AnalysisController();

analysisRouter.use(ensureAuthenticated);

analysisRouter.post("/", analysisController.create);
analysisRouter.put("/:id", analysisController.uptade);
analysisRouter.get("/:id", analysisController.show);
analysisRouter.delete("/:id", analysisController.delete);
analysisRouter.get("/", analysisController.index);

module.exports = analysisRouter;