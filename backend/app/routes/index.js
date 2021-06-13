const newsRouter = require("./news");

const loadRoutes = (application) => {
    application.use("/news", newsRouter);
}

module.exports = loadRoutes;
