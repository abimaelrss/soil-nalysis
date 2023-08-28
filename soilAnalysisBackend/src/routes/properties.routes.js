const { Router } = require("express");

const PropertiesController = require("../controllers/PropertiesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const propertiesRouter = Router();

const propertiesController = new PropertiesController();

propertiesRouter.use(ensureAuthenticated);

propertiesRouter.post("/", propertiesController.create);
propertiesRouter.get("/:id", propertiesController.show);
propertiesRouter.delete("/:id", propertiesController.delete);
propertiesRouter.get("/", propertiesController.index);

module.exports = propertiesRouter;