const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("GET / users");
});
usersRouter.get("/list", (req, res) => {
  res.send("Listing all users");
});
module.exports = usersRouter;
