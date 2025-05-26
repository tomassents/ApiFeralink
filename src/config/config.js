require('dotenv').config();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'supersecret',
    expiresIn: '1d',
  },
}; 