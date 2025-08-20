import express from 'express';
import { z } from 'zod';
import { userUseCases } from './../dependencies.js';
import { UserCreateSchema, UserUpdateSchema, UserResponseSchema } from './../../../schemas/user_schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = UserCreateSchema.parse(req.body);
        const user = await userUseCases.createCategory(data);
        res.status(201).json(UserResponseSchema.parse(user));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await userUseCases.listUsers();
        res.json(users.map((user) => UserResponseSchema.parse(user)));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await userUseCases.getUserById(+req.params.id);
        res.json(UserResponseSchema.parse(user));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = UserUpdateSchema.partial().parse(req.body);
        const user = await userUseCases.updateUser(+req.params.id, data);
        res.json(UserResponseSchema.parse(user));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await userUseCases.deleteUser(+req.params.id);
        res.json(UserResponseSchema.parse(user));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;