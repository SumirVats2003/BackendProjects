import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/test", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  if (name == process.env.USER && age == process.env.AGE) {
    res.sendFile(__dirname + "/public/success.html");
  } else {
    res.send("New Credentials Required");
  }
});

app.listen(process.env.PORT);
