const express = require("express");
const {
  getContacts,
  addContact,
  save,
  removeContact,
  setFavorite,
} = require("./contact");
const morgan = require("morgan");

const contactsRouter = express.Router();
contactsRouter.use(morgan("common"));

contactsRouter.get("/", (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
});

contactsRouter.post("/", (req, res) => {
  addContact({
    name: req.body.name,
    number: req.body.number,
    isFavorite: false,
  });
  save();
  res.status(201).end();
});

contactsRouter.delete("/:id", (req, res) => {
  removeContact(req.params.id);
  save();
  res.status(200).end();
});

contactsRouter.patch("/:id", (req, res) => {
  setFavorite(req.params.id, req.body.isFavorite);
  save();
  res.status(200).end();
});
module.exports = contactsRouter;
