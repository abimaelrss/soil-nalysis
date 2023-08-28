const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const propertiesRouter = require("./properties.routes");
const areasRouter = require("./areas.routes");


const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

routes.use("/properties", propertiesRouter);
routes.use("/areas", areasRouter);


module.exports = routes;