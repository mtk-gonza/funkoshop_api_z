'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('images', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            path: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            entity_type: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            entity_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            image_type: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            is_primary: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
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
        await queryInterface.dropTable('images');
    }
};