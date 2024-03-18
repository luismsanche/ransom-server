const express = require("express");
const api = express.Router();
const {
    store
} = require("../controllers/device.controller");

api.post("/", store);

module.exports = api;