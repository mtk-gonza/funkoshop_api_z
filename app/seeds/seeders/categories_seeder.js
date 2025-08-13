import { CATEGORIES } from './../data/categories_data.js';
import { CategoryRepositoryImpl } from './../../adapters/persistence/repositories/category_repository_impl.js';

export async function categoriesSeeder() {
    const categoryRepo = new CategoryRepositoryImpl();
    const createdCategories = [];

    for (const categoryData of CATEGORIES) {
        try {
            const category = await categoryRepo.create(categoryData);
            createdCategories.push(category);
        } catch (err) {
            console.error(`Error creating category ${categoryData.name}: ${err.message}`);
        }
    }

    console.log(`Seeded ${createdCategories.length} categories.`);
    return createdCategories;
};