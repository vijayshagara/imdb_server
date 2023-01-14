const config = {
  username:process.env.DATABASE_USER_NAME || "postgres",
  password:process.env.DATABASE_PASSWORD || "vijay123@G" ,
  database:process.env.DATA_BASE || "mymdb",
  host:process.env.HOST || "127.0.0.1",
  dialect:process.env.DIALECT || "postgres"
};

module.exports = config
