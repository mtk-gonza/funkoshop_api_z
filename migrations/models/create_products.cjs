'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { PRODUCT_COLUMNS } = await import('../../app/adapters/persistence/columns/product_columns.js');
        const { mapperColumns } = await import('../../app/core/utils/mapper_columns.js');

        const mappedColumns = mapperColumns(PRODUCT_COLUMNS, { forMigration: true });

        await queryInterface.createTable('products', mappedColumns);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('products');
    }
};