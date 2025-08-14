import { LicenceRepositoryPort } from './../../../core/ports/licence_repository_port.js';
import { LicenceModel } from './../models/licence_model.js';
import { ImageModel } from './../models/image_model.js';
import { Licence } from './../../../core/entities/licence_entity.js';
import { Image } from './../../../core/entities/image_entity.js';
import { EntityType } from './../../../core/enums/entity_type.js';

export class LicenceRepositoryImpl extends LicenceRepositoryPort {
    constructor() {
        super();
    }
    #toEntity(licenceInstance) {
        return new Licence({
            id: licenceInstance.id,
            name: licenceInstance.name,
            description: licenceInstance.description,
            created_at: licenceInstance.created_at,
            updated_at: licenceInstance.updated_at,
            images: licenceInstance.images?.map(img => new Image({
                id: img.id,
                path: img.path,
                entity_type: img.entity_type,
                entity_id: img.entity_id,
                image_type: img.image_type,
                is_primary: img.is_primary,
                created_at: img.created_at,
                updated_at: img.updated_at
            })) || []
        });
    }

    async findAll() {
        const licences = await LicenceModel.findAll({
            include: [{ model: ImageModel, as: 'images'}]
        });

        return licences.map(licence => this.#toEntity(licence));
    }

    async findById(id) {
        const licence = await LicenceModel.findByPk(id, {
            include: [{ model: ImageModel, as: 'images' }]
        });
        return licence ? this.#toEntity(licence) : null;
    }

    async create(licenceEntity) {
        const licence = await LicenceModel.create({
            name: licenceEntity.name,
            description: licenceEntity.description
        });
        let images = [];
        if (licenceEntity.images?.length) {
            images = await Promise.all(
                licenceEntity.images.map(img =>
                    ImageModel.create({
                        path: img.path,
                        entity_type: EntityType.LICENCE,
                        entity_id: licence.id,
                        image_type: img.image_type,
                        is_primary: img.is_primary ?? false
                    })
                )
            );
        };
        licence.images = images;
        return this.#toEntity(licence);
    }

    async update(id, licenceEntity) {
        const licence = await LicenceModel.findByPk(id, {
            include: [{ model: ImageModel, as: 'images' }]
        });
        if (!licence) return null;
        licence.name = licenceEntity.name ?? licence.name;
        licence.description = licenceEntity.description ?? licence.description;
        await licence.save();
        if (licenceEntity.images) {
            await ImageModel.destroy({
                where: { entity_id: id, entity_type: EntityType.LICENCE }
            });
            const newImages = await Promise.all(
                licenceEntity.images.map(img =>
                    ImageModel.create({
                        path: img.path,
                        entity_type: EntityType.LICENCE,
                        entity_id: id,
                        image_type: img.image_type,
                        is_primary: img.is_primary ?? false
                    })
                )
            );
            licence.images = newImages;
        }
        return this.#toEntity(licence);
    }

    async delete(id) {
        const licence = await LicenceModel.findByPk(id);
        if (!licence) return null;
        await ImageModel.destroy({
            where: { entity_id: id, entity_type: EntityType.LICENCE }
        });
        await licence.destroy();
        return this.#toEntity(licence);
    }
}