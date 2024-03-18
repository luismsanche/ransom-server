const express = require("express");
const cors = require("cors");

const deviceRoutes = require("./src/routes/device.routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/gta6", deviceRoutes);

app.use(function(req, res) {
    res.status(404).send(
        {
            error: "Unimplemented route",
        }
    );
});

module.exports = app;