import { CategoryRepositoryPort } from './../../../core/ports/category_repository_port.js';
import { CategoryModel } from './../models/category_model.js';
import { Category } from './../../../core/entities/category_entity.js';

export class CategoryRepositoryImpl extends CategoryRepositoryPort {
    constructor() {
        super();
    }

    async findAll() {
        const categories = await CategoryModel.findAll();
        return categories.map(
            (category) =>
                new Category({
                    id: category.id,
                    name: category.name,
                    description: category.description,
                    created_at: category.created_at,
                    updated_at: category.updated_at
                })
        );
    }

    async findById(id) {
        const category = await CategoryModel.findByPk(id);
        if (!category) return null;
        return new Category({
            id: category.id,
            name: category.name,
            description: category.description,
            created_at: category.created_at,
            updated_at: category.updated_at
        });
    }

    async create(categoryEntity) {
        const category = await CategoryModel.create({
            name: categoryEntity.name,
            description: categoryEntity.description
        });

        return new Category({
            id: category.id,
            name: category.name,
            description: category.description,
            created_at: category.created_at,
            updated_at: category.updated_at
        });
    }

    async update(id, categoryEntity) {
        const category = await CategoryModel.findByPk(id);
        if (!category) return null;

        category.name = categoryEntity.name ?? category.name;
        category.description = categoryEntity.description ?? category.description;

        await category.save();

        return new Category({
            id: category.id,
            name: category.name,
            description: category.description,
            created_at: category.created_at,
            updated_at: category.updated_at
        });
    }

    async delete(id) {
        const category = await CategoryModel.findByPk(id);
        if (!category) return null;

        await category.destroy();
        return new Category({
            id: category.id,
            name: category.name,
            description: category.description,
            created_at: category.created_at,
            updated_at: category.updated_at
        });
    }
}