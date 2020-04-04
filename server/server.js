const express = require("express");
const app = express();
const port = 3030;
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));

// app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`server is listening on port ${port}`));
