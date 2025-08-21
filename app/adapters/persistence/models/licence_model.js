import { mapperColumns } from './../../../core/utils/mapper_columns.js';
import { LICENCE_COLUMNS } from './../columns/licence_columns.js';
import { sequelize } from './../../../config/database.js';

const mappedColumns = mapperColumns(LICENCE_COLUMNS);

export const LicenceModel = sequelize.define('Licence', mappedColumns, {
    tableName: 'licences',
    timestamps: false
});