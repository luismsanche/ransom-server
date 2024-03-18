require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT,
    APP_URL: process.env.APP_HTTPS === 'True' ? `https://${process.env.APP_HOST}:${process.env.APP_PORT}` : `http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
};