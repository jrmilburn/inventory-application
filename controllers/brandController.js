const db = require("../db/queries");

async function brandsGet(req, res) {

    const brands = await db.getBrands();
    console.log(brands);
    res.render("index", {
        title: 'index',
        brands: brands,
    });
    

}

module.exports = {
    brandsGet,
}