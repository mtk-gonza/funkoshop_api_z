import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { CATEGORY_COLUMNS } from './../columns/category_columns.js';
import { sequelize } from './../../../config/database.js';

const mappedColumns = mapperColumns(CATEGORY_COLUMNS);

export const CategoryModel = sequelize.define('Category', mappedColumns, {
    tableName: 'categories',
    timestamps: false
});