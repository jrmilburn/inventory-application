const pool = require("./pool");

async function getBrands() {
    const { rows } = await pool.query("SELECT brand FROM brands");
    return rows;
}

async function getProducts(brand) {
    const { rows } = await pool.query(`SELECT product, brand, price, description 
        FROM products 
        JOIN brands ON brands.id = products.brandid 
        WHERE brand = '${brand.brand}';`);
    return rows;
}

async function createBrand(brandName) {
    await pool.query('INSERT INTO brands (brand) VALUES ($1)', [brandName]);
}

async function createProduct(product) {
    await pool.query(
        `INSERT INTO products (product, price, description, brandId)
         VALUES ($1, $2, $3, $4)`,
        [product.product, product.price, product.description, product.brandid]
    );
}

module.exports = {
    getBrands,
    getProducts,
    createBrand,
    createProduct
}