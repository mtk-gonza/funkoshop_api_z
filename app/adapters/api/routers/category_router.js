import express from 'express';
import { z } from 'zod';
import { categoryUseCases } from './../dependencies.js';
import { CategoryCreateSchema, CategoryUpdateSchema, CategoryResponseSchema } from './../../../schemas/category_schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = CategoryCreateSchema.parse(req.body);
        const category = await categoryUseCases.createCategory(data);
        res.status(201).json(CategoryResponseSchema.parse(category));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await categoryUseCases.listCategories();
        res.json(categories.map((c) => CategoryResponseSchema.parse(c)));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const category = await categoryUseCases.getCategoryById(+req.params.id);
        res.json(CategoryResponseSchema.parse(category));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = CategoryUpdateSchema.partial().parse(req.body);
        const category = await categoryUseCases.updateCategory(+req.params.id, data);
        res.json(CategoryResponseSchema.parse(category));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const category = await categoryUseCases.deleteCategory(+req.params.id);
        res.json(CategoryResponseSchema.parse(category));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;