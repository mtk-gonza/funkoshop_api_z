import { Sequelize } from 'sequelize';
import settings from './settings.js';

const sequelizeOptions = {
    dialect: settings.DB_DIALECT || 'sqlite',
    logging: false
};

if ((settings.DB_DIALECT || 'sqlite') === 'sqlite') {
    sequelizeOptions.storage = settings.DB_STORAGE;
}

export const sequelize = new Sequelize(settings.DATABASE_URL, sequelizeOptions);

export async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log(`✅ Conexión establecida correctamente con ${settings.DB_DIALECT}.`);
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error.message);
    }
}

export async function createTables() {
    try {
        await import('./../adapters/persistence/models/category_model.js');
        await import('./../adapters/persistence/models/image_model.js');
        await import('./../adapters/persistence/models/licence_model.js');
        await import('./../adapters/persistence/models/product_model.js');
        await import('./../adapters/persistence/models/product_spec_model.js');
        await import('./../adapters/persistence/models/role_model.js');
        await import('./../adapters/persistence/models/user_model.js');
        await import('./../adapters/persistence/models/user_roles_model.js');
        await import('./../adapters/persistence/models/associations.js');

        await sequelize.sync({ alter: true });
        console.log('✅ Tablas creadas o actualizadas.');
    } catch (error) {
        console.error('❌ Error creando tablas:', error.message);
    }
}
