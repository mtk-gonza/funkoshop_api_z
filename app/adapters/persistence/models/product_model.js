import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { PRODUCT_COLUMNS } from './../columns/product_columns.js';
import { sequelize } from './../../../config/database.js';

const mappedColumns = mapperColumns(PRODUCT_COLUMNS);

export const ProductModel = sequelize.define('Product', mappedColumns, {
    tableName: 'products',
    timestamps: false
});