// Middleware
/*
    Request
        |
        V
    requestHandler

    Request
        |
        V
    JSON middleware
        |
        V
    requestHandler
*/
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(morgan("common"));
app.use("/static", express.static("public"));
app.use("/bundle0   ", express.static("build"));
app.use(cors());

app.use("/contacts", (req, res, next) => {
  console.log("contacts page");
  next();
});

app.use((req, res, next) => {
  console.log("Request received at", Date.now());
  next();
});

app.use((req, res, next) => {
  console.log("Request URL is", req.url);
  next();
});

app.use("/home", (req, res, next) => {
  console.log(req.method, "/home");
  next();
});
app.get("/home", (req, res, next) => {
  res.send("Home");
  console.log("app.get('/home')");
  next();
});

app.post("/home", (req, res, next) => {
  res.send("POST Home");
  console.log("app.post('/home')");
  next();
});

app.use((req, res, next) => {
  console.log("end of request");
  res.end();
});

app.listen(3000, () => {
  console.log("Server started");
});
