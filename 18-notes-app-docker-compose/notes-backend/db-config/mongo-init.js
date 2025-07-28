const mongoNotesDB = process.env.MONGO_NOTES_DB;
const mongoNotesUser = process.env.MONGO_NOTES_USER;
const mongoNotesPassword = process.env.MONGO_NOTES_PASSWORD;

db = db.getSiblingDB(mongoNotesDB);

console.log("hit here");

db.createUser({
  user: mongoNotesUser,
  pwd: mongoNotesPassword,
  roles: [
    {
      role: "readWrite",
      db: mongoNotesDB,
    },
  ],
});
