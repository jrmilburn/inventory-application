const pool = require("./pool");

async function getBrands() {
    const { rows } = await pool.query("SELECT brand FROM brands");
    return rows;
}

module.exports = {
    getBrands,
}