const Device = require('../models/device.model');

async function store(req, res) {
    const { ip, pwd } = req.body;
    const device = new Device({ ip, pwd });

    try {
        await device.save();
        res.status(201).json({
            message: "Device ransomed successfully",
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    store
}