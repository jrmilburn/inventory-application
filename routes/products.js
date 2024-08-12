const { Router } = require("express");
const productsRouter = Router({ mergeParams: true });
const productController = require("../controllers/productController");

productsRouter.get("/:productid", productController.productGet);

productsRouter.get("/", productController.productCreateGet);
productsRouter.post("/", productController.productCreatePost)

module.exports = productsRouter;