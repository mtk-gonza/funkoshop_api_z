import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { IMAGE_COLUMNS } from './../columns/image_columns.js'
import { sequelize } from './../../../config/database.js';

const mappedColumns = mapperColumns(IMAGE_COLUMNS);

export const ImageModel = sequelize.define('Image', mappedColumns, {
    tableName: 'images',
    timestamps: false
});