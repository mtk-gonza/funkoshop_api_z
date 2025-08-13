import { DataTypes } from 'sequelize';
import { sequelize } from './../../../config/database.js';

export const ImageModel = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    entity_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    entity_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'images',
    timestamps: false
});