const db = require("../db/queries");

async function productGet(req, res) {

    const brandId = +req.params.id;
    const productId = +req.params.productid;
    const brands = await db.getBrands();
    const brand = brands[brandId];
    const products = await db.getProducts(brand);
    const product = products[productId];

    res.render("product", {
        title: product.product,
        product: product,
        brand: brand,
        brandid: brandId,
        productid: productId

    });

}

async function productCreateGet (req, res) {
    const brandId = +req.params.id;
    const brands = await db.getBrands();
    const brand = brands[brandId];
    res.render('createProduct', {
        brandId: brand.id,
        brand: brand
    });
};

async function productCreatePost (req, res) {

    const brandId = +req.params.id;
    const brands = await db.getBrands();
    const brand = brands[brandId];
    console.log(brand);
    const product = {
        product: req.body.product,
        price: req.body.price,
        description: req.body.description,
        brandid: brand.id,
    }
    await db.createProduct(product);
    res.redirect(`/brands/${req.params.id}`);

}

async function productEditGet(req, res) {

    const brandId = +req.params.id;
    const productId = +req.params.productid;
    const brands = await db.getBrands();
    const brand = brands[brandId];
    const products = await db.getProducts(brand);
    const product = products[productId];

    res.render("editProduct", {
        title: `Edit ${product.product}`,
        product: product,
        brandid: brandId,
        productid: productId
    })

    

}

async function productEditPost(req, res) {

    const brandId = +req.params.id;
    const productId = +req.params.productid;
    const brands = await db.getBrands();
    const brand = brands[brandId];
    const products = await db.getProducts(brand);
    const product = products[productId];

    const updatedProduct = {
        product: req.body.product,
        price: req.body.price,
        description: req.body.description,
        brandId: brand.id,
        productId: product.id
    };

    await db.updateProduct(updatedProduct);

    res.redirect(`/brands/${req.params.id}/products/${req.params.productid}`);

}

async function productDeleteGet(req, res) {

    const brands = await db.getBrands();
    const brand = brands[+req.params.id];
    const products = await db.getProducts(brand);
    const product = products[req.params.productid];
    await db.deleteProduct(product);

    res.redirect(`/brands/${req.params.id}`);

}

module.exports = {
    productGet,
    productCreateGet,
    productCreatePost,
    productEditGet,
    productEditPost,
    productDeleteGet
};
