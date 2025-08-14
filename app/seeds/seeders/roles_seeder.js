import { ROLES } from './../data/roles_data.js';
import { RoleRepositoryImpl } from './../../adapters/persistence/repositories/role_repository_impl.js';

export async function rolesSeeder() {
    const roleRepo = new RoleRepositoryImpl();
    const createdRoles = [];
    const roles = await roleRepo.findAll();
    if (roles.length < 1) {
        for (const roleData of ROLES) {
            try {
                const role = await roleRepo.create(roleData)
                createdRoles.push(role)
            } catch (err) {
                console.error(`Error creating role ${roleData.name}: ${err.message}`);
            }
        }
        console.log(`Seeded ${createdRoles.length} roles.`);
        return createdRoles;
    }
    console.log(`Not seeded, ${roles.length} roles already exist.`);
    return roles;    
}