export const IMAGE_COLUMNS = {
    id: {
        type: 'INTEGER',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    path: {
        type: 'STRING(255)',
        allowNull: false
    },
    entity_type: {
        type: 'STRING(50)',
        allowNull: false
    },
    entity_id: {
        type: 'INTEGER',
        allowNull: false
    },
    image_type: {
        type: 'STRING(50)',
        allowNull: false
    },
    is_primary: {
        type: 'BOOLEAN',
        defaultValue: false
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