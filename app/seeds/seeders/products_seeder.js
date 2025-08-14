import { PRODUCTS } from './../data/products_data.js';
import { ProductRepositoryImpl } from './../../adapters/persistence/repositories/product_repository_impl.js';

export async function productsSeeder() {
    const productRepo = new ProductRepositoryImpl();
    const createdProducts = [];
    const products = await productRepo.findAll();
    if (products.length < 1) {
        for (const productData of PRODUCTS) {
            try {
                const product = await productRepo.create(productData)
                createdProducts.push(product)
            } catch (err) {
                console.error(`Error creating product ${productData.name}: ${err.message}`);
            }
        }
        console.log(`Seeded ${createdProducts.length} products.`);
        return createdProducts;
    }
    console.log(`Not seeded, ${products.length} products already exist.`);
    return products;    
}