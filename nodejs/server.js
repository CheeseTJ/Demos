const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(require("./routes"));
app.use((req, res) => {
  console.log(req.query);
  console.log(req.body, 5);
  res.status(404);
  res.send("404 Not Found");
});
app.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
