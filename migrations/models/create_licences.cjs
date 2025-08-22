'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { LICENCE_COLUMNS } = await import('../../app/adapters/persistence/columns/licence_columns.js');
        const { mapperColumns } = await import('../../app/core/utils/mapper_columns.js');

        const mappedColumns = mapperColumns(LICENCE_COLUMNS, { forMigration: true });

        await queryInterface.createTable('licences', mappedColumns);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('licences');
    }
};