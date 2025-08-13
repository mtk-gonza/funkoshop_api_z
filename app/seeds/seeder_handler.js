import { categoriesSeeder } from './seeders/categories_seeder.js';
// import { seedProducts } from "./products_seeder.js";
// import { seedLicences } from "./licence_seeder.js";
// ... otros seeders

export async function runAllSeeders() {
    console.log('Running all seeders...');

    await categoriesSeeder();
    // await seedProducts();
    // await seedLicences();
    // ... otros seeders

    console.log('All seeders finished.');
}