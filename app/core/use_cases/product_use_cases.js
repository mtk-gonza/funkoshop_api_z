import { Product } from './../entities/product_entity.js';

export class ProductUseCases {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async listProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id) {
        const product = await this.productRepository.findById(id);
        if (!product) throw new Error('Product not found');
        return product;
    }

    async createProduct(data) {
        if (!data.name) throw new Error('Name is required');

        const productEntity = new Product({
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            discount: data.discount,
            sku: data.sku,
            dues: data.dues,
            special: data.special,
            licence_id: data.licence_id,
            category_id: data.category.id,
            specifications: data.specifications,
            images: data.images
        });

        return await this.productRepository.create(productEntity);
    }

    async updateProduct(id, data) {
        const productEntity = new Product({
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            discount: data.discount,
            sku: data.sku,
            dues: data.dues,
            special: data.special,
            licence_id: data.licence_id,
            category_id: data.category.id,
            specifications: data.specifications,
            images: data.images
        });

        const updated = await this.productRepository.update(id, productEntity);
        if (!updated) throw new Error('Product not found');
        return updated;
    }

    async deleteProduct(id) {
        const deleted = await this.productRepository.delete(id);
        if (!deleted) throw new Error('Product not found');
        return deleted;
    }
}