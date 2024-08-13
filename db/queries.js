const pool = require("./pool");

async function getBrands() {
    const { rows } = await pool.query("SELECT id, brand FROM brands");
    return rows;
}

async function getProducts(brand) {
    const { rows } = await pool.query(`SELECT products.id, product, brand, price, description 
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

async function updateBrand(brand) {
    await pool.query(
        `UPDATE brands
         SET brand = $1
         WHERE id = $2;`,
        [brand.brand, brand.id]
    );
}

async function updateProduct(product) {

    await pool.query(
        `UPDATE products
        SET product = $1, price = $2, description = $3, brandId = $4
        WHERE id = $5;`,
        [product.product, product.price, product.description, product.brandId, product.productId]
        
    );

}

async function deleteBrand(brand) {

    await pool.query(
        `DELETE FROM brands
        WHERE id = ${brand.id};`
    );

}

async function deleteProduct(product) {

    await pool.query(
        `DELETE FROM products
        WHERE id = ${product.id};`
    );

}

module.exports = {
    getBrands,
    getProducts,
    createBrand,
    createProduct,
    updateBrand,
    updateProduct,
    deleteBrand,
    deleteProduct
}