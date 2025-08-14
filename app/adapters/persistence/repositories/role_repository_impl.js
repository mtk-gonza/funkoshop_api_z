import { RoleRepositoryPort } from '../../../core/ports/role_repository_port.js';
import { RoleModel } from '../models/role_model.js';
import { Role } from '../../../core/entities/role_entity.js';

export class RoleRepositoryImpl extends RoleRepositoryPort {
    constructor() {
        super();
    }

    async findAll() {
        const roles = await RoleModel.findAll();
        return roles.map(
            (role) =>
                new Role({
                    id: role.id,
                    name: role.name,
                    description: role.description,
                    created_at: role.created_at,
                    updated_at: role.updated_at
                })
        );
    }

    async findById(id) {
        const role = await RoleModel.findByPk(id);
        if (!role) return null;
        return new Role({
            id: role.id,
            name: role.name,
            description: role.description,
            created_at: role.created_at,
            updated_at: role.updated_at
        });
    }

    async create(roleEntity) {
        const role = await RoleModel.create({
            name: roleEntity.name,
            description: roleEntity.description
        });

        return new Role({
            id: role.id,
            name: role.name,
            description: role.description,
            created_at: role.created_at,
            updated_at: role.updated_at
        });
    }

    async update(id, roleEntity) {
        const role = await RoleModel.findByPk(id);
        if (!role) return null;

        role.name = roleEntity.name ?? role.name;
        role.description = roleEntity.description ?? role.description;

        await role.save();

        return new Role({
            id: role.id,
            name: role.name,
            description: role.description,
            created_at: role.created_at,
            updated_at: role.updated_at
        });
    }

    async delete(id) {
        const role = await RoleModel.findByPk(id);
        if (!role) return null;

        await role.destroy();
        return new Role({
            id: role.id,
            name: role.name,
            description: role.description,
            created_at: role.created_at,
            updated_at: role.updated_at
        });
    }
}