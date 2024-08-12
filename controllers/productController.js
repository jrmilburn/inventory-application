const db = require("../db/queries");

async function productGet(req, res) {

    const brandId = +req.params.id;
    const productId = +req.params.productid;
    console.log(brandId, productId);
    const brands = await db.getBrands();
    const brand = brands[brandId];
    const products = await db.getProducts(brand);
    const product = products[productId];

    res.render("product", {
        title: product.product,
        product: product,
        brand: brand,

    });

}

async function productCreateGet (req, res) {
    const brandId = +req.params.id;
    const brands = await db.getBrands();
    const brand = brands[brandId];
    res.render('createProduct', {
        brandId: brandId,
        brand: brand
    });
};

async function productCreatePost (req, res) {

    const product = {
        product: req.body.product,
        price: req.body.price,
        description: req.body.description,
        brandid: (+req.params.id + 1),
    }
    await db.createProduct(product);
    res.redirect("/");

}

module.exports = {
    productGet,
    productCreateGet,
    productCreatePost
};
