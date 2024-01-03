import express from "express";
import "dotenv/config";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(expressEjsLayouts);
app.set("layout", "./layout/main");

app.get("", (req, res) => {
  res.send("Hello");
});

app.listen(PORT);
