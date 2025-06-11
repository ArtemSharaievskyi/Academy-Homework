const { getEnvConfig } = require('./env');

const config = getEnvConfig();

console.log("Налаштування середовища:");
console.log(`NODE_ENV: ${config.NODE_ENV}`);
console.log(`PORT: ${config.PORT}`);
console.log(`API_KEY: ${config.API_KEY}`);
