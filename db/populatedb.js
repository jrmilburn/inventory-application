const { Client } = require("pg");

const brandSQL = `
        CREATE TABLE IF NOT EXISTS brands (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        brand VARCHAR(255));

        INSERT INTO brands (brand)
        VALUES
            ('Optimum Nutrition'),
            ('Bulk Nutrients'),
            ('MyProtein');
`;

const productSQL = `
        CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        product VARCHAR(255),
        brandId INTEGER,
        FOREIGN KEY (brandId) REFERENCES brands(id));

        INSERT INTO products (product, brandId)
        VALUES
            ('Creatine', 1),
            ('Whey Protein Isolate', 2),
            ('Electrolytes', 1);
`;

async function main() {

    console.log('seeding...');
    const client = new Client({
        connectionString: "postgresql://jrmilburn:password@localhost:5432/fitness_app",
    });
    await client.connect();
    await client.query(brandSQL);
    await client.query(productSQL);
    await client.end();
    console.log("done");

}

main();