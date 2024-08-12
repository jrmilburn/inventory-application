const db = require("../db/queries");

async function brandsGet(req, res) {

    const brands = await db.getBrands();
    res.render("index", {
        title: 'index',
        brands: brands,
    });
    

}

async function brandGet(req, res) {

    const brands = await db.getBrands();
    const brand = brands[+req.params.id];
    const products = await db.getProducts(brand);
    if (brand) {
        res.render("brand", {
            brand: brand,
            title: brand.brand,
            products: products,
            brandid: req.params.id,
        });
    } else {
        res.status(404).send('Invalid brand indentifier');
    }

}

async function brandCreate(req, res) {

    await db.createBrand(req.body.brand);
    res.redirect("/");

}


module.exports = {
    brandsGet,
    brandGet,
    brandCreate
}