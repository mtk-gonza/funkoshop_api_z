'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { PRODUCTS } = await import('./data/products_data.js');

        for (const product of PRODUCTS) {
            const { images, ...productData } = product;

            let productId = await queryInterface.rawSelect(
                'products',
                { where: {sku: productData.sku} },
                ['id']
            ); 

            if (!productId) {                
                await queryInterface.bulkInsert('products', [productData], {});
                productId  = await queryInterface.rawSelect(
                    'products',
                    { where: {sku: productData.sku} },
                    ['id']
                );
                if (images && images.length > 0) {
                    const imagesToInsert = images.map(image => ({
                        ...image,
                        entity_id: productId,
                    }));
                    await queryInterface.bulkInsert('images', imagesToInsert, {});
                }
            }
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('images', null, {});
        await queryInterface.bulkDelete('products', null, {});
    }
};