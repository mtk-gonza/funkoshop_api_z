import { DataTypes } from 'sequelize';
import { sequelize } from './../../../core/config/database.js';

export const user_roles = sequelize.define('user_roles', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    tableName: 'user_roles',
    timestamps: false
});