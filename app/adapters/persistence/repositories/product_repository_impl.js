import { ProductRepositoryPort } from './../../../core/ports/product_repository_port.js';
import { ProductModel } from './../models/product_model.js';
import { ImageModel } from './../models/image_model.js';
import { SpecificationModel } from '../models/specification_model.js';
import { Product } from './../../../core/entities/product_entity.js';
import { Specification } from './../../../core/entities/specification_entity.js';
import { Image } from './../../../core/entities/image_entity.js';
import { EntityType } from './../../../core/enums/entity_type.js';

export class ProductRepositoryImpl extends ProductRepositoryPort {
    constructor() {
        super();
    }
    #toEntity(productInstance) {
        return new Product({
            id: productInstance.id,
            name: productInstance.name,
            description: productInstance.description,
            price: productInstance.price,
            stock: productInstance.stock,
            discount: productInstance.discount,
            sku: productInstance.sku,
            dues: productInstance.dues,
            special: productInstance.special,
            licence_id: productInstance.licence_id,
            category_id: productInstance.category_id,
            created_at: productInstance.created_at,
            updated_at: productInstance.updated_at,
            specifications: productInstance.specifications?.map(spec => new Specification ({
                id: spec.id,
                product_id: productInstance.id,
                key: spec.key,
                value: spec.value
            }))|| [],
            images: productInstance.images?.map(img => new Image({
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
        const products = await ProductModel.findAll({
            include: [
                { model: ImageModel, as: 'images'},
                { model: SpecificationModel, as: 'specifications'}
            ]
        });

        return products.map(product => this.#toEntity(product));
    }

    async findById(id) {
        const product = await ProductModel.findByPk(id, {
            include: [
                { model: ImageModel, as: 'images' },
                { model: SpecificationModel, as: 'specifications'}
            ]
        });
        return product ? this.#toEntity(product) : null;
    }

    async create(productEntity) {
        const product = await ProductModel.create({
            name: productEntity.name,
            description: productEntity.description,
            price: productEntity.price,
            stock: productEntity.stock,
            discount: productEntity.discount,
            sku: productEntity.sku,
            dues: productEntity.dues,
            special: productEntity.special,
            licence_id: productEntity.licence_id,
            category_id: productEntity.category_id,
        });
        let specifications = [];
        if (productEntity.specifications?.length) {
            specifications = await Promise.all(
                productEntity.specifications.map(spec =>
                    SpecificationModel.create({
                        product_id: productEntity.id,
                        key: spec.key,
                        value: spec.value
                    })
                )
            );
        };
        product.specifications = specifications;
        let images = [];
        if (productEntity.images?.length) {
            images = await Promise.all(
                productEntity.images.map(img =>
                    ImageModel.create({
                        path: img.path,
                        entity_type: EntityType.PRODUCT,
                        entity_id: product.id,
                        image_type: img.image_type,
                        is_primary: img.is_primary ?? false
                    })
                )
            );
        };
        product.images = images;
        return this.#toEntity(product);
    }

    async update(id, productEntity) {
        const product = await ProductModel.findByPk(id, {
            include: [
                { model: ImageModel, as: 'images' },
                { model: SpecificationModel, as: 'specifications'}
            ]
        });
        if (!product) return null;
        product.name = productEntity.name ?? product.name;
        product.description = productEntity.description ?? product.description;
        product.price = productEntity.price ?? product.price;
        product.stock = productEntity.stock ?? product.stock;
        product.discount = productEntity.discount ?? product.discount;
        product.sku = productEntity.sku ?? product.sku;
        product.dues = productEntity.dues ?? product.dues;
        product.special = productEntity.special ?? product.special;
        product.licence_id = productEntity.licence_id ?? product.licence_id;
        product.category_id = productEntity.category_id ?? product.category_id;
        await product.save();
        if (productEntity.images) {
            await ImageModel.destroy({
                where: { entity_id: id, entity_type: EntityType.PRODUCT }
            });
            const newImages = await Promise.all(
                productEntity.images.map(img =>
                    ImageModel.create({
                        path: img.path,
                        entity_type: EntityType.PRODUCT,
                        entity_id: id,
                        image_type: img.image_type,
                        is_primary: img.is_primary ?? false
                    })
                )
            );
            product.images = newImages;
        }
        if (productEntity.specifications) {
            await SpecificationModel.destroy({
                where: { product_id: id}
            });
            const newProductSpecs = await Promise.all(
                productEntity.specifications.map(spec =>
                    SpecificationModel.create({
                        product_id: id,
                        key: spec.key,
                        value: spec.value
                    })
                )
            );
            product.specifications = newProductSpecs
        }
        return this.#toEntity(product);
    }

    async delete(id) {
        const product = await ProductModel.findByPk(id);
        if (!product) return null;
        await ImageModel.destroy({
            where: { entity_id: id, entity_type: EntityType.PRODUCT }
        });
        await SpecificationModel.destroy({
            where: { product_id: id}
        });
        await product.destroy();
        return this.#toEntity(product);
    }
}