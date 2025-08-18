import { Specification } from './../entities/specification_entity.js';

export class SpecificationUseCase {
    constructor(specificationRepository) {
        this.specificationRepository = specificationRepository
    }
    async listSpecifications() {
        return await this.specificationRepository.findAll();
    }

    async getSpecificationById(id) {
        const product = await this.specificationRepository.findById(id);
        if (!product) throw new Error('Specification not found');
        return product;
    }

    async createSpecification(data) {
        if (!data.key) throw new Error('key is required');

        const specificationEntity = new Specification({
            product_id: data.product_id,
            key: data.key,
            value: data.value
        });

        return await this.specificationRepository.create(specificationEntity);
    }

    async updateSpecification(id, data) {
        const specificationEntity = new Specification({
            product_id: data.product_id,
            key: data.key,
            value: data.value
        });

        const updated = await this.specificationRepository.update(id, specificationEntity);
        if (!updated) throw new Error('Specification not found');
        return updated;
    }

    async deleteSpecification(id) {
        const deleted = await this.specificationRepository.delete(id);
        if (!deleted) throw new Error('Specification not found');
        return deleted;
    }
}