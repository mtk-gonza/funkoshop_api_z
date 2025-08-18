import express from 'express';
import { z } from 'zod';
import { specificationUseCases} from './../dependencies.js';
import { SpecificationCreateSchema, SpecificationUpdateSchema, SpecificationResponseSchema } from './../../../schemas/specification_schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = SpecificationCreateSchema.parse(req.body);
        const specification = await specificationUseCases.createSpecification(data);
        res.status(201).json(SpecificationResponseSchema.parse(specification));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const specifications = await specificationUseCases.listSpecifications();
        res.json(specifications.map((spec) => SpecificationResponseSchema.parse(spec)));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const specification = await specificationUseCases.getSpecificationById(+req.params.id);
        res.json(SpecificationResponseSchema.parse(specification));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = SpecificationUpdateSchema.partial().parse(req.body);
        const specification = await specificationUseCases.updateSpecification(+req.params.id, data);
        res.json(SpecificationResponseSchema.parse(specification));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const specification = await specificationUseCases.deleteSpecification(+req.params.id);
        res.json(SpecificationResponseSchema.parse(specification));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;