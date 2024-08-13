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

async function brandEditGet(req, res) {

    const brands = await db.getBrands();
    const brand = brands[+req.params.id];
    res.render("editBrand", {
        title: `Edit ${brand.brand}`,
        brand: brand,
    });

}

async function brandEditPost(req, res) {

    const brands = await db.getBrands();
    console.log('BRANDS: ', brands);
    const brand = brands[+req.params.id];
    const updatedBrand = {
        brand: req.body.brand,
        id: brand.id,
    };
    console.log('UPDATED: ', updatedBrand);
    await db.updateBrand(updatedBrand);
    res.redirect("/");

}

async function brandDeleteGet(req, res) {

    const brands = await db.getBrands();
    const brand = brands[+req.params.id];
    const products = await db.getProducts(brand);
    console.log(products);
    console.log(brand);
    if(products.length > 0) {
        products.forEach((product) => {
            db.deleteProduct(product);
        });
    }
    await db.deleteBrand(brand);
    res.redirect("/");

}


module.exports = {
    brandsGet,
    brandGet,
    brandCreate,
    brandEditGet,
    brandEditPost,
    brandDeleteGet
}