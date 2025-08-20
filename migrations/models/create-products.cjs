'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            discount: {
                type: Sequelize.DECIMAL(5, 2),
                defaultValue: 0.00
            },
            sku: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            dues: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            special: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'id'
                },
                onDelete: 'SET NULL'
            },
            licence_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'licences',
                    key: 'id'
                },
                onDelete: 'SET NULL'
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
        await queryInterface.dropTable('products');
    }
};