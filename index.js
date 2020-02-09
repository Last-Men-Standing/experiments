"use strict";

/**
 * Loads our dependencies, which we can also use with ES6 import statements which will require
 * a JS transpiler ie. Babel (you guys can do some more research into what all that means)
 */
const express = require("express");

const port = process.env.port || 5000;
const app = express();

/**
 * Binds callback function (with params for the request, and the response we send back), to the path "/"
 */
app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

/**
 * Spins up server on our port, to see the code in action go to http://localhost:5000/ in your web browser
 */
app.listen(port, () => console.log(`Server running on port ${port}`));
