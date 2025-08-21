export const SPECIFICATION_COLUMNS = {
    id: {
        type: 'INTEGER',
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: 'INTEGER',
        allowNull: false
    },
    key: {
        type: 'STRING(60)',
        allowNull: false
    },
    value: {
        type: 'STRING(255)',
        allowNull: false
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