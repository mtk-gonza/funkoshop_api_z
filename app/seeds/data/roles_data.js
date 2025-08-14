import { RoleType } from './../../core/enums/role_type.js';

export const ROLES = [
    {
        name: RoleType.ROOT,
        description: 'System Administrator and all permissions'
    },
    {
        name: RoleType.ADMIN,
        description: 'System Administrator'
    },
    {
        name: RoleType.EDITOR,
        description: 'User with editing permissions'
    },
    {
        name: RoleType.USER,
        description: 'Basic User'
    },
    {
        name: RoleType.GUEST,
        description: 'Guest User'
    }
];