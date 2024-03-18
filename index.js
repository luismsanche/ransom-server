const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

const DB_URI = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}/?retryWrites=true&w=majority`;

async function connectToDatabase() {
    console.debug("Mongo Cluster: ", DB_URI);
    mongoose
    .connect(DB_URI)
    .then(
        (msg) => {
            console.log("Connected to cluster.");
        }
    )
    .catch(
        (err) => {
            console.log("Cannot connect to cluster. Log: ", err)
        }
    )
};

app.listen(config.APP_PORT, '0.0.0.0', () => {
    console.log("Server running on: ");
    console.log(`${config.APP_URL}/api/v1/`)
});
connectToDatabase();

module.exports = app;