const express = require("express");
const usersRouter = require("./usersRouter.js");
const contactsRouter = require("./contactsRouter.js");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date()} - ${req.method} - ${req.url}- ${res.statusCode}`);
  next();
});
/*
GET /
*/
app.get("/", function (req, res) {
  res.send("Home");
});
/*
GET /users
GET /users/list
*/
app.use("/users", usersRouter);

/*
GET /contacts pl.: localhost:3000/contacts
POST /contacts pl.: localhost:3000/contacts
DELETE /contacts/:id pl.: localhost:3000/contacts/518342-sdfgs-3453245
PATCH /contacts/:id pl.: localhost:3000/contacts/sfdgsfdg-5352ydfs-3241dst
*/
app.use("/contacts", contactsRouter);

app.listen(3000, () => {
  console.log("Listening...");
});
