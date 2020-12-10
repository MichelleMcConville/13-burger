const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expHbs = require("express-handlebars");

app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("Server is listening on PORT ", PORT);
});
  