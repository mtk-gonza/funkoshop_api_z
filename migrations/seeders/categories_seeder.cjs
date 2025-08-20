'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { CATEGORIES } = await import('./data/categories_data.js');

        for (const category of CATEGORIES) {
            const exists = await queryInterface.rawSelect('categories', {
                where: { name: category.name },
            }, ['id']);

            if (!exists) {
                await queryInterface.bulkInsert('categories', [category]);
            }
        }
    },

    async down(queryInterface, Sequelize) {
        const { CATEGORIES } = await import('./data/categories_data.js');
        await queryInterface.bulkDelete('categories', {
            name: CATEGORIES.map(cat => cat.name)
        });
    }
};
