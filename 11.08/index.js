const express = require("express");
const usersRouter = require("./usersRouter.js");
const contactsRouter = require("./contactsRouter.js");

const app = express();

app.use("/users", usersRouter);
app.use("/contacts", contactsRouter);

app.get("/", function (req, res) {
  res.send("Home");
});

app.listen(3000, () => {
  console.log("Listening...");
});
