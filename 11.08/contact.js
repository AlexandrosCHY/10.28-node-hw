const fs = require("fs");
const crypto = require("crypto");

// 1. Olvasd be és írasd ki a db.json file tartalmát.
const dbFile = fs.readFileSync("db.json", "utf8");
const phonebook = JSON.parse(dbFile);

function getContacts() {
  return phonebook.contacts;
}

// console.log(getContacts());

// 2. Készíts egy függvényt ami egy contact-ot hozzá ad a contacts tömbhöz.

function addContact(newContact) {
  phonebook.contacts.push({ ...newContact, id: crypto.randomUUID() });
}

// addContact({ name: "Pista", number: "+36256543218", isFavorite: false });
// console.log(phonebook);

// 3. Írd felül a db.json file-t az új contacts tömbbel.
function save() {
  fs.writeFileSync("db.json", JSON.stringify(phonebook));
  console.log("Db saved");
}
// save();

// 4. remove contact
function removeContact(id) {
  const contacts = getContacts();
  contacts = contacts.filter((contact) => contact.id !== id);
}

// 4. set favorite
function setFavorite(id, isfavorite) {
  const contacts = getContacts();
  const contact = contacts.find((contact) => contact.id === id);
  contact.isFavorite = isfavorite;
}

// 4. favorite list
function getFavorites() {
  const contacts = getContacts();
  return contacts.filter((contact) => contact.isFavorite);
}

module.exports = {
  addContact,
  getContacts,
  save,
  removeContact,
  setFavorite,
  getFavorites,
};
