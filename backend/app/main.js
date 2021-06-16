/** Loading env file */
require('dotenv').config({ silent: true });

const express = require("express"),
    http = require("http"),
    cors = require('cors');

const appRoutes = require("./routes");

const getApplicationServerInstance = () => {
    const application = express();

    // adding middlewares
    application.use(cors());
    appRoutes(application);

    const server = http.createServer(application);

    // await new routes(this.app, this.router).main();

    return server;
}

// instance of express app
app = getApplicationServerInstance();


app.listen(process.env.PORT || 8080, () => {
    console.log("Server Running at PORT = ", process.env.PORT);
});