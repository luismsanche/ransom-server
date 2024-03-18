const mongoose = require("mongoose");

const DeviceSchema = mongoose.Schema({
    ip: { required: true, type: String },
    pwd: { required: true, type: String }
}, { timestamps: true });

module.exports = mongoose.model("Device", DeviceSchema);