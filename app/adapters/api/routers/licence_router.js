import express from 'express';
import { z } from 'zod';
import { licenceUseCases } from './../dependencies.js';
import { LicenceCreateSchema, LicenceUpdateSchema, LicenceResponseSchema } from './../../../schemas/licence_schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = LicenceCreateSchema.parse(req.body);
        const licence = await licenceUseCases.createCategory(data);
        res.status(201).json(LicenceResponseSchema.parse(licence));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const licences = await licenceUseCases.listLicences();
        res.json(licences.map((licence) => LicenceResponseSchema.parse(licence)));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const licence = await licenceUseCases.getLicenceById(+req.params.id);
        res.json(LicenceResponseSchema.parse(licence));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = LicenceUpdateSchema.partial().parse(req.body);
        const licence = await licenceUseCases.updateLicence(+req.params.id, data);
        res.json(LicenceResponseSchema.parse(licence));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const licence = await licenceUseCases.deleteLicence(+req.params.id);
        res.json(LicenceResponseSchema.parse(licence));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;