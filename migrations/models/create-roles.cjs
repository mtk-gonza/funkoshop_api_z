'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { ROLE_COLUMNS } = await import('./../../app/adapters/persistence/columns/role_columns.js');
        const { mapperColumns } = await import('./../../app/core/utils/mapper_columns.js');

        const mappedColumns = mapperColumns(ROLE_COLUMNS, { forMigration: true });

        await queryInterface.createTable('roles', mappedColumns);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('roles');
    }
};