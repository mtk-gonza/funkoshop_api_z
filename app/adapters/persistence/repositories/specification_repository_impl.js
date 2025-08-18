import { SpecificationPort } from './../../../core/ports/specification_repository_port.js';
import { SpecificationModel } from './../models/specification_model.js';
import { Specification } from './../../../core/entities/specification_entity.js';

export class SpecificationRepositoryImpl extends SpecificationPort {
    constructor() {
        super();
    }
    #toEntity(specificationInstance) {
        return new Specification({
            id: specificationInstance.id,
            product_id: specificationInstance.product_id,
            key: specificationInstance.key,
            value: specificationInstance.value,
            created_at: specificationInstance.created_at,
            updated_at: specificationInstance.updated_at
        })
    }
    async findAll() {
        const specifications = await SpecificationModel.findAll();
        return specifications.map(spec => this.#toEntity(spec));
    }

    async findById(id) {
        const specification = await SpecificationModel.findByPk(id);
        return specification ? this.#toEntity(specification) : null;
    }

    async create(specificationEntity) {
        const specification = await SpecificationModel.create({
            product_id: specificationEntity.product_id,
            key: specificationEntity.name,
            value: specificationEntity.description
        });
        return this.#toEntity(specification);
    }

    async update(id, specificationEntity) {
        const specification = await SpecificationModel.findByPk(id);
        if (!specification) return null;

        specification.product_id = specificationEntity.product_id ?? specification.product_id;
        specification.key = specificationEntity.key ?? specification.key;
        specification.value = specificationEntity.value ?? specification.value;
        await specification.save();

        return this.#toEntity(specification);
    }

    async delete(id) {
        const specification = await SpecificationModel.findByPk(id);
        if (!specification) return null;
        await specification.destroy();
        return this.#toEntity(specification);
    }
}