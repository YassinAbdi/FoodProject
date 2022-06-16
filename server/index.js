const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// respond to requests for /hello
app.get("/hello", (req, res) => {
    res.send("Hello World!")
});

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


async function main() {
    await mongoose.connect('mongodb://root:rootpassword@localhost:27017');
    console.log('connected to mongodb');
  }

main()

app.listen(3000, () => console.log("Server is running"));