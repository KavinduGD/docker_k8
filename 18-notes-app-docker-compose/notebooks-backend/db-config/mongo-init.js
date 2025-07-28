const mongoNotebooksDB = process.env.MONGO_NOTEBOOKS_DB;
const mongoNotebooksUser = process.env.MONGO_NOTEBOOKS_USER;
const mongoNotebooksPassword = process.env.MONGO_NOTEBOOKS_PASSWORD;

db = db.getSiblingDB(mongoNotebooksDB);

console.log("hit here");

db.createUser({
  user: mongoNotebooksUser,
  pwd: mongoNotebooksPassword,
  roles: [
    {
      role: "readWrite",
      db: mongoNotebooksDB,
    },
  ],
});
