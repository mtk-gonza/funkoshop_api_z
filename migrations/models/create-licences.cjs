'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('licences', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(60),
                allowNull: false,
                unique: true
            },
            description: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('licences');
    }
};