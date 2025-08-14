import { ImageRepositoryPort } from './../../../core/ports/image_repository_port.js';
import { ImageModel } from './../models/image_model.js';
import { Image } from './../../../core/entities/image_entity.js';

export class ImageRepositoryImpl extends ImageRepositoryPort {
    constructor() {
        super();
    }
    #toEntity(imageInstance) {
        return new Image({
            id: imageInstance.id,
            path: imageInstance.path,
            entity_type: imageInstance.entity_type,
            entity_id: imageInstance.entity_id,
            image_type: imageInstance.image_type,
            is_primary: imageInstance.is_primary
        });
    }

    async create(imageEntity) {
        if (!imageEntity.entity_type || !imageEntity.entity_id) {
            throw new Error('entity_type y entity_id son obligatorios para crear una imagen.');
        }
        const image = await ImageModel.create({
            path: imageEntity.path,
            entity_type: imageEntity.entity_type,
            entity_id: imageEntity.entity_id,
            image_type: imageEntity.image_type,
            is_primary: imageEntity.is_primary ?? false
        });
        return this.#toEntity(image);
    }

    async findByEntity(entityId, entityType) {
        const images = await ImageModel.findAll({
            where: { entity_id: entityId, entity_type: entityType }
        });
        return images.map(img => this.#toEntity(img));
    }

    async findById(id) {
        const image = await ImageModel.findByPk(id);
        return image ? this.#toEntity(image) : null;
    }

    async findPrimaryByEntity(entityId, entityType) {
        const image = await ImageModel.findOne({
            where: { entity_id: entityId, entity_type: entityType, is_primary: true }
        });
        return image ? this.#toEntity(image) : null;
    }

    async update(id, imageEntity) {
        const image = await ImageModel.findByPk(id);
        if (!image) return null;
        image.path = imageEntity.path ?? image.path;
        image.image_type = imageEntity.image_type ?? image.image_type;
        image.is_primary = imageEntity.is_primary ?? image.is_primary;
        await image.save();
        return this.#toEntity(image);
    }

    async delete(id) {
        const image = await ImageModel.findByPk(id);
        if (!image) return null;
        await image.destroy();
        return this.#toEntity(image);
    }
}