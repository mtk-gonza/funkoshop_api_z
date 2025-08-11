import { Product } from './product_model.js';
import { ProductSpecification } from './product_spec_model.js';
import { Licence } from './licence_model.js';
import { Category } from './category_model.js';
import { Image } from './image_model.js';
import { User } from './user_model.js';
import { Role } from './role_model.js';
import { user_roles } from './user_roles_model.js';

Product.hasMany(ProductSpecification, {
    foreignKey: 'product_id',
    as: 'specifications'
});

ProductSpecification.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});

Product.belongsTo(Licence, {
    foreignKey: 'licence_id',
    as: 'licence'
});
Licence.hasMany(Product, {
    foreignKey: 'licence_id',
    as: 'products'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products'
});

Product.hasMany(Image, {
    foreignKey: 'entity_id',
    as: 'images',
    scope: {
        entity_type: 'product'
    },
    constraints: false
});

Licence.hasMany(Image, {
    foreignKey: 'entity_id',
    as: 'images',
    scope: {
        entity_type: 'licence'
    },
    constraints: false
});

Role.belongsToMany(User, {
    through: user_roles,
    as: 'users',
    foreignKey: 'role_id',
    otherKey: 'user_id'
});

User.belongsToMany(Role, {
    through: user_roles,
    as: 'roles',
    foreignKey: 'user_id',
    otherKey: 'role_id'
});
