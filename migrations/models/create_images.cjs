'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { IMAGE_COLUMNS } = await import('../../app/adapters/persistence/columns/image_columns.js');
        const { mapperColumns } = await import('../../app/core/utils/mapper_columns.js');
       
        const mappedColumns = mapperColumns(IMAGE_COLUMNS, { forMigration: true });
       
        await queryInterface.createTable('images', mappedColumns);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('images');
    }
};