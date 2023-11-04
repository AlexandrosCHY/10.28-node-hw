const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

// Callback based
fs.stat("progmatic.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Callback: ", stats);
});

// Sync
try {
  const stats = fs.statSync("progmatic.txt");
  console.log("Sync: ", stats);
} catch (err) {
  console.error(err);
}

// Promise
(async function () {
  try {
    const stats = await fsPromises.stat("progmatic.txt");
    console.log("Promise: ", stats);
  } catch (err) {
    console.error(err);
  }
})();

// Promise 2
fsPromises
  .stat("progmatic.txt")
  .then((stats) => console.log("Promise 2: ", stats))
  .catch((err) => console.error(err));

// File olvasás

fs.readFile("files/orkeny.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
