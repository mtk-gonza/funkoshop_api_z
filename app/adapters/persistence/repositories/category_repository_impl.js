import { CategoryRepositoryPort } from './../../../core/ports/category_repository_port.js';
import { CategoryModel } from './../models/category_model.js';
import { Category } from '../../../core/entities/category_entity.js';

export class CategoryRepositoryImpl extends CategoryRepositoryPort {
    constructor() {
        super();
    }

    async findAll() {
        const categories = await CategoryModel.findAll();
        return categories.map(
            (c) =>
                new Category({
                    id: c.id,
                    name: c.name,
                    description: c.description,
                    created_at: c.created_at,
                    updated_at: c.updated_at
                })
        );
    }

    async findById(id) {
        const c = await CategoryModel.findByPk(id);
        if (!c) return null;
        return new Category({
            id: c.id,
            name: c.name,
            description: c.description,
            created_at: c.created_at,
            updated_at: c.updated_at
        });
    }

    async create(categoryEntity) {
        const c = await CategoryModel.create({
            name: categoryEntity.name,
            description: categoryEntity.description
        });

        return new Category({
            id: c.id,
            name: c.name,
            description: c.description,
            created_at: c.created_at,
            updated_at: c.updated_at
        });
    }

    async update(id, categoryEntity) {
        const c = await CategoryModel.findByPk(id);
        if (!c) return null;

        c.name = categoryEntity.name ?? c.name;
        c.description = categoryEntity.description ?? c.description;

        await c.save();

        return new Category({
            id: c.id,
            name: c.name,
            description: c.description,
            created_at: c.created_at,
            updated_at: c.updated_at
        });
    }

    async delete(id) {
        const c = await CategoryModel.findByPk(id);
        if (!c) return null;

        await c.destroy();
        return new Category({
            id: c.id,
            name: c.name,
            description: c.description,
            created_at: c.created_at,
            updated_at: c.updated_at
        });
    }
}