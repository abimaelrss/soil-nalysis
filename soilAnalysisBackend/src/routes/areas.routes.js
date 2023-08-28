const { Router } = require("express");

const AreasController = require("../controllers/AreasController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const areasRouter = Router();

const areasController = new AreasController();

areasRouter.use(ensureAuthenticated);

areasRouter.post("/", areasController.create);
areasRouter.get("/:id", areasController.show);
areasRouter.delete("/:id", areasController.delete);
areasRouter.get("/", areasController.index);

module.exports = areasRouter;