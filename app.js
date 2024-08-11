const express = require("express");
const app = express();
const brandsRouter = require("./routes/brands");
const productsRouter = require("./routes/products");
const Router = require("./routes/router");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => console.log(`App listening on ${PORT}`));