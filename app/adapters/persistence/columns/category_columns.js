export const CATEGORY_COLUMNS = {
    id: {
        type: 'INTEGER',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: 'STRING(60)',
        allowNull: false,
        unique: true
    },
    description: {
        type: 'STRING(255)',
        allowNull: true
    },
    created_at: {
        type: 'DATE',
        allowNull: false,
        defaultValue: 'CURRENT_TIMESTAMP'
    },
    updated_at: {
        type: 'DATE',
        allowNull: false,
        defaultValue: 'CURRENT_TIMESTAMP'
    }
};