const { Router } = require("express");

const ForagesController = require("../controllers/ForagesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const foragesRouter = Router();

const foragesController = new ForagesController();

foragesRouter.use(ensureAuthenticated);
foragesRouter.use(verifyUserAuthorization(["admin"]));

foragesRouter.post("/", foragesController.create);
foragesRouter.put("/:id", foragesController.uptade);
foragesRouter.get("/:id", foragesController.show);
foragesRouter.delete("/:id", foragesController.delete);
foragesRouter.get("/", foragesController.index);

module.exports = foragesRouter;