import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/views");

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});

app.get("/update-user", (req, res) => {
  res.render("update_user");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
