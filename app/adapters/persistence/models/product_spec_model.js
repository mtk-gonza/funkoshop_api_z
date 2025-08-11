import { DataTypes } from 'sequelize';
import { sequelize } from './../../../core/config/database.js';

export const ProductSpecification = sequelize.define('ProductSpecification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    key: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    value: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'product_specifications',
    timestamps: false
});