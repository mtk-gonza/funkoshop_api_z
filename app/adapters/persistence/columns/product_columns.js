export const PRODUCT_COLUMNS = {
    id: {
        type: 'INTEGER',
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: 'STRING(60)',
        allowNull: false
    },
    description: {
        type: 'STRING(255)',
        allowNull: true
    },
    price: {
        type: 'DECIMAL(10, 2)',
        allowNull: false,
        defaultValue: 0.00
    },
    stock: {
        type: 'INTEGER',
        allowNull: true
    },
    discount: {
        type: 'DECIMAL(5, 2)',
        defaultValue: 0.00
    },
    sku: {
        type: 'STRING(50)',
        allowNull: false,
        unique: true
    },
    dues: {
        type: 'INTEGER',
        defaultValue: 0
    },
    special: {
        type: 'BOOLEAN',
        defaultValue: false
    },
    licence_id: {
        type: 'INTEGER',
        allowNull: true
    },
    category_id: {
        type: 'INTEGER',
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