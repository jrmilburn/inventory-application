const { Router } = require("express");
const brandsRouter = Router();
const productsRouter = require("./products");
const brandsController = require("../controllers/brandController");

brandsRouter.get("/:id", brandsController.brandGet);
brandsRouter.get("/:id/edit", brandsController.brandEditGet);
brandsRouter.post("/:id/edit", brandsController.brandEditPost);

brandsRouter.get("/:id/delete", brandsController.brandDeleteGet);


brandsRouter.get("/", (req, res) => {
    res.render('createBrand');
});
brandsRouter.post("/", brandsController.brandCreate);
brandsRouter.use("/:id/products", productsRouter);

module.exports = brandsRouter;