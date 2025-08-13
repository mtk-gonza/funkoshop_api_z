import { Sequelize } from 'sequelize';
import settings from './settings.js';

export const sequelize = new Sequelize(settings.DATABASE_URL, {
    dialect: settings.DB_DIALECT || 'sqlite',
    storage: settings.DB_STORAGE || './funkoshop.sqlite', 
    logging: false,
});

export async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión establecida correctamente.');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
    }
}

export async function createTables() {
    try {
        await import('./../../adapters/persistence/models/category_model.js');
        await import('./../../adapters/persistence/models/image_model.js');
        await import('./../../adapters/persistence/models/licence_model.js');
        await import('./../../adapters/persistence/models/product_model.js');
        await import('./../../adapters/persistence/models/product_spec_model.js');
        await import('./../../adapters/persistence/models/role_model.js');
        await import('./../../adapters/persistence/models/user_model.js');
        await import('./../../adapters/persistence/models/user_roles_model.js');
        await import('./../../adapters/persistence/models/associations.js');

        await sequelize.sync({ alter: true });
        console.log('✅ Tablas creadas o actualizadas.');
    } catch (error) {
        console.error('❌ Error creando tablas: ', error);
    }
}
