const { Router } = require("express");
const userRouters = Router();
userRouters.get("/", (req, res) => {
  res.send("{user:123}");
});
userRouters.post("/addUser", (req, res) => {
  console.log(req.body);
  res.send("保存成功");
});
module.exports = userRouters;
