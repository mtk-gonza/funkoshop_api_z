import { categoriesSeeder } from './seeders/categories_seeder.js';
import { licencesSeeder } from './seeders/licences_seeder.js';
import { productsSeeder } from './seeders/products_seeder.js';
// ... otros seeders

export async function runAllSeeders() {
    console.log('Running all seeders...');

    await categoriesSeeder();
    await licencesSeeder();
    await productsSeeder();
    // ... otros seeders

    console.log('All seeders finished.');
}