import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { USER_ROLES_COLUMNS } from './../columns/user_roles_columns.js'
import { sequelize } from './../../../config/database.js';

const mappedColumns = mapperColumns(USER_ROLES_COLUMNS);

export const UserRolesModel = sequelize.define('user_roles', mappedColumns, {
    tableName: 'user_roles',
    timestamps: false
});