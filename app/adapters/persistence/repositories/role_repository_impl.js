import { RoleRepositoryPort } from './../../../core/ports/role_repository_port.js';
import { RoleModel } from './../models/role_model.js';
import { Role } from './../../../core/entities/role_entity.js';

export class RoleRepositoryImpl extends RoleRepositoryPort {
    constructor() {
        super();
    }
    #toEntity(roleInstance) {
        return new Role ({
            id: roleInstance.id,
            name: roleInstance.name,
            description: roleInstance.description,
            created_at: roleInstance.created_at,
            updated_at: roleInstance.updated_at
        })
    }
    async findAll() {
        const roles = await RoleModel.findAll();
        return roles.map(role => this.#toEntity(role));
    }

    async findById(id) {
        const role = await RoleModel.findByPk(id);
        return role ? this.#toEntity(role) : null;
    }

    async create(roleEntity) {
        const role = await RoleModel.create({
            name: roleEntity.name,
            description: roleEntity.description
        });
        return this.#toEntity(role);
    }

    async update(id, roleEntity) {
        const role = await RoleModel.findByPk(id);
        if (!role) return null;

        role.name = roleEntity.name ?? role.name;
        role.description = roleEntity.description ?? role.description;
        await role.save();

        return this.#toEntity(role);
    }

    async delete(id) {
        const role = await RoleModel.findByPk(id);
        if (!role) return null;
        await role.destroy();
        return this.#toEntity(role);
    }
}