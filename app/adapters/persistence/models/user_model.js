import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { USER_COLUMNS } from './../columns/user_columns.js'
import { sequelize } from './../../../config/database.js';

const mappedColumns = mapperColumns(USER_COLUMNS);

export const UserModel = sequelize.define('User', mappedColumns, {
    tableName: 'users',
    timestamps: false
});