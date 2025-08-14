import { ProductModel } from './product_model.js';
import { ProductSpecificationModel } from './product_spec_model.js';
import { LicenceModel } from './licence_model.js';
import { CategoryModel } from './category_model.js';
import { ImageModel } from './image_model.js';
import { UserModel } from './user_model.js';
import { RoleModel } from './role_model.js';
import { UserRolesModel } from './user_roles_model.js';
import { EntityType } from './../../../core/enums/entity_type.js';

ProductModel.hasMany(ProductSpecificationModel, {
    foreignKey: 'product_id',
    as: 'specifications'
});

ProductSpecificationModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    as: 'product'
});

ProductModel.belongsTo(LicenceModel, {
    foreignKey: 'licence_id',
    as: 'licence'
});
LicenceModel.hasMany(ProductModel, {
    foreignKey: 'licence_id',
    as: 'products'
});

ProductModel.belongsTo(CategoryModel, {
    foreignKey: 'category_id',
    as: 'category'
});

CategoryModel.hasMany(ProductModel, {
    foreignKey: 'category_id',
    as: 'products'
});

ProductModel.hasMany(ImageModel, {
    foreignKey: 'entity_id',
    as: 'images',
    scope: {
        entity_type: EntityType.PRODUCT
    },
    constraints: false
});

LicenceModel.hasMany(ImageModel, {
    foreignKey: 'entity_id',
    as: 'images',
    scope: {
        entity_type: EntityType.LICENCE
    },
    constraints: false
});

RoleModel.belongsToMany(UserModel, {
    through: UserRolesModel,
    as: 'users',
    foreignKey: 'role_id',
    otherKey: 'user_id'
});

UserModel.belongsToMany(RoleModel, {
    through: UserRolesModel,
    as: 'roles',
    foreignKey: 'user_id',
    otherKey: 'role_id'
});