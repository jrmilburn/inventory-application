const express = require("express");
const app = express();
const path = require('node:path');
const brandsRouter = require("./routes/brands");
const productsRouter = require("./routes/products");
const Router = require("./routes/router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on ${PORT}`));