const db = require("../models");

module.exports = {
  get: (req, res, next) => {
    res.send("Hello World!");
  }
};
