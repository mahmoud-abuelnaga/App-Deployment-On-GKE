const DB_NAME = process.env.MONGO_INITDB_DATABASE;
const DB_USER = process.env.MONGO_INITDB_DATABASE_USER;
const DB_USER_PASSWORD = process.env.MONGO_INITDB_DATABASE_USER_PASSWORD;

if (!DB_NAME) {
  throw new Error("`DB_NAME` is not set");
}

if (!DB_USER) {
  throw new Error("`DB_USER` is not set");
}

if (!DB_USER_PASSWORD) {
  throw new Error("`DB_USER_PASSWORD` is not set");
}

db = db.getSiblingDB(DB_NAME);
db.createUser({
  user: DB_USER,
  pwd: DB_USER_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: DB_NAME,
    },
  ],
});
