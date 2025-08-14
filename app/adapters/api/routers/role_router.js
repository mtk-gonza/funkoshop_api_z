import express from 'express';
import { z } from 'zod';
import { roleUseCases } from './../dependencies.js';
import { RoleCreateSchema, RoleUpdateSchema, RoleResponseSchema } from './../../../schemas/role_schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = RoleCreateSchema.parse(req.body);
        const role = await roleUseCases.createRole(data);
        res.status(201).json(RoleResponseSchema.parse(role));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const roles = await roleUseCases.listRoles();
        res.json(roles.map((role) => RoleResponseSchema.parse(role)));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const role = await roleUseCases.getRoleById(+req.params.id);
        res.json(RoleResponseSchema.parse(role));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = RoleUpdateSchema.partial().parse(req.body);
        const role = await roleUseCases.updateRole(+req.params.id, data);
        res.json(RoleResponseSchema.parse(role));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const role = await roleUseCases.deleteRole(+req.params.id);
        res.json(RoleResponseSchema.parse(role));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;