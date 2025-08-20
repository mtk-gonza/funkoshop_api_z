import { CategoryRepositoryPort } from './../../../core/ports/category_repository_port.js';
import { CategoryModel } from './../models/category_model.js';
import { Category } from './../../../core/entities/category_entity.js';

export class CategoryRepositoryImpl extends CategoryRepositoryPort {
    constructor() {
        super();
    }
    #toEntity(categoryInstance) {
        return new Category({
            id: categoryInstance.id,
            name: categoryInstance.name,
            description: categoryInstance.description,
            created_at: categoryInstance.created_at,
            updated_at: categoryInstance.updated_at
        });
    }

    async findAll() {
        const categories = await CategoryModel.findAll();
        return categories.map(category => this.#toEntity(category));
    }

    async findById(id) {
        const category = await CategoryModel.findByPk(id);
        return category ? this.#toEntity(category) : null;
    }

    async create(categoryEntity) {
        const category = await CategoryModel.create({
            name: categoryEntity.name,
            description: categoryEntity.description
        });
        return this.#toEntity(category);
    }

    async update(id, categoryEntity) {
        const category = await CategoryModel.findByPk(id);
        if (!category) return null;

        category.name = categoryEntity.name ?? category.name;
        category.description = categoryEntity.description ?? category.description;
        await category.save();

        return this.#toEntity(category);
    }

    async delete(id) {
        const category = await CategoryModel.findByPk(id);
        if (!category) return null;
        await category.destroy();
        return this.#toEntity(category);
    }
}