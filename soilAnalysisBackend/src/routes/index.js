const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const propertiesRouter = require("./properties.routes");
const areasRouter = require("./areas.routes");
const analysisRouter = require("./analysis.routes");
const foragesRouter = require("./forages.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

routes.use("/properties", propertiesRouter);
routes.use("/areas", areasRouter);
routes.use("/analysis", analysisRouter);
routes.use("/forages", foragesRouter);

module.exports = routes;
