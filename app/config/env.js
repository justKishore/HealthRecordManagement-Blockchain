const env = {
  database: 'mysql',
  username: 'root',
  password: 'Kishoreroot_1',
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 100
  }
};
 
module.exports = env;
