import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { SPECIFICATION_COLUMNS } from './../columns/specification_columns.js'
import { sequelize } from '../../../config/database.js';

const mappedColumns = mapperColumns(SPECIFICATION_COLUMNS);

export const SpecificationModel = sequelize.define('Specification', mappedColumns, {
    tableName: 'specifications',
    timestamps: false
});