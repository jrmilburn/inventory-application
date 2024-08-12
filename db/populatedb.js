const { Client } = require("pg");

const creatineDesc = 'One of the most researched supplements this Micronized Creatine Powder contains 5g of pure creatine monohydrate per serving. This superpower supplement supports muscle building recovery endurance, strength, and performance. It has no fillers or additives and it’s unflavoured.';

const brandSQL = `
    CREATE TABLE IF NOT EXISTS brands (
        id SERIAL PRIMARY KEY,
        brand VARCHAR(255)
    );

    INSERT INTO brands (brand)
    VALUES
        ('Optimum Nutrition'),
        ('Bulk Nutrients'),
        ('MyProtein');
`;

const productSQL = `
    CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        product VARCHAR(255),
        price NUMERIC,
        description TEXT,
        brandId INTEGER,
        FOREIGN KEY (brandId) REFERENCES brands(id)
    );

    INSERT INTO products (product, price, description, brandId)
    VALUES
        ('Creatine', 50.96, '${creatineDesc}', 1),
        ('Whey Protein Isolate', 49, 'Our Whey Protein Isolate (WPI) is ultra-high in protein sourced from grass fed cows.', 2),
        ('Electrolytes', 20, 'Electrolyte Plus is a tasty drink designed to be taken during exercise and works to improve hydration by replenishing glycogen and electrolytes. HASTA Certified flavour is Tropical.', 1);
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
