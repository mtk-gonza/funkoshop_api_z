import { Category } from './../entities/category_entity.js';

export class CategoryUseCases {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async listCategories() {
        return await this.categoryRepository.findAll();
    }

    async getCategoryById(id) {
        const category = await this.categoryRepository.findById(id);
        if (!category) throw new Error("Category not found");
        return category;
    }

    async createCategory(data) {
        if (!data.name) throw new Error("Name is required");

        const categoryEntity = new Category({
            name: data.name,
            description: data.description
        });

        return await this.categoryRepository.create(categoryEntity);
    }

    async updateCategory(id, data) {
        const categoryEntity = new Category({
            name: data.name,
            description: data.description
        });

        const updated = await this.categoryRepository.update(id, categoryEntity);
        if (!updated) throw new Error("Category not found");
        return updated;
    }

    async deleteCategory(id) {
        const deleted = await this.categoryRepository.delete(id);
        if (!deleted) throw new Error("Category not found");
        return deleted;
    }
}