const { Router } = require("express");
const routers = Router();
routers.get("/", (req, res) => {
  res.send("hello world");
});
routers.use("/users", require("./users"));
module.exports = routers;
