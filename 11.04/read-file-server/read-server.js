const http = require("http");

const fs = require("fs");
// 1. olvassuk be a public/index.html
fs.readFile("public/index.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
// 2. olvassuk be a database/db.json file tartalmát és alakítsuk JS object-é.
fs.readFile("database/db.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(JSON.parse(data).users);
});
