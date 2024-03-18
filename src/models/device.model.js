const mongoose = require("mongoose");

const DeviceSchema = mongoose.Schema({
    ip: { required: true, type: String },
    pwd: { required: true, type: String },
    //device is an object
    deviceInfo: {
        model: {
            type: String,
            required: true
        },
        serial: {
            type: String,
            required: true
        },
    },
}, { timestamps: true });

module.exports = mongoose.model("Device", DeviceSchema);