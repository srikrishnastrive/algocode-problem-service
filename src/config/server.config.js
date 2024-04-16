const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL,
    NODE_ENV: "development",
    LOG_DB_URL:process.env.LOG_DB_URL,
    COSMOS_KEY:process.env.COSMOS_KEY,
    COSMOS_ENDPOINT:process.env.COSMOS_ENDPOINT
}