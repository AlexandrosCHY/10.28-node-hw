const express = require("express");
const { getContacts, addContact, save, removeContact } = require("./contact");

const contactsRouter = express.Router();

contactsRouter.get("/", (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
});

contactsRouter.post("/", (req, res) => {
  addContact({
    name: req.query.name,
    number: req.query.number,
    isFavorite: false,
  });
  save();
  res.status(201).end();
});

contactsRouter.delete("/", (req, res) => {
  removeContact(req.query.id);
  save();
  res.status(200).end();
});

module.exports = contactsRouter;
